<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Order</h2>
    <!-- sale ID -->
    <InputBox
      v-if="editMode"
      label="Order ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />
    <!-- order number-->
    <InputBox label="Order Number" v-model="doc.number" :disabled="true" />
    <!-- payment gateway -->
    <InputBox
      label="Payment Gateway"
      v-model="doc.paymentGateway"
      :disabled="true"
    />
    <!-- transaction id -->
    <InputBox
      label="Transaction ID"
      v-model="doc.transactionId"
      :disabled="true"
    />
    <!-- amount -->
    <InputBox label="Amount" v-model="doc.amount" :disabled="true" />
    <!-- delivery address -->
    <div class="delivery-address">
      <!-- label delivery address -->
      <label class="label"> Delivery Address: </label>
      <p class="name">
        {{ doc.deliveryAddress.firstName }} {{ doc.deliveryAddress.surName }}
      </p>
      <p>{{ doc.deliveryAddress.mobileNumber }}</p>
      <p>{{ doc.deliveryAddress.email }}</p>
      <p>{{ doc.deliveryAddress.addressLine1 }}</p>
      <p>{{ doc.deliveryAddress.addressLine2 }}</p>
      <p>{{ doc.deliveryAddress.city }}</p>
      <p>{{ doc.deliveryAddress.postalCode }}</p>
    </div>

    <!-- combined delivery consent -->
    <br />
    <div class="combined-delivery-consent">
      <label class="label"> Combined Delivery Consent: </label>
      <span class="note">
        {{
          doc.combinedDeliveryConsent
            ? "Opted for combined delivery"
            : "Individual Deliveries preferred."
        }}
      </span>
    </div>

    <!-- order is a gift -->
    <div
      v-if="doc.giftMessage !== undefined && doc.giftMessage.status === true"
      class="order-is-a-gift"
    >
      <label class="label"> Gifting: </label>
      <GiftMessage :value="doc.giftMessage" :disabled="true" />
    </div>

    <!-- order items -->
    <div class="items">
      <!-- label order items -->
      <label class="label"> Ordered Item(s): </label>
      <div class="item" v-for="(subOrder, index) in doc.items" :key="index">
        <OrderItem
          :orderId="doc._id"
          :item="subOrder"
          :allowUpdate="false"
          @subOrderUpdated="refetchDoc"
          :orderCurrency="doc.currency"
        />
      </div>
    </div>

    <!-- shipping charges -->
    <div class="extra-charges">
      <p>Cart Total: {{ doc.currency }} {{ cartTotal }}</p>
      <p>Subtotal: {{ doc.currency }} {{ doc.subTotal / 100 }}</p>
      <p>Discount: {{ doc.currency }} {{ doc.discountValue / 100 }}</p>
      <p>Shipping: {{ doc.currency }} {{ doc.shippingCharge / 100 }}</p>
      <p>Grand Total: {{ doc.currency }} {{ doc.amount / 100 }}</p>
    </div>

    <!-- update order status -->
    <!-- <SelectBox :options="allStatusOptions" v-model="doc.list" label="Select Product List" /> -->

    <!-- update button -->
    <div class="center-space">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Update" : "Add" }} Order
      </button>
      <!-- delete document -->
      <button
        v-if="editMode && inDevelopment"
        @click="deleteDocument"
        class="action delete"
        :disabled="loading"
      >
        Delete
      </button>

      <!-- download invoice -->
      <button @click="downloadInvoice">Download Invoice</button>
    </div>
  </div>
</template>

<script>
import jsPDFInvoiceTemplate from "../../../helpers/pdfHelper";
import {
  invoiceItemsINR,
  invoiceItemsUSD,
} from "../../../helpers/invoiceItems";
const baseDoc = () => ({
  _id: "",
  items: [],
  number: "",
  paymentGateway: "",
  transactionId: "",
  amount: "",
  currency: "",
  subTotal: "",
  discountValue: "",
  shippingCharge: "",
  combinedDeliveryConsent: false,
  giftMessage: { status: false },
  deliveryAddress: {
    firstName: "",
    surName: "",
    mobileNumber: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
  },
  status: false,
});
export default {
  props: {
    model: String,
  },
  data() {
    return {
      editMode: false,
      doc: baseDoc(),
      allProductLists: [],
      loading: false,
      updated: false,
    };
  },
  mounted() {
    // this.fetchAllProductLists();
  },
  computed: {
    cartTotal() {
      return (
        (parseInt(this.doc.subTotal) + parseInt(this.doc.discountValue)) / 100
      );
    },
    inDevelopment() {
      return process.env.NODE_ENV === "development";
    },
  },
  methods: {
    async updateDocument() {
      this.loading = true;
      const result = await this.$updateDocument(
        this.model,
        this.doc,
        this.editMode
      );
      this.loading = false;
      console.log(result.doc);
      if (!result.updated) return;

      this.$emit("updated");
      this.populateForm(result.doc);
      this.$flash(this);
    },
    async deleteDocument() {
      this.loading = true;
      const result = await this.$deleteDocument(this.model, this.doc._id);
      this.loading = false;

      if (!result.deleted) return;

      this.$emit("updated");
      this.resetForm();
      this.$flash(this);
    },
    async refetchDoc() {
      const result = await this.$fetchDocument("orders", this.doc._id, "admin");

      if (!result.fetched) {
        return;
      }
      console.log(result, "--FROM REFETCH DOC");
      this.populateForm(result.doc);
    },
    populateForm(details) {
      console.log("POPULATE WAS CALLED");
      const {
        _id,
        items,
        number,
        paymentGateway,
        transactionId,
        currency,
        amount,
        subTotal,
        combinedDeliveryConsent,
        giftMessage,
        discountValue,
        shippingCharge,
        deliveryAddress,
        status,
      } = details;

      this.doc = {
        _id,
        items,
        number,
        paymentGateway,
        currency,
        transactionId,
        amount,
        subTotal,
        combinedDeliveryConsent,
        giftMessage,
        shippingCharge,
        discountValue,
        deliveryAddress,
      };
      this.editMode = true;
      this.$forceUpdate();
    },
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    resetForm() {
      this.populateForm(baseDoc());
      this.editMode = false;
    },
    downloadInvoice() {
      
      

      const props = {
        outputType: "save",
        returnJsPDFDocObject: true,
        fileName: "Invoice 2021",
        orientationLandscape: true,
        logo: {
          src: "https://bounipun.in/icons/light/logo-wok.png",
          width: 56.4, //aspect ratio = width/height
          height: 14.5,
          margin: {
            top: 0, //negative or positive num, from the current position
            left: 0, //negative or positive num, from the current position
          },
        },
        business: {
          name: "Bounipun",
          address:
            "H-30 Integrated Textile and Handicraft Park Zakura, Srinagar, Jammu and Kashmir, India, 190024",
          phone:
            "GST No: GSTINXXXXXXXX  |  (+91) 91030-77655, (+91) 78897-77377",
          email: "care@bounipun.in",
          email_1: "contact@bounipun.in",
          website: "www.bounipun.in",
        },
        contact: {
          label: "CONSIGNEE:",
          name: "Suhaib Khan",
          address: "H.no.54, Chinar Enclave, Rawalpora, Srinagar, Jammu and Kashmir",
          phone: "(+91) 99066-97711",
          email: "hello@saibbyweb.com",
          otherInfo: "GST:",
        },
        invoice: {
          label: "Invoice #: BP-ORDER-010",
          num: "",
          invDate: "Payment Date: 22 June, 2022 - 15:36:31 IST  ",
          // gateway
          invGenDate: "Stripe | Transaction Id: pi_1L2VzbLdxwZUT01QC7t1G40F",
          headerBorder: 2,
          tableBodyBorder: 2,
          header: [
            {
              title: "S.no",
              style: {
                width: 7,
              },
            },
            {
              title: "StyleId",
              style: {
                width: 38,
              },
            },
            {
              title: "Product",
              style: {
                width: 30,
              },
            },
            {
              title: "Variant",
              style: {
                width: 13,
              },
            },
            {
              title: "Collection",
              style: {
                width: 16,
              },
            },
            {
              title: "Color",
              style: {
                width: 24,
              },
            },
            {
              title: "HSN",
              style: {
                width: 9,
              },
            },
            {
              title: "Rate",
              style: {
                width: 16,
              },
            },
            {
              title: "Discount",
              style: {
                width: 14,
              },
            },
            {
              title: "Qty",
              style: {
                width: 8,
              },
            },
            {
              title: "Taxable Value",
              style: {
                width: 18,
              },
            },
            {
              title: "SGST %",
              style: {
                width: 12,
              },
            },
            {
              title: "SGST Amt",
              style: {
                width: 14,
              },
            },
            {
              title: "CGST %",
              style: {
                width: 12,
              },
            },
            {
              title: "CGST Amt",
              style: {
                width: 14,
              },
            },
            {
              title: "GST",
              style: {
                width: 15,
              },
            },
            {
              title: "Total",
              style: {
                width: 17,
              },
            },
          ],
          table: invoiceItemsUSD.map((item, index) => [
            index + 1,
            item.styleId,
            item.product,
            "Shawl",
            item.collection,
            item.color,
            item.hsnCode,
            item.rate,
            item.discount,
            item.qty,
            item.amountBeforeGst,
            item.sgst,
            "226",
            item.cgst,
            "226",
            item.gstAmount,
            item.total,
          ]),
          additionalRows: [
            {
              col1: "Sub Total (Tax Exclusive):",
              // col2: "278392.00",
              col2: "2202.53",
              // col3: "INR",
              col3: "USD",
              style: {
                fontSize: 10, //optional, default 12
              },
            },
            {
              col1: "GST:",
              // col2: "31876.00",
              col2: "0",
              // col3: "INR",
              col3: "USD",
              style: {
                fontSize: 10, //optional, default 12
              },
            },
            {
              col1: "Shipping:",
              // col2: "31876.00",
              col2: "0",
              // col3: "INR",
              col3: "USD",
              style: {
                fontSize: 10, //optional, default 12
              },
            },
            {
              col1: "Total:",
              // col2: "311800.00",
              col2: "2202.53",
              // col3: "INR",
              col3: "USD",
              style: {
                fontSize: 14, //optional, default 12
              },
            },
          ],
          invDescLabel: "Terms & Condition",
          invDesc:
            " 1) Goods once sold can not be taken back. \n 2) Please check goods before delivery. \n 3) Minor imperfection of the product are part of human error \n 4) Size differences might occur between different products. \n 5) 100% Payment before deliver of goods \n 6) All disputes subject to Srinagar Jurisdiction.",
        },
        footer: {
          text: "The invoice is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
      };
      console.log(jsPDFInvoiceTemplate);
      var pdfCreated = jsPDFInvoiceTemplate(props);
      // pdfCreated.jsPDFDocObject
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  margin: 10px;
  padding: 5px 5px 30px 5px;
  border-radius: 5px;
  overflow: hidden;
}

.label {
  font-family: $font_2_bold;
  color: $gray;
  text-transform: uppercase;
  font-size: 10px;
  padding: 2%;
  margin-left: 5px;
  font-weight: 900;
}
.delivery-address {
  p {
    padding: 0 15px;
    color: $gray;
    font-family: $font_2;
    font-size: 13px;
    letter-spacing: 0.5px;

    &.name {
      font-family: $font_1;
      font-weight: 700;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.651);
    }
  }
}
.combined-delivery-consent {
  display: flex;

  .note {
    background-color: rgb(73, 73, 159);
    color: white;
    padding: 5px 10px;
    font-size: 11px;
  }
}

.items {
  margin-top: 10px;
}
</style>

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
        {{ editMode ? "Edit" : "Add" }} Order
      </button>
      <!-- delete document -->
      <button
        v-if="editMode"
        @click="deleteDocument"
        class="action delete"
        :disabled="loading"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
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
  deliveryAddress: {
    firstName: "",
    surName: "",
    mobileNumber: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: ""
  },
  status: false
});
export default {
  props: {
    model: String
  },
  data() {
    return {
      editMode: false,
      doc: baseDoc(),
      allProductLists: [],
      loading: false,
      updated: false
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
    }
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
      const result = await this.$fetchDocument('orders', this.doc._id, "admin");

      if (!result.fetched) {
        return;
      }
      console.log(result,'--FROM REFETCH DOC')
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
        discountValue,
        shippingCharge,
        deliveryAddress,
        status
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
        shippingCharge,
        discountValue,
        deliveryAddress
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
    }
  }
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

.items {
  margin-top: 10px;
}
</style>

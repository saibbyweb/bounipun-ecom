<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">
      {{ editMode ? "Update" : "Create New" }} Payment Link
    </h2>

    <!-- preview link -->
    <div class="center" style="gap: 3px">
      <a v-if="editMode" :href="previewLink" target="_blank">
        <span
          style="
            background: #333;
            text-align: center;
            color: white;
            font-size: 12px;
            padding: 2px 4px;
            border-radius: 2px;
          "
        >
          Preview Payment Link ➚
        </span>
      </a>
    </div>

    <div :class="{paid: doc.paid}"  class="flex center" style="gap: 5%; margin-top: 20px">
      <!-- payee details -->
      <div class="section flex col" style="width: 40%">
        <!-- payment link ID -->
        <InputBox
          v-if="editMode"
          label="Pop ID"
          v-model="doc._id"
          disabled
          :internal="true"
        />

        <label class="label" style="text-align: center; width: 90%; font-size: 16px;">
         Payee Details:
        </label>
        <!-- <span class="desc">
          Payment cannot be made without OTP verifying the number
        </span> -->

        <br/>

        <div class="flex center col" style="padding: 0 5%">
          <!-- country selection -->
          <label class="label" style="text-align: left; width: 90%">
            Country:
          </label>

          <CountrySelect
            v-model="doc.countryCode"
            :initialValue="`${countryCode}`"
            :lock="false"
          />

          <DeliveryInput
            v-model="doc.phoneNumber"
            label="Payee Phone Number"
            :isMobileNumber="true"
            :countryCode="doc.countryCode"
            :error="{ status: false }"
          />
        </div>

        <!-- payee name -->
        <InputBox label="Payee Name" v-model="doc.payeeName" />

        <!-- client email -->
        <InputBox type="text" label="Payee Email" v-model="doc.email" />

        <!-- currency type -->
        <SelectBox
          :options="currencies"
          v-model="doc.currency"
          label="Select Currency"
        />
      </div>


      <!-- validity range -->
      <div class="validity-range flex col">
        <!-- link name -->
        <InputBox label="Payment For (Challan No, Invoice No)" v-model="doc.name" :internal="true" />
        <br />
        <label class="label"> Validity Range: </label>
        <client-only>
          <v-datepicker
            color="blue"
            is-range
            v-model="doc.validityRange"
            :from-date="doc.validityRange.start"
          />
        </client-only>
      </div>
    </div>

    <!-- items -->
    <div :class="{paid: doc.paid}"  class="flex col" style="gap: 10px">
      <label class="label"> Items: </label>
      <!-- <Draggable
        v-model="doc.items"
        ghost-class="ghost"
        :sort="true"
        class="items"
      >
        <transition-group type="transition" name="flip-list"> -->
      <PaymentLinkItem
        v-for="(item, index) in doc.items"
        :initialValue="item"
        :currency="doc.currency"
        :key="item.key ? item.key : item._id"
        :index="index"
        :allProducts="allProducts"
        @update="updateItems"
        @remove="removeItem"
        @totalChanged="calculateAmount"
      />
      <!-- </transition-group>
      </Draggable> -->
      <!-- add new item -->
      <div class="flex center">
        <button @click="addNewItem()" class="action">Add New Item</button>
      </div>
    </div>

    <!-- total amount -->
    <div class="total-amount">
      <span> Total Payable Amount: </span>
      <h1>{{ doc.amount }} {{ doc.currency }}</h1>
    </div>

    <!-- notify client (box and send option) -->
    <div v-if="editMode" class="section notify-client flex col center">
      <TextBox
        v-model="notifyClientText"
        label="Invite Text"
        :internal="true"
      />
      <!-- send payment link -->
      <div class="actions flex around">
        <!-- sms invoice -->
        <!-- <button class="action small" @click="notifyVia('sms')">
          SMS Invoice to {{ doc.countryCode + doc.phoneNumber }}
        </button> -->
        <!-- email invoice  -->
        <button :disabled="doc.paid" class="action small" @click="notifyVia('email')">
          Email Invoice to {{ doc.email }}
        </button>
      </div>
      <!-- info -->
      <br />
      <span
        v-if="notify.done"
        class="msg info"
        style="background-color: #efefef; padding: 2px 7px; font-size: 13px"
      >
        {{ notify.msg }}
      </span>

      <!-- notify-log -->
      <label class="label"> Notify Log: </label>

      <table v-if="doc.notifyLog.length > 0" class="notify-log" style="width: 100%; font-size: 12px">
        <!-- heading -->
        <tr class="heading">
          <td>Mode</td>
          <td>To</td>
          <td>Timestamp</td>
        </tr>

        <!-- details -->
        <tr v-for="item in doc.notifyLog" :key="item._id">
          <td>{{ item.mode.toString() }}</td>
          <td>{{ item.to }}</td>
          <td>{{ $formatDate(item.timestamp) }}</td>
        </tr>
      </table>
    </div>

    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />

    <!-- paid flag
    <div class="paid-flag">{{ doc.paid ? "Paid" : "Unpaid" }}</div> -->

    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />
    <!-- update button -->
    <div class="center-space" style="width: 70%">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Apply Changes" : "Create Payment Link" }}
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

      <!-- error toast -->
      <Toast
        v-if="errorToast.status"
        :msg="errorToast.msg"
        :show="errorToast.status"
        :error="true"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

/* base item */
const baseItem = () => ({
  key: uuidv4(),
});

/* base doc */
const baseDoc = () => ({
  _id: "",
  name: "",
  payeeName: "",
  countryCode: "+91",
  phoneNumber: "",
  email: "",
  currency: "INR",
  items: [baseItem()],
  validityRange: {
    start: new Date(),
    end: new Date(),
  },
  paid: false,
  amount: 0,
  notifyLog: [],
  description: "",
  status: false,
});

export default {
  props: {
    model: String,
  },
  data() {
    return {
      editMode: false,
      currencies: [],
      doc: baseDoc(),
      items: [],
      loading: false,
      updated: false,
      errorToast: {
        status: false,
        msg: "",
      },
      countryDialCode: "+91",
      allProducts: [],
      currency: "INR",
      notifyClientText: "",
      notify: {
        done: false,
        msg: "",
      },
    };
  },
  mounted() {
    this.fetchActiveCurrencies();
    this.fetchAllProducts();
  },
  computed: {
    previewLink() {
      return `/payment-link?id=${this.doc._id}`;
    },
  },
  methods: {
    async notifyVia(mode) {
      /* send invoice via */
      const notifyRequest = await this.$post("/paymentLinkNotification", {
        mode,
        email: this.doc.email,
        countryDialCode: this.doc.countryCode,
        phoneNumber: this.doc.phoneNumber,
        text: this.notifyClientText,
        details: {
          payeeName: this.doc.payeeName,
          for: this.doc.name,
          amount: this.doc.amount,
          currency: this.doc.currency,
          dueDate: this.$formatDate(this.doc.validityRange.end),
          linkId: this.doc._id,
        },
      });

      /* if notify request failed */
      if (!notifyRequest.resolved) {
        this.setNotifyResponse(true, `❌ Couldn't process notify request.`);
        return;
      }

      if (mode === "email")
        this.setNotifyResponse(`✅ Invoice sent to ${this.doc.email}`);
      else if (mode === "sms")
        this.setNotifyResponse(
          `✅ Invoice sent to ${this.doc.countryCode}${this.doc.phoneNumber}`
        );

      this.updateDocument();

      setTimeout(() => (this.notify.done = false), 5000);
    },
    setNotifyResponse(msg) {
      this.notify.done = true;
      this.notify.msg = msg;
    },
    setNotifyClientText() {
      return `Hi ${this.doc.payeeName}, view your Bounipun invoice at ${this.previewLink}`;
    },
    calculateAmount() {
      this.doc.amount = this.items.reduce((sum, curr) => sum + curr.total, 0);
    },
    updateItems(payload) {
      //   this.items[payload.index] = payload.value;
      this.$set(this.items, payload.index, payload.value);
    },
    async fetchAllProducts() {
      const result = await this.$fetchCollection("products");
      this.allProducts = result.docs.map((product) => {
        const { _id, styleId, name } = product;
        return {
          _id,
          name: `${styleId} - (${name})`,
          product,
        };
      });
    },
    async fetchActiveCurrencies() {
      const request = await this.$post("/findDocuments", {
        model: "currency",
        filters: {
          adminEnabled: true,
          status: true,
        },
      });

      if (request.resolved == false) {
        return;
      }

      const currencies = request.response;

      this.currencies = currencies.map((c) => ({
        name: c.name,
        value: c.code,
      }));
      this.currencies.unshift({ name: "Indian Rupee", value: "INR" });
    },
    addNewItem() {
      this.doc.items.push(baseItem());
    },
    removeItem(index) {
      this.doc.items.splice(index, 1);
      this.items.splice(index, 1);
      this.calculateAmount();
    },
    async updateDocument() {
      this.loading = true;
      const doc = {...this.doc}
      delete doc.notifyLog;
      const result = await this.$updateDocument(
        this.model,
        { ...doc, items: this.items },
        this.editMode
      );
      this.loading = false;

      if (!result.updated) {
        this.errorToast.status = true;
        this.errorToast.msg =
          result.msg !== undefined ? result.msg : "Something went wrong";
        setTimeout(() => (this.errorToast.status = false), 2200);
        return;
      }

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
    populateForm(details) {
      const {
        _id,
        name,
        payeeName,
        countryCode,
        phoneNumber,
        email,
        currency,
        validityRange,
        amount,
        description,
        items,
        paid,
        notifyLog,
        status,
      } = details;

      this.doc = {
        _id,
        name,
        payeeName,
        countryCode,
        phoneNumber,
        email,
        currency,
        validityRange: validityRange ?? { start: new Date(), end: new Date() },
        amount,
        items,
        description,
        paid,
        notifyLog: notifyLog ?? [],
        status,
      };
      this.countryCode = this.doc.countryCode;
      this.notifyClientText = this.setNotifyClientText();

      this.editMode = true;
    },
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    resetForm() {
      this.items = [];
      this.populateForm(baseDoc());
      this.editMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.contents {
  position: relative;
  overflow: scroll;
}

.section {
  position: relative;
  margin: 10px;
  border: 1px dashed #efefef;
  padding: 5px 5px 30px 5px;
  border-radius: 5px;
  //   overflow: hidden;
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

.desc {
  font-size: 11px;
  margin-left: 3%;
  color: gray;
}
.total-amount {
  position: fixed;
  bottom: 30%;
  left: 10%;
  background: #333;

  padding: 10px 20px;

  span {
    color: white;
  }

  h1 {
    color: white;
  }
}

.actions {
  .action {
    text-transform: lowercase;
    font-family: $font_1;
  }
}
.notify-log {
  .heading {
    td {
      font-family: $font_1_bold;
    }
  }
  td {
    border: 1px solid #efefef;
    font-family: $font_1;
    text-align: center;
  }
}

.paid {
  pointer-events:none;
  background-color: rgb(168, 214, 168);
  border-radius: 10px;
}
</style>

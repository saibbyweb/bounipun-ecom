<template>
  <div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading">{{ editMode ? "Update" : "Add New" }} Popup</h2>

    <!-- close demo popup -->
    <img
      v-if="showDemo"
      style="
        position: fixed;
        right: 0;
        top: 0;
        background-color: #111;
        padding: 1%;
        z-index: 13;
        cursor: pointer;
      "
      src="/icons/light/close.png"
      @click="showDemo = false"
    />

    <!-- demo popup -->
    <Popup
      v-if="showDemo"
      :_id="doc._id"
      :image="doc.image"
      :text="doc.text"
      :text1="doc.text1"
      :text2="doc.text2"
      :text3="doc.text3"
      :persist="doc.persist"
      :actionURL="doc.actionURL"
      :delayInMinutes="0"
    />

    <!-- preview link -->
    <div class="center" style="gap: 3px">
      <a v-if="editMode" :href="`/popup-test`" target="_blank">
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
          Test Popup ➚
        </span>
      </a>
      <a v-if="editMode" href="#">
        <span
          @click="showDemo = !showDemo"
          style="
            background: #333;
            text-align: center;
            color: white;
            font-size: 12px;
            padding: 2px 4px;
            border-radius: 2px;
          "
        >
          Preview Popup ➚
        </span>
      </a>
    </div>

    <!-- Popup ID -->
    <InputBox
      v-if="editMode"
      label="Pop ID"
      v-model="doc._id"
      disabled
      :internal="true"
    />

    <!-- popup name -->
    <InputBox label="Popup Name" v-model="doc.name" :internal="true" />

    <!-- popup image -->
    <UploadImage
      ref="imageUploader"
      :multipleUpload="false"
      label="Set Popup Image Header - 310px x 400px (w x h)"
      @updated="imageListUpdated($event, 'image')"
    />

    <div class="flex center">
      <!-- visibility -->
      <div>
        <label class="label"> Visibility </label>
        <SelectBox
          v-model="doc.visibility"
          :options="[
            { name: 'Guests', value: 'guests' },
            { name: 'Registered Users', value: 'registered-users' },
            { name: 'Both', value: 'both' },
          ]"
        />
      </div>
      <!-- category -->
      <div>
        <label class="label"> Category </label>
        <SelectBox
          v-model="doc.category"
          :options="[
            { name: 'Normal', value: 'normal' },
            { name: 'Coupon', value: 'coupon' },
          ]"
        />
      </div>

      <!-- coupon list (if category is coupon) -->
      <div v-if="doc.category === 'coupon'" style="position: relative">
        <label class="label"> Available Coupons: </label>
        <SelectBox v-model="selectedCoupon" :options="couponList" />
        <p
          class="msg error"
          style="
            text-align: center;
            position: absolute;
            bottom: -60%;
            width: 100%;
            left: 0;
          "
          v-if="couponExpired"
        >
          Coupon Expired
        </p>
      </div>
    </div>

    <div class="section">
      <label class="label"> Popup Text Details </label>
      <!-- popup text (1) -->
      <TextBox v-model="doc.text1" label="Popup Text #1 (Heading)" />
      <!-- popup text (2) -->
      <TextBox
        v-model="doc.text2"
        label="Popup Text #2 (Description)"
        :nonAdmin="true"
        style="padding: 2.3%"
      />
      <!-- popup text (3) -->
      <InputBox v-model="doc.text3" label="Popup Text #3 (Button)" />
    </div>

    <!-- input text (should have some helpers) -->
    <InputBox v-model="doc.actionURL" label="Action URL (on click):" />
    <!-- persist toggle -->
    <Toggle v-model="doc.persist" label="Persist" />
    <!-- delay timer -->
    <InputSlider
      v-model="doc.delay"
      label="Set Delay Time"
      unit="minutes"
      :max="60"
      :step="0.5"
    />

    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />
    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />
    <!-- update button -->
    <div class="center-space">
      <!-- loading bar -->
      <img v-if="loading" class="loading" src="/loading.gif" />
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action" :disabled="loading">
        {{ editMode ? "Apply Changes" : "Add Popup" }}
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
/* base doc */
const baseDoc = () => ({
  _id: "",
  name: "",
  image: "",
  category: "normal",
  text: "",
  text1: "",
  text2: "",
  text3: "",
  actionURL: "",
  persist: false,
  delay: 20,
  visibility: "guests",
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
      doc: baseDoc(),
      allCoupons: [],
      couponList: [],
      selectedCoupon: null,
      couponExpired: false,
      loading: false,
      updated: false,
      errorToast: {
        status: false,
        msg: "",
      },
      showDemo: false,
    };
  },
  mounted() {
    this.fetchAllCoupons();
  },
  watch: {
    selectedCoupon(newVal) {
      if (newVal === null) return;
      this.doc.text2 = this.getCouponTextTemplate(newVal);
    },
    editMode(newVal) {
      this.couponList.shift();
      if (newVal === true && this.doc.category === "coupon") {
        this.couponList.unshift({
          name: "Already Selected",
          value: null,
        });
      } else if (newVal === false) {
        this.couponList.unshift({
          name: "Select Coupon:",
          value: null,
        });
      }
    },
  },
  methods: {
    imageListUpdated(list, type) {
      switch (type) {
        case "image":
          this.doc.image = list.length > 0 ? list[0].path : "";
          break;
      }
    },
    getCouponTextTemplate(couponId) {
      this.couponExpired = false;
      const coupon = this.allCoupons.find((c) => c._id === couponId);
      if (coupon === undefined) return "";

      /* check if coupon is expired or not */
      if (new Date(coupon.validityRange.end).getTime() < new Date().getTime())
        this.couponExpired = true;

      const unit = coupon.type === "percentage" ? "%" : coupon.currency;
      return `Use coupon code <b> ${coupon.code} </b> and get flat ${
        coupon.value
      } ${unit} off on your order. Offer valid from ${this.$formatDate(
        coupon.validityRange.start,
        true
      )} - ${this.$formatDate(coupon.validityRange.end, true)}. Hurry!`;
    },
    async fetchAllCoupons() {
      const result = await this.$fetchCollection("coupons");
      this.allCoupons = result.docs;
      this.couponList = this.allCoupons.map(({ _id, code }) => {
        return {
          name: code,
          value: _id,
        };
      });
      this.couponList.unshift({
        name: "Select Coupon:",
        value: null,
      });
    },
    async updateDocument() {
      this.loading = true;
      const result = await this.$updateDocument(
        this.model,
        this.doc,
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
        image,
        category,
        text,
        text1,
        text2,
        text3,
        actionURL,
        persist,
        delay,
        visibility,
        description,
        status,
      } = details;
      this.doc = {
        _id,
        name,
        image,
        category,
        text,
        text1,
        text2,
        text3,
        actionURL,
        persist,
        delay,
        visibility,
        description,
        status,
      };
      this.editMode = true;
    },
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    resetForm() {
      this.populateForm(baseDoc());
      this.$refs.imageUploader.clearFileSelection();
      this.selectedCoupon = null;
      this.couponExpired = false;
      this.editMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.contents {
  position: relative;
  overflow: scroll;
  .demo-popup {
    position: fixed;
    top: 15vh;
    left: 2vw;
    background: red;
    z-index: 10;
  }
}

.section {
  position: relative;
  margin: 10px;
  border: 1px dashed #efefef;
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
</style>

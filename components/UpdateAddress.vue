<template>
  <div class="address-details flex col center">
    <div class="center indicator">
      <div @click="$emit('goBack')" class="back-icon center">
        <img src="/icons/light/back.png" />
      </div>

      <span class="activity">
        {{ updating ? "Updating" : "New" }} Address
      </span>
    </div>

    <!-- delivery input fields -->
    <DeliveryInput
      v-for="(field, key, index) in formData"
      :key="index"
      v-model="field.value"
      :error="field.error"
      :label="field.label"
      @input="field.error.status = false"
      :isMobileNumber="key === 'mobileNumber'"
      :maxLength="key === 'addressLine1' || key === 'addressLine2' ? 60 : 100"
      :countryCode="addressDetails.countryDialCode"
      :disabled="false"
    />
    <br />
    <div class="actions center">
      <button class="action" @click="updateAddress">
        {{ updating ? "Update" : "Add" }} Address
      </button>
    </div>

    <br />

    <!-- <div class="response"> -->
    <Toast :show="updated" msg="Address Updated" />
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    updating: {
      type: Boolean,
      default: false
    },
    addressDetails: {
      type: Object
    }
  },
  data() {
    return {
      deliveryAddress: {
        firstName: "",
        surName: "",
        mobileNumber: "",
        addressLine1: "",
        addressLine2: "",
        email: "",
        city: "",
        postalCode: ""
      },
      formData: this.createFormData(),
      updated: false
    };
  },
  mounted() {
    if (this.updating) this.fetchAddressDetails();
  },
  watch: {
    addressId: function(newVal, oldVal) {
      if (newVal === null) this.resetForm();
      else this.fetchAddressDetails();
    }
  },
  methods: {
    createFormData() {
      /* form fields */
      const fields = {
        _id: "",
        firstName: "First Name",
        surName: "Sur Name",
        mobileNumber: "Mobile Number",
        email: "Email",
        addressLine1: "Address Line #1",
        addressLine2: "Address Line #2",
        city: "City",
        postalCode: "Postal Code"
      };

      /* delivery address object */
      let deliveryAddress = {};

      /* create delivery form object */
      for (let key in fields) {
        deliveryAddress[key] = {
          label: fields[key],
          value: this.addressDetails[key],
          error: {
            status: false,
            msg: ""
          }
        };
      }
      return deliveryAddress;
    },
    fetchAddressDetails() {
      this.deliveryAddress = this.addressDetails;
    },
    async updateAddress() {
      //   this.updated = true;
      //   setTimeout(() => (this.updated = false), 3000);

      /* collect delivery address */
      let deliveryAddress = {};
      Object.keys(this.formData).forEach(key => {
        deliveryAddress[key] = this.formData[key].value;
      });

      deliveryAddress.countryDialCode = this.addressDetails.countryDialCode;
      deliveryAddress.countryIsoCode = this.addressDetails.countryIsoCode;

      const updateAddress = await this.$post("/addressBookActions", {
        action: this.updating ? "update-address" : "save-address",
        address: deliveryAddress
      });
      /* fetch profile */
      this.$store.dispatch("customer/fetchProfile");
      /* need address id and details */
      /* match address id in current users address book in db */
    }
  }
};
</script>

<style lang="scss" scoped>
//
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.actions {
  width: 100%;

  .action {
    width: 80%;
  }
}

.address-details {
  margin-top: 20px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  background-color: white;
  width: 40%;
  //   height: 80vh;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 90%;
  }

  .indicator {
    width: 100%;
    background-color: $primary_dark;
    padding: 3%;
    // margin-top: 10px;
    position: relative;

    .back-icon {
      position: absolute;
      top: 0;
      left: 2%;
      height: 100%;
      width: 10%;
      cursor: pointer;

      img {
        height: 40%;
      }
    }

    .activity {
      color: white;
      font-size: 13px;
    }
  }
}
.response {
  position: relative;
  height: 20vw;
  width: 100%;
}
</style>

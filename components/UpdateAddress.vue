<template>
  <div class="address-details center-col">
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
    addressId: {
      type: String
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
    updateAddress() {
      this.updated = true;
      setTimeout(() => (this.updated = false), 3000);
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
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
}
.response {
  position: relative;
  height: 20vw;
  width: 100%;
}
</style>

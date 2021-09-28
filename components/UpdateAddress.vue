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
      :type="field.type"
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
      <!-- add or update address -->
      <button class="action" @click="updateAddress">
        {{ updating ? "Update" : "Add" }} Address
      </button>
      <!-- delete address -->
      <button class="action remove" @click="deleteAddress">
        delete Address
      </button>
    </div>

    <br />

    <!-- <div class="response"> -->
    <Toast :show="updated" msg="Address Updated" />
    <!-- </div> -->
  </div>
</template>

<script>
import validate from "@/helpers/validate.js";
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
        state: "",
        addressType: "",
        mobileNumber: "",
        addressLine1: "",
        addressLine2: "",
        email: "",
        city: "",
        postalCode: "",
        countryDialCode: this.$store.state.customer.user.countryDialCode
      },
      formData: this.createFormData(),
      updated: false
    };
  },
  mounted() {
    if (this.updating) this.fetchAddressDetails();
  },
  watch: {
    addressDetails: function(newVal, oldVal) {
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
        addressType: "Address Type",
        state: "State",
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

        if (key === "addressType") {
          deliveryAddress[key].type = "select";
          if (!this.updating) deliveryAddress[key].value = "Home";
        }

        if (key === "state") {
          deliveryAddress[key].type = "select";
          if (!this.updating)
            deliveryAddress[key].value = "Andaman and Nicobar Islands";
        }
      }
      return deliveryAddress;
    },
    fetchAddressDetails() {
      this.deliveryAddress = this.addressDetails;
      // this.formData = this.createFormData();
    },
    async updateAddress() {
      if (!this.validateForm()) return;

      /* collect delivery address */
      let deliveryAddress = {};
      Object.keys(this.formData).forEach(key => {
        deliveryAddress[key] = this.formData[key].value;
      });

      deliveryAddress._id = this.addressDetails._id;
      deliveryAddress.countryDialCode = this.addressDetails.countryDialCode;
      deliveryAddress.countryIsoCode = this.addressDetails.countryIsoCode;

      const updateAddress = await this.$post("/addressBookActions", {
        action: this.updating ? "update-address" : "save-address",
        address: deliveryAddress
      });
      /* fetch profile */
      this.$store.dispatch("customer/fetchProfile");

      if (!this.updating) {
        this.$emit("goBack");
        // window.scroll({ top: 0, behavior: "smooth" });
      }

      this.updated = true;
      setTimeout(() => (this.updated = false), 3000);
    },
    async deleteAddress() {
      const deliveryAddress = { _id: this.addressDetails._id };

      const deleteAddress = await this.$post("/addressBookActions", {
        action: "delete-address",
        address: deliveryAddress
      });

      this.$emit("goBack");
      window.scroll({ top: 0, behavior: "smooth" });
      /* fetch profile */
      this.$store.dispatch("customer/fetchProfile");
    },
    setError(key, flag, msg) {
      const field = this.formData[key];
      if (flag) {
        field.error = {
          status: true,
          msg
        };
      }
    },
    validateForm() {
      /* required fields */
      const requiredFields = [
        "firstName",
        "surName",
        "mobileNumber",
        "email",
        "addressLine1",
        "city",
        "postalCode"
      ];

      /* firstName and surName should only consist of alphabets */
      ["firstName", "surName"].forEach(key => {
        const field = this.formData[key];
        const hasOnlyAlphabets = field.value.hasOnlyAlphabets();
        this.setError(key, !hasOnlyAlphabets, "Only Alphabets are allowed!");
      });

      /*  mobile number field */
      const mobileNumberField = this.formData["mobileNumber"];

      /* mobile number should only consist of numbers  */
      const mobileNumberHasOnlyNumbers = mobileNumberField.value.hasOnlyNumbers();
      this.setError(
        "mobileNumber",
        !mobileNumberHasOnlyNumbers,
        "Mobile number can only consist of digits"
      );

      /* mobile number length should be between 4 - 14 */
      const mobileNumberLengthInRange =
        mobileNumberField.value.length > 3 &&
        mobileNumberField.value.length < 15;
      this.setError(
        "mobileNumber",
        !mobileNumberLengthInRange,
        "Please enter a valid mobile number"
      );

      /* email should be in a valid format */
      const emailField = this.formData["email"];
      const emailValid = emailField.value.isValidEmail();
      this.setError("email", !emailValid, "Please enter a valid email address");

      /* city should only consist of alphabets */
      const cityField = this.formData["city"];
      const cityOnlyHasAlphabets = cityField.value.hasOnlyAlphabets();
      this.setError(
        "city",
        !cityOnlyHasAlphabets,
        "Only Alphabets are allowed"
      );

      /* postal code should only consist of numbers */
      const postalCodeField = this.formData["postalCode"];
      const postalCodeOnlyHasNumbers = postalCodeField.value.hasOnlyNumbers();
      this.setError(
        "postalCode",
        !postalCodeOnlyHasNumbers,
        "Only Number are allowed"
      );

      /* except for addressLine#2, no field can be blank */
      requiredFields.forEach(key => {
        const field = this.formData[key];
        const fieldEmpty = field.value.isEmpty();
        this.setError(key, fieldEmpty, "This field cannot be left blank!");
      });

      /* check for any error flags */
      const validated = requiredFields.every(key => {
        console.log(this.formData[key].error.status, key);
        return !this.formData[key].error.status;
      });

      console.log(validated, "--validated");

      return validated;
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
  width: 50%;
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

  .actions {
    .action {
      margin: 0 8px;
      &.remove {
        background-color: rgb(157, 36, 36);
      }
    }

    @media (max-width: 768px) {
      .action {
        font-size: 11px;
      }
    }
  }
}
.response {
  position: relative;
  height: 20vw;
  width: 100%;
}
</style>

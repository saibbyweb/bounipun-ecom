<template>
  <div class="delivery-address-form">
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
      :countryCode="countryDialCode"
      :disabled="disabled"
    />
    <!-- continue -->
    <div class="flex center" style="gap:10px;">
    <button class="action" @click="validateForm">Continue</button>
    <button class="action" @click="prefillForm"> Prefill </button>
    </div>
  </div>
</template>

<script>
import "@/helpers/validate.js";

const demoDeliveryAddress = {
  firstName: "Suhaib",
  surName: "Khan",
  mobileNumber: "9906697711",
  email: "hello@saibbyweb.com",
  addressLine1: "H.no 54, Chinar Enclave",
  addressLine2: "Rawalpora, Near Masjid",
  city: "Srinagar",
  postalCode: "190005",
  countryIsoCode: "US",
}

export default {
  props: {
    useUSAddress: { type: Boolean, default: false },
    countryDialCode: String,
    countryIsoCode: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: this.createFormData(),
    }
  },
  methods: {
    prefillForm() {
      this.formData.firstName.value = "Suhaib";
      this.formData.surName.value = "Khan";
      this.formData.mobileNumber.value = "8082007711";
      this.formData.email.value = "hello@saibbyweb.com";
      this.formData.addressLine1.value =
        "H.no 54, Chinar Enclave, Rawalpora, Srinagar, Jammu & Kashmir";
      this.formData.city.value = "Srinagar";
      this.formData.postalCode.value = "190005";
    },
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
        postalCode: "Postal Code",
      };

      /* delivery address object */
      let deliveryAddress = {};

      /* create delivery form object */
      for (let key in fields) {
        deliveryAddress[key] = {
          label: fields[key],
          value: "",
          type: "text",
          error: {
            status: false,
            msg: "",
          },
        };

        if (key === "addressType") {
          deliveryAddress[key].value = "Home";
          deliveryAddress[key].type = "select";
        }

        if (key === "state") {
          deliveryAddress[key].value = "Andaman and Nicobar Islands";
          deliveryAddress[key].type = "select";
        }
      }

      return deliveryAddress;
    },
    setError(key, flag, msg) {
      const field = this.formData[key];
      if (flag) {
        field.error = {
          status: true,
          msg,
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
        "postalCode",
      ];

      /* firstName and surName should only consist of alphabets */
      ["firstName", "surName"].forEach((key) => {
        const field = this.formData[key];
        const hasOnlyAlphabets = field.value.hasOnlyAlphabets();
        this.setError(key, !hasOnlyAlphabets, "Only Alphabets are allowed!");
      });

      /*  mobile number field */
      const mobileNumberField = this.formData["mobileNumber"];

      /* mobile number should only consist of numbers  */
      const mobileNumberHasOnlyNumbers =
        mobileNumberField.value.hasOnlyNumbers();
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
      requiredFields.forEach((key) => {
        const field = this.formData[key];
        const fieldEmpty = field.value.isEmpty();
        this.setError(key, fieldEmpty, "This field cannot be left blank!");
      });

      /* check for any error flags */
      const validated = requiredFields.every((key) => {
        console.log(this.formData[key].error.status, key);
        return !this.formData[key].error.status;
      });

      /* collect delivery address */
      let deliveryAddress = {};
      Object.keys(this.formData).forEach((key) => {
        deliveryAddress[key] = this.formData[key].value;
      });
      
      deliveryAddress.countryDialCode = this.countryDialCode;
      deliveryAddress.countryIsoCode = this.countryIsoCode;

      this.$emit("continue", this.useUSAddress ? demoDeliveryAddress : deliveryAddress);
      return validated;
    }
  }
};
</script>

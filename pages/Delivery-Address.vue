<template>
  <div class="delivery-page page -wh">
    <div class="flex container around">
      <div class="delivery-address flex col center">
        <!-- country region -->
        <h2 class="title">Country/Region</h2>
        <!-- country selection -->
        <CountrySelect
          v-model="selectedCountryCode"
          @setCountryIsoCode="countryIsoCode = $event"
        />

        <!-- show addresses from address book -->
        <h2 class="title">Shipping Address</h2>
        <!-- delivery input fields -->
        <DeliveryInput
          v-for="(field, key, index) in formData"
          :key="index"
          v-model="field.value"
          :error="field.error"
          :label="field.label"
          @input="field.error.status = false"
          :isMobileNumber="key === 'mobileNumber'"
          :maxLength="
            key === 'addressLine1' || key === 'addressLine2' ? 60 : 100
          "
          :countryCode="selectedCountryCode"
        />
        <!-- consent for adding address to address book -->
        <Checkbox
          label="Save address for later use."
          v-model="saveNewAddress"
        />
      </div>

      <div class="order-total-container">
        <OrderTotal />
      </div>
    </div>

    <!-- proceed to checkout -->
    <div class="pad-10">
      <button @click="proceedToCheckout" class="action">
        Continue to Checkout
      </button>
    </div>
  </div>
</template>

<script>
import validate from "@/helpers/validate.js";

export default {
  data() {
    return {
      formData: this.createFormData(),
      countryIsoCode: "",
      showCountrySelect: false,
      saveNewAddress: true
    };
  },
  computed: {},
  async mounted() {
    this.prefillForm();
    this.fetchAddressBook();
  },
  methods: {
    prefillForm() {
      this.formData.firstName.value = "Suhaib";
      this.formData.surName.value = "Khan";
      this.formData.mobileNumber.value = "9906697711";
      this.formData.email.value = "hello@saibbyweb.com";
      this.formData.addressLine1.value =
        "H.no 54, Chinar Enclave, Rawalpora, Srinagar, Jammu & Kashmir";
      this.formData.city.value = "Srinagar";
      this.formData.postalCode.value = "190005";
    },
    async fetchAddressBook() {
      const request = await this.$post("/fetchCustomerDataPoints", {
        field: "addressBook"
      });

      if (request.resolved === false) {
        return;
      }
    },
    selectCountry(index) {
      this.selectedCountryIndex = index;
      this.showCountrySelect = false;
    },
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
          value: "",
          error: {
            status: false,
            msg: ""
          }
        };
      }
      return deliveryAddress;
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
    },
    proceedToCheckout() {
      if (!this.validateForm()) return;

      /* collect delivery address */
      let deliveryAddress = {};
      Object.keys(this.formData).forEach(key => {
        deliveryAddress[key] = this.formData[key].value;
      });

      deliveryAddress.countryIsoCode = this.countryIsoCode;
      this.$router.push({ name: "Checkout", params: { deliveryAddress } });
    }
  }
};
</script>

<style lang="scss" scoped>
.delivery-page {
  .container {
    .delivery-address {
      width: 50%;
      margin-top: 10px;
      .title {
        font-size: 22px;
        font-family: $font_1;
        color: $dark_gray;
        text-transform: uppercase;
        align-self: flex-start;
        margin: 2%;
        margin-right: 0;
      }
    }
    .order-total-container {
      width: 30%;
      margin-top:10%;
    }
    @media (max-width: 768px) {
      flex-direction: column;

      .delivery-address {
        width: 100%;
        padding: 10% 0;
        margin-top:0;

        .title {
            margin: 7% 5%;
        }
      }
      .order-total-container {
        width: 100%;
        margin-top:0;
      }
    }
  }
}
</style>

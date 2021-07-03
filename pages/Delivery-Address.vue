<template>
  <div class="cart page -wh">
    <div class="delivery-address">
      <!-- country region -->
      <h2 class="title">Country/Region</h2>
      <!-- country selection -->
      <CountrySelect v-model="selectedCountryCodex" />

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
        :maxLength="key === 'addressLine1' || key === 'addressLine2' ? 60 : 100"
        :countryCode="selectedCountryCodex"
      />
      <!-- consent for adding address to address book -->
      <Checkbox label="Save address for later use." v-model="saveNewAddress" />
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
import countryData from "@/helpers/countryCodes.js";
import validate from "@/helpers/validate.js";

export default {
  data() {
    return {
      formData: this.createFormData(),
      countryCodes: countryData,
      selectedCountryIndex: 98,
      countrySearchTerm: "",
      showCountrySelect: false,
      selectedCountryCodex: "",
      saveNewAddress: true
    };
  },
  computed: {
    selectedCountry() {
      if (this.matchedCountries.length === 0) return "";
      return this.matchedCountries[this.selectedCountryIndex];
    },
    selectedCountryCode() {
      if (this.matchedCountries.length === 0) return "";
      return this.matchedCountries[this.selectedCountryIndex].dialCode;
    },
    matchedCountries() {
      if (this.countrySearchTerm === "") return this.countryCodes;

      this.selectedCountryIndex = 0;

      return this.countryCodes.filter(country => {
        return country.name
          .toUpperCase()
          .startsWith(this.countrySearchTerm.toUpperCase());
      });
    }
  },
  async mounted() {
      this.prefillForm();
    this.fetchAddressBook();
  },
  methods: {
    prefillForm() {
        this.formData.firstName.value = "Suhaib"
        this.formData.surName.value = "Khan"
        this.formData.mobileNumber.value = "9906697711"
        this.formData.email.value = "hello@saibbyweb.com"
        this.formData.addressLine1.value = "H.no 54, Chinar Enclave, Rawalpora, Srinagar, Jammu & Kashmir"
        this.formData.city.value = "Srinagar"
        this.formData.postalCode.value = "190005"
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
      this.$router.push({ name: "Checkout", params: { deliveryAddress } });
    }
  }
};
</script>

<style lang="scss" scoped>
.delivery-address {
  // margin: 4%;
  padding: 10% 0;
  // box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 22px;
    font-family: $font_1;
    color: $dark_gray;
    text-transform: uppercase;
    align-self: flex-start;
    margin: 7% 5%;
    margin-right: 0;
  }

  .country-select {
    border: none;
    border-radius: 0;
    width: 90%;
    // padding: 2%;
    background-color: white;
    border-bottom: 2px solid #e7e7e7;
    transition: all 0.2s ease-in-out;
    position: relative;

    .selected-country {
      background-color: #e7e7e7;
      // background-color: $dark_gray;
      // border-bottom: 2px solid $dark_gray;
      border-bottom: 2px solid #e7e7e7;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 2%;
      width: 100%;

      span {
        font-size: 14px;
        font-family: $font_2;
        // color:white;
      }

      &.focused {
        border-bottom: 2px solid $dark_gray;
      }

      img {
        width: 10%;
        margin-right: 10px;
      }
    }

    .country-list {
      position: absolute;
      top: 100%;
      left: 0;
      min-height: 100px;
      max-height: 300px;
      overflow-y: scroll;
      background-color: #e7e7e7e2;
      z-index: 1;
      border: 2px solid $dark_gray;
      border-top: none;
      width: 100%;

      /* search */
      .search {
        .field {
          width: 100%;
          border: none;
          padding: 10px;
          border-bottom: 1px solid #e7e7e7;
          font-size: 14px;
        }
      }

      .item {
        border-bottom: 2px solid #e7e7e7;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 2%;
        // background-color: #e7e7e7;

        img {
          width: 7%;
          margin-right: 10px;
        }

        span {
          font-family: $font_2;
        }
      }

      .no-results {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          margin-top: 10px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="delivery-page page -wh">
    <div class="flex container around">
      <div class="delivery-address flex col center">
        <!-- country region -->
        <h2 class="title">Country/Region</h2>
        <!-- country selection -->
        <CountrySelect
          v-model="countryDialCode"
          @setCountryIsoCode="countryIsoCode = $event"
          :lock="decideCountryLock"
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
          :countryCode="countryDialCode"
          :disabled="otpSent"
        />
        <!-- TODO: consent for adding address to address book -->
        <Checkbox
          label="Save address for later use."
          v-model="saveNewAddress"
        />

        <!-- divider -->
        <hr
          v-if="otpSent"
          style="border-bottom: 1px solid #efefef; width: 85%;"
        />

        <!-- otp -->
        <InputCredential
          label="One Time Password"
          v-model="otp"
          v-if="otpSent"
        />

        <p v-if="otpSent && otpError.status" class="msg error">
          {{ otpError.msg }}
        </p>
      </div>

      <div class="order-total-container">
        <OrderTotal />
      </div>
    </div>

    <!-- proceed to checkout -->
    <div class="proceed flex center">
      <button @click="proceedToCheckout" class="action">
        {{
          (otpSent == true || $store.state.customer.authorized) ? "Continue to Checkout" : "Verify Phone Number and Continue"
        }}
      </button>
    </div>
  </div>
</template>

<script>
import validate from "@/helpers/validate.js";

export default {
      head() {
    return {
      title: "Delivery Address | Bounipun Kashmir"
    }
  },
  data() {
    return {
      formData: this.createFormData(),
      countryIsoCode: "",
      countryDialCode: "",
      showCountrySelect: false,
      saveNewAddress: true,
      otp: "",
      otpSent: false,
      otpError: {
        status: false,
        msg: ""
      }
    };
  },
  computed: {
    decideCountryLock() {
      return this.$store.state.customer.authorized ? true : false
    }
  },
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
    async sendOtp() {
      const { response, resolved } = await this.$post("/sendOtp", {
        countryDialCode: this.countryDialCode,
        phoneNumber: this.formData.mobileNumber.value,
        purpose: "registration-on-checkout"
      });

      /* if req not resolved */
      if (resolved === false) {
        console.log("send otp not resolved");
        return;
      }

      /* map otp sent response */
      this.otpSent = response.otpSent === true;
    },
    async registerAndLogin() {
      console.log("register called");
      /* clear error */
      this.otpError.status = false;

      const { response, resolved } = await this.$post("/registerCustomer", {
        countryDialCode: this.countryDialCode,
        countryIsoCode: this.countryIsoCode,
        phoneNumber: this.formData.mobileNumber.value,
        otp: this.otp,
        firstName: this.formData.firstName.value,
        surName: this.formData.surName.value,
        platform: "web"
      });

      /* if req not resolved, map error message */
      if (resolved === false) {
        this.otpError.msg = response.message;
        this.otpError.status = true;
        return;
      }
      /* TODO: should work but not tested */
      this.shiftCart();
      /* fetch profile */
      this.$store.dispatch("customer/fetchProfile");
      /* and move back to homepage */
      this.$store.commit("customer/setAuthorization", true);

      /* collect delivery address */
      let deliveryAddress = {};
      Object.keys(this.formData).forEach(key => {
        deliveryAddress[key] = this.formData[key].value;
      });

      deliveryAddress.countryIsoCode = this.countryIsoCode;
      deliveryAddress.countryDialCode = this.countryDialCode;

      if(this.saveNewAddress)
        await this.saveAddressToProfile(deliveryAddress);

      this.$router.push({ name: "checkout", params: { deliveryAddress } });
    },
    async shiftCart() {
      const { resolved, response } = await this.$post("/shiftCart", {
        cart: this.$store.state.customer.cart
      });

      /* clear local cart if cart shifted */
      if (resolved && response.shifted === true) {
        this.$store.commit("customer/clearCart");
      }

      /* refetch cart */
      await this.$store.dispatch("customer/fetchCart");
    },
    async proceedToCheckout() {
      if (!this.validateForm()) return;

      /* if user is guest */
      if (!this.$store.state.customer.authorized) {
        switch (this.otpSent) {
          case false:
            await this.sendOtp();
            break;
          case true:
            await this.registerAndLogin();
            break;
        }
        return;
      }

      /* collect delivery address */
      let deliveryAddress = {};
      Object.keys(this.formData).forEach(key => {
        deliveryAddress[key] = this.formData[key].value;
      });

      deliveryAddress.countryIsoCode = this.countryIsoCode;
      deliveryAddress.countryDialCode = this.countryDialCode;

      if(this.saveNewAddress)
        await this.saveAddressToProfile(deliveryAddress);

      this.$router.push({ name: "checkout", params: { deliveryAddress } });
    },
    async saveAddressToProfile(address) {
      const saveAddress = await this.$post('/addressBookActions', {
        action: 'save-address',
        address
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.delivery-page {
  .container {
    justify-content: flex-start;
    padding: 2% 5%;

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
      margin-top: 3%;
      @media (min-width: 769px) {
        position: fixed;
        right: 5%;
        top: 10vh;
        height: 100%;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0%;
      justify-content: center;

      .delivery-address {
        width: 100%;
        padding: 10% 0 2% 0;
        margin-top: 0;

        .title {
          margin: 7% 5%;
        }
      }
      .order-total-container {
        width: 100%;
        margin-top: 0;
        padding: 0 20px;
      }
    }
  }
  .proceed {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
      .action {
        width: auto;
      }
    }
  }
}
</style>

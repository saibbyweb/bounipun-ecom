<template>
  <div class="page flex">
    <!-- -->
    <div class=""></div>

    <!--  -->
    <div class="login-form">
      <!-- phone number -->
      <InputCredential
        type="number"
        label="Phone Number"
        v-model="phoneNumber"
        :disabled="otpSent"
        :isMobileNumber="true"
        :countryDialCode="countryDialCode"
      />
      <!-- one time password -->
      <InputCredential label="One Time Password" v-model="otp" v-if="otpSent" />
      <!-- form error -->
      <p v-if="error.status" class="msg error">{{ error.message }}</p>

      <!-- otp sent message -->
      <p class="msg success" v-if="otpSent">
        A one time password has been sent to your mobile number.
      </p>
      <!-- send otp -->
      <button v-if="!otpSent" class="action" @click="sendOtp()">
        Continue
      </button>
      <!-- login -->
      <button v-if="otpSent" class="action" @click="login()">Login</button>
    </div>
  </div>
</template>

<script>
import "@/helpers/validate.js";

export default {
  layout: 'admin',
  data() {
    return {
      otp: "",
      otpSent: false,
      phoneNumber: "",
      countryDialCode: "+91",
      purpose: "login",
      error: {
        status: false,
        message: "",
      },
    };
  },
  methods: {
    validatePhoneNumber() {
      if (this.phoneNumber.length !== 10) {
        this.error.message = "Kindly enter a valid 10 digit mobile number";
        this.error.status = true;
        return false;
      }
      return true;
    },
    async sendOtp() {
      /* validate form or atleast phone number */
      if (!this.validatePhoneNumber()) return;

      const { response, resolved } = await this.$post("/sendOtp", {
        countryDialCode: this.countryDialCode,
        phoneNumber: this.phoneNumber,
        purpose: this.purpose,
      });

      /* if req not resolved */
      if (resolved === false) {
        console.log("send otp not resolved");
        return;
      }

      /* map otp sent response */
      this.otpSent = response.otpSent === true;
    },
    async login() {
      /* clear error */
      this.error.status = false;
    },
  },
};
</script>

<template>
  <div class="page flex">
    <div class="section-one flex center col">
      <h3 class="heading">Member Sign In</h3>
      <!-- country select -->
      <CountrySelect
        v-model="countryDialCode"
        @setCountryIsoCode="countryIsoCode = $event"
        :lock="false"
      />

      <!-- phone number -->
      <InputCredential
        type="text"
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
    <div class="section-two flex center col">
      <h3 id="already" class="heading">Don't Have An Account Yet?</h3>
      <p class="desc">
        Access your order history, personal information and receive our digital
        communications
      </p>
      <button
        id="access-account"
        class="action"
        @click="$router.push('/registration')"
      >
        Create Bounipun Account
      </button>
    </div>
  </div>
</template>

<script>
import "@/helpers/validate.js";

export default {
  head() {
    return {
      title: "Login | Bounipun Kashmir",
    };
  },
  mounted() {
    setTimeout(() => {
    if (this.$store.state.admin.authorized === true)
      this.$router.push("/admin-panel");
    },1000)
  },
  data() {
    return {
      otpSent: false,
      countryDialCode: "+91",
      countryIsoCode: "IN",
      phoneNumber: "",
      otp: "",
      purpose: "login",
      error: {
        status: false,
        message: "",
      },
    };
  },
  mounted() {},
  methods: {
    validatePhoneNumber() {
    
      /* check if number is empty */
      if (this.phoneNumber.isEmpty()) {
        this.error.message = "Phone number field cannot be left blank";
        this.error.status = true;
        return false;
      }

      if(!this.phoneNumber.hasOnlyNumbers()) {
        this.error.message = "Kindly enter a valid phone number";
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
      const { response, resolved } = await this.$post("/loginCustomer", {
        countryDialCode: this.countryDialCode,
        countryIsoCode: this.countryIsoCode,
        phoneNumber: this.phoneNumber,
        otp: this.otp,
        platform: "web",
      });

      console.log(response);
      /* if req not resolved, map error message */
      if (resolved === false) {
        this.error.message = response.message;
        this.error.status = true;
        return;
      }
      /* at this point, cookie is set in the browser */
      this.shiftCart();

      /* and move back to homepage */
      this.$store.commit("customer/setAuthorization", true);
      
      /* store the session token */
      if (response.sessionToken) {
        this.$store.commit("customer/setSessionToken", response.sessionToken);
      }

      /* fetch profile */
      this.$store.dispatch("customer/fetchProfile");

      /* update store location */
      await this.$store.dispatch("customerV2/fetchStoreLocation");

      /* navigate homepage */
      this.$router.push("/");
    },
    async shiftCart() {
      const { resolved, response } = await this.$post("/shiftCart", {
        cart: this.$store.state.customer.cart,
      });

      /* clear local cart if cart shifted */
      if (resolved && response.shifted === true) {
        this.$store.commit("customer/clearCart");
      }

      /* refetch cart */
      await this.$store.dispatch("customer/fetchCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  font-family: $font_1_bold;
  text-transform: uppercase;
  color: $dark_gray;
  align-self: center;
  margin-bottom: 20px;
  // text-align: center;

  &#already {
    align-self: center;
    margin-top: 10%;
    text-align: center;
  }
}
.desc {
  font-size: 10px;
  padding: 3%;
  text-align: center;
  &.otp-sent {
    text-align: center;
    padding: 1% 2%;
    font-size: 9px;
    background: rgb(67, 176, 67);
    color: white;
    margin-bottom: 10px;
  }
}

.page {
  min-height: 65vh;
  .section-one {
    width: 50%;
  }
  .section-two {
    width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .section-one {
      width: 100%;
    }
    .section-two {
      width: 100%;
    }
  }
}
</style>

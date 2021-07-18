<template>
  <div class="page flex">
    <div class="section-one flex center col">
      <h3 class="heading">Create new account</h3>
      <!-- country select -->
      <CountrySelect
        v-model="countryDialCode"
        @setCountryIsoCode="countryIsoCode = $event"
      />
      <!-- first name -->
      <InputCredential
        label="First Name"
        v-model="firstName"
        :disabled="otpSent"
      />
      <!-- surname -->
      <InputCredential label="Sur Name" v-model="surName" :disabled="otpSent" />
      <!-- TODO: country selector should be independent component -->
      <!-- phone number -->
      <InputCredential
        type="number"
        label="Phone Number"
        v-model="phoneNumber"
        :disabled="otpSent"
        :isMobileNumber="true"
        :countryDialCode="countryDialCode"
      />
      <!-- otp -->
      <InputCredential label="One Time Password" v-model="otp" v-if="otpSent" />

      <!-- form error -->
      <p v-if="error.status" class="msg error">{{ error.message }}</p>

      <!-- otp sent message -->
      <p class="msg success" v-if="otpSent">
        A one time password has been sent to your mobile number.
      </p>
          
      <br>

      <!-- send otp -->
      <button v-if="!otpSent" class="action" @click="sendOtp()">
        Continue
      </button>

      <!-- register -->
      <button v-if="otpSent" class="action" @click="registerAndLogin()">
        Register
      </button>
    </div>

    <div class="section-two flex center col">
      <h3 id="already" class="heading">Already Have An Account?</h3>
      <p class="desc">
        Access your order history, personal information and receive our digital
        communications
      </p>


      <button
        id="access-account"
        class="action"
        @click="$router.push('/login')"
      >
        Access My Bounipun Account
      </button>
    </div>
  </div>
</template>

<script>
import CountrySelect from "../components/countrySelect.vue";
export default {
  data() {
    return {
      otpSent: false,
      firstName: "",
      surName: "",
      countryDialCode: "ABC",
      countryIsoCode: "IN",
      purpose: "registration",
      phoneNumber: "",
      otp: "",
      error: {
        status: false,
        message: "Could not sent otp"
      }
    };
  },
  methods: {
    validatePhoneNumber() {
      console.log("validate called");
      // if (this.phoneNumber.length !== 10) {
      //   this.error.message = "Kindly enter a valid 10 digit mobile number";
      //   this.error.status = true;
      //   console.log("hey there");
      //   return false;
      // }
      return true;
    },
    async sendOtp() {
      /* validate form or atleast phone number */
      if (!this.validatePhoneNumber()) return;

      const { response, resolved } = await this.$post("/sendOtp", {
        countryDialCode: this.countryDialCode,
        phoneNumber: this.phoneNumber,
        purpose: this.purpose
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
      this.error.status = false;

      const { response, resolved } = await this.$post("/registerCustomer", {
        countryDialCode: this.countryDialCode,
        countryIsoCode: this.countryIsoCode,
        phoneNumber: this.phoneNumber,
        otp: this.otp,
        firstName: this.firstName,
        surName: this.surName,
        platform: "web"
      });

      /* if req not resolved, map error message */
      if (resolved === false) {
        this.error.message = response.message;
        this.error.status = true;
        return;
      }
      /* TODO: should work but not tested */
      this.shiftCart();
      /* fetch profile */
      this.$store.dispatch("customer/fetchProfile");
      /* and move back to homepage */
      this.$store.commit("customer/setAuthorization", true);
      /* navigate homepage */
      this.$router.push("/");
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
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  font-family: $font_1_bold;
  text-transform: uppercase;
  color: $dark_gray;
  align-self: center;
  margin-bottom: 20px;


  &#already {
    align-self: center;
    margin-top: 10%;
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
    background: rgb(68, 200, 68);
    color: white;
    margin-bottom: 10px;
  }
}

#forgot-password {
  color: $gray;
  font-size: 10px;
  margin-bottom: 5px;
}

#access-account {
  margin-bottom: 10%;
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

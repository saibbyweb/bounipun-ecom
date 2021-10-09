<template>
  <div class="login-page flex">
    <!-- -->
    <div class="bg"></div>

    <!--  -->
    <div class="login-form flex col around v-center shadow">
      <!-- heading  -->
      <div>
        <h1>Admin Panel <sup> 8.0 </sup></h1>
        <h3>
          Crafted with <span> ❤ </span> in Kashmir by
          <a href="https://saibbyweb.com" target="_blank"> @saibbyweb </a>
        </h3>
      </div>
      <img class="logo" src="/icons/logo/black.png" />

      <div class="flex col center" style="width: 90%">
        <!-- country select -->
        <CountrySelect
          v-model="countryDialCode"
          :adminMode="true"
          :lock="false"
        />

        <!-- phone number -->
        <InputCredential
          type="number"
          label="Phone Number"
          v-model="phoneNumber"
          :disabled="otpSent"
          :isMobileNumber="true"
          :countryDialCode="countryDialCode"
        />
      </div>

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
  layout: "blank",
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
      unsubscribe: null
    };
  },
  beforeUnmount() {
    this.unsubscribe();
  },
  mounted() {
        /* listen for all mutations */
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "admin/setLoading") return;

      console.log(mutation);
      /* save state in local storage */
      window.localStorage.setItem(
        "admin_persistedState",
        JSON.stringify(state.admin)
      );
    });

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

      // this.otpSent = true;
      // return;

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

      const { response, resolved } = await this.$post("/loginAdmin", {
        countryDialCode: this.countryDialCode,
        phoneNumber: this.phoneNumber,
        otp: this.otp,
        platform: "web",
      });

 
      /* if req not resolved, map error message */
      if (resolved === false) {
        this.error.message = response.message;
        this.error.status = true;
        return;
      }

      /* and move back to homepage */
      this.$store.commit("admin/setAuthorization", true);

      /* navigate homepage */
      setTimeout(() => this.$router.push("/admin-panel"), 500);
      // this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  padding: 0;
  margin-top: 0;
  min-height: 100vh;
  background-image: url("/demo_images/maple.jpg");
  background-size: cover;

  h1 {
    font-size: 17px;
    font-family: $font_1;

    sup {
      font-size: 10px;
    }
  }

  h3 {
    font-size: 13px;
    font-family: $font_2;
    a {
      color: rgb(172, 50, 50);
      font-weight: 900;
    }
    span {
      color: rgb(192, 19, 19);
    }
  }

  .logo {
    width: 50%;
  }

  .bg {
    width: 65%;
    background-size: cover;
  }

  .login-form {
    width: 35%;
    background-color: rgba(238, 238, 238, 0.829);
  }
}
</style>

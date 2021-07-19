<template>
  <div class="page">
    <div class="wrapper flex">
      <!-- contact form -->
      <div class="contact-form flex col center">
        <h2>Write to us</h2>
        <br />
        <!-- country select -->
        <!-- <CountrySelect
          v-model="countryDialCode"
          @setCountryIsoCode="countryIsoCode = $event"
          :lock="false"
        /> -->
        <!-- phone number -->
        <!-- <InputCredential
          type="number"
          label="Phone Number"
          v-model="phoneNumber"
          :isMobileNumber="true"
          :countryDialCode="countryDialCode"
        /> -->
        <!-- name -->
        <InputCredential label="Name" v-model="name" />
        <!-- email -->
        <InputCredential label="Email" v-model="email" />
        <!-- message -->
        <TextBox label="Message" :nonAdmin="true" />
        <!-- form error -->
        <p v-if="error.status" class="msg error">{{ error.msg }}</p>
        <!-- send button -->
        <button class="action">Send Message</button>
      </div>

      <!-- operating address -->
      <div class="address flex center col">
        <h2>or you can reach us at:</h2>
        <p>
          New Colony Nigeen, Hazratbal, Srinagar, Jammu and Kashmir – 190006,
          India
        </p>
        <p>care@bounipun.in</p>
        <p>+91-91030-77655</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countryDialCode: "",
      countryIsoCode: "",
      phoneNumber: "",
      name: "",
      email: "",
      message: "",
      error: {
        status: false,
        msg: ""
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.wrapper {
    .contact-form {
        width: 50%;
    }
    .address {
        width:50%;
        padding: 0 10%;

        h2 {
            margin-bottom: 10px;
        }

        p {
            text-align: center;
            font-family: $font_2;
            margin:3px 0;
        }
    }
    @media(max-width: 768px) {
        flex-direction: column;
        .contact-form {
            width: 100%;
            margin-bottom: 20px;
        }
        .address {
            width:100%;
            padding: 0 5%;
        }
    }
}
</style>
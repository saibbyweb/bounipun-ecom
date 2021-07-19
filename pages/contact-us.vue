<template>
  <div class="page">
    <div class="wrapper flex">
      <!-- contact form -->
      <div class="contact-form flex col center">
        <h2>Write to us</h2>
        <br />
        <!-- name -->
        <InputCredential label="Name" v-model="name" :clearError="true" />
        <!-- email -->
        <InputCredential label="Email" v-model="email" :clearError="true" />
        <!-- message -->
        <TextBox v-model="message" label="Message" :nonAdmin="true" />
        <!-- form error -->
        <p v-if="error.status" class="msg error">{{ error.msg }}</p>
        <!-- send button -->
        <button class="action" @click="sendMessage">Send Message</button>
      </div>

      <!-- operating address -->
      <div class="address flex center col">
        <h2>or you can reach us at:</h2>
        <p>
          H-30 Integrated Textile and Handicraft Park Zakura, Srinagar, Jammu
          and Kashmir, India, 190006
        </p>
        <p>care@bounipun.in</p>
        <p>+91-91030-77655</p>
      </div>
    </div>
  </div>
</template>

<script>
import validate from "@/helpers/validate.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      error: {
        status: false,
        msg: ""
      }
    };
  },
  methods: {
    setError(flag, msg) {
      this.error = {
        status: flag,
        msg
      };
    },
    validateForm() {
      /* check for blank fields */
      const anyBlankField =
        this.name.trim() === "" ||
        this.email.trim() === "" ||
        this.message.trim() === "";

      /* if blank field found */
      if (anyBlankField) {
        this.setError(true, "No field can be left blank");
        return false;
      }

      /* name should only consist of alphabets */
      const nameValidated = this.name.hasOnlyAlphabets();

      if (!nameValidated) {
        this.setError(true, "Name can only consist of numbers");
        return false;
      }

      /* email should be in correct format */
      const emailValidated = this.email.isValidEmail();

      if (!emailValidated) {
        this.setError(true, "Please enter a valid email address");
        return false;
      }

      return true;
    },
    async sendMessage() {
      if (!this.validateForm()) return;

      const { response, resolved } = await this.$post("/sendMessage", {
        name: this.name,
        email: this.email,
        message: this.message
      });

      /* if req not resolved */
      if (resolved === false) {
        console.log("message not sent");
        return;
      }
      this.$router.push("/message-sent");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  .contact-form {
    width: 50%;
  }
  .address {
    width: 50%;
    padding: 0 10%;

    h2 {
      margin-bottom: 10px;
    }

    p {
      text-align: center;
      font-family: $font_2;
      margin: 3px 0;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .contact-form {
      width: 100%;
      margin-bottom: 20px;
    }
    .address {
      width: 100%;
      padding: 0 5%;
    }
  }
}
</style>

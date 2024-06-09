<template>
  <div class="page">
    <div class="wrapper flex">
      <!-- contact form -->
      <div class="contact-form flex col center">
        <a href="https://wa.me/919103077655?text=Hi! Could you help me with a few queries!" target="_blank">
          <div class="center glow-on-hover whatsapp-box" style="gap: 10px;">
            <img
              class="action-icon whatsapp"
              :src="'/icons/light/whatsapp-aa.svg'"
            />
         <button>How may I help you?</button>
          </div>
        </a>

        <h2>Or</h2>
        <h2>Write to us</h2>
        <br />
        <!-- name -->
        <div class="flex fields" style="gap: 10px;">
          <InputCredential
            label="First Name"
            v-model="firstName"
            :clearError="true"
          />
          <InputCredential
            label="Surname"
            v-model="surName"
            :clearError="true"
          />
        </div>
        <!-- subject -->
        <InputCredential label="Subject" v-model="subject" :clearError="true" />

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
        <h2>Reach us | Appointments</h2>
        <p>
          H-30 Integrated Textile and Handicraft Park Zakura, Srinagar, Jammu
          and Kashmir, India, 190024
        </p>
        <a href="mailto:care@bounipun.in"> <p>care@bounipun.in</p> </a>
        <a href="tel:+919103077655"> <p>+91-91030-77655</p> </a>
        <a href="tel:+917889777377"> <p>+91-78897-77377</p> </a>
      </div>
    </div>
  </div>
</template>

<script>
import "@/helpers/validate.js";

export default {
  head() {
    return {
      title:
        "Contact Us - Bounipun Kashmir | Luxury Store | Shawls, Stoles and Squares",
    };
  },
  data() {
    return {
      firstName: "",
      surName: "",
      subject: "",
      email: "",
      message: "",
      error: {
        status: false,
        msg: "",
      },
    };
  },
  methods: {
    setError(flag, msg) {
      this.error = {
        status: flag,
        msg,
      };
    },
    validateForm() {
      /* check for blank fields */
      const anyBlankField =
        this.firstName.trim() === "" ||
        this.surName.trim() === "" ||
        this.subject.trim() === "" ||
        this.email.trim() === "" ||
        this.message.trim() === "";

      /* if blank field found */
      if (anyBlankField) {
        this.setError(true, "No field can be left blank");
        return false;
      }

      /* name should only consist of alphabets */
      const nameValidated =
        this.firstName.hasOnlyAlphabets() && this.surName.hasOnlyAlphabets();

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
        name: this.firstName + " " + this.surName,
        subject: this.subject,
        email: this.email,
        message: this.message,
      });

      /* if req not resolved */
      if (resolved === false) {
        console.log("message not sent");
        return;
      }
      this.$router.push("/message-sent");
    },
  },
};
</script>

<style lang="scss" scoped>
.whatsapp-box {
  /* width: 250px; */
  margin-bottom:10px; 
  padding: 5px 10px;
  background-color: black;
  border-radius: 10px;

  button {
    font-size:13px;
    background-color: black;
    color: white;
  }
  img {
    filter:brightness(200)
  }
}
.wrapper {
  .contact-form {
    width: 50%;
  }

  .fields {
    width: 100%;
  }

  .address {
    width: 50%;
    padding: 0 10%;

    h2 {
      margin-bottom: 10px;
      text-align: center;
      font-size: 23px;
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

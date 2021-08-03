<template>
  <div class="cookie-notice-wrapper flex center">
    <div class="cookie-notice">
      <!-- close icon -->
      <img class="close" @click="acceptCookieConsent" src="/icons/dark/close.png" />
      <!-- title -->
      <h2 class="title">COOKIE NOTICE</h2>
      <!-- paragraph -->
      <p class="disclaimer">
        This site uses cookies, including third-party cookies, to function
        properly, perform statistical analysis, offer you a better experience
        and send our online advertising messages in line with your preferences.
        Consult the <a href="http://localhost:8080/privacy-policy">Privacy Policy </a> to find out more, to know which cookies are
        used.
        <br><br>
        By closing the banner or clicking <b>“I Agree”</b> you consent to the use of cookies.
      </p>
      <!-- button -->
      <div class="flex end">
      <button class="action" @click="acceptCookieConsent"> I Agree </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        acceptCookieConsent() {
            this.$store.commit('customer/setCookieConsent', true);
        }
    }
}
</script>

<style lang="scss" scoped>
.cookie-notice-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.744);
  z-index: 3;
  .cookie-notice {
    background-color: white;
    // height: 40%;
    width: 55%;
    padding: 15px 20px;
    position: relative;


  

    .close {
        position:absolute;
        right:2%;
        top:5%;
        width: 20px;
        height: 20px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            transform: rotate(10deg);
        }
    }

      @media(max-width: 768px) {
        width: 80%;

        .close {
            top:4%;
            right: 4%;
        }
    }

    .title {
        font-family: $font_2_bold;
    }
    .disclaimer {
        font-family: $font_1;
        margin:10px 0;
        font-size:13px;
    }

  }
}
</style>

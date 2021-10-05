<template>
  <div class="footer">
    <div class="flex accordions">
      <!-- important links -->
      <div class="container center">
        <div class="flex col center">
          <Button
            @click="$router.push(item.path)"
            class="item"
            v-for="item in importantLinks"
            :key="item.name"
          >
            {{ item.name }}
          </Button>
        </div>
      </div>

      <!-- find us on -->
      <div class="container find-us center">
        <div class="find-us-on flex center">
          <!-- instagram -->
          <a target="_blank" href="https://instagram.com/bounipun">
            <img src="/icons/light/instagram.png" />
          </a>
          <!-- facebook -->
          <a target="_blank" href="https://facebook.com/bounipun">
            <img src="/icons/light/facebook.png" />
          </a>
        </div>
      </div>
    </div>

    <!-- logo -->
    <div class="logo flex center" @click="$router.push('/')">
      <img src="/icons/light/logo.png" />
    </div>

    <!-- final footer text -->
    <div class="flex text center">
      <!-- copyright -->
      <div id="copyright" class="section">
        <span class="last-footer-item">
          Copyright © 2021 Bounipun. All Rights Reserved.</span
        >
      </div>

      <!-- crafted in kashmir -->
      <div @click="$getImagePath('abc')" id="crafted-in-kashmir" class="section">
        <span class="last-footer-item flex center"> Crafted with <img src="/icons/light/heart-filled-white.png" />  in Kashmir </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
      // console.log(import.meta.env,'-- NUXT VITE ENV');
  },
  data() {
    return {
      helpSection: [
        "Contact Us",
        "Shipping",
        "Payment Options",
        "Return & Exchanges",
        "FAQs",
        "Unsubscribe"
      ],
      findUsOnSection: [
        "Facebook",
        "Instagram",
        "Twitter",
        "Pinterest"
        // 'Youtube',
        // 'Snapchat'
      ],
      companySection: [
        "Our Story",
        "Joining the Team",
        "Legal",
        "Privacy Policy",
        "Terms & Conditions"
      ],
      importantLinks: [
        { name: "Contact Us", path: "/contact-us" },
        { name: "About Us", path: "/about-us"},
        // { name: "Shipping & Returns", path: "" },
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy-policy" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $primary_dark;
  width: 100%;
  padding: 2% 3%;
  position: relative;
  z-index: 2;

  .accordions {
    justify-content: space-around;
    width: 100%;

    .container {
      width: 40%;

      &.find-us {
        margin-top: 20px;
        margin-bottom: -13px;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      .container {
        width: 100%;
      }
    }
  }

  #crafted-in-kashmir {
    .last-footer-item {
      img {
        width: 10px;
        height: 10px;
        margin: 0 3px;
      }
    }
  }

  .logo {
    width: 100%;
    img {
      width: 20%;
      filter: contrast(3);
    }
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    padding: 7% 3%;
    .logo {
      margin-top: 10px;
      img {
        width: 40%;
      }
    }
  }

  .item {
    background: transparent;
    border: none;
    color: white;
    padding: 0;
    margin: 7px 0;
    font-size: 15px;
    color: #efefef;
    font-family: $font_1;

    @media (max-width: $breakpoint-tablet) {
      font-size: 15px;
    }
  }

  .find-us-on {
    margin-bottom: 20px;
    height: 100%;
    width: 100%;
    img {
      width: 27px;
      margin: 7px;
    }
  }

  .text {
      flex-direction: column;
    @media (max-width: 768px) {
    
    }
  }

  .section {
    span {
      color: white;
      font-size: 10px;
      font-family: $font_2;
    }
  }
}
</style>

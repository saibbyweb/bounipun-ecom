<template>
  <div class="footer-new">
    <div class="flex accordions">
      <!-- important links -->
      <div class="container">
        <Accordion
          heading="Important Links"
          :light="true"
          :noMargin="true"
          :expanded="true"
        >
          <div class="flex col start">
            <Button
              class="item"
              v-for="item in importantLinks"
              :key="item.name"
            >
              {{ item.name }}
            </Button>
          </div>
        </Accordion>
      </div>

      <!-- find us on -->
      <div class="container">
        <!-- <Accordion
          heading="Find Us On"
          :light="true"
          :noMargin="true"
          :expanded="true"
        >
  
        </Accordion> -->

        <div class="find-us-on flex center">
          <img src="/icons/light/instagram.png" />
          <img src="/icons/light/facebook.png" />
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
          Copyright © 2021 Bounipun Kashmir. All Rights Reserved.</span
        >
      </div>

      <!-- crafted in kashmir -->
      <div id="crafted-in-kashmir" class="section">
        <span class="last-footer-item"> Crafted with ❤ in Kashmir </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        { name: "Contact Us", path: "" },
        { name: "Shipping & Returns", path: "" },
        { name: "Terms & Conditions", path: "" },
        { name: "Privacy Policy", path: "" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer-new {
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
    }

    @media (max-width: 768px) {
      // flex-direction: column;
      .container {
        width: 50%;
      }
    }
  }

  .logo {
    width: 100%;
    img {
      width: 20%;
    }
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    padding: 7% 3%;
    .logo {
      margin-top: 40px;
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
    font-size: 13px;
    color: #efefef;
    font-family: $font_1;

    @media (max-width: $breakpoint-tablet) {
      font-size: 13px;
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
    @media (max-width: 768px) {
      flex-direction: column;
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
.footer {
  background-color: $primary_dark;
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% auto 33.33%;
  grid-template-rows: auto auto auto;
  padding: 1% 0 2% 0;
  box-sizing: border-box;

  @media (max-width: $breakpoint-tablet) {
    grid-template-columns: 50% 50%;
    padding: 2% 0 5% 0;
  }

  .center {
    align-items: flex-start;
  }

  .section {
    // border: 1px solid #efefef;
    display: flex;
    box-sizing: border-box;

    @media (max-width: $breakpoint-tablet) {
      padding: 8%;
    }

    /* help, find us on, company */
    &#help,
    &#find-us-on,
    &#company {
      padding: 2%;
      flex-direction: column;
      align-items: flex-start;

      h3 {
        color: white;
        margin: 6px 0;
        text-transform: uppercase;
        font-family: $font_2_semibold;
        font-weight: 900;
        letter-spacing: 2px;
        font-size: 1.5vw;

        @media (max-width: $breakpoint-tablet) {
          font-size: 4vw;
        }
      }

      .item {
        background: transparent;
        border: none;
        color: white;
        padding: 0;
        margin: 3px 0;
        font-size: 1vw;
        color: #efefef;

        @media (max-width: $breakpoint-tablet) {
          font-size: 2.8vw;
        }
      }
    }

    /* card symbols */
    &#card-symbols {
      grid-area: 2 / 1 / 2 / 4;
      align-items: center;
      justify-content: center;
      padding: 0%;
      display: grid;
      grid-template-columns: 30% 30%;
      grid-template-rows: 30% 30%;

      img {
        width: 80px;
        margin: 1%;

        &:nth-child(1) {
          justify-self: center;
          align-self: center;
        }

        &:nth-child(2) {
          justify-self: center;
          align-self: center;
        }

        &:nth-child(3) {
          justify-self: center;
          align-self: center;
        }

        &:nth-child(4) {
          justify-self: center;
          align-self: center;
        }
      }

      @media (max-width: $breakpoint-tablet) {
        grid-area: auto;

        img {
          width: 85%;
        }
      }
    }

    .last-footer-item {
      color: white;
      font-size: 15px;

      @media (max-width: $breakpoint-tablet) {
        font-size: 2.8vw;
      }
    }
  }
}
</style>

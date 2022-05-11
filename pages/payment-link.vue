<template>
  <div class="page payment-link">
    <!-- progress bar -->
    <div class="steps flex center">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step flex center"
        :class="{ active: activeStepIndex >= index }"
      >
        <div class="circle flex center">{{ index + 1 }}</div>
        <div
          v-if="index !== steps.length - 1"
          class="connector"
          :class="{ active: activeStepIndex === index + 1 }"
        ></div>
      </div>
    </div>
    <br />

    <!-- header -->
    <div class="header flex center col">
      <h1 class="heading">Payment Request</h1>
      <p class="desc">
        for <span class="link-name"> {{ linkDetails.name }} </span>
      </p>
    </div>

    <br />

    <!-- invoice details  -->
    <div v-if="linkDetailsFetched">
      <div v-if="!otpVerified" class="invoice-details flex">
   

        <!-- items -->
        <div class="items flex col">
          <h3 class="heading">Items</h3>
          <InvoiceItem
            v-for="(item, index) in linkDetails.items"
            :index="index"
            :item="item"
            :currency="linkDetails.currency"
            :formatCurrency="formatCurrency"
            :key="item._id"
          />
        </div>

             <!-- payee details -->
        <div class="payee-details flex col">
          <h3 class="heading">Payment Details</h3>
          <PayeeDetails
            :linkDetails="linkDetails"
            :formatCurrency="formatCurrency"
          />
          <!-- send otp -->
          <button v-if="!otpSent" class="action" @click="sendOtp">
            Confirm Phone Number
          </button>
          <!-- otp input box -->
          <InputCredential
            label="One Time Password"
            v-model="otp"
            v-if="otpSent"
          />
          <!-- verify otp -->
          <button v-if="otpSent" class="action" @click="verifyOtp">
            Verify Number
          </button>
          <!-- otp sent msg -->
          <p v-if="otpSent" class="message">
            A one time password has been sent to your mobile number.
          </p>
        </div>
      </div>
    </div>
    <br />

    <!-- delivery address form -->
    <div v-if="otpVerified" class="delivery-address">
      <h3 class="heading">Delivery Address</h3>
      <Delivery-Address-Form />
    </div>
    <!-- sub total + delivery address -->
    <!-- overview + payment completion -->
    <!-- payment success  -->
    <!-- payment failure (with retry) -->
  </div>
</template>

<script>
import CurrencyHelper from "../helpers/currencyHelper.js";
export default {
  mixins: [CurrencyHelper],
  data() {
    return {
      steps: ["Verify OTP", "Delivery Address", "Finalize Payment"],
      activeStepIndex: 0,
      otpSent: false,
      otpVerified: false,
      otp: "",
      invalidLink: false,
      linkDetailsFetched: true,
      linkDetails: {},
    };
  },
  mounted() {
    const paymentLinkId = this.$route.query.id;
    this.fetchPaymentLinkDetails(paymentLinkId);
  },
  methods: {
    async fetchPaymentLinkDetails(paymentLinkId) {
      const { fetched, doc } = await this.$fetchDocument(
        "paymentlink",
        paymentLinkId
      );
      if (!fetched) {
        this.invalidLink = true;
        return;
      }
      /* set new link details */
      this.linkDetails = doc;
      this.linkDetailsFetched = true;
    },
    sendOtp(value = true) {
      setTimeout(() => {
        this.otpSent = value;
      }, 1000);
    },
    verifyOtp(value = true) {
      setTimeout(() => {
        this.otpVerified = value;
        this.activeStepIndex = this.activeStepIndex + 1;
        window.scroll({ top: 0, behavior: "smooth" });
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-link {
  min-height: 40vh;
}
.heading {
  font-family: $font_2_bold;
  text-transform: uppercase;
  text-align: center;
}
.steps {
  .step {
    .circle {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      background-color: rgb(180, 180, 180);
      color: white;
      font-family: $font_2;
      font-weight: 900;
      font-size: 18px;
    }
    .connector {
      width: 20vw;
      height: 5px;
      background-color: rgb(180, 180, 180);
      &.active {
        background-color: rgb(73, 153, 73);
      }
    }

    &.active {
      .circle {
        background-color: rgb(73, 153, 73);
      }
    }
  }
}

.header {
  .heading {
    font-family: $font_1_bold;
  }
  .desc {
    font-size: 19px;
    .link-name {
      font-family: $font_2_bold;
    }
    .amount {
      font-family: $font_2_bold;
    }
  }
}

.invoice-details {
  width: 100%;
  column-gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;

    row-gap: 20px;
    .items {
      width: 100%;
    }
    .payee-details {
      width: 100%;
    }
  }
}

.items {
  width: 50%;
  row-gap: 10px;
}

.payee-details {
  width: 50%;
  row-gap: 10px;
  align-items: center;


  .action {
    background: #5a9a5a;
    width: 80%;
  }
  .message {
    text-align: center;
    font-size: 12px;
  }
}
</style>

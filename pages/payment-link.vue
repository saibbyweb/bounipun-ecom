<template>
  <div class="page payment-link">
    <!-- progress bar -->
    <div class="steps flex center">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step flex center"
        :class="{ active: activeStepIndex === index }"
      >
        <div class="circle flex center">{{ index + 1 }}</div>
        <div v-if="index !== steps.length - 1" class="connector"></div>
      </div>
    </div>
    <!-- invoice details  -->
    <div v-if="linkDetailsFetched">
      <div class="invoice-details">
          <!-- payee details -->
          <div class="payee-details">
              {{ linkDetails.payeeName }}
          </div>
      </div>
      <!-- send otp & verify otp-->
      <div class="verify-number"></div>
      <!-- sub total + delivery address -->
      <!-- overview + payment completion -->
      <!-- payment success  -->
      <!-- payment failure (with retry) -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: ["Verify OTP", "Delivery Address", "Finalize Payment"],
      activeStepIndex: 0,
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
  },
};
</script>

<style lang="scss" scoped>
.payment-link {
  min-height: 40vh;
}
.steps {
  //   gap: 10px;
  .step {
    .circle {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-color: rgb(180, 180, 180);
      color: white;
      font-family: $font_2;
      font-weight: 900;
      font-size: 20px;
    }
    .connector {
      width: 200px;
      height: 5px;
      background-color: rgb(180, 180, 180);
    }

    &.active {
      .circle {
        background-color: rgb(73, 153, 73);
      }
    }
  }
}
</style>

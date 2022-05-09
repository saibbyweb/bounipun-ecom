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
        <!-- items -->
        <div class="items">
          <h2 class="heading">Items</h2>
            <table border="1">
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Color</th>
                <th>Collection</th>
                <th>Variant</th>
                <th>Fabric</th>
              </tr>

              <tr v-for="(item, index) in linkDetails.items" :key="item._id">
                  <td> {{ index + 1}} </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.colorName }}</td>
                  <td>{{ item.collectionName }}</td>
                  <td>{{ item.variantName }}</td>
                  <td>{{ item.fabricName }}</td>
              </tr>
            </table>
          </div>
        <!-- payee details -->
        <div class="payee-details">
          <!-- {{ linkDetails.payeeName }} -->
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
      height: 50px;
      width: 50px;
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

.items {
  .heading {
    font-family: $font_1_bold;
    text-transform: uppercase;
  }
  .item {
    border: 1px solid #efefef;
    span {
      color: $gray;
      font-size: 11px;
      display: inline-block;
      &.name {
        color: $dark_gray;
        font-family: $font_1_bold;
        text-transform: uppercase;
        font-size: 13px;
      }
      &.collection {
        font-family: $font_2;
        font-size: 11px;
        margin-bottom: 4px;
      }
      &.price {
        color: $dark_gray;
        font-family: $font_1;
        font-size: 12px;
      }
      &.variant {
        font-weight: 900;
        color: $dark_gray;
      }
    }
  }
}
</style>

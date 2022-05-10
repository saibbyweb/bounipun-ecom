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
        <div v-if="index !== steps.length - 1" class="connector" :class="{ active: activeStepIndex === index + 1 }"></div>
      </div>
    </div>
    <br />
    <!-- header -->
    <div class="header flex center col">
      <h1 class="heading">Payment Request</h1>
      <p class="desc">
        <!-- of
        <span class="amount">
          {{ linkDetails.amount }} {{ linkDetails.currency }}
        </span> -->
        for
        <span class="link-name"> {{ linkDetails.name }} </span>
      </p>
    </div>

    <br />

    <!-- invoice details  -->
    <div v-if="linkDetailsFetched && !otpVerified">
      <div class="invoice-details flex">
        <!-- payee details -->
        <div class="payee-details flex col">
          <h3 class="heading">Payment Details</h3>
          <div class="payee flex col shadow">
            <label class="label"> Customer Name:</label>
            <span> {{ linkDetails.payeeName }} </span>
            <label class="label"> Phone Number:</label>
            <span>
              {{ linkDetails.countryCode }} {{ linkDetails.phoneNumber }}
            </span>
            <label class="label"> Email:</label>
            <span> {{ linkDetails.email }} </span>
            <label class="label"> Amount Payable:</label>
            <span>
              {{ formatCurrency(linkDetails.amount, linkDetails.currency) }}
            </span>
            <label class="label"> Due Date:</label>
            <span>
              {{
                linkDetails.validityRange
                  ? $formatDate(linkDetails.validityRange.end, true)
                  : ""
              }}
            </span>
            <br />
          </div>
          <!-- send otp -->
          <button v-if="!otpSent" class="action" @click="sendOtp">Confirm Phone Number</button>
                   <!-- otp input box -->
          <InputCredential label="One Time Password" v-model="otp" v-if="otpSent" />
          <!-- verify otp -->
          <button v-if="otpSent" class="action" @click="verifyOtp">Verify Number</button>
           <!-- otp sent msg -->
          <p v-if="otpSent" class="message"> A one time password has been sent to your mobile number. </p>

        </div>

        <!-- items -->
        <div class="items flex col">
          <h3 class="heading">Items</h3>
          <div
            class="item shadow flex center"
            v-for="(item, index) in linkDetails.items"
            :key="item._id"
          >
            <!-- serial no -->
            <p class="serial-number flex center">{{ index + 1 }}.</p>
            <!-- details -1  -->
            <div class="details-1 flex col">
              <div class="flex col">
                <!-- name -->
                <span class="name"> {{ item.name }} &nbsp; </span>
                <!-- color name -->
                <span class="color-name"> {{ item.colorName }}</span>
                <!-- collection -->
                <span class="collection"> {{ item.collectionName }} </span>
                <!-- variant -->
                <span class="variant"> {{ item.variantName }} &nbsp; </span>
                <!-- fabric -->
                <span class="fabric"> {{ item.fabricName }} </span>
              </div>
            </div>
            <!-- detail - 2 -->
            <div class="details-2 flex around">
              <!-- quantity -->
              <span>
                {{ formatCurrency(item.rate, linkDetails.currency) }} x
                {{ item.quantity }}
              </span>
              <!-- total -->
              <span class="total">
                {{ formatCurrency(item.total, linkDetails.currency) }}
              </span>
            </div>
          </div>
          <!-- <table>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Color</th>
              <th>Collection</th>
              <th>Variant</th>
              <th>Fabric</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>

            <tr
              v-for="(item, index) in linkDetails.items"
              :key="item._id"
              class="item"
            >
              <td>{{ index + 1 }}</td>
              <td class="namex">{{ item.name }}</td>
              <td>{{ item.colorName }}</td>
              <td>{{ item.collectionName }}</td>
              <td>{{ item.variantName }}</td>
              <td>{{ item.fabricName }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.rate }}</td>
              <td>{{ item.total }} {{ linkDetails.currency }}</td>
            </tr>
          </table> -->
        </div>
      </div>
      <br />

      <!-- send otp & verify otp-->
      <div class="verify-number"></div>
      <!-- sub total + delivery address -->
      <!-- overview + payment completion -->
      <!-- payment success  -->
      <!-- payment failure (with retry) -->
    </div>

    <!-- delivery address form -->
    <div class="delivery-address">
        <Delivery-Address-Form  />
    </div>
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
        this.activeStepIndex = this.activeStepIndex+1;
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
    flex-direction: column-reverse;

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
  .item {
    border: 1px solid #efefef;
  }
  th,
  td {
    border: 2px solid #efefef;
    padding: 2px 10px;
  }
  th {
    font-family: $font_2;
  }

  td,
  span {
    color: $gray;
    font-size: 13px;
    //   display: inline-block;
    &.name {
      color: $dark_gray;
      font-family: $font_1_bold;
      text-transform: uppercase;
    }
    &.collection {
      //   font-family: $font_2;
    }
    &.price {
      color: $dark_gray;
      font-family: $font_1;
    }
    &.variant {
      font-weight: 900;
      color: $dark_gray;
    }
    &.total {
      color: $dark_gray;
      font-family: $font_1_bold;
      font-size: 15px;
    }
  }
  .item {
    // height: 120px;
    padding: 7px 5px;

    column-gap: 30px;

    span {
      word-wrap: break-word;
    }

    .serial-number {
      text-align: center;
      width: 6%;
      height: 100%;
      padding: 10px;
      font-size: 18px;
      font-family: $font_1_bold;
      //   background-color: #333;
      color: #333;
    }

    .details-1 {
      width: 45%;
    }
    .details-2 {
      width: 37%;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      padding: 10px 0;
      .serial-number {
        display: none;
      }
      .details-1,
      .details-2,
      .details-3 {
        width: 90%;
      }

      .details-2 {
        margin-top: 20px;
        justify-content: space-between;
        gap: 30px;
      }
    }
  }
}

.payee-details {
  width: 50%;
  row-gap: 10px;

  .payee {
    padding: 10px 20px;
    row-gap: 3px;
    label {
      font-size: 14px;
      color: $gray;
    }
    span {
      font-family: $font_1_semibold;
      font-weight: 100;
      font-size: 15px;
    }
  }
  .action {
    background: #5a9a5a;
  }
  .message {
      text-align: center;
      font-size:12px;
  }
}
</style>

<template>
  <div class="page payment-link">
    <div v-if="linkDetailsFetched && !invalidLink && !alreadyPaid">
      <!-- progress bar -->
      <div v-if="!paymentProcessedSuccessfully" class="steps flex center">
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
            :class="{ active: activeStepIndex >= index + 1 }"
          ></div>
        </div>
      </div>
      <br />

      <!-- header -->
      <div v-if="!paymentProcessedSuccessfully" class="header flex center col">
        <h1 class="heading">{{ title }}</h1>
        <p class="desc">
          <span class="link-name"> {{ desc }} </span>
        </p>
      </div>

      <br />

      <!-- invoice details  -->
      <div v-if="linkDetailsFetched && !paymentProcessedSuccessfully">
        <div
          v-if="!otpVerified || paymentOverview"
          class="invoice-details flex"
        >
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

          <!-- payee details and payment information -->
          <div class="flex col payee-and-payment">
            <!-- payee details -->
            <div class="payee-details flex col">
              <h3 class="heading">Payment Details</h3>
              <PayeeDetails
                :linkDetails="linkDetails"
                :formatCurrency="formatCurrency"
              />

              <div
                class="actions flex col center"
                v-if="!paymentOverview"
                style="width: 100%"
              >
                <!-- send otp -->
                <button v-if="!otpSent" class="action" @click="sendOtp">
                  Generate OTP
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

             <!-- delivery address -->
          <div v-if="steps[activeStepIndex] === 'Finalize Payment'" class="delivery-address-overview shadow flex col">
              <h3 class="heading">Delivery Address</h3>
            <span class="name">
              {{ deliveryAddress.firstName }} {{ deliveryAddress.surName }}
            </span>
            <span> {{ deliveryAddress.addressLine1 }}</span>
            <span> {{ deliveryAddress.addressLine2 }} </span>
            <span> {{ deliveryAddress.state || "" }} </span>
            <span> {{ deliveryAddress.city }} </span>
            <span> {{ deliveryAddress.postalCode }} </span>
            <span> {{ deliveryAddress.mobileNumber }} </span>
            <!-- <span> {{ deliveryAddress.email }} </span> -->
          </div>

            <!-- overview + payment completion -->
            <div v-if="paymentOverview" class="payment-overview flex center">
              <ProcessPayment
                type="paymentLink"
                :currency="linkDetails.currency"
                :amount="linkDetails.amount"
                :address="deliveryAddress"
                :payload="{
                  linkId: linkDetails._id,
                  countryCode: linkDetails.countryCode,
                  phoneNumber: linkDetails.phoneNumber,
                }"
                :demoMode="false"
                @paymentProcessed="paymentProcessed"
              />
            </div>

          </div>




        </div>
      </div>
      <br />

      <!-- delivery address form -->
      <div
        v-if="otpVerified && !paymentOverview"
        class="delivery-address flex center"
      >
        <div class="form">
          <!-- country selection -->
          <CountrySelect
            :initialValue="linkDetails.countryCode"
            @setCountryIsoCode="countryIsoCode = $event"
            :lock="true"
          />
          <!-- delivery form -->
          <Delivery-Address-Form
            :countryDialCode="linkDetails.countryCode"
            :countryIsoCode="countryIsoCode"
            @continue="moveToCheckout"
          />
        </div>
      </div>

      <!-- payment success  -->
      <div v-if="paymentProcessedSuccessfully" class="payment-success">
        <ActionResponse
          icon="/icons/order_success.png"
          title="Payment Successful."
          :message="`We have received a payment of ${linkDetails.amount} ${linkDetails.currency}. Thank you.`"
          action="Continue Shopping!"
        />
      </div>
    </div>
    <!-- if already paid -->
    <div v-if="alreadyPaid">
      <ActionResponse
        icon="/icons/order_success.png"
        title="Already Paid"
        :message="`We have already received a payment of ${linkDetails.amount} ${linkDetails.currency} on this payment link. Thank you.`"
        action="Continue Shopping!"
      />
    </div>
    <!-- invalid link -->
    <div v-if="invalidLink">
      <ActionResponse
        icon="/icons/payment_failed.png"
        title="Broken Payment Link"
        message="Kindly recheck the URL and try again"
        action="Continue Shopping"
      />
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
      deliveryAddress: {},
      title: "Payment Request",
      desc: "",
      countryIsoCode: "",
      paymentOverview: false,
      alreadyPaid: false,
    };
  },
  mounted() {
    const paymentLinkId = this.$route.query.id;
    this.fetchPaymentLinkDetails(paymentLinkId);
  },
  methods: {
    /* payment proccessed */
    paymentProcessed() {
      this.activeStepIndex = this.activeStepIndex + 1;
      window.scroll({ top: 0, behavior: "smooth" });
      this.paymentProcessedSuccessfully = true;
      this.title = "Payment Successful";
      this.desc = "";
    },
    async fetchPaymentLinkDetails(paymentLinkId) {
      // const { fetched, doc } = await this.$fetchDocument(
      //   "paymentlink",
      //   paymentLinkId
      // );

      const { fetched, doc } = await this.$fetchData("paymentlink", {
        _id: paymentLinkId,
        status: true,
      });

      if (!fetched) {
        this.invalidLink = true;
        return;
      }

      /* if already paid */

      /* set new link details */
      this.linkDetails = doc;
      this.linkDetailsFetched = true;
      this.desc = `for ${doc.name}`;
      if (doc.paid) {
        this.alreadyPaid = true;
      }
    },
    sendOtp(value = true) {
      this.otpSent = value;
    },
    verifyOtp(value = true) {
      this.otpVerified = value;
      this.activeStepIndex = this.activeStepIndex + 1;
      window.scroll({ top: 0, behavior: "smooth" });
      this.title = "Delivery Address";
      this.desc = `Enter a shipping address`;
    },
    moveToCheckout(deliveryAddress) {
      this.activeStepIndex = this.activeStepIndex + 1;
      this.title = "Payment Overview";
      this.desc = `Review items, delivery address and payment information`;
      window.scroll({ top: 0, behavior: "smooth" });
      this.deliveryAddress = deliveryAddress;
      this.paymentOverview = true;
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
    text-align: center;
    .link-name {
      font-family: $font_2;
    }
    .amount {
      font-family: $font_2_bold;
    }
  }

  @media(max-width: 768px) {
    .desc {
      font-size: 13px;
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

.payee-and-payment {
  width: 50%;
  align-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }

  .payment-overview {
    margin-top: 20px;
  }
}

.payee-details {
  width: 100%;
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

.delivery-address {
  .form {
    width: 60%;
  }

  @media (max-width: 768px) {
    .form {
      width: 100%;
    }
  }
}

  .delivery-address-overview {
    margin-top: 20px;
    width: 100%;
    position: relative;
    background: rgb(255, 255, 255);
    padding: 3%;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);

    .heading {
      background-color: rgb(126, 190, 126);
      color:white;
      border-radius: 2px;
      padding:10px;
      margin-bottom:10px;
    }

    span {
      font-family: $font_2;
      font-size: 14px;
      margin: 2px 0;

      &.name {
        font-family: $font_1_bold;
        font-weight: 900;
      }
    }
  }
</style>

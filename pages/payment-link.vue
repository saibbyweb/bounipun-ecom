<template>
  <div class="page payment-link">
    <div v-if="linkDetailsFetched && !invalidLink && !alreadyPaid">
      <!-- progress bar -->
      <div
        v-if="!paymentProcessedSuccessfully && showSteps"
        class="steps flex center"
      >
        <img
          v-if="activeStepIndex > 0"
          @click="goBack"
          class="back-button"
          src="/icons/dark/arrow-left.png"
        />

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
                v-if="linkDetailsFetched"
                :linkDetails="linkDetails"
                :formatCurrency="formatCurrency"
              />

              <div
                class="actions flex col center"
                v-if="!paymentOverview"
                style="width: 100%"
              >
                <!-- customer note -->
                <div
                  class="customer-note flex center"
                  v-if="linkDetails.customerNote"
                >
                  <p class="note">
                    <span class="label"> Note: </span>
                    <span class="value"> {{ linkDetails.customerNote }} </span>
                  </p>
                </div>
                <!-- send otp -->
                <button v-if="!otpSent" class="action" @click="sendOtp">
                  {{ sendOtpButtonText }}
                </button>
                <!-- otp input box -->
                <InputCredential
                  label="One Time Password"
                  v-model="otp"
                  v-if="otpSent"
                />
                <!-- verify otp -->
                <button v-if="otpSent" class="action" @click="verifyOtp(false)">
                  Verify Number
                </button>
                <!-- otp sent msg -->
                <p v-if="otpSent" class="message">
                  A one time password has been sent to your mobile number.
                </p>
                <!-- form error -->
                <p v-if="error.status" class="msg error">{{ error.message }}</p>
              </div>
            </div>

            <!-- delivery address -->
            <div
              v-if="steps[activeStepIndex] === 'Finalize Payment'"
              class="delivery-address-overview shadow flex col"
            >
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
                  address: deliveryAddress
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
      showSteps: true,
      activeStepIndex: 0,
      otpSent: false,
      otpVerified: false,
      sendOtpButtonText: "Generate OTP",
      otp: "",
      otpOptional: false,
      addressOptional: false,
      invalidLink: false,
      linkDetailsFetched: true,
      linkDetails: {},
      deliveryAddress: {},
      title: "Payment Request",
      desc: "",
      countryIsoCode: "",
      paymentOverview: false,
      alreadyPaid: false,
      byPassMode: true,
      paymentProcessedSuccessfully: false,
      error: {
        status: false,
        message: "Something went wrong",
      },
    };
  },
  mounted() {
    const paymentLinkId = this.$route.query.id;
    this.fetchPaymentLinkDetails(paymentLinkId);
  },
  methods: {
    goBack() {
      if (this.paymentOverview) this.goBackToDeliveryForm();
      else this.goBackToFirstScreen();
    },
    goBackToFirstScreen() {
      this.otpSent = false;
      this.otpVerified = false;
      this.activeStepIndex = 0;
      this.otp = "";
      this.title = "Payment Request";
      this.desc = `Complete your payment in 3 easy steps`;
    },
    goBackToDeliveryForm() {
      this.paymentOverview = false;
      this.verifyOtp(true);
      this.activeStepIndex = 1;
    },
    /* payment proccessed */
    paymentProcessed() {
      this.activeStepIndex = this.activeStepIndex + 1;
      window.scroll({ top: 0, behavior: "smooth" });
      this.paymentProcessedSuccessfully = true;
      this.title = "Payment Successful";
      this.desc = "";
    },
    async fetchPaymentLinkDetails(paymentLinkId) {
      const { fetched, doc } = await this.$fetchData("paymentlink", {
        _id: paymentLinkId,
        status: true,
      });

      if (!fetched) {
        this.invalidLink = true;
        return;
      }

      /* set new link details */
      this.linkDetails = doc;

      /* if already paid */
      if (doc.paid) {
        this.alreadyPaid = true;
      }
      /* set description */
      this.desc = `Complete your payment in 3 easy steps`;

      /* decide landing step */
      if (doc.options) {
        /* both otp and address is optional */
        if (doc.options.otpOptional && doc.options.addressOptional) {
          this.showSteps = false;
          this.title = "Payment Overview";
          this.desc = `Review items and payment information`;
          this.otpOptional = true;
          this.addressOptional = true;
            /* set address */
          this.setBasicAddress();
          this.paymentOverview = true;
        
        } else if (doc.options.otpOptional && !doc.options.addressOptional) {
          /* only otp is optional */
          this.showSteps = false;
          this.sendOtpButtonText = "Continue";
          this.otpOptional = true;
        } else if (!doc.options.otpOptional && doc.options.addressOptional) {
          /* only address is optional */
          this.showSteps = false;
          this.addressOptional = true;
        }
      }

      this.linkDetailsFetched = true;
    },
    setBasicAddress() {
        this.deliveryAddress.firstName = this.linkDetails.payeeName;
        this.deliveryAddress.surName = '';
        this.deliveryAddress.email = this.linkDetails.email;
        this.deliveryAddress.mobileNumber = this.linkDetails.phoneNumber;
    },
    setAddressTitle() {
      const { options } = this.linkDetails;
      let addressType = 'Billing'
      if(options) {
        addressType = options.addressType ?? 'Billing'
      }
      this.title = `${addressType} Address`;
      this.desc = `Enter a ${addressType} address`
    },
    async sendOtp() {
      /* if otp is optional */
      if (this.otpOptional) {
        window.scroll({ top: 0, behavior: "smooth" });
        this.setAddressTitle();
        this.otpVerified = true;
        return;
      }
      /* if byPass mode is on */
      if (this.byPassMode) {
        this.otpSent = true;
        return;
      }

      /* send otp */
      const { response, resolved } = await this.$post("/sendOtp", {
        countryDialCode: this.linkDetails.countryCode,
        phoneNumber: this.linkDetails.phoneNumber,
        purpose: "verify-payment-link",
      });

      /* if req not resolved */
      if (resolved === false) {
        console.log("send otp not resolved");
        return;
      }

      /* map otp sent response */
      this.otpSent = response.otpSent === true;
    },
    async verifyOtp(localBypass = false) {
      /* if bypass mode is on */
      if (this.byPassMode || localBypass) {
        this.otpVerified = true;
        this.setAddressTitle()
        window.scroll({ top: 0, behavior: "smooth" });
        return;
      }

      /* verify otp */
      const { response, resolved } = await this.$post("/verifyOTP", {
        countryDialCode: this.linkDetails.countryCode,
        phoneNumber: this.linkDetails.phoneNumber,
        otp: this.otp,
      });

      /* if req not resolved */
      if (resolved === false) {
        console.log("verify otp not resolved");
        /* TODO: show error msg */
        this.error.message = "Incorrect OTP";
        this.error.status = true;
        return;
      }

      /* otp verified */
      this.otpVerified = true;
      window.scroll({ top: 0, behavior: "smooth" });

      /* if address is optional, move to checkout */
      if (this.addressOptional) {
        this.title = "Payment Overview";
        this.desc = `Review items and payment information`;
        this.setBasicAddress();
        this.paymentOverview = true;
        return;
      }

      this.activeStepIndex = this.activeStepIndex + 1;
      this.setAddressTitle()
    },
    moveToCheckout(deliveryAddress) {
      this.activeStepIndex = 2;
      this.title = "Payment Overview";
      this.desc = `Review items, delivery address and payment information`;
      window.scroll({ top: 0, behavior: "smooth" });
      this.deliveryAddress = deliveryAddress ?? {};
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
  .back-button {
    margin-right: 8%;
    width: 50px;
    height: 50px;
    background-color: rgb(227, 223, 223);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: rgb(244, 244, 244);
    }

    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }

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
  position: relative;

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

  @media (max-width: 768px) {
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
    color: white;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
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
$noteColor: #333;
.note {
  width: 100%;
  text-align: center;
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;

  .label {
    background-color: white;
    color: $noteColor;
    border: 1px solid $noteColor;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
  .value {
    border: 1px solid $noteColor;
    background-color: $noteColor;
    color: white;
    padding: 3px 10px;
    text-align: left;
  }
}
</style>

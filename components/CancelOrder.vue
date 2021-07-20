<template>
  <div class="wrapper flex center">
    <!-- cancellation form -->
    <div class="cancellation-form shadow">
      <!-- title -->
      <div class="title flex between v-center">
        <h1 class="">Cancel Order</h1>
        <img
          class="close"
          src="/icons/light/close.png"
          @click="$emit('hideForm')"
        />
      </div>

      <!-- reason -->
      <div v-if="!orderCancelled" class="cancellation-box">
        <!--  -->
        <p class="notice">
          This cancellation window will only be available for 24 hours from the
          time of ordering.
        </p>
        <!-- reasons -->
        <div
          class="reason"
          v-for="(reason, index) in cancellationReasons"
          :key="index"
        >
          <label>
            <input
              class="radio"
              type="radio"
              name="reason"
              :value="reason"
              v-model="selectedReason"
            />
            {{ reason }}
          </label>
          <br />
        </div>

        <!-- custom reason text -->
        <InputBox label="Cancellation Reason" v-model="selectedReason" />

        <div class="actions flex around">
          <button class="action confirm-cancel" @click="confirmCancellation">
            Confirm Cancellation
          </button>
          <button class="action dont-cancel" @click="$emit('hideForm')">
            I don't want to cancel
          </button>
        </div>
      </div>

      <!-- cacellation confirmation -->
      <div v-if="orderCancelled" class="cancelled">
        <p>
          Your cancellation request has been successfully processed. Refund has
          been initiated against the payment method used for this order. Please
          note that it can take upto 7-15 business days for money to reflect in
          your account.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderId: {
      type: String,
      default: ""
    },
    subOrderId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cancellationReasons: [
        "I have purchased the wrong item",
        "I accidently bought the same item twice"
      ],
      selectedReason: "",
      orderCancelled: false
    }
  },
  methods: {
    async confirmCancellation() {
    //   this.$store.commit("customer/setLoading", true);
    const canceOrderRequest = await this.$post('/confirmOrderCancellation', {
            orderId: this.orderId,
            subOrderId: this.subOrderId,
            reason: this.selectedReason
    });

    if(canceOrderRequest.resolved === false)
        return;
        
    this.orderCancelled = true;
    this.$emit('orderCancelled');

    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 3%;
  background-color: rgba(0, 0, 0, 0.593);
  z-index: 1;
}
.cancellation-form {
  background-color: white;
  width: 100%;

  @media(min-width: 769px) {
    width: 60%;
  }
  .title {
    background-color: $dark_gray;
    padding: 10px;

    h1 {
      font-size: 22px;
      color: white;
    }

    .close {
      width: 20px;
      height: 20px;
    }
  }
  .cancellation-box {
    padding: 10px;

    .notice {
      font-size: 12px;
      font-family: $font_2;
      margin-bottom: 10px;
    }

    .reason {
      label {
        cursor: pointer;
        font-size: 13px;
        .radio {
        }
      }
    }
    .actions {
      button {
        font-size: 9px;
        padding: 3% 1%;

        &.confirm-cancel {
          width: 42%;
          background-color: $gray;
        }

        &.dont-cancel {
          width: 55%;
        }
      }

      @media(min-width: 769px) {
        button {
          font-size:14px;
          padding:10px 25px;
        }
      }
    }
  }
  .cancelled {
    padding: 10px;
    p {
      font-size: 13px;
    }
  }


}
</style>

<template>
  <div class="page orders">
    <!-- cancellation form -->
    <div class="cancellation-form shadow">
      <!-- title -->
      <div class="title flex between v-center">
        <h1 class="">Cancel Order</h1>
        <img class="close" src="/icons/light/close.png" @click="orderCancelled = false"/>
      </div>

      <!-- reason -->
      <div v-if="!orderCancelled" class="cancellation-box">
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
          <button class="action confirm-cancel" @click="orderCancelled = true">Confirm Cancellation</button>
          <button class="action dont-cancel">
            I don't want to cancel
          </button>
        </div>
      </div>

      <!-- cacellation confirmation -->
      <div v-if="orderCancelled" class="cancelled">
        <p> Your cancellation request has been successfully processed. Refund has
        been initiated against the payment method used for this order. Please
        note that it can take upto 7-15 business days for money to reflect in
        your account.</p>
      </div>
    </div>

    <!-- loop through every order -->
    <div v-for="order in orders" :key="order._id">
      <div
        class="order-item"
        v-for="(subOrder, index) in order.items"
        :key="index"
      >
        <!-- status bar -->
        <div class="status-bar">
          <!-- status -->
          <span class="status"> Order Status: {{ subOrder.status }} </span>
          <!-- icon -->
          <img class="arrow" src="/icons/account/arrow-white.png" />
        </div>

        <!-- order details -->
        <div class="details">
          <!-- product image -->
          <div
            class="image-box"
            :style="
              `background-image: url(${$getImagePath(subOrder.mainImage)})`
            "
          ></div>
          <!-- text details -->
          <div class="text-details">
            <span class="name"> {{ subOrder.productName }} </span>
            <span class="collection"> {{ subOrder.collectionName }} </span>
            <span class="fabric"> Fabric: {{ subOrder.fabricName }} </span>
            <span class="fabric"> {{ subOrder.fabricInfo1 }} </span>
            <span class="quantity"> Quantity: {{ subOrder.quantity }} </span>
            <!-- <span class="price">
            Amount Paid: <b>  {{ order.currency }} {{ subOrder.quantity * subOrder.price }} </b>
          </span> -->
            <span class="price">
              Amount Paid:
              <b> {{ order.currency }} {{ subOrder.itemTotal }} </b>
            </span>
          </div>
        </div>

        <!-- divider -->
        <div class="divider"></div>

        <!-- actions -->
        <div class="actions">
          <!-- pre delivery -->
          <div class="pre-delivery">
            <button>Track</button>
            <button :disabled="true">Cancel</button>
            <button>Help</button>
          </div>
          <!-- post delivery -->
          <div class="post-delivery">
            <!-- rate product -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      cancellationReasons: [
        "I have purchased the wrong item",
        "I found the price compartively higher"
      ],
      selectedReason: "",
      orderCancelled: false
    };
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      const { response, resolved } = await this.$post("/fetchProfile");

      if (resolved === false) {
        return;
      }

      const orders = response.orders;
      this.orders = orders;
    }
  }
};
</script>

<style lang="scss" scoped>
.cancellation-form {
  .title {
    background-color: $dark_gray;
    padding: 10px;

    h1 {
      font-size: 22px;
      color: white;
    }

    .close {
      width: 20px;
      height:20px;
    }
  }
  .cancellation-box {
    padding: 10px;

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
        padding:3% 1%;

        &.confirm-cancel {
          width: 42%;
          background-color: $gray;
        }

        &.dont-cancel {
          width: 55%;
        }
      }
    }
  }
  .cancelled {
    padding:10px;
    p {
      font-size:13px;
    }
  }
}
.orders {
  .order-item {
    width: 100%;
    box-shadow: 1px 1px 15px rgba(51, 51, 51, 0.16);
    margin: 20px 0;
    // height:40vh;

    /* status bar */
    .status-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #333333;
      width: 100%;
      padding: 3% 4%;

      /* status text */
      .status {
        color: white;
        font-size: 12px;
        text-transform: capitalize;
      }

      /* icon */
      .arrow {
        width: 2%;
      }
    }

    /* details */
    .details {
      display: flex;

      .image-box {
        width: 30%;
        height: 30vw;
        background-size: cover;
        background-position: top;

        .image {
          width: 100%;
        }
      }

      .text-details {
        width: 70%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-top: 10px;

        span {
          font-size: 10px;

          &.name {
            text-transform: uppercase;
            font-family: $font_1_semibold;
            font-size: 13px;
          }

          &.collection {
            text-transform: uppercase;
            font-family: $font_1;
            font-weight: 100;
            font-size: 11px;
            margin-bottom: 5px;
          }

          &.price {
            // font-size:12px;
            align-self: flex-end;
            margin: 1% 10% 0 0;

            b {
              font-family: $font_1_semibold;
              font-size: 12px;
            }
          }
        }
      }
    }

    /* divider */
    .divider {
      margin: 10px 0;
      height: 1px;
      width: 100%;
      opacity: 0.3;
      background-color: rgb(174, 174, 174);
    }

    /* actions */
    .actions {
      .pre-delivery {
        padding: 10px 0;
        display: flex;
        justify-content: space-around;

        button {
          border: 1px solid rgb(144, 144, 144);
          background: transparent;
          width: 22%;
          font-size: 10px;
          color: $primary_dark;
          text-transform: uppercase;

          &:disabled {
            border: 1px solid rgb(180, 180, 180);
            color: $gray;
          }
        }
      }
    }
  }
}
</style>

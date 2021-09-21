<template>
  <div class="order-item-wrapper">
    <!-- if order is cancelled -->
    <div v-if="cancelled" class="cancelled flex between v-center">
      <span class="status"> Cancelled </span>
      <div class="details flex col">
        <span class="by"> By: {{ localItem.cancellation.by }}</span>
        <span class="reason"> Reason: {{ localItem.cancellation.reason }} </span>
      </div>
    </div>

    <!-- TODO: cancellation form -->
    <div
      v-if="showCancellationForm && !orderCancelled"
      class="cancellation-form"
    >
      <!-- title -->
      <h3 class="title">Cancel Order</h3>

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

      <!-- actions (confirm or discard) -->
      <div class="actions flex around">
        <!-- confirm cancel -->
        <button class="action confirm-cancel" @click="confirmCancelOrder">
          Confirm Cancel
        </button>

        <!-- discard  -->
        <button
          class="action discard-cancel"
          @click="showCancellationForm = false"
        >
          Discard Cancellation
        </button>
      </div>
    </div>

    <!-- cacellation confirmation -->
    <div v-if="orderCancelled" class="cancellation-msg">
      <p>
        Your cancellation request has been successfully processed. Refund has
        been initiated against the payment method used for this order. Please
        note that it can take upto 7-15 business days for money to reflect in
        your account.
      </p>
    </div>

    <div class="order-item">
      <!-- main image -->
      <div
        class="image-container"
        :style="`background-image: url(${$getImagePath(localItem.mainImage)})`"
      >
        <!-- <img :src="item.mainImage" /> -->
      </div>

      <!-- details and quantity -->
      <div class="details-and-quantity">
        <!-- name -->
        <span class="name"> {{ localItem.productName }} </span>
        <!-- color name -->
        <span class="color-name"> {{ localItem.colorName }} </span>
        <!-- collection -->
        <span class="collection"> {{ localItem.collectionName }} </span>
        <!-- variant -->
        <span class="variant"> {{ localItem.variantName }} </span>
        <!-- fabric -->
        <span class="fabric"> {{ localItem.fabricName }} </span>
        <!-- fabric info 1-->
        <span class="fabric"> {{ localItem.fabricInfo1 }} </span>
        <!-- price -->
        <span class="price"> {{ currency }} {{ localItem.price }} </span>
        <!-- quantity -->
        <span class="quantity"> Quantity: {{ localItem.quantity }} </span>
      </div>

      <!-- total product price -->
      <!-- <p class="total-product-price">INR {{ localItem.quantity * localItem.price }}</p> -->
      <p class="total-product-price">
        {{ currency }} {{ localItem.itemTotal }}
      </p>
    </div>
    <!-- actions -->
    <div v-if="!orderCancelled" class="actions flex wrap v-center">
      <!-- tracking id -->
      <InputBox
        v-if="!cancelled"
        class="tracking-id"
        label="Tracking ID"
        v-model="localItem.trackingId"
      />
      <!-- tracking url -->
      <InputBox
        v-if="!cancelled"
        class="tracking-url"
        label="Tracking URL"
        v-model="localItem.trackingUrl"
      />

      <!-- order timeline -->
      <div class="timeline flex center">
        <p class="label">Timeline:</p>
        <div class="list flex col">
          <span v-for="(event, index) in localItem.timeline" :key="index">
            {{ event.status }} --- {{ $formatDate(event.updatedAt) }}
          </span>
        </div>
      </div>

      <div v-if="!cancelled" class="update-box flex between">
        <!-- update status -->
        <SelectBox
          class="status"
          :options="allStatusUpdates"
          v-model="localItem.status"
          label="Set Order Status:"
        />

        <button class="update" @click="updateOrder">Update Order</button>
      </div>

      <Toast :show="updated" msg="Order Updated" />
    </div>

    <!--TODO: cancel button -->
    <button
      v-if="!cancelled && !showCancellationForm"
      class="action cancel-btn"
      @click="showCancellationForm = true"
    >
      Cancel Order
    </button>
  </div>
</template>

<script>
export default {
  props: {
    orderId: String,
    item: Object,
    currency: {
      type: String,
      default: ""
    }
  },
  watch: {
    item(newVal) {
      this.localItem = newVal;
    }
  },
  computed: {
    cancelled() {
      return this.localItem.status === "cancelled";
    }
  },
  data() {
    return {
      localItem: this.item,
      allStatusUpdates: [
        {
          name: "Pending",
          value: "pending"
        },
        {
          name: "Confirmed",
          value: "confirmed"
        },
        {
          name: "Shipped",
          value: "shipped"
        },
        {
          name: "Delayed",
          value: "delayed"
        },
        {
          name: "Delivered",
          value: "delivered"
        }
      ],
      updated: false,
      showCancellationForm: false,
      cancellationReasons: [
        "Communicated by customer via phone / email / whatsapp",
        "Cannot be fulfilled"
      ],
      selectedReason: "",
      orderCancelled: false
    };
  },
  methods: {
    formatCurrency(adjustedPrice) {
      adjustedPrice = parseFloat(adjustedPrice);
      return this.$store.getters["customer/formatCurrency"](adjustedPrice);
    },
    async updateOrder() {
      const pushUpdate = await this.$post("/updateOrderItemDetails", {
        orderId: this.orderId,
        subOrderId: this.item._id,
        status: this.localItem.status,
        trackingId: this.localItem.trackingId,
        trackingUrl: this.localItem.trackingUrl
      });

      /* if request not resolved */
      if (pushUpdate.resolved === false) {
        return;
      }

      this.updated = true;
      this.$emit("subOrderUpdated");
      setTimeout(() => (this.updated = false), 1300);
    },
    async confirmCancelOrder() {
      const canceOrderRequest = await this.$post("/cancelSubOrder", {
        orderId: this.orderId,
        subOrderId: this.localItem._id,
        reason: this.selectedReason
      })

      if (canceOrderRequest.resolved === false) return;

      this.orderCancelled = true;
      this.$emit("orderCancelled")
    }
  }
};
</script>

<style lang="scss" scoped>
.order-item-wrapper {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  margin: 20px;
  padding-bottom: 10px;
  position: relative;

  .cancelled {
    background-color: rgba(201, 34, 34, 0.829);
    width: 100%;
    padding: 3px;

    .status {
      width: 10%;
      padding-left:5px;
    }
    .details {
      width: 70%;
    }

    span {
      color: white;
      font-size: 12px;
    }

  }

  .cancellation-msg {
    font-size: 12px;
    padding:10px;
  }

  .cancel-btn {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 9px;
    background-color: rgb(176, 58, 58);
  }

  .cancellation-form {
    width: 100%;
    padding: 5px;
    border-bottom: 2px solid $dark_gray;

    .title {
      background-color: $dark_gray;
      color: white;
      width: 100%;
      font-size: 15px;
      padding: 2px 10px;
      margin-bottom: 10px;
    }

    .reason {
      label {
        width: 100%;
        cursor: pointer;
        font-size: 11px;
        .radio {
        }
      }
    }

    .actions {
      button {
        font-size: 11px;
        &.discard-cancel {
          background-color: rgb(30, 139, 104);
          width: 55%;
        }

        &.confirm-cancel {
          width: 35%;
          background-color: rgb(180, 39, 39);
        }
      }
    }
  }

  .order-item {
    display: flex;
    align-items: center;

    position: relative;
    height: 15vw;

    /* cart item thumbnail/image */
    .image-container {
      width: 35%;
      height: 90%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      img {
        width: 100%;
      }
    }

    /* cart item details and quantity input */
    .details-and-quantity {
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;

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

        &.quantity {
          color: $dark_gray;
          font-family: $font_1;
          font-size: 12px;
        }

        &.variant {
          font-weight: 900;
          color: $dark_gray;
        }
      }

      .quantity-picker {
        margin-top: 7px;
        display: flex;
        justify-content: space-around;
        border: 1px solid #919191;
        width: 80px;

        button {
          background: transparent;
          font-family: $font_1_bold;
          text-align: center;
          padding: 0px;
          font-size: 10px;

          &:first-child {
            border-right: 1px solid #919191;
            padding: 0 5px;
          }

          &:nth-child(3) {
            border-left: 1px solid #919191;
            padding: 0 5px;
          }

          &.qty {
            width: 50%;
            padding: 0 15px;
          }
        }
      }
    }

    /* total product price */
    .total-product-price {
      font-family: $font_1_bold;
      position: absolute;
      bottom: 10%;
      right: 3%;
      color: $dark_gray;
    }
  }
  /* actions */
  .actions {
    .tracking-id {
      width: 50%;
    }
    .tracking-url {
      width: 50%;
    }
    .status {
      width: 60%;
      margin-left: 10px;
    }
    .timeline {
      width: 100%;
      .label {
        width: 20%;
      }
      .list {
        width: 70%;
        span {
          font-size: 12px;
          border: 1px dashed #efefef;
          text-transform: capitalize;
        }
      }
    }

    .update {
      font-size: 12px;
      padding: 5px 10px;
      background-color: $dark_gray;
      color: white;
      margin-left: 10px;
    }
  }
}
</style>

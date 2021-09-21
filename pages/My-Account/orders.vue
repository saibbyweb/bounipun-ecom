<template>
  <div class="page orders flex center">
    <CancelOrder
      :orderId="selectedOrderId"
      :subOrderId="selectedSubOrderId"
      v-if="showCancellationForm"
      @hideForm="showCancellationForm = false"
      @orderCancelled="fetchOrders"
    />

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
            <span class="ordered-at"> {{ $formatDate(order.createdAt) }} </span>
            <!-- <span class="price">
            Amount Paid: <b>  {{ order.currency }} {{ subOrder.quantity * subOrder.price }} </b>
          </span> -->
            <span class="price">
              Amount Paid:
              <b> {{ order.currency }} {{ formatCurrency(subOrder.itemTotal) }} </b>
            </span>
          </div>
        </div>

        <!-- divider -->
        <div class="divider"></div>

        <!-- actions -->
        <div class="actions">
          <!-- pre delivery -->
          <div v-if="subOrder.status !== 'cancelled'" class="pre-delivery">
            <!-- <button>Track</button> -->
            <button
              v-if="checkIfCancellable(order.createdAt)"
              @click="setCancellationOrder(order._id, subOrder._id)"
            >
              Cancel
            </button>
            <!-- <button>Help</button> -->
          </div>
          <!-- post delivery -->
          <div class="post-delivery">
            <!-- rate product -->
          </div>
        </div>
      </div>
    </div>
    <!-- no orders -->
    <div v-if="noOrders" class="side-pad">
      <ActionResponse
        icon="/icons/cart_empty.png"
        title="No Orders found"
        message="You haven't placed any orders yet!"
        action="Continue Shopping"
      />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "My Orders | Bounipun Kashmir"
    };
  },
  data() {
    return {
      orders: [],
      selectedOrderId: "",
      selectedSubOrderId: "",
      showCancellationForm: false
    };
  },
  mounted() {
    setTimeout(() => {
      if (!this.$store.state.customer.authorized) this.$router.push("/login");
    }, 400);
    this.fetchOrders();
  },
  computed: {
    noOrders() {
      return this.orders.length === 0;
    }
  },
  methods: {
    formatCurrency(adjustedPrice) {
      adjustedPrice = parseFloat(adjustedPrice);
      return this.$store.getters["customer/formatCurrency"](adjustedPrice);
    },
    checkIfCancellable(orderedAt) {
      orderedAt = new Date(orderedAt);
      const now = new Date();
      const oneday = 60 * 60 * 24 * 1000;
      return now - orderedAt < oneday * 2;
    },
    setCancellationOrder(orderId, subOrderId) {
      this.selectedOrderId = orderId;
      this.selectedSubOrderId = subOrderId;
      this.showCancellationForm = true;
    },
    async fetchOrders() {
      const { response, resolved } = await this.$post("/fetchProfile");

      if (resolved === false) {
        return;
      }

      const orders = response.orders.reverse();
      this.orders = orders;
    }
  }
};
</script>

<style lang="scss" scoped>
.orders {
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  // width:100%;
  .order-item {
    box-shadow: 1px 1px 15px rgba(51, 51, 51, 0.16);
    margin: 20px;
    height: 300px;
    overflow: hidden;
    width: 40vw;

    /* status bar */
    .status-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #333333;
      width: 100%;
      padding: 2% 2%;

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
      // height: 100%;
      display: flex;

      .image-box {
        width: 30%;
        height: 15vw;
        background-size: cover;
        background-position: top;

        .image {
          width: 100%;
        }
      }

      .text-details {
        width: 70%;
        display: flex;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        padding: 2%;
        padding-top: 2%;

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

    @media (max-width: 768px) {
      height: 65vw;
      width: 90vw;
      margin: 20px 0;

      .status-bar {
        padding: 3% 4%;
      }
      .details {
        .image-box {
          height: 36vw;
        }
        .text-details {
          padding: 0%;
          padding-top: 10px;
          height: auto;
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

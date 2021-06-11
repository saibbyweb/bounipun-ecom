<template>
  <div class="order-item-wrapper">
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
        <span class="price"> INR {{ localItem.price }} </span>
        <!-- quantity -->
        <span class="quantity"> Quantity: {{ localItem.quantity }} </span>
      </div>

      <!-- total product price -->
      <p class="total-product-price">INR {{ localItem.quantity * localItem.price }}</p>
    </div>
    <!-- actions -->
    <div class="actions flex wrap v-center">
      <!-- tracking id -->
      <InputBox
        class="tracking-id"
        label="Tracking ID"
        v-model="localItem.trackingId"
      />
      <!-- tracking url -->
      <InputBox
        class="tracking-url"
        label="Tracking URL"
        v-model="localItem.trackingUrl"
      />
      <!-- update status -->
      <SelectBox
        class="status"
        :options="allStatusUpdates"
        v-model="localItem.status"
        label="Set Order Status:"
      />

      <button class="update" @click="updateOrder">Update Order</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderId: String,
    item: Object
  },
  watch: {
    item(newVal) {
        this.localItem = newVal
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
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    async updateOrder() {
        await this.$post('/updateOrderItemDetails', {
            orderId: this.orderId,
            subOrderId: this.item._id,
            status: this.localItem.status,
            trackingId: this.localItem.trackingId,
            trackingUrl: this.localItem.trackingUrl
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.order-item-wrapper {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
  margin: 20px;
  padding-bottom: 10px;
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

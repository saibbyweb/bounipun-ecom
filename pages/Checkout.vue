<template>
  <div class="cart page -wh">
    <!-- checkout header -->
    <div class="page-header center">
      <h2 class="title">Checkout</h2>
    </div>

    <!-- order overview -->
    <div class="order-overview">
      <!-- cart items -->
      <h3 class="section-heading">Products</h3>
      <div class="cart-items">
        <CartItem
          v-for="(item, index) in remoteCartItems"
          :item="item"
          :key="index"
          :allowUpdate="false"
        />
      </div>
      <!-- delivery address -->
      <h3 class="section-heading">Delivery Address</h3>
      <div class="delivery-address">
        <span class="name">
          {{ deliveryAddress.firstName }} {{ deliveryAddress.surName }}
        </span>
        <span> {{ deliveryAddress.mobileNumber }} </span>
        <span> {{ deliveryAddress.email }} </span>
        <span> {{ deliveryAddress.addressLine1 }}</span>
        <span> {{ deliveryAddress.addressLine2 }} </span>
        <span> {{ deliveryAddress.city }} </span>
        <span> {{ deliveryAddress.postalCode }} </span>
      </div>

          <!-- sub total -->
    <div v-if="!cartEmpty" class="sub-total">
      <p class="label text">
        Grand Total: <br />
        <span class="length"> {{ remoteCartItems.length }} Item(s) : </span>
      </p>
      <span class="value text"> INR {{ subTotal }} </span>
    </div>

      <!-- shipping note -->
      <p class="note">Standard shipping 4 weeks</p>


    </div>



    <!-- proceed to checkout -->
    <div class="pad-10">
      <button
        @click="placeOrder"
        class="action"
      >
        Place Order
      </button>
    </div>
  </div>
</template>

<script>
import sumBy from "lodash/sumBy";

/* demo delivery address */
const demoDeliveryAddress = {
    firstName: 'Suhaib',
    surName: 'Khan',
    mobileNumber: '9906697711',
    email: 'hello@saibbyweb.com',
    addressLine1: 'H.no 54, Chinar Enclave',
    addressLine2: 'Rawalpora, Near Masjid',
    city: 'Srinagar',
    postalCode: '190005'
}

export default {
  data() {
    return {
      deliveryAddress: demoDeliveryAddress,
    //   deliveryAddress: this.$route.params.deliveryAddress,
      remoteCartItems: this.$store.state.customer.globalRemoteCart
    }
  },
  computed: {
    cartEmpty: function() {
      return this.remoteCartItems.length === 0;
    },
    subTotal() {
      return sumBy(this.remoteCartItems, item => item.price * item.quantity);
    }
  },
  methods: {
      async placeOrder() {
        //   this.$router.push('/order-placed-successfully')
        const checkoutPayload = {
            deliveryAddress: this.deliveryAddress,
            orderCartItems: this.remoteCartItems.map(item => item.cartEntry),
            amountToBeCharged: parseInt(this.subTotal)
        };

        const checkout = await this.$post('/orderCheckout', checkoutPayload);

        if(checkout.resolved === false) {
            return;
        }
        
        /* move to order placed page */
        this.$router.push('/order-placed-successfully');

      }
  }
};
</script>

<style lang="scss" scoped>
.order-overview {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cart-items {
    width: 90%;
  }

  .section-heading {
    text-transform: uppercase;
    font-family: $font_2;
    font-size: 15px;
  }

  .delivery-address {
    margin-top: 20px;
    width: 80%;
    position: relative;
    background: rgb(255, 255, 255);
    padding: 3%;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);

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

  .note {
    background-color: #32a77c;
    color: white;
    padding: 4px 10px;
    font-size: 12px;
    font-family: $font_1;
    // margin-top: 10px;
  }

  .sub-total {
    display: flex;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    margin: 10%;
    justify-content: center;
    align-items: center;

    .text {
      font-family: $font_1_bold;
      font-size: 12px;
      padding: 10px;
      margin: 0 3px;

      .length {
        color: $dark_gray;
        font-family: $font_1_bold;
      }
    }

    p {
      &.label {
        color: $gray;
        font-family: $font_1;
        text-transform: uppercase;
      }
    }
    span {
      &.value {
        color: $dark_gray;
        font-size: 17px;
      }
    }
  }
}
</style>

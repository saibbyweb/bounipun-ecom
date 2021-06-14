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
          v-for="(item, index) in $store.state.customer.globalRemoteCart"
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
        <!-- <span> {{ deliveryAddress.email }} </span> -->
        <span> {{ deliveryAddress.addressLine1 }}</span>
        <span> {{ deliveryAddress.addressLine2 }} </span>
        <span> {{ deliveryAddress.city }} </span>
        <span> {{ deliveryAddress.postalCode }} </span>
      </div>

      <!-- sub total -->
      <div v-if="!cartEmpty" class="sub-total">
        <p class="label text">
          Grand Total: <br />
          <span class="length">
            {{ $store.getters["customer/cartCount"]() }} Item(s) :
          </span>
        </p>
        <span class="value text"> INR {{ subTotal }} </span>
      </div>

      <!-- shipping note -->
      <p class="note">Standard shipping 4 weeks</p>
    </div>

    <!-- proceed to checkout -->
    <div class="pad-10">
      <button @click="placeOrder" class="action">
        Place Order
      </button>
    </div>
  </div>
</template>

<script>
import sumBy from "lodash/sumBy";

/* demo delivery address */
const demoDeliveryAddress = {
  firstName: "Suhaib",
  surName: "Khan",
  mobileNumber: "9906697711",
  email: "hello@saibbyweb.com",
  addressLine1: "H.no 54, Chinar Enclave",
  addressLine2: "Rawalpora, Near Masjid",
  city: "Srinagar",
  postalCode: "190005"
};

export default {
  mounted() {
    this.$store.dispatch("customer/fetchCart");
    if(this.currency.trim() === "INR")
      this.fetchRazorpayOrderId();
  },
  data() {
    return {
      deliveryAddress: demoDeliveryAddress,
      //   deliveryAddress: this.$route.params.deliveryAddress,
      remoteCartItems: this.$store.state.customer.globalRemoteCart,
      razorpayCheckout: null
    };
  },
  computed: {
            currency() {
      return this.$store.state.customer.currency + ' ';
    },
    cartEmpty: function() {
      return this.$store.state.customer.globalRemoteCart.length === 0;
    },
    subTotal() {
      return sumBy(
        this.$store.state.customer.globalRemoteCart,
        item => this.adjustPrice(item.price) * item.quantity
      );
    }
  },
  methods: {
            adjustPrice(price) {
      price = parseInt(price);
      return this.$store.getters['customer/adjustPrice'](price);
    },
    async fetchRazorpayOrderId() {
      const razorpayOrder = await this.$post("/createRazorpayOrder", {
        amountToBeCharged: this.subTotal,
        deliveryAddress: this.deliveryAddress
      });

      if (razorpayOrder.resolved === false) return;

      console.log(razorpayOrder);

      this.setupRazorpayOrder(razorpayOrder.response.razorpayOrderId);
      /* save payment intent id */
      this.paymentIntentId = razorpayOrder.response.paymentIntentId;
    },
    setupRazorpayOrder(orderId) {
      let options = {
        key: "rzp_test_LnJPEC0MOtvlSn", // Enter the Key ID generated from the Dashboard
        amount: `${this.subTotal * 100}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Bounipun Ecom",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async response => {
          console.log(response);

          const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
          } = response;

          const completeCheckout = await this.$post("/completeCheckout", {
            gateway: "razorpay",
            gatewayResponse: {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature
            },
            paymentIntentId: this.paymentIntentId
          });

          if (completeCheckout.resolved === false) {
            return;
          }

          /* move to order placed page */
          this.$router.push("/order-placed-successfully");
        },
        prefill: {
          name:
            this.deliveryAddress.firstName + " " + this.deliveryAddress.surName,
          email: this.deliveryAddress.email,
          contact: this.deliveryAddress.mobileNumber
        },
        theme: {
          color: "#3399cc"
        }
      };

      /* razorpay anchor */
      this.razorpayCheckout = new Razorpay(options);
    },
    async placeOrder() {
      if(this.currency.trim() === "INR")
        this.razorpayCheckout.open();
      return;

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

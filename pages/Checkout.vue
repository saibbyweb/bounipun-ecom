<template>
<div class="cart page -wh">
    <!-- checkout header -->
    <div class="page-header center">
        <h2 class="title"> Checkout </h2>
    </div>

    <!-- order overview -->
    <div class="order-overview">
        <!-- cart items -->
        <h3 class="section-heading"> Products </h3>
        <div class="cart-items">
            <!-- cart item -->
            <div class="cart-item" v-for="(item, index) in cartDetails" :key="index">
                <!-- main image -->
                <div class="image-container">
                    <img :src="imagePath(item.product)" />
                </div>
                <!-- details and quantity -->
                <div class="details-and-quantity">
                    <!-- name -->
                    <span class="name"> {{ item.name }} </span>
                    <!-- collection -->
                    <span class="collection"> {{ item.collection }} </span>
                    <!-- variant -->
                    <span class="variant"> {{ item.variant }} </span>
                    <!-- fabric -->
                    <span class="fabric"> {{ item.fabric }} </span>
                    <!-- price -->
                    <span class="price"> $ {{ item.price }} </span>
                </div>
            </div>
        </div>
        <!-- delivery address -->
        <h3 class="section-heading"> Delivery Address </h3>
        <div class="delivery-address">

            <span class="name"> Suhaib Khan </span>
            <span> +91-9906697711 </span>
            <span> 207 - Saudi Sheikh Complex, Chanapora, Bypass</span>
            <span> Srinagar </span>
            <span> 190001 </span>
            <span> India </span>
        </div>
    </div>

        <!-- proceed to checkout -->
    <div class="pad-10">
        <button @click="$router.push('/order-placed-successfully')" class="action"> Place Order </button>
    </div>
</div>
</template>

<script>
import sumBy from "lodash/sumBy";

export default {
    data() {
        return {
            cartDetails: [{
                name: "Khatamband Cashmere",
                product: 'auto_2',
                variant: 'Shawl',
                fabric: '100% Cashmere / Feather Weight',
                collection: 'Escape',
                quantity: 1,
                price: 299
            }, {
                name: "Red Velvet",
                product: 'auto_5',
                variant: 'Stole',
                fabric: 'Wool 80% / Silk 20% / Luxe Weight',
                collection: 'Autograph',
                quantity: 1,
                price: 399
            }]
        }
    },
    computed: {
        cartEmpty: function () {
            return this.cartDetails.length === 0;
        },
        subTotal() {
            return sumBy(this.cartDetails, (item) => item.price * item.quantity)
        }
    },
    methods: {
        imagePath(param) {
            const prod = param.split("_");
            const collection = prod[0];
            const prodId = prod[1];
            return `/demo_images/products/${collection}/${collection}_prod${prodId}_1.png`;
        }
    }
}
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

        .cart-item {
            display: flex;
            box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
            margin: 20px;
            position: relative;

            /* cart item thumbnail/image */
            .image-container {
                width: 35%;

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

                    &.name {
                        color: $dark_gray;
                        font-family: $font_2;
                        text-transform: uppercase;
                        font-size: 12px;
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
            margin:2px 0;

            &.name {
                font-weight: 900;
            }
        }
    }
}
</style>

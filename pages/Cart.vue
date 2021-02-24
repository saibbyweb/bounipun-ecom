<template>
<div class="page -wh">
    <div class="page-header center">
        <h2 class="title"> Shopping Bag </h2>
    </div>

    <!-- cart items -->
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
                <!-- price -->
                <span class="price"> $ {{ item.price }} </span>
                <!-- quantity selector -->
                <div class="quantity-input" style="display: flex;">
                    <span> Quantity: </span>
                    <select v-model="item.quantity">
                        <option v-for="n in 6" :key="n"> {{ n }} </option>
                    </select>
                </div>

            </div>

            <!-- remove item -->
            <img class="remove-item" src="/icons/dark/remove-cart-item.png" />
            <!-- total product price -->
            <p class="total-product-price"> $ {{ item.quantity * item.price }} </p>
        </div>
    </div>

    <!-- sub total -->
    <div class="sub-total">

      <span class="label"> Sub Total:  </span>
      <span class="value"> $ {{ subTotal }} </span>

    </div>

    <div v-if="cartEmpty" class="side-pad">
        <ActionResponse icon="/icons/cart_empty.png" title="Bag Empty" message="Your bag is currently empty." action="Continue Shopping" />
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
                collection: 'Escape',
                quantity: 1,
                price: 299
            }, {
                name: "Red Velvet",
                product: 'auto_5',
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
.cart-items {

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

                &.name {
                    font-family: $font_2;
                    text-transform: uppercase;
                    font-size: 12px;
                }

                &.collection {
                    font-family: $font_2;
                    color: $gray;
                    font-size: 11px;
                    margin-bottom: 4px;
                }

                &.price {
                    font-family: $font_1;
                    font-size: 12px;
                }
            }

            .quantity-input {
                font-size: 9px;
                display: flex;
                align-items: center;
                margin-top: 5px;

                span {}

                select {
                    border: none;
                    font-size: 11px;
                }
            }

        }

        /* remove icon */
        .remove-item {
            position: absolute;
            right: 3%;
            top: 10%;
            width: 6%;
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
.sub-total {
    display:flex;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    margin:10%;
    justify-content: center;
    
    span {
        font-family: $font_1_bold;
        font-size:19px;
        padding:10px;
        margin:0 3px;
        &.label {
            color: $gray;
            font-family: $font_1;
            text-transform: uppercase;
        }
        &.value {
            color: $dark_gray;
        }
    }
}
</style>

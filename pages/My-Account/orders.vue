<template>
<div class="page orders">

    <div class="order-item" v-for="(order, index) in orders" :key="index">
        <!-- status bar -->
        <div class="status-bar">
            <!-- status -->
            <span class="status"> {{ order.status }} </span>
            <!-- icon -->
            <img class="arrow" src="/icons/account/arrow-white.png" />
        </div>

        <!-- order details -->
        <div class="details">
            <!-- product image -->
            <div class="image-box" :style="imagePath(order.product)">
            </div>
            <!-- text details -->
            <div class="text-details">
                <span class="name"> {{ order.productName }} </span>
                <span class="collection"> {{ order.collection }} </span>
                <span class="fabric"> Fabric: {{ order.fabric }} </span>
                <span class="quantity"> Quantity: {{ order.quantity }} </span>
                <span class="price"> Amount Paid: <b> {{ order.currency + order.price }} </b> </span>
            </div>
        </div>

        <!-- divider -->
        <div class="divider"></div>

        <!-- actions -->
        <div class="actions">
            <!-- pre delivery -->
            <div class="pre-delivery">
                <button> Track </button>
                <button :disabled="true"> Cancel </button>
                <button> Help </button>
            </div>
            <!-- post delivery -->
            <div class="post-delivery">
                <!-- rate product -->
            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            orders: [{
                product: "auto_2",
                status: "Order Confirmed",
                productName: "Khatamband Cashmere Stole",
                collection: "Bounipun Autograph",
                fabric: "100% Cashmere - Luxe Weight",
                quantity: "2",
                price: "899.00",
                currency: "$",
                rating: "0"
            },
            {
                product: "kara_2",
                status: "Delivery Delayed",
                productName: "Kani Shawl",
                collection: "Bounipun Escape",
                fabric: "80% Wool - Feather Weight",
                quantity: "1",
                price: "249.00",
                currency: "$",
                rating: "0"
            }]
        }
    },
    methods: {
        imagePath(product) {
            const param = product;
            const prod = param.split("_");
            const collection = prod[0];
            const prodId = prod[1];
            const path = `/demo_images/products/${collection}/${collection}_prod${prodId}_1.png`;
            return {
                backgroundImage: `url(${path})`
            };
        }
    }
}
</script>

<style lang="scss" scoped>
.orders {
    .order-item {
        width: 100%;
        box-shadow: 1px 1px 15px rgba(51, 51, 51, 0.16);
        margin: 20px 0;

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
                        font-size:11px;
                        margin-bottom:5px;
                    }

                    &.price {
                        // font-size:12px;
                        align-self: flex-end;
                        margin:1% 10% 0 0;

                        b {
                            font-family: $font_1_semibold;
                            font-size:12px;
                        }
                    }
                }
            }
        }

        /* divider */
        .divider {
            margin: 10px 0;
            height: 1px;
            width:100%;
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
                    width:22%;
                    font-size:10px;
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

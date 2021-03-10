<template>
<div class="product-page">
    <div class="product-images">
        <!-- product image slideshow container with thumbnails  -->
        <slideshow v-if="showSlideshow" :images="images" :slideshowOptions="{thumbnails: true}" />

        <span class="collection-vertical"> Bounipun Escape </span>

        <!-- wishlist icon -->
        <img @click="addedToWishlist = !addedToWishlist" :class="[{'added': addedToWishlist },'wishlist']" :src="addedToWishlist ? '/icons/dark/wishlist-filled.png' : '/icons/dark/wishlist.png'" />

        <!-- share icon -->
        <div class="share-icons">
            <img class="toggle" src="/icons/dark/share.png" />
            <div class="social">
                <img src="/icons/dark/social/facebook.png" />
                <img src="/icons/dark/social/pinterest.png" />
                <img src="/icons/dark/social/instagram.png" />
                <img src="/icons/dark/social/whatsapp.png" />
            </div>
        </div>
    </div>

    <!-- absolute elements like wishlist heart, collection text, share icon -->

    <!-- product text details (product name, collection, base price -->
    <div class="pad-10">
        <div class="main-details">
            <h3> Khatamband Cashmere </h3>
            <p> Bounipun Escape </p>
        </div>
        <!-- quantity picker and size chart-->
        <div class="quantity-and-size">
            <div class="quantity-picker">
                <button> + </button>
                <button class="qty"> {{ quantity }} </button>
                <button> - </button>
            </div>
            <!-- <button class="clear"> Size Chart </button> -->
        </div>
        <!-- price and add to cart -->
        <div class="price-and-actions">
            <div class="price">
                <h5> $249.00 </h5>
                <p> Taxes and Shipping Included </p>
            </div>

            <!-- add to cart -->
            <div class="add-to-cart">
                <button> Place in Bag </button>
                <button class="arrow"> > </button>
            </div>
        </div>

        <!-- colors -->
        <div class="colors">
            <h4 class="section-heading"> Colors (3) </h4>
            <!-- sub color heading -->
            <h5 class="category-heading"> Calm </h5>
            <div class="color-boxes">
                <!-- fruit pink -->
                <div class="box-container center-col">
                    <div class="box" style="background-color: #FCCBCB;">
                    </div>
                    <span class="name"> Fruit Pink </span>
                </div>
                <!-- american gray -->
                <div class="box-container center-col">
                    <div class="box active" style="background-color: #E2E2E2;">
                    </div>
                    <span class="name"> American Gray </span>
                </div>
            </div>

            <!-- sub color heading -->
            <h5 class="category-heading"> Welcoming </h5>
            <div class="color-boxes">
                <!-- american gray -->
                <div class="box-container center-col">
                    <div class="box" style="background-color: #91CC9F;">
                    </div>
                    <span class="name"> Mint Green </span>
                </div>
            </div>
        </div>
        <!-- divider -->
        <div class="divider"> </div>
        <!-- variants available -->
        <div class="variants-available">

            <h4 class="section-heading">
                Variants Available
            </h4>
            <!-- variants container -->
            <div class="variants-container">
                <!-- variant shawl-->
                <div class="variant center-col">
                    <!-- image -->
                    <img class="illustration active" src="/demo_images/variants/shawl.png" />
                    <!-- variant name -->
                    <span class="name"> Shawl </span>
                    <!-- info 1 -->
                    <span class="info"> 40”x80” </span>
                    <!-- info 2 -->
                    <span class="info"> 101cm x 203cm </span>
                </div>
                <!-- variant square-->
                <div class="variant center-col">
                    <!-- image -->
                    <img class="illustration" src="/demo_images/variants/square.png" />
                    <!-- variant name -->
                    <span class="name"> Square </span>
                    <!-- info 1 -->
                    <span class="info"> 52”x52” </span>
                    <!-- info 2 -->
                    <span class="info"> 101cm x 203cm </span>
                </div>
                <!-- variant stole-->
                <div class="variant center-col">
                    <!-- image -->
                    <img class="illustration" src="/demo_images/variants/stole.png" />
                    <!-- variant name -->
                    <span class="name"> Stole </span>
                    <!-- info 1 -->
                    <span class="info"> 28”x80” </span>
                    <!-- info 2 -->
                    <span class="info"> 101cm x 203cm </span>
                </div>
            </div>
        </div>
        <!-- fabric -->
        <div class="fabrics-available">
            <h4 class="section-heading"> Fabric </h4>
            <!-- fabrics available -->
            <div class="fabrics-container">
                <!-- fabric 1 -->
                <div class="fabric center-col active">
                    <span class="name"> 100% Cashmere </span>
                    <span class="info"> Feather Weight </span>
                    <span class="price"> $249 </span>
                </div>
                <!-- fabric 2 -->
                <div class="fabric center-col">
                    <span class="name"> 100% Cashmere </span>
                    <span class="info"> Light Weight </span>
                    <span class="price"> $399 </span>
                </div>

                <!-- fabric 3 -->
                <div class="fabric center-col">
                    <span class="name"> 100% Cashmere </span>
                    <span class="info"> Warm Fabric </span>
                    <span class="price"> $549 </span>
                </div>

                <!-- fabric 4 -->
                <div class="fabric center-col">
                    <span class="name"> Wool 80% / Silk 20% </span>
                    <span class="info"> Luxe Weight </span>
                    <span class="price"> $245 </span>
                </div>

                <!-- fabric 5 -->
                <div class="fabric center-col">
                    <span class="name"> Wool 70% / Silk 30% </span>
                    <span class="info"> Luxe Weight </span>
                    <span class="price"> $199 </span>
                </div>
            </div>
        </div>

        <!-- accordions -->
        <div class="accordions">
            <Accordion heading="Description">
                <p> Design Specific Details</p>
                <br>
                <p> Fabric Specific Details </p>
                <br>
                <p> Variant Specific Details</p>
                <br>
            </Accordion>
            <Accordion heading="About Escape" />
            <Accordion heading="Shipping & Returns" />
        </div>

        <!-- related products -->
        <div class="related-products">
            <h4 class="section-heading"> Related Products </h4>
            <div class="scrollable-list">
                <div class="list">
                    <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 20000'}" product="auto_2" :variants="{shawl: true, stole: true}" />

                    <product-card :details="{name: 'Kani Shawl',
                collection: 'Bounipun Adore',
                price: 'INR 15000'}" product="auto_5" :variants="{square: true, stole: true}" />

                    <product-card product="kara_3" :variants="{stole: true}" />
                </div>
            </div>
        </div>

        <inner-image-zoom class="product-image" :src="images[0]" :zoomSrc="images[0]" />

    </div>
</div>
</template>

<script>
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';

export default {
    components: {
        'inner-image-zoom': InnerImageZoom
    },
    mounted() {
        const param = this.$route.params.collection;
        const prod = param.split("_");
        const collection = prod[0];
        const prodId = prod[1];
        const baseImagePath = `/demo_images/products/${collection}/${collection}_prod${prodId}_`;
        const images = []
        for (let i = 1; i < 6; i++) {
            const imagePath = baseImagePath + i + '.png';
            images.push(imagePath);
        }
        this.images = images;
        this.showSlideshow = true;
    },
    asyncData({
        params,
        route
    }) {
        const param = params.collection;
        const prod = param.split("_");
        const collection = prod[0];
        const prodId = prod[1];
        const baseImagePath = `/demo_images/products/${collection}/${collection}_prod${prodId}_`;
        const images = []
        for (let i = 1; i < 6; i++) {
            const imagePath = baseImagePath + i + '.png';
            images.push(imagePath);
        }
        return {
            images,
            showSlideshow: true
        }
    },
    data() {
        return {
            showSlideshow: false,
            slideshowOptions: {
                dots: true,
                navButtons: true,
                centerMode: true,
                autoplay: false
            },
            images: [],
            slideMargin: 0,
            quantity: 1,
            addedToWishlist: false
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.product-page {
    margin-top: 10vh;

    .product-images {
        position: relative;

        /* collection name, vertical */
        .collection-vertical {
            display: none;
            position: absolute;
            font-size: 12px;
            left: 5%;
            bottom: 30%;
            transform: rotate(-90deg) translateY(-150%);
            text-transform: uppercase;
            letter-spacing: 1px;

        }

        .wishlist {
            position: absolute;
            width: 20px;
            top: 10%;
            right: 10%;
            transition: transform 0.3s ease-in-out;

            &.added {
                transform: scale(1.2);
            }
        }

        .share-icons {
            position: absolute;
            right: 10%;
            bottom: 20%;
            display: flex;
            flex-direction: column-reverse;

            .toggle {
                width: 20px;
                transform: rotate(0deg) scale(1);
                transition: transform 0.4s ease-in-out;
                cursor: pointer;

                &:hover {
                    transform: rotate(30deg) scale(1.1);
                }
            }

            .social {
                display: none;
                margin-bottom: 15px;
                opacity: 0;
                display: flex;
                flex-direction: column-reverse;
                justify-content: center;
                align-items: center;
                transition: opacity 0.4s ease-in-out;

                img {
                    cursor: pointer;
                    margin: 10px 0;
                    width: 18px;
                    background-color: white;
                    border-radius: 1px 1px;
                    box-sizing: content-box;
                    padding: 4px;
                }
            }

            .toggle:hover~.social {
                opacity: 0.95;
            }
        }
    }

    /* main text details */
    .main-details {
        h3 {
            font-family: $font_1_bold;
            text-transform: uppercase;
            font-size: 17px;
        }

        p {
            font-family: $font_2;
            text-transform: uppercase;
            color: $gray;
            font-size: 12px;
        }
    }

    /* quantity and size */
    .quantity-and-size {
        margin-top: 10px;
        display: flex;

        .quantity-picker {
            display: flex;
            border: 1px solid #919191;

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
                    // width: 50%;
                    padding: 0 15px;
                }
            }
        }
    }

    /* price and add to cart */
    .price-and-actions {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        .price {
            h5 {
                font-family: $font_1_bold;
                font-size: 17px;
            }

            p {
                font-family: $font_2;
                font-size: 10px;
            }
        }

        .add-to-cart {
            display: flex;

            button {
                background: $primary_dark;
                color: white;
                padding: 4px 4px 4px 8px;
                text-transform: uppercase;
                margin: 0px;
                font-family: $font_1_bold;
                font-size: 14px;

                &.arrow {
                    font-family: $font_1;
                    font-size: 20px;
                    padding: 4px 8px 4px 4px;
                }
            }

        }
    }

    /* section heading (colors, variants available, fabrics) */
    .section-heading {
        text-transform: uppercase;
        color: $dark_gray;
        letter-spacing: 1.1px;
        font-family: $font_2;
        margin-bottom: 20px;
        font-size: 14px;
    }

    /* colors */
    .colors {
        margin-top: 20px;

        .category-heading {
            font-family: $font_1_semibold;
            font-size: 10px;
            margin-left: 10px;
            color: $gray;
            // text-transform: uppercase;

        }

        .color-boxes {
            display: flex;

            .box-container {
                margin: 5px;

                .box {
                    height: 20vw;
                    width: 20vw;

                    &.active {
                        border: 1px solid #bfbfbf;
                    }
                }

                .name {
                    margin-top: 5px;
                    font-size: 8px;
                    letter-spacing: 0.4px;
                }
            }

        }
    }

    /* divider */
    .divider {
        margin-top: 10px;
        width: 100%;
        height: 1px;
        background-color: $primary_dark;
    }

    /* variants available */
    .variants-available {
        margin-top: 20px;

        .variants-container {

            display: flex;
            justify-content: space-around;

            .variant {

                .illustration {
                    filter: grayscale(100%);
                    height: 60%;
                    margin-bottom: 3px;

                    &.active {
                        filter: none;
                    }
                }

                .name {
                    font-family: $font_2_semibold;
                    color: $dark_gray;
                    font-size: 11px;
                }

                .info {
                    font-family: $font_2;
                    font-size: 9px;
                    color: $gray;
                }
            }
        }
    }

    /* fabrics available */
    .fabrics-available {
        margin-top: 20px;

        .fabrics-container {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .fabric {
                background-color: #33333376;
                padding: 5px 0px;
                width: 43%;
                margin: 10px;

                span {
                    color: white;
                }

                &.active {
                    box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.16);
                    background: $primary_dark;
                }

                // width: 30%;
                .name {
                    font-size: 10px;
                    letter-spacing: 1px;
                }

                .info {
                    font-size: 9px;
                    letter-spacing: 1px;
                }

                .price {
                    font-size: 11px;
                    letter-spacing: 1px;
                }
            }
        }

    }

    /* description */
    .accordions {
        margin-top: 20px;
    }
}
</style>

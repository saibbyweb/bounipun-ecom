<template>
<div v-if="productFetched" class="product-page">
    <div class="product-images">
        <!-- product image slideshow container with thumbnails  -->
        <slideshow ref="slideshow" :images="images[activeColorIndex]" :slideshowOptions="{thumbnails: true}" />

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
            <h3> {{ product.name }} </h3>
            <p> Bounipun {{ product.bounipun_collection.name }} </p>
            <p> {{ product.styleId }} </p>
        </div>
        <!-- quantity picker and size chart-->
        <div class="quantity-and-size">
            <div class="quantity-picker">
                <button @click="quantity > 1 && quantity--"> - </button>
                <button class="qty"> {{ quantity }} </button>
                <button @click="quantity < stockLimit && quantity++"> + </button>
            </div>
            <!-- <button class="clear"> Size Chart </button> -->
        </div>
        <!-- price and add to cart -->
        <div class="price-and-actions">
            <div class="price">
                <h5> $ {{variants[activeVariantIndex].fabrics[activeFabricIndex].price }}.00 </h5>
                <p> Taxes and Shipping Included </p>
            </div>

            <!-- add to cart -->
            <div class="add-to-cart">
                <button> Place in Bag </button>
                <button class="arrow"> > </button>
            </div>
        </div>

        <!-- colors -->
        <!-- <div class="colors">
            <h4 class="section-heading"> Colors ({{ product.colors.length }}) </h4> -->
        <!-- sub color heading -->
        <!-- <h5 class="category-heading"> Calm </h5>
            <div class="color-boxes"> -->
        <!-- fruit pink -->
        <!-- <div class="box-container center-col">
                    <div class="box" style="background-color: #FCCBCB;">
                    </div>
                    <span class="name"> Fruit Pink </span>
                </div> -->
        <!-- american gray -->
        <!-- <div class="box-container center-col">
                    <div class="box active" style="background-color: #E2E2E2;">
                    </div>
                    <span class="name"> American Gray </span>
                </div>
            </div> -->

        <!-- sub color heading -->
        <!-- <h5 class="category-heading"> Welcoming </h5>
            <div class="color-boxes"> -->
        <!-- american gray -->
        <!-- <div class="box-container center-col">
                    <div class="box" style="background-color: #91CC9F;">
                    </div>
                    <span class="name"> Mint Green </span>
                </div>
            </div>
             -->

        <!-- dynamic  -->
        <div class="colors">
            <div class="color-boxes">
                <div v-for="(color, index) in product.colors" :key="index" class="box-container center-col" @click="setActiveColor(index)" >
                    <div class="box" :style="getMainImageCSS(color.images)" :class="{active: activeColorIndex === index}">
                    </div>
                    <span class="name"> {{ color.name }} </span>
                </div>
            </div>
        </div>

        <!-- divider -->
        <div class="divider"> </div>

        <!-- dynamic variant populate -->
        <div class="variants-available">
            <h4 class="section-heading">
                Variants Available
            </h4>
            <!-- variants container -->
            <div class="variants-container">
                <div @click="setActiveVariant(index)" v-for="(variant, index) in variants" :key="index" class="variant center-col" >
                    <!-- image -->
                    <img class="illustration" :class="{active: activeVariantIndex === index}" src="/demo_images/variants/shawl.png" />
                    <!-- variant name -->
                    <span class="name"> {{ variant.name }} </span>
                    <!-- info 1 -->
                    <span class="info"> {{ variant.info1 }} </span>
                    <!-- info 2 -->
                    <span class="info"> {{ variant.info2 }} </span>
                </div>
            </div>
        </div>

        <!-- dynamic fabric -->
        <div class="fabrics-available">
            <h4 class="section-heading"> Fabric </h4>

            <!-- fabrics available -->
            <div class="fabrics-container">

                <!-- fabric 1 -->
                <div @click="activeFabricIndex = index" v-for="(fabric, index) in variants[activeVariantIndex].fabrics" :key="index" class="fabric center-col" :class="{active: activeFabricIndex === index}">
                    <span class="name"> {{ fabric.name }} </span>
                    <span class="info"> {{ fabric.info1 }} </span>
                    <span class="price"> ${{ fabric.price }} </span>
                </div>
            </div>
        </div>

        <!-- accordions -->
        <div class="accordions">
            <Accordion heading="Description">
                <p> Design Specific Details</p>
                <p> {{ product.description }} </p>
                <br>
                <p> Fabric Specific Details </p>
                <br>
                <p> Variant Specific Details</p>
                <br>
            </Accordion>

            <!-- about collection -->
            <Accordion :heading="`About ${product.bounipun_collection.name}`">
                <p> {{ product.bounipun_collection.description }} </p>
            </Accordion>

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

        <!-- <inner-image-zoom class="product-image" :src="images[0]" :zoomSrc="images[0]" /> -->

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
        // const slug = this.$route.params.slug;
        const slug = this.$route.query._id;
        this.fetchProduct(slug);
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
            /* images with absolute paths */
            images: [],
            slideMargin: 0,
            quantity: 1,
            addedToWishlist: false,
            product: {},
            variants: [],
            activeColorIndex: 0,
            activeVariantIndex: 0,
            activeFabricIndex: 0,
            productFetched: false,
            stockLimit: 5
        }
    },
    methods: {
        async fetchProduct(slug) {
            const result = await this.$fetchDocument('products', slug, 'customer');
            if (!result.fetched) {
                alert('Couldnt fetch product, check url');
                return;
            }

            console.log(result);
            this.product = result.doc;
            this.productFetched = true;
            this.setImages();
            this.setVariants();
        },
        setVariants() {
            this.variants = this.product.variants.map(variant => {
                return {
                    name: variant._id.name,
                    info1: variant._id.info1,
                    info2: variant._id.info2,
                    code: variant._id.code,
                    fabrics: variant.fabrics.map(fabric => {
                        return {
                            name: fabric._id.name,
                            price: fabric.price,
                            code: fabric._id.code,
                            info1: fabric._id.info1,
                        }
                    })
                }
            });
            console.log(this.variants);
        },
        setActiveVariant(index) {
            this.activeFabricIndex = 0;
            this.activeVariantIndex = index;
        },
        setActiveColor(index) {
            this.activeColorIndex = index;
            this.$refs.slideshow.setActiveImage(0);
        },
        setImages() {
            this.product.colors.forEach(color => {
                const images = color.images.map(image => process.env.baseAWSURL + image.path);
                this.images.push(images);
            })
        },
        getMainImageCSS(images) {
            let mainImage = images.find(image => image.main === true);
            mainImage = mainImage === undefined ? images[0] : mainImage;;
            const mainImagePath = process.env.baseAWSURL + mainImage.path;
            const mainImageCSS = {
                backgroundImage: `url(${mainImagePath})`
            };
            return mainImageCSS;
        }
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
                    background-size: contain;
                    background-position: center;

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

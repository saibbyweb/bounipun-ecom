<template>
<div @click="navigateToProductPage" class="product-card">

    <!-- wishlist icon -->
    <img @click.stop="toggleWishlist" :class="[{'added': addedToWishlist },'wishlist']" :src="addedToWishlist ? '/icons/dark/wishlist-filled.png' : '/icons/dark/wishlist.png'" />

    <!-- main image container -->
    <div class="main-image-container center">
        <!-- <img class="main-image" :src="imagePath" /> -->
        <slideshow ref="slideshow" :images="slideshowImages" extraClass="search-slideshow" :dots="true" :slideWidth="48" :slideHeight="'88vw'" :size="'180%'" />

    </div>

    <!-- text details -->
    <div class="text-details center-col">
        <!-- product colors [boxes] -->

        <!-- product colors [images] -->
        <div v-if="baseColorImages.length > 0" class="base-color-boxes">
            <div @click.stop="setActiveColor(baseColorImages[index].actualIndex)" class="color-image" v-for="(n, index) in 3" :key="index" :style="`background-image: url(${getBaseColorPath(index)})`">

            </div>
        </div>
        <!-- product name -->
        <div class="product-name center-col">
            <span class="name"> {{ product.name }} </span>
            <span class="collection"> {{ collectionName }} </span>
            <span class="price"> INR {{ lowestVariantPrice }} - INR {{ highestVariantPirce }} </span>
        </div>
    </div>

    <!-- variants available -->
    <div>
        <div v-if="product.type !== 'third-party'" class="variants-available center">
            <div v-for="(variant, index) in variantsAvailable" :key="index" class="variant"> {{ variant }} </div>
        </div>
    </div>

    <!-- colors available -->

</div>
</template>

<script>
export default {
    props: {
        searchView: {
            type: Boolean,
            default: false
        },
        details: {
            type: Object,
            default: () => {
                return {
                    name: 'Khatamband Search',
                    collection: 'Bounipun Karakul',
                    price: 'INR 20000'
                }
            },
        },
        variants: {
            type: Object,
            default: () => {
                return {
                    shawl: true
                }
            }
        },
        product: {
            type: Object,
            default: {
                notProvided: true
            }
        },
        image: {
            type: String,
            default: 'product1.png'
        },
        inWishlist: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: Number,
            default: -1
        }
    },
    computed: {
        imagePath() {
            if (this.product.notProvided || this.product.colors.length === 0)
                return '/default-image.png';

            let mainImage = "";

            /* find main color */
            const mainColor = this.product.colors.find(color => color.mainColor === true);

            /* if main color undefined */
            if (mainColor !== undefined) {
                mainImage = mainColor.images[0].path;
            } else
                mainImage = this.product.colors[0].images;

            return process.env.baseAWSURL + mainImage;
        },
        variantsAvailable() {
            /* TODO: what is this? */
            if (this.product.variantNames)
                return this.product.variantNames;
            return this.product.variants.map(variant => variant._id.name);
        },
        baseColorsBoxes() {
            if (!this.product.colors)
                return;
            let baseColorList = this.product.colors.map(({
                baseColor,
                additionalColor1,
                additionalColor2
            }) => {
                return [baseColor, additionalColor1, additionalColor2];
            });

            /* save active color details */
            const activeColor = baseColorList[this.activeColorIndex];

            /* get all colors except the active one */
            let filteredColors = baseColorList.filter((_, index) => index !== this.activeColorIndex)

            return [activeColor, ...filteredColors];
        },
        baseColorImages() {
            if (!this.product.colors)
                return [{
                    path: "",
                    actualIndex: -1
                }];

            /* base color list */
            let baseColorList = this.product.colors.map((color, index) => {

                const images = color.images;

                if (images.length === 0 || images === undefined) {
                    console.log('NO IMAGES PROVIDED')
                    /* if escape, show the chip (NO_WAY) */
                    return {
                        path: "",
                        actualIndex: index
                    };
                }

                return {
                    path: process.env.baseAWSURL + images[images.length - 1].path,
                    actualIndex: index
                }
            });

            /* save active color details */
            const activeColor = baseColorList[this.activeColorIndex];

            /* get all colors except the active one */
            let filteredColors = baseColorList.filter((_, index) => index !== this.activeColorIndex)

            return [activeColor, ...filteredColors];
        },
        collectionName() {
            return this.product.bounipun_collection.name;
        },
        lowestVariantPricex() {
            if (this.product.type === 'third-party')
                return this.product.directPrice;

            let allPrices = [];
            this.product.variants.forEach(variant => {
                variant.fabrics.forEach(fabric => {
                    // console.log(fabric.price);
                    allPrices.push(fabric.price)
                });
            });

            return Math.min(...allPrices);
        },
        lowestVariantPrice() {
            return this.product.priceRange.startsAt;
        },
        highestVariantPirce() {
            return this.product.priceRange.endsAt;
        },
        slideshowImages() {
            if (this.product.notProvided || this.product.colors.length === 0)
                return ['/default-image.png'];

            let mainImages = [];

            /* if active color provided */
            if (this.activeColorIndex !== -1) {
                const mImages = this.product.colors[this.activeColorIndex].images;
                /* if no images, uploaded */
                if (mImages.length === 0) {
                    return ['/default-image.png'];
                }
                return mImages.map(image => process.env.baseAWSURL + image.path)
            }

            /* find main color */
            const mainColor = this.product.colors.find(color => color.mainColor === true);

            /* if main color undefined */
            if (mainColor !== undefined) {
                mainImages = mainColor.images;
            } else
                mainImages = this.product.colors[0].images;

            /* fetch main image */
            return mainImages.map(image => process.env.baseAWSURL + image.path)

        },
    },
    mounted() {
        this.activeColorIndex = this.activeColor;
    },
    watch: {
        activeColor(val) {
            this.activeColorIndex = val;
        }
    },
    data() {
        return {
            addedToWishlist: false,
            activeColorIndex: -1
        }
    },
    methods: {
        toggleWishlist() {
            this.addedToWishlist = !this.addedToWishlist
        },
        navigateToProductPage() {
            // this.$router.push('/products?_id='+this.product._id)
            let query = {
                _id: this.product._id
            }
            if (this.activeColorIndex !== -1)
                query.activeColor = this.activeColorIndex;
            this.$router.push({
                path: '/products',
                query
            });
        },
        getBaseColorPath(index) {
            if (this.baseColorImages[index] !== undefined) {
                console.log(index, '--DEFINED');
                return this.baseColorImages[index].path;
            } else {
                console.log(index, '--undefined');
                return "";
            }
        },
        setActiveColor(actualIndex) {
            /* mutate the active color */
            console.log(actualIndex);
            this.activeColorIndex = actualIndex;
            /* reset slider index */
        }
    }
};
</script>

<style lang="scss" scoped>
.product-card {
    width: 29vw;
    height: 36vw;
    overflow: hidden;
    padding: 1vw;
    position: relative;

    .wishlist {
        position: absolute;
        width: 18px;
        top: 10%;
        right: 10%;
        transition: transform 0.3s ease-in-out;

        &.added {
            transform: scale(1.2);
        }
    }

    // border-top: 1px solid rgb(219, 219, 219);
    &:nth-child(odd) {
        // border-right: 1px solid rgb(219, 219, 219);

    }

    &:nth-child(even) {
        // border-right: 1px solid rgb(219, 219, 219);
        // border-bottom: 1px solid rgb(219, 219, 219);
    }

    @media (max-width: $breakpoint-tablet) {
        width: 48vw;
        height: 125vw;
    }

    /* main image container */
    .main-image-container {
        width: 100%;
        height: 75%;
        overflow: hidden;

        .main-image {
            height: 100%;
        }
    }

    /* text-details */
    .text-details {
        width: 100%;
        height: 13%;
        padding-bottom: 2px;

        .base-color-boxes {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

            .color-image {
                width: 35px;
                height: 35px;
                background-size: contain;
                margin: 5px;
            }
        }

        .product-name {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 900;
            text-align: center;

            .name {
                font-size: 15px;
                font-family: $font_2;
            }
        }

        .collection {
            color: $gray;
            font-size: 10px;

        }

        .price {
            font-size: 13px;
            font-weight: 900;
        }

    }

    .variants-available {
        height: 12%;

        .variant {
            color: $primary_dark;
            border: 1px solid $primary_dark;
            margin: 0 2px;
            padding: 2px 5px;
            font-size: 10px;
        }
    }

    .actions {
        height: 5%;

        .shop-now {
            font-size: 12px;
            text-transform: uppercase;
            font-family: $font_1;
        }
    }

}
</style>

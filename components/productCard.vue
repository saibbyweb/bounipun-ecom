<template>
  <div
    @click="navigateToProductPage"
    class="product-card"
    :class="{
      escape: collectionName === 'Escape' && $route.name === 'Collections',
      singleView: !gridView,
    }"
  >
    <!-- discount percentage -->
    <span class="discount" v-if="product.saleDetails">
      -{{ product.saleDetails.discountPercentage }}%</span
    >

    <!-- wishlist icon -->
    <img
      @click.stop="toggleWishlist"
      :class="[{ added: inWishlist }, 'wishlist']"
      :src="
        inWishlist
          ? '/icons/dark/wishlist-filled.png'
          : '/icons/dark/wishlist.png'
      "
    />

    <!-- main image container -->
    <div class="main-image-container center">
      <slideshow
        ref="slideshow"
        :images="slideshowImages"
        extraClass="search-slideshow"
        :dots="true"
        :mSlideWidth="mobileDimensions.width"
        :mSlideHeight="mobileDimensions.height"
        :dSlideWidth="29"
        dSlideHeight="400px"
        size="cover"
      />
    </div>

    <!-- product colors [images] -->
    <div
      class="flex v-center evenly col color-previews"
      :style="
        readyToShip ? `align-items: center;justify-content: flex-end;` : ''
      "
      v-if="!(collectionName === 'Escape' && $route.name === 'collections')"
    >
      <div class="flex center">
        <div class="base-color-boxes">
          <div
            @click.stop="setActiveBaseColor(index)"
            class="color-image shadow"
            v-for="(preview, index) in baseColorImagesPreview.previews"
            :key="index"
            :style="`background-image: url(${getBaseColorPath(index)})`"
            :class="{ active: isActiveBaseColor(index) }"
          ></div>
        </div>

        <!-- additional colors -->
        <p
          v-if="!readyToShip"
          class="additional-colors"
          style="display: block; margin-left: 3px"
        >
          <span>
            {{
              baseColorImagesPreview.additional > 0
                ? `+ ${baseColorImagesPreview.additional}`
                : "&nbsp;"
            }}
          </span>

          <br />

          <span v-if="baseColorImagesPreview.additional > 0"> color(s) </span>
        </p>
      </div>

      <!-- ready to ship -->
      <span v-if="readyToShip" class="additional-colors rts">
        {{ readyToShip ? "Ready To Ship" : "" }}
      </span>
    </div>

    <!-- text details -->
    <div class="text-details">
      <!-- product name -->
      <div class="product-name center-col">
        <span class="name">
          {{
            collectionName === "Escape"
              ? product.colors[activeColorIndex] !== undefined
                ? product.colors[activeColorIndex].name
                : product.name
              : product.name
          }}
        </span>
        <span class="collection"> {{ collectionName }} </span>

        <!-- show price is askForPrice is false -->
        <div v-if="!product.askForPrice" class="price-box">
          <!-- if made on order and lowest and highest is not same -->
          <span
            v-if="!readyToShip && !lowestAndHighestPriceisSame"
            class="price"
          >
            {{ formatCurrency(lowestVariantPrice) }}
            -
            {{ formatCurrency(highestVariantPirce) }}
          </span>

          <!-- if made on order and lowest and highest same -->
          <span
            v-if="!readyToShip && lowestAndHighestPriceisSame"
            class="price"
          >
            {{ formatCurrency(highestVariantPirce) }}
          </span>

          <!-- if ready to ship -->
          <span v-if="readyToShip" class="price">
            {{ formatCurrency(directPrice) }}
          </span>
        </div>

        <!-- show ask for price -->
        <div
          v-else
          class="ask-for-price flex center"
          style="background-color: rgb(74 74 74); padding: 0 7px"
        >
          <!-- <img
            style="width:12%;margin-right:2px;"
              class="action-icon whatsapp"
              src="/icons/light/whatsapp-aa.svg"
            /> -->

          <span
            @click.stop="askForPrice"
            style="text-transform: capitalize; color: white"
            class="text"
          >
            Ask For Price
          </span>
        </div>
      </div>
    </div>

    <!-- variants available -->
    <div>
      <div v-if="!thirdPartyProduct" class="variants-available center">
        <div
          v-for="(variant, index) in variantsAvailable"
          :key="index"
          class="variant"
        >
          {{ variant }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CurrencyHelper from "../helpers/currencyHelper.js";
export default {
  mixins: [CurrencyHelper],
  props: {
    gridView: {
      type: Boolean,
      default: false,
    },
    searchView: {
      type: Boolean,
      default: false,
    },
    details: {
      type: Object,
      default: () => {
        return {
          name: "Khatamband Search",
          collection: "Bounipun Karakul",
          price: "INR 20000",
        };
      },
    },
    variants: {
      type: Object,
      default: () => {
        return {
          shawl: true,
        };
      },
    },
    product: {
      type: Object,
      default: {
        notProvided: true,
      },
    },
    image: {
      type: String,
      default: "product1.png",
    },
    activeColor: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    mobileDimensions() {
      return this.gridView
        ? { width: 48, height: "315px" }
        : { width: 100, height: "67vh" };
    },
    imagePath() {
      if (this.product.notProvided || this.product.colors.length === 0)
        return "/default-image.png";

      let mainImage = "";

      /* find main color */
      const mainColor = this.product.colors.find(
        (color) => color.mainColor === true
      );

      /* if main color undefined */
      if (mainColor !== undefined) {
        mainImage = mainColor.images[0].path;
      } else mainImage = this.product.colors[0].images;

      return this.$getImage(mainImage, "productPages");
    },
    variantsAvailable() {
      if (this.rtsAndUnderBounipun) {
        return [this.product.rtsDirectVariant];
      }
      /* TODO: what is this? */
      if (this.product.variantData) {
        let temp = JSON.parse(JSON.stringify(this.product.variantData));
        temp.sort((a, b) => a.order - b.order);
        return temp.map((variant) => variant.name);
      }

      // if(this.product.variants) {
      //   this.product.variants.sort((a,b) => a._id.order - b._id.order);
      //   return this.product.variants.map(variant => variant._id.name);
      // }

      // if (this.product.variantNames) return this.product.variantNames;
      return this.product.variants.map((variant) => variant._id.name);
    },
    baseColorsBoxes() {
      if (!this.product.colors) return;
      let baseColorList = this.product.colors.map(
        ({ baseColor, additionalColor1, additionalColor2 }) => {
          return [baseColor, additionalColor1, additionalColor2];
        }
      );

      /* save active color details */
      const activeColor = baseColorList[this.activeColorIndex];

      /* get all colors except the active one */
      let filteredColors = baseColorList.filter(
        (_, index) => index !== this.activeColorIndex
      );

      return [activeColor, ...filteredColors];
    },
    baseColorImages() {
      if (!this.product.colors)
        return [
          {
            path: "",
            actualIndex: -1,
          },
        ];

      /* base color list */
      let baseColorList = this.product.colors.map((color, index) => {
        const images = color.images;

        if (images.length === 0 || images === undefined) {
          console.log("NO IMAGES PROVIDED");
          /* if escape, show the chip (NO_WAY) */
          return {
            path: "",
            actualIndex: index,
          };
        }

        return {
          path: this.$getImage(images[images.length - 1].path, "chips"),
          actualIndex: index,
        };
      });

      return baseColorList;

      /* save active color details */
      const activeColor = baseColorList[this.activeColorIndex];

      /* get all colors except the active one */
      let filteredColors = baseColorList.filter(
        (_, index) => index !== this.activeColorIndex
      );

      return [activeColor, ...filteredColors];
    },
    baseColorImagesPreview() {
      /* { previews, additional colors length } */
      let previews = [];
      let additional = 0;

      /* base color images length */
      const baseColorsLength = this.baseColorImages.length;

      /* set preview images & calculate additional colors */
      if (baseColorsLength >= 3) {
        for (let i = 0; i < 3; i++) previews.push(this.baseColorImages[i]);
        additional = baseColorsLength - 3;
      } else {
        previews = this.baseColorImages;
        additional = 0;
      }

      return {
        previews,
        additional,
      };
    },
    collectionName() {
      if (typeof this.product.bounipun_collection === "string")
        return this.product.bounipun_collection;
      if (this.product.bounipun_collection === null) return "N/A";
      return this.product.bounipun_collection.name;
    },
    directPrice() {
      if (this.currencyIsINR) return this.product.directPrice;
      else return this.product.directPricing[this.currency];
    },
    lowestVariantPrice() {
      if (this.currencyIsINR) return this.product.priceRange.startsAt;
      else return this.product.pricingRange[this.currency].startsAt;
    },
    highestVariantPirce() {
      if (this.currencyIsINR) return this.product.priceRange.endsAt;
      else return this.product.pricingRange[this.currency].endsAt;
    },
    lowestAndHighestPriceisSame() {
      return this.lowestVariantPrice === this.highestVariantPirce;
    },
    slideshowImages() {
      if (this.product.notProvided || this.product.colors.length === 0)
        return ["/default-image.png"];
      
        /* could be a breaking change */
      this.product.colors.forEach((c) => {
        console.log(c.images, "***");

        const mainImages = c.images || [];

        /* check for main image */
        const mainImageIndex = mainImages.findIndex(
          (i) => i.mainImage === true
        );

        /* shift main image to the beginning */
        if (mainImageIndex !== -1) {
          const mainImage = { ...mainImages[mainImageIndex] };
          mainImages.splice(mainImageIndex, 1);
          mainImages.unshift(mainImage);
        }

      });

      let mainImages = [];

      /* if active color provided */
      if (this.activeColorIndex !== -1) {
        const mImages = this.product.colors[this.activeColorIndex].images;
        /* if no images, uploaded */
        if (mImages.length === 0) {
          return ["/default-image.png"];
        }
        return mImages.map((image) =>
          this.$getImage(image.path, "productPages")
        );
      }

      /* find main color */
      const mainColor = this.product.colors.find(
        (color) => color.mainColor === true
      );

      /* if main color undefined */
      if (mainColor !== undefined) {
        mainImages = mainColor.images;
      } else mainImages = this.product.colors[0].images;

      /* fetch main image */
      return mainImages.map((image) =>
        this.$getImage(image.path, "productPages")
      );
    },
    readyToShip() {
      return this.product.availabilityType === "ready-to-ship";
    },
    thirdPartyProduct() {
      return this.product.type === "third-party";
    },
    rtsAndUnderBounipun() {
      return this.readyToShip && !this.thirdPartyProduct;
    },
    activeColorCode() {
      const index = this.activeColorIndex === -1 ? 0 : this.activeColorIndex;
      return this.product.colors[index].code;
    },
    inWishlist() {
      /* if customer is not logged in, return  */
      const customer = this.$store.state.customer;
      if (customer.authorized === false) return false;

      /* if wishlist is undefined, return */
      const wishlist = customer.user.wishlist;
      if (wishlist === undefined) return false;

      /* check if product is in wishlist */
      // const foundIndex = wishlist.findIndex(entry => entry.product === this.product._id && entry.colorCode === this.activeColorCode);

      const foundIndex = wishlist.findIndex(
        (entry) => entry.product === this.product._id
      );

      if (foundIndex !== -1) {
        return true;
      }

      return false;
    },
  },
  mounted() {
    this.activeColorIndex = this.activeColor;
    // console.log(this.$route);
  },
  watch: {
    activeColor(val) {
      this.activeColorIndex = val;
    },
  },
  data() {
    return {
      addedToWishlist: false,
      activeColorIndex: -1,
    };
  },
  methods: {
    askForPrice(event) {
      const BASE_SHARE_URL = "https://wa.me/?text=";
      let msg = `Hi there, I would like to get a price quote for: ${location.host}/${this.product.slug}?activeColor=${this.activeColorIndex}`;
      msg = encodeURI(msg);
      window.open(BASE_SHARE_URL + msg, "_blank");
    },
    async toggleWishlist() {
      /* if user is not logged in, move to login page */
      if (!this.$store.state.customer.authorized) {
        this.$router.push("/login");
        return;
      }

      /* set action according to state */
      const action = this.inWishlist
        ? "remove-from-wishlist"
        : "add-to-wishlist";

      /* take item to wishlist */
      const addToWishlist = await this.$post("/wishlistActions", {
        action,
        product: this.product._id,
        colorCode: this.activeColorCode,
      });

      /* if request failed */
      if (addToWishlist.resolved === false) return;

      /* refetch wishlist */
      /* fetch profile */
      this.$store.dispatch("customer/fetchProfile");
    },
    navigateToProductPage() {
      let query = {
        // _id: this.product._id
      };
      if (this.activeColorIndex !== -1)
        query.activeColor = this.activeColorIndex;

      this.$router.push({
        path: `/${this.product.slug}`,
        query,
      });

      window.scroll({ top: 0, behavior: "smooth" });
    },
    getBaseColorPath(index) {
      if (this.baseColorImages[index] !== undefined) {
        return this.baseColorImages[index].path;
      } else {
        return "";
      }
    },
    setActiveBaseColor(index) {
      const actualIndex = this.baseColorImages[index].actualIndex;
      /* mutate the active color */
      console.log(actualIndex);
      this.activeColorIndex = actualIndex;
      /* reset slider index */
      this.$refs.slideshow.setActiveImage(0);
    },
    isActiveBaseColor(index) {
      const actualIndex = this.baseColorImages[index].actualIndex;
      return actualIndex === this.activeColorIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  width: 29vw;
  height: 550px;
  overflow: hidden;
  padding: 1vw;
  margin: 5px 0;
  position: relative;
  // border: 1px dashed #efefef;
  cursor: pointer;

  /* discount */
  .discount {
    position: absolute;
    top: 10px;
    left: 10%;
    z-index: 1;
    font-family: $font_2_semibold;
    font-size: 14px;
    background-color: rgb(53, 145, 53);
    color: white;
    padding: 2px 4px;
    opacity: 0.8;

    @media (max-width: 768px) {
      font-size: 12px;
      left: 4%;
      top: 10px;
    }
  }

  .wishlist {
    position: absolute;
    width: 18px;
    top: 10%;
    right: 10%;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    &.added {
      transform: scale(1.2);
    }
  }

  /* main image container */
  .main-image-container {
    width: 100%;
    height: 75%;
    overflow: hidden;
    // border: 1px solid rgba(0, 0, 255, 0.291);

    .main-image {
      height: 100%;
    }

    @media (max-width: 768px) {
      height: 67%;
    }
  }

  .color-previews {
    height: 10%;

    .base-color-boxes {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      margin-bottom: 0px;

      .color-image {
        width: 30px;
        height: 30px;
        background-size: contain;
        margin: 0px 5px;
        transition: all 0.3s ease-in-out;

        &.active {
          border: 3px solid #a2a2a2;
        }
      }
    }

    .additional-colors {
      font-size: 10px;
      color: $gray;
    }

    .rts {
      color: #32a77c;
      margin-top: 1px;
    }

    @media (max-width: 768px) {
      height: 16%;

      .base-color-boxes {
        margin-bottom: 5px;

        .color-image {
          margin: 5px;
        }
      }
    }
  }

  /* text-details */
  .text-details {
    width: 100%;
    height: 10%;
    padding-bottom: 2px;
    padding-top: 3px;
    // background: rgba(255, 0, 0, 0.737);

    @media (max-width: 768px) {
      height: 12%;
    }

    .product-name {
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 900;
      text-align: center;

      .name {
        font-size: 10px;
        font-family: $font_2_semibold;
        font-weight: 900;
      }
    }

    .collection {
      color: $gray;
      font-size: 10px;
    }

    .price {
      font-size: 11px;
      font-weight: 900;
      color: $gray;
    }
  }

  .variants-available {
    height: 5%;

    // background: rgba(255, 255, 0, 0.648);
    @media (max-width: 768px) {
      height: 5%;
    }

    .variant {
      color: $primary_dark;
      border: 1px solid $primary_dark;
      margin: 0 2px;
      padding: 2px 5px;
      font-size: 10px;
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .actions {
    height: 0%;
    background: rgba(0, 128, 0, 0.607);

    @media (max-width: 768px) {
      height: 5%;
    }

    .shop-now {
      font-size: 12px;
      text-transform: uppercase;
      font-family: $font_1;
    }
  }

  @media (max-width: $breakpoint-tablet) {
    width: 48vw;
    height: 480px;

    &.singleView {
      width: 100%;
      // height: 650px;
      box-sizing: content-box;
      padding-bottom: 25px;
      height: 91vh;
      border-bottom: 1px solid #efefef;
      margin: 0px;

      .main-image-container {
        height: 79%;
      }

      .color-previews {
        height: 7%;
      }

      .text-details {
        height: 10%;

        span {
          // font-size: 12px;
          &.price {
            font-size: 13px;
          }

          &.name {
            font-size: 13px;
          }
        }
      }

      .variants-available {
        height: 6%;
      }
    }

    &.escape {
      height: 440px;

      .main-image-container {
        height: 70%;
      }

      .text-details {
        height: 16%;
      }
    }
  }
}
</style>

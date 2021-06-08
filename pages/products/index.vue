<template>
  <div v-if="productFetched" class="product-page">
    <div ref="productImages" class="product-images">
      <!-- product image slideshow container with thumbnails  -->
      <slideshow
        ref="slideshow"
        :images="images[activeColorIndex]"
        :slideshowOptions="{ thumbnails: true }"
        :customText="activeDisclaimerText"
        :slideHeight="'60vh'"
        :size="'cover'"
      />

      <span class="collection-vertical"> Bounipun Escape </span>

      <!-- back button -->
      <div class="back-button">
        <img @click="$router.go(-1)" src="/icons/dark/arrow-left.png" />
      </div>

      <!-- wishlist icon -->
      <img
        @click="addedToWishlist = !addedToWishlist"
        :class="[{ added: addedToWishlist }, 'wishlist']"
        :src="
          addedToWishlist
            ? '/icons/dark/wishlist-filled.png'
            : '/icons/dark/wishlist.png'
        "
      />

      <!-- share icon -->
      <div class="share-icons">
        <div class="toggle">
          <img src="/icons/dark/share.png" />
        </div>

        <div class="social">
          <img src="/icons/dark/social/facebook.png" />
          <img src="/icons/dark/social/pinterest.png" />
          <img src="/icons/dark/social/instagram.png" />
          <img src="/icons/dark/social/whatsapp.png" />
        </div>
      </div>
    </div>

    <!-- product text details (product name, collection, base price -->
    <div v-if="true">
      <div class="product-details">
        <div ref="details" class="details" :class="{ sticky: sticky }">
          <!-- header -->
          <div class="header">
            <span class="collection" v-if="!thirdPartyProduct">
              Bounipun {{ collectionName }}
            </span>
            <span class="gender"> {{ preferredGender }} </span>
          </div>

          <div class="og-details">
            <div class="section-1">
              <div class="main-details">
                <h3>
                  {{
                    bounipunColors
                      ? product.colors[activeColorIndex].name
                      : product.name
                  }}
                </h3>
                <p v-if="!thirdPartyProduct && !readyToShip" class="variant">
                  {{ variants[activeVariantIndex].name }}
                </p>
                <!-- fabric -->
                <p v-if="!thirdPartyProduct && !readyToShip">
                  {{ selectedFabric.name }}
                </p>
                <p v-if="!thirdPartyProduct && !readyToShip">
                  {{ selectedFabric.info1 }}
                </p>
                <p>{{ product.styleId }}</p>
              </div>
              <!-- quantity picker and size chart-->
              <div class="quantity-and-size">
                <div class="quantity-picker">
                  <button @click="quantity > 1 && quantity--">-</button>
                  <button class="qty">{{ quantity }}</button>
                  <button @click="quantity < stockLimit && quantity++">
                    +
                  </button>
                </div>
                <!-- <button class="clear"> Size Chart </button> -->
              </div>
            </div>
            <!-- price and add to cart -->
            <div class="price-and-actions">
              <div class="price">
                <h5>
                  INR
                  {{
                    thirdPartyProduct || readyToShip
                      ? product.directPrice
                      : variants[activeVariantIndex].fabrics[activeFabricIndex]
                          .price
                  }}
                </h5>
                <p>Taxes and Shipping Included</p>
              </div>

              <!-- add to cart -->
              <div class="add-to-cart">
                <button @click="addToCart">
                  {{ alreadyInCart ? "View Bag" : "Place in Bag" }}
                </button>
                <button class="arrow">></button>
              </div>
            </div>
          </div>
        </div>

        <div class="other-details">
          <!-- bounipun colors  -->
          <div v-if="bounipunColors" class="colors">
            <h4 class="section-heading">
              Select Color: ({{ product.colors.length }})
            </h4>

            <!-- color category -->
            <div
              class="color-category"
              v-for="(value, name, index) in product.colorData"
              :key="index"
            >
              <div v-if="value.length !== 0">
                <!-- sub color heading -->
                <Accordion
                  :heading="value.name"
                  :expanded="ifActiveColorInCategory(value.colors)"
                >
                  <div class="color-boxes">
                    <!-- color box (loop) -->
                    <div
                      class="box-container center-col"
                      v-for="(color, colorIndex) in value.colors"
                      :key="colorIndex"
                      @click="setActiveColor(colorIndex, color._id)"
                    >
                      <div
                        class="box"
                        :style="getMainImageCSS(color)"
                        :class="{ active: isActiveBounipunColor(color._id) }"
                      ></div>
                      <span class="name"> {{ color.name }} </span>
                    </div>
                  </div>
                </Accordion>

                <!-- <h5 class="category-heading"> {{ value.name }} </h5> -->
              </div>
            </div>
          </div>

          <!-- custom colors -->
          <div v-if="!bounipunColors" class="colors">
            <h4 class="section-heading">
              Select Color ({{ product.colors.length }}) :
            </h4>

            <div class="color-boxes">
              <div
                v-for="(color, index) in product.colors"
                :key="index"
                class="box-container center-col"
                @click="setActiveColor(index)"
              >
                <div
                  class="box"
                  :style="getMainImageCSS(color)"
                  :class="{ active: activeColorIndex === index }"
                ></div>
                <span class="name"> {{ color.name }} </span>
              </div>
            </div>
          </div>

          <!-- divider -->
          <div v-if="!bounipunColors && multiPriced" class="divider"></div>

          <!-- dynamic variant populate -->

          <div
            v-if="!thirdPartyProduct && multiPriced && !readyToShip"
            class="variants-available"
          >
            <h4 class="section-heading">
              Select Variant:
            </h4>
            <p class="section-paragraph">
              {{ variantNote }}
            </p>
            <!-- variants container -->
            <div class="variants-container">
              <div
                @click="setActiveVariant(index)"
                v-for="(variant, index) in variants"
                :key="index"
                class="variant center-col"
              >
                <!-- image -->
                <img
                  class="illustration"
                  :class="{ active: activeVariantIndex === index }"
                  :src="getVariantImage(variant.image)"
                />
                <!-- variant name -->
                <span class="name"> {{ variant.name }} </span>
                <!-- info 1 -->
                <span class="info"> {{ variant.info1 }} </span>
                <!-- info 2 -->
                <span class="info"> {{ variant.info2 }} </span>
              </div>
            </div>
          </div>

          <!-- divider -->
          <div class="divider"></div>

          <!-- dynamic fabric -->
          <div
            v-if="!thirdPartyProduct && multiPriced && !readyToShip"
            class="fabrics-available"
          >
            <h4 class="section-heading">Select Fabric:</h4>

            <!-- fabrics available -->
            <div class="fabrics-container">
              <!-- fabric -->
              <div
                @click="activeFabricIndex = index"
                v-for="(fabric, index) in variants[activeVariantIndex].fabrics"
                :key="index"
                class="fabric center-col"
                :style="setVariantColorToActiveFabric(index)"
              >
                <span class="name"> {{ fabric.name }} </span>
                <span class="info"> {{ fabric.info1 }} </span>
                <span class="price"> INR {{ fabric.price }} </span>
              </div>
            </div>
          </div>

          <!-- accordions -->
          <div class="accordions">
            <!-- detailed features -->
            <Accordion heading="Detailed Features">
              <!-- variant -->
              <!-- <p> Variant Specific Details</p> -->
              <ul v-if="!thirdPartyProduct">
                <li v-for="(point, index) in variantDescription" :key="index">
                  <span class="desc"> {{ point }} </span>
                </li>
              </ul>

              <!-- design specific -->
              <!-- <p> Design Specific Details</p> -->
              <ul>
                <li v-for="(point, index) in productDescription" :key="index">
                  <span class="desc"> {{ point }} </span>
                </li>
              </ul>

              <!-- fabric -->
              <ul v-if="!thirdPartyProduct">
                <li v-for="(point, index) in fabricDescription" :key="index">
                  <span class="desc"> {{ point }} </span>
                </li>
              </ul>
            </Accordion>

            <!-- about fabric -->
            <Accordion
              v-if="!thirdPartyProduct && !readyToShip"
              heading="About Fabric"
            >
              <ul>
                <li v-for="(point, index) in fabricWriteUp" :key="index">
                  <span class="desc"> {{ point }} </span>
                </li>
              </ul>
            </Accordion>

            <!-- details and care -->
            <Accordion
              v-if="!thirdPartyProduct && !readyToShip"
              heading="Details And Care"
            >
              <ul>
                <li v-for="(point, index) in detailsAndCare" :key="index">
                  <span class="desc"> {{ point }} </span>
                </li>
              </ul>
            </Accordion>

            <!-- about collection -->
            <Accordion
              v-if="!thirdPartyProduct"
              :heading="`About ${product.bounipun_collection.name}`"
            >
              <span class="desc">
                {{ product.bounipun_collection.description }}
              </span>
            </Accordion>

            <Accordion heading="Shipping & Returns" />
          </div>
        </div>

        <!-- related products -->
        <!-- <div class="related-products">
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
            </div> -->

        <!-- <inner-image-zoom class="product-image" :src="images[0]" :zoomSrc="images[0]" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";
import colorsVue from "../admin-panel/colors.vue";

export default {
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
    if (this.$route.name !== "index") {
      this.darkMode = true;
      return;
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  components: {
    "inner-image-zoom": InnerImageZoom
  },
  mounted() {
    // const slug = this.$route.params.slug;
    const slug = this.$route.query._id;
    this.fetchProduct(slug);
    setTimeout(() => {
      this.scrollPosition = this.$refs.details.getBoundingClientRect().bottom;
      console.log(this.scrollPosition, "scroll position");
    }, 300);
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
      stockLimit: 3,
      scrollPosition: 0,
      sticky: false
    };
  },
  computed: {
    collectionName() {
      if (!this.product.thirdParty)
        return this.product.bounipun_collection.name;
    },
    preferredGender() {
      if (this.product.gender === undefined) return "";
      if (this.product.gender === "for-him-and-her") return "him | her";

      return `${this.product.gender.replaceAll("-", " ")}`;
    },
    readyToShip() {
      return this.product.availabilityType === "ready-to-ship";
    },
    bounipunColors() {
      return this.product.colorSource === "bounipun-colors";
    },
    productDescription() {
      return this.product.description.split("\n");
    },
    variantDescription() {
      if (this.variants.length === 0) return [];
      return this.variants[this.activeVariantIndex].description.split("\n");
    },
    fabricDescription() {
      if (this.variants.length === 0) return [];
      return this.variants[this.activeVariantIndex].fabrics[
        this.activeFabricIndex
      ].description.split("\n");
    },
    fabricWriteUp() {
      if (this.variants.length === 0) return [];
      return this.variants[this.activeVariantIndex].fabrics[
        this.activeFabricIndex
      ].writeUp.split("\n");
    },
    detailsAndCare() {
      if (this.variants.length === 0) return "";
      const detailsAndCare = this.variants[this.activeVariantIndex].fabrics[
        this.activeFabricIndex
      ].detailsAndCare;
      if (detailsAndCare === undefined) return "";
      return detailsAndCare.split("\n");
    },
    selectedFabric() {
      return this.variants[this.activeVariantIndex].fabrics[
        this.activeFabricIndex
      ];
    },
    variantNote() {
      return this.product.bounipun_collection.variantNote;
    },
    thirdPartyProduct() {
      return this.product.type === "third-party";
    },
    multiPriced() {
      return this.product.type === "third-party"
        ? false
        : this.product.availabilityType === "made-to-order"
        ? true
        : false;
    },
    activeDisclaimerText() {
      if (this.product.colors.length === 0) return "";
      return this.product.colors[this.activeColorIndex].disclaimer;
    },
    newCartItem() {
      return {
        product: this.product._id,
        colorCode: this.product.colors[this.activeColorIndex].code,
        quantity: this.quantity,
        variant: this.multiPriced
          ? this.variants[this.activeVariantIndex]._id
          : null,
        fabric: this.multiPriced
          ? this.variants[this.activeVariantIndex].fabrics[
              this.activeFabricIndex
            ]._id
          : null
      };
    },
    alreadyInCart() {
      return this.$store.getters["customer/alreadyInCart"](this.newCartItem) ===
        false
        ? false
        : true;
    }
  },
  methods: {
    handleScroll(event) {
      // console.log(this.$store.getters['customer/alreadyInCart'], );
      const scrolled = screen.height + window.scrollY;
      this.sticky = window.scrollY > 25;
      return;
    },
    async addToCart() {
      if (!this.$store.state.customer.authorized) {
        /* if already added, move to cart page */
        if (this.alreadyInCart) {
          this.$router.push("/cart");
          return;
        }
        this.$store.commit("customer/addToCart", this.newCartItem);
      }

      /* take cart item to server */
      const remoteAddToCart = await this.$post('/cartActions', {
          action: 'add-to-cart',
          cartItem: this.newCartItem
      });
        
      /* remote add to cart */
      if(remoteAddToCart.resolved === false) {
        return;
      }

      this.$forceUpdate();
    },
    ifActiveColorInCategory(colors) {
      const foundIndex = colors.findIndex(
        col => col.actualIndex == this.$route.query.activeColor
      );
      console.log(foundIndex);
      return foundIndex !== -1;
    },
    setVariantColorToActiveFabric(index) {
      if (this.activeFabricIndex === index)
        return {
          backgroundColor: this.variants[this.activeVariantIndex].hex
        };
    },
    getVariantImage(image) {
      if (image === undefined) return "/demo_images/variants/shawl.png";
      return this.$getImagePath(image);
    },
    async fetchProduct(slug) {
      const result = await this.$fetchDocument("products", slug, "customer");
      // const result = await this.$fetchData('products', {_id: slug, 'colors.status': false });
      if (!result.fetched) {
        alert("Couldnt fetch product, check url");
        return;
      }

      /* filter out inactive colors */
      result.doc.colors = result.doc.colors.filter(
        color => color.status === true
      );

      if (result.doc.colors.length === 0) {
        console.log("No Active Color Found");
        return;
      }

      /* if color data */
      if (result.doc.colorData) {
        let colorCategories = result.doc.colorData;
        // const colorCategories = Object.keys(colorData);

        colorCategories.forEach(category => {
          let colors = category.colors;

          /* attach actual index */
          colors.forEach(color => {
            color.actualIndex = result.doc.colors.findIndex(
              col => col._id === color._id
            );
          });

          colors = colors.sort((a, b) => {
            return b.images.length - a.images.length;
          });
        });
      }

      this.product = result.doc;
      this.productFetched = true;

      this.setImages();
      this.setVariants();

      /* TODO, figure out index from color code here */
      /* if main color provided via query param */
      if (this.$route.query.activeColor) {
        this.activeColorIndex = parseInt(this.$route.query.activeColor);
        console.log("ACTIVE COLOR SET FROM QUERY PARAM");
        return;
      }

      /* fetch main color */
      const mainColorIndex = this.product.colors.findIndex(
        color => color.mainColor === true
      );

      if (mainColorIndex !== -1) this.activeColorIndex = mainColorIndex;
    },
    setVariants() {
      const variants = this.product.variants.map(variant => {
        /* map fabric details */
        let fabrics = variant.fabrics.map(fabric => {
          return {
            _id: fabric._id._id,
            name: fabric._id.name,
            price: fabric.price,
            code: fabric._id.code,
            info1: fabric._id.info1,
            description: fabric._id.description,
            writeUp: fabric._id.writeUp,
            detailsAndCare: fabric._id.detailsAndCare,
            order: fabric._id.order
          };
        });

        /* sort fabrics according to order */
        fabrics.sort((a, b) => a.order - b.order);

        return {
          _id: variant._id._id,
          name: variant._id.name,
          info1: variant._id.info1,
          info2: variant._id.info2,
          code: variant._id.code,
          order: variant._id.order,
          hex: variant._id.hex,
          description: variant._id.description,
          image: variant._id.image,
          fabrics
        };
      });

      this.variants = variants.sort((a, b) => a.order - b.order);

      console.log(this.variants);
    },
    setActiveVariant(index) {
      this.activeFabricIndex = 0;
      this.activeVariantIndex = index;
    },
    setActiveColor(index, colorId = false) {
      let activeIndex = index;
      if (colorId) {
        /* find index from actual color array */
        activeIndex = this.product.colors.findIndex(
          color => color._id === colorId
        );
      }
      this.activeColorIndex = activeIndex;
      this.$refs.slideshow.setActiveImage(0);
    },
    isActiveBounipunColor(colorId) {
      const colorIndex = this.product.colors.findIndex(
        color => color._id === colorId
      );
      return this.activeColorIndex === colorIndex;
    },
    setImages() {
      this.product.colors.forEach(color => {
        let images = color.images.map(
          image => process.env.baseAWSURL + image.path
        );

        if (images.length === 0 && color._id !== null) {
          console.log("No image found");
          images = [];
          images.push(process.env.baseAWSURL + color.image);
        }

        this.images.push(images);
      });
    },
    getMainImageCSS(color) {
      const images = color.images;

      if (images.length === 0) {
        return {
          backgroundImage: `url(${process.env.baseAWSURL}${color.image})`
        };
      }

      let mainImage = images.find(image => image.main === true);
      mainImage = mainImage === undefined ? images[0] : mainImage;
      const mainImagePath = process.env.baseAWSURL + mainImage.path;
      const mainImageCSS = {
        backgroundImage: `url(${mainImagePath})`
      };
      return mainImageCSS;
    }
  }
};
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
      right: 5%;
      transition: transform 0.3s ease-in-out;

      &.added {
        transform: scale(1.2);
      }
    }

    /* back button */
    .back-button {
      position: absolute;
      width: 16%;
      height: 40px;
      bottom: 30%;
      left: 0%;
      transition: transform 0.3s ease-in-out;
      background-color: white;
      padding: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.7;

      img {
        width: 27px;
        // display:none;
      }
    }

    .share-icons {
      position: absolute;
      right: 0%;
      bottom: 30%;
      display: flex;
      width: 16%;
      flex-direction: column-reverse;

      .toggle {
        width: 100%;
        height: 40px;
        box-sizing: content-box;
        transform: rotate(0deg) scale(1);
        cursor: pointer;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.7;

        img {
          width: 24px;
          transition: transform 0.4s ease-in-out;
        }

        &:hover {
          img {
            transform: rotate(10deg);
          }
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

      .toggle:hover ~ .social {
        opacity: 0.95;
      }
    }
  }

  .product-details {
    /* sticky details */
    .details {
      margin-top: 10px;

      &.sticky {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: white;
        transition: span 0.3s ease-in-out;
        z-index: 2;
        box-shadow: 0px -4px 23px -13px rgba(38, 38, 38, 0.24);
      }
    }

    .header {
      width: 100%;
      background-color: $dark_gray;
      // height:20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2% 4%;

      span {
        color: white;

        &.collection {
          text-transform: uppercase;
          font-size: 13px;
          font-family: $font_2;
        }

        &.gender {
          font-size: 12px;
          // font-style:  italic;
        }
      }
    }

    .og-details {
      padding: 2% 4%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: relative;

      /* section 1 */
      .section-1 {
        width: 61%;
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
            font-size: 10px;

            &.variant {
              font-weight: 900;
              color: $dark_gray;
              font-size: 12px;
            }
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
      }

      /* price and add to cart */
      .price-and-actions {
        // width:35%;
        // margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;

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
          width: 100%;
          margin-top: 5px;

          button {
            background: $primary_dark;
            color: white;
            padding: 4px 4px 4px 8px;
            text-transform: uppercase;
            margin: 0px;
            font-family: $font_1_bold;
            font-size: 14px;
            width: 80%;

            &.arrow {
              width: 20%;
              font-family: $font_1;
              font-size: 20px;
              padding: 4px 8px 4px 4px;
            }
          }
        }
      }
    }

    /* sticky details -- END HERE */

    .other-details {
      padding: 3% 4%;

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
          flex-wrap: wrap;

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

        .section-heading {
          margin-bottom: 5px;
        }

        .section-paragraph {
          font-size: 11px;
          padding: 0px;
          margin: 0px;
          margin-bottom: 20px;
          color: $gray;
          font-family: $font_2;
        }

        .variants-container {
          display: flex;
          justify-content: space-around;

          .variant {
            .illustration {
              filter: grayscale(100%);
              // height: 60%;
              margin-bottom: 3px;
              transition: all 0.3s ease-in-out;
              width: 12vw;
              opacity: 0.5;

              &.active {
                filter: none;
                opacity: 1;
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
            width: 49%;
            margin: 0.5%;
            transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

            span {
              color: white;
              text-align: center;
            }

            &.active {
              box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.16);
              background: $primary_dark;
            }

            // width: 30%;
            .name {
              font-size: 9.5px;
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
        text-align: justify;

        ul {
          margin: 4px;
          padding-left: 15px;

          li {
          }
        }

        p {
          font-size: 13px;
          margin: 10px 0;
        }

        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

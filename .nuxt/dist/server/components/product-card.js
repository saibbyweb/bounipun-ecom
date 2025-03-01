exports.ids = [51,56];
exports.modules = {

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    currency() {
      return this.$store.state.customerV2.currency;
    },

    currencyIsINR() {
      return this.currency === "INR";
    }

  },
  methods: {
    formatCurrency(price, currency = false, precision = 2) {
      price = parseFloat(price);
      return this.$store.getters["customerV2/formatCurrency"](price, currency, precision);
    }

  }
});

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("dc381f60", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7d496681", content, true, context)
};

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slideshow.vue?vue&type=template&id=817806fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slideshow-container",style:({ width: _vm.slideWidth + 'vw' })},[_vm._ssrNode("<div class=\"till-dots\" data-v-817806fa>","</div>",[_vm._ssrNode("<div class=\"slideshow\" data-v-817806fa>","</div>",[_vm._ssrNode(((_vm.productPage)?("<div class=\"lens\""+(_vm._ssrStyle(null,null, { display: (_vm.activeHover) ? '' : 'none' }))+" data-v-817806fa></div>"):"<!---->")+" "),_vm._ssrNode("<div data-v-817806fa>","</div>",[_c('div',{directives:[{name:"hammer",rawName:"v-hammer:swipe",value:(_vm.onSwipe),expression:"onSwipe",arg:"swipe"}],staticClass:"slides-container",style:('margin-left: ' + _vm.slideMargin + 'vw')},[_vm._ssrNode((_vm._ssrList((_vm.onDemandImages),function(image,index){return ("<div"+(_vm._ssrClass("product-image",{ productPage: _vm.productPage, clickable: _vm.links.length > 0 }))+(_vm._ssrStyle(null,_vm.getBackgroundImage(image), null))+" data-v-817806fa></div>")})))])])],2),_vm._ssrNode(" "+((_vm.dots && !_vm.singleImage)?("<div"+(_vm._ssrClass("dots",{ main: _vm.main }))+(_vm._ssrStyle(null,{ width: _vm.slideWidth }, null))+" data-v-817806fa>"+(_vm._ssrList((_vm.images),function(image,index){return ("<div"+(_vm._ssrClass(null,[{ active: _vm.isActive(index) }, 'dot']))+" data-v-817806fa></div>")}))+"</div>"):"<!---->"))],2),_vm._ssrNode(" "+((_vm.productPage)?("<div class=\"zoomed-in-image shadow\""+(_vm._ssrStyle(null,null, { display: (_vm.activeHover) ? '' : 'none' }))+" data-v-817806fa></div>"):"<!---->")+" "+((_vm.customText !== '')?("<div class=\"center\" data-v-817806fa><span class=\"custom-text\" data-v-817806fa>"+_vm._ssrEscape(" "+_vm._s(_vm.customText)+" ")+"</span></div>"):"<!---->")+" "+((_vm.slideshowOptions.thumbnails)?("<div id=\"thumbnails-container\" class=\"scrollable-list\" data-v-817806fa><div class=\"list\" data-v-817806fa><div class=\"thumbnails\" data-v-817806fa>"+(_vm._ssrList((_vm.images),function(image,index){return ("<div"+(_vm._ssrClass(null,[{ active: _vm.isActive(index) }, 'thumbnail']))+(_vm._ssrStyle(null,_vm.getThumbBackground(image), null))+" data-v-817806fa></div>")}))+"</div></div></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/slideshow.vue?vue&type=template&id=817806fa&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-inner-image-zoom/lib/vue-inner-image-zoom.css
var vue_inner_image_zoom = __webpack_require__(175);

// EXTERNAL MODULE: external "vue-inner-image-zoom"
var external_vue_inner_image_zoom_ = __webpack_require__(111);
var external_vue_inner_image_zoom_default = /*#__PURE__*/__webpack_require__.n(external_vue_inner_image_zoom_);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slideshow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var slideshowvue_type_script_lang_js_ = ({
  components: {
    "inner-image-zoom": external_vue_inner_image_zoom_default.a
  },
  props: {
    slideshowOptions: {
      type: Object,
      default: () => ({
        thumbnails: false
      })
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => ["/demo_images/slider/desk1.png"]
    },
    size: {
      type: String,
      default: "contain"
    },
    customText: {
      type: String,
      default: ""
    },
    extraClass: {
      type: String,
      default: ""
    },
    dots: {
      type: Boolean,
      default: true
    },
    mSlideWidth: {
      type: Number,
      default: 100
    },
    dSlideWidth: {
      type: Number,
      default: 100
    },
    mSlideHeight: {
      type: String,
      default: "100vw"
    },
    dSlideHeight: {
      type: String,
      default: "100vw"
    },
    main: {
      type: Boolean,
      default: false
    },
    productPage: {
      type: Boolean,
      default: false
    },
    links: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      slideMargin: 0,
      activeIndex: 0,
      thumbnailsMargin: 0,
      autoplayInterval: {},
      interacted: false,
      activeHover: false,
      lensPosition: {
        x: 0,
        y: 0
      },
      previousZoomedInImage: ""
    };
  },

  computed: {
    singleImage() {
      return this.images.length === 1;
    },

    slideHeight() {
      return this.windowWidth > 768 ? this.dSlideHeight : this.mSlideHeight;
    },

    slideWidth() {
      return this.windowWidth > 768 ? this.dSlideWidth : this.mSlideWidth;
    },

    onDemandImages() {
      // return this.images;
      if (this.interacted) return this.images;

      if (this.images.length > 2) {
        /* replace al images after second image a default bounipun image (a static asset) */
        return this.images.map((image, index) => {
          return index < 1 ? image : "/loading.gif";
        });
      }

      return this.images;
    }

  },

  destroyed() {
    this.clearAutoplayRoutine();
  },

  mounted() {
    if (this.autoplay) this.setAutoplayRoutine();
  },

  watch: {
    activeIndex: {
      handler(newVal) {
        this.$emit("slideChanged", newVal);
      },

      immediate: true
    },

    images() {}

  },
  methods: {
    setActiveImage(index) {
      this.interacted = true;
      this.activeIndex = index;
      this.slideMargin = index * this.slideWidth * -1;
      external_gsap_["TweenLite"].to(this.$refs.thumbnails, 0.3, {
        scrollLeft: index * 40
      });
    },

    getBackgroundImage(image, size) {
      return {
        backgroundImage: `url('${image}')`,
        backgroundSize: this.size,
        width: this.slideWidth + "vw",
        height: this.slideHeight,
        backgroundPosition: "top center"
      };
    },

    isBounipunUrl(s) {
      if (s === undefined || s === null || s === "") return false;
      return s.includes('bounipun.in');
    },

    navigateIfRequired(index) {
      const linkAvailable = this.links[index] !== undefined && this.links[index] !== "";
      if (!linkAvailable) return;
      const link = this.links[index];
      window.open(link, this.isBounipunUrl(link) ? '_self' : '_blank');
    },

    getThumbBackground(image) {
      return {
        backgroundImage: `url('${image}')`,
        backgroundSize: "contain"
      };
    },

    isActive(index) {
      return this.activeIndex === index;
    },

    handleThumbnail(event) {
      console.log(this.$refs.thumbnails.scrollLeft);
    },

    onSwipe(data) {
      this.interacted = true;

      if (data.autoMode === undefined) {
        this.clearAutoplayRoutine();
      }

      const threshold = this.images.length - 1;

      switch (data.direction) {
        /* swiped left */
        case 2:
          // console.log("swiped left");

          /* stop at the last slide */
          if (this.slideMargin === threshold * (-1 * this.slideWidth)) {
            this.slideMargin = 0;
            this.activeIndex = 0;
            return;
          }

          this.slideMargin -= this.slideWidth;
          this.activeIndex += 1;
          break;

        /* swiped right */

        case 4:
          // console.log("swiped right");

          /* stop at the first slide */
          if (this.slideMargin === 0) return;
          this.slideMargin += this.slideWidth;
          this.activeIndex -= 1;
          break;
      }
      /* move thumbnails accordingly */


      external_gsap_["TweenLite"].to(this.$refs.thumbnails, 0.3, {
        scrollLeft: this.activeIndex * 40
      });
    },

    setAutoplayRoutine() {
      this.autoplayInterval = setInterval(() => this.onSwipe({
        direction: 2,
        autoMode: true
      }), 3000);
    },

    clearAutoplayRoutine() {
      clearInterval(this.autoplayInterval);
    },

    trackMouse(e) {
      if (!this.productPage || this.windowWidth < 768) return;
      e.preventDefault();
      /* product image dimensions (hxw) */

      let productImageSize = 1024;
      /* cursor position */

      let pos = {
        x: 0,
        y: 0
      };
      let x = 0;
      let y = 0;
      /* set hover as active */

      this.activeHover = true;
      /* lens element */

      const lens = this.$refs.lens;
      /* slides container element */

      const slidesContainer = this.$refs.slidesContainer;
      /* zoomed in box element */

      const zoomedIn = this.$refs.zoomedIn;
      /* document width */

      const documentWidth = document.documentElement.clientWidth;
      productImageSize = documentWidth;
      /* calculating slidewidth  */

      const slideWidth = this.dSlideWidth / 100 * documentWidth;
      const slideHeight = slidesContainer.offsetHeight; // const widthPad = productImageSize / slideWidth;
      // const heightPad = productImageSize / slidesContainer.offsetHeight;

      /* container ratio */

      const containerRatio = slideWidth / slideHeight;
      /* lens ration */

      const lensRatio = slideHeight / slideWidth;
      /* Calculate the ratio between zoomed-in box and lens: */

      const cx = zoomedIn.offsetWidth / lens.offsetWidth;
      const cy = zoomedIn.offsetHeight / lens.offsetHeight;
      const activeImage = this.images[this.activeIndex];
      /* only change zoomed-in image if slide changes */

      if (this.previousZoomedInImage !== activeImage) {
        const originalImage = activeImage.replace("productPages", "original");
        zoomedIn.style.backgroundImage = `url(${originalImage})`;
        this.previousZoomedInImage = activeImage;
      }
      /* get zoomed in box's height and width */


      const zoomedInHeight = slideHeight * cy;
      const zoomedInWidth = slideWidth * cx;
      /* set background size for zoomed in box */

      zoomedIn.style.backgroundSize = zoomedInHeight + "px " + zoomedInHeight + "px ";
      /* get cursor position */

      pos = this.getCursorPosition(e, slidesContainer);
      /* Calculate the position of the lens: */

      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      /* Prevent the lens from being positioned outside the image: */

      x = x < 0 ? 0 : x;
      y = y < 0 ? 0 : y;
      if (x > slideWidth - lens.offsetWidth) x = slideWidth - lens.offsetWidth;
      if (y > slidesContainer.offsetHeight - lens.offsetHeight) y = slidesContainer.offsetHeight - lens.offsetHeight;
      /* map lens box center to cursor */

      this.$refs.lens.style.left = x + "px";
      this.$refs.lens.style.top = y + "px";
      /* calculate left side pixels that got cut due to background-size:cover on product image */

      const leftPad = productImageSize * ((1 - containerRatio) / 2);
      /* Display what the lens "sees": */

      zoomedIn.style.backgroundPosition = "-" + (x * cx + (leftPad + 10)) + "px -" + y * cy + "px";
    },

    getCursorPosition(e, slidesContainer) {
      let x = 0,
          y = 0;
      const a = slidesContainer.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */

      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */

      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {
        x,
        y
      };
    }

  }
});
// CONCATENATED MODULE: ./components/slideshow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_slideshowvue_type_script_lang_js_ = (slideshowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/slideshow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_slideshowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "817806fa",
  "46803df4"
  
)

/* harmony default export */ var slideshow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("21c4f3b2", content, true)

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".iiz[data-v-e6d72b16]{max-width:100%;margin:0;position:relative;overflow:hidden;display:inline-block;cursor:zoom-in}.iiz--drag .iiz__zoom-img--visible[data-v-e6d72b16]{cursor:-webkit-grab;cursor:grab}.iiz__img[data-v-e6d72b16]{max-width:100%;height:auto;display:block;pointer-events:none;visibility:visible;opacity:1}.iiz__img--hidden[data-v-e6d72b16]{visibility:hidden;opacity:0}.iiz__img--abs[data-v-e6d72b16]{width:100%;height:100%;position:absolute;top:0;left:0;display:block}.iiz__zoom-img[data-v-e6d72b16]{width:auto!important;max-width:none!important;position:absolute;visibility:hidden;opacity:0;pointer-events:none;display:block}.iiz__zoom-img--visible[data-v-e6d72b16]{visibility:visible;opacity:1;pointer-events:auto;cursor:zoom-out;touch-action:none}.iiz__zoom-portal[data-v-e6d72b16]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000}.iiz__btn[data-v-e6d72b16]{background:hsla(0,0%,100%,.8);width:40px;height:40px;border:none;outline:none;padding:0;position:absolute;text-decoration:none;display:flex;align-items:center;justify-content:center;-webkit-appearance:none;-moz-appearance:none;appearance:none}.iiz__btn[data-v-e6d72b16]:before{content:\"\";background-position:50%;background-repeat:no-repeat;display:block}.iiz__hint[data-v-e6d72b16]{bottom:10px;right:10px;pointer-events:none}.iiz__hint[data-v-e6d72b16]:before{content:\"\";background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9 19.9'%3E%3Cpath d='M13.9 7.4C13.9 3.8 11 .9 7.4.9S.9 3.8.9 7.4s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5zm5.3 12.5l-6.7-7.2c-1.4 1.3-3.2 2.1-5.1 2.1-4.1 0-7.4-3.3-7.4-7.4S3.3 0 7.4 0s7.4 3.3 7.4 7.4c0 1.7-.6 3.4-1.7 4.7l6.8 7.2-.7.6z' fill='%23000222'/%3E%3C/svg%3E\");width:20px;height:20px}.iiz__close[data-v-e6d72b16]{top:10px;right:10px;visibility:hidden;opacity:0}.iiz__close--visible[data-v-e6d72b16]{visibility:visible;opacity:1}.iiz__close[data-v-e6d72b16]:before{content:\"\";width:29px;height:29px;background-image:linear-gradient(#222,#222),linear-gradient(#222,#222);background-size:100% 1px,1px 100%;transform:rotate(45deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(10);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(11);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(12);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(14);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(15);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-817806fa]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-817806fa]{scroll-behavior:smooth}body[data-v-817806fa]{margin:0!important;padding:0}*[data-v-817806fa]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-817806fa]{padding:6%}button[data-v-817806fa]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-817806fa]{width:7%}button.sub-action[data-v-817806fa]{background-color:green}button.action[data-v-817806fa]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-817806fa]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-817806fa]{padding:2% 5%;width:100%}}button.action.delete[data-v-817806fa]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-817806fa]:hover{background-color:#e01010}button.small[data-v-817806fa]{font-size:11px;padding:1% 3%}button.clear[data-v-817806fa]{background:transparent;padding:2% 5%}h1[data-v-817806fa],h2[data-v-817806fa],h3[data-v-817806fa],h4[data-v-817806fa],h5[data-v-817806fa],h6[data-v-817806fa],p[data-v-817806fa],span[data-v-817806fa]{margin:0;padding:0;color:#333}.page[data-v-817806fa]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-817806fa]{margin-top:13vh;padding:7%}}.page.-wh[data-v-817806fa]{padding:0 0 5%}.page.side-pad[data-v-817806fa]{padding:2%}@media(max-width:768px){.page.-broad[data-v-817806fa]{padding:2%}}.page .page-header[data-v-817806fa]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-817806fa]{height:10vw}}.page .page-header .title[data-v-817806fa]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-817806fa]{font-size:5.4vw}}.page .side-pad[data-v-817806fa]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-817806fa]{padding:0 10%}}.pointer[data-v-817806fa]{cursor:pointer}.center[data-v-817806fa],.center-col[data-v-817806fa]{display:flex;justify-content:center;align-items:center}.center-col[data-v-817806fa]{flex-direction:column}.center-space[data-v-817806fa]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-817806fa]{position:relative}.white[data-v-817806fa]{color:#fff}.scrollable-list[data-v-817806fa]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-817806fa]{justify-content:center}}.scrollable-list[data-v-817806fa]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-817806fa]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-817806fa]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-817806fa]{margin-top:10px;width:50px}[data-v-817806fa]::-webkit-scrollbar{display:none}p.msg[data-v-817806fa]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-817806fa]{background-color:#a93737}p.msg.success[data-v-817806fa]{background-color:#319a67}.flex[data-v-817806fa]{display:flex}.flex.around[data-v-817806fa]{justify-content:space-around}.flex.between[data-v-817806fa]{justify-content:space-between}.flex.evenly[data-v-817806fa]{justify-content:space-evenly}.flex.col[data-v-817806fa]{flex-direction:column}.flex.wrap[data-v-817806fa]{flex-wrap:wrap}.flex.center[data-v-817806fa]{justify-content:center}.flex.center[data-v-817806fa],.flex.v-center[data-v-817806fa]{align-items:center}.flex.j-center[data-v-817806fa]{justify-content:center}.flex.start[data-v-817806fa]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-817806fa]{align-items:center}.flex.baseline[data-v-817806fa]{align-items:baseline}.flex.end[data-v-817806fa]{justify-content:flex-end}.flex.end.center[data-v-817806fa]{align-items:center}a[data-v-817806fa]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-817806fa]{display:none}}.onlyMobile[data-v-817806fa]{display:none}@media(max-width:768px){.onlyMobile[data-v-817806fa]{display:inline;display:initial}}.slideshow-container[data-v-817806fa]{overflow:hidden}@-webkit-keyframes fadeIn-data-v-817806fa{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-817806fa{0%{opacity:0}to{opacity:1}}.slideshow-container .zoomed-in-image[data-v-817806fa]{z-index:4;position:fixed;left:32%;top:12vh;border:1px solid #efefef;width:300px;height:300px;background-repeat:no-repeat;background-color:#fff;-webkit-animation:fadeIn-data-v-817806fa .3s linear;animation:fadeIn-data-v-817806fa .3s linear}.slideshow-container .slideshow[data-v-817806fa]{display:flex;overflow-x:auto;justify-content:flex-start;position:relative}.slideshow-container .slideshow[data-v-817806fa]::-webkit-scrollbar{display:none}.slideshow-container .slideshow .slides-container[data-v-817806fa]{touch-action:pan-y!important;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-left:0;transition:all .4s ease-in-out}.slideshow-container .slideshow .slides-container .product-image[data-v-817806fa]{overflow:hidden;background-position:50%;background-repeat:no-repeat}.slideshow-container .slideshow .slides-container .product-image.clickable[data-v-817806fa]{cursor:pointer}.slideshow-container .slideshow .slides-container .product-image.productPage[data-v-817806fa]{cursor:cell}@media screen and (min-width:768px){.slideshow-container .slideshow .slides-container .product-image[data-v-817806fa]{height:90vw}}.slideshow-container .slideshow .lens[data-v-817806fa]{position:absolute;border:1px solid #d4d4d4;pointer-events:none;width:120px;height:120px}.slideshow-container .custom-text[data-v-817806fa]{text-align:center;font-size:12px;padding:7px 15px;color:#7f7f7f;opacity:.7;font-family:\"SF-Pro\"}.slideshow-container #thumbnails-container[data-v-817806fa]{margin-left:0;transition:all .2s ease-in-out}.slideshow-container .thumbnails[data-v-817806fa]{width:100%;padding:2px;display:flex}.slideshow-container .thumbnails .thumbnail[data-v-817806fa]{width:5vw;height:5vw;background-repeat:no-repeat;background-position:50%;background-size:contain;overflow:hidden;margin:0 10px;box-shadow:1px 1px 5px rgba(0,0,0,.16);transform:scale(1);transition:all .3s ease-in-out;cursor:pointer}.slideshow-container .thumbnails .thumbnail.active[data-v-817806fa]{transform:scale(1.1)}@media(max-width:768px){.slideshow-container .thumbnails .thumbnail[data-v-817806fa]{width:19vw;height:19vw}}.slideshow-container .till-dots[data-v-817806fa]{position:relative}.slideshow-container .dots[data-v-817806fa]{height:20px;display:flex;justify-content:center;align-items:center;box-sizing:border-box;position:absolute;bottom:1px;left:0;width:100%;margin:-1%;pointer-events:none}.slideshow-container .dots.main[data-v-817806fa]{bottom:7px}@media(max-width:768px){.slideshow-container .dots[data-v-817806fa],.slideshow-container .dots.main[data-v-817806fa]{bottom:0}}.slideshow-container .dots .dot[data-v-817806fa]{height:2px;width:19px;background-color:hsla(0,0%,100%,.72941);margin:0 0 5px;transition:all .3s ease-in-out}.slideshow-container .dots .dot.active[data-v-817806fa]{background-color:#7d7d7d}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productCard.vue?vue&type=template&id=86a6c49a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-card",class:{
    escape: _vm.collectionName === 'Escape' && _vm.$route.name === 'Collections',
    singleView: !_vm.gridView,
  },on:{"click":_vm.navigateToProductPage}},[_vm._ssrNode(((_vm.product.saleDetails)?("<span class=\"discount\" data-v-86a6c49a>"+_vm._ssrEscape("\n    -"+_vm._s(_vm.product.saleDetails.discountPercentage)+"%")+"</span>"):"<!---->")+" <img"+(_vm._ssrAttr("src",_vm.inWishlist
        ? '/icons/dark/wishlist-filled.png'
        : '/icons/dark/wishlist.png'))+(_vm._ssrClass(null,[{ added: _vm.inWishlist }, 'wishlist']))+" data-v-86a6c49a> "),_vm._ssrNode("<div class=\"main-image-container center\" data-v-86a6c49a>","</div>",[_c('slideshow',{ref:"slideshow",attrs:{"images":_vm.slideshowImages,"extraClass":"search-slideshow","dots":true,"mSlideWidth":_vm.mobileDimensions.width,"mSlideHeight":_vm.mobileDimensions.height,"dSlideWidth":29,"dSlideHeight":"400px","size":"cover"}})],1),_vm._ssrNode(" "+((!(_vm.collectionName === 'Escape' && _vm.$route.name === 'collections'))?("<div class=\"flex v-center evenly col color-previews\""+(_vm._ssrStyle(null,_vm.readyToShip ? "align-items: center;justify-content: flex-end;" : '', null))+" data-v-86a6c49a><div class=\"flex center\" data-v-86a6c49a><div class=\"base-color-boxes\" data-v-86a6c49a>"+(_vm._ssrList((_vm.baseColorImagesPreview.previews),function(preview,index){return ("<div"+(_vm._ssrClass("color-image shadow",{ active: _vm.isActiveBaseColor(index) }))+(_vm._ssrStyle(null,("background-image: url(" + (_vm.getBaseColorPath(index)) + ")"), null))+" data-v-86a6c49a></div>")}))+"</div> "+((!_vm.readyToShip)?("<p class=\"additional-colors\" style=\"display: block; margin-left: 3px\" data-v-86a6c49a><span data-v-86a6c49a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.baseColorImagesPreview.additional > 0
              ? ("+ " + (_vm.baseColorImagesPreview.additional))
              : " ")+"\n        ")+"</span> <br data-v-86a6c49a> "+((_vm.baseColorImagesPreview.additional > 0)?("<span data-v-86a6c49a> color(s) </span>"):"<!---->")+"</p>"):"<!---->")+"</div> "+((_vm.readyToShip)?("<span class=\"additional-colors rts\" data-v-86a6c49a>"+_vm._ssrEscape("\n      "+_vm._s(_vm.readyToShip ? "Ready To Ship" : "")+"\n    ")+"</span>"):"<!---->")+"</div>"):"<!---->")+" <div class=\"text-details\" data-v-86a6c49a><div class=\"product-name center-col\" data-v-86a6c49a><span class=\"name\" data-v-86a6c49a>"+_vm._ssrEscape("\n        "+_vm._s(_vm.collectionName === "Escape"
            ? _vm.product.colors[_vm.activeColorIndex] !== undefined
              ? _vm.product.colors[_vm.activeColorIndex].name
              : _vm.product.name
            : _vm.product.name)+"\n      ")+"</span> <span class=\"collection\" data-v-86a6c49a>"+_vm._ssrEscape(" "+_vm._s(_vm.collectionName)+" ")+"</span> "+((_vm.belongsToDecor)?("<span class=\"price\" data-v-86a6c49a>"+_vm._ssrEscape("\n         Size: "+_vm._s(_vm.decorBasicInfo2)+"\n        ")+"</span>"):"<!---->")+" "+((!_vm.product.askForPrice)?("<div class=\"price-box\" data-v-86a6c49a>"+((!_vm.readyToShip && !_vm.lowestAndHighestPriceisSame)?("<span class=\"price\" data-v-86a6c49a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatCurrency(_vm.lowestVariantPrice))+"\n          -\n          "+_vm._s(_vm.formatCurrency(_vm.highestVariantPirce))+"\n        ")+"</span>"):"<!---->")+" "+((!_vm.readyToShip && _vm.lowestAndHighestPriceisSame)?("<span class=\"price\" data-v-86a6c49a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatCurrency(_vm.highestVariantPirce))+"\n        ")+"</span>"):"<!---->")+" "+((_vm.readyToShip)?("<span class=\"price\" data-v-86a6c49a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatCurrency(_vm.directPrice))+"\n        ")+"</span>"):"<!---->")+"</div>"):("<div class=\"ask-for-price flex center\" style=\"background-color: rgb(74 74 74); padding: 0 7px\" data-v-86a6c49a><span class=\"text\" style=\"text-transform: capitalize; color: white\" data-v-86a6c49a>\n          Ask For Price\n        </span></div>"))+"</div></div> <div data-v-86a6c49a>"+((!_vm.thirdPartyProduct && !_vm.belongsToDecor)?("<div class=\"variants-available center\" data-v-86a6c49a>"+(_vm._ssrList((_vm.variantsAvailable),function(variant,index){return ("<div class=\"variant\" data-v-86a6c49a>"+_vm._ssrEscape("\n        "+_vm._s(variant)+"\n      ")+"</div>")}))+"</div>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productCard.vue?vue&type=template&id=86a6c49a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// EXTERNAL MODULE: ./helpers/currencyHelper.js
var currencyHelper = __webpack_require__(145);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var productCardvue_type_script_lang_js_ = ({
  mixins: [currencyHelper["a" /* default */]],
  props: {
    gridView: {
      type: Boolean,
      default: false
    },
    searchView: {
      type: Boolean,
      default: false
    },
    details: {
      type: Object,
      default: () => {
        return {
          name: "Khatamband Search",
          collection: "Bounipun Karakul",
          price: "INR 20000"
        };
      }
    },
    variants: {
      type: Object,
      default: () => {
        return {
          shawl: true
        };
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
      default: "product1.png"
    },
    activeColor: {
      type: Number,
      default: -1
    }
  },
  computed: {
    mobileDimensions() {
      return this.gridView ? {
        width: 48,
        height: "315px"
      } : {
        width: 100,
        height: "67vh"
      };
    },

    imagePath() {
      if (this.product.notProvided || this.product.colors.length === 0) return "/default-image.png";
      let mainImage = "";
      /* find main color */

      const mainColor = this.product.colors.find(color => color.mainColor === true);
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
        return temp.map(variant => variant.name);
      } // if(this.product.variants) {
      //   this.product.variants.sort((a,b) => a._id.order - b._id.order);
      //   return this.product.variants.map(variant => variant._id.name);
      // }
      // if (this.product.variantNames) return this.product.variantNames;


      return this.product.variants.map(variant => variant._id.name);
    },

    decorBasicInfo2() {
      try {
        console.log(this.product.variantsInfo);
        const basicVariant = this.product.variantsInfo.find(variant => variant.code.toLowerCase().includes("basic"));
        return basicVariant.info2;
      } catch (e) {
        return "";
      }
    },

    baseColorsBoxes() {
      if (!this.product.colors) return;
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

      let filteredColors = baseColorList.filter((_, index) => index !== this.activeColorIndex);
      return [activeColor, ...filteredColors];
    },

    baseColorImages() {
      if (!this.product.colors) return [{
        path: "",
        actualIndex: -1
      }];
      /* base color list */

      let baseColorList = this.product.colors.map((color, index) => {
        const images = color.images;

        if (images.length === 0 || images === undefined) {
          console.log("NO IMAGES PROVIDED");
          /* if escape, show the chip (NO_WAY) */

          return {
            path: "",
            actualIndex: index
          };
        }

        return {
          path: this.$getImage(images[images.length - 1].path, "chips"),
          actualIndex: index
        };
      });
      return baseColorList;
      /* save active color details */

      const activeColor = baseColorList[this.activeColorIndex];
      /* get all colors except the active one */

      let filteredColors = baseColorList.filter((_, index) => index !== this.activeColorIndex);
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
        additional
      };
    },

    collectionName() {
      if (typeof this.product.bounipun_collection === "string") return this.product.bounipun_collection.trim();
      if (this.product.bounipun_collection === null) return "N/A";
      return this.product.bounipun_collection.name.trim();
    },

    belongsToDecor() {
      return this.collectionName == 'WALL ART - KHATT' || this.collectionName === 'WALL ART - CONNOISSEUR';
    },

    directPrice() {
      if (this.currencyIsINR) return this.product.directPrice;else return this.product.directPricing[this.currency];
    },

    lowestVariantPrice() {
      if (this.currencyIsINR) return this.product.priceRange.startsAt;else return this.product.pricingRange[this.currency].startsAt;
    },

    highestVariantPirce() {
      if (this.currencyIsINR) return this.product.priceRange.endsAt;else return this.product.pricingRange[this.currency].endsAt;
    },

    lowestAndHighestPriceisSame() {
      return this.lowestVariantPrice === this.highestVariantPirce;
    },

    slideshowImages() {
      if (this.product.notProvided || this.product.colors.length === 0) return ["/default-image.png"];
      /* could be a breaking change */

      this.product.colors.forEach(c => {
        const mainImages = c.images || [];
        /* check for main image */

        const mainImageIndex = mainImages.findIndex(i => i.mainImage === true);
        /* shift main image to the beginning */

        if (mainImageIndex !== -1) {
          const mainImage = { ...mainImages[mainImageIndex]
          };
          mainImages.splice(mainImageIndex, 1);
          mainImages.unshift(mainImage);
        }
      });
      let mainImages = [];
      /* if active color provided */

      if (this.activeColorIndex !== -1) {
        var _this$product$colors$;

        const mImages = ((_this$product$colors$ = this.product.colors[this.activeColorIndex]) === null || _this$product$colors$ === void 0 ? void 0 : _this$product$colors$.images) || [];
        /* if no images, uploaded */

        if (mImages.length === 0) {
          return ["/default-image.png"];
        }

        return mImages.map(image => this.$getImage(image.path, "productPages"));
      }
      /* find main color */


      const mainColor = this.product.colors.find(color => color.mainColor === true);
      /* if main color undefined */

      if (mainColor !== undefined) {
        mainImages = mainColor.images;
      } else mainImages = this.product.colors[0].images;
      /* fetch main image */


      return mainImages.map(image => this.$getImage(image.path, "productPages"));
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

      const foundIndex = wishlist.findIndex(entry => entry.product === this.product._id);

      if (foundIndex !== -1) {
        return true;
      }

      return false;
    }

  },

  mounted() {
    this.activeColorIndex = this.activeColor; // console.log(this.$route);
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


      const action = this.inWishlist ? "remove-from-wishlist" : "add-to-wishlist";
      /* take item to wishlist */

      const addToWishlist = await this.$post("/wishlistActions", {
        action,
        product: this.product._id,
        colorCode: this.activeColorCode
      });
      /* if request failed */

      if (addToWishlist.resolved === false) return;
      /* refetch wishlist */

      /* fetch profile */

      this.$store.dispatch("customer/fetchProfile");
      this.$store.dispatch("customer/fetchWishlist");
    },

    navigateToProductPage() {
      let query = {// _id: this.product._id
      };
      if (this.activeColorIndex !== -1) query.activeColor = this.activeColorIndex;
      this.$router.push({
        path: `/${this.product.slug}`,
        query
      });
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
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
    }

  }
});
// CONCATENATED MODULE: ./components/productCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_productCardvue_type_script_lang_js_ = (productCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/productCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_productCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "86a6c49a",
  "f518c336"
  
)

/* harmony default export */ var productCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Slideshow: __webpack_require__(174).default})


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_86a6c49a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_86a6c49a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_86a6c49a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_86a6c49a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_86a6c49a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(10);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(11);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(12);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(14);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(15);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-86a6c49a]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-86a6c49a]{scroll-behavior:smooth}body[data-v-86a6c49a]{margin:0!important;padding:0}*[data-v-86a6c49a]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-86a6c49a]{padding:6%}button[data-v-86a6c49a]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-86a6c49a]{width:7%}button.sub-action[data-v-86a6c49a]{background-color:green}button.action[data-v-86a6c49a]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-86a6c49a]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-86a6c49a]{padding:2% 5%;width:100%}}button.action.delete[data-v-86a6c49a]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-86a6c49a]:hover{background-color:#e01010}button.small[data-v-86a6c49a]{font-size:11px;padding:1% 3%}button.clear[data-v-86a6c49a]{background:transparent;padding:2% 5%}h1[data-v-86a6c49a],h2[data-v-86a6c49a],h3[data-v-86a6c49a],h4[data-v-86a6c49a],h5[data-v-86a6c49a],h6[data-v-86a6c49a],p[data-v-86a6c49a],span[data-v-86a6c49a]{margin:0;padding:0;color:#333}.page[data-v-86a6c49a]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-86a6c49a]{margin-top:13vh;padding:7%}}.page.-wh[data-v-86a6c49a]{padding:0 0 5%}.page.side-pad[data-v-86a6c49a]{padding:2%}@media(max-width:768px){.page.-broad[data-v-86a6c49a]{padding:2%}}.page .page-header[data-v-86a6c49a]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-86a6c49a]{height:10vw}}.page .page-header .title[data-v-86a6c49a]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-86a6c49a]{font-size:5.4vw}}.page .side-pad[data-v-86a6c49a]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-86a6c49a]{padding:0 10%}}.pointer[data-v-86a6c49a]{cursor:pointer}.center[data-v-86a6c49a],.center-col[data-v-86a6c49a]{display:flex;justify-content:center;align-items:center}.center-col[data-v-86a6c49a]{flex-direction:column}.center-space[data-v-86a6c49a]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-86a6c49a]{position:relative}.white[data-v-86a6c49a]{color:#fff}.scrollable-list[data-v-86a6c49a]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-86a6c49a]{justify-content:center}}.scrollable-list[data-v-86a6c49a]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-86a6c49a]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-86a6c49a]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-86a6c49a]{margin-top:10px;width:50px}[data-v-86a6c49a]::-webkit-scrollbar{display:none}p.msg[data-v-86a6c49a]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-86a6c49a]{background-color:#a93737}p.msg.success[data-v-86a6c49a]{background-color:#319a67}.flex[data-v-86a6c49a]{display:flex}.flex.around[data-v-86a6c49a]{justify-content:space-around}.flex.between[data-v-86a6c49a]{justify-content:space-between}.flex.evenly[data-v-86a6c49a]{justify-content:space-evenly}.flex.col[data-v-86a6c49a]{flex-direction:column}.flex.wrap[data-v-86a6c49a]{flex-wrap:wrap}.flex.center[data-v-86a6c49a]{justify-content:center}.flex.center[data-v-86a6c49a],.flex.v-center[data-v-86a6c49a]{align-items:center}.flex.j-center[data-v-86a6c49a]{justify-content:center}.flex.start[data-v-86a6c49a]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-86a6c49a]{align-items:center}.flex.baseline[data-v-86a6c49a]{align-items:baseline}.flex.end[data-v-86a6c49a]{justify-content:flex-end}.flex.end.center[data-v-86a6c49a]{align-items:center}a[data-v-86a6c49a]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-86a6c49a]{display:none}}.onlyMobile[data-v-86a6c49a]{display:none}@media(max-width:768px){.onlyMobile[data-v-86a6c49a]{display:inline;display:initial}}.product-card[data-v-86a6c49a]{width:29vw;height:550px;overflow:hidden;padding:1vw;margin:5px 0;position:relative;cursor:pointer}.product-card .discount[data-v-86a6c49a]{position:absolute;top:10px;left:10%;z-index:1;font-family:\"SF-Pro SemiBold\";font-size:14px;background-color:#359135;color:#fff;padding:2px 4px;opacity:.8}@media(max-width:768px){.product-card .discount[data-v-86a6c49a]{font-size:12px;left:4%;top:10px}}.product-card .wishlist[data-v-86a6c49a]{position:absolute;width:18px;top:10%;right:10%;transition:transform .3s ease-in-out;z-index:1}.product-card .wishlist.added[data-v-86a6c49a]{transform:scale(1.2)}.product-card .main-image-container[data-v-86a6c49a]{width:100%;height:75%;overflow:hidden}.product-card .main-image-container .main-image[data-v-86a6c49a]{height:100%}@media(max-width:768px){.product-card .main-image-container[data-v-86a6c49a]{height:67%}}.product-card .color-previews[data-v-86a6c49a]{height:10%}.product-card .color-previews .base-color-boxes[data-v-86a6c49a]{display:flex;justify-content:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-bottom:0}.product-card .color-previews .base-color-boxes .color-image[data-v-86a6c49a]{width:30px;height:30px;background-size:contain;margin:0 5px;transition:all .3s ease-in-out}.product-card .color-previews .base-color-boxes .color-image.active[data-v-86a6c49a]{border:3px solid #a2a2a2}.product-card .color-previews .additional-colors[data-v-86a6c49a]{font-size:10px;color:#7f7f7f}.product-card .color-previews .rts[data-v-86a6c49a]{color:#32a77c;margin-top:1px}@media(max-width:768px){.product-card .color-previews[data-v-86a6c49a]{height:16%}.product-card .color-previews .base-color-boxes[data-v-86a6c49a]{margin-bottom:5px}.product-card .color-previews .base-color-boxes .color-image[data-v-86a6c49a]{margin:5px}}.product-card .text-details[data-v-86a6c49a]{width:100%;height:10%;padding-bottom:2px;padding-top:3px}@media(max-width:768px){.product-card .text-details[data-v-86a6c49a]{height:12%}}.product-card .text-details .product-name[data-v-86a6c49a]{font-size:10px;text-transform:uppercase;font-weight:900;text-align:center}.product-card .text-details .product-name .name[data-v-86a6c49a]{font-size:10px;font-family:\"SF-Pro SemiBold\";font-weight:900}.product-card .text-details .collection[data-v-86a6c49a]{color:#7f7f7f;font-size:10px}.product-card .text-details .price[data-v-86a6c49a]{font-size:11px;font-weight:900;color:#7f7f7f}.product-card .variants-available[data-v-86a6c49a]{height:5%}@media(max-width:768px){.product-card .variants-available[data-v-86a6c49a]{height:5%}}.product-card .variants-available .variant[data-v-86a6c49a]{color:#333;border:1px solid #333;margin:0 2px;padding:2px 5px;font-size:8.5px;width:29%;display:flex;justify-content:center;align-items:center}.product-card .actions[data-v-86a6c49a]{height:0%;background:rgba(0,128,0,.607)}@media(max-width:768px){.product-card .actions[data-v-86a6c49a]{height:5%}}.product-card .actions .shop-now[data-v-86a6c49a]{font-size:12px;text-transform:uppercase;font-family:\"Poppins\"}@media(max-width:768px){.product-card[data-v-86a6c49a]{width:48vw;height:480px}.product-card.singleView[data-v-86a6c49a]{width:100%;box-sizing:content-box;padding-bottom:25px;height:91vh;border-bottom:1px solid #efefef;margin:0}.product-card.singleView .main-image-container[data-v-86a6c49a]{height:79%}.product-card.singleView .color-previews[data-v-86a6c49a]{height:7%}.product-card.singleView .text-details[data-v-86a6c49a]{height:10%}.product-card.singleView .text-details span.name[data-v-86a6c49a],.product-card.singleView .text-details span.price[data-v-86a6c49a]{font-size:13px}.product-card.singleView .variants-available[data-v-86a6c49a]{height:6%}.product-card.escape[data-v-86a6c49a]{height:440px}.product-card.escape .main-image-container[data-v-86a6c49a]{height:70%}.product-card.escape .text-details[data-v-86a6c49a]{height:16%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=product-card.js.map
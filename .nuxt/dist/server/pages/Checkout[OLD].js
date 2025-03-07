exports.ids = [98,10,44];
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

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ca8e16ca", content, true, context)
};

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/CartItem.vue?vue&type=template&id=6383d5ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cart-item",on:{"click":function($event){return _vm.navigateToProductPage(_vm.item)}}},[_vm._ssrNode("<div class=\"image-container\""+(_vm._ssrStyle(null,("background-image: url(" + (_vm.getS3Path(_vm.item.mainImage)) + ")"), null))+" data-v-6383d5ce></div> <div class=\"details-and-quantity\" data-v-6383d5ce><span class=\"name\" data-v-6383d5ce>"+_vm._ssrEscape(" "+_vm._s(_vm.item.productName)+" ")+"</span> <span class=\"color-name\" data-v-6383d5ce>"+_vm._ssrEscape(" "+_vm._s(_vm.item.colorName)+" ")+"</span> <span class=\"collection\" data-v-6383d5ce>"+_vm._ssrEscape(" "+_vm._s(_vm.item.collectionName)+" ")+"</span> <span class=\"variant\" data-v-6383d5ce>"+_vm._ssrEscape(" "+_vm._s(_vm.item.variantName)+" ")+"</span> <span class=\"fabric\" data-v-6383d5ce>"+_vm._ssrEscape(" "+_vm._s(_vm.item.fabricName)+" ")+"</span> <span class=\"fabric\" data-v-6383d5ce>"+_vm._ssrEscape(" "+_vm._s(_vm.item.fabricInfo1)+" ")+"</span> "+((!_vm.item.askForPrice)?("<span class=\"price\" data-v-6383d5ce>"+_vm._ssrEscape("\n      "+_vm._s(_vm.formatCurrency(_vm.cartItemPrice))+"\n    ")+"</span>"):"<!---->")+" "+((!_vm.allowUpdate)?("<span class=\"qty\" data-v-6383d5ce>"+_vm._ssrEscape(" Qty: "+_vm._s(_vm.item.quantity)+" ")+"</span>"):"<!---->")+" <span class=\"shippingTime\" data-v-6383d5ce>"+_vm._ssrEscape("\n      Standard Shipping: "+_vm._s(_vm.item.shippingTime)+" week(s)\n    ")+"</span> "+((_vm.allowUpdate)?("<div class=\"quantity-picker\" data-v-6383d5ce><button data-v-6383d5ce>-</button> <button class=\"qty\" data-v-6383d5ce>"+_vm._ssrEscape(_vm._s(_vm.item.quantity))+"</button> <button data-v-6383d5ce>+</button></div>"):"<!---->")+"</div> "+((_vm.allowUpdate)?("<img src=\"/icons/dark/remove-cart-item.png\" class=\"remove-item\" data-v-6383d5ce>"):"<!---->")+" "+((!_vm.item.askForPrice)?("<p class=\"total-product-price\" data-v-6383d5ce>"+_vm._ssrEscape("\n    "+_vm._s(_vm.formatCurrency(_vm.totalCartItemPrice))+"\n  ")+"</p>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Purchase/CartItem.vue?vue&type=template&id=6383d5ce&scoped=true&

// EXTERNAL MODULE: ./helpers/currencyHelper.js
var currencyHelper = __webpack_require__(145);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/CartItem.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CartItemvue_type_script_lang_js_ = ({
  mixins: [currencyHelper["a" /* default */]],
  props: {
    item: Object,
    allowUpdate: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      cartItem: {
        product: {},
        colorCode: "",
        quantity: 0,
        variant: {},
        fabric: {}
      }
    };
  },

  computed: {
    cartItemPrice() {
      if (this.currencyIsINR) return this.item.price;else return this.item.pricing[this.currency];
    },

    totalCartItemPrice() {
      return this.cartItemPrice * this.item.quantity;
    }

  },

  mounted() {},

  methods: {
    navigateToProductPage() {
      // this.$router.push("/products?_id=" + this.item.productId);
      // this.$router.push({
      //   path: `/${this.item.slug}`
      //   // query
      // });
      window.open(`/${this.item.slug}`, "_blank");
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    },

    getS3Path(fileName) {
      return this.$getImage(fileName, 'productPages');
    },

    emitUpdateQuantity(item, operation) {
      this.$emit("updateQuantity", {
        item: item.cartEntry,
        operation
      });
    },

    emitRemoveFromCart(item) {
      this.$emit("removeItem", item.cartEntry);
    }

  }
});
// CONCATENATED MODULE: ./components/Purchase/CartItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Purchase_CartItemvue_type_script_lang_js_ = (CartItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Purchase/CartItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(198)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Purchase_CartItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6383d5ce",
  "4a175c32"
  
)

/* harmony default export */ var CartItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_6383d5ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_6383d5ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_6383d5ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_6383d5ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_6383d5ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 199:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-6383d5ce]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-6383d5ce]{scroll-behavior:smooth}body[data-v-6383d5ce]{margin:0!important;padding:0}*[data-v-6383d5ce]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-6383d5ce]{padding:6%}button[data-v-6383d5ce]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-6383d5ce]{width:7%}button.sub-action[data-v-6383d5ce]{background-color:green}button.action[data-v-6383d5ce]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-6383d5ce]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-6383d5ce]{padding:2% 5%;width:100%}}button.action.delete[data-v-6383d5ce]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-6383d5ce]:hover{background-color:#e01010}button.small[data-v-6383d5ce]{font-size:11px;padding:1% 3%}button.clear[data-v-6383d5ce]{background:transparent;padding:2% 5%}h1[data-v-6383d5ce],h2[data-v-6383d5ce],h3[data-v-6383d5ce],h4[data-v-6383d5ce],h5[data-v-6383d5ce],h6[data-v-6383d5ce],p[data-v-6383d5ce],span[data-v-6383d5ce]{margin:0;padding:0;color:#333}.page[data-v-6383d5ce]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-6383d5ce]{margin-top:13vh;padding:7%}}.page.-wh[data-v-6383d5ce]{padding:0 0 5%}.page.side-pad[data-v-6383d5ce]{padding:2%}@media(max-width:768px){.page.-broad[data-v-6383d5ce]{padding:2%}}.page .page-header[data-v-6383d5ce]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-6383d5ce]{height:10vw}}.page .page-header .title[data-v-6383d5ce]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-6383d5ce]{font-size:5.4vw}}.page .side-pad[data-v-6383d5ce]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-6383d5ce]{padding:0 10%}}.pointer[data-v-6383d5ce]{cursor:pointer}.center[data-v-6383d5ce],.center-col[data-v-6383d5ce]{display:flex;justify-content:center;align-items:center}.center-col[data-v-6383d5ce]{flex-direction:column}.center-space[data-v-6383d5ce]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-6383d5ce]{position:relative}.white[data-v-6383d5ce]{color:#fff}.scrollable-list[data-v-6383d5ce]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-6383d5ce]{justify-content:center}}.scrollable-list[data-v-6383d5ce]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-6383d5ce]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-6383d5ce]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-6383d5ce]{margin-top:10px;width:50px}[data-v-6383d5ce]::-webkit-scrollbar{display:none}p.msg[data-v-6383d5ce]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-6383d5ce]{background-color:#a93737}p.msg.success[data-v-6383d5ce]{background-color:#319a67}.flex[data-v-6383d5ce]{display:flex}.flex.around[data-v-6383d5ce]{justify-content:space-around}.flex.between[data-v-6383d5ce]{justify-content:space-between}.flex.evenly[data-v-6383d5ce]{justify-content:space-evenly}.flex.col[data-v-6383d5ce]{flex-direction:column}.flex.wrap[data-v-6383d5ce]{flex-wrap:wrap}.flex.center[data-v-6383d5ce]{justify-content:center}.flex.center[data-v-6383d5ce],.flex.v-center[data-v-6383d5ce]{align-items:center}.flex.j-center[data-v-6383d5ce]{justify-content:center}.flex.start[data-v-6383d5ce]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-6383d5ce]{align-items:center}.flex.baseline[data-v-6383d5ce]{align-items:baseline}.flex.end[data-v-6383d5ce]{justify-content:flex-end}.flex.end.center[data-v-6383d5ce]{align-items:center}a[data-v-6383d5ce]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-6383d5ce]{display:none}}.onlyMobile[data-v-6383d5ce]{display:none}@media(max-width:768px){.onlyMobile[data-v-6383d5ce]{display:inline;display:initial}}.cart-item[data-v-6383d5ce]{display:flex;align-items:center;box-shadow:1px 1px 15px rgba(0,0,0,.16);margin:10px;position:relative;height:200px;width:80%;overflow:hidden;cursor:pointer}.cart-item .image-container[data-v-6383d5ce]{width:13vw;height:90%;background-size:cover;background-position:top;background-repeat:no-repeat;margin-left:8px}.cart-item .image-container img[data-v-6383d5ce]{width:100%}@media(max-width:768px){.cart-item[data-v-6383d5ce]{width:90%;height:68vw;margin:10px}.cart-item .image-container[data-v-6383d5ce]{width:35%}}.cart-item .details-and-quantity[data-v-6383d5ce]{width:65%;padding-left:10px;display:flex;flex-direction:column;justify-content:center}.cart-item .details-and-quantity span[data-v-6383d5ce]{color:#7f7f7f;font-size:11px;display:inline-block}.cart-item .details-and-quantity span.name[data-v-6383d5ce]{color:#464646;font-family:\"Poppins Bold\";text-transform:uppercase;font-size:13px}.cart-item .details-and-quantity span.collection[data-v-6383d5ce]{font-family:\"SF-Pro\";font-size:11px;margin-bottom:4px}.cart-item .details-and-quantity span.price[data-v-6383d5ce]{color:#464646;font-family:\"Poppins\";font-size:12px}.cart-item .details-and-quantity span.variant[data-v-6383d5ce]{font-weight:900;color:#464646}.cart-item .details-and-quantity .quantity-picker[data-v-6383d5ce]{margin-top:7px;display:flex;justify-content:space-around;border:1px solid #919191;width:80px}.cart-item .details-and-quantity .quantity-picker button[data-v-6383d5ce]{background:transparent;font-family:\"Poppins Bold\";text-align:center;padding:0;font-size:10px;color:#000}.cart-item .details-and-quantity .quantity-picker button[data-v-6383d5ce]:first-child{border-right:1px solid #919191;padding:0 5px}.cart-item .details-and-quantity .quantity-picker button[data-v-6383d5ce]:nth-child(3){border-left:1px solid #919191;padding:0 5px}.cart-item .details-and-quantity .quantity-picker button.qty[data-v-6383d5ce]{width:50%;padding:0 15px}.cart-item .remove-item[data-v-6383d5ce]{position:absolute;right:3%;top:10%;width:4%;opacity:.6;transition:opacity .2s ease-in-out}.cart-item .remove-item[data-v-6383d5ce]:hover{opacity:1}.cart-item .total-product-price[data-v-6383d5ce]{font-family:\"Poppins Bold\";position:absolute;bottom:10%;right:3%;color:#464646}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(235);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0189bd3e", content, true, context)
};

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RAZORPAY_KEY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STRIPE_PUBLISHABLE_KEY; });
let envIsProd = false;

try {
  if (process && false === true) {
    console.log('Dev env set ✅');
  } else {
    envIsProd = true;
  }
} catch (e) {
  envIsProd = true;
}
/* check if env is prod */


if (envIsProd) {
  console.log('Prod env set ✅');
}

const VITE_RAZORPAY_KEY_ID_TEST = "rzp_test_LnJPEC0MOtvlSn";
const RAZORPAY_KEY_ID_PROD = "rzp_live_bzpnf6YPxKKfTh";
const STRIPE_PK_PROD = "pk_live_51J0qm7SAJnKcquR3JZ1T9qVG8lGA4bIflVcp5TZFWYP06n6XPLWojyNYUc5PMUFEwWCoe62IHW9HsnebRlpl5Scw00LC38Ktxu";
const VITE_STRIPE_PK_TEST = "pk_test_51J0qm7SAJnKcquR3vsOUPap0r0P1vwuEA75yfexoRqRRouVuc2uagePU0RZOPFCDK6VNAhgHOSnzJOfRYo78YUhQ00C4FhrbSV";
const VITE_STRIPE_PK_TEST_SAIBBYWEB = "pk_test_Ct9bX6YRz5YItn8gCGGO4ypy00KzN2R4mG"; // const {
//   NODE_ENV,
//   MODE,
//   VITE_RAZORPAY_KEY_ID_TEST,
//   RAZORPAY_KEY_ID_PROD,
//   STRIPE_PK_PROD,
//   VITE_STRIPE_PK_TEST,
//   VITE_STRIPE_PK_TEST_SAIBBYWEB
// } = import.meta.env;

/* environment is dev flag */
// const envIsDev = NODE_ENV === "development" || MODE === "development";
// const envIsProd = NODE_ENV === "production";

/* gateways */

let gateways = {
  razorpay: {
    keyId: ""
  },
  stripe: {
    publishableKey: ""
  }
};
/* set keys function */

function setKeys() {
  const {
    razorpay,
    stripe
  } = gateways;
  /* set test keys (by default) */

  razorpay.keyId = VITE_RAZORPAY_KEY_ID_TEST;
  stripe.publishableKey = VITE_STRIPE_PK_TEST_SAIBBYWEB;
  /* if environment is production, set live key only on main domain */

  if (envIsProd && window.location.hostname === "bounipun.in") {
    razorpay.keyId = RAZORPAY_KEY_ID_PROD;
    stripe.publishableKey = STRIPE_PK_PROD;
  }
}
/* set keys according to environment and domain */


setKeys();
const RAZORPAY_KEY_ID = gateways.razorpay.keyId;
const STRIPE_PUBLISHABLE_KEY = gateways.stripe.publishableKey;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotal_vue_vue_type_style_index_0_id_cfcff100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotal_vue_vue_type_style_index_0_id_cfcff100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotal_vue_vue_type_style_index_0_id_cfcff100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotal_vue_vue_type_style_index_0_id_cfcff100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotal_vue_vue_type_style_index_0_id_cfcff100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 235:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-cfcff100]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-cfcff100]{scroll-behavior:smooth}body[data-v-cfcff100]{margin:0!important;padding:0}*[data-v-cfcff100]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-cfcff100]{padding:6%}button[data-v-cfcff100]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-cfcff100]{width:7%}button.sub-action[data-v-cfcff100]{background-color:green}button.action[data-v-cfcff100]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-cfcff100]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-cfcff100]{padding:2% 5%;width:100%}}button.action.delete[data-v-cfcff100]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-cfcff100]:hover{background-color:#e01010}button.small[data-v-cfcff100]{font-size:11px;padding:1% 3%}button.clear[data-v-cfcff100]{background:transparent;padding:2% 5%}h1[data-v-cfcff100],h2[data-v-cfcff100],h3[data-v-cfcff100],h4[data-v-cfcff100],h5[data-v-cfcff100],h6[data-v-cfcff100],p[data-v-cfcff100],span[data-v-cfcff100]{margin:0;padding:0;color:#333}.page[data-v-cfcff100]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-cfcff100]{margin-top:13vh;padding:7%}}.page.-wh[data-v-cfcff100]{padding:0 0 5%}.page.side-pad[data-v-cfcff100]{padding:2%}@media(max-width:768px){.page.-broad[data-v-cfcff100]{padding:2%}}.page .page-header[data-v-cfcff100]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-cfcff100]{height:10vw}}.page .page-header .title[data-v-cfcff100]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-cfcff100]{font-size:5.4vw}}.page .side-pad[data-v-cfcff100]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-cfcff100]{padding:0 10%}}.pointer[data-v-cfcff100]{cursor:pointer}.center[data-v-cfcff100],.center-col[data-v-cfcff100]{display:flex;justify-content:center;align-items:center}.center-col[data-v-cfcff100]{flex-direction:column}.center-space[data-v-cfcff100]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-cfcff100]{position:relative}.white[data-v-cfcff100]{color:#fff}.scrollable-list[data-v-cfcff100]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-cfcff100]{justify-content:center}}.scrollable-list[data-v-cfcff100]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-cfcff100]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-cfcff100]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-cfcff100]{margin-top:10px;width:50px}[data-v-cfcff100]::-webkit-scrollbar{display:none}p.msg[data-v-cfcff100]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-cfcff100]{background-color:#a93737}p.msg.success[data-v-cfcff100]{background-color:#319a67}.flex[data-v-cfcff100]{display:flex}.flex.around[data-v-cfcff100]{justify-content:space-around}.flex.between[data-v-cfcff100]{justify-content:space-between}.flex.evenly[data-v-cfcff100]{justify-content:space-evenly}.flex.col[data-v-cfcff100]{flex-direction:column}.flex.wrap[data-v-cfcff100]{flex-wrap:wrap}.flex.center[data-v-cfcff100]{justify-content:center}.flex.center[data-v-cfcff100],.flex.v-center[data-v-cfcff100]{align-items:center}.flex.j-center[data-v-cfcff100]{justify-content:center}.flex.start[data-v-cfcff100]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-cfcff100]{align-items:center}.flex.baseline[data-v-cfcff100]{align-items:baseline}.flex.end[data-v-cfcff100]{justify-content:flex-end}.flex.end.center[data-v-cfcff100]{align-items:center}a[data-v-cfcff100]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-cfcff100]{display:none}}.onlyMobile[data-v-cfcff100]{display:none}@media(max-width:768px){.onlyMobile[data-v-cfcff100]{display:inline;display:initial}}.order-total[data-v-cfcff100]{box-shadow:1px 1px 15px rgba(0,0,0,.16);margin:5% 0;padding:5px 10px;box-sizing:border-box}.order-total .data-point[data-v-cfcff100]{margin:1px 0}.order-total .data-point .name[data-v-cfcff100]{color:#7f7f7f;font-family:\"Poppins\";font-size:13px}.order-total .data-point .name.green[data-v-cfcff100]{color:#259a6b}.order-total .data-point .value[data-v-cfcff100]{color:#464646;font-size:15px;font-family:\"SF-Pro\"}.order-total .data-point .value.small[data-v-cfcff100]{font-family:\"Poppins\";font-size:13px}.order-total .data-point .value.green[data-v-cfcff100]{color:#259a6b}.order-total .grand-total .name[data-v-cfcff100]{font-family:\"Poppins\"}.order-total .grand-total .value[data-v-cfcff100]{font-family:\"Poppins Bold\"}.order-total .count[data-v-cfcff100]{color:#464646;font-size:12px;font-family:\"SF-Pro Bold\"}.order-total hr[data-v-cfcff100]{opacity:.5}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/OrderTotal.vue?vue&type=template&id=cfcff100&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"order-total"},[_vm._ssrNode("<div class=\"data-point flex between\" data-v-cfcff100><p class=\"name\" data-v-cfcff100>\n      Cart Total: <span class=\"count\" data-v-cfcff100>"+_vm._ssrEscape(" "+_vm._s(_vm.cartCount)+" Items (s) ")+"</span></p> <span class=\"value\" data-v-cfcff100>"+_vm._ssrEscape(" "+_vm._s(_vm.formatCurrency(_vm.cartTotal))+" ")+"</span></div> <hr data-v-cfcff100> "+((_vm.couponApplied)?("<div class=\"data-point flex between\" data-v-cfcff100><span class=\"name green\" data-v-cfcff100> Discount: </span> <span class=\"value green small\" data-v-cfcff100>"+_vm._ssrEscape("\n      - "+_vm._s(_vm.formatCurrency(_vm.discountValue))+"\n    ")+"</span></div>"):"<!---->")+" "+((_vm.couponApplied)?("<hr data-v-cfcff100>"):"<!---->")+" "+((_vm.couponApplied)?("<div class=\"data-point flex between\" data-v-cfcff100><span class=\"name\" data-v-cfcff100> Sub-Total: </span> <span class=\"value\" data-v-cfcff100>"+_vm._ssrEscape("  "+_vm._s(_vm.formatCurrency(_vm.subTotal))+" ")+"</span></div>"):"<!---->")+" "+((_vm.couponApplied)?("<hr data-v-cfcff100>"):"<!---->")+" <div class=\"data-point flex between\" data-v-cfcff100><span class=\"name\" data-v-cfcff100> Shipping: </span> "+((!_vm.zeroShippingCharge)?("<span class=\"value small\" data-v-cfcff100>"+_vm._ssrEscape("\n      +"+_vm._s(_vm.formatCurrency(_vm.shippingCharge))+"\n    ")+"</span>"):("<span class=\"value green small\" data-v-cfcff100>\n      Free Shipping\n    </span>"))+"</div> <hr data-v-cfcff100> <div class=\"data-point flex between\" data-v-cfcff100><span class=\"name\" data-v-cfcff100> Taxes: </span> "+((!_vm.zeroTaxes)?("<span class=\"value small\" data-v-cfcff100>"+_vm._ssrEscape("\n      + "+_vm._s(_vm.taxes)+"\n    ")+"</span>"):("<span class=\"value green small\" data-v-cfcff100> Tax Included </span>"))+"</div> <hr data-v-cfcff100> <div class=\"data-point grand-total flex between\" data-v-cfcff100><p class=\"name flex center col\" data-v-cfcff100>\n      Grand Total: <br data-v-cfcff100></p> <span class=\"value\" data-v-cfcff100>"+_vm._ssrEscape(" "+_vm._s(_vm.formatCurrency(_vm.grandTotal))+" ")+"</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Purchase/OrderTotal.vue?vue&type=template&id=cfcff100&scoped=true&

// EXTERNAL MODULE: ./helpers/currencyHelper.js
var currencyHelper = __webpack_require__(145);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/OrderTotal.vue?vue&type=script&lang=js&
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

/* harmony default export */ var OrderTotalvue_type_script_lang_js_ = ({
  mixins: [currencyHelper["a" /* default */]],

  mounted() {
    setTimeout(() => {
      if (this.initializeCheckout) this.createPaymentIntent();
    }, 1000);
  },

  props: {
    initializeCheckout: {
      type: Boolean,
      default: false
    },
    deliveryAddress: Object
  },
  computed: {
    gatewayName() {
      return this.currency === "INR" ? "razorpay" : "stripe";
    },

    cartEmpty: function () {
      return this.$store.state.customer.globalRemoteCart.length === 0;
    },

    coupon() {
      return this.$store.state.customer.coupon;
    },

    couponApplied() {
      return this.$store.state.customer.coupon.applied === true;
    },

    discountValue() {
      if (!this.couponApplied) return 0;
      /* cross check currency once again */

      let discountValue = 0;

      switch (this.coupon.type) {
        case "percentage":
          discountValue = this.cartTotal * (this.coupon.value / 100);
          break;

        case "direct-discount":
          discountValue = this.coupon.value;
          break;
      }

      return discountValue.toFixed(2);
    },

    shippingCharge() {
      /* calculate the total number of items in total (sum of all quantities) */
      const totalCartItems = this.$store.getters["customer/getTotalCartItems"];
      const shippingCharge = this.$store.getters["customer/getShippingCharge"] * totalCartItems;
      return shippingCharge.toFixed(2);
    },

    zeroShippingCharge() {
      return this.shippingCharge === "0.00";
    },

    taxes() {
      /* not used at all (taxes are included) */
      const taxPercentage = this.$store.getters["customer/getTaxPercentage"];
      const taxableAmount = this.subTotal * (taxPercentage / 100);
      return taxableAmount.toFixed(2);
    },

    zeroTaxes() {
      return this.taxes === "0.00";
    },

    subTotal() {
      let subTotal = this.cartTotal - this.discountValue;
      return subTotal.toFixed(2);
    },

    cartTotal() {
      const cartTotal = this.$store.getters["customer/getCartTotal"];
      return cartTotal.toFixed(2);
    },

    cartCount() {
      return this.$store.getters["customer/getCartCount"];
    },

    grandTotal() {
      let grandTotal = parseFloat(this.subTotal) + parseFloat(this.shippingCharge) + parseFloat(this.taxes);
      return grandTotal.toFixed(2);
    }

  },
  methods: {
    async createPaymentIntent() {
      const paymentIntentFetch = await this.$post("/createPaymentIntent", {
        intentType: "order",
        amountToBeCharged: this.grandTotal,
        currency: this.currency.trim(),
        gateway: this.gatewayName,
        couponCode: this.coupon.code,
        deliveryAddress: this.deliveryAddress,
        combinedDeliveryConsent: this.$store.state.customer.combinedDeliveryConsent,
        giftMessage: this.$store.state.customer.giftMessage
      });
      console.log(paymentIntentFetch);

      if (paymentIntentFetch.resolved === false) {
        return;
        /* refresh or move to cart */
        // this.$router.push('/cart');
      }

      this.$emit('paymentIntentCreated', paymentIntentFetch.response);
    }

  }
});
// CONCATENATED MODULE: ./components/Purchase/OrderTotal.vue?vue&type=script&lang=js&
 /* harmony default export */ var Purchase_OrderTotalvue_type_script_lang_js_ = (OrderTotalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Purchase/OrderTotal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(234)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Purchase_OrderTotalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cfcff100",
  "b46c98ac"
  
)

/* harmony default export */ var OrderTotal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(484);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5603f76a", content, true, context)
};

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_OLD_vue_vue_type_style_index_0_id_5766cd00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_OLD_vue_vue_type_style_index_0_id_5766cd00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_OLD_vue_vue_type_style_index_0_id_5766cd00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_OLD_vue_vue_type_style_index_0_id_5766cd00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_OLD_vue_vue_type_style_index_0_id_5766cd00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 484:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-5766cd00]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-5766cd00]{scroll-behavior:smooth}body[data-v-5766cd00]{margin:0!important;padding:0}*[data-v-5766cd00]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-5766cd00]{padding:6%}button[data-v-5766cd00]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-5766cd00]{width:7%}button.sub-action[data-v-5766cd00]{background-color:green}button.action[data-v-5766cd00]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-5766cd00]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-5766cd00]{padding:2% 5%;width:100%}}button.action.delete[data-v-5766cd00]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-5766cd00]:hover{background-color:#e01010}button.small[data-v-5766cd00]{font-size:11px;padding:1% 3%}button.clear[data-v-5766cd00]{background:transparent;padding:2% 5%}h1[data-v-5766cd00],h2[data-v-5766cd00],h3[data-v-5766cd00],h4[data-v-5766cd00],h5[data-v-5766cd00],h6[data-v-5766cd00],p[data-v-5766cd00],span[data-v-5766cd00]{margin:0;padding:0;color:#333}.page[data-v-5766cd00]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-5766cd00]{margin-top:13vh;padding:7%}}.page.-wh[data-v-5766cd00]{padding:0 0 5%}.page.side-pad[data-v-5766cd00]{padding:2%}@media(max-width:768px){.page.-broad[data-v-5766cd00]{padding:2%}}.page .page-header[data-v-5766cd00]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-5766cd00]{height:10vw}}.page .page-header .title[data-v-5766cd00]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-5766cd00]{font-size:5.4vw}}.page .side-pad[data-v-5766cd00]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-5766cd00]{padding:0 10%}}.pointer[data-v-5766cd00]{cursor:pointer}.center[data-v-5766cd00],.center-col[data-v-5766cd00]{display:flex;justify-content:center;align-items:center}.center-col[data-v-5766cd00]{flex-direction:column}.center-space[data-v-5766cd00]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-5766cd00]{position:relative}.white[data-v-5766cd00]{color:#fff}.scrollable-list[data-v-5766cd00]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-5766cd00]{justify-content:center}}.scrollable-list[data-v-5766cd00]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-5766cd00]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-5766cd00]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-5766cd00]{margin-top:10px;width:50px}[data-v-5766cd00]::-webkit-scrollbar{display:none}p.msg[data-v-5766cd00]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-5766cd00]{background-color:#a93737}p.msg.success[data-v-5766cd00]{background-color:#319a67}.flex[data-v-5766cd00]{display:flex}.flex.around[data-v-5766cd00]{justify-content:space-around}.flex.between[data-v-5766cd00]{justify-content:space-between}.flex.evenly[data-v-5766cd00]{justify-content:space-evenly}.flex.col[data-v-5766cd00]{flex-direction:column}.flex.wrap[data-v-5766cd00]{flex-wrap:wrap}.flex.center[data-v-5766cd00]{justify-content:center}.flex.center[data-v-5766cd00],.flex.v-center[data-v-5766cd00]{align-items:center}.flex.j-center[data-v-5766cd00]{justify-content:center}.flex.start[data-v-5766cd00]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-5766cd00]{align-items:center}.flex.baseline[data-v-5766cd00]{align-items:baseline}.flex.end[data-v-5766cd00]{justify-content:flex-end}.flex.end.center[data-v-5766cd00]{align-items:center}a[data-v-5766cd00]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-5766cd00]{display:none}}.onlyMobile[data-v-5766cd00]{display:none}@media(max-width:768px){.onlyMobile[data-v-5766cd00]{display:inline;display:initial}}.checkout-page[data-v-5766cd00]{margin-top:12vh}.checkout-page .title[data-v-5766cd00]{font-size:30px!important}.order-overview[data-v-5766cd00]{width:100%;justify-content:space-around;align-items:flex-start}.order-overview .cart-items[data-v-5766cd00]{width:50%}.order-overview .d-o-p[data-v-5766cd00]{width:30%}.order-overview .d-o-p .delivery-address[data-v-5766cd00],.order-overview .d-o-p .order-total-container[data-v-5766cd00]{width:100%}@media(max-width:768px){.order-overview[data-v-5766cd00]{flex-direction:column}.order-overview .cart-items[data-v-5766cd00]{width:100%}.order-overview .d-o-p[data-v-5766cd00]{width:100%;padding:0 20px}}.order-overview .section-heading[data-v-5766cd00]{text-transform:uppercase;font-family:\"SF-Pro\";font-size:20px;margin:10px 0}.order-overview .delivery-address[data-v-5766cd00]{margin-top:20px;width:80%;position:relative;background:#fff;padding:3%;display:flex;flex-direction:column;box-shadow:1px 1px 15px rgba(0,0,0,.16)}.order-overview .delivery-address span[data-v-5766cd00]{font-family:\"SF-Pro\";font-size:14px;margin:2px 0}.order-overview .delivery-address span.name[data-v-5766cd00]{font-family:\"Poppins Bold\";font-weight:900}.order-overview .note[data-v-5766cd00]{background-color:#32a77c;color:#fff;padding:4px 10px;font-size:12px;font-family:\"Poppins\";text-align:center}.order-overview .error[data-v-5766cd00]{width:80%}.order-overview .payment-title[data-v-5766cd00]{margin-top:20px}.order-overview #stripe-mount[data-v-5766cd00]{margin-top:20px;width:100%;padding:3%}.payment-specific[data-v-5766cd00]{width:100%}.checkout-btn[data-v-5766cd00]{width:100%;margin-top:20px}.checkout-btn.disabled[data-v-5766cd00],.checkout-btn.disabled[data-v-5766cd00]:hover{background-color:grey}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout[OLD].vue?vue&type=template&id=5766cd00&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"checkout-page page -wh"},[_vm._ssrNode("<div class=\"page-header center\" data-v-5766cd00><h2 class=\"title\" data-v-5766cd00>Checkout</h2></div> "),_vm._ssrNode("<div class=\"order-overview flex center\" data-v-5766cd00>","</div>",[_vm._ssrNode("<div class=\"cart-items flex center col\" data-v-5766cd00>","</div>",[_vm._ssrNode("<h3 class=\"section-heading\" data-v-5766cd00>Products</h3> "),_vm._l((_vm.$store.state.customer.globalRemoteCart),function(item,index){return _c('CartItem',{key:index,attrs:{"item":item,"allowUpdate":false}})})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-o-p flex center col\" data-v-5766cd00>","</div>",[_vm._ssrNode("<h3 class=\"section-heading\" data-v-5766cd00>Delivery Address</h3> <div class=\"delivery-address\" data-v-5766cd00><span class=\"name\" data-v-5766cd00>"+_vm._ssrEscape("\n          "+_vm._s(_vm.deliveryAddress.firstName)+" "+_vm._s(_vm.deliveryAddress.surName)+"\n        ")+"</span> <span data-v-5766cd00>"+_vm._ssrEscape(" "+_vm._s(_vm.deliveryAddress.addressLine1))+"</span> <span data-v-5766cd00>"+_vm._ssrEscape(" "+_vm._s(_vm.deliveryAddress.addressLine2)+" ")+"</span> <span data-v-5766cd00>"+_vm._ssrEscape(" "+_vm._s(_vm.deliveryAddress.state || "")+" ")+"</span> <span data-v-5766cd00>"+_vm._ssrEscape(" "+_vm._s(_vm.deliveryAddress.city)+" ")+"</span> <span data-v-5766cd00>"+_vm._ssrEscape(" "+_vm._s(_vm.deliveryAddress.postalCode)+" ")+"</span> <span data-v-5766cd00>"+_vm._ssrEscape(" "+_vm._s(_vm.deliveryAddress.mobileNumber)+" ")+"</span></div> "),_vm._ssrNode("<div class=\"order-total-container\" data-v-5766cd00>","</div>",[(!_vm.cartEmpty)?_c('OrderTotal',{attrs:{"deliveryAddress":_vm.deliveryAddress,"initializeCheckout":true},on:{"paymentIntentCreated":_vm.onPaymentIntentCreated}}):_vm._e()],1),_vm._ssrNode(" <div class=\"payment-specific flex center col\" data-v-5766cd00>"+((_vm.$store.state.customer.combinedDeliveryConsent)?("<p class=\"note\" data-v-5766cd00>"+_vm._ssrEscape("\n          Combined Standard shipping for the whole order:\n          "+_vm._s(_vm.maximumShippingTime)+" weeks\n        ")+"</p>"):"<!---->")+" "+((_vm.gatewayName === 'stripe')?("<h2 class=\"payment-title\" data-v-5766cd00>\n          Payment Information\n        </h2>"):"<!---->")+" "+((_vm.gatewayName === 'stripe')?("<div id=\"stripe-mount\" data-v-5766cd00></div>"):"<!---->")+" "+((_vm.paymentError.status)?("<p class=\"msg error\" data-v-5766cd00>"+_vm._ssrEscape("\n          "+_vm._s(_vm.paymentError.msg)+"\n        ")+"</p>"):"<!---->")+" <button"+(_vm._ssrClass("action checkout-btn",{ disabled: !_vm.enableCheckout }))+" data-v-5766cd00>\n          Place Order\n        </button></div>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Checkout[OLD].vue?vue&type=template&id=5766cd00&scoped=true&

// EXTERNAL MODULE: ./helpers/currencyHelper.js
var currencyHelper = __webpack_require__(145);

// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__(114);

// EXTERNAL MODULE: ./helpers/MiscHelper.js
var MiscHelper = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Checkout[OLD].vue?vue&type=script&lang=js&
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



/* demo delivery address */

const demoDeliveryAddress = {
  firstName: "Suhaib",
  surName: "Khan",
  mobileNumber: "9906697711",
  email: "hello@saibbyweb.com",
  addressLine1: "H.no 54, Chinar Enclave",
  addressLine2: "Rawalpora, Near Masjid",
  city: "Srinagar",
  postalCode: "190005",
  countryIsoCode: "US"
};
/* harmony default export */ var Checkout_OLD_vue_type_script_lang_js_ = ({
  mixins: [currencyHelper["a" /* default */]],

  head() {
    return {
      title: "Checkout | Bounipun Kashmir"
    };
  },

  mounted() {
    const work = async () => {
      /* this page should not be accessible to guest */
      if (!this.$store.state.customer.authorized) return;
      /* set keys according to environment */

      this.setKeys();
      /* fetch updated cart from user account */

      await this.$store.dispatch("customer/fetchCart");
      await this.$store.dispatch("customer/fetchCoupon", this.coupon.code);
      await this.$store.dispatch("customer/fetchGlobalConfig");
      /* decide which gateway is to be used */

      /* if cart is empty redirect to cart | homepage */

      if (this.cartEmpty) {
        this.$router.push("/");
        return;
      }
      /* create payment intent */

      /* according to currency, setup payment options */


      if (this.currency !== "INR") this.initializeStripe();
    };

    work();
  },

  data() {
    return {
      deliveryAddress: this.$route.params.deliveryAddress,
      // deliveryAddress: demoDeliveryAddress,
      remoteCartItems: this.$store.state.customer.globalRemoteCart,
      razorpayCheckout: null,
      stripe: null,
      paymentIntentId: "",
      paymentError: {
        status: false,
        msg: ""
      },
      gatewayToken: "",
      enableCheckout: false,
      elements: null,
      orderDetails: {},
      combinedDeliveryConsent: true,
      razorpayKeyId: MiscHelper["a" /* RAZORPAY_KEY_ID */],
      stripePK: MiscHelper["b" /* STRIPE_PUBLISHABLE_KEY */],
      processingStripe: false
    };
  },

  computed: {
    cartEmpty: function () {
      return this.$store.state.customer.globalRemoteCart.length === 0;
    },

    coupon() {
      return this.$store.state.customer.coupon;
    },

    /* TODO: copied */
    gatewayName() {
      return this.currency === "INR" ? "razorpay" : "stripe";
    },

    /* TODO: copied */
    stripeBillingAddress() {
      return {
        name: this.deliveryAddress.firstName + " " + this.deliveryAddress.surName,
        email: this.deliveryAddress.email,
        address: {
          city: this.deliveryAddress.city,
          line1: this.deliveryAddress.addressLine1 + " | " + this.deliveryAddress.addressLine2,
          postal_code: this.deliveryAddress.postalCode,
          country: this.deliveryAddress.countryIsoCode
        }
      };
    },

    /* TODO: copied */
    stripeShippingObject() {
      return {
        address: {
          line1: this.deliveryAddress.addressLine1 + " " + this.deliveryAddress.addressLine2,
          country: this.deliveryAddress.countryIsoCode
        },
        name: this.deliveryAddress.firstName + " " + this.deliveryAddress.surName
      };
    },

    maximumShippingTime() {
      const allTimes = this.$store.state.customer.globalRemoteCart.map(item => item.shippingTime);
      const maximumShippingTime = Math.max(...allTimes);
      return maximumShippingTime;
    }

  },
  methods: {
    /* TODO: copied */
    setKeys() {
      /* if environment is dev, use test keys */
      if ( false || process.env.MODE === "development") {
        this.razorpayKeyId = process.env.VITE_RAZORPAY_KEY_ID_TEST;
        this.stripePK = process.env.VITE_STRIPE_PK_TEST;
        return;
      }
      /* if environment is production, set live key only on main domain */


      if (true) {
        switch (window.location.hostname) {
          case "bounipun.in":
            this.razorpayKeyId = "rzp_live_bzpnf6YPxKKfTh";
            this.stripePK = "pk_live_51J0qm7SAJnKcquR3JZ1T9qVG8lGA4bIflVcp5TZFWYP06n6XPLWojyNYUc5PMUFEwWCoe62IHW9HsnebRlpl5Scw00LC38Ktxu";
            break;

          default:
            this.razorpayKeyId = "rzp_test_LnJPEC0MOtvlSn";
            this.stripePK = "pk_test_Ct9bX6YRz5YItn8gCGGO4ypy00KzN2R4mG";
            break;
        }
      }
    },

    /* TODO: copied */
    async initializeStripe() {
      this.stripe = await Object(stripe_js_["loadStripe"])(this.stripePK);
      this.elements = this.stripe.elements();
      const element = this.elements.create("card", {
        hidePostalCode: true
      });
      element.on("change", event => {
        this.paymentError.status = false;
        if (event.complete) this.enableCheckout = true;else this.enableCheckout = false;
      });
      element.mount("#stripe-mount");
    },

    /* TODO: copied */
    onPaymentIntentCreated(details) {
      /* save payment intent id */
      this.paymentIntentId = details.intentId;
      this.gatewayToken = details.gatewayToken;
      /* act according to gateway */

      if (this.gatewayName === "razorpay") this.setupRazorpayOrder(details.gatewayToken, details.amount);
    },

    /* TODO: copied */
    setupRazorpayOrder(orderId, amount) {
      let options = {
        key: this.razorpayKeyId,
        // Enter the Key ID generated from the Dashboard
        amount: amount,
        // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Bounipun Ecom",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async response => {
          console.log(response);
          const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
          } = response; // /* complete checkout routine */

          const completeCheckout = await this.$post("/razorpayPaymentSuccess", {
            razorpay_order_id,
            transactionId: razorpay_payment_id
          });

          if (completeCheckout.resolved === false) {
            return;
          }
          /* move to order placed page */


          this.$store.dispatch("customer/fetchCart");
          this.$router.push("/order-placed-successfully");
        },
        prefill: {
          name: this.deliveryAddress.firstName + " " + this.deliveryAddress.surName,
          email: this.deliveryAddress.email,
          contact: this.deliveryAddress.mobileNumber
        },
        theme: {
          color: "#3399cc"
        }
      };
      /* razorpay anchor */

      this.razorpayCheckout = new Razorpay(options);
      this.enableCheckout = true;
    },

    async placeOrder() {
      if (!this.enableCheckout) return false;
      if (this.currency.trim() === "INR") this.razorpayCheckout.open();else this.stripeCheckout();
      return;
    },

    /* TODO: copied */
    async stripeCheckout() {
      if (this.processingStripe) return;
      this.processingStripe = true;
      const cardElement = this.elements.getElement("card");
      this.$store.commit("customer/setLoading", true);
      /* create payment methods from card details  */

      const {
        paymentMethod,
        error: pmError
      } = await this.stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: this.stripeBillingAddress
      });
      this.$store.commit("customer/setLoading", false);
      /* if error occured while generating payment method */

      if (pmError) {
        console.log("could not process payment method request");
        this.paymentError.msg = "Could not process payment. Kindly try after sometime.";
        this.paymentError.status = true;
        this.processingStripe = false;
        return;
      }

      console.log(paymentMethod);
      /* process card payment */

      this.$store.commit("customer/setLoading", true);
      const {
        error
      } = await this.stripe.confirmCardPayment(this.gatewayToken, {
        payment_method: paymentMethod.id,
        shipping: this.stripeShippingObject
      });
      this.$store.commit("customer/setLoading", false);
      this.processingStripe = false;
      /* if error occurred while processing card payment */

      if (error) {
        console.log("could not process STRIPE PAYMENT");
        console.log(error);
        this.paymentError.msg = "We are facing some technical difficulties at the moment. Kindly, try again after sometime.";
        this.paymentError.status = true;
        return;
      }
      /* move to order placed page */


      this.$store.dispatch("customer/fetchCart");
      this.$router.push("/order-placed-successfully");
    }

  }
});
// CONCATENATED MODULE: ./pages/Checkout[OLD].vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Checkout_OLD_vue_type_script_lang_js_ = (Checkout_OLD_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Checkout[OLD].vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(483)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Checkout_OLD_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5766cd00",
  "7975449e"
  
)

/* harmony default export */ var Checkout_OLD_ = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartItem: __webpack_require__(195).default,OrderTotal: __webpack_require__(248).default})


/***/ })

};;
//# sourceMappingURL=Checkout[OLD].js.map
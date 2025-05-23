exports.ids = [10];
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


/***/ })

};;
//# sourceMappingURL=cart-item.js.map
exports.ids = [45];
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

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("425e0cbe", content, true, context)
};

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotalV2_vue_vue_type_style_index_0_id_02177618_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotalV2_vue_vue_type_style_index_0_id_02177618_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotalV2_vue_vue_type_style_index_0_id_02177618_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotalV2_vue_vue_type_style_index_0_id_02177618_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTotalV2_vue_vue_type_style_index_0_id_02177618_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 344:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-02177618]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-02177618]{scroll-behavior:smooth}body[data-v-02177618]{margin:0!important;padding:0}*[data-v-02177618]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-02177618]{padding:6%}button[data-v-02177618]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-02177618]{width:7%}button.sub-action[data-v-02177618]{background-color:green}button.action[data-v-02177618]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-02177618]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-02177618]{padding:2% 5%;width:100%}}button.action.delete[data-v-02177618]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-02177618]:hover{background-color:#e01010}button.small[data-v-02177618]{font-size:11px;padding:1% 3%}button.clear[data-v-02177618]{background:transparent;padding:2% 5%}h1[data-v-02177618],h2[data-v-02177618],h3[data-v-02177618],h4[data-v-02177618],h5[data-v-02177618],h6[data-v-02177618],p[data-v-02177618],span[data-v-02177618]{margin:0;padding:0;color:#333}.page[data-v-02177618]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-02177618]{margin-top:13vh;padding:7%}}.page.-wh[data-v-02177618]{padding:0 0 5%}.page.side-pad[data-v-02177618]{padding:2%}@media(max-width:768px){.page.-broad[data-v-02177618]{padding:2%}}.page .page-header[data-v-02177618]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-02177618]{height:10vw}}.page .page-header .title[data-v-02177618]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-02177618]{font-size:5.4vw}}.page .side-pad[data-v-02177618]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-02177618]{padding:0 10%}}.pointer[data-v-02177618]{cursor:pointer}.center[data-v-02177618],.center-col[data-v-02177618]{display:flex;justify-content:center;align-items:center}.center-col[data-v-02177618]{flex-direction:column}.center-space[data-v-02177618]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-02177618]{position:relative}.white[data-v-02177618]{color:#fff}.scrollable-list[data-v-02177618]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-02177618]{justify-content:center}}.scrollable-list[data-v-02177618]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-02177618]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-02177618]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-02177618]{margin-top:10px;width:50px}[data-v-02177618]::-webkit-scrollbar{display:none}p.msg[data-v-02177618]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-02177618]{background-color:#a93737}p.msg.success[data-v-02177618]{background-color:#319a67}.flex[data-v-02177618]{display:flex}.flex.around[data-v-02177618]{justify-content:space-around}.flex.between[data-v-02177618]{justify-content:space-between}.flex.evenly[data-v-02177618]{justify-content:space-evenly}.flex.col[data-v-02177618]{flex-direction:column}.flex.wrap[data-v-02177618]{flex-wrap:wrap}.flex.center[data-v-02177618]{justify-content:center}.flex.center[data-v-02177618],.flex.v-center[data-v-02177618]{align-items:center}.flex.j-center[data-v-02177618]{justify-content:center}.flex.start[data-v-02177618]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-02177618]{align-items:center}.flex.baseline[data-v-02177618]{align-items:baseline}.flex.end[data-v-02177618]{justify-content:flex-end}.flex.end.center[data-v-02177618]{align-items:center}a[data-v-02177618]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-02177618]{display:none}}.onlyMobile[data-v-02177618]{display:none}@media(max-width:768px){.onlyMobile[data-v-02177618]{display:inline;display:initial}}.order-total[data-v-02177618]{box-shadow:1px 1px 15px rgba(0,0,0,.16);margin:5% 0;padding:5px 10px;box-sizing:border-box}.order-total .data-point[data-v-02177618]{margin:1px 0}.order-total .data-point .name[data-v-02177618]{color:#7f7f7f;font-family:\"Poppins\";font-size:13px}.order-total .data-point .name.green[data-v-02177618]{color:#259a6b}.order-total .data-point .value[data-v-02177618]{color:#464646;font-size:15px;font-family:\"SF-Pro\"}.order-total .data-point .value.small[data-v-02177618]{font-family:\"Poppins\";font-size:13px}.order-total .data-point .value.green[data-v-02177618]{color:#259a6b}.order-total .grand-total .name[data-v-02177618]{font-family:\"Poppins\"}.order-total .grand-total .value[data-v-02177618]{font-family:\"Poppins Bold\"}.order-total .count[data-v-02177618]{color:#464646;font-size:12px;font-family:\"SF-Pro Bold\"}.order-total hr[data-v-02177618]{opacity:.5}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/OrderTotalV2.vue?vue&type=template&id=02177618&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"order-total"},[_vm._ssrNode("<div class=\"data-point flex between\" data-v-02177618><p class=\"name\" data-v-02177618>\n      Cart Total: <span class=\"count\" data-v-02177618>"+_vm._ssrEscape(" "+_vm._s(_vm.cartCount)+" Items (s) ")+"</span></p> <span class=\"value\" data-v-02177618>"+_vm._ssrEscape(" "+_vm._s(_vm.formatCurrency(_vm.cartTotal))+" ")+"</span></div> <hr data-v-02177618> "+((_vm.couponApplied)?("<div class=\"data-point flex between\" data-v-02177618><span class=\"name green\" data-v-02177618> Discount: </span> <span class=\"value green small\" data-v-02177618>"+_vm._ssrEscape("\n      - "+_vm._s(_vm.formatCurrency(_vm.discountValue))+"\n    ")+"</span></div>"):"<!---->")+" "+((_vm.couponApplied)?("<hr data-v-02177618>"):"<!---->")+" "+((_vm.couponApplied)?("<div class=\"data-point flex between\" data-v-02177618><span class=\"name\" data-v-02177618> Sub-Total: </span> <span class=\"value\" data-v-02177618>"+_vm._ssrEscape("  "+_vm._s(_vm.formatCurrency(_vm.subTotal))+" ")+"</span></div>"):"<!---->")+" "+((_vm.couponApplied)?("<hr data-v-02177618>"):"<!---->")+" <div class=\"data-point flex between\" data-v-02177618><span class=\"name\" data-v-02177618> Shipping: </span> "+((!_vm.zeroShippingCharge)?("<span class=\"value small\" data-v-02177618>"+_vm._ssrEscape("\n      +"+_vm._s(_vm.formatCurrency(_vm.shippingCharge))+"\n    ")+"</span>"):("<span class=\"value green small\" data-v-02177618>\n      Free Shipping\n    </span>"))+"</div> <hr data-v-02177618> <div class=\"data-point flex between\" data-v-02177618><span class=\"name\" data-v-02177618> Taxes: </span> "+((!_vm.zeroTaxes)?("<span class=\"value small\" data-v-02177618>"+_vm._ssrEscape("\n      + "+_vm._s(_vm.taxes)+"\n    ")+"</span>"):("<span class=\"value green small\" data-v-02177618> Tax Included </span>"))+"</div> <hr data-v-02177618> <div class=\"data-point grand-total flex between\" data-v-02177618><p class=\"name flex center col\" data-v-02177618>\n      Grand Total: <br data-v-02177618></p> <span class=\"value\" data-v-02177618>"+_vm._ssrEscape(" "+_vm._s(_vm.formatCurrency(_vm.grandTotal))+" ")+"</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Purchase/OrderTotalV2.vue?vue&type=template&id=02177618&scoped=true&

// EXTERNAL MODULE: ./helpers/currencyHelper.js
var currencyHelper = __webpack_require__(145);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Purchase/OrderTotalV2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var OrderTotalV2vue_type_script_lang_js_ = ({
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
      this.$emit('getOrderRequestDetails', {
        amount: this.grandTotal,
        currency: this.currency.trim(),
        deliveryAddress: this.deliveryAddress,
        couponCode: this.coupon.code,
        combinedDeliveryConsent: this.$store.state.customer.combinedDeliveryConsent,
        giftMessage: this.$store.state.customer.giftMessage
      });
      return;
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
// CONCATENATED MODULE: ./components/Purchase/OrderTotalV2.vue?vue&type=script&lang=js&
 /* harmony default export */ var Purchase_OrderTotalV2vue_type_script_lang_js_ = (OrderTotalV2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Purchase/OrderTotalV2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(343)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Purchase_OrderTotalV2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "02177618",
  "cae1d874"
  
)

/* harmony default export */ var OrderTotalV2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=order-total-v2.js.map
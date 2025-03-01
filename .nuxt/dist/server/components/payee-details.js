exports.ids = [48];
exports.modules = {

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(354);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4d1b286b", content, true, context)
};

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payeeDetails_vue_vue_type_style_index_0_id_fd769fea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payeeDetails_vue_vue_type_style_index_0_id_fd769fea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payeeDetails_vue_vue_type_style_index_0_id_fd769fea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payeeDetails_vue_vue_type_style_index_0_id_fd769fea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payeeDetails_vue_vue_type_style_index_0_id_fd769fea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 354:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-fd769fea]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-fd769fea]{scroll-behavior:smooth}body[data-v-fd769fea]{margin:0!important;padding:0}*[data-v-fd769fea]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-fd769fea]{padding:6%}button[data-v-fd769fea]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-fd769fea]{width:7%}button.sub-action[data-v-fd769fea]{background-color:green}button.action[data-v-fd769fea]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-fd769fea]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-fd769fea]{padding:2% 5%;width:100%}}button.action.delete[data-v-fd769fea]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-fd769fea]:hover{background-color:#e01010}button.small[data-v-fd769fea]{font-size:11px;padding:1% 3%}button.clear[data-v-fd769fea]{background:transparent;padding:2% 5%}h1[data-v-fd769fea],h2[data-v-fd769fea],h3[data-v-fd769fea],h4[data-v-fd769fea],h5[data-v-fd769fea],h6[data-v-fd769fea],p[data-v-fd769fea],span[data-v-fd769fea]{margin:0;padding:0;color:#333}.page[data-v-fd769fea]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-fd769fea]{margin-top:13vh;padding:7%}}.page.-wh[data-v-fd769fea]{padding:0 0 5%}.page.side-pad[data-v-fd769fea]{padding:2%}@media(max-width:768px){.page.-broad[data-v-fd769fea]{padding:2%}}.page .page-header[data-v-fd769fea]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-fd769fea]{height:10vw}}.page .page-header .title[data-v-fd769fea]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-fd769fea]{font-size:5.4vw}}.page .side-pad[data-v-fd769fea]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-fd769fea]{padding:0 10%}}.pointer[data-v-fd769fea]{cursor:pointer}.center[data-v-fd769fea],.center-col[data-v-fd769fea]{display:flex;justify-content:center;align-items:center}.center-col[data-v-fd769fea]{flex-direction:column}.center-space[data-v-fd769fea]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-fd769fea]{position:relative}.white[data-v-fd769fea]{color:#fff}.scrollable-list[data-v-fd769fea]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-fd769fea]{justify-content:center}}.scrollable-list[data-v-fd769fea]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-fd769fea]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-fd769fea]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-fd769fea]{margin-top:10px;width:50px}[data-v-fd769fea]::-webkit-scrollbar{display:none}p.msg[data-v-fd769fea]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-fd769fea]{background-color:#a93737}p.msg.success[data-v-fd769fea]{background-color:#319a67}.flex[data-v-fd769fea]{display:flex}.flex.around[data-v-fd769fea]{justify-content:space-around}.flex.between[data-v-fd769fea]{justify-content:space-between}.flex.evenly[data-v-fd769fea]{justify-content:space-evenly}.flex.col[data-v-fd769fea]{flex-direction:column}.flex.wrap[data-v-fd769fea]{flex-wrap:wrap}.flex.center[data-v-fd769fea]{justify-content:center}.flex.center[data-v-fd769fea],.flex.v-center[data-v-fd769fea]{align-items:center}.flex.j-center[data-v-fd769fea]{justify-content:center}.flex.start[data-v-fd769fea]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-fd769fea]{align-items:center}.flex.baseline[data-v-fd769fea]{align-items:baseline}.flex.end[data-v-fd769fea]{justify-content:flex-end}.flex.end.center[data-v-fd769fea]{align-items:center}a[data-v-fd769fea]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-fd769fea]{display:none}}.onlyMobile[data-v-fd769fea]{display:none}@media(max-width:768px){.onlyMobile[data-v-fd769fea]{display:inline;display:initial}}.payee[data-v-fd769fea]{padding:10px 20px;grid-row-gap:3px;row-gap:3px;width:100%}.payee label[data-v-fd769fea]{font-size:14px;color:#7f7f7f}.payee span[data-v-fd769fea]{font-family:\"Poppins SemiBold\";font-weight:100;font-size:15px}.payee .amount-details[data-v-fd769fea]{width:100%;margin-top:10px}.payee .amount-details p[data-v-fd769fea]{width:100%;display:flex;justify-content:space-between;border-top:1px solid #efefef;padding-top:10px}.payee .amount-details p span[data-v-fd769fea]{font-size:15px}.payee .amount-details p span.label[data-v-fd769fea]{font-family:\"SF-Pro\"}.payee .amount-details p span.value[data-v-fd769fea]{font-family:\"Poppins\"}.payee .amount-details p span.value.amount-payable[data-v-fd769fea]{font-family:\"Poppins Bold\";font-size:17px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/paymentlink/payeeDetails.vue?vue&type=template&id=fd769fea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"payee flex col shadow"},[_vm._ssrNode("<label class=\"label\" data-v-fd769fea> Customer Name:</label> <span data-v-fd769fea>"+_vm._ssrEscape(" "+_vm._s(_vm.linkDetails.payeeName)+" ")+"</span> <label class=\"label\" data-v-fd769fea> Phone Number:</label> <span data-v-fd769fea>"+_vm._ssrEscape(" "+_vm._s(_vm.linkDetails.countryCode)+" "+_vm._s(_vm.linkDetails.phoneNumber)+" ")+"</span> <label class=\"label\" data-v-fd769fea> Email:</label> <span data-v-fd769fea>"+_vm._ssrEscape(" "+_vm._s(_vm.linkDetails.email)+" ")+"</span> <label class=\"label\" data-v-fd769fea> Due Date:</label> <span data-v-fd769fea>"+_vm._ssrEscape("\n    "+_vm._s(_vm.linkDetails.validityRange
        ? _vm.$formatDate(_vm.linkDetails.validityRange.end, true)
        : "")+"\n  ")+"</span> <div class=\"amount-details\" data-v-fd769fea><p data-v-fd769fea><span class=\"label\" data-v-fd769fea>Sub Total</span> <span class=\"value\" data-v-fd769fea>"+_vm._ssrEscape("\n        "+_vm._s(_vm.formatCurrency(_vm.linkDetails.itemTotal, _vm.linkDetails.currency))+"\n      ")+"</span></p> "+((!_vm.noDiscount)?("<p data-v-fd769fea><span class=\"label\" data-v-fd769fea> Discount </span> <span class=\"value\" data-v-fd769fea>"+_vm._ssrEscape("\n        -\n        "+_vm._s(_vm.formatCurrency(
                _vm.linkDetails.discount.amount,
                _vm.linkDetails.currency
              ))+" \n      ")+"</span></p>"):"<!---->")+" "+((!_vm.noShippingCharges)?("<p data-v-fd769fea><span class=\"label\" data-v-fd769fea> Shipping Charges: </span> <span class=\"value\" data-v-fd769fea>"+_vm._ssrEscape("\n        +\n        "+_vm._s(_vm.formatCurrency(_vm.linkDetails.courierCharges, _vm.linkDetails.currency)))+"</span></p>"):"<!---->")+" <p data-v-fd769fea><span class=\"label\" data-v-fd769fea> Amount Payable </span> <span class=\"value amount-payable\" data-v-fd769fea>"+_vm._ssrEscape("\n        "+_vm._s(_vm.formatCurrency(_vm.linkDetails.amount, _vm.linkDetails.currency))+"\n      ")+"</span></p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/paymentlink/payeeDetails.vue?vue&type=template&id=fd769fea&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/paymentlink/payeeDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var payeeDetailsvue_type_script_lang_js_ = ({
  props: {
    linkDetails: Object,
    formatCurrency: Function
  },
  computed: {
    noDiscount() {
      if (!this.linkDetails.discount) return true;
      return this.linkDetails.discount.amount === 0;
    },

    noShippingCharges() {
      return this.linkDetails.courierCharges === 0;
    }

  }
});
// CONCATENATED MODULE: ./components/paymentlink/payeeDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var paymentlink_payeeDetailsvue_type_script_lang_js_ = (payeeDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/paymentlink/payeeDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(353)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paymentlink_payeeDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fd769fea",
  "b503ba9a"
  
)

/* harmony default export */ var payeeDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=payee-details.js.map
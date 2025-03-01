exports.ids = [18];
exports.modules = {

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(342);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7fe4b137", content, true, context)
};

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_couponSuggestion_vue_vue_type_style_index_0_id_7e8324fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_couponSuggestion_vue_vue_type_style_index_0_id_7e8324fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_couponSuggestion_vue_vue_type_style_index_0_id_7e8324fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_couponSuggestion_vue_vue_type_style_index_0_id_7e8324fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_couponSuggestion_vue_vue_type_style_index_0_id_7e8324fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 342:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-7e8324fa]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-7e8324fa]{scroll-behavior:smooth}body[data-v-7e8324fa]{margin:0!important;padding:0}*[data-v-7e8324fa]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-7e8324fa]{padding:6%}button[data-v-7e8324fa]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-7e8324fa]{width:7%}button.sub-action[data-v-7e8324fa]{background-color:green}button.action[data-v-7e8324fa]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-7e8324fa]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-7e8324fa]{padding:2% 5%;width:100%}}button.action.delete[data-v-7e8324fa]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-7e8324fa]:hover{background-color:#e01010}button.small[data-v-7e8324fa]{font-size:11px;padding:1% 3%}button.clear[data-v-7e8324fa]{background:transparent;padding:2% 5%}h1[data-v-7e8324fa],h2[data-v-7e8324fa],h3[data-v-7e8324fa],h4[data-v-7e8324fa],h5[data-v-7e8324fa],h6[data-v-7e8324fa],p[data-v-7e8324fa],span[data-v-7e8324fa]{margin:0;padding:0;color:#333}.page[data-v-7e8324fa]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-7e8324fa]{margin-top:13vh;padding:7%}}.page.-wh[data-v-7e8324fa]{padding:0 0 5%}.page.side-pad[data-v-7e8324fa]{padding:2%}@media(max-width:768px){.page.-broad[data-v-7e8324fa]{padding:2%}}.page .page-header[data-v-7e8324fa]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-7e8324fa]{height:10vw}}.page .page-header .title[data-v-7e8324fa]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-7e8324fa]{font-size:5.4vw}}.page .side-pad[data-v-7e8324fa]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-7e8324fa]{padding:0 10%}}.pointer[data-v-7e8324fa]{cursor:pointer}.center[data-v-7e8324fa],.center-col[data-v-7e8324fa]{display:flex;justify-content:center;align-items:center}.center-col[data-v-7e8324fa]{flex-direction:column}.center-space[data-v-7e8324fa]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-7e8324fa]{position:relative}.white[data-v-7e8324fa]{color:#fff}.scrollable-list[data-v-7e8324fa]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-7e8324fa]{justify-content:center}}.scrollable-list[data-v-7e8324fa]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-7e8324fa]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-7e8324fa]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-7e8324fa]{margin-top:10px;width:50px}[data-v-7e8324fa]::-webkit-scrollbar{display:none}p.msg[data-v-7e8324fa]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-7e8324fa]{background-color:#a93737}p.msg.success[data-v-7e8324fa]{background-color:#319a67}.flex[data-v-7e8324fa]{display:flex}.flex.around[data-v-7e8324fa]{justify-content:space-around}.flex.between[data-v-7e8324fa]{justify-content:space-between}.flex.evenly[data-v-7e8324fa]{justify-content:space-evenly}.flex.col[data-v-7e8324fa]{flex-direction:column}.flex.wrap[data-v-7e8324fa]{flex-wrap:wrap}.flex.center[data-v-7e8324fa]{justify-content:center}.flex.center[data-v-7e8324fa],.flex.v-center[data-v-7e8324fa]{align-items:center}.flex.j-center[data-v-7e8324fa]{justify-content:center}.flex.start[data-v-7e8324fa]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-7e8324fa]{align-items:center}.flex.baseline[data-v-7e8324fa]{align-items:baseline}.flex.end[data-v-7e8324fa]{justify-content:flex-end}.flex.end.center[data-v-7e8324fa]{align-items:center}a[data-v-7e8324fa]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-7e8324fa]{display:none}}.onlyMobile[data-v-7e8324fa]{display:none}@media(max-width:768px){.onlyMobile[data-v-7e8324fa]{display:inline;display:initial}}.suggestion[data-v-7e8324fa]{width:100%}.suggestion label[data-v-7e8324fa]{cursor:pointer;grid-gap:4px;gap:4px}.suggestion label .selection[data-v-7e8324fa]{height:15px;width:15px;border-radius:50%;background-color:#efefef;border:1px solid #e0e0e0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.suggestion label .selection[data-v-7e8324fa]:checked{background-color:#333}.suggestion label .text-details[data-v-7e8324fa]{width:95%}.suggestion label .text-details .code[data-v-7e8324fa]{font-family:\"Poppins Bold\";font-size:13px}.suggestion label .text-details .text[data-v-7e8324fa]{font-size:12px}.suggestion label .bold[data-v-7e8324fa]{font-family:\"SF-Pro Bold\";font-weight:900}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cart/couponSuggestion.vue?vue&type=template&id=7e8324fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"suggestion",on:{"click":function($event){return _vm.$emit('selection')}}},[_vm._ssrNode("<label class=\"flex start\" data-v-7e8324fa><input type=\"radio\" name=\"suggestion\" class=\"selection coupon-select\" data-v-7e8324fa> <div class=\"flex start col text-details\" data-v-7e8324fa><span class=\"code\" data-v-7e8324fa>"+_vm._ssrEscape(" "+_vm._s(_vm.code)+" ")+"</span> <span class=\"text\" data-v-7e8324fa>"+_vm._ssrEscape(" "+_vm._s(_vm.text)+" ")+"</span></div></label>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/cart/couponSuggestion.vue?vue&type=template&id=7e8324fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cart/couponSuggestion.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var couponSuggestionvue_type_script_lang_js_ = ({
  props: {
    code: {
      type: String,
      default: "BOUNIPUN121"
    },
    text: {
      type: String,
      default: " Get flat 5 % off on your order. Offer valid from 9 December, 2021 - 12 December, 2021. Hurry!"
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./components/cart/couponSuggestion.vue?vue&type=script&lang=js&
 /* harmony default export */ var cart_couponSuggestionvue_type_script_lang_js_ = (couponSuggestionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/cart/couponSuggestion.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(341)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cart_couponSuggestionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e8324fa",
  "6db695c2"
  
)

/* harmony default export */ var couponSuggestion = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=coupon-suggestion.js.map
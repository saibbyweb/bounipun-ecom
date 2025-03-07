exports.ids = [118];
exports.modules = {

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(476);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("81289e62", content, true, context)
};

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_us_vue_vue_type_style_index_0_id_e93ff250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_us_vue_vue_type_style_index_0_id_e93ff250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_us_vue_vue_type_style_index_0_id_e93ff250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_us_vue_vue_type_style_index_0_id_e93ff250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_us_vue_vue_type_style_index_0_id_e93ff250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 476:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-e93ff250]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-e93ff250]{scroll-behavior:smooth}body[data-v-e93ff250]{margin:0!important;padding:0}*[data-v-e93ff250]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-e93ff250]{padding:6%}button[data-v-e93ff250]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-e93ff250]{width:7%}button.sub-action[data-v-e93ff250]{background-color:green}button.action[data-v-e93ff250]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-e93ff250]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-e93ff250]{padding:2% 5%;width:100%}}button.action.delete[data-v-e93ff250]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-e93ff250]:hover{background-color:#e01010}button.small[data-v-e93ff250]{font-size:11px;padding:1% 3%}button.clear[data-v-e93ff250]{background:transparent;padding:2% 5%}h1[data-v-e93ff250],h2[data-v-e93ff250],h3[data-v-e93ff250],h4[data-v-e93ff250],h5[data-v-e93ff250],h6[data-v-e93ff250],p[data-v-e93ff250],span[data-v-e93ff250]{margin:0;padding:0;color:#333}.page[data-v-e93ff250]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-e93ff250]{margin-top:13vh;padding:7%}}.page.-wh[data-v-e93ff250]{padding:0 0 5%}.page.side-pad[data-v-e93ff250]{padding:2%}@media(max-width:768px){.page.-broad[data-v-e93ff250]{padding:2%}}.page .page-header[data-v-e93ff250]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-e93ff250]{height:10vw}}.page .page-header .title[data-v-e93ff250]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-e93ff250]{font-size:5.4vw}}.page .side-pad[data-v-e93ff250]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-e93ff250]{padding:0 10%}}.pointer[data-v-e93ff250]{cursor:pointer}.center[data-v-e93ff250],.center-col[data-v-e93ff250]{display:flex;justify-content:center;align-items:center}.center-col[data-v-e93ff250]{flex-direction:column}.center-space[data-v-e93ff250]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-e93ff250]{position:relative}.white[data-v-e93ff250]{color:#fff}.scrollable-list[data-v-e93ff250]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-e93ff250]{justify-content:center}}.scrollable-list[data-v-e93ff250]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-e93ff250]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-e93ff250]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-e93ff250]{margin-top:10px;width:50px}[data-v-e93ff250]::-webkit-scrollbar{display:none}p.msg[data-v-e93ff250]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-e93ff250]{background-color:#a93737}p.msg.success[data-v-e93ff250]{background-color:#319a67}.flex[data-v-e93ff250]{display:flex}.flex.around[data-v-e93ff250]{justify-content:space-around}.flex.between[data-v-e93ff250]{justify-content:space-between}.flex.evenly[data-v-e93ff250]{justify-content:space-evenly}.flex.col[data-v-e93ff250]{flex-direction:column}.flex.wrap[data-v-e93ff250]{flex-wrap:wrap}.flex.center[data-v-e93ff250]{justify-content:center}.flex.center[data-v-e93ff250],.flex.v-center[data-v-e93ff250]{align-items:center}.flex.j-center[data-v-e93ff250]{justify-content:center}.flex.start[data-v-e93ff250]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-e93ff250]{align-items:center}.flex.baseline[data-v-e93ff250]{align-items:baseline}.flex.end[data-v-e93ff250]{justify-content:flex-end}.flex.end.center[data-v-e93ff250]{align-items:center}a[data-v-e93ff250]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-e93ff250]{display:none}}.onlyMobile[data-v-e93ff250]{display:none}@media(max-width:768px){.onlyMobile[data-v-e93ff250]{display:inline;display:initial}}h2[data-v-e93ff250]{text-align:left;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us.vue?vue&type=template&id=e93ff250&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._ssrNode("<div class=\"wrapper flex center col\" data-v-e93ff250><h1 data-v-e93ff250>About Bounipun</h1> <br data-v-e93ff250> <h2 data-v-e93ff250>Philosophy</h2> <p data-v-e93ff250>\n      Influenced by the mythical, colorful transformation of nature’s favorite\n      child Chinar leaves, and engineered only after thorough research,\n      Bounipun has its roots deeply entwined in the intricate elements of\n      Kashmiri heritage. Bounipun offers masterpieces that are beyond the\n      conventional Kashmiri craft. It is essentially wearable art, embracing\n      minimalism blended with eccentricity as its principle. The collection\n      speaks its own language originated from the fables hidden in the\n      historically rich avenues of Kashmir. Bounipun is a specialist luxury\n      division bringing you a timeless craft from the Himalayan glacial\n      Kashmir valley to your wardrobes. Created with a blend of traditional\n      and innovative techniques, the wraps by Bounipun showcase the\n      contemporary designs narrating splendid tales that unfold on the fervent\n      paths of Kashmir. With every step you take on this edge of Kashmir, the\n      streets embosom you deep into the golden days of the valley. The paths\n      of downtown Kashmir are where the craft was born and nurtured, and you\n      can sense it in every breath you take standing in the middle of the\n      Valley.\n    </p> <br data-v-e93ff250> <br data-v-e93ff250> <h2 data-v-e93ff250>Foundation</h2> <p data-v-e93ff250>\n      The premium Cashmere for Bounipun’s collection is hand-woven on vintage\n      looms that date back 500 years. This delicate fabric is then treated by\n      the purity of the Himalayan glacial water running down the mountains of\n      Kashmir, preserving the softness and longevity that this fabric is known\n      for. The local artisans of the valley carefully hand weave the fabric\n      for Bounipun’s finest collections, shielding the true aura of Cashmere.\n      The premium Cashmere used to engineer the timeless craft of this luxury\n      brand are derived from the Pashmina goats found in the northern region\n      of the country. The Bounipun shawls and scarves, however, take you on a\n      journey that goes beyond the fabric and captures the unvarnished spirit\n      of Kashmir. The detailed prints, emotion-reflective colors, and\n      signature embroideries made of well-dissected thread bring forth the\n      divine fusion of Kashmir’s hues, ethnicity, and folklore. These\n      artistic, unexplored gems created by the young and experienced artisans\n      don’t need an occasion to be worn.\n    </p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about-us.vue?vue&type=template&id=e93ff250&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about-us.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(475)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e93ff250",
  "5887cb88"
  
)

/* harmony default export */ var about_us = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-us.js.map
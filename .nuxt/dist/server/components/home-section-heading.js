exports.ids = [33];
exports.modules = {

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(347);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7b098d8e", content, true, context)
};

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSectionHeading_vue_vue_type_style_index_0_id_335f12f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSectionHeading_vue_vue_type_style_index_0_id_335f12f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSectionHeading_vue_vue_type_style_index_0_id_335f12f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSectionHeading_vue_vue_type_style_index_0_id_335f12f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSectionHeading_vue_vue_type_style_index_0_id_335f12f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 347:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-335f12f1]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-335f12f1]{scroll-behavior:smooth}body[data-v-335f12f1]{margin:0!important;padding:0}*[data-v-335f12f1]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-335f12f1]{padding:6%}button[data-v-335f12f1]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-335f12f1]{width:7%}button.sub-action[data-v-335f12f1]{background-color:green}button.action[data-v-335f12f1]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-335f12f1]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-335f12f1]{padding:2% 5%;width:100%}}button.action.delete[data-v-335f12f1]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-335f12f1]:hover{background-color:#e01010}button.small[data-v-335f12f1]{font-size:11px;padding:1% 3%}button.clear[data-v-335f12f1]{background:transparent;padding:2% 5%}h1[data-v-335f12f1],h2[data-v-335f12f1],h3[data-v-335f12f1],h4[data-v-335f12f1],h5[data-v-335f12f1],h6[data-v-335f12f1],p[data-v-335f12f1],span[data-v-335f12f1]{margin:0;padding:0;color:#333}.page[data-v-335f12f1]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-335f12f1]{margin-top:13vh;padding:7%}}.page.-wh[data-v-335f12f1]{padding:0 0 5%}.page.side-pad[data-v-335f12f1]{padding:2%}@media(max-width:768px){.page.-broad[data-v-335f12f1]{padding:2%}}.page .page-header[data-v-335f12f1]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-335f12f1]{height:10vw}}.page .page-header .title[data-v-335f12f1]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-335f12f1]{font-size:5.4vw}}.page .side-pad[data-v-335f12f1]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-335f12f1]{padding:0 10%}}.pointer[data-v-335f12f1]{cursor:pointer}.center[data-v-335f12f1],.center-col[data-v-335f12f1]{display:flex;justify-content:center;align-items:center}.center-col[data-v-335f12f1]{flex-direction:column}.center-space[data-v-335f12f1]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-335f12f1]{position:relative}.white[data-v-335f12f1]{color:#fff}.scrollable-list[data-v-335f12f1]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-335f12f1]{justify-content:center}}.scrollable-list[data-v-335f12f1]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-335f12f1]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-335f12f1]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-335f12f1]{margin-top:10px;width:50px}[data-v-335f12f1]::-webkit-scrollbar{display:none}p.msg[data-v-335f12f1]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-335f12f1]{background-color:#a93737}p.msg.success[data-v-335f12f1]{background-color:#319a67}.flex[data-v-335f12f1]{display:flex}.flex.around[data-v-335f12f1]{justify-content:space-around}.flex.between[data-v-335f12f1]{justify-content:space-between}.flex.evenly[data-v-335f12f1]{justify-content:space-evenly}.flex.col[data-v-335f12f1]{flex-direction:column}.flex.wrap[data-v-335f12f1]{flex-wrap:wrap}.flex.center[data-v-335f12f1]{justify-content:center}.flex.center[data-v-335f12f1],.flex.v-center[data-v-335f12f1]{align-items:center}.flex.j-center[data-v-335f12f1]{justify-content:center}.flex.start[data-v-335f12f1]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-335f12f1]{align-items:center}.flex.baseline[data-v-335f12f1]{align-items:baseline}.flex.end[data-v-335f12f1]{justify-content:flex-end}.flex.end.center[data-v-335f12f1]{align-items:center}a[data-v-335f12f1]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-335f12f1]{display:none}}.onlyMobile[data-v-335f12f1]{display:none}@media(max-width:768px){.onlyMobile[data-v-335f12f1]{display:inline;display:initial}}.section-title[data-v-335f12f1]{display:flex;justify-content:flex-start;align-items:center;width:100%;padding:10px;box-sizing:border-box}.section-title img[data-v-335f12f1]{height:5vw}.section-title .text-details[data-v-335f12f1]{display:flex;flex-direction:column;align-items:flex-start;text-transform:uppercase;color:#464646;margin-left:10px}.section-title .text-details h2[data-v-335f12f1]{font-size:5vw;font-weight:100;letter-spacing:5px}.section-title .text-details p[data-v-335f12f1]{letter-spacing:2px;font-size:2vw;font-weight:500;opacity:.7}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homeSectionHeading.vue?vue&type=template&id=335f12f1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-title"},[_vm._ssrNode(((_vm.icon !== undefined)?("<img"+(_vm._ssrAttr("src",_vm.iconPath))+" data-v-335f12f1>"):"<!---->")+" <div class=\"text-details\" data-v-335f12f1><h2 data-v-335f12f1>"+_vm._ssrEscape(" "+_vm._s(_vm.heading)+" ")+"</h2> <p data-v-335f12f1>"+_vm._ssrEscape(" "+_vm._s(_vm.tagline)+" ")+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/homeSectionHeading.vue?vue&type=template&id=335f12f1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homeSectionHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var homeSectionHeadingvue_type_script_lang_js_ = ({
  props: {
    icon: String,
    heading: String,
    tagline: String
  },
  computed: {
    iconPath() {
      return `/icons/${this.icon}`;
    }

  }
});
// CONCATENATED MODULE: ./components/homeSectionHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_homeSectionHeadingvue_type_script_lang_js_ = (homeSectionHeadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/homeSectionHeading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(346)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_homeSectionHeadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "335f12f1",
  "48c1a846"
  
)

/* harmony default export */ var homeSectionHeading = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-section-heading.js.map
exports.ids = [15];
exports.modules = {

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("da2750ae", content, true, context)
};

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlockLayout_vue_vue_type_style_index_0_id_4b22ae96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlockLayout_vue_vue_type_style_index_0_id_4b22ae96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlockLayout_vue_vue_type_style_index_0_id_4b22ae96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlockLayout_vue_vue_type_style_index_0_id_4b22ae96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlockLayout_vue_vue_type_style_index_0_id_4b22ae96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 274:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-4b22ae96]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-4b22ae96]{scroll-behavior:smooth}body[data-v-4b22ae96]{margin:0!important;padding:0}*[data-v-4b22ae96]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-4b22ae96]{padding:6%}button[data-v-4b22ae96]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-4b22ae96]{width:7%}button.sub-action[data-v-4b22ae96]{background-color:green}button.action[data-v-4b22ae96]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-4b22ae96]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-4b22ae96]{padding:2% 5%;width:100%}}button.action.delete[data-v-4b22ae96]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-4b22ae96]:hover{background-color:#e01010}button.small[data-v-4b22ae96]{font-size:11px;padding:1% 3%}button.clear[data-v-4b22ae96]{background:transparent;padding:2% 5%}h1[data-v-4b22ae96],h2[data-v-4b22ae96],h3[data-v-4b22ae96],h4[data-v-4b22ae96],h5[data-v-4b22ae96],h6[data-v-4b22ae96],p[data-v-4b22ae96],span[data-v-4b22ae96]{margin:0;padding:0;color:#333}.page[data-v-4b22ae96]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-4b22ae96]{margin-top:13vh;padding:7%}}.page.-wh[data-v-4b22ae96]{padding:0 0 5%}.page.side-pad[data-v-4b22ae96]{padding:2%}@media(max-width:768px){.page.-broad[data-v-4b22ae96]{padding:2%}}.page .page-header[data-v-4b22ae96]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-4b22ae96]{height:10vw}}.page .page-header .title[data-v-4b22ae96]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-4b22ae96]{font-size:5.4vw}}.page .side-pad[data-v-4b22ae96]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-4b22ae96]{padding:0 10%}}.pointer[data-v-4b22ae96]{cursor:pointer}.center[data-v-4b22ae96],.center-col[data-v-4b22ae96]{display:flex;justify-content:center;align-items:center}.center-col[data-v-4b22ae96]{flex-direction:column}.center-space[data-v-4b22ae96]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-4b22ae96]{position:relative}.white[data-v-4b22ae96]{color:#fff}.scrollable-list[data-v-4b22ae96]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-4b22ae96]{justify-content:center}}.scrollable-list[data-v-4b22ae96]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-4b22ae96]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-4b22ae96]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-4b22ae96]{margin-top:10px;width:50px}[data-v-4b22ae96]::-webkit-scrollbar{display:none}p.msg[data-v-4b22ae96]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-4b22ae96]{background-color:#a93737}p.msg.success[data-v-4b22ae96]{background-color:#319a67}.flex[data-v-4b22ae96]{display:flex}.flex.around[data-v-4b22ae96]{justify-content:space-around}.flex.between[data-v-4b22ae96]{justify-content:space-between}.flex.evenly[data-v-4b22ae96]{justify-content:space-evenly}.flex.col[data-v-4b22ae96]{flex-direction:column}.flex.wrap[data-v-4b22ae96]{flex-wrap:wrap}.flex.center[data-v-4b22ae96]{justify-content:center}.flex.center[data-v-4b22ae96],.flex.v-center[data-v-4b22ae96]{align-items:center}.flex.j-center[data-v-4b22ae96]{justify-content:center}.flex.start[data-v-4b22ae96]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-4b22ae96]{align-items:center}.flex.baseline[data-v-4b22ae96]{align-items:baseline}.flex.end[data-v-4b22ae96]{justify-content:flex-end}.flex.end.center[data-v-4b22ae96]{align-items:center}a[data-v-4b22ae96]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-4b22ae96]{display:none}}.onlyMobile[data-v-4b22ae96]{display:none}@media(max-width:768px){.onlyMobile[data-v-4b22ae96]{display:inline;display:initial}}.lab-block[data-v-4b22ae96]{grid-gap:15%;gap:15%}.lab-block[data-v-4b22ae96]:last-child{padding-bottom:80px}.lab-block .main-image[data-v-4b22ae96]{width:30%;aspect-ratio:1/1.2;position:relative}.lab-block .main-image .color-image[data-v-4b22ae96]{position:absolute;bottom:-15%;right:-7%;width:13vw;height:15vw;background-size:cover;background-repeat:no-repeat}.lab-block .name-and-para[data-v-4b22ae96]{width:25%}.lab-block .name-and-para .category[data-v-4b22ae96]{background-color:#333;color:#fff;padding:1% 3%;font-size:1.1vw}.lab-block.reverse .main-image .color-image[data-v-4b22ae96]{bottom:-15%;left:-7%;right:auto}@media(max-width:768px){.lab-block[data-v-4b22ae96]{flex-direction:column}.lab-block .main-image[data-v-4b22ae96]{width:62%}.lab-block .main-image .color-image[data-v-4b22ae96]{width:24vw;height:30vw}.lab-block .name-and-para[data-v-4b22ae96]{width:70%}.lab-block .name-and-para .category[data-v-4b22ae96]{font-size:3vw}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/lab/ColorBlockLayout.vue?vue&type=template&id=4b22ae96&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lab-block flex center",class:{ reverse: _vm.index % 2 !== 0 }},[_vm._ssrNode("<div class=\"main-image\""+(_vm._ssrStyle(null,_vm.setBg(_vm.blockDetail.mainImage), null))+" data-v-4b22ae96><div class=\"color-image\""+(_vm._ssrStyle(null,_vm.setBg(_vm.blockDetail.colorImage), null))+" data-v-4b22ae96></div></div> <div class=\"name-and-para flex col\" data-v-4b22ae96><span class=\"category\" data-v-4b22ae96>"+_vm._ssrEscape(" "+_vm._s(_vm.blockDetail.category)+" ")+"</span> <h2 class=\"name\" data-v-4b22ae96>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.name))+"</h2> <div class=\"hr\" data-v-4b22ae96></div> <p class=\"para\" data-v-4b22ae96>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.paragraph))+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/lab/ColorBlockLayout.vue?vue&type=template&id=4b22ae96&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/lab/ColorBlockLayout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ColorBlockLayoutvue_type_script_lang_js_ = ({
  props: {
    index: Number,
    blockDetail: {
      name: String,
      mainImage: String,
      paragraph: String,
      colorImage: String,
      category: String
    },
    setBg: Function
  },
  methods: {}
});
// CONCATENATED MODULE: ./components/lab/ColorBlockLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var lab_ColorBlockLayoutvue_type_script_lang_js_ = (ColorBlockLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/lab/ColorBlockLayout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(273)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lab_ColorBlockLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b22ae96",
  "0e8cc080"
  
)

/* harmony default export */ var ColorBlockLayout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=color-block-layout.js.map
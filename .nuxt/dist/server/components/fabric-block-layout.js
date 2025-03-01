exports.ids = [26];
exports.modules = {

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1f387984", content, true, context)
};

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlockLayout_vue_vue_type_style_index_0_id_17643f54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(220);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlockLayout_vue_vue_type_style_index_0_id_17643f54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlockLayout_vue_vue_type_style_index_0_id_17643f54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlockLayout_vue_vue_type_style_index_0_id_17643f54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlockLayout_vue_vue_type_style_index_0_id_17643f54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 272:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-17643f54]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-17643f54]{scroll-behavior:smooth}body[data-v-17643f54]{margin:0!important;padding:0}*[data-v-17643f54]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-17643f54]{padding:6%}button[data-v-17643f54]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-17643f54]{width:7%}button.sub-action[data-v-17643f54]{background-color:green}button.action[data-v-17643f54]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-17643f54]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-17643f54]{padding:2% 5%;width:100%}}button.action.delete[data-v-17643f54]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-17643f54]:hover{background-color:#e01010}button.small[data-v-17643f54]{font-size:11px;padding:1% 3%}button.clear[data-v-17643f54]{background:transparent;padding:2% 5%}h1[data-v-17643f54],h2[data-v-17643f54],h3[data-v-17643f54],h4[data-v-17643f54],h5[data-v-17643f54],h6[data-v-17643f54],p[data-v-17643f54],span[data-v-17643f54]{margin:0;padding:0;color:#333}.page[data-v-17643f54]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-17643f54]{margin-top:13vh;padding:7%}}.page.-wh[data-v-17643f54]{padding:0 0 5%}.page.side-pad[data-v-17643f54]{padding:2%}@media(max-width:768px){.page.-broad[data-v-17643f54]{padding:2%}}.page .page-header[data-v-17643f54]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-17643f54]{height:10vw}}.page .page-header .title[data-v-17643f54]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-17643f54]{font-size:5.4vw}}.page .side-pad[data-v-17643f54]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-17643f54]{padding:0 10%}}.pointer[data-v-17643f54]{cursor:pointer}.center[data-v-17643f54],.center-col[data-v-17643f54]{display:flex;justify-content:center;align-items:center}.center-col[data-v-17643f54]{flex-direction:column}.center-space[data-v-17643f54]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-17643f54]{position:relative}.white[data-v-17643f54]{color:#fff}.scrollable-list[data-v-17643f54]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-17643f54]{justify-content:center}}.scrollable-list[data-v-17643f54]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-17643f54]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-17643f54]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-17643f54]{margin-top:10px;width:50px}[data-v-17643f54]::-webkit-scrollbar{display:none}p.msg[data-v-17643f54]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-17643f54]{background-color:#a93737}p.msg.success[data-v-17643f54]{background-color:#319a67}.flex[data-v-17643f54]{display:flex}.flex.around[data-v-17643f54]{justify-content:space-around}.flex.between[data-v-17643f54]{justify-content:space-between}.flex.evenly[data-v-17643f54]{justify-content:space-evenly}.flex.col[data-v-17643f54]{flex-direction:column}.flex.wrap[data-v-17643f54]{flex-wrap:wrap}.flex.center[data-v-17643f54]{justify-content:center}.flex.center[data-v-17643f54],.flex.v-center[data-v-17643f54]{align-items:center}.flex.j-center[data-v-17643f54]{justify-content:center}.flex.start[data-v-17643f54]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-17643f54]{align-items:center}.flex.baseline[data-v-17643f54]{align-items:baseline}.flex.end[data-v-17643f54]{justify-content:flex-end}.flex.end.center[data-v-17643f54]{align-items:center}a[data-v-17643f54]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-17643f54]{display:none}}.onlyMobile[data-v-17643f54]{display:none}@media(max-width:768px){.onlyMobile[data-v-17643f54]{display:inline;display:initial}}.lab-block[data-v-17643f54]{grid-gap:10%;gap:10%;padding-bottom:40px}.lab-block .main-image[data-v-17643f54]{width:34%;aspect-ratio:1;position:relative}.lab-block .name-and-para[data-v-17643f54]{width:45%}.lab-block .name-and-para .name[data-v-17643f54]{line-height:2.9vw;font-size:2.7vw}.lab-block .name-and-para .hr[data-v-17643f54]{width:14%}.lab-block .sub-texts-and-images[data-v-17643f54]{width:100%;position:relative}.lab-block .sub-texts-and-images .sub-texts[data-v-17643f54]{width:40%;margin-top:40px;margin-left:15.5%;border-left:1px solid hsla(0,0%,50.2%,.322);padding:2%;grid-gap:6vw;gap:6vw}.lab-block .sub-texts-and-images .sub-texts .sub-text h5[data-v-17643f54]{font-family:\"Poppins\";font-weight:900;font-size:1.4vw}.lab-block .sub-texts-and-images .sub-texts .sub-text p[data-v-17643f54]{font-family:\"Garamond\";font-size:1.25vw;color:#313131}.lab-block .sub-texts-and-images .sub-images[data-v-17643f54]{flex-direction:column;width:50%;grid-gap:30px;gap:30px;position:absolute;top:-20%;right:0}.lab-block .sub-texts-and-images .sub-images .sub-image[data-v-17643f54]{width:23vw;aspect-ratio:1;background-size:cover;background-repeat:no-repeat}.lab-block .sub-texts-and-images.reverse[data-v-17643f54]{flex-direction:row-reverse}.lab-block .sub-texts-and-images.reverse .sub-texts[data-v-17643f54]{margin-left:0;margin-right:5.5%}.lab-block .sub-texts-and-images.reverse .sub-images[data-v-17643f54]{left:0;right:auto}@media(max-width:768px){.lab-block[data-v-17643f54]{align-items:flex-start;justify-content:flex-start;flex-direction:column}.lab-block .main-image[data-v-17643f54]{width:70%;margin-left:10%}.lab-block .name-and-para[data-v-17643f54]{align-items:flex-start;justify-content:flex-start;width:65%;margin-left:10%}.lab-block .name-and-para .name[data-v-17643f54]{line-height:4.2vw;font-size:4.3vw}.lab-block .sub-texts-and-images[data-v-17643f54]{flex-direction:column-reverse}.lab-block .sub-texts-and-images .sub-texts[data-v-17643f54]{width:80%;padding-left:4%;margin-left:10%}.lab-block .sub-texts-and-images .sub-texts .sub-text h5[data-v-17643f54]{font-size:3vw}.lab-block .sub-texts-and-images .sub-texts .sub-text p[data-v-17643f54]{font-size:2.9vw}.lab-block .sub-texts-and-images .sub-images[data-v-17643f54]{margin-top:7%;width:90%;position:relative;flex-direction:row}.lab-block .sub-texts-and-images .sub-images .sub-image[data-v-17643f54]{width:30vw}.lab-block.reverse[data-v-17643f54]{flex-direction:column;align-items:flex-end}.lab-block.reverse .main-image[data-v-17643f54]{margin-right:10%}.lab-block.reverse .name-and-para[data-v-17643f54]{margin-right:10%;align-items:flex-end}.lab-block.reverse .name-and-para .hr[data-v-17643f54]{align-self:flex-end}.lab-block.reverse .sub-texts-and-images[data-v-17643f54]{flex-direction:column-reverse;align-items:flex-end}.lab-block.reverse .sub-texts-and-images .sub-texts[data-v-17643f54]{margin-left:0;margin-right:10%;padding-left:2%;padding-right:4%;border-left:none;border-right:1px solid hsla(0,0%,50.2%,.322);text-align:right}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/lab/FabricBlockLayout.vue?vue&type=template&id=17643f54&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lab-block flex wrap",class:{ reverse: _vm.index % 2 !== 0 }},[_vm._ssrNode("<div class=\"main-image\""+(_vm._ssrStyle(null,_vm.setBg(_vm.blockDetail.mainImage), null))+" data-v-17643f54></div> <div class=\"name-and-para flex col\" data-v-17643f54><h2 class=\"name\" data-v-17643f54>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.name))+"</h2> <div class=\"hr\" data-v-17643f54></div> <p class=\"para\" data-v-17643f54>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.paragraph))+"</p></div> <div"+(_vm._ssrClass("flex sub-texts-and-images",{ reverse: _vm.index % 2 !== 0 }))+" data-v-17643f54><div class=\"sub-texts flex col\" data-v-17643f54><div class=\"sub-text\" data-v-17643f54><h5 data-v-17643f54>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.subHeading1))+"</h5> <p data-v-17643f54>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.subParagraph1))+"</p></div> <div class=\"sub-text\" data-v-17643f54><h5 data-v-17643f54>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.subHeading2))+"</h5> <p data-v-17643f54>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.subParagraph2))+"</p></div> <div class=\"sub-text\" data-v-17643f54><h5 data-v-17643f54>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.subHeading3))+"</h5> <p data-v-17643f54>"+_vm._ssrEscape(_vm._s(_vm.blockDetail.subParagraph3))+"</p></div></div> <div class=\"sub-images flex center\" data-v-17643f54><div class=\"sub-image\""+(_vm._ssrStyle(null,_vm.setBg(_vm.blockDetail.subImage1), null))+" data-v-17643f54></div> <div class=\"sub-image\""+(_vm._ssrStyle(null,_vm.setBg(_vm.blockDetail.subImage2), null))+" data-v-17643f54></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/lab/FabricBlockLayout.vue?vue&type=template&id=17643f54&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/lab/FabricBlockLayout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FabricBlockLayoutvue_type_script_lang_js_ = ({
  props: {
    index: Number,
    blockDetail: {
      name: String,
      mainImage: String,
      paragraph: String,
      subImage1: String,
      subImage2: String,
      subHeading1: String,
      subParagraph1: String,
      subHeading2: String,
      subParagraph2: String,
      subHeading3: String,
      subParagraph3: String
    },
    setBg: Function
  },
  methods: {}
});
// CONCATENATED MODULE: ./components/lab/FabricBlockLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var lab_FabricBlockLayoutvue_type_script_lang_js_ = (FabricBlockLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/lab/FabricBlockLayout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(271)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lab_FabricBlockLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "17643f54",
  "d13b4854"
  
)

/* harmony default export */ var FabricBlockLayout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=fabric-block-layout.js.map
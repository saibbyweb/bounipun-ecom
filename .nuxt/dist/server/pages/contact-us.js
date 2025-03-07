exports.ids = [149,35,58];
exports.modules = {

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("862ecf76", content, true, context)
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/input/textBox.vue?vue&type=template&id=5c9c60ad&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-box",class:{ nonAdmin: _vm.nonAdmin, slim: _vm.slim, long: _vm.long }},[_vm._ssrNode("<div style=\"display: flex; align-items: center\" data-v-5c9c60ad>"+((_vm.internal)?("<div class=\"internal\" data-v-5c9c60ad></div>"):"<!---->")+" <label class=\"label\" data-v-5c9c60ad>"+_vm._ssrEscape(" "+_vm._s(_vm.label)+" ")+"</label></div> <textarea"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",_vm.value))+" class=\"textarea-box\" data-v-5c9c60ad></textarea>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/input/textBox.vue?vue&type=template&id=5c9c60ad&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/input/textBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var textBoxvue_type_script_lang_js_ = ({
  props: {
    label: String,
    value: String,
    internal: {
      type: Boolean,
      default: false
    },
    nonAdmin: {
      type: Boolean,
      default: false
    },
    slim: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/admin/input/textBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_textBoxvue_type_script_lang_js_ = (textBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/input/textBox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_textBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c9c60ad",
  "c9b16fc2"
  
)

/* harmony default export */ var textBox = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textBox_vue_vue_type_style_index_0_id_5c9c60ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textBox_vue_vue_type_style_index_0_id_5c9c60ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textBox_vue_vue_type_style_index_0_id_5c9c60ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textBox_vue_vue_type_style_index_0_id_5c9c60ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textBox_vue_vue_type_style_index_0_id_5c9c60ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-5c9c60ad]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-5c9c60ad]{scroll-behavior:smooth}body[data-v-5c9c60ad]{margin:0!important;padding:0}*[data-v-5c9c60ad]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-5c9c60ad]{padding:6%}button[data-v-5c9c60ad]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-5c9c60ad]{width:7%}button.sub-action[data-v-5c9c60ad]{background-color:green}button.action[data-v-5c9c60ad]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-5c9c60ad]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-5c9c60ad]{padding:2% 5%;width:100%}}button.action.delete[data-v-5c9c60ad]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-5c9c60ad]:hover{background-color:#e01010}button.small[data-v-5c9c60ad]{font-size:11px;padding:1% 3%}button.clear[data-v-5c9c60ad]{background:transparent;padding:2% 5%}h1[data-v-5c9c60ad],h2[data-v-5c9c60ad],h3[data-v-5c9c60ad],h4[data-v-5c9c60ad],h5[data-v-5c9c60ad],h6[data-v-5c9c60ad],p[data-v-5c9c60ad],span[data-v-5c9c60ad]{margin:0;padding:0;color:#333}.page[data-v-5c9c60ad]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-5c9c60ad]{margin-top:13vh;padding:7%}}.page.-wh[data-v-5c9c60ad]{padding:0 0 5%}.page.side-pad[data-v-5c9c60ad]{padding:2%}@media(max-width:768px){.page.-broad[data-v-5c9c60ad]{padding:2%}}.page .page-header[data-v-5c9c60ad]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-5c9c60ad]{height:10vw}}.page .page-header .title[data-v-5c9c60ad]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-5c9c60ad]{font-size:5.4vw}}.page .side-pad[data-v-5c9c60ad]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-5c9c60ad]{padding:0 10%}}.pointer[data-v-5c9c60ad]{cursor:pointer}.center[data-v-5c9c60ad],.center-col[data-v-5c9c60ad]{display:flex;justify-content:center;align-items:center}.center-col[data-v-5c9c60ad]{flex-direction:column}.center-space[data-v-5c9c60ad]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-5c9c60ad]{position:relative}.white[data-v-5c9c60ad]{color:#fff}.scrollable-list[data-v-5c9c60ad]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-5c9c60ad]{justify-content:center}}.scrollable-list[data-v-5c9c60ad]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-5c9c60ad]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-5c9c60ad]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-5c9c60ad]{margin-top:10px;width:50px}[data-v-5c9c60ad]::-webkit-scrollbar{display:none}p.msg[data-v-5c9c60ad]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-5c9c60ad]{background-color:#a93737}p.msg.success[data-v-5c9c60ad]{background-color:#319a67}.flex[data-v-5c9c60ad]{display:flex}.flex.around[data-v-5c9c60ad]{justify-content:space-around}.flex.between[data-v-5c9c60ad]{justify-content:space-between}.flex.evenly[data-v-5c9c60ad]{justify-content:space-evenly}.flex.col[data-v-5c9c60ad]{flex-direction:column}.flex.wrap[data-v-5c9c60ad]{flex-wrap:wrap}.flex.center[data-v-5c9c60ad]{justify-content:center}.flex.center[data-v-5c9c60ad],.flex.v-center[data-v-5c9c60ad]{align-items:center}.flex.j-center[data-v-5c9c60ad]{justify-content:center}.flex.start[data-v-5c9c60ad]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-5c9c60ad]{align-items:center}.flex.baseline[data-v-5c9c60ad]{align-items:baseline}.flex.end[data-v-5c9c60ad]{justify-content:flex-end}.flex.end.center[data-v-5c9c60ad]{align-items:center}a[data-v-5c9c60ad]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-5c9c60ad]{display:none}}.onlyMobile[data-v-5c9c60ad]{display:none}@media(max-width:768px){.onlyMobile[data-v-5c9c60ad]{display:inline;display:initial}}.text-box[data-v-5c9c60ad]{display:flex;flex-direction:column;box-sizing:border-box;padding:2%;width:100%}.text-box.slim[data-v-5c9c60ad]{padding:0 2%}.text-box .internal[data-v-5c9c60ad]{height:10px;width:10px;background-color:#1690dc}.text-box .label[data-v-5c9c60ad]{font-family:\"SF-Pro Bold\";color:#7f7f7f;text-transform:uppercase;font-size:10px;padding:2%;margin-left:5px;font-weight:900}.text-box .textarea-box[data-v-5c9c60ad]{padding:10px 15px;border:none;-webkit-appearance:none;box-shadow:0 2px 10px rgba(0,0,0,.16);color:#7f7f7f;font-family:\"SF-Pro\";letter-spacing:1px;box-sizing:border-box;resize:none}.text-box.nonAdmin[data-v-5c9c60ad]{padding:5%}.text-box.nonAdmin .textarea-box[data-v-5c9c60ad]{height:150px}.text-box.long .textarea-box[data-v-5c9c60ad]{height:145px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5f1cf577", content, true, context)
};

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCredential_vue_vue_type_style_index_0_id_4461f6b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCredential_vue_vue_type_style_index_0_id_4461f6b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCredential_vue_vue_type_style_index_0_id_4461f6b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCredential_vue_vue_type_style_index_0_id_4461f6b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCredential_vue_vue_type_style_index_0_id_4461f6b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 171:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-4461f6b9]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-4461f6b9]{scroll-behavior:smooth}body[data-v-4461f6b9]{margin:0!important;padding:0}*[data-v-4461f6b9]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-4461f6b9]{padding:6%}button[data-v-4461f6b9]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-4461f6b9]{width:7%}button.sub-action[data-v-4461f6b9]{background-color:green}button.action[data-v-4461f6b9]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-4461f6b9]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-4461f6b9]{padding:2% 5%;width:100%}}button.action.delete[data-v-4461f6b9]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-4461f6b9]:hover{background-color:#e01010}button.small[data-v-4461f6b9]{font-size:11px;padding:1% 3%}button.clear[data-v-4461f6b9]{background:transparent;padding:2% 5%}h1[data-v-4461f6b9],h2[data-v-4461f6b9],h3[data-v-4461f6b9],h4[data-v-4461f6b9],h5[data-v-4461f6b9],h6[data-v-4461f6b9],p[data-v-4461f6b9],span[data-v-4461f6b9]{margin:0;padding:0;color:#333}.page[data-v-4461f6b9]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-4461f6b9]{margin-top:13vh;padding:7%}}.page.-wh[data-v-4461f6b9]{padding:0 0 5%}.page.side-pad[data-v-4461f6b9]{padding:2%}@media(max-width:768px){.page.-broad[data-v-4461f6b9]{padding:2%}}.page .page-header[data-v-4461f6b9]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-4461f6b9]{height:10vw}}.page .page-header .title[data-v-4461f6b9]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-4461f6b9]{font-size:5.4vw}}.page .side-pad[data-v-4461f6b9]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-4461f6b9]{padding:0 10%}}.pointer[data-v-4461f6b9]{cursor:pointer}.center[data-v-4461f6b9],.center-col[data-v-4461f6b9]{display:flex;justify-content:center;align-items:center}.center-col[data-v-4461f6b9]{flex-direction:column}.center-space[data-v-4461f6b9]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-4461f6b9]{position:relative}.white[data-v-4461f6b9]{color:#fff}.scrollable-list[data-v-4461f6b9]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-4461f6b9]{justify-content:center}}.scrollable-list[data-v-4461f6b9]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-4461f6b9]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-4461f6b9]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-4461f6b9]{margin-top:10px;width:50px}[data-v-4461f6b9]::-webkit-scrollbar{display:none}p.msg[data-v-4461f6b9]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-4461f6b9]{background-color:#a93737}p.msg.success[data-v-4461f6b9]{background-color:#319a67}.flex[data-v-4461f6b9]{display:flex}.flex.around[data-v-4461f6b9]{justify-content:space-around}.flex.between[data-v-4461f6b9]{justify-content:space-between}.flex.evenly[data-v-4461f6b9]{justify-content:space-evenly}.flex.col[data-v-4461f6b9]{flex-direction:column}.flex.wrap[data-v-4461f6b9]{flex-wrap:wrap}.flex.center[data-v-4461f6b9]{justify-content:center}.flex.center[data-v-4461f6b9],.flex.v-center[data-v-4461f6b9]{align-items:center}.flex.j-center[data-v-4461f6b9]{justify-content:center}.flex.start[data-v-4461f6b9]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-4461f6b9]{align-items:center}.flex.baseline[data-v-4461f6b9]{align-items:baseline}.flex.end[data-v-4461f6b9]{justify-content:flex-end}.flex.end.center[data-v-4461f6b9]{align-items:center}a[data-v-4461f6b9]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-4461f6b9]{display:none}}.onlyMobile[data-v-4461f6b9]{display:none}@media(max-width:768px){.onlyMobile[data-v-4461f6b9]{display:inline;display:initial}}.input-credential[data-v-4461f6b9]{display:flex;flex-direction:column;box-sizing:border-box;width:100%;padding:2% 0}@media(max-width:768px){.input-credential[data-v-4461f6b9]{padding:5% 0}}.input-credential.fullWidth[data-v-4461f6b9]{padding:2% 0}.input-credential .label[data-v-4461f6b9]{font-family:\"SF-Pro Bold\";color:#7f7f7f;text-transform:uppercase;font-size:10px;padding:2%;margin-left:5px;font-weight:900}.input-credential .input-box[data-v-4461f6b9]{position:relative;width:100%}.input-credential .input-box .country-code[data-v-4461f6b9]{position:absolute;width:15%;height:100%;display:flex;justify-content:center;align-items:center;font-family:\"SF-Pro\";border:1px solid #7f7f7f;background-color:#464646;color:#fff;font-size:13px}.input-credential .input-box .checked[data-v-4461f6b9]{position:absolute;width:15%;height:100%;right:0;top:0}.input-credential .input-box .checked img[data-v-4461f6b9]{height:20px;width:20px}.input-credential .input-box input[data-v-4461f6b9]::-webkit-inner-spin-button,.input-credential .input-box input[data-v-4461f6b9]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input-credential .input-box .field[data-v-4461f6b9]{width:100%;padding:10px 15px;border:none;-webkit-appearance:none;box-shadow:0 2px 10px rgba(0,0,0,.16);color:#7f7f7f;font-family:\"SF-Pro SemiBold\";letter-spacing:1px}.input-credential .input-box .field.fullWidth[data-v-4461f6b9]{box-sizing:border-box}.input-credential .input-box .field.uppercase[data-v-4461f6b9]{text-transform:uppercase}.input-credential .input-box .field.isMobileNumber[data-v-4461f6b9]{text-indent:16%}.input-credential .input-box .field.isUnlocker[data-v-4461f6b9]{font-size:50px;box-shadow:none;border-bottom:1px solid #efefef;text-align:center;box-sizing:content-box;padding:10px 0;height:50px;line-height:50px}.input-credential .input-box .field.isUnlocker[data-v-4461f6b9]::-moz-placeholder{font-size:1.7vw;color:#9d9d9d}.input-credential .input-box .field.isUnlocker[data-v-4461f6b9]:-ms-input-placeholder{font-size:1.7vw;color:#9d9d9d}.input-credential .input-box .field.isUnlocker[data-v-4461f6b9]::placeholder{font-size:1.7vw;color:#9d9d9d}@media(max-width:768px){.input-credential .input-box .field.isUnlocker[data-v-4461f6b9]{font-size:27px;height:27px;line-height:27px}.input-credential .input-box .field.isUnlocker[data-v-4461f6b9]::-moz-placeholder{font-size:27px;line-height:3.4vw}.input-credential .input-box .field.isUnlocker[data-v-4461f6b9]:-ms-input-placeholder{font-size:27px;line-height:3.4vw}.input-credential .input-box .field.isUnlocker[data-v-4461f6b9]::placeholder{font-size:27px;line-height:3.4vw}}.input-credential .input-box .field.textarea[data-v-4461f6b9]{height:200px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputCredential.vue?vue&type=template&id=4461f6b9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-credential",class:{fullWidth: _vm.fullWidth}},[_vm._ssrNode("<label class=\"label\" data-v-4461f6b9>"+_vm._ssrEscape(" "+_vm._s(_vm.label)+" ")+"</label> <div class=\"input-box\" data-v-4461f6b9>"+((_vm.isMobileNumber)?("<div class=\"country-code\" data-v-4461f6b9>"+_vm._ssrEscape("\n      "+_vm._s(_vm.countryDialCode)+"\n    ")+"</div>"):"<!---->")+" "+((_vm.checked)?("<div class=\"checked flex center\" data-v-4461f6b9><img src=\"/icons/simple_green_check.png\" data-v-4461f6b9></div>"):"<!---->")+" <input"+(_vm._ssrAttr("type",_vm.type))+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrClass("field",{ isMobileNumber: _vm.isMobileNumber, uppercase: _vm.uppercase, textarea: _vm.textarea, isUnlocker: _vm.isUnlocker, fullWidth: _vm.fullWidth }))+" data-v-4461f6b9></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InputCredential.vue?vue&type=template&id=4461f6b9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputCredential.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputCredentialvue_type_script_lang_js_ = ({
  props: {
    label: String,
    value: String,
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearError: {
      type: Boolean,
      default: true
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    isMobileNumber: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    isUnlocker: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    textarea: {
      type: Boolean,
      default: false
    },
    countryDialCode: String,
    error: {
      status: Boolean,
      msg: String
    }
  },

  data() {
    return {// value: ""
    };
  },

  methods: {
    emitInput($event) {
      this.$emit("input", $event.target.value);
      if (this.clearError && this.$parent.error !== undefined) this.$parent.error.status = false;
    }

  }
});
// CONCATENATED MODULE: ./components/InputCredential.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InputCredentialvue_type_script_lang_js_ = (InputCredentialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/InputCredential.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InputCredentialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4461f6b9",
  "7af7b967"
  
)

/* harmony default export */ var InputCredential = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

/* check if string is empty/blank */
String.prototype.isEmpty = function () {
  return this.trim() === "";
};
/* check if string has only alphabets */


String.prototype.hasOnlyAlphabets = function () {
  const regx = new RegExp("^[a-zA-Z ]+$");
  return regx.test(this);
};
/* check if string only has numbers */


String.prototype.hasOnlyNumbers = function () {
  return /^\d+$/.test(this);
};
/* check if string is a valid email address */


String.prototype.isValidEmail = function () {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this);
};

String.prototype.lengthIsLessThan = function (limit) {
  return this.length <= limit;
};

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(490);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("bc93c740", content, true, context)
};

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_0c4c00da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_0c4c00da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_0c4c00da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_0c4c00da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_0c4c00da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 490:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-0c4c00da]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-0c4c00da]{scroll-behavior:smooth}body[data-v-0c4c00da]{margin:0!important;padding:0}*[data-v-0c4c00da]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-0c4c00da]{padding:6%}button[data-v-0c4c00da]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-0c4c00da]{width:7%}button.sub-action[data-v-0c4c00da]{background-color:green}button.action[data-v-0c4c00da]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-0c4c00da]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-0c4c00da]{padding:2% 5%;width:100%}}button.action.delete[data-v-0c4c00da]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-0c4c00da]:hover{background-color:#e01010}button.small[data-v-0c4c00da]{font-size:11px;padding:1% 3%}button.clear[data-v-0c4c00da]{background:transparent;padding:2% 5%}h1[data-v-0c4c00da],h2[data-v-0c4c00da],h3[data-v-0c4c00da],h4[data-v-0c4c00da],h5[data-v-0c4c00da],h6[data-v-0c4c00da],p[data-v-0c4c00da],span[data-v-0c4c00da]{margin:0;padding:0;color:#333}.page[data-v-0c4c00da]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-0c4c00da]{margin-top:13vh;padding:7%}}.page.-wh[data-v-0c4c00da]{padding:0 0 5%}.page.side-pad[data-v-0c4c00da]{padding:2%}@media(max-width:768px){.page.-broad[data-v-0c4c00da]{padding:2%}}.page .page-header[data-v-0c4c00da]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-0c4c00da]{height:10vw}}.page .page-header .title[data-v-0c4c00da]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-0c4c00da]{font-size:5.4vw}}.page .side-pad[data-v-0c4c00da]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-0c4c00da]{padding:0 10%}}.pointer[data-v-0c4c00da]{cursor:pointer}.center[data-v-0c4c00da],.center-col[data-v-0c4c00da]{display:flex;justify-content:center;align-items:center}.center-col[data-v-0c4c00da]{flex-direction:column}.center-space[data-v-0c4c00da]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-0c4c00da]{position:relative}.white[data-v-0c4c00da]{color:#fff}.scrollable-list[data-v-0c4c00da]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-0c4c00da]{justify-content:center}}.scrollable-list[data-v-0c4c00da]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-0c4c00da]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-0c4c00da]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-0c4c00da]{margin-top:10px;width:50px}[data-v-0c4c00da]::-webkit-scrollbar{display:none}p.msg[data-v-0c4c00da]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-0c4c00da]{background-color:#a93737}p.msg.success[data-v-0c4c00da]{background-color:#319a67}.flex[data-v-0c4c00da]{display:flex}.flex.around[data-v-0c4c00da]{justify-content:space-around}.flex.between[data-v-0c4c00da]{justify-content:space-between}.flex.evenly[data-v-0c4c00da]{justify-content:space-evenly}.flex.col[data-v-0c4c00da]{flex-direction:column}.flex.wrap[data-v-0c4c00da]{flex-wrap:wrap}.flex.center[data-v-0c4c00da]{justify-content:center}.flex.center[data-v-0c4c00da],.flex.v-center[data-v-0c4c00da]{align-items:center}.flex.j-center[data-v-0c4c00da]{justify-content:center}.flex.start[data-v-0c4c00da]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-0c4c00da]{align-items:center}.flex.baseline[data-v-0c4c00da]{align-items:baseline}.flex.end[data-v-0c4c00da]{justify-content:flex-end}.flex.end.center[data-v-0c4c00da]{align-items:center}a[data-v-0c4c00da]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-0c4c00da]{display:none}}.onlyMobile[data-v-0c4c00da]{display:none}@media(max-width:768px){.onlyMobile[data-v-0c4c00da]{display:inline;display:initial}}@-webkit-keyframes toggleScale-data-v-0c4c00da{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}@keyframes toggleScale-data-v-0c4c00da{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}.whatsapp-box[data-v-0c4c00da]{-webkit-animation:toggleScale-data-v-0c4c00da 3s ease-in-out infinite;animation:toggleScale-data-v-0c4c00da 3s ease-in-out infinite;margin-bottom:10px;padding:5px 10px;background-color:#000;border-radius:10px}.whatsapp-box button[data-v-0c4c00da]{font-size:13px;background-color:#000;color:#fff}.whatsapp-box img[data-v-0c4c00da]{filter:brightness(200)}.wrapper .contact-form[data-v-0c4c00da]{width:50%}.wrapper .fields[data-v-0c4c00da]{width:100%}.wrapper .address[data-v-0c4c00da]{width:50%;padding:0 10%}.wrapper .address h2[data-v-0c4c00da]{margin-bottom:10px;text-align:center;font-size:23px}.wrapper .address p[data-v-0c4c00da]{text-align:center;font-family:\"SF-Pro\";margin:3px 0}@media(max-width:768px){.wrapper[data-v-0c4c00da]{flex-direction:column}.wrapper .contact-form[data-v-0c4c00da]{width:100%;margin-bottom:20px}.wrapper .address[data-v-0c4c00da]{width:100%;padding:0 5%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=template&id=0c4c00da&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._ssrNode("<div class=\"wrapper flex\" data-v-0c4c00da>","</div>",[_vm._ssrNode("<div class=\"contact-form flex col center\" data-v-0c4c00da>","</div>",[_vm._ssrNode("<a href=\"https://wa.me/919103077655?text=Hi! Could you help me with a few queries!\" target=\"_blank\" data-v-0c4c00da><div class=\"center glow-on-hover whatsapp-box\" style=\"gap: 10px;\" data-v-0c4c00da><img src=\"/icons/light/whatsapp-aa.svg\" class=\"action-icon whatsapp\" data-v-0c4c00da> <button data-v-0c4c00da>How may I help you?</button></div></a> <h2 data-v-0c4c00da>Or</h2> <h2 data-v-0c4c00da>Write to us</h2> <br data-v-0c4c00da> "),_vm._ssrNode("<div class=\"flex fields\" style=\"gap: 10px;\" data-v-0c4c00da>","</div>",[_c('InputCredential',{attrs:{"label":"First Name","clearError":true},model:{value:(_vm.firstName),callback:function ($$v) {_vm.firstName=$$v},expression:"firstName"}}),_vm._ssrNode(" "),_c('InputCredential',{attrs:{"label":"Surname","clearError":true},model:{value:(_vm.surName),callback:function ($$v) {_vm.surName=$$v},expression:"surName"}})],2),_vm._ssrNode(" "),_c('InputCredential',{attrs:{"label":"Subject","clearError":true},model:{value:(_vm.subject),callback:function ($$v) {_vm.subject=$$v},expression:"subject"}}),_vm._ssrNode(" "),_c('InputCredential',{attrs:{"label":"Email","clearError":true},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._ssrNode(" "),_c('TextBox',{attrs:{"label":"Message","nonAdmin":true},model:{value:(_vm.message),callback:function ($$v) {_vm.message=$$v},expression:"message"}}),_vm._ssrNode(" "+((_vm.error.status)?("<p class=\"msg error\" data-v-0c4c00da>"+_vm._ssrEscape(_vm._s(_vm.error.msg))+"</p>"):"<!---->")+" <button class=\"action\" data-v-0c4c00da>Send Message</button>")],2),_vm._ssrNode(" <div class=\"address flex center col\" data-v-0c4c00da><h2 data-v-0c4c00da>Reach us | Appointments</h2> <p data-v-0c4c00da>\n        H-30 Integrated Textile and Handicraft Park Zakura, Srinagar, Jammu\n        and Kashmir, India, 190024\n      </p> <a href=\"mailto:care@bounipun.in\" data-v-0c4c00da><p data-v-0c4c00da>care@bounipun.in</p></a> <a href=\"tel:+919103077655\" data-v-0c4c00da><p data-v-0c4c00da>+91-91030-77655</p></a> <a href=\"tel:+917889777377\" data-v-0c4c00da><p data-v-0c4c00da>+91-78897-77377</p></a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=template&id=0c4c00da&scoped=true&

// EXTERNAL MODULE: ./helpers/validate.js
var validate = __webpack_require__(200);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var contact_usvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Contact Us - Bounipun Kashmir | Luxury Store | Shawls, Stoles and Squares"
    };
  },

  data() {
    return {
      firstName: "",
      surName: "",
      subject: "",
      email: "",
      message: "",
      error: {
        status: false,
        msg: ""
      }
    };
  },

  methods: {
    setError(flag, msg) {
      this.error = {
        status: flag,
        msg
      };
    },

    validateForm() {
      /* check for blank fields */
      const anyBlankField = this.firstName.trim() === "" || this.surName.trim() === "" || this.subject.trim() === "" || this.email.trim() === "" || this.message.trim() === "";
      /* if blank field found */

      if (anyBlankField) {
        this.setError(true, "No field can be left blank");
        return false;
      }
      /* name should only consist of alphabets */


      const nameValidated = this.firstName.hasOnlyAlphabets() && this.surName.hasOnlyAlphabets();

      if (!nameValidated) {
        this.setError(true, "Name can only consist of numbers");
        return false;
      }
      /* email should be in correct format */


      const emailValidated = this.email.isValidEmail();

      if (!emailValidated) {
        this.setError(true, "Please enter a valid email address");
        return false;
      }

      return true;
    },

    async sendMessage() {
      if (!this.validateForm()) return;
      const {
        response,
        resolved
      } = await this.$post("/sendMessage", {
        name: this.firstName + " " + this.surName,
        subject: this.subject,
        email: this.email,
        message: this.message
      });
      /* if req not resolved */

      if (resolved === false) {
        console.log("message not sent");
        return;
      }

      this.$router.push("/message-sent");
    }

  }
});
// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contact_usvue_type_script_lang_js_ = (contact_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact-us.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(489)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0c4c00da",
  "58941315"
  
)

/* harmony default export */ var contact_us = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputCredential: __webpack_require__(173).default,TextBox: __webpack_require__(124).default})


/***/ })

};;
//# sourceMappingURL=contact-us.js.map
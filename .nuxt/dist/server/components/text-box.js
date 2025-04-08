exports.ids = [58];
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


/***/ })

};;
//# sourceMappingURL=text-box.js.map
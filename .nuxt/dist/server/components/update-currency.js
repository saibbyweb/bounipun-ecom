exports.ids = [71,9,34,36,58,60];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3e2dcfc0", content, true, context)
};

/***/ }),

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

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0abc8124", content, true, context)
};

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("02f33826", content, true, context)
};

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/input/InputBox.vue?vue&type=template&id=2cb105c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-box",class:{slim: _vm.slim},style:(_vm.css)},[_vm._ssrNode("<div style=\"display: flex; align-items: center\" data-v-2cb105c8>"+((_vm.internal)?("<div class=\"internal\" data-v-2cb105c8></div>"):"<!---->")+" <label"+(_vm._ssrAttr("title",_vm.options && _vm.options.title ? _vm.options.title : ''))+" class=\"label\" data-v-2cb105c8>"+_vm._ssrEscape(" "+_vm._s(_vm.label)+" ")+"</label></div> <input"+(_vm._ssrAttr("type",_vm.type))+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrClass("input-box",{ uppercase: _vm.uppercase }))+" data-v-2cb105c8> "+((_vm.options && _vm.options.indicator)?("<span"+(_vm._ssrClass("indicator",_vm.isBounipunUrl(_vm.value) ? 'bounipunUrl' : 'externalLink'))+" data-v-2cb105c8>"+_vm._ssrEscape("\n    "+_vm._s(_vm.isBounipunUrl(_vm.value) ? '✅ Bounipun URL' : 'External Link')+"\n  ")+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/input/InputBox.vue?vue&type=template&id=2cb105c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/input/InputBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputBoxvue_type_script_lang_js_ = ({
  props: {
    label: String,
    value: String | Number,
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    internal: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object
    },
    css: {
      type: Object
    },
    slim: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isBounipunUrl(s) {
      if (s === undefined || s === null || s === "") return false;
      return s.includes('bounipun.in');
    }

  }
});
// CONCATENATED MODULE: ./components/admin/input/InputBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_InputBoxvue_type_script_lang_js_ = (InputBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/input/InputBox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_InputBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2cb105c8",
  "c1f21460"
  
)

/* harmony default export */ var InputBox = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBox_vue_vue_type_style_index_0_id_2cb105c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBox_vue_vue_type_style_index_0_id_2cb105c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBox_vue_vue_type_style_index_0_id_2cb105c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBox_vue_vue_type_style_index_0_id_2cb105c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputBox_vue_vue_type_style_index_0_id_2cb105c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 123:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-2cb105c8]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-2cb105c8]{scroll-behavior:smooth}body[data-v-2cb105c8]{margin:0!important;padding:0}*[data-v-2cb105c8]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-2cb105c8]{padding:6%}button[data-v-2cb105c8]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-2cb105c8]{width:7%}button.sub-action[data-v-2cb105c8]{background-color:green}button.action[data-v-2cb105c8]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-2cb105c8]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-2cb105c8]{padding:2% 5%;width:100%}}button.action.delete[data-v-2cb105c8]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-2cb105c8]:hover{background-color:#e01010}button.small[data-v-2cb105c8]{font-size:11px;padding:1% 3%}button.clear[data-v-2cb105c8]{background:transparent;padding:2% 5%}h1[data-v-2cb105c8],h2[data-v-2cb105c8],h3[data-v-2cb105c8],h4[data-v-2cb105c8],h5[data-v-2cb105c8],h6[data-v-2cb105c8],p[data-v-2cb105c8],span[data-v-2cb105c8]{margin:0;padding:0;color:#333}.page[data-v-2cb105c8]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-2cb105c8]{margin-top:13vh;padding:7%}}.page.-wh[data-v-2cb105c8]{padding:0 0 5%}.page.side-pad[data-v-2cb105c8]{padding:2%}@media(max-width:768px){.page.-broad[data-v-2cb105c8]{padding:2%}}.page .page-header[data-v-2cb105c8]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-2cb105c8]{height:10vw}}.page .page-header .title[data-v-2cb105c8]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-2cb105c8]{font-size:5.4vw}}.page .side-pad[data-v-2cb105c8]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-2cb105c8]{padding:0 10%}}.pointer[data-v-2cb105c8]{cursor:pointer}.center[data-v-2cb105c8],.center-col[data-v-2cb105c8]{display:flex;justify-content:center;align-items:center}.center-col[data-v-2cb105c8]{flex-direction:column}.center-space[data-v-2cb105c8]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-2cb105c8]{position:relative}.white[data-v-2cb105c8]{color:#fff}.scrollable-list[data-v-2cb105c8]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-2cb105c8]{justify-content:center}}.scrollable-list[data-v-2cb105c8]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-2cb105c8]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-2cb105c8]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-2cb105c8]{margin-top:10px;width:50px}[data-v-2cb105c8]::-webkit-scrollbar{display:none}p.msg[data-v-2cb105c8]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-2cb105c8]{background-color:#a93737}p.msg.success[data-v-2cb105c8]{background-color:#319a67}.flex[data-v-2cb105c8]{display:flex}.flex.around[data-v-2cb105c8]{justify-content:space-around}.flex.between[data-v-2cb105c8]{justify-content:space-between}.flex.evenly[data-v-2cb105c8]{justify-content:space-evenly}.flex.col[data-v-2cb105c8]{flex-direction:column}.flex.wrap[data-v-2cb105c8]{flex-wrap:wrap}.flex.center[data-v-2cb105c8]{justify-content:center}.flex.center[data-v-2cb105c8],.flex.v-center[data-v-2cb105c8]{align-items:center}.flex.j-center[data-v-2cb105c8]{justify-content:center}.flex.start[data-v-2cb105c8]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-2cb105c8]{align-items:center}.flex.baseline[data-v-2cb105c8]{align-items:baseline}.flex.end[data-v-2cb105c8]{justify-content:flex-end}.flex.end.center[data-v-2cb105c8]{align-items:center}a[data-v-2cb105c8]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-2cb105c8]{display:none}}.onlyMobile[data-v-2cb105c8]{display:none}@media(max-width:768px){.onlyMobile[data-v-2cb105c8]{display:inline;display:initial}}.input-box[data-v-2cb105c8]{display:flex;flex-direction:column;box-sizing:border-box;padding:2%;width:100%;position:relative}.input-box.slim[data-v-2cb105c8]{padding:5px}.input-box[data-v-2cb105c8]:focus{border:1px solid rgba(0,128,0,.705)!important}.input-box .internal[data-v-2cb105c8]{height:10px;width:10px;background-color:#1690dc}.input-box .indicator[data-v-2cb105c8]{font-size:9px;position:absolute;top:15%;right:3%;padding:2px 5px}.input-box .indicator.bounipunUrl[data-v-2cb105c8]{color:green}.input-box .label[data-v-2cb105c8]{font-family:\"SF-Pro Bold\";color:#7f7f7f;text-transform:uppercase;font-size:9px;padding:5px;margin-left:5px;font-weight:900}.input-box .input-box[data-v-2cb105c8]{padding:10px;border:none;-webkit-appearance:none;box-shadow:0 2px 10px rgba(0,0,0,.16);color:#7f7f7f;font-family:\"SF-Pro\";font-size:11px;letter-spacing:.5px}.input-box .input-box.uppercase[data-v-2cb105c8]{text-transform:uppercase}.input-box .input-box[data-v-2cb105c8]::-moz-placeholder{font-size:11px;opacity:.6}.input-box .input-box[data-v-2cb105c8]:-ms-input-placeholder{font-size:11px;opacity:.6}.input-box .input-box[data-v-2cb105c8]::placeholder{font-size:11px;opacity:.6}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/input/toggle.vue?vue&type=template&id=084fb2d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-box"},[_vm._ssrNode("<label class=\"label\""+(_vm._ssrStyle(null,_vm.labelCSS, null))+" data-v-084fb2d6>"+_vm._ssrEscape(" "+_vm._s(_vm.label)+" :")+"</label> "+((!_vm.disabled)?("<div"+(_vm._ssrClass("switch-box center",{ on: _vm.value }))+(_vm._ssrStyle(null,{ width: _vm.width, pointerEvents: _vm.disabled ? 'none' : '' }, null))+" data-v-084fb2d6><div"+(_vm._ssrClass("toggle center",{ on: _vm.value }))+" data-v-084fb2d6><div class=\"circle\" data-v-084fb2d6></div></div> <span"+(_vm._ssrClass(null,{ on: _vm.value }))+" data-v-084fb2d6>"+_vm._ssrEscape("\n      "+_vm._s(_vm.value ? _vm.activeText : _vm.inactiveText)+"\n    ")+"</span></div>"):"<!---->")+" "+((_vm.disabled)?("<span"+(_vm._ssrClass(null,{ on: _vm.value }))+" data-v-084fb2d6>"+_vm._ssrEscape("\n    "+_vm._s(_vm.value ? _vm.activeText : _vm.inactiveText)+"\n  ")+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/input/toggle.vue?vue&type=template&id=084fb2d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/input/toggle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var togglevue_type_script_lang_js_ = ({
  props: {
    label: String,
    value: Boolean,
    activeText: {
      type: String,
      default: "Active"
    },
    inactiveText: {
      type: String,
      default: "Inactive"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "120px"
    },
    labelCSS: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      toggleOn: false
    };
  },

  methods: {
    toggleState() {
      this.toggleOn = !this.value;
      this.$emit("input", this.toggleOn);
    }

  }
});
// CONCATENATED MODULE: ./components/admin/input/toggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_togglevue_type_script_lang_js_ = (togglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/input/toggle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_togglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "084fb2d6",
  "694d88ba"
  
)

/* harmony default export */ var toggle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toggle_vue_vue_type_style_index_0_id_084fb2d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toggle_vue_vue_type_style_index_0_id_084fb2d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toggle_vue_vue_type_style_index_0_id_084fb2d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toggle_vue_vue_type_style_index_0_id_084fb2d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toggle_vue_vue_type_style_index_0_id_084fb2d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 131:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-084fb2d6]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-084fb2d6]{scroll-behavior:smooth}body[data-v-084fb2d6]{margin:0!important;padding:0}*[data-v-084fb2d6]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-084fb2d6]{padding:6%}button[data-v-084fb2d6]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-084fb2d6]{width:7%}button.sub-action[data-v-084fb2d6]{background-color:green}button.action[data-v-084fb2d6]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-084fb2d6]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-084fb2d6]{padding:2% 5%;width:100%}}button.action.delete[data-v-084fb2d6]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-084fb2d6]:hover{background-color:#e01010}button.small[data-v-084fb2d6]{font-size:11px;padding:1% 3%}button.clear[data-v-084fb2d6]{background:transparent;padding:2% 5%}h1[data-v-084fb2d6],h2[data-v-084fb2d6],h3[data-v-084fb2d6],h4[data-v-084fb2d6],h5[data-v-084fb2d6],h6[data-v-084fb2d6],p[data-v-084fb2d6],span[data-v-084fb2d6]{margin:0;padding:0;color:#333}.page[data-v-084fb2d6]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-084fb2d6]{margin-top:13vh;padding:7%}}.page.-wh[data-v-084fb2d6]{padding:0 0 5%}.page.side-pad[data-v-084fb2d6]{padding:2%}@media(max-width:768px){.page.-broad[data-v-084fb2d6]{padding:2%}}.page .page-header[data-v-084fb2d6]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-084fb2d6]{height:10vw}}.page .page-header .title[data-v-084fb2d6]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-084fb2d6]{font-size:5.4vw}}.page .side-pad[data-v-084fb2d6]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-084fb2d6]{padding:0 10%}}.pointer[data-v-084fb2d6]{cursor:pointer}.center[data-v-084fb2d6],.center-col[data-v-084fb2d6]{display:flex;justify-content:center;align-items:center}.center-col[data-v-084fb2d6]{flex-direction:column}.center-space[data-v-084fb2d6]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-084fb2d6]{position:relative}.white[data-v-084fb2d6]{color:#fff}.scrollable-list[data-v-084fb2d6]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-084fb2d6]{justify-content:center}}.scrollable-list[data-v-084fb2d6]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-084fb2d6]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-084fb2d6]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-084fb2d6]{margin-top:10px;width:50px}[data-v-084fb2d6]::-webkit-scrollbar{display:none}p.msg[data-v-084fb2d6]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-084fb2d6]{background-color:#a93737}p.msg.success[data-v-084fb2d6]{background-color:#319a67}.flex[data-v-084fb2d6]{display:flex}.flex.around[data-v-084fb2d6]{justify-content:space-around}.flex.between[data-v-084fb2d6]{justify-content:space-between}.flex.evenly[data-v-084fb2d6]{justify-content:space-evenly}.flex.col[data-v-084fb2d6]{flex-direction:column}.flex.wrap[data-v-084fb2d6]{flex-wrap:wrap}.flex.center[data-v-084fb2d6]{justify-content:center}.flex.center[data-v-084fb2d6],.flex.v-center[data-v-084fb2d6]{align-items:center}.flex.j-center[data-v-084fb2d6]{justify-content:center}.flex.start[data-v-084fb2d6]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-084fb2d6]{align-items:center}.flex.baseline[data-v-084fb2d6]{align-items:baseline}.flex.end[data-v-084fb2d6]{justify-content:flex-end}.flex.end.center[data-v-084fb2d6]{align-items:center}a[data-v-084fb2d6]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-084fb2d6]{display:none}}.onlyMobile[data-v-084fb2d6]{display:none}@media(max-width:768px){.onlyMobile[data-v-084fb2d6]{display:inline;display:initial}}.input-box[data-v-084fb2d6]{display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;padding:2%;width:100%}.input-box .switch-box[data-v-084fb2d6]{box-shadow:1px 1px 15px rgba(0,0,0,.16);display:flex;transition:all .3s ease-in-out;position:relative;background:#be4f4f;border-radius:3px;cursor:pointer;padding:5px}.input-box .switch-box.on[data-v-084fb2d6]{background:#41a641;transform:translateZ(10px)}.input-box .switch-box .toggle[data-v-084fb2d6]{position:absolute;top:0;left:0;width:22%;height:100%;transition:all .15s ease-in-out}.input-box .switch-box .toggle .circle[data-v-084fb2d6]{background:#fff;width:12px;height:12px}.input-box .switch-box .toggle.on[data-v-084fb2d6]{left:78%}.input-box .switch-box .toggle.on .circle[data-v-084fb2d6]{background:#fff;width:13px;height:13px;border-radius:50%}.input-box .switch-box span[data-v-084fb2d6]{color:#fff;font-size:13px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .15s ease-in-out;margin-left:15px}.input-box .switch-box span.on[data-v-084fb2d6]{margin-right:25px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelUpdate_vue_vue_type_style_index_0_id_756c3226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelUpdate_vue_vue_type_style_index_0_id_756c3226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelUpdate_vue_vue_type_style_index_0_id_756c3226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelUpdate_vue_vue_type_style_index_0_id_756c3226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelUpdate_vue_vue_type_style_index_0_id_756c3226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 133:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-756c3226]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-756c3226]{scroll-behavior:smooth}body[data-v-756c3226]{margin:0!important;padding:0}*[data-v-756c3226]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-756c3226]{padding:6%}button[data-v-756c3226]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-756c3226]{width:7%}button.sub-action[data-v-756c3226]{background-color:green}button.action[data-v-756c3226]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-756c3226]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-756c3226]{padding:2% 5%;width:100%}}button.action.delete[data-v-756c3226]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-756c3226]:hover{background-color:#e01010}button.small[data-v-756c3226]{font-size:11px;padding:1% 3%}button.clear[data-v-756c3226]{background:transparent;padding:2% 5%}h1[data-v-756c3226],h2[data-v-756c3226],h3[data-v-756c3226],h4[data-v-756c3226],h5[data-v-756c3226],h6[data-v-756c3226],p[data-v-756c3226],span[data-v-756c3226]{margin:0;padding:0;color:#333}.page[data-v-756c3226]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-756c3226]{margin-top:13vh;padding:7%}}.page.-wh[data-v-756c3226]{padding:0 0 5%}.page.side-pad[data-v-756c3226]{padding:2%}@media(max-width:768px){.page.-broad[data-v-756c3226]{padding:2%}}.page .page-header[data-v-756c3226]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-756c3226]{height:10vw}}.page .page-header .title[data-v-756c3226]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-756c3226]{font-size:5.4vw}}.page .side-pad[data-v-756c3226]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-756c3226]{padding:0 10%}}.pointer[data-v-756c3226]{cursor:pointer}.center[data-v-756c3226],.center-col[data-v-756c3226]{display:flex;justify-content:center;align-items:center}.center-col[data-v-756c3226]{flex-direction:column}.center-space[data-v-756c3226]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-756c3226]{position:relative}.white[data-v-756c3226]{color:#fff}.scrollable-list[data-v-756c3226]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-756c3226]{justify-content:center}}.scrollable-list[data-v-756c3226]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-756c3226]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-756c3226]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-756c3226]{margin-top:10px;width:50px}[data-v-756c3226]::-webkit-scrollbar{display:none}p.msg[data-v-756c3226]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-756c3226]{background-color:#a93737}p.msg.success[data-v-756c3226]{background-color:#319a67}.flex[data-v-756c3226]{display:flex}.flex.around[data-v-756c3226]{justify-content:space-around}.flex.between[data-v-756c3226]{justify-content:space-between}.flex.evenly[data-v-756c3226]{justify-content:space-evenly}.flex.col[data-v-756c3226]{flex-direction:column}.flex.wrap[data-v-756c3226]{flex-wrap:wrap}.flex.center[data-v-756c3226]{justify-content:center}.flex.center[data-v-756c3226],.flex.v-center[data-v-756c3226]{align-items:center}.flex.j-center[data-v-756c3226]{justify-content:center}.flex.start[data-v-756c3226]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-756c3226]{align-items:center}.flex.baseline[data-v-756c3226]{align-items:baseline}.flex.end[data-v-756c3226]{justify-content:flex-end}.flex.end.center[data-v-756c3226]{align-items:center}a[data-v-756c3226]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-756c3226]{display:none}}.onlyMobile[data-v-756c3226]{display:none}@media(max-width:768px){.onlyMobile[data-v-756c3226]{display:inline;display:initial}}.cancel-update:hover img[data-v-756c3226]{width:40px}.cancel-update img[data-v-756c3226]{transition:all .3s ease-in-out;width:35px;cursor:pointer;filter:invert(1)}.cancel-update span[data-v-756c3226]{font-size:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/CancelUpdate.vue?vue&type=template&id=756c3226&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cancel-update center"},[_vm._ssrNode("<img src=\"/icons/dark/minus.png\" data-v-756c3226>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/CancelUpdate.vue?vue&type=template&id=756c3226&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/CancelUpdate.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "756c3226",
  "54a14526"
  
)

/* harmony default export */ var CancelUpdate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("26d7c5ff", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlider_vue_vue_type_style_index_0_id_752ea857_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlider_vue_vue_type_style_index_0_id_752ea857_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlider_vue_vue_type_style_index_0_id_752ea857_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlider_vue_vue_type_style_index_0_id_752ea857_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlider_vue_vue_type_style_index_0_id_752ea857_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 187:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-752ea857]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-752ea857]{scroll-behavior:smooth}body[data-v-752ea857]{margin:0!important;padding:0}*[data-v-752ea857]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-752ea857]{padding:6%}button[data-v-752ea857]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-752ea857]{width:7%}button.sub-action[data-v-752ea857]{background-color:green}button.action[data-v-752ea857]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-752ea857]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-752ea857]{padding:2% 5%;width:100%}}button.action.delete[data-v-752ea857]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-752ea857]:hover{background-color:#e01010}button.small[data-v-752ea857]{font-size:11px;padding:1% 3%}button.clear[data-v-752ea857]{background:transparent;padding:2% 5%}h1[data-v-752ea857],h2[data-v-752ea857],h3[data-v-752ea857],h4[data-v-752ea857],h5[data-v-752ea857],h6[data-v-752ea857],p[data-v-752ea857],span[data-v-752ea857]{margin:0;padding:0;color:#333}.page[data-v-752ea857]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-752ea857]{margin-top:13vh;padding:7%}}.page.-wh[data-v-752ea857]{padding:0 0 5%}.page.side-pad[data-v-752ea857]{padding:2%}@media(max-width:768px){.page.-broad[data-v-752ea857]{padding:2%}}.page .page-header[data-v-752ea857]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-752ea857]{height:10vw}}.page .page-header .title[data-v-752ea857]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-752ea857]{font-size:5.4vw}}.page .side-pad[data-v-752ea857]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-752ea857]{padding:0 10%}}.pointer[data-v-752ea857]{cursor:pointer}.center[data-v-752ea857],.center-col[data-v-752ea857]{display:flex;justify-content:center;align-items:center}.center-col[data-v-752ea857]{flex-direction:column}.center-space[data-v-752ea857]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-752ea857]{position:relative}.white[data-v-752ea857]{color:#fff}.scrollable-list[data-v-752ea857]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-752ea857]{justify-content:center}}.scrollable-list[data-v-752ea857]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-752ea857]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-752ea857]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-752ea857]{margin-top:10px;width:50px}[data-v-752ea857]::-webkit-scrollbar{display:none}p.msg[data-v-752ea857]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-752ea857]{background-color:#a93737}p.msg.success[data-v-752ea857]{background-color:#319a67}.flex[data-v-752ea857]{display:flex}.flex.around[data-v-752ea857]{justify-content:space-around}.flex.between[data-v-752ea857]{justify-content:space-between}.flex.evenly[data-v-752ea857]{justify-content:space-evenly}.flex.col[data-v-752ea857]{flex-direction:column}.flex.wrap[data-v-752ea857]{flex-wrap:wrap}.flex.center[data-v-752ea857]{justify-content:center}.flex.center[data-v-752ea857],.flex.v-center[data-v-752ea857]{align-items:center}.flex.j-center[data-v-752ea857]{justify-content:center}.flex.start[data-v-752ea857]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-752ea857]{align-items:center}.flex.baseline[data-v-752ea857]{align-items:baseline}.flex.end[data-v-752ea857]{justify-content:flex-end}.flex.end.center[data-v-752ea857]{align-items:center}a[data-v-752ea857]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-752ea857]{display:none}}.onlyMobile[data-v-752ea857]{display:none}@media(max-width:768px){.onlyMobile[data-v-752ea857]{display:inline;display:initial}}.range-slider[data-v-752ea857]{width:100%}.fade-out[data-v-752ea857]{opacity:.3}.label[data-v-752ea857]{font-size:14px}.slider[data-v-752ea857]{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:6px;background:#d3d3d3;outline:none;opacity:.7;transition:opacity .2s}.slider[data-v-752ea857]:hover{opacity:1}.slider[data-v-752ea857]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:15px;height:15px;background:#0c8357;cursor:pointer;border-radius:10px}.alternate-input[data-v-752ea857]{width:80px;border:none;padding:2px 5px;font-size:16px;color:#0c8357;margin-right:10px;font-family:\"SF-Pro Bold\";text-align:center}input[data-v-752ea857]::-webkit-inner-spin-button,input[data-v-752ea857]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputSlider.vue?vue&type=template&id=752ea857&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['range-slider', {'fade-out': _vm.disabled}]},[_vm._ssrNode("<label class=\"label\" data-v-752ea857>"+_vm._ssrEscape(" "+_vm._s(_vm.label)+" ")+"</label> <div class=\"pad-10 flex center col\" data-v-752ea857><input"+(_vm._ssrAttr("disabled",_vm.disabled))+" type=\"range\""+(_vm._ssrAttr("min",_vm.min))+(_vm._ssrAttr("max",_vm.max))+(_vm._ssrAttr("step",_vm.step))+" id=\"myRange\""+(_vm._ssrAttr("value",_vm.value))+" class=\"slider\""+(_vm._ssrStyle(null,_vm.getStyles(_vm.percentage), null))+" data-v-752ea857> <div class=\"flex\" data-v-752ea857><input"+(_vm._ssrAttr("disabled",_vm.disabled))+" type=\"number\""+(_vm._ssrAttr("value",_vm.value))+" class=\"alternate-input shadow\" data-v-752ea857>"+_vm._ssrEscape(_vm._s(_vm.unit)+"\n    ")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InputSlider.vue?vue&type=template&id=752ea857&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputSlider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputSlidervue_type_script_lang_js_ = ({
  props: {
    label: String,
    value: Number,
    unit: {
      type: String,
      default: "%"
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 200
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    percentage() {
      const percentage = (this.value - this.min) / (this.max - this.min) * 100;
      return percentage;
    }

  },
  methods: {
    getStyles(percentage) {
      return {
        backgroundImage: `linear-gradient(90deg, #4CAF50 ${percentage}%, transparent ${percentage}%)`
      };
    }

  }
});
// CONCATENATED MODULE: ./components/InputSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InputSlidervue_type_script_lang_js_ = (InputSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/InputSlider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InputSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "752ea857",
  "37f4b0f1"
  
)

/* harmony default export */ var InputSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/currencies/UpdateCurrency.vue?vue&type=template&id=61cda918&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contents"},[_c('CancelUpdate',{on:{"close":_vm.closeForm}}),_vm._ssrNode(" <h2 class=\"heading\">"+_vm._ssrEscape(_vm._s(_vm.editMode ? "Update" : "Add New")+" Currency")+"</h2> "),(_vm.editMode)?_c('InputBox',{attrs:{"label":"Currency ID","disbaled":"","internal":true},model:{value:(_vm.doc._id),callback:function ($$v) {_vm.$set(_vm.doc, "_id", $$v)},expression:"doc._id"}}):_vm._e(),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Currency Name"},model:{value:(_vm.doc.name),callback:function ($$v) {_vm.$set(_vm.doc, "name", $$v)},expression:"doc.name"}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Code"},model:{value:(_vm.doc.code),callback:function ($$v) {_vm.$set(_vm.doc, "code", $$v)},expression:"doc.code"}}),_vm._ssrNode(" "),_c('InputSlider',{attrs:{"label":"DExchange Rate (INR)","unit":"INR","min":0,"max":250},model:{value:(_vm.doc.exchangeRateINR),callback:function ($$v) {_vm.$set(_vm.doc, "exchangeRateINR", $$v)},expression:"doc.exchangeRateINR"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Zero Decimal:"},model:{value:(_vm.doc.zeroDecimal),callback:function ($$v) {_vm.$set(_vm.doc, "zeroDecimal", $$v)},expression:"doc.zeroDecimal"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Admin Enabled:"},model:{value:(_vm.doc.adminEnabled),callback:function ($$v) {_vm.$set(_vm.doc, "adminEnabled", $$v)},expression:"doc.adminEnabled"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Client Enabled:"},model:{value:(_vm.doc.clientEnabled),callback:function ($$v) {_vm.$set(_vm.doc, "clientEnabled", $$v)},expression:"doc.clientEnabled"}}),_vm._ssrNode(" "),_c('InputSlider',{attrs:{"label":"Default Inflation Percentage (for outside India)"},model:{value:(_vm.doc.defaultInflationPercentage),callback:function ($$v) {_vm.$set(_vm.doc, "defaultInflationPercentage", $$v)},expression:"doc.defaultInflationPercentage"}}),_vm._ssrNode(" "),_c('TextBox',{attrs:{"label":"Description"},model:{value:(_vm.doc.description),callback:function ($$v) {_vm.$set(_vm.doc, "description", $$v)},expression:"doc.description"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Status:"},model:{value:(_vm.doc.status),callback:function ($$v) {_vm.$set(_vm.doc, "status", $$v)},expression:"doc.status"}}),_vm._ssrNode(" <div class=\"center-space\">"+((_vm.loading)?("<img src=\"/loading.gif\" class=\"loading\">"):"<!---->")+" "+((_vm.updated)?("<img src=\"/complete.gif\" class=\"action-complete\">"):"<!---->")+" <button"+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"action\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.editMode ? "Edit" : "Add")+" Currency\n    ")+"</button> "+((_vm.editMode)?("<button"+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"action delete\">\n      Delete\n    </button>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/currencies/UpdateCurrency.vue?vue&type=template&id=61cda918&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/currencies/UpdateCurrency.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* base doc */
const baseDoc = () => ({
  _id: "",
  name: "",
  code: "",
  exchangeRateINR: 0,
  zeroDecimal: false,
  adminEnabled: false,
  clientEnabled: false,
  defaultInflationPercentage: 20,
  description: "",
  status: false
});

/* harmony default export */ var UpdateCurrencyvue_type_script_lang_js_ = ({
  props: {
    model: String
  },

  data() {
    return {
      editMode: false,
      doc: baseDoc(),
      loading: false,
      updated: false
    };
  },

  methods: {
    async updateDocument() {
      this.loading = true;
      const result = await this.$updateDocument(this.model, this.doc, this.editMode);
      this.loading = false;
      if (!result.updated) return;
      this.$emit("updated");
      this.populateForm(result.doc);
      this.$flash(this);
    },

    async deleteDocument() {
      this.loading = true;
      const result = await this.$deleteDocument(this.model, this.doc._id);
      this.loading = false;
      if (!result.deleted) return;
      this.$emit("updated");
      this.resetForm();
      this.$flash(this);
    },

    populateForm(details) {
      const {
        _id,
        name,
        code,
        exchangeRateINR,
        zeroDecimal,
        adminEnabled,
        clientEnabled,
        defaultInflationPercentage,
        description,
        status
      } = details;
      this.doc = {
        _id,
        name,
        code,
        exchangeRateINR,
        zeroDecimal,
        adminEnabled,
        clientEnabled,
        defaultInflationPercentage,
        description,
        status
      };

      if (typeof defaultInflationPercentage === 'String') {
        this.doc.defaultInflationPercentage = parseInt(defaultInflationPercentage);
      }

      this.editMode = true;
    },

    closeForm() {
      this.resetForm();
      this.$emit("close");
    },

    resetForm() {
      this.populateForm(baseDoc());
      this.editMode = false;
    }

  }
});
// CONCATENATED MODULE: ./components/admin/currencies/UpdateCurrency.vue?vue&type=script&lang=js&
 /* harmony default export */ var currencies_UpdateCurrencyvue_type_script_lang_js_ = (UpdateCurrencyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/currencies/UpdateCurrency.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  currencies_UpdateCurrencyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "546c1040"
  
)

/* harmony default export */ var UpdateCurrency = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CancelUpdate: __webpack_require__(134).default,InputBox: __webpack_require__(121).default,InputSlider: __webpack_require__(190).default,Toggle: __webpack_require__(129).default,TextBox: __webpack_require__(124).default})


/***/ })

};;
//# sourceMappingURL=update-currency.js.map
exports.ids = [74,9,34,55,58,60,90,91];
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

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7aff5c06", content, true, context)
};

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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/input/selectBox.vue?vue&type=template&id=f39cb778&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-box",class:{ slim: _vm.slim },style:(_vm.slim ? {flexDirection: 'column'} : {})},[_vm._ssrNode("<div style=\"display: flex; align-items: center; width: 50%\" data-v-f39cb778>"+((_vm.internal)?("<div class=\"internal\" data-v-f39cb778></div>"):"<!---->")+" "+((_vm.label !== undefined)?("<label class=\"label\" data-v-f39cb778>"+_vm._ssrEscape(" "+_vm._s(_vm.label)+" ")+"</label>"):"<!---->")+"</div> <select"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrClass("select shadow",{ slim: _vm.slim }))+" data-v-f39cb778>"+(_vm._ssrList((_vm.options),function(option,index){return ("<option"+(_vm._ssrAttr("value",option.value))+" data-v-f39cb778>"+_vm._ssrEscape("\n      "+_vm._s(option.name)+"\n    ")+"</option>")}))+"</select>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/input/selectBox.vue?vue&type=template&id=f39cb778&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/input/selectBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var selectBoxvue_type_script_lang_js_ = ({
  props: {
    value: String,
    label: String,
    options: Array,
    disabled: {
      type: Boolean,
      default: false
    },
    internal: {
      type: Boolean,
      default: false
    },
    slim: {
      type: Boolean,
      default: false
    },
    css: {
      type: Object,
      default: () => ({})
    }
  }
});
// CONCATENATED MODULE: ./components/admin/input/selectBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_selectBoxvue_type_script_lang_js_ = (selectBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/input/selectBox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_selectBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f39cb778",
  "c108c9a0"
  
)

/* harmony default export */ var selectBox = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    label: {
      type: String,
      default: "Add Files"
    },
    multipleUpload: {
      type: Boolean,
      default: true
    },
    mainImageAllowed: {
      type: Boolean,
      default: true
    },
    uploadType: {
      type: String,
      default: "non-product"
    },
    uploaded: Array
  },

  data() {
    return {
      cancelToken: this.$axios.CancelToken,
      images: [],
      uploadImageAPI: "/uploadImage"
    };
  },

  // watch: {
  //     uploaded(newVal) {
  //         console.log("IS THIS THE CULPRIT");
  //         if(newVal.length > 0)
  //             this.assignImages();
  //     }
  // },
  methods: {
    clearFileSelection() {
      this.images = [];
    },

    assignImages(list) {
      console.log("ASSIGN IMAGES WAS CALLED");
      if (!list.length > 0) return;
      this.images = [];
      const baseAWSURL = "https://bounipun-ecom.s3.ap-south-1.amazonaws.com/original/";
      list.forEach(image => {
        // console.log(image);
        const imageObject = {
          /* actual file */
          file: null,

          /* local preview url */
          previewURL: baseAWSURL + image.path,

          /* cancel token */
          cancelToken: null,

          /* upload percentage  */
          uploadPercentage: 100,

          /* uploaded flag */
          uploaded: true,

          /* main image flag */
          mainImage: image.mainImage,

          /* upload ID */
          _id: image._id,

          /* path to uploaded image */
          path: image.path
        };
        this.images.push(imageObject);
      });
    },

    addFiles() {
      this.$refs.selector.click();
    },

    handleFileSelection() {
      /* list of selected files */
      let selectedFiles = this.$refs.selector.files;
      /* if multiple upload not allowed */

      if (!this.multipleUpload) {
        this.images = [];
      }
      /* upload files one by one */


      selectedFiles.forEach(file => {
        /* create image object */
        const imageObject = this.createImageObject(file);
        /* add image object to images list */

        this.images.push(imageObject);
        /* start uploading the file */

        this.uploadFile(imageObject);
        /* reset input file selection */

        this.resetFileSelection();
      });
    },

    createImageObject(file) {
      return {
        /* actual file */
        file,

        /* local preview url */
        previewURL: URL.createObjectURL(file),

        /* cancel token */
        cancelToken: this.cancelToken.source(),

        /* upload percentage  */
        uploadPercentage: 0,

        /* uploaded flag */
        uploaded: false,

        /* main image flag */
        mainImage: false,

        /* upload ID */
        _id: "",

        /* path to uploaded image */
        path: ""
      };
    },

    async uploadFile(imageObject) {
      /* creating form data  */
      let formData = new FormData();
      /* appending file to form data */

      formData.append("productImage", imageObject.file);
      formData.append("uploadType", this.uploadType);
      /* configuring upload request  */

      const uploadConfig = this.setUploadConfig(imageObject);
      /* making upload request to the server */

      const uploadRequest = this.$axios.$post(this.uploadImageAPI, formData, uploadConfig);
      /* wait for the upload request to finish */

      const {
        response,
        error
      } = await this.$task(uploadRequest);
      /* if error occurred or upload was cancellled */

      if (error) {
        if (this.$axios.isCancel(error)) console.log("Upload request cancelled");
        return;
      }
      /* response from server */
      // console.log(response);

      /* update image object */


      this.updateImageObject(imageObject, response);
    },

    setUploadConfig(imageObject) {
      const uploadConfig = {
        cancelToken: imageObject.cancelToken.token,
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progress => {
          imageObject.uploadPercentage = parseInt(Math.round(progress.loaded / progress.total * 100));
        }
      };
      return uploadConfig;
    },

    updateImageObject(imageObject, response) {
      imageObject.uploaded = imageObject.uploadPercentage === 100;
      imageObject.path = response.name;
      imageObject._id = response._id;
      this.$emit("updated", this.images);
    },

    setMainImage(key, value) {
      /* if value set to true, turn all other main image flags off */
      // console.log('value was changed', value)
      if (value) {
        for (let i = 0; i < this.images.length; i++) {
          if (i !== key) this.images[i].mainImage = false;
        } // return;

      }
      /* if value set to true */


      setTimeout(() => {
        this.images[key].mainImage = true;
        this.$emit("updated", this.images);
      }, 100);
    },

    removeFile(key) {
      /* if still uploading, cancel upload before removing from the list */
      if (!this.images[key].uploaded) this.images[key].cancelToken.cancel();
      /* remove from the images list */

      this.images.splice(key, 1);
      this.$emit("updated", this.images);
    },

    resetFileSelection() {
      this.$refs.selector.type = "text";
      this.$refs.selector.type = "file";
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(109)["URL"]))

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectBox_vue_vue_type_style_index_0_id_f39cb778_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectBox_vue_vue_type_style_index_0_id_f39cb778_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectBox_vue_vue_type_style_index_0_id_f39cb778_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectBox_vue_vue_type_style_index_0_id_f39cb778_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectBox_vue_vue_type_style_index_0_id_f39cb778_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-f39cb778]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-f39cb778]{scroll-behavior:smooth}body[data-v-f39cb778]{margin:0!important;padding:0}*[data-v-f39cb778]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-f39cb778]{padding:6%}button[data-v-f39cb778]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-f39cb778]{width:7%}button.sub-action[data-v-f39cb778]{background-color:green}button.action[data-v-f39cb778]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-f39cb778]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-f39cb778]{padding:2% 5%;width:100%}}button.action.delete[data-v-f39cb778]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-f39cb778]:hover{background-color:#e01010}button.small[data-v-f39cb778]{font-size:11px;padding:1% 3%}button.clear[data-v-f39cb778]{background:transparent;padding:2% 5%}h1[data-v-f39cb778],h2[data-v-f39cb778],h3[data-v-f39cb778],h4[data-v-f39cb778],h5[data-v-f39cb778],h6[data-v-f39cb778],p[data-v-f39cb778],span[data-v-f39cb778]{margin:0;padding:0;color:#333}.page[data-v-f39cb778]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-f39cb778]{margin-top:13vh;padding:7%}}.page.-wh[data-v-f39cb778]{padding:0 0 5%}.page.side-pad[data-v-f39cb778]{padding:2%}@media(max-width:768px){.page.-broad[data-v-f39cb778]{padding:2%}}.page .page-header[data-v-f39cb778]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-f39cb778]{height:10vw}}.page .page-header .title[data-v-f39cb778]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-f39cb778]{font-size:5.4vw}}.page .side-pad[data-v-f39cb778]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-f39cb778]{padding:0 10%}}.pointer[data-v-f39cb778]{cursor:pointer}.center[data-v-f39cb778],.center-col[data-v-f39cb778]{display:flex;justify-content:center;align-items:center}.center-col[data-v-f39cb778]{flex-direction:column}.center-space[data-v-f39cb778]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-f39cb778]{position:relative}.white[data-v-f39cb778]{color:#fff}.scrollable-list[data-v-f39cb778]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-f39cb778]{justify-content:center}}.scrollable-list[data-v-f39cb778]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-f39cb778]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-f39cb778]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-f39cb778]{margin-top:10px;width:50px}[data-v-f39cb778]::-webkit-scrollbar{display:none}p.msg[data-v-f39cb778]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-f39cb778]{background-color:#a93737}p.msg.success[data-v-f39cb778]{background-color:#319a67}.flex[data-v-f39cb778]{display:flex}.flex.around[data-v-f39cb778]{justify-content:space-around}.flex.between[data-v-f39cb778]{justify-content:space-between}.flex.evenly[data-v-f39cb778]{justify-content:space-evenly}.flex.col[data-v-f39cb778]{flex-direction:column}.flex.wrap[data-v-f39cb778]{flex-wrap:wrap}.flex.center[data-v-f39cb778]{justify-content:center}.flex.center[data-v-f39cb778],.flex.v-center[data-v-f39cb778]{align-items:center}.flex.j-center[data-v-f39cb778]{justify-content:center}.flex.start[data-v-f39cb778]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-f39cb778]{align-items:center}.flex.baseline[data-v-f39cb778]{align-items:baseline}.flex.end[data-v-f39cb778]{justify-content:flex-end}.flex.end.center[data-v-f39cb778]{align-items:center}a[data-v-f39cb778]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-f39cb778]{display:none}}.onlyMobile[data-v-f39cb778]{display:none}@media(max-width:768px){.onlyMobile[data-v-f39cb778]{display:inline;display:initial}}.form-container[data-v-f39cb778]{display:flex;flex-direction:column;box-sizing:border-box;padding:2%;width:100%}.select-box[data-v-f39cb778]{display:flex;justify-content:space-between;align-items:center}.select-box.slim[data-v-f39cb778]{margin-top:6px}.select-box .internal[data-v-f39cb778]{height:10px;width:10px;background-color:#1690dc}.select-box .label[data-v-f39cb778]{font-family:\"SF-Pro Bold\";color:#7f7f7f;text-transform:uppercase;font-size:10px;padding:2%;margin-left:5px;font-weight:900}.select-box select[data-v-f39cb778]{background:#fff;border:none;border-radius:5px;padding:10px 15px;margin:3px;font-size:11px;color:#464646}.select-box select.slim[data-v-f39cb778]{padding:8px 10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9883fffc", content, true, context)
};

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    label: {
      type: String,
      default: "Add Files"
    },
    multipleUpload: {
      type: Boolean,
      default: true
    },
    uploadType: {
      type: String,
      default: "non-product"
    },
    location: {
      type: String,
      default: ""
    },
    value: [Array, String]
  },

  data() {
    return {
      cancelToken: this.$axios.CancelToken,
      images: [],
      uploadImageAPI: "/uploadImage"
    };
  },

  watch: {
    value: {
      handler(newValue, oldValue) {
        if (oldValue != false) {
          return;
        }

        this.commonAssign();
      }

    },

    /* clear file selection on visibility toggle */
    "$parent.$parent.showForm": {
      handler(newValue) {// if (!newValue) this.clearFileSelection();
      }

    }
  },

  mounted() {
    if (this.location === "variants-meta") this.commonAssign();
  },

  methods: {
    clearFileSelection() {
      this.images = [];
    },

    commonAssign() {
      console.log("ASSIGN IMAGES WAS CALLED !!");
      const commonProps = {
        file: null,
        cancelToken: null,
        uploadPercentage: 100,
        uploaded: true
      };
      /* base aws s3 url */

      const baseAWSURL = "https://bounipun-ecom.s3.ap-south-1.amazonaws.com/original/";

      switch (this.multipleUpload) {
        case true:
          console.log("multiple file upload");
          /* if image list is empty */

          if (this.value.length === 0) return;
          /* construct component image list array */

          const constructedImageList = this.value.map(image => {
            return { ...commonProps,
              ...image,
              previewURL: baseAWSURL + image.path
            };
          });
          this.images = constructedImageList;
          break;

        case false:
          console.log("single file upload");
          /* if no image provided */

          if (this.value === "") return;
          /* set provided image as the first element of the component image list */

          this.images[0] = { ...commonProps,
            _id: "",
            mainImage: false,
            order: 1,
            path: this.value,
            previewURL: baseAWSURL + this.value
          };
          break;
      }

      this.$forceUpdate();
    },

    addFiles() {
      this.$refs.selector.click();
    },

    handleFileSelection() {
      /* list of selected files */
      let selectedFiles = this.$refs.selector.files;
      /* if multiple upload not allowed */

      if (!this.multipleUpload) {
        this.images = [];
      }
      /* upload files one by one */


      selectedFiles.forEach(file => {
        /* create image object */
        const imageObject = this.createImageObject(file);
        /* add image object to images list */

        this.images.push(imageObject);
        /* start uploading the file */

        this.uploadFile(imageObject);
        /* reset input file selection */

        this.resetFileSelection();
      });
    },

    createImageObject(file) {
      return {
        /* order */
        order: this.images.length,

        /* actual file */
        file,

        /* local preview url */
        previewURL: URL.createObjectURL(file),

        /* cancel token */
        cancelToken: this.cancelToken.source(),

        /* upload percentage  */
        uploadPercentage: 0,

        /* uploaded flag */
        uploaded: false,

        /* main image flag */
        mainImage: false,

        /* upload ID */
        _id: "",

        /* path to uploaded image */
        path: ""
      };
    },

    async uploadFile(imageObject) {
      /* creating form data  */
      let formData = new FormData();
      /* appending file to form data */

      formData.append("productImage", imageObject.file);
      formData.append("uploadType", this.uploadType);
      /* configuring upload request  */

      const uploadConfig = this.setUploadConfig(imageObject);
      /* making upload request to the server */

      const uploadRequest = this.$axios.$post(this.uploadImageAPI, formData, uploadConfig);
      /* wait for the upload request to finish */

      const {
        response,
        error
      } = await this.$task(uploadRequest);
      /* if error occurred or upload was cancellled */

      if (error) {
        if (this.$axios.isCancel(error)) console.log("Upload request cancelled");
        return;
      }
      /* response from server */
      // console.log(response);

      /* update image object */


      this.updateImageObject(imageObject, response);
    },

    setUploadConfig(imageObject) {
      const uploadConfig = {
        cancelToken: imageObject.cancelToken.token,
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progress => {
          imageObject.uploadPercentage = parseInt(Math.round(progress.loaded / progress.total * 100));
        }
      };
      return uploadConfig;
    },

    updateImageObject(imageObject, response) {
      imageObject.uploaded = imageObject.uploadPercentage === 100;
      imageObject.path = response.name;
      imageObject._id = response._id;
      this.emitUpdateImageValue();
    },

    setMainImage(key, value) {
      /* if value set to true, turn all other main image flags off */
      // console.log('value was changed', value)
      if (value) {
        for (let i = 0; i < this.images.length; i++) {
          if (i !== key) this.images[i].mainImage = false;
        } // return;

      }
      /* if value set to true */


      setTimeout(() => {
        this.images[key].mainImage = true;
        this.emitUpdateImageValue(); // this.$emit("updated", this.images);
      }, 100);
    },

    removeFile(key) {
      /* if still uploading, cancel upload before removing from the list */
      if (!this.images[key].uploaded) this.images[key].cancelToken.cancel();
      /* remove from the images list */

      this.images.splice(key, 1);
      this.emitUpdateImageValue();
    },

    resetFileSelection() {
      this.$refs.selector.type = "text";
      this.$refs.selector.type = "file";
    },

    emitUpdateImageValue() {
      /* if multi upload is enabled */
      if (this.multipleUpload) {
        const constructedImageList = this.images.map(({
          _id,
          order,
          mainImage,
          path,
          link
        }) => {
          const imageObj = {
            _id,
            order,
            mainImage,
            path
          };
          /* attach link if it exists */

          if (link) {
            imageObj.link = link;
          }

          return imageObj;
        }); // console.log(this.images);

        this.$emit("input", constructedImageList);
      } else
        /* if single file upload is enabled */
        this.$emit("input", this.images.length > 0 ? this.images[0].path : "");
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(109)["URL"]))

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImage_vue_vue_type_style_index_0_id_06c4d25b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImage_vue_vue_type_style_index_0_id_06c4d25b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImage_vue_vue_type_style_index_0_id_06c4d25b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImage_vue_vue_type_style_index_0_id_06c4d25b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImage_vue_vue_type_style_index_0_id_06c4d25b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 164:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-06c4d25b]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-06c4d25b]{scroll-behavior:smooth}body[data-v-06c4d25b]{margin:0!important;padding:0}*[data-v-06c4d25b]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-06c4d25b]{padding:6%}button[data-v-06c4d25b]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-06c4d25b]{width:7%}button.sub-action[data-v-06c4d25b]{background-color:green}button.action[data-v-06c4d25b]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-06c4d25b]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-06c4d25b]{padding:2% 5%;width:100%}}button.action.delete[data-v-06c4d25b]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-06c4d25b]:hover{background-color:#e01010}button.small[data-v-06c4d25b]{font-size:11px;padding:1% 3%}button.clear[data-v-06c4d25b]{background:transparent;padding:2% 5%}h1[data-v-06c4d25b],h2[data-v-06c4d25b],h3[data-v-06c4d25b],h4[data-v-06c4d25b],h5[data-v-06c4d25b],h6[data-v-06c4d25b],p[data-v-06c4d25b],span[data-v-06c4d25b]{margin:0;padding:0;color:#333}.page[data-v-06c4d25b]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-06c4d25b]{margin-top:13vh;padding:7%}}.page.-wh[data-v-06c4d25b]{padding:0 0 5%}.page.side-pad[data-v-06c4d25b]{padding:2%}@media(max-width:768px){.page.-broad[data-v-06c4d25b]{padding:2%}}.page .page-header[data-v-06c4d25b]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-06c4d25b]{height:10vw}}.page .page-header .title[data-v-06c4d25b]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-06c4d25b]{font-size:5.4vw}}.page .side-pad[data-v-06c4d25b]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-06c4d25b]{padding:0 10%}}.pointer[data-v-06c4d25b]{cursor:pointer}.center[data-v-06c4d25b],.center-col[data-v-06c4d25b]{display:flex;justify-content:center;align-items:center}.center-col[data-v-06c4d25b]{flex-direction:column}.center-space[data-v-06c4d25b]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-06c4d25b]{position:relative}.white[data-v-06c4d25b]{color:#fff}.scrollable-list[data-v-06c4d25b]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-06c4d25b]{justify-content:center}}.scrollable-list[data-v-06c4d25b]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-06c4d25b]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-06c4d25b]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-06c4d25b]{margin-top:10px;width:50px}[data-v-06c4d25b]::-webkit-scrollbar{display:none}p.msg[data-v-06c4d25b]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-06c4d25b]{background-color:#a93737}p.msg.success[data-v-06c4d25b]{background-color:#319a67}.flex[data-v-06c4d25b]{display:flex}.flex.around[data-v-06c4d25b]{justify-content:space-around}.flex.between[data-v-06c4d25b]{justify-content:space-between}.flex.evenly[data-v-06c4d25b]{justify-content:space-evenly}.flex.col[data-v-06c4d25b]{flex-direction:column}.flex.wrap[data-v-06c4d25b]{flex-wrap:wrap}.flex.center[data-v-06c4d25b]{justify-content:center}.flex.center[data-v-06c4d25b],.flex.v-center[data-v-06c4d25b]{align-items:center}.flex.j-center[data-v-06c4d25b]{justify-content:center}.flex.start[data-v-06c4d25b]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-06c4d25b]{align-items:center}.flex.baseline[data-v-06c4d25b]{align-items:baseline}.flex.end[data-v-06c4d25b]{justify-content:flex-end}.flex.end.center[data-v-06c4d25b]{align-items:center}a[data-v-06c4d25b]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-06c4d25b]{display:none}}.onlyMobile[data-v-06c4d25b]{display:none}@media(max-width:768px){.onlyMobile[data-v-06c4d25b]{display:inline;display:initial}}.upload-container[data-v-06c4d25b]{width:100%}.upload-container .label[data-v-06c4d25b]{font-family:\"SF-Pro Bold\";color:#7f7f7f;text-transform:uppercase;font-size:10px;padding:2%;margin-left:5px;font-weight:900}.upload-container .file-selector[data-v-06c4d25b]{padding:3px 5px;border-radius:2px;font-size:10px;background-color:#7aa87a;color:#fff}.previews[data-v-06c4d25b]{display:flex;flex-wrap:wrap;justify-content:flex-start;position:relative}.previews .preview[data-v-06c4d25b]{height:70px;width:70px;background-size:cover;box-shadow:1px 1px 15px rgba(0,0,0,.16);margin:5px;border-radius:3px;overflow:hidden;cursor:pointer;position:relative}.previews .preview:hover .actions[data-v-06c4d25b]{display:flex}.previews .preview:hover .progress[data-v-06c4d25b]{display:none}.previews .preview .actions[data-v-06c4d25b]{display:none;background-color:rgba(51,51,51,.51373);width:100%;height:100%}.previews .preview .actions .remove-file[data-v-06c4d25b],.previews .preview .actions .set-main-image[data-v-06c4d25b]{width:30px;height:30px}.previews .preview .progress[data-v-06c4d25b]{background-color:rgba(51,51,51,.51373);height:100%;width:100%}.previews .preview .upload-icon[data-v-06c4d25b]{width:100%;height:100%}.previews .preview .main-image[data-v-06c4d25b]{position:absolute;bottom:0;left:0;width:100%;background:rgba(51,51,51,.51373);color:#fff;font-size:9px;text-align:center}.previews .preview .numbering[data-v-06c4d25b]{position:absolute;bottom:0;right:0;padding:2px 5px;background-color:rgba(51,51,51,.621);border-top-left-radius:5px;width:30%;text-align:center;font-size:13px;color:#fff}.previews .not-uploaded[data-v-06c4d25b]{background-color:#d49292;display:flex;padding:3px 10px;border-radius:5px;justify-content:space-between;align-items:center;margin-top:7px}.previews .not-uploaded img[data-v-06c4d25b]{padding-right:10px}.previews .not-uploaded span[data-v-06c4d25b]{color:#fff;font-size:13px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("57865ffe", content, true, context)
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/uploadImage.vue?vue&type=template&id=06c4d25b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-container"},[_vm._ssrNode("<label class=\"label\" data-v-06c4d25b>"+_vm._ssrEscape(" "+_vm._s(_vm.label)+" ")+"</label> <input type=\"file\" accept=\"image/*\""+(_vm._ssrAttr("multiple",_vm.multipleUpload))+" style=\"display: none\" data-v-06c4d25b> <button class=\"file-selector\" data-v-06c4d25b>\n    Select File(s)\n  </button> "),_vm._ssrNode("<div class=\"previews\" data-v-06c4d25b>","</div>",[_vm._l((_vm.images),function(image,key){return _vm._ssrNode("<div"+(_vm._ssrClass("preview center",{ uploading: !image.uploaded }))+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (image.previewURL) + ")") }, null))+" data-v-06c4d25b>","</div>",[_vm._ssrNode("<div class=\"actions center-col\" data-v-06c4d25b><img src=\"/icons/light/remove-icon.png\" class=\"remove-file\" data-v-06c4d25b> "+((_vm.multipleUpload && _vm.mainImageAllowed)?("<input type=\"checkbox\""+(_vm._ssrAttr("checked",image.mainImage))+(_vm._ssrAttr("checked",Array.isArray(image.mainImage)?_vm._i(image.mainImage,null)>-1:(image.mainImage)))+" class=\"set-main-image\" data-v-06c4d25b>"):"<!---->")+"</div> "),(!image.uploaded)?_vm._ssrNode("<div class=\"progress center\" data-v-06c4d25b>","</div>",[_c('vue-ellipse-progress',{attrs:{"color":"#41bf89","size":70,"thickness":7,"legend":true,"fontSize":"1rem","progress":image.uploadPercentage}},[_c('img',{staticClass:"upload-icon",attrs:{"slot":"legend-caption","wdith":"60px","src":"/icons/light/upload-cloud.svg"},slot:"legend-caption"})])],1):_vm._e(),_vm._ssrNode(" "+((image.mainImage)?("<span class=\"main-image\" data-v-06c4d25b> Main Image </span>"):"<!---->")+" <span class=\"numbering\" data-v-06c4d25b>"+_vm._ssrEscape(" "+_vm._s(key + 1)+" ")+"</span>")],2)}),_vm._ssrNode(" "+((_vm.images.length === 0)?("<div class=\"not-uploaded\" style=\"margin-left: 10px\" data-v-06c4d25b><img src=\"/icons/light/upload-cloud.svg\" data-v-06c4d25b> <span data-v-06c4d25b> No Image(s) uploaded yet </span></div>"):"<!---->"))],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/uploadImage.vue?vue&type=template&id=06c4d25b&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/uploadImage.vue?vue&type=script&lang=js&
var uploadImagevue_type_script_lang_js_ = __webpack_require__(141);

// CONCATENATED MODULE: ./components/admin/uploadImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_uploadImagevue_type_script_lang_js_ = (uploadImagevue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/uploadImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(163)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_uploadImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "06c4d25b",
  "8c07b240"
  
)

/* harmony default export */ var uploadImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/uploadImageV2.vue?vue&type=template&id=4f78d3a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-container"},[_vm._ssrNode("<label class=\"label\" data-v-4f78d3a0>"+_vm._ssrEscape(" "+_vm._s(_vm.label)+" ")+"</label> <input type=\"file\" accept=\"image/*\""+(_vm._ssrAttr("multiple",_vm.multipleUpload))+" style=\"display: none\" data-v-4f78d3a0> <button class=\"file-selector\" data-v-4f78d3a0>\n    Select File(s)\n  </button> "),_vm._ssrNode("<div class=\"previews\" data-v-4f78d3a0>","</div>",[_vm._l((_vm.images),function(image,key){return _vm._ssrNode("<div"+(_vm._ssrClass("preview center",{ uploading: !image.uploaded }))+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (image.previewURL) + ")") }, null))+" data-v-4f78d3a0>","</div>",[_vm._ssrNode("<div class=\"actions center-col\" data-v-4f78d3a0><img src=\"/icons/light/remove-icon.png\" class=\"remove-file\" data-v-4f78d3a0> "+((_vm.multipleUpload)?("<input type=\"checkbox\""+(_vm._ssrAttr("checked",image.mainImage))+(_vm._ssrAttr("checked",Array.isArray(image.mainImage)?_vm._i(image.mainImage,null)>-1:(image.mainImage)))+" class=\"set-main-image\" data-v-4f78d3a0>"):"<!---->")+"</div> "),(!image.uploaded)?_vm._ssrNode("<div class=\"progress center\" data-v-4f78d3a0>","</div>",[_c('vue-ellipse-progress',{attrs:{"color":"#41bf89","size":70,"thickness":7,"legend":true,"fontSize":"1rem","progress":image.uploadPercentage}},[_c('img',{staticClass:"upload-icon",attrs:{"slot":"legend-caption","wdith":"60px","src":"/icons/light/upload-cloud.svg"},slot:"legend-caption"})])],1):_vm._e(),_vm._ssrNode(" "+((image.mainImage)?("<span class=\"main-image\" data-v-4f78d3a0> Main Image </span>"):"<!---->")+" <span class=\"numbering\" data-v-4f78d3a0>"+_vm._ssrEscape(" "+_vm._s(key + 1)+" ")+"</span>")],2)}),_vm._ssrNode(" "+((_vm.images.length === 0)?("<div class=\"not-uploaded\" style=\"margin-left: 10px\" data-v-4f78d3a0><img src=\"/icons/light/upload-cloud.svg\" style=\"width: 2vw\" data-v-4f78d3a0> <span style=\"font-size: 10px\" data-v-4f78d3a0> No Image(s) uploaded yet </span></div>"):"<!---->"))],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/uploadImageV2.vue?vue&type=template&id=4f78d3a0&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/uploadImageV2.vue?vue&type=script&lang=js&
var uploadImageV2vue_type_script_lang_js_ = __webpack_require__(154);

// CONCATENATED MODULE: ./components/admin/uploadImageV2.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_uploadImageV2vue_type_script_lang_js_ = (uploadImageV2vue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/uploadImageV2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(180)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_uploadImageV2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f78d3a0",
  "6bf1917c"
  
)

/* harmony default export */ var uploadImageV2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImageV2_vue_vue_type_style_index_0_id_4f78d3a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImageV2_vue_vue_type_style_index_0_id_4f78d3a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImageV2_vue_vue_type_style_index_0_id_4f78d3a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImageV2_vue_vue_type_style_index_0_id_4f78d3a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImageV2_vue_vue_type_style_index_0_id_4f78d3a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 181:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-4f78d3a0]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-4f78d3a0]{scroll-behavior:smooth}body[data-v-4f78d3a0]{margin:0!important;padding:0}*[data-v-4f78d3a0]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-4f78d3a0]{padding:6%}button[data-v-4f78d3a0]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-4f78d3a0]{width:7%}button.sub-action[data-v-4f78d3a0]{background-color:green}button.action[data-v-4f78d3a0]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-4f78d3a0]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-4f78d3a0]{padding:2% 5%;width:100%}}button.action.delete[data-v-4f78d3a0]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-4f78d3a0]:hover{background-color:#e01010}button.small[data-v-4f78d3a0]{font-size:11px;padding:1% 3%}button.clear[data-v-4f78d3a0]{background:transparent;padding:2% 5%}h1[data-v-4f78d3a0],h2[data-v-4f78d3a0],h3[data-v-4f78d3a0],h4[data-v-4f78d3a0],h5[data-v-4f78d3a0],h6[data-v-4f78d3a0],p[data-v-4f78d3a0],span[data-v-4f78d3a0]{margin:0;padding:0;color:#333}.page[data-v-4f78d3a0]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-4f78d3a0]{margin-top:13vh;padding:7%}}.page.-wh[data-v-4f78d3a0]{padding:0 0 5%}.page.side-pad[data-v-4f78d3a0]{padding:2%}@media(max-width:768px){.page.-broad[data-v-4f78d3a0]{padding:2%}}.page .page-header[data-v-4f78d3a0]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-4f78d3a0]{height:10vw}}.page .page-header .title[data-v-4f78d3a0]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-4f78d3a0]{font-size:5.4vw}}.page .side-pad[data-v-4f78d3a0]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-4f78d3a0]{padding:0 10%}}.pointer[data-v-4f78d3a0]{cursor:pointer}.center[data-v-4f78d3a0],.center-col[data-v-4f78d3a0]{display:flex;justify-content:center;align-items:center}.center-col[data-v-4f78d3a0]{flex-direction:column}.center-space[data-v-4f78d3a0]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-4f78d3a0]{position:relative}.white[data-v-4f78d3a0]{color:#fff}.scrollable-list[data-v-4f78d3a0]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-4f78d3a0]{justify-content:center}}.scrollable-list[data-v-4f78d3a0]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-4f78d3a0]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-4f78d3a0]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-4f78d3a0]{margin-top:10px;width:50px}[data-v-4f78d3a0]::-webkit-scrollbar{display:none}p.msg[data-v-4f78d3a0]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-4f78d3a0]{background-color:#a93737}p.msg.success[data-v-4f78d3a0]{background-color:#319a67}.flex[data-v-4f78d3a0]{display:flex}.flex.around[data-v-4f78d3a0]{justify-content:space-around}.flex.between[data-v-4f78d3a0]{justify-content:space-between}.flex.evenly[data-v-4f78d3a0]{justify-content:space-evenly}.flex.col[data-v-4f78d3a0]{flex-direction:column}.flex.wrap[data-v-4f78d3a0]{flex-wrap:wrap}.flex.center[data-v-4f78d3a0]{justify-content:center}.flex.center[data-v-4f78d3a0],.flex.v-center[data-v-4f78d3a0]{align-items:center}.flex.j-center[data-v-4f78d3a0]{justify-content:center}.flex.start[data-v-4f78d3a0]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-4f78d3a0]{align-items:center}.flex.baseline[data-v-4f78d3a0]{align-items:baseline}.flex.end[data-v-4f78d3a0]{justify-content:flex-end}.flex.end.center[data-v-4f78d3a0]{align-items:center}a[data-v-4f78d3a0]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-4f78d3a0]{display:none}}.onlyMobile[data-v-4f78d3a0]{display:none}@media(max-width:768px){.onlyMobile[data-v-4f78d3a0]{display:inline;display:initial}}.upload-container[data-v-4f78d3a0]{width:100%}.upload-container .label[data-v-4f78d3a0]{font-family:\"SF-Pro Bold\";color:#7f7f7f;text-transform:uppercase;font-size:10px;padding:2%;margin-left:5px;font-weight:900}.upload-container .file-selector[data-v-4f78d3a0]{padding:3px 5px;border-radius:2px;font-size:10px;background-color:#7aa87a;color:#fff}.previews[data-v-4f78d3a0]{display:flex;flex-wrap:wrap;justify-content:flex-start;position:relative}.previews .preview[data-v-4f78d3a0]{height:70px;width:70px;background-size:cover;box-shadow:1px 1px 15px rgba(0,0,0,.16);margin:5px;border-radius:3px;overflow:hidden;cursor:pointer;position:relative}.previews .preview:hover .actions[data-v-4f78d3a0]{display:flex}.previews .preview:hover .progress[data-v-4f78d3a0]{display:none}.previews .preview .actions[data-v-4f78d3a0]{display:none;background-color:rgba(51,51,51,.51373);width:100%;height:100%}.previews .preview .actions .remove-file[data-v-4f78d3a0],.previews .preview .actions .set-main-image[data-v-4f78d3a0]{width:30px;height:30px}.previews .preview .progress[data-v-4f78d3a0]{background-color:rgba(51,51,51,.51373);height:100%;width:100%}.previews .preview .upload-icon[data-v-4f78d3a0]{width:100%;height:100%}.previews .preview .main-image[data-v-4f78d3a0]{position:absolute;bottom:0;left:0;width:100%;background:rgba(51,51,51,.51373);color:#fff;font-size:9px;text-align:center}.previews .preview .numbering[data-v-4f78d3a0]{position:absolute;bottom:0;right:0;padding:2px 5px;background-color:rgba(51,51,51,.621);border-top-left-radius:5px;width:30%;text-align:center;font-size:13px;color:#fff}.previews .not-uploaded[data-v-4f78d3a0]{background-color:#d49292;display:flex;padding:3px 10px;border-radius:5px;justify-content:space-between;align-items:center;margin-top:7px}.previews .not-uploaded img[data-v-4f78d3a0]{padding-right:10px}.previews .not-uploaded span[data-v-4f78d3a0]{color:#fff;font-size:13px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(364);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2e0d2e8e", content, true, context)
};

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updateHomepage_vue_vue_type_style_index_0_id_717ea653_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updateHomepage_vue_vue_type_style_index_0_id_717ea653_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updateHomepage_vue_vue_type_style_index_0_id_717ea653_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updateHomepage_vue_vue_type_style_index_0_id_717ea653_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_updateHomepage_vue_vue_type_style_index_0_id_717ea653_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 364:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-717ea653]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-717ea653]{scroll-behavior:smooth}body[data-v-717ea653]{margin:0!important;padding:0}*[data-v-717ea653]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-717ea653]{padding:6%}button[data-v-717ea653]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-717ea653]{width:7%}button.sub-action[data-v-717ea653]{background-color:green}button.action[data-v-717ea653]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-717ea653]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-717ea653]{padding:2% 5%;width:100%}}button.action.delete[data-v-717ea653]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-717ea653]:hover{background-color:#e01010}button.small[data-v-717ea653]{font-size:11px;padding:1% 3%}button.clear[data-v-717ea653]{background:transparent;padding:2% 5%}h1[data-v-717ea653],h2[data-v-717ea653],h3[data-v-717ea653],h4[data-v-717ea653],h5[data-v-717ea653],h6[data-v-717ea653],p[data-v-717ea653],span[data-v-717ea653]{margin:0;padding:0;color:#333}.page[data-v-717ea653]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-717ea653]{margin-top:13vh;padding:7%}}.page.-wh[data-v-717ea653]{padding:0 0 5%}.page.side-pad[data-v-717ea653]{padding:2%}@media(max-width:768px){.page.-broad[data-v-717ea653]{padding:2%}}.page .page-header[data-v-717ea653]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-717ea653]{height:10vw}}.page .page-header .title[data-v-717ea653]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-717ea653]{font-size:5.4vw}}.page .side-pad[data-v-717ea653]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-717ea653]{padding:0 10%}}.pointer[data-v-717ea653]{cursor:pointer}.center[data-v-717ea653],.center-col[data-v-717ea653]{display:flex;justify-content:center;align-items:center}.center-col[data-v-717ea653]{flex-direction:column}.center-space[data-v-717ea653]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-717ea653]{position:relative}.white[data-v-717ea653]{color:#fff}.scrollable-list[data-v-717ea653]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-717ea653]{justify-content:center}}.scrollable-list[data-v-717ea653]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-717ea653]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-717ea653]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-717ea653]{margin-top:10px;width:50px}[data-v-717ea653]::-webkit-scrollbar{display:none}p.msg[data-v-717ea653]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-717ea653]{background-color:#a93737}p.msg.success[data-v-717ea653]{background-color:#319a67}.flex[data-v-717ea653]{display:flex}.flex.around[data-v-717ea653]{justify-content:space-around}.flex.between[data-v-717ea653]{justify-content:space-between}.flex.evenly[data-v-717ea653]{justify-content:space-evenly}.flex.col[data-v-717ea653]{flex-direction:column}.flex.wrap[data-v-717ea653]{flex-wrap:wrap}.flex.center[data-v-717ea653]{justify-content:center}.flex.center[data-v-717ea653],.flex.v-center[data-v-717ea653]{align-items:center}.flex.j-center[data-v-717ea653]{justify-content:center}.flex.start[data-v-717ea653]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-717ea653]{align-items:center}.flex.baseline[data-v-717ea653]{align-items:baseline}.flex.end[data-v-717ea653]{justify-content:flex-end}.flex.end.center[data-v-717ea653]{align-items:center}a[data-v-717ea653]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-717ea653]{display:none}}.onlyMobile[data-v-717ea653]{display:none}@media(max-width:768px){.onlyMobile[data-v-717ea653]{display:inline;display:initial}}.section[data-v-717ea653]{margin-top:10px;box-shadow:1px 1px 15px rgba(0,0,0,.16);width:100%}.section .head[data-v-717ea653]{background-color:#464646;color:#fff;width:100%;display:block;font-size:13px;padding:3px;text-align:center}.section .block .block-heading[data-v-717ea653]{display:flex;justify-content:space-between;align-items:center;width:100%;background-color:#c3c3c3;border:1px solid #cfcfcf;color:#fff;font-size:11px;padding:1% 5% 1% 1%;margin-bottom:10px}.section .block .block-heading span[data-v-717ea653]{color:#464646;padding:1% 3%;margin-right:10px;font-size:12px}.section .add-block[data-v-717ea653]{background-color:#186918;color:#fff;margin:10px 0}.section.press .captions .caption-box[data-v-717ea653]{padding:0 4px}.section.press .captions .caption-box .close[data-v-717ea653]{width:20px;height:20px;transition:all .3s ease-in-out;cursor:pointer}.section.press .captions .caption-box .close[data-v-717ea653]:hover{transform:rotate(40deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/homepage/updateHomepage.vue?vue&type=template&id=717ea653&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contents"},[_c('CancelUpdate',{on:{"close":_vm.closeForm}}),_vm._ssrNode(" <h2 class=\"heading\" data-v-717ea653>"+_vm._ssrEscape(_vm._s(_vm.editMode ? "Update" : "Add New")+" Homepage")+"</h2> "),(_vm.editMode)?_c('InputBox',{attrs:{"label":"Homepage ID","disabled":"","internal":true},model:{value:(_vm.doc._id),callback:function ($$v) {_vm.$set(_vm.doc, "_id", $$v)},expression:"doc._id"}}):_vm._e(),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Homepage Name"},model:{value:(_vm.doc.name),callback:function ($$v) {_vm.$set(_vm.doc, "name", $$v)},expression:"doc.name"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-slideshow section\" data-v-717ea653>","</div>",[_vm._ssrNode("<label class=\"head\" data-v-717ea653> Main Slideshow (Desktop) </label> "),_c('UploadImageV2',{attrs:{"multipleUpload":true,"label":"Set Desktop Slideshow Images: (7h: 15w) "},model:{value:(_vm.doc.desktopMainSlideshow.slides),callback:function ($$v) {_vm.$set(_vm.doc.desktopMainSlideshow, "slides", $$v)},expression:"doc.desktopMainSlideshow.slides"}}),_vm._ssrNode(" "),_vm._l((_vm.doc.desktopMainSlideshow.slides),function(slide,index){return _c('InputBox',{key:slide._id,attrs:{"label":("Link for Slide #" + (index + 1)),"options":{
        indicator: true,
        title:
          'You can copy and paste direct website links from the browser address bar.',
      }},model:{value:(slide.link),callback:function ($$v) {_vm.$set(slide, "link", $$v)},expression:"slide.link"}})}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Visiblity","activeText":"Live","inactiveText":"Hidden","width":"100px"},model:{value:(_vm.doc.desktopMainSlideshow.visible),callback:function ($$v) {_vm.$set(_vm.doc.desktopMainSlideshow, "visible", $$v)},expression:"doc.desktopMainSlideshow.visible"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-slideshow section\" data-v-717ea653>","</div>",[_vm._ssrNode("<label class=\"head\" data-v-717ea653> Main Slideshow (MOBILE) </label> "),_c('UploadImage',{ref:"mainSlideshow",attrs:{"multipleUpload":true,"label":"Set Slideshow Images: (1h: 0.83w)"},on:{"updated":function($event){return _vm.imageListUpdated($event, 'mainSlideshow')}}}),_vm._ssrNode(" "),_vm._l((_vm.doc.mainSlideshow.slides),function(slide,index){return _c('InputBox',{key:slide._id,attrs:{"label":("Link for Slide #" + (index + 1)),"options":{
        indicator: true,
        title:
          'You can copy and paste direct website links from the browser address bar.',
      }},model:{value:(slide.link),callback:function ($$v) {_vm.$set(slide, "link", $$v)},expression:"slide.link"}})}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Visiblity","activeText":"Live","inactiveText":"Hidden","width":"100px"},model:{value:(_vm.doc.mainSlideshow.visible),callback:function ($$v) {_vm.$set(_vm.doc.mainSlideshow, "visible", $$v)},expression:"doc.mainSlideshow.visible"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-text-block section\" data-v-717ea653>","</div>",[_vm._ssrNode("<label class=\"head\" data-v-717ea653> Main Text Block </label> "),_c('InputBox',{attrs:{"label":"Main Text 1"},model:{value:(_vm.doc.mainTextBlock.text1),callback:function ($$v) {_vm.$set(_vm.doc.mainTextBlock, "text1", $$v)},expression:"doc.mainTextBlock.text1"}}),_vm._ssrNode(" "),_c('TextBox',{attrs:{"label":"Main Text 2"},model:{value:(_vm.doc.mainTextBlock.text2),callback:function ($$v) {_vm.$set(_vm.doc.mainTextBlock, "text2", $$v)},expression:"doc.mainTextBlock.text2"}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Main Text 3"},model:{value:(_vm.doc.mainTextBlock.text3),callback:function ($$v) {_vm.$set(_vm.doc.mainTextBlock, "text3", $$v)},expression:"doc.mainTextBlock.text3"}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Author"},model:{value:(_vm.doc.mainTextBlock.author),callback:function ($$v) {_vm.$set(_vm.doc.mainTextBlock, "author", $$v)},expression:"doc.mainTextBlock.author"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Visiblity","activeText":"Live","inactiveText":"Hidden","width":"100px"},model:{value:(_vm.doc.mainTextBlock.visible),callback:function ($$v) {_vm.$set(_vm.doc.mainTextBlock, "visible", $$v)},expression:"doc.mainTextBlock.visible"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"collection-blocks section\" data-v-717ea653>","</div>",[_vm._ssrNode("<label class=\"head\" data-v-717ea653> Collection Blocks: </label> "),_vm._l((_vm.doc.collectionBlocks),function(block,index){return _vm._ssrNode("<div class=\"block\" data-v-717ea653>","</div>",[_vm._ssrNode("<div class=\"block-heading\" data-v-717ea653><span data-v-717ea653>"+_vm._ssrEscape(" Collection Block #"+_vm._s(index + 1)+" ")+"</span> <button class=\"action delete\" style=\"font-size: 9px\" data-v-717ea653>\n          Delete\n        </button></div> "),_c('SelectBox',{attrs:{"options":_vm.allCollections,"label":"Select Bounipun Collection"},model:{value:(block.bounipun_collection),callback:function ($$v) {_vm.$set(block, "bounipun_collection", $$v)},expression:"block.bounipun_collection"}}),_vm._ssrNode(" "),_c('UploadImage',{ref:"imageUploader_collection",refInFor:true,attrs:{"multipleUpload":true,"mainImageAllowed":false,"label":"Set Collection Images (1h: 0.83w):"},on:{"updated":function($event){return _vm.imageListUpdated($event, 'collectionBlock', index)}}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Text 1"},model:{value:(block.text1),callback:function ($$v) {_vm.$set(block, "text1", $$v)},expression:"block.text1"}}),_vm._ssrNode(" "),_c('TextBox',{attrs:{"label":"Text 2"},model:{value:(block.text2),callback:function ($$v) {_vm.$set(block, "text2", $$v)},expression:"block.text2"}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Text 3"},model:{value:(block.text3),callback:function ($$v) {_vm.$set(block, "text3", $$v)},expression:"block.text3"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"center\" data-v-717ea653>","</div>",[_c('InputBox',{attrs:{"label":"Button Text"},model:{value:(block.buttonText),callback:function ($$v) {_vm.$set(block, "buttonText", $$v)},expression:"block.buttonText"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Visiblity","activeText":"Live","inactiveText":"Hidden","width":"100px"},model:{value:(block.visible),callback:function ($$v) {_vm.$set(block, "visible", $$v)},expression:"block.visible"}})],2)],2)}),_vm._ssrNode(" <div class=\"center\" data-v-717ea653><button class=\"add-block\" data-v-717ea653>\n        + New Collection Section\n      </button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-list-blocks section\" data-v-717ea653>","</div>",[_vm._ssrNode("<label class=\"head\" data-v-717ea653> Product List Blocks: </label> "),_vm._l((_vm.doc.productListBlocks),function(block,index){return _vm._ssrNode("<div class=\"block\" data-v-717ea653>","</div>",[_vm._ssrNode("<div class=\"block-heading\" data-v-717ea653><span data-v-717ea653>"+_vm._ssrEscape(" Product List Block #"+_vm._s(index + 1)+" ")+"</span> <button class=\"action delete\" style=\"font-size: 9px\" data-v-717ea653>\n          Delete\n        </button></div> "),_c('SelectBox',{attrs:{"options":_vm.allProductLists,"label":"Select Product List"},model:{value:(block.productList),callback:function ($$v) {_vm.$set(block, "productList", $$v)},expression:"block.productList"}}),_vm._ssrNode(" "),_c('UploadImage',{ref:"imageUploader_productList",refInFor:true,attrs:{"mainImageAllowed":false,"label":"Set Product List Images"},on:{"updated":function($event){return _vm.imageListUpdated($event, 'productListBlock', index)}}}),_vm._ssrNode(" "),_c('UploadImage',{ref:"imageUploader_productListMood",refInFor:true,attrs:{"multiple":false,"mainImageAllowed":false,"label":"Set Product List Mood Image"},on:{"updated":function($event){return _vm.imageListUpdated($event, 'productListBlockMood', index)}}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Text 1"},model:{value:(block.text1),callback:function ($$v) {_vm.$set(block, "text1", $$v)},expression:"block.text1"}}),_vm._ssrNode(" "),_c('TextBox',{attrs:{"label":"Text 2"},model:{value:(block.text2),callback:function ($$v) {_vm.$set(block, "text2", $$v)},expression:"block.text2"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"center\" data-v-717ea653>","</div>",[_c('InputBox',{attrs:{"label":"Button Text"},model:{value:(block.buttonText),callback:function ($$v) {_vm.$set(block, "buttonText", $$v)},expression:"block.buttonText"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Visiblity","activeText":"Live","inactiveText":"Hidden","width":"100px"},model:{value:(block.visible),callback:function ($$v) {_vm.$set(block, "visible", $$v)},expression:"block.visible"}})],2)],2)}),_vm._ssrNode(" <div class=\"center\" data-v-717ea653><button class=\"add-block\" data-v-717ea653>\n        + New Product List Block\n      </button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"bounipun-lab section\" data-v-717ea653>","</div>",[_vm._ssrNode("<label class=\"head\" data-v-717ea653> Bounipun Lab: </label> "),_c('InputBox',{attrs:{"label":"Heading"},model:{value:(_vm.doc.bounipunLab.heading),callback:function ($$v) {_vm.$set(_vm.doc.bounipunLab, "heading", $$v)},expression:"doc.bounipunLab.heading"}}),_vm._ssrNode(" "),_c('TextBox',{attrs:{"label":"Paragraph"},model:{value:(_vm.doc.bounipunLab.paragraph),callback:function ($$v) {_vm.$set(_vm.doc.bounipunLab, "paragraph", $$v)},expression:"doc.bounipunLab.paragraph"}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Button Text"},model:{value:(_vm.doc.bounipunLab.buttonText),callback:function ($$v) {_vm.$set(_vm.doc.bounipunLab, "buttonText", $$v)},expression:"doc.bounipunLab.buttonText"}}),_vm._ssrNode(" "),_c('UploadImage',{ref:"imageUploader_bounipunLab",attrs:{"multipleUpload":false,"label":"Set Bounipun Lab Image"},on:{"updated":function($event){return _vm.imageListUpdated($event, 'bounipunLab')}}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Visiblity","activeText":"Live","inactiveText":"Hidden","width":"100px"},model:{value:(_vm.doc.bounipunLab.visible),callback:function ($$v) {_vm.$set(_vm.doc.bounipunLab, "visible", $$v)},expression:"doc.bounipunLab.visible"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"quote section\" data-v-717ea653>","</div>",[_vm._ssrNode("<label class=\"head\" data-v-717ea653> Quote: </label> "),_c('UploadImage',{ref:"imageUploader_quote",attrs:{"multipleUpload":false,"label":"Set Quote Logo Image"},on:{"updated":function($event){return _vm.imageListUpdated($event, 'quote')}}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Heading"},model:{value:(_vm.doc.quote.heading),callback:function ($$v) {_vm.$set(_vm.doc.quote, "heading", $$v)},expression:"doc.quote.heading"}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Paragraph"},model:{value:(_vm.doc.quote.paragraph),callback:function ($$v) {_vm.$set(_vm.doc.quote, "paragraph", $$v)},expression:"doc.quote.paragraph"}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Author"},model:{value:(_vm.doc.quote.author),callback:function ($$v) {_vm.$set(_vm.doc.quote, "author", $$v)},expression:"doc.quote.author"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Visiblity","activeText":"Live","inactiveText":"Hidden","width":"100px"},model:{value:(_vm.doc.quote.visible),callback:function ($$v) {_vm.$set(_vm.doc.quote, "visible", $$v)},expression:"doc.quote.visible"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"press section\" data-v-717ea653>","</div>",[_vm._ssrNode("<label class=\"head\" data-v-717ea653> Press: </label> "),_c('UploadImage',{ref:"imageUploader_pressLogo",attrs:{"uploadType":"press-logo","multipleUpload":false,"label":"Set Logo"},on:{"updated":function($event){return _vm.imageListUpdated($event, 'pressLogo')}}}),_vm._ssrNode(" "),_c('UploadImage',{ref:"imageUploader_pressImageList",attrs:{"uploadType":"press-images","multipleUpload":true,"label":"Set Press Image List"},on:{"updated":function($event){return _vm.imageListUpdated($event, 'press')}}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"captions\" data-v-717ea653>","</div>",[_vm._l((_vm.doc.press.captions),function(caption,index){return _vm._ssrNode("<div class=\"caption-box flex center\" data-v-717ea653>","</div>",[_c('InputBox',{attrs:{"label":"Caption Heading"},model:{value:(caption.heading),callback:function ($$v) {_vm.$set(caption, "heading", $$v)},expression:"caption.heading"}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Caption Paragraph"},model:{value:(caption.paragraph),callback:function ($$v) {_vm.$set(caption, "paragraph", $$v)},expression:"caption.paragraph"}}),_vm._ssrNode(" <img src=\"/icons/dark/close.png\" class=\"close\" data-v-717ea653>")],2)}),_vm._ssrNode(" <div class=\"add-new-caption flex center\" data-v-717ea653><button class=\"action\" data-v-717ea653>\n          + Add New Caption\n        </button></div>")],2),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Visiblity","activeText":"Live","inactiveText":"Hidden","width":"100px"},model:{value:(_vm.doc.press.visible),callback:function ($$v) {_vm.$set(_vm.doc.press, "visible", $$v)},expression:"doc.press.visible"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"instagram section\" data-v-717ea653>","</div>",[_vm._ssrNode("<label class=\"head\" data-v-717ea653> Instagram: </label> "),_c('Toggle',{attrs:{"label":"Visiblity","activeText":"Live","inactiveText":"Hidden","width":"100px"},model:{value:(_vm.doc.instagram.visible),callback:function ($$v) {_vm.$set(_vm.doc.instagram, "visible", $$v)},expression:"doc.instagram.visible"}})],2),_vm._ssrNode(" "),_c('TextBox',{attrs:{"label":"Description","internal":true},model:{value:(_vm.doc.description),callback:function ($$v) {_vm.$set(_vm.doc, "description", $$v)},expression:"doc.description"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Status"},model:{value:(_vm.doc.status),callback:function ($$v) {_vm.$set(_vm.doc, "status", $$v)},expression:"doc.status"}}),_vm._ssrNode(" <div class=\"center-space\" data-v-717ea653>"+((_vm.loading)?("<img src=\"/loading.gif\" class=\"loading\" data-v-717ea653>"):"<!---->")+" "+((_vm.updated)?("<img src=\"/complete.gif\" class=\"action-complete\" data-v-717ea653>"):"<!---->")+" <button"+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"action\" data-v-717ea653>"+_vm._ssrEscape("\n      "+_vm._s(_vm.editMode ? "Edit" : "Add")+" Homepage\n    ")+"</button> "+((_vm.editMode)?("<button"+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"action delete\" data-v-717ea653>\n      Delete\n    </button>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/homepage/updateHomepage.vue?vue&type=template&id=717ea653&scoped=true&

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(108);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/homepage/updateHomepage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const baseDocument = () => ({
  _id: "",
  name: "",
  desktopMainSlideshow: {
    slides: [// {
      // _id: "",
      // mainImage: false,
      // path: ""
      // }
    ],
    visible: false
  },
  mainSlideshow: {
    slides: [// {
      // _id: "",
      // mainImage: false,
      // path: ""
      // }
    ],
    visible: false
  },
  mainTextBlock: {
    text1: "",
    text2: "",
    text3: "",
    author: "",
    visible: false
  },
  collectionBlocks: [{
    bounipun_collection: "",
    slideshow: [// {
      // _id: "",
      // mainImage: false,
      // path: ""
      // }
    ],
    text1: "",
    text2: "",
    text3: "",
    buttonText: "",
    visible: false,
    key: Object(external_uuid_["v4"])()
  }],
  productListBlocks: [{
    productList: "",
    imageList: [// {
      // _id: "",
      // mainImage: false,
      // path: ""
      // }
    ],
    moodImage: "",
    text1: "",
    text2: "",
    buttonText: "",
    visible: false,
    key: Object(external_uuid_["v4"])()
  }],
  bounipunLab: {
    heading: "",
    paragraph: "",
    image: "",
    buttonText: "",
    visible: false
  },
  quote: {
    logo: "",
    heading: "",
    paragraph: "",
    author: "",
    visible: false
  },
  press: {
    logo: "",
    imageList: [//     {
      //     path: "",
      //     mainImage: false
      // }
    ],
    captions: [{
      heading: "",
      paragraph: "",
      key: Object(external_uuid_["v4"])()
    }],
    visible: false
  },
  instagram: {
    text: "",
    visible: false
  },
  description: "",
  status: false
});

/* harmony default export */ var updateHomepagevue_type_script_lang_js_ = ({
  /* close form */

  /* slideshow list updated (x6) */

  /* add unique key to every block */

  /* fetch allCollections  */
  props: {
    model: String
  },

  data() {
    return {
      editMode: false,
      doc: baseDocument(),
      allCollections: [],
      allProductLists: [],
      loading: false,
      updated: false
    };
  },

  mounted() {
    this.fetchAllCollections();
    this.fetchAllProductLists();
  },

  methods: {
    /* set image list */
    imageListUpdated(list, property, index) {
      switch (property) {
        /* multiple */
        case "desktopMainSlideshow":
          {
            let {
              slides
            } = this.doc.desktopMainSlideshow;
            this.doc.desktopMainSlideshow.slides = list.map(item => {
              var _slides$find;

              return { ...item,
                link: ((_slides$find = slides.find(s => s._id === item._id)) === null || _slides$find === void 0 ? void 0 : _slides$find.link) || ""
              };
            });
            break;
          }

        /* multiple */

        case "mainSlideshow":
          let {
            slides
          } = this.doc.mainSlideshow;
          this.doc.mainSlideshow.slides = list.map(item => {
            var _slides$find2;

            return { ...item,
              link: ((_slides$find2 = slides.find(s => s._id === item._id)) === null || _slides$find2 === void 0 ? void 0 : _slides$find2.link) || ""
            };
          });
          break;

        /* multiple [indexed] */

        case "collectionBlock":
          this.doc.collectionBlocks[index].slideshow = list;
          break;

        /* multiple [indexed] */

        case "productListBlock":
          this.doc.productListBlocks[index].imageList = list;
          break;

        case "productListBlockMood":
          this.doc.productListBlocks[index].moodImage = list.length > 0 ? list[0].path : "";
          break;

        /* single */

        case "bounipunLab":
          this.doc.bounipunLab.image = list.length > 0 ? list[0].path : "";
          break;

        /* single */

        case "quote":
          this.doc.quote.logo = list.length > 0 ? list[0].path : "";
          break;

        /* single */

        case "pressLogo":
          this.doc.press.logo = list.length > 0 ? list[0].path : "";
          break;

        /* multiple */

        case "press":
          this.doc.press.imageList = list;
          /* update captions list */

          break;
      }
    },

    /* add caption box */
    addNewCaptionBox() {
      this.doc.press.captions.push({
        heading: "",
        caption: "",
        key: Object(external_uuid_["v4"])()
      });
      this.$forceUpdate();
    },

    removeCaption(key) {
      if (this.doc.press.captions.length < 2) return;
      this.doc.press.captions.splice(key, 1);
      this.$forceUpdate();
    },

    async fetchAllCollections() {
      const result = await this.$fetchCollection("collections");
      this.allCollections = result.docs.map(({
        _id,
        name
      }) => {
        return {
          name,
          value: _id
        };
      });
      this.allCollections.unshift({
        name: "Select Bounipun Collection",
        value: ""
      });
    },

    async fetchAllProductLists() {
      const result = await this.$fetchCollection("product_lists");
      this.allProductLists = result.docs.map(({
        _id,
        name
      }) => {
        return {
          name,
          value: _id
        };
      });
      this.allProductLists.unshift({
        name: "Select Product List",
        value: ""
      });
    },

    /* add collection block */
    addCollectionBlock() {
      this.doc.collectionBlocks.push({
        bounipun_collection: "",
        slideshow: [{
          _id: "",
          mainImage: false,
          path: ""
        }],
        text1: "",
        text2: "",
        text3: "",
        buttonText: "",
        visible: false,
        key: Object(external_uuid_["v4"])()
      });
    },

    /* add product list block */
    addProductListBlock() {
      this.doc.productListBlocks.push({
        productList: "",
        imageList: [{
          _id: "",
          mainImage: false,
          path: ""
        }],
        moodImage: "",
        text1: "",
        text2: "",
        buttonText: "",
        visible: false,
        key: Object(external_uuid_["v4"])()
      });
    },

    /* remove collection or product list block */
    removeBlock(property, key) {
      if (this.doc[property].length < 2) return;
      this.doc[property].splice(key, 1);
    },

    closeForm() {
      this.resetForm();
      this.$emit("close");
    },

    resetForm() {
      // this.$refs.desktopMainSlideshow.clearFileSelection();
      this.$refs.mainSlideshow.clearFileSelection();
      this.doc = baseDocument();
      console.log("doc was cleared");
    },

    async updateDocument() {
      // return;
      this.loading = true;
      const result = await this.$updateDocument(this.model, this.doc, this.editMode);
      this.loading = false;
      if (!result.updated) return;
      this.$emit("updated"); // this.populateForm(result.doc);

      this.$flash(this);
    },

    populateForm(details) {
      const {
        _id,
        name,
        desktopMainSlideshow,
        mainSlideshow,
        mainTextBlock,
        collectionBlocks,
        productListBlocks,
        bounipunLab,
        quote,
        press,
        instagram,
        description,
        status
      } = details;
      this.doc = {
        _id,
        name,
        desktopMainSlideshow,
        mainSlideshow,
        mainTextBlock,
        collectionBlocks,
        productListBlocks,
        bounipunLab,
        quote,
        press,
        instagram,
        description,
        status
      };
      this.editMode = true;
    },

    async deleteDocument() {
      this.loading = true;
      const result = await this.$deleteDocument(this.model, this.doc._id);
      this.loading = false;
      if (!result.deleted) return;
      this.$emit("updated");
      this.resetForm();
      this.$flash(this);
    }

  }
});
// CONCATENATED MODULE: ./components/admin/homepage/updateHomepage.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_updateHomepagevue_type_script_lang_js_ = (updateHomepagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/homepage/updateHomepage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(363)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_updateHomepagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "717ea653",
  "576c8b1e"
  
)

/* harmony default export */ var updateHomepage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CancelUpdate: __webpack_require__(134).default,InputBox: __webpack_require__(121).default,UploadImageV2: __webpack_require__(167).default,Toggle: __webpack_require__(129).default,UploadImage: __webpack_require__(166).default,TextBox: __webpack_require__(124).default,SelectBox: __webpack_require__(140).default})


/***/ })

};;
//# sourceMappingURL=update-homepage.js.map
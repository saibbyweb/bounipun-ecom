exports.ids = [76,1,9,14,19,25,34,55,58,60,91,93];
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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("688513fe", content, true, context)
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Accordion.vue?vue&type=template&id=840d9ef6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sw-accordion"},[_vm._ssrNode("<div"+(_vm._ssrClass(null,[{'active': _vm.active}, {light: _vm.light},'accordion']))+" data-v-840d9ef6><span class=\"title\" data-v-840d9ef6>"+_vm._ssrEscape(" "+_vm._s(_vm.heading)+" ")+"</span> <span class=\"switch\" data-v-840d9ef6>"+_vm._ssrEscape(" "+_vm._s(_vm.active ? "-" : "+")+" ")+"</span></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("content",{noMargin: _vm.noMargin}))+(_vm._ssrStyle(null,{minHeight: _vm.maxHeight, overflow: _vm.contentOverflow && _vm.active ? 'visible': 'hidden'}, null))+" data-v-840d9ef6>","</div>",[_vm._t("default",function(){return [_c('span',[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])]})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Accordion.vue?vue&type=template&id=840d9ef6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Accordion.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Accordionvue_type_script_lang_js_ = ({
  props: {
    heading: {
      type: String,
      default: 'Heading 1'
    },
    expanded: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    noMargin: {
      type: Boolean,
      default: false
    },
    contentOverflow: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      active: false
    };
  },

  watch: {
    expanded(newVal) {
      if (newVal) this.active = true;
    }

  },

  mounted() {
    if (this.expanded && this.$refs.content !== undefined) {
      this.active = true;
    }

    if (this.heading === "Base Color") {
      this.toggle();
      setTimeout(() => this.toggle(), 600);
    }
  },

  computed: {
    maxHeight() {
      return this.active ? this.$refs.content.scrollHeight + 'px' : '0px';
    }

  },
  methods: {
    toggle() {
      this.active = !this.active; // this.maxHeight = this.active ? this.$refs.content.scrollHeight + 'px' : '0px';
    },

    open() {
      this.active = true;
      this.updateHeight();
    },

    updateHeight() {// this.maxHeight = this.$refs.content.scrollHeight + 'px';
    }

  }
});
// CONCATENATED MODULE: ./components/Accordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Accordionvue_type_script_lang_js_ = (Accordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Accordion.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(161)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Accordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "840d9ef6",
  "13253dee"
  
)

/* harmony default export */ var Accordion = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_840d9ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_840d9ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_840d9ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_840d9ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_840d9ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 162:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-840d9ef6]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-840d9ef6]{scroll-behavior:smooth}body[data-v-840d9ef6]{margin:0!important;padding:0}*[data-v-840d9ef6]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-840d9ef6]{padding:6%}button[data-v-840d9ef6]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-840d9ef6]{width:7%}button.sub-action[data-v-840d9ef6]{background-color:green}button.action[data-v-840d9ef6]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-840d9ef6]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-840d9ef6]{padding:2% 5%;width:100%}}button.action.delete[data-v-840d9ef6]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-840d9ef6]:hover{background-color:#e01010}button.small[data-v-840d9ef6]{font-size:11px;padding:1% 3%}button.clear[data-v-840d9ef6]{background:transparent;padding:2% 5%}h1[data-v-840d9ef6],h2[data-v-840d9ef6],h3[data-v-840d9ef6],h4[data-v-840d9ef6],h5[data-v-840d9ef6],h6[data-v-840d9ef6],p[data-v-840d9ef6],span[data-v-840d9ef6]{margin:0;padding:0;color:#333}.page[data-v-840d9ef6]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-840d9ef6]{margin-top:13vh;padding:7%}}.page.-wh[data-v-840d9ef6]{padding:0 0 5%}.page.side-pad[data-v-840d9ef6]{padding:2%}@media(max-width:768px){.page.-broad[data-v-840d9ef6]{padding:2%}}.page .page-header[data-v-840d9ef6]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-840d9ef6]{height:10vw}}.page .page-header .title[data-v-840d9ef6]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-840d9ef6]{font-size:5.4vw}}.page .side-pad[data-v-840d9ef6]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-840d9ef6]{padding:0 10%}}.pointer[data-v-840d9ef6]{cursor:pointer}.center[data-v-840d9ef6],.center-col[data-v-840d9ef6]{display:flex;justify-content:center;align-items:center}.center-col[data-v-840d9ef6]{flex-direction:column}.center-space[data-v-840d9ef6]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-840d9ef6]{position:relative}.white[data-v-840d9ef6]{color:#fff}.scrollable-list[data-v-840d9ef6]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-840d9ef6]{justify-content:center}}.scrollable-list[data-v-840d9ef6]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-840d9ef6]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-840d9ef6]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-840d9ef6]{margin-top:10px;width:50px}[data-v-840d9ef6]::-webkit-scrollbar{display:none}p.msg[data-v-840d9ef6]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-840d9ef6]{background-color:#a93737}p.msg.success[data-v-840d9ef6]{background-color:#319a67}.flex[data-v-840d9ef6]{display:flex}.flex.around[data-v-840d9ef6]{justify-content:space-around}.flex.between[data-v-840d9ef6]{justify-content:space-between}.flex.evenly[data-v-840d9ef6]{justify-content:space-evenly}.flex.col[data-v-840d9ef6]{flex-direction:column}.flex.wrap[data-v-840d9ef6]{flex-wrap:wrap}.flex.center[data-v-840d9ef6]{justify-content:center}.flex.center[data-v-840d9ef6],.flex.v-center[data-v-840d9ef6]{align-items:center}.flex.j-center[data-v-840d9ef6]{justify-content:center}.flex.start[data-v-840d9ef6]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-840d9ef6]{align-items:center}.flex.baseline[data-v-840d9ef6]{align-items:baseline}.flex.end[data-v-840d9ef6]{justify-content:flex-end}.flex.end.center[data-v-840d9ef6]{align-items:center}a[data-v-840d9ef6]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-840d9ef6]{display:none}}.onlyMobile[data-v-840d9ef6]{display:none}@media(max-width:768px){.onlyMobile[data-v-840d9ef6]{display:inline;display:initial}}.sw-accordion .accordion[data-v-840d9ef6]{display:flex;justify-content:space-between;border-bottom:1px solid #6a6a6a;cursor:pointer}.sw-accordion .accordion .title[data-v-840d9ef6]{text-transform:uppercase;color:#464646;letter-spacing:1.5px;font-size:11px;cursor:pointer}.sw-accordion .accordion .switch[data-v-840d9ef6]{padding:0 10px;cursor:pointer}.sw-accordion .accordion.light span[data-v-840d9ef6]{color:#fff}.sw-accordion .content[data-v-840d9ef6]{margin:18px;border-radius:10px;max-height:0;overflow:hidden;box-sizing:border-box;transition:all .4s ease-in-out}.sw-accordion .content.noMargin[data-v-840d9ef6]{margin:18px 0}", ""]);
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

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("35f3e62c", content, true, context)
};

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("47918525", content, true, context)
};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(245);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("587c8f82", content, true, context)
};

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(292);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4188d618", content, true, context)
};

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlock_vue_vue_type_style_index_0_id_523f01b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlock_vue_vue_type_style_index_0_id_523f01b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlock_vue_vue_type_style_index_0_id_523f01b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlock_vue_vue_type_style_index_0_id_523f01b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorBlock_vue_vue_type_style_index_0_id_523f01b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 241:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-523f01b0]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-523f01b0]{scroll-behavior:smooth}body[data-v-523f01b0]{margin:0!important;padding:0}*[data-v-523f01b0]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-523f01b0]{padding:6%}button[data-v-523f01b0]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-523f01b0]{width:7%}button.sub-action[data-v-523f01b0]{background-color:green}button.action[data-v-523f01b0]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-523f01b0]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-523f01b0]{padding:2% 5%;width:100%}}button.action.delete[data-v-523f01b0]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-523f01b0]:hover{background-color:#e01010}button.small[data-v-523f01b0]{font-size:11px;padding:1% 3%}button.clear[data-v-523f01b0]{background:transparent;padding:2% 5%}h1[data-v-523f01b0],h2[data-v-523f01b0],h3[data-v-523f01b0],h4[data-v-523f01b0],h5[data-v-523f01b0],h6[data-v-523f01b0],p[data-v-523f01b0],span[data-v-523f01b0]{margin:0;padding:0;color:#333}.page[data-v-523f01b0]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-523f01b0]{margin-top:13vh;padding:7%}}.page.-wh[data-v-523f01b0]{padding:0 0 5%}.page.side-pad[data-v-523f01b0]{padding:2%}@media(max-width:768px){.page.-broad[data-v-523f01b0]{padding:2%}}.page .page-header[data-v-523f01b0]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-523f01b0]{height:10vw}}.page .page-header .title[data-v-523f01b0]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-523f01b0]{font-size:5.4vw}}.page .side-pad[data-v-523f01b0]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-523f01b0]{padding:0 10%}}.pointer[data-v-523f01b0]{cursor:pointer}.center[data-v-523f01b0],.center-col[data-v-523f01b0]{display:flex;justify-content:center;align-items:center}.center-col[data-v-523f01b0]{flex-direction:column}.center-space[data-v-523f01b0]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-523f01b0]{position:relative}.white[data-v-523f01b0]{color:#fff}.scrollable-list[data-v-523f01b0]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-523f01b0]{justify-content:center}}.scrollable-list[data-v-523f01b0]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-523f01b0]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-523f01b0]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-523f01b0]{margin-top:10px;width:50px}[data-v-523f01b0]::-webkit-scrollbar{display:none}p.msg[data-v-523f01b0]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-523f01b0]{background-color:#a93737}p.msg.success[data-v-523f01b0]{background-color:#319a67}.flex[data-v-523f01b0]{display:flex}.flex.around[data-v-523f01b0]{justify-content:space-around}.flex.between[data-v-523f01b0]{justify-content:space-between}.flex.evenly[data-v-523f01b0]{justify-content:space-evenly}.flex.col[data-v-523f01b0]{flex-direction:column}.flex.wrap[data-v-523f01b0]{flex-wrap:wrap}.flex.center[data-v-523f01b0]{justify-content:center}.flex.center[data-v-523f01b0],.flex.v-center[data-v-523f01b0]{align-items:center}.flex.j-center[data-v-523f01b0]{justify-content:center}.flex.start[data-v-523f01b0]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-523f01b0]{align-items:center}.flex.baseline[data-v-523f01b0]{align-items:baseline}.flex.end[data-v-523f01b0]{justify-content:flex-end}.flex.end.center[data-v-523f01b0]{align-items:center}a[data-v-523f01b0]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-523f01b0]{display:none}}.onlyMobile[data-v-523f01b0]{display:none}@media(max-width:768px){.onlyMobile[data-v-523f01b0]{display:inline;display:initial}}.color-block[data-v-523f01b0]{padding:7px 4px;margin-top:20px;border:2px dotted #efefef;position:relative}.color-block .title[data-v-523f01b0]{position:absolute;left:5px;top:-10px;background-color:#393939;color:#fff;z-index:1;font-size:12px;padding:2px 10px;border-radius:4px}.color-block .delete[data-v-523f01b0]{position:absolute;right:5px;top:5px;width:3%;z-index:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariantBlock_vue_vue_type_style_index_0_id_53c33ebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariantBlock_vue_vue_type_style_index_0_id_53c33ebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariantBlock_vue_vue_type_style_index_0_id_53c33ebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariantBlock_vue_vue_type_style_index_0_id_53c33ebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VariantBlock_vue_vue_type_style_index_0_id_53c33ebb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 243:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-53c33ebb]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-53c33ebb]{scroll-behavior:smooth}body[data-v-53c33ebb]{margin:0!important;padding:0}*[data-v-53c33ebb]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-53c33ebb]{padding:6%}button[data-v-53c33ebb]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-53c33ebb]{width:7%}button.sub-action[data-v-53c33ebb]{background-color:green}button.action[data-v-53c33ebb]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-53c33ebb]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-53c33ebb]{padding:2% 5%;width:100%}}button.action.delete[data-v-53c33ebb]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-53c33ebb]:hover{background-color:#e01010}button.small[data-v-53c33ebb]{font-size:11px;padding:1% 3%}button.clear[data-v-53c33ebb]{background:transparent;padding:2% 5%}h1[data-v-53c33ebb],h2[data-v-53c33ebb],h3[data-v-53c33ebb],h4[data-v-53c33ebb],h5[data-v-53c33ebb],h6[data-v-53c33ebb],p[data-v-53c33ebb],span[data-v-53c33ebb]{margin:0;padding:0;color:#333}.page[data-v-53c33ebb]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-53c33ebb]{margin-top:13vh;padding:7%}}.page.-wh[data-v-53c33ebb]{padding:0 0 5%}.page.side-pad[data-v-53c33ebb]{padding:2%}@media(max-width:768px){.page.-broad[data-v-53c33ebb]{padding:2%}}.page .page-header[data-v-53c33ebb]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-53c33ebb]{height:10vw}}.page .page-header .title[data-v-53c33ebb]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-53c33ebb]{font-size:5.4vw}}.page .side-pad[data-v-53c33ebb]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-53c33ebb]{padding:0 10%}}.pointer[data-v-53c33ebb]{cursor:pointer}.center[data-v-53c33ebb],.center-col[data-v-53c33ebb]{display:flex;justify-content:center;align-items:center}.center-col[data-v-53c33ebb]{flex-direction:column}.center-space[data-v-53c33ebb]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-53c33ebb]{position:relative}.white[data-v-53c33ebb]{color:#fff}.scrollable-list[data-v-53c33ebb]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-53c33ebb]{justify-content:center}}.scrollable-list[data-v-53c33ebb]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-53c33ebb]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-53c33ebb]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-53c33ebb]{margin-top:10px;width:50px}[data-v-53c33ebb]::-webkit-scrollbar{display:none}p.msg[data-v-53c33ebb]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-53c33ebb]{background-color:#a93737}p.msg.success[data-v-53c33ebb]{background-color:#319a67}.flex[data-v-53c33ebb]{display:flex}.flex.around[data-v-53c33ebb]{justify-content:space-around}.flex.between[data-v-53c33ebb]{justify-content:space-between}.flex.evenly[data-v-53c33ebb]{justify-content:space-evenly}.flex.col[data-v-53c33ebb]{flex-direction:column}.flex.wrap[data-v-53c33ebb]{flex-wrap:wrap}.flex.center[data-v-53c33ebb]{justify-content:center}.flex.center[data-v-53c33ebb],.flex.v-center[data-v-53c33ebb]{align-items:center}.flex.j-center[data-v-53c33ebb]{justify-content:center}.flex.start[data-v-53c33ebb]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-53c33ebb]{align-items:center}.flex.baseline[data-v-53c33ebb]{align-items:baseline}.flex.end[data-v-53c33ebb]{justify-content:flex-end}.flex.end.center[data-v-53c33ebb]{align-items:center}a[data-v-53c33ebb]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-53c33ebb]{display:none}}.onlyMobile[data-v-53c33ebb]{display:none}@media(max-width:768px){.onlyMobile[data-v-53c33ebb]{display:inline;display:initial}}.variant-block[data-v-53c33ebb]{padding:7px 4px;margin-top:20px;border:2px dotted #efefef;position:relative}.variant-block .title[data-v-53c33ebb]{position:absolute;left:5px;top:-10px;background-color:#393939;color:#fff;z-index:1;font-size:12px;padding:2px 10px;border-radius:4px}.variant-block .delete[data-v-53c33ebb]{position:absolute;right:5px;top:5px;width:3%;z-index:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlock_vue_vue_type_style_index_0_id_5947dd08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlock_vue_vue_type_style_index_0_id_5947dd08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlock_vue_vue_type_style_index_0_id_5947dd08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlock_vue_vue_type_style_index_0_id_5947dd08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FabricBlock_vue_vue_type_style_index_0_id_5947dd08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 245:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-5947dd08]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-5947dd08]{scroll-behavior:smooth}body[data-v-5947dd08]{margin:0!important;padding:0}*[data-v-5947dd08]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-5947dd08]{padding:6%}button[data-v-5947dd08]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-5947dd08]{width:7%}button.sub-action[data-v-5947dd08]{background-color:green}button.action[data-v-5947dd08]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-5947dd08]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-5947dd08]{padding:2% 5%;width:100%}}button.action.delete[data-v-5947dd08]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-5947dd08]:hover{background-color:#e01010}button.small[data-v-5947dd08]{font-size:11px;padding:1% 3%}button.clear[data-v-5947dd08]{background:transparent;padding:2% 5%}h1[data-v-5947dd08],h2[data-v-5947dd08],h3[data-v-5947dd08],h4[data-v-5947dd08],h5[data-v-5947dd08],h6[data-v-5947dd08],p[data-v-5947dd08],span[data-v-5947dd08]{margin:0;padding:0;color:#333}.page[data-v-5947dd08]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-5947dd08]{margin-top:13vh;padding:7%}}.page.-wh[data-v-5947dd08]{padding:0 0 5%}.page.side-pad[data-v-5947dd08]{padding:2%}@media(max-width:768px){.page.-broad[data-v-5947dd08]{padding:2%}}.page .page-header[data-v-5947dd08]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-5947dd08]{height:10vw}}.page .page-header .title[data-v-5947dd08]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-5947dd08]{font-size:5.4vw}}.page .side-pad[data-v-5947dd08]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-5947dd08]{padding:0 10%}}.pointer[data-v-5947dd08]{cursor:pointer}.center[data-v-5947dd08],.center-col[data-v-5947dd08]{display:flex;justify-content:center;align-items:center}.center-col[data-v-5947dd08]{flex-direction:column}.center-space[data-v-5947dd08]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-5947dd08]{position:relative}.white[data-v-5947dd08]{color:#fff}.scrollable-list[data-v-5947dd08]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-5947dd08]{justify-content:center}}.scrollable-list[data-v-5947dd08]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-5947dd08]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-5947dd08]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-5947dd08]{margin-top:10px;width:50px}[data-v-5947dd08]::-webkit-scrollbar{display:none}p.msg[data-v-5947dd08]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-5947dd08]{background-color:#a93737}p.msg.success[data-v-5947dd08]{background-color:#319a67}.flex[data-v-5947dd08]{display:flex}.flex.around[data-v-5947dd08]{justify-content:space-around}.flex.between[data-v-5947dd08]{justify-content:space-between}.flex.evenly[data-v-5947dd08]{justify-content:space-evenly}.flex.col[data-v-5947dd08]{flex-direction:column}.flex.wrap[data-v-5947dd08]{flex-wrap:wrap}.flex.center[data-v-5947dd08]{justify-content:center}.flex.center[data-v-5947dd08],.flex.v-center[data-v-5947dd08]{align-items:center}.flex.j-center[data-v-5947dd08]{justify-content:center}.flex.start[data-v-5947dd08]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-5947dd08]{align-items:center}.flex.baseline[data-v-5947dd08]{align-items:baseline}.flex.end[data-v-5947dd08]{justify-content:flex-end}.flex.end.center[data-v-5947dd08]{align-items:center}a[data-v-5947dd08]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-5947dd08]{display:none}}.onlyMobile[data-v-5947dd08]{display:none}@media(max-width:768px){.onlyMobile[data-v-5947dd08]{display:inline;display:initial}}.fabric-block[data-v-5947dd08]{padding:7px 4px;margin-top:20px;border-radius:4px;border:2px dotted #efefef;position:relative}.fabric-block .title[data-v-5947dd08]{position:absolute;left:5px;top:-10px;background-color:#393939;color:#fff;z-index:1;font-size:12px;padding:2px 10px;border-radius:4px}.fabric-block .delete[data-v-5947dd08]{position:absolute;right:5px;top:5px;width:3%;z-index:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/ColorBlock.vue?vue&type=template&id=523f01b0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"color-block flex col"},[_vm._ssrNode("<p class=\"title\" data-v-523f01b0>"+_vm._ssrEscape("Color "+_vm._s(_vm.index + 1))+"</p> <img src=\"/icons/dark/remove-cart-item.png\" class=\"delete\" data-v-523f01b0> "),_vm._ssrNode("<div class=\"flex\" data-v-523f01b0>","</div>",[_vm._ssrNode("<div class=\"flex col\" style=\"width: 100%\" data-v-523f01b0>","</div>",[_vm._ssrNode("<div class=\"flex\" data-v-523f01b0>","</div>",[_c('InputBox',{attrs:{"label":"Color Name"},model:{value:(_vm.localColor.name),callback:function ($$v) {_vm.$set(_vm.localColor, "name", $$v)},expression:"localColor.name"}}),_vm._ssrNode(" "),_c('SelectBox',{attrs:{"options":_vm.colorCategories,"label":"Category"},model:{value:(_vm.localColor.category),callback:function ($$v) {_vm.$set(_vm.localColor, "category", $$v)},expression:"localColor.category"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex\" data-v-523f01b0>","</div>",[_c('UploadImageV2',{attrs:{"multipleUpload":false,"label":"Main Image"},model:{value:(_vm.localColor.mainImage),callback:function ($$v) {_vm.$set(_vm.localColor, "mainImage", $$v)},expression:"localColor.mainImage"}}),_vm._ssrNode(" "),_c('UploadImageV2',{attrs:{"multipleUpload":false,"label":"Color Image"},model:{value:(_vm.localColor.colorImage),callback:function ($$v) {_vm.$set(_vm.localColor, "colorImage", $$v)},expression:"localColor.colorImage"}})],2)],2),_vm._ssrNode(" "),_c('TextBox',{attrs:{"long":"","slim":"","label":("Paragraph for [" + (_vm.localColor.name) + "]")},model:{value:(_vm.localColor.paragraph),callback:function ($$v) {_vm.$set(_vm.localColor, "paragraph", $$v)},expression:"localColor.paragraph"}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/lab/ColorBlock.vue?vue&type=template&id=523f01b0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/ColorBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ColorBlockvue_type_script_lang_js_ = ({
  props: {
    blockKey: String,
    blockDetail: Object,
    index: Number,
    remover: Function,
    colorCategories: Array
  },
  watch: {
    localColor: {
      handler(newValue) {// Object.keys(newValue).forEach((key) => {
        //   this.localBlock[key] = newValue[key];
        // });
      },

      deep: true
    },
    localColor: {
      handler(newValue) {
        //    alert('well')
        this.$emit("input", newValue);
      },

      deep: true
    }
  },

  mounted() {
    Object.keys(this.blockDetail).forEach(key => {
      this.localColor[key] = this.blockDetail[key];
    });
  },

  data() {
    return {
      localColor: {
        key: "",
        name: "",
        mainImage: "",
        paragraph: "",
        colorImage: "",
        category: ""
      }
    };
  }

});
// CONCATENATED MODULE: ./components/admin/lab/ColorBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var lab_ColorBlockvue_type_script_lang_js_ = (ColorBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/lab/ColorBlock.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(240)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lab_ColorBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "523f01b0",
  "4acded36"
  
)

/* harmony default export */ var ColorBlock = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputBox: __webpack_require__(121).default,SelectBox: __webpack_require__(140).default,UploadImageV2: __webpack_require__(167).default,TextBox: __webpack_require__(124).default})


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/VariantBlock.vue?vue&type=template&id=53c33ebb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"variant-block flex col"},[_vm._ssrNode("<p class=\"title\" data-v-53c33ebb>"+_vm._ssrEscape("Varaint "+_vm._s(_vm.index + 1))+"</p> <img src=\"/icons/dark/remove-cart-item.png\" class=\"delete\" data-v-53c33ebb> "),_vm._ssrNode("<div class=\"flex\" data-v-53c33ebb>","</div>",[_vm._ssrNode("<div class=\"flex col\" style=\"width: 100%\" data-v-53c33ebb>","</div>",[_c('InputBox',{attrs:{"label":"Variant Name"},model:{value:(_vm.localVariant.name),callback:function ($$v) {_vm.$set(_vm.localVariant, "name", $$v)},expression:"localVariant.name"}}),_vm._ssrNode(" "),_c('UploadImageV2',{attrs:{"multipleUpload":false,"label":"Variant Image"},model:{value:(_vm.localVariant.mainImage),callback:function ($$v) {_vm.$set(_vm.localVariant, "mainImage", $$v)},expression:"localVariant.mainImage"}})],2),_vm._ssrNode(" "),_c('TextBox',{attrs:{"long":"","slim":"","label":("Paragraph for [" + (_vm.localVariant.name) + "]")},model:{value:(_vm.localVariant.paragraph),callback:function ($$v) {_vm.$set(_vm.localVariant, "paragraph", $$v)},expression:"localVariant.paragraph"}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/lab/VariantBlock.vue?vue&type=template&id=53c33ebb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/VariantBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VariantBlockvue_type_script_lang_js_ = ({
  props: {
    blockKey: String,
    blockDetail: Object,
    index: Number,
    remover: Function
  },
  watch: {
    localVariant: {
      handler(newValue) {// Object.keys(newValue).forEach((key) => {
        //   this.localBlock[key] = newValue[key];
        // });
      },

      deep: true
    },
    localVariant: {
      handler(newValue) {
        //    alert('well')
        this.$emit("input", newValue);
      },

      deep: true
    }
  },

  mounted() {
    Object.keys(this.blockDetail).forEach(key => {
      this.localVariant[key] = this.blockDetail[key];
    });
  },

  data() {
    return {
      localVariant: {
        key: "",
        name: "",
        mainImage: "",
        paragraph: ""
      }
    };
  }

});
// CONCATENATED MODULE: ./components/admin/lab/VariantBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var lab_VariantBlockvue_type_script_lang_js_ = (VariantBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/lab/VariantBlock.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(242)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lab_VariantBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "53c33ebb",
  "5c085558"
  
)

/* harmony default export */ var VariantBlock = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputBox: __webpack_require__(121).default,UploadImageV2: __webpack_require__(167).default,TextBox: __webpack_require__(124).default})


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/FabricBlock.vue?vue&type=template&id=5947dd08&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fabric-block flex col"},[_vm._ssrNode("<p class=\"title\" data-v-5947dd08>"+_vm._ssrEscape("Fabric "+_vm._s(_vm.index + 1))+"</p> <img src=\"/icons/dark/remove-cart-item.png\" class=\"delete\" data-v-5947dd08> "),_vm._ssrNode("<div class=\"flex\" data-v-5947dd08>","</div>",[_vm._ssrNode("<div class=\"flex col\" style=\"width: 100%\" data-v-5947dd08>","</div>",[_c('InputBox',{attrs:{"label":"Fabric Name"},model:{value:(_vm.localFabric.name),callback:function ($$v) {_vm.$set(_vm.localFabric, "name", $$v)},expression:"localFabric.name"}}),_vm._ssrNode(" "),_c('UploadImageV2',{attrs:{"multipleUpload":false,"label":"Fabric Main Image"},model:{value:(_vm.localFabric.mainImage),callback:function ($$v) {_vm.$set(_vm.localFabric, "mainImage", $$v)},expression:"localFabric.mainImage"}})],2),_vm._ssrNode(" "),_c('TextBox',{attrs:{"long":"","slim":"","label":("Paragraph for [" + (_vm.localFabric.name) + "]")},model:{value:(_vm.localFabric.paragraph),callback:function ($$v) {_vm.$set(_vm.localFabric, "paragraph", $$v)},expression:"localFabric.paragraph"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex\" style=\"margin: 20px 0; \\n    border-top: 2px dotted #efefef;\\n    border-bottom: 2px dotted #efefef; \\n    padding: 20px 5px; \\n    border-radius: 0px;\" data-v-5947dd08>","</div>",[_c('UploadImageV2',{attrs:{"multipleUpload":false,"label":"Sub Image - 1"},model:{value:(_vm.localFabric.subImage1),callback:function ($$v) {_vm.$set(_vm.localFabric, "subImage1", $$v)},expression:"localFabric.subImage1"}}),_vm._ssrNode(" "),_c('UploadImageV2',{attrs:{"multipleUpload":false,"label":"Sub Image - 2"},model:{value:(_vm.localFabric.subImage2),callback:function ($$v) {_vm.$set(_vm.localFabric, "subImage2", $$v)},expression:"localFabric.subImage2"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex\" data-v-5947dd08>","</div>",[_vm._ssrNode("<div class=\"flex col\" style=\"flex-grow: 1\" data-v-5947dd08>","</div>",[_c('InputBox',{attrs:{"label":"Sub Heading - 1"},model:{value:(_vm.localFabric.subHeading1),callback:function ($$v) {_vm.$set(_vm.localFabric, "subHeading1", $$v)},expression:"localFabric.subHeading1"}}),_vm._ssrNode(" "),_c('TextBox',{attrs:{"long":"","slim":"","label":"Sub Paragraph - 1"},model:{value:(_vm.localFabric.subParagraph1),callback:function ($$v) {_vm.$set(_vm.localFabric, "subParagraph1", $$v)},expression:"localFabric.subParagraph1"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex col\" style=\"flex-grow: 1\" data-v-5947dd08>","</div>",[_c('InputBox',{attrs:{"label":"Sub Heading - 2"},model:{value:(_vm.localFabric.subHeading2),callback:function ($$v) {_vm.$set(_vm.localFabric, "subHeading2", $$v)},expression:"localFabric.subHeading2"}}),_vm._ssrNode(" "),_c('TextBox',{attrs:{"long":"","slim":"","label":"Sub Paragraph - 2"},model:{value:(_vm.localFabric.subParagraph2),callback:function ($$v) {_vm.$set(_vm.localFabric, "subParagraph2", $$v)},expression:"localFabric.subParagraph2"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex col\" style=\"flex-grow: 1\" data-v-5947dd08>","</div>",[_c('InputBox',{attrs:{"label":"Sub Heading - 3"},model:{value:(_vm.localFabric.subHeading3),callback:function ($$v) {_vm.$set(_vm.localFabric, "subHeading3", $$v)},expression:"localFabric.subHeading3"}}),_vm._ssrNode(" "),_c('TextBox',{attrs:{"long":"","slim":"","label":"Sub Paragraph - 3"},model:{value:(_vm.localFabric.subParagraph3),callback:function ($$v) {_vm.$set(_vm.localFabric, "subParagraph3", $$v)},expression:"localFabric.subParagraph3"}})],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/lab/FabricBlock.vue?vue&type=template&id=5947dd08&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/FabricBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FabricBlockvue_type_script_lang_js_ = ({
  props: {
    blockKey: String,
    blockDetail: Object,
    index: Number,
    remover: Function
  },
  watch: {
    localFabric: {
      handler(newValue) {// Object.keys(newValue).forEach((key) => {
        //   this.localBlock[key] = newValue[key];
        // });
      },

      deep: true
    },
    localFabric: {
      handler(newValue) {
        //    alert('well')
        this.$emit("input", newValue);
      },

      deep: true
    }
  },

  mounted() {
    Object.keys(this.blockDetail).forEach(key => {
      this.localFabric[key] = this.blockDetail[key];
    });
  },

  data() {
    return {
      localFabric: {
        key: "",
        name: "",
        mainImage: "",
        paragraph: "",
        subImage1: "",
        subImage2: "",
        subHeading1: "",
        subParagraph1: "",
        subHeading2: "",
        subParagraph2: "",
        subHeading3: "",
        subParagraph3: ""
      }
    };
  }

});
// CONCATENATED MODULE: ./components/admin/lab/FabricBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var lab_FabricBlockvue_type_script_lang_js_ = (FabricBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/lab/FabricBlock.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(244)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lab_FabricBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5947dd08",
  "a173d168"
  
)

/* harmony default export */ var FabricBlock = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputBox: __webpack_require__(121).default,UploadImageV2: __webpack_require__(167).default,TextBox: __webpack_require__(124).default})


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(367);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7cc9b962", content, true, context)
};

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DecideLabBlockDetail_vue_vue_type_style_index_0_id_19e100dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DecideLabBlockDetail_vue_vue_type_style_index_0_id_19e100dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DecideLabBlockDetail_vue_vue_type_style_index_0_id_19e100dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DecideLabBlockDetail_vue_vue_type_style_index_0_id_19e100dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DecideLabBlockDetail_vue_vue_type_style_index_0_id_19e100dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 292:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-19e100dc]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-19e100dc]{scroll-behavior:smooth}body[data-v-19e100dc]{margin:0!important;padding:0}*[data-v-19e100dc]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-19e100dc]{padding:6%}button[data-v-19e100dc]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-19e100dc]{width:7%}button.sub-action[data-v-19e100dc]{background-color:green}button.action[data-v-19e100dc]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-19e100dc]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-19e100dc]{padding:2% 5%;width:100%}}button.action.delete[data-v-19e100dc]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-19e100dc]:hover{background-color:#e01010}button.small[data-v-19e100dc]{font-size:11px;padding:1% 3%}button.clear[data-v-19e100dc]{background:transparent;padding:2% 5%}h1[data-v-19e100dc],h2[data-v-19e100dc],h3[data-v-19e100dc],h4[data-v-19e100dc],h5[data-v-19e100dc],h6[data-v-19e100dc],p[data-v-19e100dc],span[data-v-19e100dc]{margin:0;padding:0;color:#333}.page[data-v-19e100dc]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-19e100dc]{margin-top:13vh;padding:7%}}.page.-wh[data-v-19e100dc]{padding:0 0 5%}.page.side-pad[data-v-19e100dc]{padding:2%}@media(max-width:768px){.page.-broad[data-v-19e100dc]{padding:2%}}.page .page-header[data-v-19e100dc]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-19e100dc]{height:10vw}}.page .page-header .title[data-v-19e100dc]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-19e100dc]{font-size:5.4vw}}.page .side-pad[data-v-19e100dc]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-19e100dc]{padding:0 10%}}.pointer[data-v-19e100dc]{cursor:pointer}.center[data-v-19e100dc],.center-col[data-v-19e100dc]{display:flex;justify-content:center;align-items:center}.center-col[data-v-19e100dc]{flex-direction:column}.center-space[data-v-19e100dc]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-19e100dc]{position:relative}.white[data-v-19e100dc]{color:#fff}.scrollable-list[data-v-19e100dc]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-19e100dc]{justify-content:center}}.scrollable-list[data-v-19e100dc]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-19e100dc]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-19e100dc]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-19e100dc]{margin-top:10px;width:50px}[data-v-19e100dc]::-webkit-scrollbar{display:none}p.msg[data-v-19e100dc]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-19e100dc]{background-color:#a93737}p.msg.success[data-v-19e100dc]{background-color:#319a67}.flex[data-v-19e100dc]{display:flex}.flex.around[data-v-19e100dc]{justify-content:space-around}.flex.between[data-v-19e100dc]{justify-content:space-between}.flex.evenly[data-v-19e100dc]{justify-content:space-evenly}.flex.col[data-v-19e100dc]{flex-direction:column}.flex.wrap[data-v-19e100dc]{flex-wrap:wrap}.flex.center[data-v-19e100dc]{justify-content:center}.flex.center[data-v-19e100dc],.flex.v-center[data-v-19e100dc]{align-items:center}.flex.j-center[data-v-19e100dc]{justify-content:center}.flex.start[data-v-19e100dc]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-19e100dc]{align-items:center}.flex.baseline[data-v-19e100dc]{align-items:baseline}.flex.end[data-v-19e100dc]{justify-content:flex-end}.flex.end.center[data-v-19e100dc]{align-items:center}a[data-v-19e100dc]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-19e100dc]{display:none}}.onlyMobile[data-v-19e100dc]{display:none}@media(max-width:768px){.onlyMobile[data-v-19e100dc]{display:inline;display:initial}}.section[data-v-19e100dc]{border:1px solid red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/DecideLabBlockDetail.vue?vue&type=template&id=19e100dc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"decide-block"},_vm._l((_vm.blockDetails),function(blockDetail,index){return _c(_vm.blocks[_vm.alias],{key:blockDetail.key,tag:"component",attrs:{"blockDetail":blockDetail,"blockKey":_vm.blockKey,"remover":_vm.remover,"colorCategories":_vm.colorCategories,"index":index},on:{"input":function($event){return _vm.$emit('input', { payload: $event, index: index })}}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/lab/DecideLabBlockDetail.vue?vue&type=template&id=19e100dc&scoped=true&

// EXTERNAL MODULE: ./components/admin/lab/ColorBlock.vue + 4 modules
var ColorBlock = __webpack_require__(251);

// EXTERNAL MODULE: ./components/admin/lab/VariantBlock.vue + 4 modules
var VariantBlock = __webpack_require__(252);

// EXTERNAL MODULE: ./components/admin/lab/FabricBlock.vue + 4 modules
var FabricBlock = __webpack_require__(253);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/DecideLabBlockDetail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var DecideLabBlockDetailvue_type_script_lang_js_ = ({
  props: {
    alias: String,
    blockDetails: Array,
    blockKey: String,
    remover: Function,
    colorCategories: Array
  },
  methods: {
    onDragEnd() {// this.$emit('dragEnd', this.localBlockDetails)
    }

  },

  data() {
    return {
      blocks: {
        variant: VariantBlock["default"],
        color: ColorBlock["default"],
        fabric: FabricBlock["default"]
      }
    };
  }

});
// CONCATENATED MODULE: ./components/admin/lab/DecideLabBlockDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var lab_DecideLabBlockDetailvue_type_script_lang_js_ = (DecideLabBlockDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/lab/DecideLabBlockDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(291)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lab_DecideLabBlockDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "19e100dc",
  "a77d6a76"
  
)

/* harmony default export */ var DecideLabBlockDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateLab_vue_vue_type_style_index_0_id_09620f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(290);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateLab_vue_vue_type_style_index_0_id_09620f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateLab_vue_vue_type_style_index_0_id_09620f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateLab_vue_vue_type_style_index_0_id_09620f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateLab_vue_vue_type_style_index_0_id_09620f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 367:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-09620f1e]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-09620f1e]{scroll-behavior:smooth}body[data-v-09620f1e]{margin:0!important;padding:0}*[data-v-09620f1e]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-09620f1e]{padding:6%}button[data-v-09620f1e]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-09620f1e]{width:7%}button.sub-action[data-v-09620f1e]{background-color:green}button.action[data-v-09620f1e]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-09620f1e]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-09620f1e]{padding:2% 5%;width:100%}}button.action.delete[data-v-09620f1e]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-09620f1e]:hover{background-color:#e01010}button.small[data-v-09620f1e]{font-size:11px;padding:1% 3%}button.clear[data-v-09620f1e]{background:transparent;padding:2% 5%}h1[data-v-09620f1e],h2[data-v-09620f1e],h3[data-v-09620f1e],h4[data-v-09620f1e],h5[data-v-09620f1e],h6[data-v-09620f1e],p[data-v-09620f1e],span[data-v-09620f1e]{margin:0;padding:0;color:#333}.page[data-v-09620f1e]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-09620f1e]{margin-top:13vh;padding:7%}}.page.-wh[data-v-09620f1e]{padding:0 0 5%}.page.side-pad[data-v-09620f1e]{padding:2%}@media(max-width:768px){.page.-broad[data-v-09620f1e]{padding:2%}}.page .page-header[data-v-09620f1e]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-09620f1e]{height:10vw}}.page .page-header .title[data-v-09620f1e]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-09620f1e]{font-size:5.4vw}}.page .side-pad[data-v-09620f1e]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-09620f1e]{padding:0 10%}}.pointer[data-v-09620f1e]{cursor:pointer}.center[data-v-09620f1e],.center-col[data-v-09620f1e]{display:flex;justify-content:center;align-items:center}.center-col[data-v-09620f1e]{flex-direction:column}.center-space[data-v-09620f1e]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-09620f1e]{position:relative}.white[data-v-09620f1e]{color:#fff}.scrollable-list[data-v-09620f1e]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-09620f1e]{justify-content:center}}.scrollable-list[data-v-09620f1e]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-09620f1e]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-09620f1e]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-09620f1e]{margin-top:10px;width:50px}[data-v-09620f1e]::-webkit-scrollbar{display:none}p.msg[data-v-09620f1e]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-09620f1e]{background-color:#a93737}p.msg.success[data-v-09620f1e]{background-color:#319a67}.flex[data-v-09620f1e]{display:flex}.flex.around[data-v-09620f1e]{justify-content:space-around}.flex.between[data-v-09620f1e]{justify-content:space-between}.flex.evenly[data-v-09620f1e]{justify-content:space-evenly}.flex.col[data-v-09620f1e]{flex-direction:column}.flex.wrap[data-v-09620f1e]{flex-wrap:wrap}.flex.center[data-v-09620f1e]{justify-content:center}.flex.center[data-v-09620f1e],.flex.v-center[data-v-09620f1e]{align-items:center}.flex.j-center[data-v-09620f1e]{justify-content:center}.flex.start[data-v-09620f1e]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-09620f1e]{align-items:center}.flex.baseline[data-v-09620f1e]{align-items:baseline}.flex.end[data-v-09620f1e]{justify-content:flex-end}.flex.end.center[data-v-09620f1e]{align-items:center}a[data-v-09620f1e]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-09620f1e]{display:none}}.onlyMobile[data-v-09620f1e]{display:none}@media(max-width:768px){.onlyMobile[data-v-09620f1e]{display:inline;display:initial}}.title[data-v-09620f1e]{font-size:22px;font-family:\"Poppins Bold\";color:#4c4b4e}.item-drag[data-v-09620f1e]{opacity:0}.flip-list-move[data-v-09620f1e]{transition:all .5s ease-in-out}.ghost[data-v-09620f1e]{opacity:0}.section[data-v-09620f1e]{border-color:rgba(135,131,131,.381)!important;position:relative;margin:10px;padding:5px 5px 30px;border-radius:5px;overflow:hidden}.label.que[data-v-09620f1e]{font-size:13px}.blocks[data-v-09620f1e]{padding:2%;border:1px solid #efefef}.blocks .block[data-v-09620f1e]{border:2px dotted #efefef;position:relative}.blocks .block .delete[data-v-09620f1e]{position:absolute;right:5px;top:5px;width:3%;z-index:1}.blocks .label[data-v-09620f1e]{font-family:\"SF-Pro Bold\";font-size:14px}.hero-block-details[data-v-09620f1e]{padding:2%;border:1px solid #000}.hero-block-details .hero-block-detail[data-v-09620f1e]{border:1px dotted #efefef;box-sizing:border-box}.questions[data-v-09620f1e]{margin-bottom:10px}.questions .question[data-v-09620f1e]{border:2px dashed #efefef;position:relative}.questions .question .delete[data-v-09620f1e]{position:absolute;top:3px;right:3px;width:25px;cursor:pointer}.add-new-question[data-v-09620f1e]{padding-bottom:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/UpdateLab.vue?vue&type=template&id=09620f1e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contents"},[_c('CancelUpdate',{on:{"close":_vm.closeForm}}),_vm._ssrNode(" <h2 class=\"heading\" data-v-09620f1e>"+_vm._ssrEscape("\n    "+_vm._s(_vm.editMode ? "Update" : "Add New")+" Bounipun Lab Layout\n  ")+"</h2> <div class=\"flex col center\" style=\"align-items:baseline; width:100%;\" data-v-09620f1e><div class=\"center\" style=\"width:100%;\" data-v-09620f1e><a href=\"/lab\" target=\"_blank\" data-v-09620f1e><span style=\"\\n          background: #333;\\n          text-align: center;\\n          color: white;\\n          font-size: 12px;\\n          padding: 2px 4px;\\n          border-radius: 2px;\\n        \" data-v-09620f1e>\n        Preview Product ➚\n      </span></a></div></div> "),_vm._ssrNode("<div class=\"flex\" data-v-09620f1e>","</div>",[(_vm.editMode)?_c('InputBox',{attrs:{"label":"Lab Layout ID","disabled":"","internal":true},model:{value:(_vm.doc._id),callback:function ($$v) {_vm.$set(_vm.doc, "_id", $$v)},expression:"doc._id"}}):_vm._e(),_vm._ssrNode(" "),_c('InputBox',{attrs:{"internal":true,"label":"Layout Name"},model:{value:(_vm.doc.name),callback:function ($$v) {_vm.$set(_vm.doc, "name", $$v)},expression:"doc.name"}}),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Page Title"},model:{value:(_vm.doc.title),callback:function ($$v) {_vm.$set(_vm.doc, "title", $$v)},expression:"doc.title"}})],2),_vm._ssrNode(" "),_c('InputBox',{attrs:{"label":"Page Tagline"},model:{value:(_vm.doc.tagline),callback:function ($$v) {_vm.$set(_vm.doc, "tagline", $$v)},expression:"doc.tagline"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex section\" data-v-09620f1e>","</div>",[_c('UploadImageV2',{attrs:{"multipleUpload":false,"label":"Set Hero Image (Desktop) - V2"},model:{value:(_vm.doc.heroImage),callback:function ($$v) {_vm.$set(_vm.doc, "heroImage", $$v)},expression:"doc.heroImage"}}),_vm._ssrNode(" "),_c('UploadImageV2',{attrs:{"multipleUpload":false,"label":"Set Hero Image (Mobile) - V2"},model:{value:(_vm.doc.heroImageMobile),callback:function ($$v) {_vm.$set(_vm.doc, "heroImageMobile", $$v)},expression:"doc.heroImageMobile"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blocks section\" data-v-09620f1e>","</div>",[_vm._ssrNode("<p class=\"title\" data-v-09620f1e>Hero Blocks:</p> <br data-v-09620f1e> <br data-v-09620f1e> "),_vm._l((_vm.doc.heroBlocks),function(heroBlock,index){return _c('Accordion',{key:heroBlock.key,attrs:{"heading":("#" + (index + 1) + " - " + (heroBlock.name))}},[_c('div',{staticClass:"block section"},[_c('img',{staticClass:"delete",attrs:{"src":"/icons/dark/remove-cart-item.png"},on:{"click":function($event){return _vm.removeBlock('heroBlocks', index)}}}),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('InputBox',{attrs:{"label":"Hero Block Name"},on:{"input":function($event){return _vm.setAlias($event, heroBlock)}},model:{value:(heroBlock.name),callback:function ($$v) {_vm.$set(heroBlock, "name", $$v)},expression:"heroBlock.name"}}),_vm._v(" "),_c('InputBox',{attrs:{"label":"Alias","disabled":true},model:{value:(heroBlock.alias),callback:function ($$v) {_vm.$set(heroBlock, "alias", $$v)},expression:"heroBlock.alias"}})],1),_vm._v(" "),_c('TextBox',{attrs:{"slim":"","label":"Hero Block Paragraph"},model:{value:(heroBlock.paragraph),callback:function ($$v) {_vm.$set(heroBlock, "paragraph", $$v)},expression:"heroBlock.paragraph"}})],1)])}),_vm._ssrNode(" <div class=\"flex center\" data-v-09620f1e><button class=\"action\" data-v-09620f1e>\n        + Add New Hero Block\n      </button></div>")],2),_vm._ssrNode(" "),(Object.keys(_vm.doc.heroBlockDetails).length > 0)?_vm._ssrNode("<div class=\"hero-block-details block section\" data-v-09620f1e>","</div>",[_vm._ssrNode("<p class=\"title\" data-v-09620f1e>Hero Blocks Details:</p> <br data-v-09620f1e> <br data-v-09620f1e> "),_vm._l((_vm.doc.heroBlocks),function(heroBlock){return _c('Accordion',{key:heroBlock.key,ref:heroBlock.key,refInFor:true,attrs:{"heading":("Details for: " + (heroBlock.name))}},[_c('DecideLabBlockDetail',{attrs:{"alias":heroBlock.alias,"remover":_vm.removeDetailBlock,"blockKey":heroBlock.key,"blockDetails":_vm.doc.heroBlockDetails[heroBlock.key],"colorCategories":_vm.colorCategories},on:{"input":function($event){return _vm.setValues($event, _vm.doc.heroBlockDetails[heroBlock.key])}}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"flex center"},[_c('button',{staticClass:"action",on:{"click":function($event){return _vm.addNewDetailBlock(heroBlock.key, heroBlock.alias)}}},[_vm._v("\n          + Add New "+_vm._s(heroBlock.name)+" Block\n        ")])])],1)})],2):_vm._e(),_vm._ssrNode(" "),_c('TextBox',{attrs:{"label":"Description","internal":true},model:{value:(_vm.doc.description),callback:function ($$v) {_vm.$set(_vm.doc, "description", $$v)},expression:"doc.description"}}),_vm._ssrNode(" "),_c('Toggle',{attrs:{"label":"Status"},model:{value:(_vm.doc.status),callback:function ($$v) {_vm.$set(_vm.doc, "status", $$v)},expression:"doc.status"}}),_vm._ssrNode(" <div class=\"center-space\" style=\"width: 70%\" data-v-09620f1e>"+((_vm.loading)?("<img src=\"/loading.gif\" class=\"loading\" data-v-09620f1e>"):"<!---->")+" "+((_vm.updated)?("<img src=\"/complete.gif\" class=\"action-complete\" data-v-09620f1e>"):"<!---->")+" <button"+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"action\" data-v-09620f1e>"+_vm._ssrEscape("\n      "+_vm._s(_vm.editMode ? "Apply Changes" : "Add New Layout")+"\n    ")+"</button> "+((_vm.editMode)?("<button"+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"action delete\" data-v-09620f1e>\n      Delete\n    </button>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/admin/lab/UpdateLab.vue?vue&type=template&id=09620f1e&scoped=true&

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(108);

// EXTERNAL MODULE: external "slugify"
var external_slugify_ = __webpack_require__(110);
var external_slugify_default = /*#__PURE__*/__webpack_require__.n(external_slugify_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/lab/UpdateLab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

const baseDoc = () => {
  const key = Object(external_uuid_["v4"])();
  return {
    _id: "",
    name: "",
    title: "",
    tagline: "",
    heroImage: "",
    heroImageMobile: "",
    heroBlocks: [],
    heroBlockDetails: {},
    description: "",
    status: false
  };
};
/* base variant block detail */


const baseVariantBlock = length => {
  const key = Object(external_uuid_["v4"])();
  return {
    name: "Variant -" + length,
    mainImage: "",
    paragraph: "",
    key
  };
};
/* base color block detail */


const baseColorBlock = length => {
  const key = Object(external_uuid_["v4"])();
  return {
    name: "Color -" + length,
    mainImage: "",
    paragraph: "",
    key,
    colorImage: "",
    category: ""
  };
};
/* base fabric block detail */


const baseFabricBlock = length => {
  const key = Object(external_uuid_["v4"])();
  return {
    name: "Fabric -" + length,
    mainImage: "",
    paragraph: "",
    key,
    subImage1: "",
    subImage2: "",
    subHeading1: "",
    subParagraph1: "",
    subHeading2: "",
    subParagraph2: "",
    subHeading3: "",
    subParagraph3: ""
  };
};

/* harmony default export */ var UpdateLabvue_type_script_lang_js_ = ({
  props: {
    model: String
  },

  data() {
    return {
      editMode: false,
      doc: baseDoc(),
      colorCategories: [],
      dragEnabled: false,
      loading: false,
      updated: false
    };
  },

  mounted() {
    this.fetchColorCategories();
  },

  methods: {
    setAlias(value, heroBlock) {
      heroBlock.alias = external_slugify_default()(value.toLowerCase());
    },

    newKey() {
      return Object(external_uuid_["v4"])();
    },

    async fetchColorCategories() {
      const result = await this.$fetchCollection("color_categories");
      this.colorCategories = result.docs.map(({
        name
      }) => {
        return {
          name,
          value: name
        };
      });
    },

    setValues({
      payload,
      index
    }, blockDetails) {
      blockDetails[index] = payload;
    },

    addNewBlock(type) {
      switch (type) {
        case "heroBlocks":
          const key = Object(external_uuid_["v4"])();
          this.doc.heroBlocks.push({
            name: "",
            alias: "",
            paragraph: "",
            status: false,
            key
          });
          /* create an object for block detail */
          // this.doc.heroBlockDetails[key] = [];

          this.$set(this.doc.heroBlockDetails, key, []);
          break;
      }

      this.$forceUpdate();
    },

    addNewDetailBlock(blockKey, alias) {
      // alert(alias)
      let blockDetails = this.doc.heroBlockDetails[blockKey];
      /* if detail block not present */

      if (!blockDetails) blockDetails = this.doc.heroBlockDetails[blockKey]; // this.$set(this.items, payload.index, payload.value);

      const refreshParentAccordion = () => {
        const parentAccordion = this.$refs[blockKey];

        if (parentAccordion[0]) {
          parentAccordion[0].toggle();
          setTimeout(() => parentAccordion[0].toggle(), 70);
        }
      };

      switch (alias) {
        case "variant":
          blockDetails.push(baseVariantBlock(blockDetails.length));
          break;

        case "color":
          blockDetails.push(baseColorBlock(blockDetails.length));
          break;

        case "fabric":
          blockDetails.push(baseFabricBlock(blockDetails.length));
          break;
      }

      refreshParentAccordion();
      this.$forceUpdate();
    },

    removeDetailBlock(blockKey, index) {
      // alert(blockKey)
      this.doc.heroBlockDetails[blockKey].splice(index, 1);
    },

    removeBlock(property, index) {
      let deletedItems = [];
      if (this.doc[property].length <= 1) return;
      deletedItems = this.doc[property].splice(index, 1);
      const removedBlock = deletedItems[0];
      delete this.doc.heroBlockDetails[removedBlock.key]; // TODO: remove corresponding heroBlockDetail
    },

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
      console.log(details);
      console.log("details to be populated");
      const keys = Object.keys(details);

      for (const key of keys) {
        if (details[key] !== undefined) this.doc[key] = details[key];
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
// CONCATENATED MODULE: ./components/admin/lab/UpdateLab.vue?vue&type=script&lang=js&
 /* harmony default export */ var lab_UpdateLabvue_type_script_lang_js_ = (UpdateLabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/lab/UpdateLab.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(366)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lab_UpdateLabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "09620f1e",
  "20f5f530"
  
)

/* harmony default export */ var UpdateLab = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CancelUpdate: __webpack_require__(134).default,InputBox: __webpack_require__(121).default,UploadImageV2: __webpack_require__(167).default,TextBox: __webpack_require__(124).default,Accordion: __webpack_require__(159).default,DecideLabBlockDetail: __webpack_require__(331).default,Toggle: __webpack_require__(129).default})


/***/ })

};;
//# sourceMappingURL=update-lab.js.map
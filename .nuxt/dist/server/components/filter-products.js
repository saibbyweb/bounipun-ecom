exports.ids = [29,1];
exports.modules = {

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

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("248facac", content, true, context)
};

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterProducts_vue_vue_type_style_index_0_id_7d858c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterProducts_vue_vue_type_style_index_0_id_7d858c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterProducts_vue_vue_type_style_index_0_id_7d858c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterProducts_vue_vue_type_style_index_0_id_7d858c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterProducts_vue_vue_type_style_index_0_id_7d858c9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 262:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-7d858c9e]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-7d858c9e]{scroll-behavior:smooth}body[data-v-7d858c9e]{margin:0!important;padding:0}*[data-v-7d858c9e]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-7d858c9e]{padding:6%}button[data-v-7d858c9e]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-7d858c9e]{width:7%}button.sub-action[data-v-7d858c9e]{background-color:green}button.action[data-v-7d858c9e]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-7d858c9e]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-7d858c9e]{padding:2% 5%;width:100%}}button.action.delete[data-v-7d858c9e]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-7d858c9e]:hover{background-color:#e01010}button.small[data-v-7d858c9e]{font-size:11px;padding:1% 3%}button.clear[data-v-7d858c9e]{background:transparent;padding:2% 5%}h1[data-v-7d858c9e],h2[data-v-7d858c9e],h3[data-v-7d858c9e],h4[data-v-7d858c9e],h5[data-v-7d858c9e],h6[data-v-7d858c9e],p[data-v-7d858c9e],span[data-v-7d858c9e]{margin:0;padding:0;color:#333}.page[data-v-7d858c9e]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-7d858c9e]{margin-top:13vh;padding:7%}}.page.-wh[data-v-7d858c9e]{padding:0 0 5%}.page.side-pad[data-v-7d858c9e]{padding:2%}@media(max-width:768px){.page.-broad[data-v-7d858c9e]{padding:2%}}.page .page-header[data-v-7d858c9e]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-7d858c9e]{height:10vw}}.page .page-header .title[data-v-7d858c9e]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-7d858c9e]{font-size:5.4vw}}.page .side-pad[data-v-7d858c9e]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-7d858c9e]{padding:0 10%}}.pointer[data-v-7d858c9e]{cursor:pointer}.center[data-v-7d858c9e],.center-col[data-v-7d858c9e]{display:flex;justify-content:center;align-items:center}.center-col[data-v-7d858c9e]{flex-direction:column}.center-space[data-v-7d858c9e]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-7d858c9e]{position:relative}.white[data-v-7d858c9e]{color:#fff}.scrollable-list[data-v-7d858c9e]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-7d858c9e]{justify-content:center}}.scrollable-list[data-v-7d858c9e]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-7d858c9e]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-7d858c9e]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-7d858c9e]{margin-top:10px;width:50px}[data-v-7d858c9e]::-webkit-scrollbar{display:none}p.msg[data-v-7d858c9e]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-7d858c9e]{background-color:#a93737}p.msg.success[data-v-7d858c9e]{background-color:#319a67}.flex[data-v-7d858c9e]{display:flex}.flex.around[data-v-7d858c9e]{justify-content:space-around}.flex.between[data-v-7d858c9e]{justify-content:space-between}.flex.evenly[data-v-7d858c9e]{justify-content:space-evenly}.flex.col[data-v-7d858c9e]{flex-direction:column}.flex.wrap[data-v-7d858c9e]{flex-wrap:wrap}.flex.center[data-v-7d858c9e]{justify-content:center}.flex.center[data-v-7d858c9e],.flex.v-center[data-v-7d858c9e]{align-items:center}.flex.j-center[data-v-7d858c9e]{justify-content:center}.flex.start[data-v-7d858c9e]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-7d858c9e]{align-items:center}.flex.baseline[data-v-7d858c9e]{align-items:baseline}.flex.end[data-v-7d858c9e]{justify-content:flex-end}.flex.end.center[data-v-7d858c9e]{align-items:center}a[data-v-7d858c9e]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-7d858c9e]{display:none}}.onlyMobile[data-v-7d858c9e]{display:none}@media(max-width:768px){.onlyMobile[data-v-7d858c9e]{display:inline;display:initial}}.offcanvas-filters[data-v-7d858c9e]{position:fixed;top:0;left:0;background:hsla(0,0%,100%,.94902);width:40vw;height:100vh;margin-left:-60vw;transition:all .4s ease-in-out;z-index:3;overflow-y:scroll}@media(max-width:768px){.offcanvas-filters[data-v-7d858c9e]{width:60vw}}.offcanvas-filters .header[data-v-7d858c9e]{display:flex;align-items:center;justify-content:space-between;position:absolute;top:0;left:0;width:100%;height:20vh;padding:2% 4%}.offcanvas-filters.visible[data-v-7d858c9e]{margin-left:0}.offcanvas-filters .label[data-v-7d858c9e]{font-family:\"SF-Pro\";text-transform:capitalize;font-size:12px;cursor:pointer}.offcanvas-filters .all-options[data-v-7d858c9e]{padding:15% 5% 0}.offcanvas-filters .all-options .colors .option[data-v-7d858c9e]{margin:5px}.offcanvas-filters .all-options .colors .option .color-box[data-v-7d858c9e]{height:50px;width:50px;margin-left:5px}.offcanvas-filters .all-options .colors .option .label[data-v-7d858c9e]{margin-top:10px}@media(max-width:768px){.offcanvas-filters .all-options .colors .option[data-v-7d858c9e]{width:25%}.offcanvas-filters .all-options .colors .option .color-box[data-v-7d858c9e]{height:30px;width:30px;margin:10px}.offcanvas-filters .all-options .colors .option .label[data-v-7d858c9e]{font-size:10px;text-transform:capitalize}}.offcanvas-filters .close[data-v-7d858c9e]{width:3%;transition:all .4s ease-in-out;cursor:pointer}.offcanvas-filters .close[data-v-7d858c9e]:hover{transform:rotate(70deg)}@media(max-width:768px){.offcanvas-filters .close[data-v-7d858c9e]{width:6%}}.variant-category[data-v-7d858c9e]{margin-bottom:15px}.variant-category .category-header[data-v-7d858c9e]{display:flex;align-items:center;grid-gap:8px;gap:8px;margin:10px 0;padding-bottom:5px;border-bottom:1px solid #eee}.variant-category .category-header .category-checkbox[data-v-7d858c9e]{width:14px;height:14px;cursor:pointer}.variant-category .category-heading[data-v-7d858c9e]{font-family:\"SF-Pro Bold\";color:#333;font-size:11px;text-transform:uppercase;margin:0}.variant-category .option[data-v-7d858c9e]{padding-left:22px;margin-top:8px}.variant-category .option .label[data-v-7d858c9e]{display:flex;align-items:center;grid-gap:8px;gap:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FilterProducts.vue?vue&type=template&id=7d858c9e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"offcanvas-filters shadow",class:{ visible: _vm.filtersOpen }},[_vm._ssrNode("<div style=\"position: relative\" data-v-7d858c9e>","</div>",[_vm._ssrNode("<br data-v-7d858c9e> <br data-v-7d858c9e> <div class=\"header shadow\" data-v-7d858c9e><h3 data-v-7d858c9e>Filters</h3> <span style=\"font-size: 12px; cursor: pointer\" data-v-7d858c9e>Clear Selection</span> <img src=\"/icons/dark/close.png\" class=\"close\" data-v-7d858c9e></div> <br data-v-7d858c9e> "),_vm._ssrNode("<div class=\"all-options\" style=\"height: 80vh; overflow-y: scroll; margin-top: 4vh\" data-v-7d858c9e>","</div>",[(!_vm.isEscape && _vm.showAccordions)?_c('Accordion',{attrs:{"heading":"Availability","expanded":_vm.accordionStates.availability}},_vm._l((_vm.filterData.availabilityTypes),function(type,index){return _c('div',{key:index,staticClass:"option"},[_c('label',{staticClass:"label"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(type.checked),expression:"type.checked"}],attrs:{"type":"checkbox","name":"type"},domProps:{"value":type.value,"checked":Array.isArray(type.checked)?_vm._i(type.checked,type.value)>-1:(type.checked)},on:{"change":function($event){var $$a=type.checked,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=type.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(type, "checked", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(type, "checked", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(type, "checked", $$c)}}}}),_vm._v("\n            "+_vm._s(type.name))])])}),0):_vm._e(),_vm._ssrNode(" "),(!_vm.isEscape && _vm.showAccordions)?_c('Accordion',{attrs:{"heading":"Variants","expanded":_vm.accordionStates.variants}},_vm._l((_vm.groupedVariants),function(categoryGroup,categoryName){return _c('div',{key:categoryName,staticClass:"variant-category"},[_c('div',{staticClass:"category-header"},[_c('input',{staticClass:"category-checkbox",attrs:{"type":"checkbox"},domProps:{"checked":_vm.isCategoryChecked(categoryName)},on:{"change":function($event){return _vm.toggleCategory(categoryName)}}}),_vm._v(" "),_c('h4',{staticClass:"category-heading"},[_vm._v(_vm._s(categoryName))])]),_vm._v(" "),_vm._l((categoryGroup),function(variant){return _c('div',{key:variant._id,staticClass:"option"},[_c('label',{staticClass:"label"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(variant.checked),expression:"variant.checked"}],attrs:{"type":"checkbox","name":"variants"},domProps:{"value":variant.value,"checked":Array.isArray(variant.checked)?_vm._i(variant.checked,variant.value)>-1:(variant.checked)},on:{"change":function($event){var $$a=variant.checked,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=variant.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(variant, "checked", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(variant, "checked", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(variant, "checked", $$c)}}}}),_vm._v("\n              "+_vm._s(variant.name))])])})],2)}),0):_vm._e(),_vm._ssrNode(" "),(!_vm.collectionView && _vm.showAccordions)?_c('Accordion',{attrs:{"heading":"Collection","expanded":_vm.accordionStates.collection}},_vm._l((_vm.filterData.collections),function(collection,index){return _c('div',{key:index,staticClass:"option"},[_c('label',{staticClass:"label"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(collection.checked),expression:"collection.checked"}],attrs:{"type":"checkbox","name":"collection"},domProps:{"value":collection.value,"checked":Array.isArray(collection.checked)?_vm._i(collection.checked,collection.value)>-1:(collection.checked)},on:{"change":function($event){var $$a=collection.checked,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=collection.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(collection, "checked", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(collection, "checked", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(collection, "checked", $$c)}}}}),_vm._v("\n            "+_vm._s(collection.lock ? "" : "")+"\n            "+_vm._s(collection.name.toLowerCase()))])])}),0):_vm._e(),_vm._ssrNode(" "),(_vm.showAccordions)?_c('Accordion',{attrs:{"heading":"Base Color","expanded":_vm.accordionStates.baseColor}},[_c('div',{staticClass:"flex wrap colors"},_vm._l((_vm.filterData.baseColors),function(color,index){return _c('div',{key:index,staticClass:"option flex col center"},[_c('div',{staticClass:"color-box shadow",style:(("background: " + (color.hex)))}),_vm._v(" "),_c('label',{staticClass:"label flex start center"},[_vm._v("\n              "+_vm._s(color.name.toLowerCase())+"\n            ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(color.checked),expression:"color.checked"}],staticClass:"color-check",attrs:{"type":"checkbox","name":"baseColor"},domProps:{"value":color.value,"checked":Array.isArray(color.checked)?_vm._i(color.checked,color.value)>-1:(color.checked)},on:{"change":function($event){var $$a=color.checked,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=color.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(color, "checked", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(color, "checked", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(color, "checked", $$c)}}}})])}),0)]):_vm._e(),_vm._ssrNode(" "),(_vm.showAccordions && false)?_c('Accordion',{attrs:{"heading":"Price Range","expanded":_vm.accordionStates.priceRange}},_vm._l((_vm.filterData.priceRanges),function(range,index){return _c('div',{key:index,staticClass:"option"},[_c('label',{staticClass:"label"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.filterData.selectedPriceRange),expression:"filterData.selectedPriceRange"}],attrs:{"type":"radio","name":"priceRange"},domProps:{"value":range.value,"checked":_vm._q(_vm.filterData.selectedPriceRange,range.value)},on:{"change":function($event){return _vm.$set(_vm.filterData, "selectedPriceRange", range.value)}}}),_vm._v("\n            "+_vm._s(range.name)+"\n          ")])])}),0):_vm._e()],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FilterProducts.vue?vue&type=template&id=7d858c9e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FilterProducts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FilterProductsvue_type_script_lang_js_ = ({
  props: {
    filtersOpen: {
      type: Boolean,
      default: false
    },
    collectionView: {
      type: Boolean,
      default: false
    },
    isEscape: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      showAccordions: true,
      filterData: {
        types: [{
          name: "Under Bounipun",
          value: "under-bounipun",
          checked: false
        }, {
          name: "Third Party",
          value: "third-party",
          checked: false
        }],
        availabilityTypes: [{
          name: "Ready To Ship",
          value: "ready-to-ship",
          checkd: false
        } // {
        //   name: "Made to Order",
        //   value: "made-to-order",
        //   checkd: false
        // }
        ],
        priceRanges: [{
          name: "Under ₹ 9999",
          value: "<9999"
        }, {
          name: "Under ₹ 14999",
          value: "<14999"
        }, {
          name: "Under ₹ 19999",
          value: "<19999"
        }, {
          name: "Under ₹ 24999",
          value: "<24999"
        }, {
          name: "Under ₹ 29999",
          value: "<29999"
        }, {
          name: "Under ₹ 34999",
          value: "<34999"
        }],
        selectedPriceRange: "",
        collections: [],
        variants: [],
        baseColors: []
      },
      accordionStates: {
        availability: true,
        variants: true,
        collection: true,
        baseColor: true,
        priceRange: true
      }
    };
  },

  mounted() {
    this.fetchFilterData();
  },

  watch: {
    filterData: {
      handler(newValue) {
        this.$emit("updated", newValue);
      },

      deep: true,
      immediate: true
    },

    $route() {
      this.clearAllFilters();
    },

    filtersOpen(newVal) {
      if (newVal) {
        // Remove all accordions
        this.showAccordions = false; // Re-render all accordions after 500ms

        setTimeout(() => {
          this.showAccordions = true;
        }, 300);
      }
    }

  },
  methods: {
    /* clear all filters */
    clearAllFilters() {
      /* uncheck all filters */
      const filterKeys = ["availabilityTypes", "collections", "variants", "baseColors"];
      filterKeys.forEach(filterKey => {
        this.filterData[filterKey].forEach(option => option.checked = false);
      });
      /* reset selected price range */

      this.filterData.selectedPriceRange = "";
      this.$emit("clearSort");
    },

    async fetchFilterData() {
      /* fetch type of products */

      /* fetch collections */

      /* fetch variants */

      /* fetch base colors */
      const filtersFetch = this.$axios.$get("/getSearchFilters");
      /* wait for request to complete */

      const {
        response,
        error
      } = await this.$task(filtersFetch);
      /* if error occurred */

      if (error || response.fetched === false) {
        console.log("could not fetch search filters");
        return;
      }

      this.filterData.collections = response.collections.map(collection => ({ ...collection,
        value: collection._id,
        checked: false
      }));
      /* set base colors (for product cards)*/

      this.baseColors = response.baseColors;
      this.filterData.baseColors = response.baseColors.map(color => ({ ...color,
        value: color.name,
        checked: false
      }));
      this.filterData.variants = response.variants.map(variant => ({ ...variant,
        value: variant._id,
        checked: false
      }));
      console.log(JSON.stringify(this.filterData.variants), "-VARIANTS-");
      /* TODO: temporary fix: filter out decor variants */
      // this.filterData.variants = this.filterData.variants.filter(variant => ['SQUARE', 'SHAWL', 'STOLE'].includes(variant.name.toUpperCase()) );
      // this.filterData.variants.forEach(f => {
      //   const name = f.name.toUpperCase();
      //   console.log(name,'-VARIANTS-')
      //   if(name === "BASIC" || name==="CLASSIC" || name === "PREMIUM") {
      //    f.name = `${f.name} - Décor`
      //   }
      //   return f
      // })

      this.$emit("dataFetched");
    },

    groupedVariants() {
      const grouped = {};
      this.filterData.variants.forEach(variant => {
        var _variant$category;

        const categoryName = ((_variant$category = variant.category) === null || _variant$category === void 0 ? void 0 : _variant$category.name) || "Other";

        if (!grouped[categoryName]) {
          grouped[categoryName] = [];
        }

        grouped[categoryName].push(variant);
      }); // Sort variants within each category by name

      Object.keys(grouped).forEach(category => {
        grouped[category].sort((a, b) => a.name.localeCompare(b.name));
      });
      return grouped;
    },

    isCategoryChecked(categoryName) {
      const categoryGroup = this.groupedVariants[categoryName];
      return categoryGroup && categoryGroup.length > 0 && categoryGroup.every(variant => variant.checked);
    },

    toggleCategory(categoryName) {
      const categoryGroup = this.groupedVariants[categoryName];
      const newState = !this.isCategoryChecked(categoryName);

      if (categoryGroup) {
        categoryGroup.forEach(variant => {
          variant.checked = newState;
        });
      }
    }

  },
  computed: {
    groupedVariants() {
      const grouped = {};
      this.filterData.variants.forEach(variant => {
        var _variant$category2;

        const categoryName = ((_variant$category2 = variant.category) === null || _variant$category2 === void 0 ? void 0 : _variant$category2.name) || "Other";

        if (!grouped[categoryName]) {
          grouped[categoryName] = [];
        }

        grouped[categoryName].push(variant);
      }); // Sort variants within each category by name

      Object.keys(grouped).forEach(category => {
        grouped[category].sort((a, b) => a.name.localeCompare(b.name));
      });
      return grouped;
    }

  }
});
// CONCATENATED MODULE: ./components/FilterProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FilterProductsvue_type_script_lang_js_ = (FilterProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FilterProducts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(261)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FilterProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d858c9e",
  "003f6774"
  
)

/* harmony default export */ var FilterProducts = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Accordion: __webpack_require__(159).default})


/***/ })

};;
//# sourceMappingURL=filter-products.js.map
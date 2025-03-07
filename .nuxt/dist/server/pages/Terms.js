exports.ids = [115,1];
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

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(524);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("16aef7ab", content, true, context)
};

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28b6bddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28b6bddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28b6bddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28b6bddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_28b6bddb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 524:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-28b6bddb]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-28b6bddb]{scroll-behavior:smooth}body[data-v-28b6bddb]{margin:0!important;padding:0}*[data-v-28b6bddb]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-28b6bddb]{padding:6%}button[data-v-28b6bddb]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-28b6bddb]{width:7%}button.sub-action[data-v-28b6bddb]{background-color:green}button.action[data-v-28b6bddb]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-28b6bddb]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-28b6bddb]{padding:2% 5%;width:100%}}button.action.delete[data-v-28b6bddb]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-28b6bddb]:hover{background-color:#e01010}button.small[data-v-28b6bddb]{font-size:11px;padding:1% 3%}button.clear[data-v-28b6bddb]{background:transparent;padding:2% 5%}h1[data-v-28b6bddb],h2[data-v-28b6bddb],h3[data-v-28b6bddb],h4[data-v-28b6bddb],h5[data-v-28b6bddb],h6[data-v-28b6bddb],p[data-v-28b6bddb],span[data-v-28b6bddb]{margin:0;padding:0;color:#333}.page[data-v-28b6bddb]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-28b6bddb]{margin-top:13vh;padding:7%}}.page.-wh[data-v-28b6bddb]{padding:0 0 5%}.page.side-pad[data-v-28b6bddb]{padding:2%}@media(max-width:768px){.page.-broad[data-v-28b6bddb]{padding:2%}}.page .page-header[data-v-28b6bddb]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-28b6bddb]{height:10vw}}.page .page-header .title[data-v-28b6bddb]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-28b6bddb]{font-size:5.4vw}}.page .side-pad[data-v-28b6bddb]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-28b6bddb]{padding:0 10%}}.pointer[data-v-28b6bddb]{cursor:pointer}.center[data-v-28b6bddb],.center-col[data-v-28b6bddb]{display:flex;justify-content:center;align-items:center}.center-col[data-v-28b6bddb]{flex-direction:column}.center-space[data-v-28b6bddb]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-28b6bddb]{position:relative}.white[data-v-28b6bddb]{color:#fff}.scrollable-list[data-v-28b6bddb]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-28b6bddb]{justify-content:center}}.scrollable-list[data-v-28b6bddb]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-28b6bddb]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-28b6bddb]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-28b6bddb]{margin-top:10px;width:50px}[data-v-28b6bddb]::-webkit-scrollbar{display:none}p.msg[data-v-28b6bddb]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-28b6bddb]{background-color:#a93737}p.msg.success[data-v-28b6bddb]{background-color:#319a67}.flex[data-v-28b6bddb]{display:flex}.flex.around[data-v-28b6bddb]{justify-content:space-around}.flex.between[data-v-28b6bddb]{justify-content:space-between}.flex.evenly[data-v-28b6bddb]{justify-content:space-evenly}.flex.col[data-v-28b6bddb]{flex-direction:column}.flex.wrap[data-v-28b6bddb]{flex-wrap:wrap}.flex.center[data-v-28b6bddb]{justify-content:center}.flex.center[data-v-28b6bddb],.flex.v-center[data-v-28b6bddb]{align-items:center}.flex.j-center[data-v-28b6bddb]{justify-content:center}.flex.start[data-v-28b6bddb]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-28b6bddb]{align-items:center}.flex.baseline[data-v-28b6bddb]{align-items:baseline}.flex.end[data-v-28b6bddb]{justify-content:flex-end}.flex.end.center[data-v-28b6bddb]{align-items:center}a[data-v-28b6bddb]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-28b6bddb]{display:none}}.onlyMobile[data-v-28b6bddb]{display:none}@media(max-width:768px){.onlyMobile[data-v-28b6bddb]{display:inline;display:initial}}.wrapper h1[data-v-28b6bddb]{text-align:center}.wrapper p[data-v-28b6bddb]{font-family:\"SF-Pro\";font-size:13px;padding:5px;color:#6a6a6a}.wrapper p .bold[data-v-28b6bddb]{font-weight:900;color:#000}@media(max-width:768px){.wrapper h1[data-v-28b6bddb]{margin-bottom:40px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Terms.vue?vue&type=template&id=28b6bddb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._ssrNode("<div class=\"wrapper\" data-v-28b6bddb>","</div>",[_vm._ssrNode("<h1 data-v-28b6bddb>Terms and Conditions</h1> "),_c('Accordion',{attrs:{"heading":"Covid19 Information"}},[_c('p',[_vm._v("\n       Staying in line with the current lockdown in various parts of the\n       country, there is a delay in delivering orders as most of our courier\n       partners have halted operations while others are short staffed. We are\n       constantly monitoring the situation and working with our courier\n       partners to get your orders delivered as soon as possible. We appreciate\n       your patience and understanding! ")])]),_vm._ssrNode(" "),_c('Accordion',{attrs:{"heading":"Product Prices"}},[_c('p',[_vm._v("\n       All references to (INR) Rupee on this website are in Indian currency.\n       Indian prices are different to International prices due to taxes/duties,\n       and the laws of the countries they have been bought from. In cases of\n       International shipping, prices may vary when logging into the site from\n       different postal codes and locations. Prices are subject to change at\n       any time, without any notifications. All rights to change prices are\n       reserved by Bounipun. Prices of products available at retail outlets/\n       boutiques / resellers are only available within India. No product can be\n       sold for Indian prices outside the country.")])]),_vm._ssrNode(" "),_c('Accordion',{attrs:{"heading":"Shipping and Delivery"}},[_c('p',[_vm._v("\n       We offer complimentary domestic and International shipping. However, this offer can be extended or removed anytime without\n       informing, changes will reflect in your shopping cart."),_c('br'),_c('br'),_vm._v("\n\n       Thereafter minimum standard shipping charges per order will be Rs 300/=\n       & $39 for domestic & international respectively."),_c('br'),_c('br'),_vm._v("\n\n       Shipping costs are calculated based on cumulative weight or volume of\n       entire order and are different for domestic and international delivery.\n       In the event that a non-delivery occurs on account of a mistake by you\n       (i.e. wrong name, address or contact number) any extra cost towards\n       re-delivery shall be claimed by the user placing the order."),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"bold"},[_vm._v("Standard Shipping:")]),_vm._v(" Time taken to make, finish and pack the order.\n       Standard shipping above one week are considered as custom-made orders,\n       excluding ‘ready to ship’ orders."),_c('br'),_c('br'),_vm._v("\n\n       The estimate time to ship will differ depending on the individual\n       deadline mentioned against each order product as STANDARD SHIPPING. Our\n       products are shipped as per the timelines mentioned on product page .The\n       delivery lead-time is about 6-12 days from the date of dispatch for\n       domestic and international orders respectively. All the shipping details\n       will be shared over a registered e-mail and it will reflect in \"My\n       Orders\" while you are logged in."),_c('br'),_c('br'),_vm._v("\n\n       Bounipun shall not be liable for any delay / non-delivery of purchased\n       goods by flood, fire, wars, acts of God or any cause that is beyond the\n       control of Bounipun. The user must agree to provide authentic and true\n       information, to avoid any kind of delay or loss of merchandise. Bounipun\n       reserves the right to confirm and validate the information and other\n       details provided by the user at any point of time. If upon confirmation,\n       such user details are found not true (wholly or partly), Bounipun has\n       the right in its sole discretion to reject the registration and debar\n       the user from using the services available at this website, and / or\n       other affiliated websites without prior intimation whatsoever. Delivery\n       of orders would be done address specific not person specific."),_c('br'),_c('br'),_vm._v("\n\n       Octroi charges may be levied on few destinations (mostly in Maharashtra)\n       displayed on the site. These charges are not refundable and shall be\n       borne by the customer. In the event of cancellation of the order the\n       Octroi charges levied shall not be refunded."),_c('br'),_c('br'),_vm._v("\n\n       All Duties and taxes for international shipping shall be borne by the\n       customer. Bounipun is not liable to pay any Duties or Taxes for\n       International Shipping.")])]),_vm._ssrNode(" "),_c('Accordion',{attrs:{"heading":"Returns and Exchanges"}},[_c('p',[_vm._v("\n       Bounipun acknowledges return of products only limited to direct sale\n       between vendor and consumer. This only entails sale online, and not\n       through retail outlets. Before your parcel leaves our warehouse, it is\n       fully checked by our quality control team. Any product that has been\n       hampered or damaged while transportation MUST be notified by email\n       within 48 hours of the product being delivered and returned to our\n       warehouse within a strict time period of one week, else Bounipun will\n       not be liable to accept the merchandise. In such cases, the customer\n       will have to write in to "),_c('b',[_vm._v(" care@bounipun.in ")]),_vm._v(" and a prompt response\n       is guaranteed from our end. We will investigate the damage from our end\n       and repair the merchandise in entirety."),_c('br'),_c('br'),_vm._v("\n\n      ALL couriers of this nature will be borne by the customer themselves. Bounipun will only bear the expenses of the transaction after the repair of the merchandise. In cases wherein due to usage of the merchandise, some portions of the product is damaged, such as fabric, embroidery will only be repaired within a period of two weeks from the time of receipt of the merchandise after dispatch from our warehouse. Please note, damaged products specific to repair will have to be couriered back to our warehouse wherein all costs will be borne by the customer themselves. Bounipun will only bear the expenses of the transaction after the repair of the merchandise.")])]),_vm._ssrNode(" "),_c('Accordion',{attrs:{"heading":"Cancellation/Refunds"}},[_c('p',[_vm._v("\n       After having placed their order, customers will have a window of 48\n       hours to cancel their order either from the \"My Orders\" section on the\n       website or by contacting us via email. In that case, the amount deducted\n       for the order will be refunded within 7-8 working days to their original\n       payment method. Customers may cancel their order only if the order has\n       not been dispatched yet. We do not accept any cancellation on orders\n       after the product has been processed or dispatched from our warehouse.\n       No refund or exchange will be entertained for custom-made orders. ")])]),_vm._ssrNode(" "),_c('Accordion',{attrs:{"heading":"Intellectual Property"}},[_c('p',[_vm._v("\n       Bounipun is the owner and authorized user of all intellectual property\n       including but not limited to trade marks, logos, names and designs,\n       whether registered or unregistered, and other marks that are otherwise\n       owned or licensed to Bounipun in and associated with this website\n       (collectively “intellectual property”), and any improvements or\n       modifications to such intellectual property. The use or misuse of any of\n       Bounipun’s intellectual property is prohibited without the prior written\n       permission of Bounipun, H-30, Integrated Textile and Handicraft Park\n       Zakura, Srinagar, Jammu and Kashmir, India, 190006.Nothing contained in\n       this website should be construed as giving you any right or license to\n       any of the intellectual property on or associated with this website. ")])]),_vm._ssrNode(" "),_c('Accordion',{attrs:{"heading":"Copyright"}},[_c('p',[_vm._v("\n       This website and its contents are the property of Bounipun and are\n       subject to copyright. The contents of our website and the website as a\n       whole are intended solely for your personal, non-commercial use. Any use\n       of our website and its content for purposes other than personal and\n       non-commercial use, or for any other use, including the modification,\n       reproduction, distribution, transmission, republication, display or\n       performance, of the content of this website, is prohibited and protected\n       under the copyright act, and any such case or person can be prosecuted\n       by law."),_c('br'),_c('br'),_vm._v("\n\n       All disputes subjected to Srinagar Jurisdiction Jammu and Kashmir,\n       India.")])]),_vm._ssrNode(" <p style=\"text-align: center;\" data-v-28b6bddb>Last Updated: 29th July, 2021</p>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Terms.vue?vue&type=template&id=28b6bddb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Terms.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Termsvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Terms & Conditions | Bounipun Kashmir"
    };
  }

});
// CONCATENATED MODULE: ./pages/Terms.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Termsvue_type_script_lang_js_ = (Termsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Terms.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(523)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Termsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "28b6bddb",
  "337182a6"
  
)

/* harmony default export */ var Terms = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Accordion: __webpack_require__(159).default})


/***/ })

};;
//# sourceMappingURL=Terms.js.map
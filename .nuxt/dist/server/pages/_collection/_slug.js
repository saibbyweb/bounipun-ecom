exports.ids = [117,1,51,53,54,56];
exports.modules = {

/***/ 145:
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

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    currency() {
      return this.$store.state.customerV2.currency;
    },

    currencyIsINR() {
      return this.currency === "INR";
    }

  },
  methods: {
    formatCurrency(price, currency = false, precision = 2) {
      price = parseFloat(price);
      return this.$store.getters["customerV2/formatCurrency"](price, currency, precision);
    }

  }
});

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

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("dc381f60", content, true, context)
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_840d9ef6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
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

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("694570d7", content, true, context)
};

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slideshow.vue?vue&type=template&id=817806fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slideshow-container",style:({ width: _vm.slideWidth + 'vw' })},[_vm._ssrNode("<div class=\"till-dots\" data-v-817806fa>","</div>",[_vm._ssrNode("<div class=\"slideshow\" data-v-817806fa>","</div>",[_vm._ssrNode(((_vm.productPage)?("<div class=\"lens\""+(_vm._ssrStyle(null,null, { display: (_vm.activeHover) ? '' : 'none' }))+" data-v-817806fa></div>"):"<!---->")+" "),_vm._ssrNode("<div data-v-817806fa>","</div>",[_c('div',{directives:[{name:"hammer",rawName:"v-hammer:swipe",value:(_vm.onSwipe),expression:"onSwipe",arg:"swipe"}],staticClass:"slides-container",style:('margin-left: ' + _vm.slideMargin + 'vw')},[_vm._ssrNode((_vm._ssrList((_vm.onDemandImages),function(image,index){return ("<div"+(_vm._ssrClass("product-image",{ productPage: _vm.productPage, clickable: _vm.links.length > 0 }))+(_vm._ssrStyle(null,_vm.getBackgroundImage(image), null))+" data-v-817806fa></div>")})))])])],2),_vm._ssrNode(" "+((_vm.dots && !_vm.singleImage)?("<div"+(_vm._ssrClass("dots",{ main: _vm.main }))+(_vm._ssrStyle(null,{ width: _vm.slideWidth }, null))+" data-v-817806fa>"+(_vm._ssrList((_vm.images),function(image,index){return ("<div"+(_vm._ssrClass(null,[{ active: _vm.isActive(index) }, 'dot']))+" data-v-817806fa></div>")}))+"</div>"):"<!---->"))],2),_vm._ssrNode(" "+((_vm.productPage)?("<div class=\"zoomed-in-image shadow\""+(_vm._ssrStyle(null,null, { display: (_vm.activeHover) ? '' : 'none' }))+" data-v-817806fa></div>"):"<!---->")+" "+((_vm.customText !== '')?("<div class=\"center\" data-v-817806fa><span class=\"custom-text\" data-v-817806fa>"+_vm._ssrEscape(" "+_vm._s(_vm.customText)+" ")+"</span></div>"):"<!---->")+" "+((_vm.slideshowOptions.thumbnails)?("<div id=\"thumbnails-container\" class=\"scrollable-list\" data-v-817806fa><div class=\"list\" data-v-817806fa><div class=\"thumbnails\" data-v-817806fa>"+(_vm._ssrList((_vm.images),function(image,index){return ("<div"+(_vm._ssrClass(null,[{ active: _vm.isActive(index) }, 'thumbnail']))+(_vm._ssrStyle(null,_vm.getThumbBackground(image), null))+" data-v-817806fa></div>")}))+"</div></div></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/slideshow.vue?vue&type=template&id=817806fa&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-inner-image-zoom/lib/vue-inner-image-zoom.css
var vue_inner_image_zoom = __webpack_require__(175);

// EXTERNAL MODULE: external "vue-inner-image-zoom"
var external_vue_inner_image_zoom_ = __webpack_require__(111);
var external_vue_inner_image_zoom_default = /*#__PURE__*/__webpack_require__.n(external_vue_inner_image_zoom_);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slideshow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var slideshowvue_type_script_lang_js_ = ({
  components: {
    "inner-image-zoom": external_vue_inner_image_zoom_default.a
  },
  props: {
    slideshowOptions: {
      type: Object,
      default: () => ({
        thumbnails: false
      })
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => ["/demo_images/slider/desk1.png"]
    },
    size: {
      type: String,
      default: "contain"
    },
    customText: {
      type: String,
      default: ""
    },
    extraClass: {
      type: String,
      default: ""
    },
    dots: {
      type: Boolean,
      default: true
    },
    mSlideWidth: {
      type: Number,
      default: 100
    },
    dSlideWidth: {
      type: Number,
      default: 100
    },
    mSlideHeight: {
      type: String,
      default: "100vw"
    },
    dSlideHeight: {
      type: String,
      default: "100vw"
    },
    main: {
      type: Boolean,
      default: false
    },
    productPage: {
      type: Boolean,
      default: false
    },
    links: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      slideMargin: 0,
      activeIndex: 0,
      thumbnailsMargin: 0,
      autoplayInterval: {},
      interacted: false,
      activeHover: false,
      lensPosition: {
        x: 0,
        y: 0
      },
      previousZoomedInImage: ""
    };
  },

  computed: {
    singleImage() {
      return this.images.length === 1;
    },

    slideHeight() {
      return this.windowWidth > 768 ? this.dSlideHeight : this.mSlideHeight;
    },

    slideWidth() {
      return this.windowWidth > 768 ? this.dSlideWidth : this.mSlideWidth;
    },

    onDemandImages() {
      // return this.images;
      if (this.interacted) return this.images;

      if (this.images.length > 2) {
        /* replace al images after second image a default bounipun image (a static asset) */
        return this.images.map((image, index) => {
          return index < 1 ? image : "/loading.gif";
        });
      }

      return this.images;
    }

  },

  destroyed() {
    this.clearAutoplayRoutine();
  },

  mounted() {
    if (this.autoplay) this.setAutoplayRoutine();
  },

  watch: {
    activeIndex: {
      handler(newVal) {
        this.$emit("slideChanged", newVal);
      },

      immediate: true
    },

    images() {}

  },
  methods: {
    setActiveImage(index) {
      this.interacted = true;
      this.activeIndex = index;
      this.slideMargin = index * this.slideWidth * -1;
      external_gsap_["TweenLite"].to(this.$refs.thumbnails, 0.3, {
        scrollLeft: index * 40
      });
    },

    getBackgroundImage(image, size) {
      return {
        backgroundImage: `url('${image}')`,
        backgroundSize: this.size,
        width: this.slideWidth + "vw",
        height: this.slideHeight,
        backgroundPosition: "top center"
      };
    },

    isBounipunUrl(s) {
      if (s === undefined || s === null || s === "") return false;
      return s.includes('bounipun.in');
    },

    navigateIfRequired(index) {
      const linkAvailable = this.links[index] !== undefined && this.links[index] !== "";
      if (!linkAvailable) return;
      const link = this.links[index];
      window.open(link, this.isBounipunUrl(link) ? '_self' : '_blank');
    },

    getThumbBackground(image) {
      return {
        backgroundImage: `url('${image}')`,
        backgroundSize: "contain"
      };
    },

    isActive(index) {
      return this.activeIndex === index;
    },

    handleThumbnail(event) {
      console.log(this.$refs.thumbnails.scrollLeft);
    },

    onSwipe(data) {
      this.interacted = true;

      if (data.autoMode === undefined) {
        this.clearAutoplayRoutine();
      }

      const threshold = this.images.length - 1;

      switch (data.direction) {
        /* swiped left */
        case 2:
          // console.log("swiped left");

          /* stop at the last slide */
          if (this.slideMargin === threshold * (-1 * this.slideWidth)) {
            this.slideMargin = 0;
            this.activeIndex = 0;
            return;
          }

          this.slideMargin -= this.slideWidth;
          this.activeIndex += 1;
          break;

        /* swiped right */

        case 4:
          // console.log("swiped right");

          /* stop at the first slide */
          if (this.slideMargin === 0) return;
          this.slideMargin += this.slideWidth;
          this.activeIndex -= 1;
          break;
      }
      /* move thumbnails accordingly */


      external_gsap_["TweenLite"].to(this.$refs.thumbnails, 0.3, {
        scrollLeft: this.activeIndex * 40
      });
    },

    setAutoplayRoutine() {
      this.autoplayInterval = setInterval(() => this.onSwipe({
        direction: 2,
        autoMode: true
      }), 3000);
    },

    clearAutoplayRoutine() {
      clearInterval(this.autoplayInterval);
    },

    trackMouse(e) {
      if (!this.productPage || this.windowWidth < 768) return;
      e.preventDefault();
      /* product image dimensions (hxw) */

      let productImageSize = 1024;
      /* cursor position */

      let pos = {
        x: 0,
        y: 0
      };
      let x = 0;
      let y = 0;
      /* set hover as active */

      this.activeHover = true;
      /* lens element */

      const lens = this.$refs.lens;
      /* slides container element */

      const slidesContainer = this.$refs.slidesContainer;
      /* zoomed in box element */

      const zoomedIn = this.$refs.zoomedIn;
      /* document width */

      const documentWidth = document.documentElement.clientWidth;
      productImageSize = documentWidth;
      /* calculating slidewidth  */

      const slideWidth = this.dSlideWidth / 100 * documentWidth;
      const slideHeight = slidesContainer.offsetHeight; // const widthPad = productImageSize / slideWidth;
      // const heightPad = productImageSize / slidesContainer.offsetHeight;

      /* container ratio */

      const containerRatio = slideWidth / slideHeight;
      /* lens ration */

      const lensRatio = slideHeight / slideWidth;
      /* Calculate the ratio between zoomed-in box and lens: */

      const cx = zoomedIn.offsetWidth / lens.offsetWidth;
      const cy = zoomedIn.offsetHeight / lens.offsetHeight;
      const activeImage = this.images[this.activeIndex];
      /* only change zoomed-in image if slide changes */

      if (this.previousZoomedInImage !== activeImage) {
        const originalImage = activeImage.replace("productPages", "original");
        zoomedIn.style.backgroundImage = `url(${originalImage})`;
        this.previousZoomedInImage = activeImage;
      }
      /* get zoomed in box's height and width */


      const zoomedInHeight = slideHeight * cy;
      const zoomedInWidth = slideWidth * cx;
      /* set background size for zoomed in box */

      zoomedIn.style.backgroundSize = zoomedInHeight + "px " + zoomedInHeight + "px ";
      /* get cursor position */

      pos = this.getCursorPosition(e, slidesContainer);
      /* Calculate the position of the lens: */

      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      /* Prevent the lens from being positioned outside the image: */

      x = x < 0 ? 0 : x;
      y = y < 0 ? 0 : y;
      if (x > slideWidth - lens.offsetWidth) x = slideWidth - lens.offsetWidth;
      if (y > slidesContainer.offsetHeight - lens.offsetHeight) y = slidesContainer.offsetHeight - lens.offsetHeight;
      /* map lens box center to cursor */

      this.$refs.lens.style.left = x + "px";
      this.$refs.lens.style.top = y + "px";
      /* calculate left side pixels that got cut due to background-size:cover on product image */

      const leftPad = productImageSize * ((1 - containerRatio) / 2);
      /* Display what the lens "sees": */

      zoomedIn.style.backgroundPosition = "-" + (x * cx + (leftPad + 10)) + "px -" + y * cy + "px";
    },

    getCursorPosition(e, slidesContainer) {
      let x = 0,
          y = 0;
      const a = slidesContainer.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */

      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */

      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {
        x,
        y
      };
    }

  }
});
// CONCATENATED MODULE: ./components/slideshow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_slideshowvue_type_script_lang_js_ = (slideshowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/slideshow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_slideshowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "817806fa",
  "46803df4"
  
)

/* harmony default export */ var slideshow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("21c4f3b2", content, true)

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".iiz[data-v-e6d72b16]{max-width:100%;margin:0;position:relative;overflow:hidden;display:inline-block;cursor:zoom-in}.iiz--drag .iiz__zoom-img--visible[data-v-e6d72b16]{cursor:-webkit-grab;cursor:grab}.iiz__img[data-v-e6d72b16]{max-width:100%;height:auto;display:block;pointer-events:none;visibility:visible;opacity:1}.iiz__img--hidden[data-v-e6d72b16]{visibility:hidden;opacity:0}.iiz__img--abs[data-v-e6d72b16]{width:100%;height:100%;position:absolute;top:0;left:0;display:block}.iiz__zoom-img[data-v-e6d72b16]{width:auto!important;max-width:none!important;position:absolute;visibility:hidden;opacity:0;pointer-events:none;display:block}.iiz__zoom-img--visible[data-v-e6d72b16]{visibility:visible;opacity:1;pointer-events:auto;cursor:zoom-out;touch-action:none}.iiz__zoom-portal[data-v-e6d72b16]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000}.iiz__btn[data-v-e6d72b16]{background:hsla(0,0%,100%,.8);width:40px;height:40px;border:none;outline:none;padding:0;position:absolute;text-decoration:none;display:flex;align-items:center;justify-content:center;-webkit-appearance:none;-moz-appearance:none;appearance:none}.iiz__btn[data-v-e6d72b16]:before{content:\"\";background-position:50%;background-repeat:no-repeat;display:block}.iiz__hint[data-v-e6d72b16]{bottom:10px;right:10px;pointer-events:none}.iiz__hint[data-v-e6d72b16]:before{content:\"\";background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9 19.9'%3E%3Cpath d='M13.9 7.4C13.9 3.8 11 .9 7.4.9S.9 3.8.9 7.4s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5zm5.3 12.5l-6.7-7.2c-1.4 1.3-3.2 2.1-5.1 2.1-4.1 0-7.4-3.3-7.4-7.4S3.3 0 7.4 0s7.4 3.3 7.4 7.4c0 1.7-.6 3.4-1.7 4.7l6.8 7.2-.7.6z' fill='%23000222'/%3E%3C/svg%3E\");width:20px;height:20px}.iiz__close[data-v-e6d72b16]{top:10px;right:10px;visibility:hidden;opacity:0}.iiz__close--visible[data-v-e6d72b16]{visibility:visible;opacity:1}.iiz__close[data-v-e6d72b16]:before{content:\"\";width:29px;height:29px;background-image:linear-gradient(#222,#222),linear-gradient(#222,#222);background-size:100% 1px,1px 100%;transform:rotate(45deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideshow_vue_vue_type_style_index_0_id_817806fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 178:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-817806fa]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-817806fa]{scroll-behavior:smooth}body[data-v-817806fa]{margin:0!important;padding:0}*[data-v-817806fa]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-817806fa]{padding:6%}button[data-v-817806fa]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-817806fa]{width:7%}button.sub-action[data-v-817806fa]{background-color:green}button.action[data-v-817806fa]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-817806fa]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-817806fa]{padding:2% 5%;width:100%}}button.action.delete[data-v-817806fa]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-817806fa]:hover{background-color:#e01010}button.small[data-v-817806fa]{font-size:11px;padding:1% 3%}button.clear[data-v-817806fa]{background:transparent;padding:2% 5%}h1[data-v-817806fa],h2[data-v-817806fa],h3[data-v-817806fa],h4[data-v-817806fa],h5[data-v-817806fa],h6[data-v-817806fa],p[data-v-817806fa],span[data-v-817806fa]{margin:0;padding:0;color:#333}.page[data-v-817806fa]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-817806fa]{margin-top:13vh;padding:7%}}.page.-wh[data-v-817806fa]{padding:0 0 5%}.page.side-pad[data-v-817806fa]{padding:2%}@media(max-width:768px){.page.-broad[data-v-817806fa]{padding:2%}}.page .page-header[data-v-817806fa]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-817806fa]{height:10vw}}.page .page-header .title[data-v-817806fa]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-817806fa]{font-size:5.4vw}}.page .side-pad[data-v-817806fa]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-817806fa]{padding:0 10%}}.pointer[data-v-817806fa]{cursor:pointer}.center[data-v-817806fa],.center-col[data-v-817806fa]{display:flex;justify-content:center;align-items:center}.center-col[data-v-817806fa]{flex-direction:column}.center-space[data-v-817806fa]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-817806fa]{position:relative}.white[data-v-817806fa]{color:#fff}.scrollable-list[data-v-817806fa]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-817806fa]{justify-content:center}}.scrollable-list[data-v-817806fa]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-817806fa]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-817806fa]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-817806fa]{margin-top:10px;width:50px}[data-v-817806fa]::-webkit-scrollbar{display:none}p.msg[data-v-817806fa]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-817806fa]{background-color:#a93737}p.msg.success[data-v-817806fa]{background-color:#319a67}.flex[data-v-817806fa]{display:flex}.flex.around[data-v-817806fa]{justify-content:space-around}.flex.between[data-v-817806fa]{justify-content:space-between}.flex.evenly[data-v-817806fa]{justify-content:space-evenly}.flex.col[data-v-817806fa]{flex-direction:column}.flex.wrap[data-v-817806fa]{flex-wrap:wrap}.flex.center[data-v-817806fa]{justify-content:center}.flex.center[data-v-817806fa],.flex.v-center[data-v-817806fa]{align-items:center}.flex.j-center[data-v-817806fa]{justify-content:center}.flex.start[data-v-817806fa]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-817806fa]{align-items:center}.flex.baseline[data-v-817806fa]{align-items:baseline}.flex.end[data-v-817806fa]{justify-content:flex-end}.flex.end.center[data-v-817806fa]{align-items:center}a[data-v-817806fa]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-817806fa]{display:none}}.onlyMobile[data-v-817806fa]{display:none}@media(max-width:768px){.onlyMobile[data-v-817806fa]{display:inline;display:initial}}.slideshow-container[data-v-817806fa]{overflow:hidden}@-webkit-keyframes fadeIn-data-v-817806fa{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-817806fa{0%{opacity:0}to{opacity:1}}.slideshow-container .zoomed-in-image[data-v-817806fa]{z-index:4;position:fixed;left:32%;top:12vh;border:1px solid #efefef;width:300px;height:300px;background-repeat:no-repeat;background-color:#fff;-webkit-animation:fadeIn-data-v-817806fa .3s linear;animation:fadeIn-data-v-817806fa .3s linear}.slideshow-container .slideshow[data-v-817806fa]{display:flex;overflow-x:auto;justify-content:flex-start;position:relative}.slideshow-container .slideshow[data-v-817806fa]::-webkit-scrollbar{display:none}.slideshow-container .slideshow .slides-container[data-v-817806fa]{touch-action:pan-y!important;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-left:0;transition:all .4s ease-in-out}.slideshow-container .slideshow .slides-container .product-image[data-v-817806fa]{overflow:hidden;background-position:50%;background-repeat:no-repeat}.slideshow-container .slideshow .slides-container .product-image.clickable[data-v-817806fa]{cursor:pointer}.slideshow-container .slideshow .slides-container .product-image.productPage[data-v-817806fa]{cursor:cell}@media screen and (min-width:768px){.slideshow-container .slideshow .slides-container .product-image[data-v-817806fa]{height:90vw}}.slideshow-container .slideshow .lens[data-v-817806fa]{position:absolute;border:1px solid #d4d4d4;pointer-events:none;width:120px;height:120px}.slideshow-container .custom-text[data-v-817806fa]{text-align:center;font-size:12px;padding:7px 15px;color:#7f7f7f;opacity:.7;font-family:\"SF-Pro\"}.slideshow-container #thumbnails-container[data-v-817806fa]{margin-left:0;transition:all .2s ease-in-out}.slideshow-container .thumbnails[data-v-817806fa]{width:100%;padding:2px;display:flex}.slideshow-container .thumbnails .thumbnail[data-v-817806fa]{width:5vw;height:5vw;background-repeat:no-repeat;background-position:50%;background-size:contain;overflow:hidden;margin:0 10px;box-shadow:1px 1px 5px rgba(0,0,0,.16);transform:scale(1);transition:all .3s ease-in-out;cursor:pointer}.slideshow-container .thumbnails .thumbnail.active[data-v-817806fa]{transform:scale(1.1)}@media(max-width:768px){.slideshow-container .thumbnails .thumbnail[data-v-817806fa]{width:19vw;height:19vw}}.slideshow-container .till-dots[data-v-817806fa]{position:relative}.slideshow-container .dots[data-v-817806fa]{height:20px;display:flex;justify-content:center;align-items:center;box-sizing:border-box;position:absolute;bottom:1px;left:0;width:100%;margin:-1%;pointer-events:none}.slideshow-container .dots.main[data-v-817806fa]{bottom:7px}@media(max-width:768px){.slideshow-container .dots[data-v-817806fa],.slideshow-container .dots.main[data-v-817806fa]{bottom:0}}.slideshow-container .dots .dot[data-v-817806fa]{height:2px;width:19px;background-color:hsla(0,0%,100%,.72941);margin:0 0 5px;transition:all .3s ease-in-out}.slideshow-container .dots .dot.active[data-v-817806fa]{background-color:#7d7d7d}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productCard.vue?vue&type=template&id=23d7311a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-card",class:{
    escape: _vm.collectionName === 'Escape' && _vm.$route.name === 'Collections',
    singleView: !_vm.gridView,
  },on:{"click":_vm.navigateToProductPage}},[_vm._ssrNode(((_vm.product.saleDetails)?("<span class=\"discount\" data-v-23d7311a>"+_vm._ssrEscape("\n    -"+_vm._s(_vm.product.saleDetails.discountPercentage)+"%")+"</span>"):"<!---->")+" <img"+(_vm._ssrAttr("src",_vm.inWishlist
        ? '/icons/dark/wishlist-filled.png'
        : '/icons/dark/wishlist.png'))+(_vm._ssrClass(null,[{ added: _vm.inWishlist }, 'wishlist']))+" data-v-23d7311a> "),_vm._ssrNode("<div class=\"main-image-container center\" data-v-23d7311a>","</div>",[_c('slideshow',{ref:"slideshow",attrs:{"images":_vm.slideshowImages,"extraClass":"search-slideshow","dots":true,"mSlideWidth":_vm.mobileDimensions.width,"mSlideHeight":_vm.mobileDimensions.height,"dSlideWidth":29,"dSlideHeight":"400px","size":"cover"}})],1),_vm._ssrNode(" "+((!(_vm.collectionName === 'Escape' && _vm.$route.name === 'collections'))?("<div class=\"flex v-center evenly col color-previews\""+(_vm._ssrStyle(null,_vm.readyToShip ? "align-items: center;justify-content: flex-end;" : '', null))+" data-v-23d7311a><div class=\"flex center\" data-v-23d7311a><div class=\"base-color-boxes\" data-v-23d7311a>"+(_vm._ssrList((_vm.baseColorImagesPreview.previews),function(preview,index){return ("<div"+(_vm._ssrClass("color-image shadow",{ active: _vm.isActiveBaseColor(index) }))+(_vm._ssrStyle(null,("background-image: url(" + (_vm.getBaseColorPath(index)) + ")"), null))+" data-v-23d7311a></div>")}))+"</div> "+((!_vm.readyToShip)?("<p class=\"additional-colors\" style=\"display: block; margin-left: 3px\" data-v-23d7311a><span data-v-23d7311a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.baseColorImagesPreview.additional > 0
              ? ("+ " + (_vm.baseColorImagesPreview.additional))
              : " ")+"\n        ")+"</span> <br data-v-23d7311a> "+((_vm.baseColorImagesPreview.additional > 0)?("<span data-v-23d7311a> color(s) </span>"):"<!---->")+"</p>"):"<!---->")+"</div> "+((_vm.readyToShip)?("<span class=\"additional-colors rts\" data-v-23d7311a>"+_vm._ssrEscape("\n      "+_vm._s(_vm.readyToShip ? "Ready To Ship" : "")+"\n    ")+"</span>"):"<!---->")+"</div>"):"<!---->")+" <div class=\"text-details\" data-v-23d7311a><div class=\"product-name center-col\" data-v-23d7311a><span class=\"name\" data-v-23d7311a>"+_vm._ssrEscape("\n        "+_vm._s(_vm.collectionName === "Escape"
            ? _vm.product.colors[_vm.activeColorIndex] !== undefined
              ? _vm.product.colors[_vm.activeColorIndex].name
              : _vm.product.name
            : _vm.product.name)+"\n      ")+"</span> <span class=\"collection\" data-v-23d7311a>"+_vm._ssrEscape(" "+_vm._s(_vm.collectionName)+" ")+"</span> "+((_vm.belongsToDecor)?("<span class=\"price\" data-v-23d7311a>"+_vm._ssrEscape("\n         Size: "+_vm._s(_vm.decorBasicInfo2)+"\n        ")+"</span>"):"<!---->")+" "+((!_vm.product.askForPrice)?("<div class=\"price-box\" data-v-23d7311a>"+((!_vm.readyToShip && !_vm.lowestAndHighestPriceisSame)?("<span class=\"price\" data-v-23d7311a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatCurrency(_vm.lowestVariantPrice))+"\n          -\n          "+_vm._s(_vm.formatCurrency(_vm.highestVariantPirce))+"\n        ")+"</span>"):"<!---->")+" "+((!_vm.readyToShip && _vm.lowestAndHighestPriceisSame)?("<span class=\"price\" data-v-23d7311a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatCurrency(_vm.highestVariantPirce))+"\n        ")+"</span>"):"<!---->")+" "+((_vm.readyToShip)?("<span class=\"price\" data-v-23d7311a>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatCurrency(_vm.directPrice))+"\n        ")+"</span>"):"<!---->")+"</div>"):("<div class=\"ask-for-price flex center\" style=\"background-color: rgb(74 74 74); padding: 0 7px\" data-v-23d7311a><span class=\"text\" style=\"text-transform: capitalize; color: white\" data-v-23d7311a>\n          Ask For Price\n        </span></div>"))+"</div></div> <div data-v-23d7311a>"+((!_vm.thirdPartyProduct && !_vm.belongsToDecor)?("<div class=\"variants-available center\" data-v-23d7311a>"+(_vm._ssrList((_vm.variantsAvailable),function(variant,index){return ("<div class=\"variant\" data-v-23d7311a>"+_vm._ssrEscape("\n        "+_vm._s(variant)+"\n      ")+"</div>")}))+"</div>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productCard.vue?vue&type=template&id=23d7311a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// EXTERNAL MODULE: ./helpers/currencyHelper.js
var currencyHelper = __webpack_require__(146);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var productCardvue_type_script_lang_js_ = ({
  mixins: [currencyHelper["a" /* default */]],
  props: {
    gridView: {
      type: Boolean,
      default: false
    },
    searchView: {
      type: Boolean,
      default: false
    },
    details: {
      type: Object,
      default: () => {
        return {
          name: "Khatamband Search",
          collection: "Bounipun Karakul",
          price: "INR 20000"
        };
      }
    },
    variants: {
      type: Object,
      default: () => {
        return {
          shawl: true
        };
      }
    },
    product: {
      type: Object,
      default: {
        notProvided: true
      }
    },
    image: {
      type: String,
      default: "product1.png"
    },
    activeColor: {
      type: Number,
      default: -1
    }
  },
  computed: {
    mobileDimensions() {
      return this.gridView ? {
        width: 48,
        height: "315px"
      } : {
        width: 100,
        height: "67vh"
      };
    },

    imagePath() {
      if (this.product.notProvided || this.product.colors.length === 0) return "/default-image.png";
      let mainImage = "";
      /* find main color */

      const mainColor = this.product.colors.find(color => color.mainColor === true);
      /* if main color undefined */

      if (mainColor !== undefined) {
        mainImage = mainColor.images[0].path;
      } else mainImage = this.product.colors[0].images;

      return this.$getImage(mainImage, "productPages");
    },

    variantsAvailable() {
      if (this.rtsAndUnderBounipun) {
        return [this.product.rtsDirectVariant];
      }
      /* TODO: what is this? */


      if (this.product.variantData) {
        let temp = JSON.parse(JSON.stringify(this.product.variantData));
        temp.sort((a, b) => a.order - b.order);
        return temp.map(variant => variant.name);
      } // if(this.product.variants) {
      //   this.product.variants.sort((a,b) => a._id.order - b._id.order);
      //   return this.product.variants.map(variant => variant._id.name);
      // }
      // if (this.product.variantNames) return this.product.variantNames;


      return this.product.variants.map(variant => variant._id.name);
    },

    decorBasicInfo2() {
      try {
        console.log(this.product.variantsInfo);
        const basicVariant = this.product.variantsInfo.find(variant => variant.code.toLowerCase().includes("basic"));
        return basicVariant.info2;
      } catch (e) {
        return "";
      }
    },

    baseColorsBoxes() {
      if (!this.product.colors) return;
      let baseColorList = this.product.colors.map(({
        baseColor,
        additionalColor1,
        additionalColor2
      }) => {
        return [baseColor, additionalColor1, additionalColor2];
      });
      /* save active color details */

      const activeColor = baseColorList[this.activeColorIndex];
      /* get all colors except the active one */

      let filteredColors = baseColorList.filter((_, index) => index !== this.activeColorIndex);
      return [activeColor, ...filteredColors];
    },

    baseColorImages() {
      if (!this.product.colors) return [{
        path: "",
        actualIndex: -1
      }];
      /* base color list */

      let baseColorList = this.product.colors.map((color, index) => {
        const images = color.images;

        if (images.length === 0 || images === undefined) {
          console.log("NO IMAGES PROVIDED");
          /* if escape, show the chip (NO_WAY) */

          return {
            path: "",
            actualIndex: index
          };
        }

        return {
          path: this.$getImage(images[images.length - 1].path, "chips"),
          actualIndex: index
        };
      });
      return baseColorList;
      /* save active color details */

      const activeColor = baseColorList[this.activeColorIndex];
      /* get all colors except the active one */

      let filteredColors = baseColorList.filter((_, index) => index !== this.activeColorIndex);
      return [activeColor, ...filteredColors];
    },

    baseColorImagesPreview() {
      /* { previews, additional colors length } */
      let previews = [];
      let additional = 0;
      /* base color images length */

      const baseColorsLength = this.baseColorImages.length;
      /* set preview images & calculate additional colors */

      if (baseColorsLength >= 3) {
        for (let i = 0; i < 3; i++) previews.push(this.baseColorImages[i]);

        additional = baseColorsLength - 3;
      } else {
        previews = this.baseColorImages;
        additional = 0;
      }

      return {
        previews,
        additional
      };
    },

    collectionName() {
      if (typeof this.product.bounipun_collection === "string") return this.product.bounipun_collection.trim();
      if (this.product.bounipun_collection === null) return "N/A";
      return this.product.bounipun_collection.name.trim();
    },

    belongsToDecor() {
      return this.collectionName == 'WALL ART - KHATT' || this.collectionName === 'WALL ART - CONNOISSEUR';
    },

    directPrice() {
      if (this.currencyIsINR) return this.product.directPrice;else return this.product.directPricing[this.currency];
    },

    lowestVariantPrice() {
      if (this.currencyIsINR) return this.product.priceRange.startsAt;else return this.product.pricingRange[this.currency].startsAt;
    },

    highestVariantPirce() {
      if (this.currencyIsINR) return this.product.priceRange.endsAt;else return this.product.pricingRange[this.currency].endsAt;
    },

    lowestAndHighestPriceisSame() {
      return this.lowestVariantPrice === this.highestVariantPirce;
    },

    slideshowImages() {
      if (this.product.notProvided || this.product.colors.length === 0) return ["/default-image.png"];
      /* could be a breaking change */

      this.product.colors.forEach(c => {
        const mainImages = c.images || [];
        /* check for main image */

        const mainImageIndex = mainImages.findIndex(i => i.mainImage === true);
        /* shift main image to the beginning */

        if (mainImageIndex !== -1) {
          const mainImage = { ...mainImages[mainImageIndex]
          };
          mainImages.splice(mainImageIndex, 1);
          mainImages.unshift(mainImage);
        }
      });
      let mainImages = [];
      /* if active color provided */

      if (this.activeColorIndex !== -1) {
        const mImages = this.product.colors[this.activeColorIndex].images;
        /* if no images, uploaded */

        if (mImages.length === 0) {
          return ["/default-image.png"];
        }

        return mImages.map(image => this.$getImage(image.path, "productPages"));
      }
      /* find main color */


      const mainColor = this.product.colors.find(color => color.mainColor === true);
      /* if main color undefined */

      if (mainColor !== undefined) {
        mainImages = mainColor.images;
      } else mainImages = this.product.colors[0].images;
      /* fetch main image */


      return mainImages.map(image => this.$getImage(image.path, "productPages"));
    },

    readyToShip() {
      return this.product.availabilityType === "ready-to-ship";
    },

    thirdPartyProduct() {
      return this.product.type === "third-party";
    },

    rtsAndUnderBounipun() {
      return this.readyToShip && !this.thirdPartyProduct;
    },

    activeColorCode() {
      const index = this.activeColorIndex === -1 ? 0 : this.activeColorIndex;
      return this.product.colors[index].code;
    },

    inWishlist() {
      /* if customer is not logged in, return  */
      const customer = this.$store.state.customer;
      if (customer.authorized === false) return false;
      /* if wishlist is undefined, return */

      const wishlist = customer.user.wishlist;
      if (wishlist === undefined) return false;
      /* check if product is in wishlist */
      // const foundIndex = wishlist.findIndex(entry => entry.product === this.product._id && entry.colorCode === this.activeColorCode);

      const foundIndex = wishlist.findIndex(entry => entry.product === this.product._id);

      if (foundIndex !== -1) {
        return true;
      }

      return false;
    }

  },

  mounted() {
    this.activeColorIndex = this.activeColor; // console.log(this.$route);
  },

  watch: {
    activeColor(val) {
      this.activeColorIndex = val;
    }

  },

  data() {
    return {
      addedToWishlist: false,
      activeColorIndex: -1
    };
  },

  methods: {
    askForPrice(event) {
      const BASE_SHARE_URL = "https://wa.me/?text=";
      let msg = `Hi there, I would like to get a price quote for: ${location.host}/${this.product.slug}?activeColor=${this.activeColorIndex}`;
      msg = encodeURI(msg);
      window.open(BASE_SHARE_URL + msg, "_blank");
    },

    async toggleWishlist() {
      /* if user is not logged in, move to login page */
      if (!this.$store.state.customer.authorized) {
        this.$router.push("/login");
        return;
      }
      /* set action according to state */


      const action = this.inWishlist ? "remove-from-wishlist" : "add-to-wishlist";
      /* take item to wishlist */

      const addToWishlist = await this.$post("/wishlistActions", {
        action,
        product: this.product._id,
        colorCode: this.activeColorCode
      });
      /* if request failed */

      if (addToWishlist.resolved === false) return;
      /* refetch wishlist */

      /* fetch profile */

      this.$store.dispatch("customer/fetchProfile");
      this.$store.dispatch("customer/fetchWishlist");
    },

    navigateToProductPage() {
      let query = {// _id: this.product._id
      };
      if (this.activeColorIndex !== -1) query.activeColor = this.activeColorIndex;
      this.$router.push({
        path: `/${this.product.slug}`,
        query
      });
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    },

    getBaseColorPath(index) {
      if (this.baseColorImages[index] !== undefined) {
        return this.baseColorImages[index].path;
      } else {
        return "";
      }
    },

    setActiveBaseColor(index) {
      const actualIndex = this.baseColorImages[index].actualIndex;
      /* mutate the active color */

      console.log(actualIndex);
      this.activeColorIndex = actualIndex;
      /* reset slider index */

      this.$refs.slideshow.setActiveImage(0);
    },

    isActiveBaseColor(index) {
      const actualIndex = this.baseColorImages[index].actualIndex;
      return actualIndex === this.activeColorIndex;
    }

  }
});
// CONCATENATED MODULE: ./components/productCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_productCardvue_type_script_lang_js_ = (productCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/productCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_productCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23d7311a",
  "f518c336"
  
)

/* harmony default export */ var productCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Slideshow: __webpack_require__(174).default})


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_23d7311a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_23d7311a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_23d7311a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_23d7311a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCard_vue_vue_type_style_index_0_id_23d7311a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-23d7311a]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-23d7311a]{scroll-behavior:smooth}body[data-v-23d7311a]{margin:0!important;padding:0}*[data-v-23d7311a]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-23d7311a]{padding:6%}button[data-v-23d7311a]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-23d7311a]{width:7%}button.sub-action[data-v-23d7311a]{background-color:green}button.action[data-v-23d7311a]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-23d7311a]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-23d7311a]{padding:2% 5%;width:100%}}button.action.delete[data-v-23d7311a]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-23d7311a]:hover{background-color:#e01010}button.small[data-v-23d7311a]{font-size:11px;padding:1% 3%}button.clear[data-v-23d7311a]{background:transparent;padding:2% 5%}h1[data-v-23d7311a],h2[data-v-23d7311a],h3[data-v-23d7311a],h4[data-v-23d7311a],h5[data-v-23d7311a],h6[data-v-23d7311a],p[data-v-23d7311a],span[data-v-23d7311a]{margin:0;padding:0;color:#333}.page[data-v-23d7311a]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-23d7311a]{margin-top:13vh;padding:7%}}.page.-wh[data-v-23d7311a]{padding:0 0 5%}.page.side-pad[data-v-23d7311a]{padding:2%}@media(max-width:768px){.page.-broad[data-v-23d7311a]{padding:2%}}.page .page-header[data-v-23d7311a]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-23d7311a]{height:10vw}}.page .page-header .title[data-v-23d7311a]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-23d7311a]{font-size:5.4vw}}.page .side-pad[data-v-23d7311a]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-23d7311a]{padding:0 10%}}.pointer[data-v-23d7311a]{cursor:pointer}.center[data-v-23d7311a],.center-col[data-v-23d7311a]{display:flex;justify-content:center;align-items:center}.center-col[data-v-23d7311a]{flex-direction:column}.center-space[data-v-23d7311a]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-23d7311a]{position:relative}.white[data-v-23d7311a]{color:#fff}.scrollable-list[data-v-23d7311a]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-23d7311a]{justify-content:center}}.scrollable-list[data-v-23d7311a]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-23d7311a]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-23d7311a]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-23d7311a]{margin-top:10px;width:50px}[data-v-23d7311a]::-webkit-scrollbar{display:none}p.msg[data-v-23d7311a]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-23d7311a]{background-color:#a93737}p.msg.success[data-v-23d7311a]{background-color:#319a67}.flex[data-v-23d7311a]{display:flex}.flex.around[data-v-23d7311a]{justify-content:space-around}.flex.between[data-v-23d7311a]{justify-content:space-between}.flex.evenly[data-v-23d7311a]{justify-content:space-evenly}.flex.col[data-v-23d7311a]{flex-direction:column}.flex.wrap[data-v-23d7311a]{flex-wrap:wrap}.flex.center[data-v-23d7311a]{justify-content:center}.flex.center[data-v-23d7311a],.flex.v-center[data-v-23d7311a]{align-items:center}.flex.j-center[data-v-23d7311a]{justify-content:center}.flex.start[data-v-23d7311a]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-23d7311a]{align-items:center}.flex.baseline[data-v-23d7311a]{align-items:baseline}.flex.end[data-v-23d7311a]{justify-content:flex-end}.flex.end.center[data-v-23d7311a]{align-items:center}a[data-v-23d7311a]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-23d7311a]{display:none}}.onlyMobile[data-v-23d7311a]{display:none}@media(max-width:768px){.onlyMobile[data-v-23d7311a]{display:inline;display:initial}}.product-card[data-v-23d7311a]{width:29vw;height:550px;overflow:hidden;padding:1vw;margin:5px 0;position:relative;cursor:pointer}.product-card .discount[data-v-23d7311a]{position:absolute;top:10px;left:10%;z-index:1;font-family:\"SF-Pro SemiBold\";font-size:14px;background-color:#359135;color:#fff;padding:2px 4px;opacity:.8}@media(max-width:768px){.product-card .discount[data-v-23d7311a]{font-size:12px;left:4%;top:10px}}.product-card .wishlist[data-v-23d7311a]{position:absolute;width:18px;top:10%;right:10%;transition:transform .3s ease-in-out;z-index:1}.product-card .wishlist.added[data-v-23d7311a]{transform:scale(1.2)}.product-card .main-image-container[data-v-23d7311a]{width:100%;height:75%;overflow:hidden}.product-card .main-image-container .main-image[data-v-23d7311a]{height:100%}@media(max-width:768px){.product-card .main-image-container[data-v-23d7311a]{height:67%}}.product-card .color-previews[data-v-23d7311a]{height:10%}.product-card .color-previews .base-color-boxes[data-v-23d7311a]{display:flex;justify-content:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-bottom:0}.product-card .color-previews .base-color-boxes .color-image[data-v-23d7311a]{width:30px;height:30px;background-size:contain;margin:0 5px;transition:all .3s ease-in-out}.product-card .color-previews .base-color-boxes .color-image.active[data-v-23d7311a]{border:3px solid #a2a2a2}.product-card .color-previews .additional-colors[data-v-23d7311a]{font-size:10px;color:#7f7f7f}.product-card .color-previews .rts[data-v-23d7311a]{color:#32a77c;margin-top:1px}@media(max-width:768px){.product-card .color-previews[data-v-23d7311a]{height:16%}.product-card .color-previews .base-color-boxes[data-v-23d7311a]{margin-bottom:5px}.product-card .color-previews .base-color-boxes .color-image[data-v-23d7311a]{margin:5px}}.product-card .text-details[data-v-23d7311a]{width:100%;height:10%;padding-bottom:2px;padding-top:3px}@media(max-width:768px){.product-card .text-details[data-v-23d7311a]{height:12%}}.product-card .text-details .product-name[data-v-23d7311a]{font-size:10px;text-transform:uppercase;font-weight:900;text-align:center}.product-card .text-details .product-name .name[data-v-23d7311a]{font-size:10px;font-family:\"SF-Pro SemiBold\";font-weight:900}.product-card .text-details .collection[data-v-23d7311a]{color:#7f7f7f;font-size:10px}.product-card .text-details .price[data-v-23d7311a]{font-size:11px;font-weight:900;color:#7f7f7f}.product-card .variants-available[data-v-23d7311a]{height:5%}@media(max-width:768px){.product-card .variants-available[data-v-23d7311a]{height:5%}}.product-card .variants-available .variant[data-v-23d7311a]{color:#333;border:1px solid #333;margin:0 2px;padding:2px 5px;font-size:8.5px;width:29%;display:flex;justify-content:center;align-items:center}.product-card .actions[data-v-23d7311a]{height:0%;background:rgba(0,128,0,.607)}@media(max-width:768px){.product-card .actions[data-v-23d7311a]{height:5%}}.product-card .actions .shop-now[data-v-23d7311a]{font-size:12px;text-transform:uppercase;font-family:\"Poppins\"}@media(max-width:768px){.product-card[data-v-23d7311a]{width:48vw;height:480px}.product-card.singleView[data-v-23d7311a]{width:100%;box-sizing:content-box;padding-bottom:25px;height:91vh;border-bottom:1px solid #efefef;margin:0}.product-card.singleView .main-image-container[data-v-23d7311a]{height:79%}.product-card.singleView .color-previews[data-v-23d7311a]{height:7%}.product-card.singleView .text-details[data-v-23d7311a]{height:10%}.product-card.singleView .text-details span.name[data-v-23d7311a],.product-card.singleView .text-details span.price[data-v-23d7311a]{font-size:13px}.product-card.singleView .variants-available[data-v-23d7311a]{height:6%}.product-card.escape[data-v-23d7311a]{height:440px}.product-card.escape .main-image-container[data-v-23d7311a]{height:70%}.product-card.escape .text-details[data-v-23d7311a]{height:16%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5f015311", content, true, context)
};

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(394);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3a42ce37", content, true, context)
};

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyViewed_vue_vue_type_style_index_0_id_f83edec8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(318);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyViewed_vue_vue_type_style_index_0_id_f83edec8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyViewed_vue_vue_type_style_index_0_id_f83edec8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyViewed_vue_vue_type_style_index_0_id_f83edec8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyViewed_vue_vue_type_style_index_0_id_f83edec8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 392:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-f83edec8]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-f83edec8]{scroll-behavior:smooth}body[data-v-f83edec8]{margin:0!important;padding:0}*[data-v-f83edec8]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-f83edec8]{padding:6%}button[data-v-f83edec8]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-f83edec8]{width:7%}button.sub-action[data-v-f83edec8]{background-color:green}button.action[data-v-f83edec8]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-f83edec8]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-f83edec8]{padding:2% 5%;width:100%}}button.action.delete[data-v-f83edec8]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-f83edec8]:hover{background-color:#e01010}button.small[data-v-f83edec8]{font-size:11px;padding:1% 3%}button.clear[data-v-f83edec8]{background:transparent;padding:2% 5%}h1[data-v-f83edec8],h2[data-v-f83edec8],h3[data-v-f83edec8],h4[data-v-f83edec8],h5[data-v-f83edec8],h6[data-v-f83edec8],p[data-v-f83edec8],span[data-v-f83edec8]{margin:0;padding:0;color:#333}.page[data-v-f83edec8]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-f83edec8]{margin-top:13vh;padding:7%}}.page.-wh[data-v-f83edec8]{padding:0 0 5%}.page.side-pad[data-v-f83edec8]{padding:2%}@media(max-width:768px){.page.-broad[data-v-f83edec8]{padding:2%}}.page .page-header[data-v-f83edec8]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-f83edec8]{height:10vw}}.page .page-header .title[data-v-f83edec8]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-f83edec8]{font-size:5.4vw}}.page .side-pad[data-v-f83edec8]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-f83edec8]{padding:0 10%}}.pointer[data-v-f83edec8]{cursor:pointer}.center[data-v-f83edec8],.center-col[data-v-f83edec8]{display:flex;justify-content:center;align-items:center}.center-col[data-v-f83edec8]{flex-direction:column}.center-space[data-v-f83edec8]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-f83edec8]{position:relative}.white[data-v-f83edec8]{color:#fff}.scrollable-list[data-v-f83edec8]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-f83edec8]{justify-content:center}}.scrollable-list[data-v-f83edec8]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-f83edec8]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-f83edec8]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-f83edec8]{margin-top:10px;width:50px}[data-v-f83edec8]::-webkit-scrollbar{display:none}p.msg[data-v-f83edec8]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-f83edec8]{background-color:#a93737}p.msg.success[data-v-f83edec8]{background-color:#319a67}.flex[data-v-f83edec8]{display:flex}.flex.around[data-v-f83edec8]{justify-content:space-around}.flex.between[data-v-f83edec8]{justify-content:space-between}.flex.evenly[data-v-f83edec8]{justify-content:space-evenly}.flex.col[data-v-f83edec8]{flex-direction:column}.flex.wrap[data-v-f83edec8]{flex-wrap:wrap}.flex.center[data-v-f83edec8]{justify-content:center}.flex.center[data-v-f83edec8],.flex.v-center[data-v-f83edec8]{align-items:center}.flex.j-center[data-v-f83edec8]{justify-content:center}.flex.start[data-v-f83edec8]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-f83edec8]{align-items:center}.flex.baseline[data-v-f83edec8]{align-items:baseline}.flex.end[data-v-f83edec8]{justify-content:flex-end}.flex.end.center[data-v-f83edec8]{align-items:center}a[data-v-f83edec8]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-f83edec8]{display:none}}.onlyMobile[data-v-f83edec8]{display:none}@media(max-width:768px){.onlyMobile[data-v-f83edec8]{display:inline;display:initial}}.recently-viewed .title[data-v-f83edec8]{padding:0 3%;font-family:\"Poppins Bold\";text-transform:uppercase}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_21bcbeed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(319);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_21bcbeed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_21bcbeed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_21bcbeed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_21bcbeed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 394:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-21bcbeed]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-21bcbeed]{scroll-behavior:smooth}body[data-v-21bcbeed]{margin:0!important;padding:0}*[data-v-21bcbeed]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-21bcbeed]{padding:6%}button[data-v-21bcbeed]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-21bcbeed]{width:7%}button.sub-action[data-v-21bcbeed]{background-color:green}button.action[data-v-21bcbeed]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-21bcbeed]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-21bcbeed]{padding:2% 5%;width:100%}}button.action.delete[data-v-21bcbeed]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-21bcbeed]:hover{background-color:#e01010}button.small[data-v-21bcbeed]{font-size:11px;padding:1% 3%}button.clear[data-v-21bcbeed]{background:transparent;padding:2% 5%}h1[data-v-21bcbeed],h2[data-v-21bcbeed],h3[data-v-21bcbeed],h4[data-v-21bcbeed],h5[data-v-21bcbeed],h6[data-v-21bcbeed],p[data-v-21bcbeed],span[data-v-21bcbeed]{margin:0;padding:0;color:#333}.page[data-v-21bcbeed]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-21bcbeed]{margin-top:13vh;padding:7%}}.page.-wh[data-v-21bcbeed]{padding:0 0 5%}.page.side-pad[data-v-21bcbeed]{padding:2%}@media(max-width:768px){.page.-broad[data-v-21bcbeed]{padding:2%}}.page .page-header[data-v-21bcbeed]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-21bcbeed]{height:10vw}}.page .page-header .title[data-v-21bcbeed]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-21bcbeed]{font-size:5.4vw}}.page .side-pad[data-v-21bcbeed]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-21bcbeed]{padding:0 10%}}.pointer[data-v-21bcbeed]{cursor:pointer}.center[data-v-21bcbeed],.center-col[data-v-21bcbeed]{display:flex;justify-content:center;align-items:center}.center-col[data-v-21bcbeed]{flex-direction:column}.center-space[data-v-21bcbeed]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-21bcbeed]{position:relative}.white[data-v-21bcbeed]{color:#fff}.scrollable-list[data-v-21bcbeed]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-21bcbeed]{justify-content:center}}.scrollable-list[data-v-21bcbeed]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-21bcbeed]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-21bcbeed]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-21bcbeed]{margin-top:10px;width:50px}[data-v-21bcbeed]::-webkit-scrollbar{display:none}p.msg[data-v-21bcbeed]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-21bcbeed]{background-color:#a93737}p.msg.success[data-v-21bcbeed]{background-color:#319a67}.flex[data-v-21bcbeed]{display:flex}.flex.around[data-v-21bcbeed]{justify-content:space-around}.flex.between[data-v-21bcbeed]{justify-content:space-between}.flex.evenly[data-v-21bcbeed]{justify-content:space-evenly}.flex.col[data-v-21bcbeed]{flex-direction:column}.flex.wrap[data-v-21bcbeed]{flex-wrap:wrap}.flex.center[data-v-21bcbeed]{justify-content:center}.flex.center[data-v-21bcbeed],.flex.v-center[data-v-21bcbeed]{align-items:center}.flex.j-center[data-v-21bcbeed]{justify-content:center}.flex.start[data-v-21bcbeed]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-21bcbeed]{align-items:center}.flex.baseline[data-v-21bcbeed]{align-items:baseline}.flex.end[data-v-21bcbeed]{justify-content:flex-end}.flex.end.center[data-v-21bcbeed]{align-items:center}a[data-v-21bcbeed]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-21bcbeed]{display:none}}.onlyMobile[data-v-21bcbeed]{display:none}@media(max-width:768px){.onlyMobile[data-v-21bcbeed]{display:inline;display:initial}}.related-products .title[data-v-21bcbeed]{padding:0 3%;font-family:\"Poppins Bold\";text-transform:uppercase}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(553);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d9a135ee", content, true, context)
};

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RecentlyViewed.vue?vue&type=template&id=f83edec8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.isEmpty)?_c('div',{staticClass:"recently-viewed"},[_vm._ssrNode("<h2 class=\"title\" data-v-f83edec8>Recently Viewed</h2> "),_vm._ssrNode("<div class=\"flex center\" data-v-f83edec8>","</div>",[_vm._ssrNode("<div class=\"flex wrap\" data-v-f83edec8>","</div>",_vm._l((_vm.recentlyViewedProducts),function(product,index){return _c('product-card',{key:index,attrs:{"product":product}})}),1)])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RecentlyViewed.vue?vue&type=template&id=f83edec8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RecentlyViewed.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RecentlyViewedvue_type_script_lang_js_ = ({
  props: {
    currentProductId: {
      type: String,
      default: ""
    }
  },
  watch: {
    currentProductId: {
      handler(newVal) {
        this.fetchRecentlyViewed();
      },

      immediate: true
    }
  },

  data() {
    return {
      recentlyViewedProducts: []
    };
  },

  computed: {
    isEmpty() {
      return this.recentlyViewedProducts.length === 0;
    }

  },
  methods: {
    async fetchRecentlyViewed() {
      const entries = this.$store.state.customer.recentlyViewed;
      if (entries === undefined || entries.length === 0) return;
      /* remove active product */

      let filteredEntries = entries.filter(entry => {
        return entry.product !== this.currentProductId;
      });
      /* reverse the order */
      //   filteredEntries = filteredEntries.reverse();

      const recentlyViewedProducts = await this.$post("/fetchRecentlyViewed", {
        entries: filteredEntries
      });
      if (recentlyViewedProducts.resolved === false) return;
      let {
        products
      } = recentlyViewedProducts.response;
      products.forEach(product => {
        if (product.rtsDirectVariant !== undefined || product.rtsDirectVariant === "") product.rtsDirectVariant = product.rtsDirectVariant.name;
        /* filter out inactive colors */

        product.colors = product.colors.filter(color => color.status === true);
        product.variants.sort((a, b) => a._id.order - b._id.order);
      });
      /* filter out products with no active colors */

      products = products.filter(product => product.colors.length > 0);
      this.recentlyViewedProducts = recentlyViewedProducts.response.products;
    }

  }
});
// CONCATENATED MODULE: ./components/RecentlyViewed.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RecentlyViewedvue_type_script_lang_js_ = (RecentlyViewedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/RecentlyViewed.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(391)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RecentlyViewedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f83edec8",
  "0d3c6496"
  
)

/* harmony default export */ var RecentlyViewed = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(189).default})


/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RelatedProducts.vue?vue&type=template&id=21bcbeed&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.relatedProducts.length && _vm.relatedProducts.length > 0)?_c('div',{staticClass:"related-products"},[_vm._ssrNode("<h2 class=\"title\" data-v-21bcbeed>You may also like</h2> "),_vm._ssrNode("<div class=\"flex center\" data-v-21bcbeed>","</div>",[_vm._ssrNode("<div class=\"flex wrap\" data-v-21bcbeed>","</div>",_vm._l((_vm.relatedProducts),function(product,index){return _c('product-card',{key:index,attrs:{"product":product}})}),1)])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RelatedProducts.vue?vue&type=template&id=21bcbeed&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RelatedProducts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RelatedProductsvue_type_script_lang_js_ = ({
  props: {
    currentProductId: {
      type: String,
      default: ""
    },
    currentProductDate: {
      type: String,
      default: ""
    }
  },
  watch: {
    currentProductId: {
      handler(newVal) {
        this.fetchRelatedProducts();
      },

      immediate: true
    }
  },

  data() {
    return {
      relatedProducts: []
    };
  },

  methods: {
    async fetchRelatedProducts() {
      console.log(this.currentProductId, this.currentProductDate);
      const relatedProducts = await this.$post("/fetchRelatedProducts", {
        currentProductId: this.currentProductId,
        currentProductDate: this.currentProductDate
      });
      if (relatedProducts.resolved === false) return;
      let {
        products
      } = relatedProducts.response;
      products.forEach(product => {
        if (product.rtsDirectVariant !== undefined || product.rtsDirectVariant === "") product.rtsDirectVariant = product.rtsDirectVariant.name;
        /* filter out inactive colors */

        product.colors = product.colors.filter(color => color.status === true);
        product.variants.sort((a, b) => a._id.order - b._id.order);
      });
      /* filter out products with no active colors */

      products = products.filter(product => product.colors.length > 0);
      this.relatedProducts = relatedProducts.response.products;
    }

  }
});
// CONCATENATED MODULE: ./components/RelatedProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RelatedProductsvue_type_script_lang_js_ = (RelatedProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/RelatedProducts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(393)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RelatedProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "21bcbeed",
  "6d7da155"
  
)

/* harmony default export */ var RelatedProducts = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(189).default})


/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_df531ebc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(436);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_df531ebc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_df531ebc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_df531ebc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_df531ebc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 553:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-df531ebc]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-df531ebc]{scroll-behavior:smooth}body[data-v-df531ebc]{margin:0!important;padding:0}*[data-v-df531ebc]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-df531ebc]{padding:6%}button[data-v-df531ebc]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-df531ebc]{width:7%}button.sub-action[data-v-df531ebc]{background-color:green}button.action[data-v-df531ebc]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-df531ebc]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-df531ebc]{padding:2% 5%;width:100%}}button.action.delete[data-v-df531ebc]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-df531ebc]:hover{background-color:#e01010}button.small[data-v-df531ebc]{font-size:11px;padding:1% 3%}button.clear[data-v-df531ebc]{background:transparent;padding:2% 5%}h1[data-v-df531ebc],h2[data-v-df531ebc],h3[data-v-df531ebc],h4[data-v-df531ebc],h5[data-v-df531ebc],h6[data-v-df531ebc],p[data-v-df531ebc],span[data-v-df531ebc]{margin:0;padding:0;color:#333}.page[data-v-df531ebc]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-df531ebc]{margin-top:13vh;padding:7%}}.page.-wh[data-v-df531ebc]{padding:0 0 5%}.page.side-pad[data-v-df531ebc]{padding:2%}@media(max-width:768px){.page.-broad[data-v-df531ebc]{padding:2%}}.page .page-header[data-v-df531ebc]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-df531ebc]{height:10vw}}.page .page-header .title[data-v-df531ebc]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-df531ebc]{font-size:5.4vw}}.page .side-pad[data-v-df531ebc]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-df531ebc]{padding:0 10%}}.pointer[data-v-df531ebc]{cursor:pointer}.center[data-v-df531ebc],.center-col[data-v-df531ebc]{display:flex;justify-content:center;align-items:center}.center-col[data-v-df531ebc]{flex-direction:column}.center-space[data-v-df531ebc]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-df531ebc]{position:relative}.white[data-v-df531ebc]{color:#fff}.scrollable-list[data-v-df531ebc]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-df531ebc]{justify-content:center}}.scrollable-list[data-v-df531ebc]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-df531ebc]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-df531ebc]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-df531ebc]{margin-top:10px;width:50px}[data-v-df531ebc]::-webkit-scrollbar{display:none}p.msg[data-v-df531ebc]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-df531ebc]{background-color:#a93737}p.msg.success[data-v-df531ebc]{background-color:#319a67}.flex[data-v-df531ebc]{display:flex}.flex.around[data-v-df531ebc]{justify-content:space-around}.flex.between[data-v-df531ebc]{justify-content:space-between}.flex.evenly[data-v-df531ebc]{justify-content:space-evenly}.flex.col[data-v-df531ebc]{flex-direction:column}.flex.wrap[data-v-df531ebc]{flex-wrap:wrap}.flex.center[data-v-df531ebc]{justify-content:center}.flex.center[data-v-df531ebc],.flex.v-center[data-v-df531ebc]{align-items:center}.flex.j-center[data-v-df531ebc]{justify-content:center}.flex.start[data-v-df531ebc]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-df531ebc]{align-items:center}.flex.baseline[data-v-df531ebc]{align-items:baseline}.flex.end[data-v-df531ebc]{justify-content:flex-end}.flex.end.center[data-v-df531ebc]{align-items:center}a[data-v-df531ebc]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-df531ebc]{display:none}}.onlyMobile[data-v-df531ebc]{display:none}@media(max-width:768px){.onlyMobile[data-v-df531ebc]{display:inline;display:initial}}.whole-page[data-v-df531ebc]{min-height:90vh}.whole-page .placeholder[data-v-df531ebc]{height:90vh}.product-page[data-v-df531ebc]{margin-top:20vh;position:relative;min-height:90vh}@media(max-width:768px){.product-page[data-v-df531ebc]{margin-top:13vh}}.product-page .product-images[data-v-df531ebc]{width:30%;position:relative;overflow:hidden}.product-page .product-images .discount[data-v-df531ebc]{position:absolute;top:9%;left:10%;z-index:1;font-family:\"SF-Pro SemiBold\";font-size:14px;background-color:#359135;color:#fff;padding:2px 4px;opacity:.8}@media(max-width:768px){.product-page .product-images .discount[data-v-df531ebc]{font-size:16px;left:4%;top:9%}}.product-page .product-images .collection-vertical[data-v-df531ebc]{display:none;position:absolute;font-size:12px;left:5%;bottom:30%;transform:rotate(-90deg) translateY(-150%);text-transform:uppercase;letter-spacing:1px}.product-page .product-images .wishlist[data-v-df531ebc]{position:absolute;width:20px;top:10%;right:5%;cursor:pointer;transition:transform .3s ease-in-out}.product-page .product-images .wishlist.added[data-v-df531ebc]{transform:scale(1.2)}.product-page .product-images .back-button[data-v-df531ebc]{position:absolute;width:16%;height:40px;bottom:30%;left:0;transition:transform .3s ease-in-out;background-color:#fff;padding:3px;display:flex;justify-content:center;align-items:center;opacity:.7;cursor:pointer}.product-page .product-images .back-button img[data-v-df531ebc]{width:27px}.product-page .product-images .share-icons[data-v-df531ebc]{position:absolute;right:0;bottom:30%;display:flex;width:16%;flex-direction:column-reverse}.product-page .product-images .share-icons .toggle[data-v-df531ebc]{border-radius:50%;width:40px;height:40px;box-sizing:content-box;transform:rotate(0deg) scale(1);cursor:pointer;background-color:#fff;display:flex;justify-content:center;align-items:center;opacity:.7}.product-page .product-images .share-icons .toggle img[data-v-df531ebc]{width:19px;margin-left:-2px;transition:transform .4s ease-in-out}.product-page .product-images .share-icons .toggle:hover img[data-v-df531ebc]{transform:rotate(10deg)}.product-page .product-images .share-icons .social[data-v-df531ebc]{margin-bottom:15px;opacity:0;display:none;flex-direction:column-reverse;justify-content:flex-start;align-items:flex-start;transition:opacity .4s ease-in-out;padding-left:7px}.product-page .product-images .share-icons .social img[data-v-df531ebc]{cursor:pointer;margin:10px 0;width:18px;background-color:#fff;border-radius:1px 1px;box-sizing:content-box;transition:all .3s ease-in-out;border-radius:50%;padding:4px}.product-page .product-images .share-icons .social img[data-v-df531ebc]:hover{transform:scale(1.1)}.product-page .product-images .share-icons .social.active[data-v-df531ebc]{opacity:.95;display:flex}.product-page .product-details[data-v-df531ebc]{width:70%;box-sizing:border-box;height:90vh;overflow-y:scroll;position:relative;z-index:1}.product-page .product-details.desktopSticky[data-v-df531ebc]{margin-top:4vh}@media(min-width:769px){.product-page .product-details[data-v-df531ebc]{padding:3% 4%}}.product-page .product-details .details[data-v-df531ebc]{transition:span .3s ease-in-out}.product-page .product-details .details.desktopSticky[data-v-df531ebc]{overflow-x:hidden;position:fixed;width:69%;right:0;top:0;margin-top:20vh;background-color:#fff;overflow:hidden;box-shadow:20px 0 15px rgba(0,0,0,.16);z-index:2}@media(max-width:768px){.product-page .product-details .details.desktopSticky[data-v-df531ebc]{margin-top:13vh}}.product-page .product-details .details.desktopSticky .header[data-v-df531ebc]{display:none}.product-page .product-details .details.desktopSticky .og-details .section-1[data-v-df531ebc]{display:flex;align-items:center}.product-page .product-details .details.desktopSticky .og-details .section-1 .main-details h3[data-v-df531ebc]{font-size:15px}.product-page .product-details .details.desktopSticky .og-details .section-1 .main-details p[data-v-df531ebc]{font-size:10px}.product-page .product-details .details.desktopSticky .og-details .price-and-actions .price h5[data-v-df531ebc]{font-size:15px}.product-page .product-details .details.desktopSticky .og-details .price-and-actions .add-to-cart button[data-v-df531ebc]{font-size:12px}.product-page .product-details .details.desktopSticky .og-details .quantity-and-size[data-v-df531ebc]{margin-left:10px}@media(max-width:768px){.product-page .product-details .details[data-v-df531ebc]{margin-top:10px}.product-page .product-details .details.sticky[data-v-df531ebc]{position:fixed;bottom:0;left:0;width:100%;background-color:#fff;transition:span .3s ease-in-out;z-index:2;box-shadow:0 -4px 23px -13px rgba(38,38,38,.24)}}.product-page .product-details .header[data-v-df531ebc]{width:100%;display:flex;justify-content:space-between;align-items:center;padding:1% 2%}.product-page .product-details .header span[data-v-df531ebc]{color:#464646}.product-page .product-details .header span.collection[data-v-df531ebc]{text-transform:uppercase;font-size:17px;font-family:\"SF-Pro\"}.product-page .product-details .header span.gender[data-v-df531ebc]{font-size:14px}@media(max-width:768px){.product-page .product-details .header[data-v-df531ebc]{padding:2% 4%;background-color:#464646}.product-page .product-details .header span[data-v-df531ebc]{color:#fff}.product-page .product-details .header span.collection[data-v-df531ebc]{font-size:13px}.product-page .product-details .header span.gender[data-v-df531ebc]{font-size:12px}}.product-page .product-details .og-details[data-v-df531ebc]{padding:1% 2%;width:100%;display:flex;justify-content:space-between;position:relative}.product-page .product-details .og-details .section-1[data-v-df531ebc]{width:61%}.product-page .product-details .og-details .section-1 .main-details h3[data-v-df531ebc]{font-family:\"Poppins Bold\";text-transform:uppercase;font-size:17px}.product-page .product-details .og-details .section-1 .main-details p[data-v-df531ebc]{font-family:\"SF-Pro\";text-transform:uppercase;color:#7f7f7f;font-size:10px}.product-page .product-details .og-details .section-1 .main-details p.variant[data-v-df531ebc]{font-weight:900;color:#464646;font-size:12px}.product-page .product-details .og-details .section-1 .quantity-and-size[data-v-df531ebc]{margin-top:10px;display:flex}.product-page .product-details .og-details .section-1 .quantity-and-size .quantity-picker[data-v-df531ebc]{display:flex;justify-content:space-around;border:1px solid #919191;width:80px}.product-page .product-details .og-details .section-1 .quantity-and-size .quantity-picker button[data-v-df531ebc]{background:transparent;font-family:\"Poppins Bold\";text-align:center;padding:0;font-size:10px;color:#000}.product-page .product-details .og-details .section-1 .quantity-and-size .quantity-picker button[data-v-df531ebc]:first-child{border-right:1px solid #919191;padding:0 5px}.product-page .product-details .og-details .section-1 .quantity-and-size .quantity-picker button[data-v-df531ebc]:nth-child(3){border-left:1px solid #919191;padding:0 5px}.product-page .product-details .og-details .section-1 .quantity-and-size .quantity-picker button.qty[data-v-df531ebc]{width:50%;padding:0 15px}.product-page .product-details .og-details .price-and-actions[data-v-df531ebc]{display:flex;flex-direction:column;justify-content:space-around;position:relative}.product-page .product-details .og-details .price-and-actions .price h5[data-v-df531ebc]{font-family:\"Poppins Bold\";font-size:17px}.product-page .product-details .og-details .price-and-actions .price p[data-v-df531ebc]{font-family:\"SF-Pro\";font-size:10px}.product-page .product-details .og-details .price-and-actions .add-to-cart[data-v-df531ebc]{display:flex;width:100%;margin-top:5px}.product-page .product-details .og-details .price-and-actions .add-to-cart button[data-v-df531ebc]{background:#333;color:#fff;padding:4px 4px 4px 8px;text-transform:uppercase;margin:0;font-family:\"Poppins Bold\";font-size:14px;width:80%}.product-page .product-details .og-details .price-and-actions .add-to-cart button.arrow[data-v-df531ebc]{width:20%;font-family:\"Poppins\";font-size:20px;padding:4px 8px 4px 4px}.product-page .product-details .other-details[data-v-df531ebc]{padding:3% 4%}.product-page .product-details .other-details .section-heading[data-v-df531ebc]{text-transform:uppercase;color:#464646;letter-spacing:1.1px;font-family:\"SF-Pro\";margin-bottom:20px;font-size:14px}.product-page .product-details .other-details .colors[data-v-df531ebc]{margin-top:20px}.product-page .product-details .other-details .colors .category-heading[data-v-df531ebc]{font-family:\"Poppins SemiBold\";font-size:10px;margin-left:10px;color:#7f7f7f}.product-page .product-details .other-details .colors .color-boxes[data-v-df531ebc]{display:flex;flex-wrap:wrap}.product-page .product-details .other-details .colors .color-boxes .box-container[data-v-df531ebc]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:5px;height:7vw;width:7vw;transition:all .3s ease-in-out}.product-page .product-details .other-details .colors .color-boxes .box-container .box[data-v-df531ebc]{height:5.5vw;width:5.5vw;background-size:contain;background-position:50%;background-repeat:no-repeat;cursor:pointer}.product-page .product-details .other-details .colors .color-boxes .box-container .box.active[data-v-df531ebc]{box-shadow:1px 1px 4px 0 rgba(0,0,0,.16)}.product-page .product-details .other-details .colors .color-boxes .box-container .name[data-v-df531ebc]{margin-top:5px;font-size:8px;letter-spacing:.4px;text-align:center;height:20%}@media(max-width:768px){.product-page .product-details .other-details .colors .color-boxes .box-container[data-v-df531ebc]{width:25vw;height:25vw}.product-page .product-details .other-details .colors .color-boxes .box-container .box[data-v-df531ebc]{width:20vw;height:20vw}}.product-page .product-details .other-details .divider[data-v-df531ebc]{margin-top:10px;width:100%;height:1px;background-color:#333}.product-page .product-details .other-details .variants-available[data-v-df531ebc]{margin-top:20px}.product-page .product-details .other-details .variants-available .section-heading[data-v-df531ebc]{margin-bottom:5px}.product-page .product-details .other-details .variants-available .section-paragraph[data-v-df531ebc]{font-size:11px;padding:0;margin:0 0 20px;color:#7f7f7f;font-family:\"SF-Pro\"}.product-page .product-details .other-details .variants-available .variants-container[data-v-df531ebc]{display:flex;justify-content:space-around}.product-page .product-details .other-details .variants-available .variants-container .variant[data-v-df531ebc]{cursor:pointer}.product-page .product-details .other-details .variants-available .variants-container .variant .illustration[data-v-df531ebc]{filter:grayscale(100%);margin-bottom:3px;transition:all .3s ease-in-out;width:4vw;opacity:.5}.product-page .product-details .other-details .variants-available .variants-container .variant .illustration.active[data-v-df531ebc]{filter:none;opacity:1}.product-page .product-details .other-details .variants-available .variants-container .variant .name[data-v-df531ebc]{font-family:\"SF-Pro SemiBold\";color:#464646;font-size:11px}.product-page .product-details .other-details .variants-available .variants-container .variant .info[data-v-df531ebc]{font-family:\"SF-Pro\";font-size:9px;color:#7f7f7f}@media(max-width:768px){.product-page .product-details .other-details .variants-available .variants-container .variant .illustration[data-v-df531ebc]{width:12vw}}.product-page .product-details .other-details .fabrics-available[data-v-df531ebc]{margin-top:20px}.product-page .product-details .other-details .fabrics-available .fabrics-container[data-v-df531ebc]{display:flex;justify-content:flex-start;flex-wrap:wrap}.product-page .product-details .other-details .fabrics-available .fabrics-container .fabric[data-v-df531ebc]{background-color:rgba(51,51,51,.46275);padding:5px 0;width:49%;margin:.5%;transition:all .2s cubic-bezier(.215,.61,.355,1);cursor:pointer}.product-page .product-details .other-details .fabrics-available .fabrics-container .fabric span[data-v-df531ebc]{color:#fff;text-align:center}.product-page .product-details .other-details .fabrics-available .fabrics-container .fabric.active[data-v-df531ebc]{box-shadow:1px 1px 5px rgba(0,0,0,.16);background:#333}.product-page .product-details .other-details .fabrics-available .fabrics-container .fabric .name[data-v-df531ebc]{font-size:9.5px;letter-spacing:1px}.product-page .product-details .other-details .fabrics-available .fabrics-container .fabric .info[data-v-df531ebc]{font-size:9px;letter-spacing:1px}.product-page .product-details .other-details .fabrics-available .fabrics-container .fabric .price[data-v-df531ebc]{font-size:11px;letter-spacing:1px}.product-page .product-details .other-details .accordions[data-v-df531ebc]{margin-top:20px;text-align:justify}.product-page .product-details .other-details .accordions ul[data-v-df531ebc]{margin:4px;padding-left:15px}.product-page .product-details .other-details .accordions p[data-v-df531ebc]{font-size:13px;margin:10px 0}.product-page .product-details .other-details .accordions span[data-v-df531ebc]{font-size:12px}@media(max-width:768px){.product-page[data-v-df531ebc]{flex-direction:column;padding:0;height:auto}.product-page .product-images[data-v-df531ebc]{width:100%}.product-page .product-details[data-v-df531ebc]{width:100%;height:auto}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_collection/_slug.vue?vue&type=template&id=df531ebc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"whole-page"},[_vm._ssrNode(((!_vm.productFetched)?("<div class=\"placeholder flex center\" data-v-df531ebc><span data-v-df531ebc>"+_vm._ssrEscape(" "+_vm._s(_vm.preLoadMessage)+" ")+"</span></div>"):"<!---->")+" "),(_vm.productFetched)?_vm._ssrNode("<div class=\"product-page flex start\" data-v-df531ebc>","</div>",[_vm._ssrNode("<div class=\"product-images\" data-v-df531ebc>","</div>",[_vm._ssrNode(((_vm.product.saleDetails)?("<span class=\"discount\" data-v-df531ebc>"+_vm._ssrEscape("\n        -"+_vm._s(_vm.product.saleDetails.discountPercentage)+"%")+"</span>"):"<!---->")+" "),_c('slideshow',{ref:"slideshow",attrs:{"images":_vm.images[_vm.activeColorIndex],"slideshowOptions":{ thumbnails: true },"customText":_vm.activeDisclaimerText,"mSlideHeight":"60vh","dSlideHeight":"65vh","dSlideWidth":30,"productPage":true,"size":"cover"}}),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",_vm.inWishlist
            ? '/icons/dark/wishlist-filled.png'
            : '/icons/dark/wishlist.png'))+(_vm._ssrClass(null,[{ added: _vm.inWishlist }, 'wishlist']))+" data-v-df531ebc> <div class=\"share-icons\" data-v-df531ebc><div class=\"toggle\" data-v-df531ebc><img src=\"/icons/dark/share.png\" data-v-df531ebc></div> <div"+(_vm._ssrClass("social",{ active: _vm.showShareIcons }))+" data-v-df531ebc><a"+(_vm._ssrAttr("href",_vm.twitterShareLink))+" target=\"_blank\" data-v-df531ebc><img src=\"/icons/dark/social/twitter.png\" data-v-df531ebc></a> <a"+(_vm._ssrAttr("href",_vm.facebookShareLink))+" target=\"_blank\" data-v-df531ebc><img src=\"/icons/dark/social/facebook.png\" data-v-df531ebc></a> <a"+(_vm._ssrAttr("href",_vm.whatsAppShareLink))+" target=\"_blank\" data-v-df531ebc><img src=\"/icons/dark/social/whatsapp.png\" data-v-df531ebc></a></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("product-details",{ desktopSticky: _vm.desktopSticky }))+" data-v-df531ebc>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("details",{ sticky: _vm.sticky, desktopSticky: _vm.desktopSticky }))+" data-v-df531ebc><div class=\"header\" data-v-df531ebc><a"+(_vm._ssrAttr("href",_vm.collectionLink))+" data-v-df531ebc>"+((!_vm.thirdPartyProduct)?("<span class=\"collection\" data-v-df531ebc>"+_vm._ssrEscape("\n            Bounipun "+_vm._s(_vm.collectionName)+"\n          ")+"</span>"):"<!---->")+"</a> <span class=\"gender\" data-v-df531ebc>"+_vm._ssrEscape(" "+_vm._s(_vm.preferredGender)+" ")+"</span></div> <div class=\"og-details\" data-v-df531ebc><div class=\"section-1\" data-v-df531ebc><div class=\"main-details\" data-v-df531ebc><h3 data-v-df531ebc>"+_vm._ssrEscape("\n                "+_vm._s(_vm.bounipunColors
                    ? _vm.product.colors[_vm.activeColorIndex].name
                    : _vm.product.name)+"\n              ")+"</h3> "+((!_vm.thirdPartyProduct && !_vm.readyToShip)?("<p class=\"variant\" data-v-df531ebc>"+_vm._ssrEscape("\n                "+_vm._s(_vm.selectedVariant.name)+"\n              ")+"</p>"):"<!---->")+" "+((!_vm.thirdPartyProduct && !_vm.readyToShip)?("<p data-v-df531ebc>"+_vm._ssrEscape("\n                "+_vm._s(_vm.selectedFabric.name)+"\n              ")+"</p>"):"<!---->")+" "+((!_vm.thirdPartyProduct && !_vm.readyToShip)?("<p data-v-df531ebc>"+_vm._ssrEscape("\n                "+_vm._s(_vm.selectedFabric.info1)+"\n              ")+"</p>"):"<!---->")+" <p data-v-df531ebc>"+_vm._ssrEscape(_vm._s(_vm.product.styleId))+"</p></div> "+((!_vm.product.askForPrice)?("<div class=\"quantity-and-size\" data-v-df531ebc><div class=\"quantity-picker\" data-v-df531ebc><button data-v-df531ebc>-</button> <button class=\"qty\" data-v-df531ebc>"+_vm._ssrEscape(_vm._s(_vm.quantity))+"</button> <button data-v-df531ebc>\n                  +\n                </button></div></div>"):"<!---->")+"</div> "+((!_vm.product.askForPrice)?("<div class=\"price-and-actions\" data-v-df531ebc><div class=\"price\" data-v-df531ebc>"+((_vm.product.saleDetails)?("<h5 style=\"\\n                  text-decoration: line-through;\\n                  font-size: 15px;\\n                  font-weight: 100;\\n                  color: #c54343;\\n                \" data-v-df531ebc>"+_vm._ssrEscape("\n                "+_vm._s(_vm.formatCurrency(_vm.nonDiscountedPrice))+"\n              ")+"</h5>"):"<!---->")+" <h5 data-v-df531ebc>"+_vm._ssrEscape("\n                "+_vm._s(_vm.thirdPartyProduct || _vm.readyToShip
                    ? _vm.formatCurrency(_vm.directPrice)
                    : _vm.formatCurrency(_vm.selectedFabricPrice))+"\n              ")+"</h5> <p data-v-df531ebc>Taxes and Shipping Included</p></div> <div class=\"add-to-cart\" data-v-df531ebc><button data-v-df531ebc>"+_vm._ssrEscape("\n                "+_vm._s(_vm.alreadyInCart ? "View Bag" : "Place in Bag")+"\n              ")+"</button> <button class=\"arrow\" data-v-df531ebc>&gt;</button></div> <span style=\"font-size: 9px\" data-v-df531ebc>"+_vm._ssrEscape("\n              Standard Shipping: "+_vm._s(_vm.shippingTime)+" week(s)\n            ")+"</span></div>"):"<!---->")+" "+((_vm.product.askForPrice === true)?("<div class=\"ask-for-price flex col center\" data-v-df531ebc><a"+(_vm._ssrAttr("href",_vm.getAPriceLink))+" target=\"_blank\" data-v-df531ebc><span class=\"text\" style=\"\\n                  background-color: rgb(74 74 74);\\n                  padding: 0 7px;\\n                  margin-bottom: 3px;\\n                  color: white;\\n                \" data-v-df531ebc>\n                Ask for Price\n              </span></a> <span class=\"text\" style=\"font-size: 9px\" data-v-df531ebc>"+_vm._ssrEscape("\n              Standard Shipping: "+_vm._s(_vm.shippingTime)+" week(s)\n            ")+"</span></div>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div class=\"other-details\" data-v-df531ebc>","</div>",[(_vm.bounipunColors)?_vm._ssrNode("<div class=\"colors\" data-v-df531ebc>","</div>",[_vm._ssrNode("<h4 class=\"section-heading\" data-v-df531ebc>"+_vm._ssrEscape("\n            Available Colors: ("+_vm._s(_vm.product.colors.length)+")\n          ")+"</h4> "),_vm._l((_vm.product.colorData),function(value,name,index){return _vm._ssrNode("<div class=\"color-category\" data-v-df531ebc>","</div>",[(value.length !== 0)?_vm._ssrNode("<div data-v-df531ebc>","</div>",[_c('Accordion',{attrs:{"heading":value.name,"expanded":_vm.ifActiveColorInCategory(value.colors),"noMargin":true}},[_c('div',{staticClass:"color-boxes"},_vm._l((value.colors),function(color,colorIndex){return _c('div',{key:colorIndex,staticClass:"box-container center-col",on:{"click":function($event){return _vm.setActiveColor(colorIndex, color._id)}}},[_c('div',{staticClass:"box",class:{ active: _vm.isActiveBounipunColor(color._id) },style:(_vm.getMainImageCSS(color))}),_vm._v(" "),_c('span',{staticClass:"name"},[_vm._v(" "+_vm._s(color.name)+" ")])])}),0)])],1):_vm._e()])})],2):_vm._e(),_vm._ssrNode(" "+((!_vm.bounipunColors)?("<div class=\"colors\" data-v-df531ebc><h4 class=\"section-heading\" data-v-df531ebc>"+_vm._ssrEscape("\n            Available Colors ("+_vm._s(_vm.product.colors.length)+") :\n          ")+"</h4> <div class=\"color-boxes\" data-v-df531ebc>"+(_vm._ssrList((_vm.product.colors),function(color,index){return ("<div class=\"box-container center-col\" data-v-df531ebc><div"+(_vm._ssrClass("box",{ active: _vm.activeColorIndex === index }))+(_vm._ssrStyle(null,_vm.getMainImageCSS(color), null))+" data-v-df531ebc></div> <span class=\"name\" data-v-df531ebc>"+_vm._ssrEscape(" "+_vm._s(color.name)+" ")+"</span></div>")}))+"</div></div>"):"<!---->")+" "+((!_vm.bounipunColors && _vm.multiPriced)?("<div class=\"divider\" data-v-df531ebc></div>"):"<!---->")+" "+((!_vm.thirdPartyProduct && _vm.multiPriced && !_vm.readyToShip)?("<div class=\"variants-available\" data-v-df531ebc><h4 class=\"section-heading\" data-v-df531ebc>Available Variants:</h4> <p class=\"section-paragraph\" data-v-df531ebc>"+_vm._ssrEscape("\n            "+_vm._s(_vm.variantNote)+"\n          ")+"</p> <div class=\"variants-container\" data-v-df531ebc>"+(_vm._ssrList((_vm.variants),function(variant,index){return ("<div class=\"variant center-col\" data-v-df531ebc><img"+(_vm._ssrAttr("src",_vm.getVariantImage(variant.image)))+(_vm._ssrClass("illustration",{ active: _vm.activeVariantIndex === index }))+" data-v-df531ebc> <span class=\"name\" data-v-df531ebc>"+_vm._ssrEscape(" "+_vm._s(variant.name)+" ")+"</span> <span class=\"info\" data-v-df531ebc>"+_vm._ssrEscape(" "+_vm._s(variant.info1)+" ")+"</span> <span class=\"info\" data-v-df531ebc>"+_vm._ssrEscape(" "+_vm._s(variant.info2)+" ")+"</span></div>")}))+"</div></div>"):"<!---->")+" <div class=\"divider\" data-v-df531ebc></div> "+((!_vm.thirdPartyProduct && _vm.multiPriced && !_vm.readyToShip)?("<div class=\"fabrics-available\" data-v-df531ebc><h4 class=\"section-heading\" data-v-df531ebc>Available Fabrics:</h4> <div class=\"fabrics-container\" data-v-df531ebc>"+(_vm._ssrList((_vm.variants[_vm.activeVariantIndex].fabrics),function(fabric,index){return ("<div class=\"fabric center-col\""+(_vm._ssrStyle(null,_vm.setVariantColorToActiveFabric(index), null))+" data-v-df531ebc><span class=\"name\" data-v-df531ebc>"+_vm._ssrEscape(" "+_vm._s(fabric.name)+" ")+"</span> <span class=\"info\" data-v-df531ebc>"+_vm._ssrEscape(" "+_vm._s(fabric.info1)+" ")+"</span> "+((!_vm.product.askForPrice)?("<span class=\"price\" data-v-df531ebc>"+_vm._ssrEscape("\n                "+_vm._s(_vm.formatCurrency(_vm.getFabricPrice(fabric)))+"\n              ")+"</span>"):"<!---->")+"</div>")}))+"</div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"accordions\" data-v-df531ebc>","</div>",[_c('Accordion',{attrs:{"heading":"Detailed Features","expanded":true}},[(!_vm.thirdPartyProduct)?_c('ul',_vm._l((_vm.variantDescription),function(point,index){return _c('li',{key:index},[_c('span',{staticClass:"desc"},[_vm._v(" "+_vm._s(point)+" ")])])}),0):_vm._e(),_vm._v(" "),_c('ul',_vm._l((_vm.productDescription),function(point,index){return _c('li',{key:index},[_c('span',{staticClass:"desc"},[_vm._v(" "+_vm._s(point)+" ")])])}),0),_vm._v(" "),(!_vm.thirdPartyProduct)?_c('ul',_vm._l((_vm.fabricDescription),function(point,index){return _c('li',{key:index},[_c('span',{staticClass:"desc"},[_vm._v(" "+_vm._s(point)+" ")])])}),0):_vm._e()]),_vm._ssrNode(" "),(!_vm.thirdPartyProduct)?_c('Accordion',{attrs:{"heading":"About Fabric"}},[_c('ul',_vm._l((_vm.fabricWriteUp),function(point,index){return _c('li',{key:index},[_c('span',{staticClass:"desc"},[_vm._v(" "+_vm._s(point)+" ")])])}),0)]):_vm._e(),_vm._ssrNode(" "),(!_vm.thirdPartyProduct)?_c('Accordion',{attrs:{"heading":"Details And Care"}},[_c('ul',_vm._l((_vm.detailsAndCare),function(point,index){return _c('li',{key:index},[_c('span',{staticClass:"desc",domProps:{"innerHTML":_vm._s(_vm.convertEmailsToLinks(point))}})])}),0)]):_vm._e(),_vm._ssrNode(" "),(!_vm.thirdPartyProduct)?_c('Accordion',{attrs:{"heading":("About " + (_vm.product.bounipun_collection.name))}},[_c('span',{staticClass:"desc"},[_vm._v("\n              "+_vm._s(_vm.product.bounipun_collection.description)+"\n            ")])]):_vm._e()],2)],2),_vm._ssrNode(" "),_c('RecentlyViewed',{attrs:{"currentProductId":_vm.product._id}}),_vm._ssrNode(" "),_c('RelatedProducts',{attrs:{"currentProductId":_vm.product._id,"currentProductDate":_vm.product.createdAt}}),_vm._ssrNode(" <br data-v-df531ebc> <br data-v-df531ebc>")],2)],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_collection/_slug.vue?vue&type=template&id=df531ebc&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.string.replace-all.js"
var esnext_string_replace_all_js_ = __webpack_require__(116);

// EXTERNAL MODULE: ./helpers/currencyHelper.js
var currencyHelper = __webpack_require__(146);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_collection/_slug.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  mixins: [currencyHelper["a" /* default */]],

  async asyncData({
    $axios,
    params,
    query,
    req,
    $getImage
  }) {
    try {
      // Fetch product data
      const {
        data: result
      } = await $axios.post("/fetchProduct", {
        slug: `${params.collection}/${params.slug}`,
        lockCheck: true,
        forceUnlock: true
      }); // If product not found

      if (result.resolved === false) {
        return {
          preLoadMessage: "Product not found :(",
          productFetched: false,
          serverData: {
            product: {
              name: "Not Found"
            },
            collectionName: "",
            firstProductImage: "https://bounipun.in/icons/light/logo.png",
            shareLink: ""
          }
        };
      } // Filter out inactive colors


      result.colors = result.colors.filter(color => color.status === true);

      if (result.colors.length === 0) {
        return {
          preLoadMessage: "No active colors found",
          productFetched: false,
          serverData: {
            product: {
              name: "No Active Colors"
            },
            collectionName: "",
            firstProductImage: "https://bounipun.in/icons/light/logo.png",
            shareLink: ""
          }
        };
      } // Process color data for Bounipun colors


      if (result.colorData) {
        result.colorData.forEach(category => {
          let colors = category.colors;
          colors.forEach(color => {
            color.actualIndex = result.colors.findIndex(col => col._id === color._id);
          });
          colors = colors.sort((a, b) => b.images.length - a.images.length);
        });
      } // Get active color index


      const activeColorIndex = query.activeColor ? parseInt(query.activeColor) : result.colors.findIndex(color => color.mainColor === true); // Get collection name

      const collectionName = !result.thirdParty && result.bounipun_collection ? result.bounipun_collection.name : ""; // Get first product image

      const activeColor = result.colors[activeColorIndex >= 0 ? activeColorIndex : 0];
      let firstProductImage = "https://bounipun.in/icons/light/logo.png";

      if (activeColor) {
        if (activeColor.images && activeColor.images.length > 0) {
          // Find main image or use first image
          const mainImage = activeColor.images.find(img => img.mainImage === true) || activeColor.images[0];
          firstProductImage = mainImage.path;
        } else if (activeColor._id !== null && activeColor.image) {
          firstProductImage = activeColor.image;
        }
      } // Generate share link


      const protocol = req ? req.headers['x-forwarded-proto'] || 'http' : window.location.protocol.replace(':', '');
      const host = req ? req.headers.host : window.location.host;
      const shareLink = `${protocol}://${host}/${params.collection}/${params.slug}?activeColor=${activeColorIndex >= 0 ? activeColorIndex : 0}`;
      return {
        serverData: {
          product: {
            name: result.name,
            description: result.description
          },
          collectionName,
          firstProductImage: $getImage(firstProductImage, "productPages"),
          shareLink
        }
      };
    } catch (error) {
      console.error("Error fetching product:", error);
      return {
        serverData: {
          product: {
            name: "Error"
          },
          collectionName: "",
          firstProductImage: "https://bounipun.in/icons/light/logo.png",
          shareLink: ""
        }
      };
    }
  },

  head() {
    return {
      title: `${this.serverData.product.name} | Bounipun Kashmir`,
      meta: [{
        property: "og:type",
        content: "website"
      }, {
        property: "description",
        content: `${this.serverData.collectionName} from Bounipun Kashmir`
      }, {
        property: "og:title",
        content: `${this.serverData.product.name}`
      }, {
        property: "og:description",
        content: `${this.serverData.collectionName} from Bounipun Kashmir`
      }, {
        property: "og:image",
        content: this.serverData.firstProductImage
      }, {
        property: "og:url",
        content: this.serverData.shareLink
      }, {
        property: "og:image:secure_url",
        content: this.serverData.firstProductImage
      }, {
        property: "og:image:width",
        content: "300"
      }, {
        property: "og:image:height",
        content: "300"
      }, {
        property: "og:image:type",
        content: "image/jpeg"
      }, {
        property: "twitter:card",
        content: "summary_large_image"
      }, {
        property: "twitter:title",
        content: `${this.serverData.product.name}`
      }, {
        property: "twitter:image",
        content: this.serverData.firstProductImage
      }, {
        property: "twitter:description",
        content: `${this.serverData.collectionName} from Bounipun Kashmir`
      }]
    };
  },

  created() {
    if (false) {}

    if (this.$route.name !== "index") {
      this.darkMode = true;
      return;
    }
  },

  destroyed() {
    if (false) {}
  },

  async mounted() {
    // Wait for persisted state to be loaded
    if (!this.$store.state.customer.persistedStateLoaded) {
      await new Promise(resolve => {
        const unsubscribe = this.$store.subscribe(mutation => {
          if (mutation.type === 'customer/loadPersistedState') {
            unsubscribe();
            resolve();
          }
        });
      });
    }

    const slug = this.$route.params.collection + "/" + this.$route.params.slug;
    this.fetchProduct(slug);
    setTimeout(() => {
      console.log(this.scrollPosition, "scroll position");
    }, 300);
  },

  watch: {
    $route(newVal) {
      this.productFetched = false; // const slug = newVal.path
      //  this.$router.go()

      this.images = []; // this.fetchProduct(slug);
    }

  },

  data() {
    return {
      // firstProductImage: "https://bounipun.in/icons/light/logo.png",
      showShareIcons: false,
      showSlideshow: false,
      slideshowOptions: {
        dots: true,
        navButtons: true,
        centerMode: true,
        autoplay: false
      },

      /* images with absolute paths */
      images: [],
      slideMargin: 0,
      quantity: 1,
      addedToWishlist: false,
      product: {
        name: "loading..."
      },
      variants: [],
      activeColorIndex: 0,
      activeVariantIndex: 0,
      activeFabricIndex: 0,
      productFetched: false,
      stockLimit: 3,
      scrollPosition: 0,
      sticky: false,
      desktopSticky: false,
      preLoadMessage: "Loading product details...",
      colorExplicitlyChoosen: false
    };
  },

  computed: {
    firstProductImage() {
      /* TODO: DO SOME MAGIC HERE */
      const index = this.colorExplicitlyChoosen ? this.activeColorIndex : this.$route.query.activeColor; // const index = this.activeColorIndex;

      if (this.images && this.images.length > 0 && this.images[index] && this.images[index].length > 0) return this.images[index][0];else return "https://bounipun.in/icons/light/logo.png";
    },

    nonDiscountedPrice() {
      if (!this.product.saleDetails) return 0;
      let displayPrice;
      if (this.thirdPartyProduct || this.readyToShip) displayPrice = this.directPrice;else displayPrice = this.selectedFabricPrice;
      return displayPrice / (1 - this.product.saleDetails.discountPercentage / 100);
    },

    directPrice() {
      if (this.currencyIsINR) return this.product.directPrice;else return this.product.directPricing[this.currency];
    },

    collectionName() {
      if (!this.product.thirdParty && this.product.bounipun_collection && this.product.bounipun_collection.name) return this.product.bounipun_collection.name;
      return "";
    },

    collectionLink() {
      if (!this.product.thirdParty && this.product.bounipun_collection && this.product.bounipun_collection.slug) return "/collections?slug=" + this.product.bounipun_collection.slug;
      return "";
    },

    preferredGender() {
      if (this.product.gender === undefined) return "";
      if (this.product.gender === "for-him-and-her") return "him | her";
      return `${this.product.gender.replaceAll("-", " ")}`;
    },

    readyToShip() {
      return this.product.availabilityType === "ready-to-ship";
    },

    bounipunColors() {
      return this.product.colorSource === "bounipun-colors";
    },

    productDescription() {
      return this.product.description.split("\n");
    },

    variantDescription() {
      /* if rts and under bounipun */
      if (this.rtsAndUnderBounipun) {
        return this.product.rtsDirectVariant.description.split("\n");
      }

      if (this.variants.length === 0) return [];
      return this.variants[this.activeVariantIndex].description.split("\n");
    },

    fabricDescription() {
      /* if rts and under bounipun */
      if (this.rtsAndUnderBounipun) {
        return this.product.rtsDirectFabric.description.split("\n");
      }

      if (this.variants.length === 0) return [];
      return this.variants[this.activeVariantIndex].fabrics[this.activeFabricIndex].description.split("\n");
    },

    fabricWriteUp() {
      /* if rts and under bounipun */
      if (this.rtsAndUnderBounipun) {
        return this.product.rtsDirectFabric.writeUp.split("\n");
      }

      if (this.variants.length === 0) return [];
      return this.variants[this.activeVariantIndex].fabrics[this.activeFabricIndex].writeUp.split("\n");
    },

    detailsAndCare() {
      /* if rts and under bounipun */
      if (this.rtsAndUnderBounipun) {
        const detailsAndCare = this.product.rtsDirectFabric.detailsAndCare;
        return detailsAndCare !== undefined ? detailsAndCare.split("\n") : "";
      }

      if (this.variants.length === 0) return "";
      const detailsAndCare = this.variants[this.activeVariantIndex].fabrics[this.activeFabricIndex].detailsAndCare;
      if (detailsAndCare === undefined) return "";
      return detailsAndCare.split("\n");
    },

    selectedVariant() {
      const selectedVariant = this.variants[this.activeVariantIndex];
      if (selectedVariant === undefined) return {
        name: ""
      };
      return selectedVariant;
    },

    selectedFabric() {
      const selectedFabric = this.variants[this.activeVariantIndex].fabrics[this.activeFabricIndex];
      if (selectedFabric === undefined) return {
        name: "",
        info1: ""
      };
      return selectedFabric;
    },

    selectedFabricPrice() {
      if (this.selectedFabric === undefined) {
        return "fetching...";
      }

      if (this.currencyIsINR) return this.selectedFabric.price;else return this.selectedFabric.pricing[this.currency];
    },

    variantNote() {
      return this.product.bounipun_collection.variantNote;
    },

    thirdPartyProduct() {
      return this.product.type === "third-party";
    },

    rtsAndUnderBounipun() {
      return this.readyToShip && !this.thirdPartyProduct;
    },

    multiPriced() {
      return this.product.type === "third-party" ? false : this.product.availabilityType === "made-to-order" ? true : false;
    },

    activeDisclaimerText() {
      if (this.product.colors.length === 0) return "";
      const activeColor = this.product.colors[this.activeColorIndex];
      return activeColor === undefined ? "" : activeColor.disclaimer;
    },

    newCartItem() {
      return {
        product: this.product._id,
        colorCode: this.product.colors[this.activeColorIndex].code,
        quantity: this.quantity,
        variant: this.multiPriced ? this.variants[this.activeVariantIndex]._id : null,
        fabric: this.multiPriced ? this.variants[this.activeVariantIndex].fabrics[this.activeFabricIndex]._id : null
      };
    },

    alreadyInCart() {
      return this.$store.getters["customer/alreadyInCart"](this.newCartItem) === false ? false : true;
    },

    shareLink() {
      var _this$$route$query$ac;

      // let baseLink = `${location.host}/${this.product.slug}?activeColor=${this.activeColorIndex}`;
      let baseLink = `${location.host}/${this.product.slug}?activeColor=${this.colorExplicitlyChoosen ? this.activeColorIndex : (_this$$route$query$ac = this.$route.query.activeColor) !== null && _this$$route$query$ac !== void 0 ? _this$$route$query$ac : 0}`;
      if (window.location.hostname === "bounipun.in") baseLink = "https://" + baseLink;
      return baseLink;
    },

    whatsAppShareLink() {
      const BASE_SHARE_URL = "https://wa.me/?text=";
      let msg = `Check out this Bounipun special: ${this.shareLink}`;
      msg = encodeURI(msg);
      return BASE_SHARE_URL + msg;
    },

    getAPriceLink() {
      const BASE_SHARE_URL = "https://wa.me/919103077655?text=";
      let msg = `Hi there, I would like to get a price quote for this product: ${this.shareLink}`;
      msg = encodeURI(msg);
      return BASE_SHARE_URL + msg;
    },

    facebookShareLink() {
      const BASE_SHARE_URL = "https://www.facebook.com/sharer/sharer.php?u=";
      const link = BASE_SHARE_URL + this.shareLink;
      return link;
    },

    // https://twitter.com/intent/tweet?url=https://bounipun.in/autograph/mystic-maze?activeColor=0&text=Check%20out%20this%20Bounipun%20special:
    twitterShareLink() {
      const BASE_SHARE_URL = "https://twitter.com/intent/tweet";
      const remoteLink = this.shareLink.replace("localhost:8080", "https://bounipun.in");
      const link = BASE_SHARE_URL + "?url=" + encodeURI(remoteLink) + "&text=" + encodeURI("Check out this Bounipun special:");
      return link;
    },

    shippingTime() {
      if (this.product.availabilityType === "ready-to-ship") return "1";
      if (this.product.type === "under-bounipun") return this.product.bounipun_collection.edt;else "4";
    },

    inWishlist() {
      /* if customer is not logged in, return  */
      const customer = this.$store.state.customer;
      if (customer.authorized === false) return false;
      /* if wishlist is undefined, return */

      const wishlist = customer.user.wishlist;
      if (wishlist === undefined) return false;
      /* check if product is in wishlist */
      // const foundIndex = wishlist.findIndex(entry => entry.product === this.product._id && entry.colorCode === this.activeColorCode);

      const foundIndex = wishlist.findIndex(entry => entry.product === this.product._id);

      if (foundIndex !== -1) {
        return true;
      }

      return false;
    }

  },
  methods: {
    convertEmailsToLinks(text) {
      const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
      return text.replace(emailRegex, '<a style="color:#562828;font-weight:900; font-family:Poppins SemiBold;" href="mailto:$1">$1</a>');
    },

    addOGMetaTags() {
      this.addOGMetaTag("og:type", "website");
      this.addOGMetaTag("description", `${this.collectionName} from Bounipun Kashmir`);
      this.addOGMetaTag("og:title", `${this.product.name}`);
      this.addOGMetaTag("og:description", `${this.collectionName} from Bounipun Kashmir`);
      this.addOGMetaTag("og:image", this.firstProductImage);
      this.addOGMetaTag("og:url", this.shareLink);
      /* TODO: make a new build, delete cache and start fresh */

      this.addOGMetaTag("twitter:card", "summary_large_image");
      this.addOGMetaTag("twitter:title", `${this.product.name}`);
      this.addOGMetaTag("twitter:image", this.firstProductImage);
      this.addOGMetaTag("twitter:description", `${this.collectionName} from Bounipun Kashmir`);
    },

    addOGMetaTag(property, content) {
      let meta = document.createElement("meta");
      meta.setAttribute("property", property);
      meta.setAttribute("content", content);
      document.head.insertAdjacentElement("afterbegin", meta);
    },

    getFabricPrice(fabric) {
      if (this.currencyIsINR) return fabric.price;
      return fabric.pricing[this.currency];
    },

    async toggleWishlist() {
      /* if user is not logged in, move to login page */
      if (!this.$store.state.customer.authorized) {
        this.$router.push("/login");
        return;
      }
      /* set action according to state */


      const action = this.inWishlist ? "remove-from-wishlist" : "add-to-wishlist";
      /* take item to wishlist */

      const addToWishlist = await this.$post("/wishlistActions", {
        action,
        product: this.product._id,
        colorCode: this.activeColorCode
      });
      /* if request failed */

      if (addToWishlist.resolved === false) return;
      /* refetch wishlist */

      this.$store.dispatch("customer/fetchProfile");
      /* refetch wishlist */

      this.$store.dispatch("customer/fetchWishlist");
    },

    addToRecentlyViewed() {
      this.$store.commit("customer/addToRecentlyViewed", {
        product: this.product._id,
        name: this.product.name,
        colorCode: this.product.colors[this.activeColorIndex].code
      });
    },

    adjustPrice(price) {
      price = parseInt(price);
      return this.$store.getters["customer/adjustPrice"](price);
    },

    detailsSectionScrolled(event) {
      if (this.windowWidth < 768) return;
      this.desktopSticky = event.target.scrollTop > 160;
    },

    handleScroll(event) {
      // console.log(this.$store.getters['customer/alreadyInCart'], );
      if (this.windowWidth > 768) {
        // this.sticky = window.scrollY > 100;
        return;
      }

      const scrolled = screen.height + window.scrollY;
      this.sticky = window.scrollY > 25;
      return;
    },

    async addToCart() {
      /* if already added, move to cart page */
      if (this.alreadyInCart) {
        this.$router.push("/cart");
        return;
      }

      if (!this.$store.state.customer.authorized) {
        this.$store.commit("customer/addToCart", this.newCartItem);
        await this.$store.dispatch("customer/fetchCart");
        this.$forceUpdate();
        return;
      }
      /* take cart item to server */


      const remoteAddToCart = await this.$post("/cartActions", {
        action: "add-to-cart",
        cartItem: this.newCartItem
      });
      /* if request failed */

      if (remoteAddToCart.resolved === false) {
        return;
      }
      /* TODO: need to refetch again */


      await this.$store.dispatch("customer/fetchCart");
      this.$forceUpdate();
    },

    ifActiveColorInCategory(colors) {
      const foundIndex = colors.findIndex(col => col.actualIndex == this.$route.query.activeColor);
      console.log(foundIndex);
      return foundIndex !== -1;
    },

    setVariantColorToActiveFabric(index) {
      if (this.activeFabricIndex === index) return {
        backgroundColor: this.variants[this.activeVariantIndex].hex
      };
    },

    getVariantImage(image) {
      if (image === undefined) return "/demo_images/variants/shawl.png";
      return this.$getOriginalPath(image);
    },

    async fetchProduct(slug) {
      const productFetch = this.$axios.post("/fetchProduct", {
        slug,
        lockCheck: true,
        forceUnlock: this.$store.state.customer.adminAuthorized
      });
      const {
        response,
        error
      } = await this.$task(productFetch);

      if (error) {
        alert("Couldnt fetch product.");
        return;
      }
      /* if product not found */


      if (response.data.resolved === false) {
        this.preLoadMessage = "Product not found :(";
        return;
      }

      let result = {};
      result.doc = { ...response.data
      };
      /* filter out inactive colors */

      result.doc.colors = result.doc.colors.filter(color => color.status === true);

      if (result.doc.colors.length === 0) {
        console.log("No Active Color Found");
        return;
      }
      /* if color data [ESCAPE] */


      if (result.doc.colorData) {
        let colorCategories = result.doc.colorData; // const colorCategories = Object.keys(colorData);

        colorCategories.forEach(category => {
          let colors = category.colors;
          /* attach actual index */

          colors.forEach(color => {
            color.actualIndex = result.doc.colors.findIndex(col => col._id === color._id);
          });
          colors = colors.sort((a, b) => {
            return b.images.length - a.images.length;
          });
        });
      }

      this.product = result.doc;
      this.productFetched = true; // set stock for ready to ship

      if (this.product.availabilityType === "ready-to-ship") this.stockLimit = parseInt(this.product.stock);
      /* add product to recently viewed */

      this.addToRecentlyViewed();
      this.setImages();
      this.setVariants();
      /* TODO, figure out index from color code here */

      /* if main color provided via query param */

      if (this.$route.query.activeColor) {
        this.activeColorIndex = parseInt(this.$route.query.activeColor);
        return;
      }
      /* fetch main color */


      const mainColorIndex = this.product.colors.findIndex(color => color.mainColor === true);
      if (mainColorIndex !== -1) this.activeColorIndex = mainColorIndex;
    },

    setVariants() {
      let variants = this.product.variants.map(variant => {
        var _variantMeta, _variantMeta2, _variantMeta3, _variantMeta4, _variantMeta5;

        /* map fabric details */
        let fabrics = variant.fabrics.map(fabric => {
          return {
            _id: fabric._id._id,
            name: fabric._id.name,
            price: fabric.price,
            pricing: fabric.pricing,
            code: fabric._id.code,
            info1: fabric._id.info1,
            description: fabric._id.description,
            writeUp: fabric._id.writeUp,
            detailsAndCare: fabric._id.detailsAndCare,
            order: fabric._id.order,
            status: fabric._id.status
          };
        });
        /* filter out inactive fabric */

        fabrics = fabrics.filter(fab => fab.status === true);
        /* sort fabrics according to order */

        fabrics.sort((a, b) => a.order - b.order);
        /* look for variant meta */

        let variantMeta = null;

        if (this.product.variantsInfo) {
          variantMeta = this.product.variantsInfo.find(varInfo => varInfo.code === variant._id.code);

          if (variantMeta) {
            setTimeout(() => {
              console.log('🔥 found variant meta override', variantMeta);
            }, 1200);
          }
        }

        return {
          _id: variant._id._id,
          name: variant._id.name,
          info1: ((_variantMeta = variantMeta) === null || _variantMeta === void 0 ? void 0 : _variantMeta.info1) || variant._id.info1,
          info2: ((_variantMeta2 = variantMeta) === null || _variantMeta2 === void 0 ? void 0 : _variantMeta2.info2) || variant._id.info2,
          code: variant._id.code,
          order: variant._id.order,
          hex: ((_variantMeta3 = variantMeta) === null || _variantMeta3 === void 0 ? void 0 : _variantMeta3.hex) || variant._id.hex,
          description: ((_variantMeta4 = variantMeta) === null || _variantMeta4 === void 0 ? void 0 : _variantMeta4.description) || variant._id.description,
          image: ((_variantMeta5 = variantMeta) === null || _variantMeta5 === void 0 ? void 0 : _variantMeta5.image) || variant._id.image,
          fabrics
        };
      });
      /* filter out variants which have no active fabrics */

      variants = variants.filter(variant => variant.fabrics.length > 0);
      this.variants = variants.sort((a, b) => a.order - b.order);
      console.log(this.variants);
    },

    setActiveVariant(index) {
      this.activeFabricIndex = 0;
      this.activeVariantIndex = index;
      /* vibrate */

      this.$vibrateDevice(300);
    },

    setActiveFabric(index) {
      this.activeFabricIndex = index;
      /* vibrate */

      this.$vibrateDevice(300);
    },

    setActiveColor(index, colorId = false) {
      history.pushState({}, "", `${this.$route.path}?activeColor=${index}`);
      let activeIndex = index;

      if (colorId) {
        /* find index from actual color array */
        activeIndex = this.product.colors.findIndex(color => color._id === colorId);
      }

      this.activeColorIndex = activeIndex;
      this.$refs.slideshow.setActiveImage(0);
      this.colorExplicitlyChoosen = true;
      /* scroll page to top */

      if (this.windowWidth < 768) window.scroll({
        top: 0,
        behavior: "smooth"
      });else this.$refs.details.scroll({
        top: 0,
        behavior: "smooth"
      });
    },

    isActiveBounipunColor(colorId) {
      const colorIndex = this.product.colors.findIndex(color => color._id === colorId);
      return this.activeColorIndex === colorIndex;
    },

    setImages() {
      this.product.colors.forEach(color => {
        /* can be a breaking change */
        console.log(color.images, "🎉🎉🎉");
        const imagesSet = color.images || [];
        /* check for main image */

        const mainImageIndex = imagesSet.findIndex(i => i.mainImage === true);
        /* shift main image to the beginning */

        if (mainImageIndex !== -1) {
          const mainImage = { ...imagesSet[mainImageIndex]
          };
          imagesSet.splice(mainImageIndex, 1);
          imagesSet.unshift(mainImage);
        }

        let images = color.images.map(image => this.$getImage(image.path, "productPages"));

        if (images.length === 0 && color._id !== null) {
          console.log("No image found");
          images = [];
          images.push(this.$getImage(color.image, "productPages"));
        }

        this.images.push(images);
      });
      this.$forceUpdate();
      this.addOGMetaTags();
    },

    getMainImageCSS(color) {
      const images = color.images;

      if (images.length === 0) {
        return {
          backgroundImage: `url(${this.$getImage(color.image, "productPages")})`
        };
      }

      let mainImage = images.find(image => image.main === true);
      mainImage = mainImage === undefined ? images[0] : mainImage;
      const mainImagePath = this.$getImage(mainImage.path, "productPages");
      const mainImageCSS = {
        backgroundImage: `url(${mainImagePath})`
      };
      return mainImageCSS;
    }

  }
});
// CONCATENATED MODULE: ./pages/_collection/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var _collection_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_collection/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(552)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _collection_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "df531ebc",
  "dbcf6a04"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Slideshow: __webpack_require__(174).default,Accordion: __webpack_require__(159).default,RecentlyViewed: __webpack_require__(476).default,RelatedProducts: __webpack_require__(477).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map
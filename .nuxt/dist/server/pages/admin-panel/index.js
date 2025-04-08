exports.ids = [132];
exports.modules = {

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(478);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d0795bec", content, true, context)
};

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adfeacf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(396);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adfeacf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adfeacf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adfeacf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adfeacf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 478:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-5adfeacf]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-5adfeacf]{scroll-behavior:smooth}body[data-v-5adfeacf]{margin:0!important;padding:0}*[data-v-5adfeacf]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-5adfeacf]{padding:6%}button[data-v-5adfeacf]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-5adfeacf]{width:7%}button.sub-action[data-v-5adfeacf]{background-color:green}button.action[data-v-5adfeacf]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-5adfeacf]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-5adfeacf]{padding:2% 5%;width:100%}}button.action.delete[data-v-5adfeacf]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-5adfeacf]:hover{background-color:#e01010}button.small[data-v-5adfeacf]{font-size:11px;padding:1% 3%}button.clear[data-v-5adfeacf]{background:transparent;padding:2% 5%}h1[data-v-5adfeacf],h2[data-v-5adfeacf],h3[data-v-5adfeacf],h4[data-v-5adfeacf],h5[data-v-5adfeacf],h6[data-v-5adfeacf],p[data-v-5adfeacf],span[data-v-5adfeacf]{margin:0;padding:0;color:#333}.page[data-v-5adfeacf]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-5adfeacf]{margin-top:13vh;padding:7%}}.page.-wh[data-v-5adfeacf]{padding:0 0 5%}.page.side-pad[data-v-5adfeacf]{padding:2%}@media(max-width:768px){.page.-broad[data-v-5adfeacf]{padding:2%}}.page .page-header[data-v-5adfeacf]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-5adfeacf]{height:10vw}}.page .page-header .title[data-v-5adfeacf]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-5adfeacf]{font-size:5.4vw}}.page .side-pad[data-v-5adfeacf]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-5adfeacf]{padding:0 10%}}.pointer[data-v-5adfeacf]{cursor:pointer}.center[data-v-5adfeacf],.center-col[data-v-5adfeacf]{display:flex;justify-content:center;align-items:center}.center-col[data-v-5adfeacf]{flex-direction:column}.center-space[data-v-5adfeacf]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-5adfeacf]{position:relative}.white[data-v-5adfeacf]{color:#fff}.scrollable-list[data-v-5adfeacf]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-5adfeacf]{justify-content:center}}.scrollable-list[data-v-5adfeacf]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-5adfeacf]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-5adfeacf]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-5adfeacf]{margin-top:10px;width:50px}[data-v-5adfeacf]::-webkit-scrollbar{display:none}p.msg[data-v-5adfeacf]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-5adfeacf]{background-color:#a93737}p.msg.success[data-v-5adfeacf]{background-color:#319a67}.flex[data-v-5adfeacf]{display:flex}.flex.around[data-v-5adfeacf]{justify-content:space-around}.flex.between[data-v-5adfeacf]{justify-content:space-between}.flex.evenly[data-v-5adfeacf]{justify-content:space-evenly}.flex.col[data-v-5adfeacf]{flex-direction:column}.flex.wrap[data-v-5adfeacf]{flex-wrap:wrap}.flex.center[data-v-5adfeacf]{justify-content:center}.flex.center[data-v-5adfeacf],.flex.v-center[data-v-5adfeacf]{align-items:center}.flex.j-center[data-v-5adfeacf]{justify-content:center}.flex.start[data-v-5adfeacf]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-5adfeacf]{align-items:center}.flex.baseline[data-v-5adfeacf]{align-items:baseline}.flex.end[data-v-5adfeacf]{justify-content:flex-end}.flex.end.center[data-v-5adfeacf]{align-items:center}a[data-v-5adfeacf]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-5adfeacf]{display:none}}.onlyMobile[data-v-5adfeacf]{display:none}@media(max-width:768px){.onlyMobile[data-v-5adfeacf]{display:inline;display:initial}}.dashboard .pages[data-v-5adfeacf]{width:50%;flex-wrap:wrap}.dashboard .master-view-btn[data-v-5adfeacf]{margin-top:15px;background:#562828;color:#fff;border:none;padding:10px 20px;font-family:\"SF-Pro SemiBold\";font-size:14px;cursor:pointer;border-radius:4px;transition:all .3s ease-in-out}.dashboard .master-view-btn[data-v-5adfeacf]:hover{background:#492727;transform:translateY(-1px)}.dashboard .stats[data-v-5adfeacf]{width:50%;flex-wrap:wrap}.dashboard .card[data-v-5adfeacf]{box-shadow:1px 1px 15px rgba(0,0,0,.16);cursor:pointer;transition:all .3s ease-in-out}.dashboard .page[data-v-5adfeacf]{padding:10px;width:20%;height:100px;margin:10px}.dashboard .page .name[data-v-5adfeacf]{font-family:\"SF-Pro\";text-transform:uppercase;color:#464646;transition:all .3s ease-in-out;font-size:17px}.dashboard .page .desc[data-v-5adfeacf]{font-family:\"Poppins\";text-align:center;font-size:11px;transition:all .1s ease-in-out}.dashboard .page[data-v-5adfeacf]:hover{background-color:rgba(73,39,39,.79216);border-radius:4px;width:21%}.dashboard .page:hover .desc[data-v-5adfeacf],.dashboard .page:hover .name[data-v-5adfeacf]{color:#fff}.dashboard .stat[data-v-5adfeacf]{padding:10px;width:20%;height:100px;margin:10px;border-radius:5px}.dashboard .stat .value[data-v-5adfeacf]{font-size:18px}.dashboard .stat .name[data-v-5adfeacf]{text-align:center;font-size:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin-panel/index.vue?vue&type=template&id=5adfeacf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dashboard center"},[_vm._ssrNode("<div class=\"pages center\" style=\"height: 20vh\" data-v-5adfeacf><div class=\"center-col\" data-v-5adfeacf><p data-v-5adfeacf>You are now authorized to use this dashboard.</p> <button class=\"master-view-btn\" data-v-5adfeacf>\n        Access Master View\n      </button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin-panel/index.vue?vue&type=template&id=5adfeacf&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin-panel/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var admin_panelvue_type_script_lang_js_ = ({
  layout: "admin",
  methods: {
    openMasterView() {
      window.open("/", "_blank");
    }

  },

  data() {
    return {
      cards: [{
        name: "Products",
        path: "/products",
        desc: "Manage Bounipun inventory",
        path: "/admin-panel/products"
      }, {
        name: "Collections",
        path: "/",
        desc: "Manage techniques"
      }, {
        name: "Categories",
        path: "/categories",
        desc: "Add or remove list of categories"
      }, {
        name: "Fabrics",
        path: "/fabrics",
        desc: "Manage list and details of various fabrics"
      }, {
        name: "Colors",
        path: "/colors",
        desc: "Manage bounipun colors"
      }, {
        name: "Payments",
        path: "/payments",
        desc: "Track payments"
      }, {
        name: "SMS",
        path: "/sms",
        desc: "Track SMS Usage"
      }, {
        name: "Orders",
        path: "/orders",
        desc: "Manage orders"
      }, {
        name: "Messages",
        path: "/orders",
        desc: "Manage messages"
      }, {
        name: "Coupons",
        path: "/coupon",
        desc: "Manage coupons"
      }],
      stats: [{
        name: "Total Orders",
        value: 102
      }, {
        name: "Total Revenue",
        value: "599202 INR"
      }, {
        name: "SMS Usage",
        value: 570
      }, {
        name: "Total Products",
        value: 75
      }, {
        name: "Total Collections",
        value: 5
      }, {
        name: "Total Categories",
        value: 3
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/admin-panel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_admin_panelvue_type_script_lang_js_ = (admin_panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin-panel/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(477)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_admin_panelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5adfeacf",
  "18f1aa62"
  
)

/* harmony default export */ var admin_panel = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
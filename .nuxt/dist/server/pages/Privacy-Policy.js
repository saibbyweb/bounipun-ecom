exports.ids = [111];
exports.modules = {

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(517);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("03bd790c", content, true, context)
};

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_Policy_vue_vue_type_style_index_0_id_161ab9c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_Policy_vue_vue_type_style_index_0_id_161ab9c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_Policy_vue_vue_type_style_index_0_id_161ab9c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_Policy_vue_vue_type_style_index_0_id_161ab9c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_Policy_vue_vue_type_style_index_0_id_161ab9c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 517:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-161ab9c0]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-161ab9c0]{scroll-behavior:smooth}body[data-v-161ab9c0]{margin:0!important;padding:0}*[data-v-161ab9c0]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-161ab9c0]{padding:6%}button[data-v-161ab9c0]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-161ab9c0]{width:7%}button.sub-action[data-v-161ab9c0]{background-color:green}button.action[data-v-161ab9c0]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-161ab9c0]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-161ab9c0]{padding:2% 5%;width:100%}}button.action.delete[data-v-161ab9c0]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-161ab9c0]:hover{background-color:#e01010}button.small[data-v-161ab9c0]{font-size:11px;padding:1% 3%}button.clear[data-v-161ab9c0]{background:transparent;padding:2% 5%}h1[data-v-161ab9c0],h2[data-v-161ab9c0],h3[data-v-161ab9c0],h4[data-v-161ab9c0],h5[data-v-161ab9c0],h6[data-v-161ab9c0],p[data-v-161ab9c0],span[data-v-161ab9c0]{margin:0;padding:0;color:#333}.page[data-v-161ab9c0]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-161ab9c0]{margin-top:13vh;padding:7%}}.page.-wh[data-v-161ab9c0]{padding:0 0 5%}.page.side-pad[data-v-161ab9c0]{padding:2%}@media(max-width:768px){.page.-broad[data-v-161ab9c0]{padding:2%}}.page .page-header[data-v-161ab9c0]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-161ab9c0]{height:10vw}}.page .page-header .title[data-v-161ab9c0]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-161ab9c0]{font-size:5.4vw}}.page .side-pad[data-v-161ab9c0]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-161ab9c0]{padding:0 10%}}.pointer[data-v-161ab9c0]{cursor:pointer}.center[data-v-161ab9c0],.center-col[data-v-161ab9c0]{display:flex;justify-content:center;align-items:center}.center-col[data-v-161ab9c0]{flex-direction:column}.center-space[data-v-161ab9c0]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-161ab9c0]{position:relative}.white[data-v-161ab9c0]{color:#fff}.scrollable-list[data-v-161ab9c0]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-161ab9c0]{justify-content:center}}.scrollable-list[data-v-161ab9c0]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-161ab9c0]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-161ab9c0]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-161ab9c0]{margin-top:10px;width:50px}[data-v-161ab9c0]::-webkit-scrollbar{display:none}p.msg[data-v-161ab9c0]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-161ab9c0]{background-color:#a93737}p.msg.success[data-v-161ab9c0]{background-color:#319a67}.flex[data-v-161ab9c0]{display:flex}.flex.around[data-v-161ab9c0]{justify-content:space-around}.flex.between[data-v-161ab9c0]{justify-content:space-between}.flex.evenly[data-v-161ab9c0]{justify-content:space-evenly}.flex.col[data-v-161ab9c0]{flex-direction:column}.flex.wrap[data-v-161ab9c0]{flex-wrap:wrap}.flex.center[data-v-161ab9c0]{justify-content:center}.flex.center[data-v-161ab9c0],.flex.v-center[data-v-161ab9c0]{align-items:center}.flex.j-center[data-v-161ab9c0]{justify-content:center}.flex.start[data-v-161ab9c0]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-161ab9c0]{align-items:center}.flex.baseline[data-v-161ab9c0]{align-items:baseline}.flex.end[data-v-161ab9c0]{justify-content:flex-end}.flex.end.center[data-v-161ab9c0]{align-items:center}a[data-v-161ab9c0]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-161ab9c0]{display:none}}.onlyMobile[data-v-161ab9c0]{display:none}@media(max-width:768px){.onlyMobile[data-v-161ab9c0]{display:inline;display:initial}}.article[data-v-161ab9c0]{padding:20px}.article h1[data-v-161ab9c0],.article h2[data-v-161ab9c0]{text-transform:uppercase;font-family:\"Poppins\";margin:10px 0}.article p[data-v-161ab9c0]{font-family:\"SF-Pro\";font-size:14px}.clear-popups[data-v-161ab9c0]{cursor:pointer}.clear-popups[data-v-161ab9c0]:hover{color:rgba(183,36,36,.765);font-weight:900}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Privacy-Policy.vue?vue&type=template&id=161ab9c0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page "},[_vm._ssrNode("<h1 data-v-161ab9c0>Privacy Policy</h1> <p data-v-161ab9c0>\n    It is our policy to respect your privacy regarding any information we may\n    collect while operating our website. This Privacy Policy applies to\n    https://bounipun.in (hereinafter, 'us', 'we', or 'https://bounipun.in').\n    We respect your privacy and are committed to protecting personally\n    identifiable information you may provide us through the Website. We have\n    adopted this privacy policy ('Privacy Policy') to explain what information\n    may be collected on our Website, how we use this information, and under\n    what circumstances we may disclose the information to third parties. This\n    Privacy Policy applies only to information we collect through the Website\n    and does not apply to our collection of information from other sources.\n  </p> <br data-v-161ab9c0> <p data-v-161ab9c0>\n    This Privacy Policy, together with the Terms and conditions posted on our\n    Website, set forth the general rules and policies governing your use of\n    our Website. Depending on your activities when visiting our Website, you\n    may be required to agree to additional terms and conditions.\n  </p> <br data-v-161ab9c0> <h2 data-v-161ab9c0>Website Visitors</h2> <p data-v-161ab9c0>\n    Like most website operators, bounipun.in collects\n    non-personally-identifying information of the sort that web browsers and\n    servers typically make available, such as the browser type, language\n    preference, referring site, and the date and time of each visitor request.\n    bounipun.in’s purpose in collecting non-personally identifying\n    information is to better understand how bounipun.in’s visitors use its\n    website. From time to time, bounipun.in may release\n    non-personally-identifying information in the aggregate, e.g., by\n    publishing a report on trends in the usage of its website.\n  </p> <br data-v-161ab9c0> <p data-v-161ab9c0>\n    bounipun.in also collects potentially personally-identifying\n    information like Internet Protocol (IP) addresses for logged in users and\n    for users leaving comments on https://bounipun.in blog posts.\n    bounipun.in only discloses logged in user and commenter IP addresses\n    under the same circumstances that it uses and discloses\n    personally-identifying information as described below.\n  </p> <br data-v-161ab9c0> <h2 data-v-161ab9c0>Gathering of Personally-Identifying Information</h2> <p data-v-161ab9c0>\n    Certain visitors to bounipun.in’s websites choose to interact with\n    bounipun.in in ways that require bounipun.in to gather\n    personally-identifying information. The amount and type of information\n    that bounipun.in gathers depends on the nature of the interaction. For\n    example, we ask visitors who sign up for a blog at https://bounipun.in to\n    provide a username and email address.\n  </p> <br data-v-161ab9c0> <h2 data-v-161ab9c0>Security</h2> <p data-v-161ab9c0>\n    The security of your Personal Information is important to us, but remember\n    that no method of transmission over the Internet, or method of electronic\n    storage is 100% secure. While we strive to use commercially acceptable\n    means to protect your Personal Information, we cannot guarantee its\n    absolute security.\n  </p> <br data-v-161ab9c0> <h2 data-v-161ab9c0>Advertisements</h2> <p data-v-161ab9c0>\n    Ads appearing on our website may be delivered to users by advertising\n    partners, who may set cookies. These cookies allow the ad server to\n    recognize your computer each time they send you an online advertisement to\n    compile information about you or others who use your computer. This\n    information allows ad networks to, among other things, deliver targeted\n    advertisements that they believe will be of most interest to you. This\n    Privacy Policy covers the use of cookies by bounipun.in and does not cover\n    the use of cookies by any advertisers.\n  </p> <br data-v-161ab9c0> <h2 data-v-161ab9c0>Links To External Sites</h2> <p data-v-161ab9c0>\n    Our Service may contain links to external sites that are not operated by\n    us. If you click on a third party link, you will be directed to that third\n    party's site. We strongly advise you to review the Privacy Policy and\n    terms and conditions of every site you visit.\n  </p> <br data-v-161ab9c0> <p data-v-161ab9c0>\n    We have no control over, and assume no responsibility for the content,\n    privacy policies or practices of any third party sites, products or\n    services.\n  </p> <br data-v-161ab9c0> <h2 data-v-161ab9c0>Aggregated Statistics</h2> <p data-v-161ab9c0>\n    bounipun.in may collect statistics about the behavior of visitors to\n    its website. bounipun.in may display this information publicly or\n    provide it to others. However, bounipun.in does not disclose your\n    personally-identifying information.\n  </p> <br data-v-161ab9c0> <h2 data-v-161ab9c0>Cookies</h2> <p data-v-161ab9c0>\n    To enrich and perfect your online experience, bounipun.in uses\n    'Cookies', similar technologies and services provided by others to display\n    personalized content, appropriate advertising and store your preferences\n    on your computer.\n  </p> <br data-v-161ab9c0> <p data-v-161ab9c0>\n    A cookie is a string of information that a website stores on a visitor’s\n    computer, and that the visitor’s browser provides to the website each time\n    the visitor returns. bounipun.in uses cookies to help bounipun.in\n    identify and track visitors, their usage of https://bounipun.in, and their\n    website access preferences. bounipun.in visitors who do not wish to\n    have cookies placed on their computers should set their browsers to refuse\n    cookies before using bounipun.in’s websites, with the drawback that\n    certain features of bounipun.in’s websites may not function properly\n    without the aid of cookies.\n  </p> <br data-v-161ab9c0> <p data-v-161ab9c0>\n    By continuing to navigate our website without changing your cookie\n    settings, you hereby acknowledge and agree to bounipun.in's use of\n    cookies.\n  </p> <br data-v-161ab9c0> <h2 data-v-161ab9c0>Privacy Policy Changes</h2> <p data-v-161ab9c0>\n    Although most changes are likely to be minor, bounipun.in may change its\n    Privacy Policy from time to time, and in bounipun.in’s sole discretion.\n    bounipun.in encourages visitors to frequently check this page for any\n    changes to its Privacy Policy. Your continued use of this site after any\n    change in this Privacy Policy will constitute your acceptance of such <span title=\"Clear Popup Data\" class=\"clear-popups\" data-v-161ab9c0>\n    change. </span></p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Privacy-Policy.vue?vue&type=template&id=161ab9c0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Privacy-Policy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Privacy_Policyvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Privacy Policy | Bounipun Kashmir"
    };
  },

  methods: {
    clearPopupData() {
      this.$store.commit('customer/clearPopupsPopped');
      alert('Popup Data cleared. Refresh page to check.');
    }

  }
});
// CONCATENATED MODULE: ./pages/Privacy-Policy.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Privacy_Policyvue_type_script_lang_js_ = (Privacy_Policyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Privacy-Policy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(516)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Privacy_Policyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "161ab9c0",
  "f6c7bffe"
  
)

/* harmony default export */ var Privacy_Policy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Privacy-Policy.js.map
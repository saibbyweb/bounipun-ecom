exports.ids = [106];
exports.modules = {

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(505);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("cc6d5ca4", content, true, context)
};

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_691dd60e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_691dd60e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_691dd60e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_691dd60e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_691dd60e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 505:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-691dd60e]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-691dd60e]{scroll-behavior:smooth}body[data-v-691dd60e]{margin:0!important;padding:0}*[data-v-691dd60e]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-691dd60e]{padding:6%}button[data-v-691dd60e]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-691dd60e]{width:7%}button.sub-action[data-v-691dd60e]{background-color:green}button.action[data-v-691dd60e]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-691dd60e]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-691dd60e]{padding:2% 5%;width:100%}}button.action.delete[data-v-691dd60e]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-691dd60e]:hover{background-color:#e01010}button.small[data-v-691dd60e]{font-size:11px;padding:1% 3%}button.clear[data-v-691dd60e]{background:transparent;padding:2% 5%}h1[data-v-691dd60e],h2[data-v-691dd60e],h3[data-v-691dd60e],h4[data-v-691dd60e],h5[data-v-691dd60e],h6[data-v-691dd60e],p[data-v-691dd60e],span[data-v-691dd60e]{margin:0;padding:0;color:#333}.page[data-v-691dd60e]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-691dd60e]{margin-top:13vh;padding:7%}}.page.-wh[data-v-691dd60e]{padding:0 0 5%}.page.side-pad[data-v-691dd60e]{padding:2%}@media(max-width:768px){.page.-broad[data-v-691dd60e]{padding:2%}}.page .page-header[data-v-691dd60e]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-691dd60e]{height:10vw}}.page .page-header .title[data-v-691dd60e]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-691dd60e]{font-size:5.4vw}}.page .side-pad[data-v-691dd60e]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-691dd60e]{padding:0 10%}}.pointer[data-v-691dd60e]{cursor:pointer}.center[data-v-691dd60e],.center-col[data-v-691dd60e]{display:flex;justify-content:center;align-items:center}.center-col[data-v-691dd60e]{flex-direction:column}.center-space[data-v-691dd60e]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-691dd60e]{position:relative}.white[data-v-691dd60e]{color:#fff}.scrollable-list[data-v-691dd60e]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-691dd60e]{justify-content:center}}.scrollable-list[data-v-691dd60e]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-691dd60e]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-691dd60e]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-691dd60e]{margin-top:10px;width:50px}[data-v-691dd60e]::-webkit-scrollbar{display:none}p.msg[data-v-691dd60e]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-691dd60e]{background-color:#a93737}p.msg.success[data-v-691dd60e]{background-color:#319a67}.flex[data-v-691dd60e]{display:flex}.flex.around[data-v-691dd60e]{justify-content:space-around}.flex.between[data-v-691dd60e]{justify-content:space-between}.flex.evenly[data-v-691dd60e]{justify-content:space-evenly}.flex.col[data-v-691dd60e]{flex-direction:column}.flex.wrap[data-v-691dd60e]{flex-wrap:wrap}.flex.center[data-v-691dd60e]{justify-content:center}.flex.center[data-v-691dd60e],.flex.v-center[data-v-691dd60e]{align-items:center}.flex.j-center[data-v-691dd60e]{justify-content:center}.flex.start[data-v-691dd60e]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-691dd60e]{align-items:center}.flex.baseline[data-v-691dd60e]{align-items:baseline}.flex.end[data-v-691dd60e]{justify-content:flex-end}.flex.end.center[data-v-691dd60e]{align-items:center}a[data-v-691dd60e]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-691dd60e]{display:none}}.onlyMobile[data-v-691dd60e]{display:none}@media(max-width:768px){.onlyMobile[data-v-691dd60e]{display:inline;display:initial}}.my-account .account-header[data-v-691dd60e]{background-color:#464646;height:25vw;display:flex}.my-account .account-header .initials-container[data-v-691dd60e]{width:35vw}.my-account .account-header .initials-container .initials[data-v-691dd60e]{background-color:#fff;border-radius:50%;width:15vw;height:15vw}.my-account .account-header .initials-container .initials span[data-v-691dd60e]{color:#464646;font-family:\"SF-Pro Bold\";font-size:19px}.my-account .account-header .name-and-phonenumber[data-v-691dd60e]{width:65vw;display:flex;flex-direction:column;justify-content:center}.my-account .account-header .name-and-phonenumber span[data-v-691dd60e]{color:#fff}.my-account .account-header .name-and-phonenumber span.name[data-v-691dd60e]{font-size:19px}.my-account .account-header .name-and-phonenumber span.phone-number[data-v-691dd60e]{font-size:13px}.my-account .account-page-list[data-v-691dd60e]{background-color:#fff;padding-top:5%}.my-account .account-page-list .account-page-item[data-v-691dd60e]{display:flex;background-color:#fff;padding:15px 10px;border-bottom:1px solid rgba(51,51,51,.1);cursor:pointer}.my-account .account-page-list .account-page-item .icon-box[data-v-691dd60e]{width:20vw}.my-account .account-page-list .account-page-item .icon-box .icon[data-v-691dd60e]{width:25%;opacity:.8}.my-account .account-page-list .account-page-item .name-and-desc[data-v-691dd60e]{display:flex;flex-direction:column;width:70vw}.my-account .account-page-list .account-page-item .name-and-desc .name[data-v-691dd60e]{font-size:13px}.my-account .account-page-list .account-page-item .name-and-desc .desc[data-v-691dd60e]{color:#7f7f7f;font-size:11px}.my-account .account-page-list .account-page-item .arrow-box[data-v-691dd60e]{width:10vw}.my-account .account-page-list .account-page-item .arrow-box .arrow[data-v-691dd60e]{width:20%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/My-Account/index.vue?vue&type=template&id=691dd60e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page -wh my-account"},[_vm._ssrNode("<div class=\"account-header\" data-v-691dd60e><div class=\"initials-container center\" data-v-691dd60e><div class=\"initials center\" data-v-691dd60e><span data-v-691dd60e>"+_vm._ssrEscape(" "+_vm._s(_vm.initials)+" ")+"</span></div></div> <div class=\"name-and-phonenumber\" data-v-691dd60e><span class=\"name\" data-v-691dd60e>"+_vm._ssrEscape(" "+_vm._s(_vm.nameOnAccount)+" ")+"</span> <span class=\"phone-number\" data-v-691dd60e>"+_vm._ssrEscape(" "+_vm._s(_vm.phoneNumber)+" ")+"</span></div></div> <div class=\"account-page-list\" data-v-691dd60e>"+(_vm._ssrList((_vm.pages),function(page,index){return ("<div class=\"account-page-item\" data-v-691dd60e><div class=\"icon-box center\" data-v-691dd60e><img"+(_vm._ssrAttr("src",'/icons/account/' + page.icon))+" class=\"icon\" data-v-691dd60e></div> <div class=\"name-and-desc\" data-v-691dd60e><span class=\"name\" data-v-691dd60e>"+_vm._ssrEscape(" "+_vm._s(page.name)+" ")+"</span> <span class=\"desc\" data-v-691dd60e>"+_vm._ssrEscape(" "+_vm._s(page.description)+" ")+"</span></div> <div class=\"arrow-box center\" data-v-691dd60e><img src=\"/icons/account/arrow.png\" class=\"arrow\" data-v-691dd60e></div></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/My-Account/index.vue?vue&type=template&id=691dd60e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/My-Account/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var My_Accountvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "My Account | Bounipun Kashmir"
    };
  },

  mounted() {
    setTimeout(() => {
      if (!this.$store.state.customer.authorized) this.$router.push("/login");
    }, 400);
  },

  computed: {
    nameOnAccount() {
      const user = this.$store.state.customer.user;
      return user !== undefined ? user.firstName + " " + user.surName : "";
    },

    phoneNumber() {
      const user = this.$store.state.customer.user;
      return user !== undefined ? user.countryDialCode + "-" + user.phoneNumber : "";
    },

    initials() {
      const user = this.$store.state.customer.user;

      if (user.firstName !== undefined) {
        const firstLetter = user.firstName.charAt(0);
        const secondLetter = user.surName.charAt(0);
        return firstLetter + secondLetter;
      } else return "";
    }

  },

  data() {
    return {
      pages: [{
        name: "My Orders",
        description: "Track your orders",
        icon: "orders.png",
        path: "orders"
      }, // {
      //     name: "Address Book",
      //     description: "Save addresses for quick checkouts",
      //     icon: "address.png",
      //     path: "address-book"
      // },
      {
        name: "My Profile",
        description: "View or manage your profile",
        icon: "profile.png",
        path: "profile-details"
      } // ,{
      //     name: "Gift Cards",
      //     description: "Redeem of send gift cards.",
      //     icon: "giftcards.png",
      //     path: "gift-cards"
      // }
      ]
    };
  }

});
// CONCATENATED MODULE: ./pages/My-Account/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_My_Accountvue_type_script_lang_js_ = (My_Accountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/My-Account/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(504)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_My_Accountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "691dd60e",
  "0e38c439"
  
)

/* harmony default export */ var My_Account = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
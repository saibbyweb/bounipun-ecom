exports.ids = [155];
exports.modules = {

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(506);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9f3b2648", content, true, context)
};

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_our_story_vue_vue_type_style_index_0_id_fd78827a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_our_story_vue_vue_type_style_index_0_id_fd78827a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_our_story_vue_vue_type_style_index_0_id_fd78827a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_our_story_vue_vue_type_style_index_0_id_fd78827a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_our_story_vue_vue_type_style_index_0_id_fd78827a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 506:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b[data-v-fd78827a]{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html[data-v-fd78827a]{scroll-behavior:smooth}body[data-v-fd78827a]{margin:0!important;padding:0}*[data-v-fd78827a]{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-fd78827a]{padding:6%}button[data-v-fd78827a]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-fd78827a]{width:7%}button.sub-action[data-v-fd78827a]{background-color:green}button.action[data-v-fd78827a]{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action[data-v-fd78827a]:hover{background-color:#0e0e0e}@media(max-width:768px){button.action[data-v-fd78827a]{padding:2% 5%;width:100%}}button.action.delete[data-v-fd78827a]{background-color:#9d2424;font-size:10px}button.action.delete[data-v-fd78827a]:hover{background-color:#e01010}button.small[data-v-fd78827a]{font-size:11px;padding:1% 3%}button.clear[data-v-fd78827a]{background:transparent;padding:2% 5%}h1[data-v-fd78827a],h2[data-v-fd78827a],h3[data-v-fd78827a],h4[data-v-fd78827a],h5[data-v-fd78827a],h6[data-v-fd78827a],p[data-v-fd78827a],span[data-v-fd78827a]{margin:0;padding:0;color:#333}.page[data-v-fd78827a]{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page[data-v-fd78827a]{margin-top:13vh;padding:7%}}.page.-wh[data-v-fd78827a]{padding:0 0 5%}.page.side-pad[data-v-fd78827a]{padding:2%}@media(max-width:768px){.page.-broad[data-v-fd78827a]{padding:2%}}.page .page-header[data-v-fd78827a]{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header[data-v-fd78827a]{height:10vw}}.page .page-header .title[data-v-fd78827a]{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title[data-v-fd78827a]{font-size:5.4vw}}.page .side-pad[data-v-fd78827a]{padding:0 5%}@media(max-width:768px){.page .side-pad[data-v-fd78827a]{padding:0 10%}}.pointer[data-v-fd78827a]{cursor:pointer}.center[data-v-fd78827a],.center-col[data-v-fd78827a]{display:flex;justify-content:center;align-items:center}.center-col[data-v-fd78827a]{flex-direction:column}.center-space[data-v-fd78827a]{display:flex;justify-content:space-around;align-items:center}.contents[data-v-fd78827a]{position:relative}.white[data-v-fd78827a]{color:#fff}.scrollable-list[data-v-fd78827a]{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list[data-v-fd78827a]{justify-content:center}}.scrollable-list[data-v-fd78827a]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-fd78827a]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-fd78827a]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-fd78827a]{margin-top:10px;width:50px}[data-v-fd78827a]::-webkit-scrollbar{display:none}p.msg[data-v-fd78827a]{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error[data-v-fd78827a]{background-color:#a93737}p.msg.success[data-v-fd78827a]{background-color:#319a67}.flex[data-v-fd78827a]{display:flex}.flex.around[data-v-fd78827a]{justify-content:space-around}.flex.between[data-v-fd78827a]{justify-content:space-between}.flex.evenly[data-v-fd78827a]{justify-content:space-evenly}.flex.col[data-v-fd78827a]{flex-direction:column}.flex.wrap[data-v-fd78827a]{flex-wrap:wrap}.flex.center[data-v-fd78827a]{justify-content:center}.flex.center[data-v-fd78827a],.flex.v-center[data-v-fd78827a]{align-items:center}.flex.j-center[data-v-fd78827a]{justify-content:center}.flex.start[data-v-fd78827a]{justify-content:flex-start;align-items:flex-start}.flex.start.center[data-v-fd78827a]{align-items:center}.flex.baseline[data-v-fd78827a]{align-items:baseline}.flex.end[data-v-fd78827a]{justify-content:flex-end}.flex.end.center[data-v-fd78827a]{align-items:center}a[data-v-fd78827a]{text-decoration:none}@media(max-width:768px){.onlyDesktop[data-v-fd78827a]{display:none}}.onlyMobile[data-v-fd78827a]{display:none}@media(max-width:768px){.onlyMobile[data-v-fd78827a]{display:inline;display:initial}}.header-image[data-v-fd78827a]{height:100vh;width:100%;background-position:top;background-attachment:fixed}.header-image h1[data-v-fd78827a]{color:#fff}.header-image .pointer[data-v-fd78827a]{transition:all .3s ease-in-out}.header-image .pointer[data-v-fd78827a]:hover{transform:scale(1.3)}p[data-v-fd78827a]{font-size:13.5px}.c-text[data-v-fd78827a]{padding:4% 10%;text-align:center}.reverse[data-v-fd78827a]{flex-direction:row-reverse}.section-split[data-v-fd78827a]{display:flex;height:140vh;padding:1% 5% 3%}.section-split .one[data-v-fd78827a]{width:45%;padding:1% 3%}.section-split .one .one-image[data-v-fd78827a]{width:100%;height:80%}.section-split .one .text[data-v-fd78827a]{margin:0 0 4.5%}.section-split .two[data-v-fd78827a]{width:55%}@media(max-width:768px){.section-split[data-v-fd78827a]{flex-direction:column;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:5%}.section-split .one[data-v-fd78827a]{width:100%;padding:0}.section-split .one .one-image[data-v-fd78827a]{height:60vh}.section-split .one .text[data-v-fd78827a]{padding-top:10%;padding-bottom:5%;text-align:center}.section-split .two[data-v-fd78827a]{width:100%;height:90vh}}.full-width[data-v-fd78827a]{width:100%;height:90vh;background-position:50%}@media(max-width:768px){.bordered-blocks[data-v-fd78827a]{margin-top:4%}.text p[data-v-fd78827a]{font-size:3.5vw}.c-text[data-v-fd78827a]{padding:4% 10% 0;text-align:center}.c-text p[data-v-fd78827a]{font-size:3.5vw!important}.c-text .just-text[data-v-fd78827a]{padding-top:5%;font-size:3.5vw}.header-image[data-v-fd78827a]{background-attachment:scroll}}.bordered-block[data-v-fd78827a]{border:2px solid #cecece;width:75%;height:50vh;display:flex;margin:3% 0;position:relative}.bordered-block .text[data-v-fd78827a]{padding:10%;width:70%}.bordered-block .image[data-v-fd78827a]{position:absolute;height:110%;top:-5%;width:40%}.bordered-block .image.first[data-v-fd78827a]{right:-5%}.bordered-block .image.second[data-v-fd78827a]{left:-5%}@media(max-width:768px){.bordered-block[data-v-fd78827a]{width:85%;height:80vh;flex-direction:column;justify-content:flex-end}.bordered-block .text[data-v-fd78827a]{padding:10%;width:100%}.bordered-block .image[data-v-fd78827a]{top:0;width:100%;height:57%}.bordered-block .image.first[data-v-fd78827a],.bordered-block .image.second[data-v-fd78827a]{left:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/our-story.vue?vue&type=template&id=fd78827a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page -wh"},[_vm._ssrNode("<div class=\"header-image flex center col\""+(_vm._ssrStyle(null,_vm.setBg('1.jpg'), null))+" data-v-fd78827a><br data-v-fd78827a> <br data-v-fd78827a> <img src=\"/story-images/arrow-down.png\" class=\"pointer\" style=\"width: 50px\" data-v-fd78827a></div> <div class=\"c-text\" data-v-fd78827a><p data-v-fd78827a>\n      Zubair Kirmani , an internationally acclaimed fashion designer hailing\n      from the implausible Vale of Kashmir. He has grown under shades of\n      mighty Chinars and scented cypresses in mountainous paradise. To cap it\n      all, he called his ever-growing Brand as – “BOUNIPUN” (Chinar leaf).\n    </p></div> <div class=\"section-split\" data-v-fd78827a><div class=\"one\" data-v-fd78827a><div class=\"one-image\""+(_vm._ssrStyle(null,_vm.setBg('2.jpg'), null))+" data-v-fd78827a></div> <div class=\"text\" data-v-fd78827a><p data-v-fd78827a>\n          Zubair Kirmani could not unhitch the strings that linked him to his\n          motherland despite working away from home for at least 15 years.\n          Zubair Kirmani came back after exploring and proving himself\n          worldwide. The brand is about breaking all the stereotypes, the\n          mainstream rules which cause hindrance in expression. The brand\n          BOUNIPUN is all about Luxury that is authentic, modern, and allows\n          everyone to express their unique personality. A luxury rooted in\n          creativity and sincerity that inspires dreams and emotions. In our\n          signature designs, we encapsulate these beliefs.\n        </p></div></div> <div class=\"two\""+(_vm._ssrStyle(null,_vm.setBg('3.jpg'), null))+" data-v-fd78827a></div></div> <div class=\"full-width\""+(_vm._ssrStyle(null,_vm.setBg('4.jpg', true), null))+" data-v-fd78827a></div> <div class=\"c-text\" data-v-fd78827a><p class=\"just-text\" data-v-fd78827a>\n      Zubair is one of the few designers who flourished as the winner of the\n      prestigious International Woolmark Prize, 2016-2017 that was held in\n      Paris. He has been honoured “best debut” and “neo-minimal designer” by\n      ELLE magazine. His rigorous research into the textile and in-depth\n      exploration with style for Woolmark inspired him to explore more, and\n      subsume these innovations in his brand BOUNIPUN KASHMIR.\n    </p></div> <div class=\"section-split reverse\" data-v-fd78827a><div class=\"one\" data-v-fd78827a><div class=\"one-image\""+(_vm._ssrStyle(null,_vm.setBg('5.jpg'), null))+" data-v-fd78827a></div> <div class=\"text\" data-v-fd78827a><p data-v-fd78827a>\n          We've explored cashmere in the ways no one has ever done before. Our\n          signature designs are unique and are not limited to one season, just\n          like Bounipun(Chinar leaf) , we are versatile and blend with every\n          season. Our hand crafted cashmere is weaved on 500year old looms and\n          are treated from the waters of glacier. The running down the\n          mountains through gushing streams, the water is utilised in the\n          manufacturing process.\n        </p></div></div> <div class=\"two\""+(_vm._ssrStyle(null,_vm.setBg('6.jpg'), null))+" data-v-fd78827a></div></div> <div class=\"full-width\""+(_vm._ssrStyle(null,_vm.setBg('7.jpg', true), null))+" data-v-fd78827a></div> <div class=\"c-text\" data-v-fd78827a><p class=\"just-text\" data-v-fd78827a>\n      In fashion, he’s celebrated as a reformer of fabric, texture and\n      simplicity of silhouette. He was awarded as the “best debut” and\n      “neo-minimal designer” by ELLE magazine just after the launch of his\n      men’s and women’s label. His profile has been published by an Italian\n      Publication (Damiani) based on CONTEMPORARY INDIAN FASHION. Winner of\n      the prestigious International Woolmark Prize 2016/17 India, Pakistan and\n      Middle East regional final for his innovative development in wool held\n      in Paris.\n    </p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/our-story.vue?vue&type=template&id=fd78827a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/our-story.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var our_storyvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "Our Story | Bounipun Kashmir"
    };
  },

  computed: {
    isIos() {
      let is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
      let is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
      return is_ios && is_safari;
    },

    iosDetected() {
      return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
      navigator.userAgent.includes("Mac") && "ontouchend" in document;
    }

  },
  methods: {
    setBg(image, fixedAttachment) {
      let bg = image; // if (fixedAttachment)
      // bg = this.windowWidth > 768 ? image : `mobile/${image}`;

      let styles = {
        backgroundImage: `url(/new-story-images/${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundOrigin: "content-box" // backgroundPosition: "center"

      };
      /* if device is NOT ios and fixed attachement is required */
      // if (!this.isIos && fixedAttachment) {
      //   styles = { ...styles, backgroundAttachment: "fixed" };
      // }

      if (!this.iosDetected && fixedAttachment) {
        styles = { ...styles,
          backgroundAttachment: "fixed"
        };
      }

      return styles;
    },

    moveDown() {
      const offsetTop = this.$refs.start.offsetTop;
      const headerHeightDelta = 0.13;
      window.scroll({
        top: offsetTop - document.documentElement.clientHeight * headerHeightDelta,
        left: 0,
        behavior: "smooth"
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/our-story.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_our_storyvue_type_script_lang_js_ = (our_storyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/our-story.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(505)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_our_storyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fd78827a",
  "5fe682fa"
  
)

/* harmony default export */ var our_story = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=our-story.js.map
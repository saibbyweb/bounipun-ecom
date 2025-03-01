exports.ids = [37];
exports.modules = {

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(390);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9dfa53f8", content, true, context)
};

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(317);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstagramFeed_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 390:
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
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"SF-Pro\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"SF-Pro Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins SemiBold\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\")}@font-face{font-family:\"Poppins Bold\";font-style:normal;font-weight:900;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\")}@font-face{font-family:\"Garamond-Bold\";font-style:normal;font-weight:800;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\")}@font-face{font-family:\"Charmonman\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\")}@font-face{font-family:\"DancingScript-Regular\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"truetype\")}.w-bold b{font-family:\"SF-Pro Bold\";font-size:14px;text-transform:uppercase}html{scroll-behavior:smooth}body{margin:0!important;padding:0}*{font-family:\"Poppins\";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10{padding:6%}button{cursor:pointer;border:none;padding:1% 3%}button .icon{width:7%}button.sub-action{background-color:green}button.action{position:relative;background-color:#333;color:#fff;font-family:\"Poppins SemiBold\";font-size:16px;text-transform:uppercase;transition:all .2s ease-in-out}button.action:hover{background-color:#0e0e0e}@media(max-width:768px){button.action{padding:2% 5%;width:100%}}button.action.delete{background-color:#9d2424;font-size:10px}button.action.delete:hover{background-color:#e01010}button.small{font-size:11px;padding:1% 3%}button.clear{background:transparent;padding:2% 5%}h1,h2,h3,h4,h5,h6,p,span{margin:0;padding:0;color:#333}.page{min-height:80vh;padding:5%;margin-top:20vh}@media(max-width:768px){.page{margin-top:13vh;padding:7%}}.page.-wh{padding:0 0 5%}.page.side-pad{padding:2%}@media(max-width:768px){.page.-broad{padding:2%}}.page .page-header{width:100%;height:8vh;margin-bottom:20px;background-color:#efefef}@media(max-width:768px){.page .page-header{height:10vw}}.page .page-header .title{color:#333;font-family:\"Poppins SemiBold\";text-transform:uppercase;font-size:1.3vw}@media(max-width:768px){.page .page-header .title{font-size:5.4vw}}.page .side-pad{padding:0 5%}@media(max-width:768px){.page .side-pad{padding:0 10%}}.pointer{cursor:pointer}.center,.center-col{display:flex;justify-content:center;align-items:center}.center-col{flex-direction:column}.center-space{display:flex;justify-content:space-around;align-items:center}.contents{position:relative}.white{color:#fff}.scrollable-list{display:flex;overflow-x:auto;padding:5px}@media screen and (min-width:768px){.scrollable-list{justify-content:center}}.scrollable-list::-webkit-scrollbar{display:none}.scrollable-list .list{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete{margin-top:10px;width:50px}::-webkit-scrollbar{display:none}p.msg{color:#fff;font-size:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;border-radius:4px;margin:10px 0}p.msg.error{background-color:#a93737}p.msg.success{background-color:#319a67}.flex{display:flex}.flex.around{justify-content:space-around}.flex.between{justify-content:space-between}.flex.evenly{justify-content:space-evenly}.flex.col{flex-direction:column}.flex.wrap{flex-wrap:wrap}.flex.center{justify-content:center}.flex.center,.flex.v-center{align-items:center}.flex.j-center{justify-content:center}.flex.start{justify-content:flex-start;align-items:flex-start}.flex.start.center{align-items:center}.flex.baseline{align-items:baseline}.flex.end{justify-content:flex-end}.flex.end.center{align-items:center}a{text-decoration:none}@media(max-width:768px){.onlyDesktop{display:none}}.onlyMobile{display:none}@media(max-width:768px){.onlyMobile{display:inline;display:initial}}.instagram-feed{padding:2% 0}.instagram-feed .insta-heading{font-family:\"Garamond-Bold\";margin-bottom:10px;font-size:36px;text-transform:uppercase}.instagram-feed .heading{padding:1%}.instagram-feed .heading .instagram{width:230px}.instagram-feed .heading h3{font-size:52px;font-weight:600;color:#464646;width:100%;text-align:center;border-bottom:2px solid #fff}@media(max-width:768px){.instagram-feed .heading h3{font-size:30px}.instagram-feed .heading .instagram{width:150px}}.instagram-feed .posts-grid{margin-top:2%}.instagram-feed .posts-grid a{margin:1%}.instagram-feed .posts-grid .post{width:28vw;height:28vw;background-size:cover}@media(max-width:768px){.instagram-feed .posts-grid{margin-top:5%}.instagram-feed .posts-grid .post{margin-top:5px;width:29vw;height:29vw}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramFeed.vue?vue&type=template&id=50acc5e6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"instagram-feed"},[_vm._ssrNode("<div class=\"heading flex center\"><h1 class=\"insta-heading\">"+_vm._ssrEscape(_vm._s(_vm.heading))+"</h1></div> <div class=\"posts-grid flex wrap center\">"+(_vm._ssrList((_vm.posts),function(post){return ("<a target=\"_blank\""+(_vm._ssrAttr("href",post.permalink))+"><div class=\"post shadow\""+(_vm._ssrStyle(null,("background-image: url(" + (post.imageLink) + ")"), null))+"></div></a>")}))+"</div> "+((_vm.posts.length === 0)?("<div class=\"flex center\"><img width=\"100\" src=\"/loading.gif\"></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InstagramFeed.vue?vue&type=template&id=50acc5e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramFeed.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InstagramFeedvue_type_script_lang_js_ = ({
  props: {
    heading: {
      type: String,
      default: "Green Book"
    }
  },

  data() {
    return {
      posts: []
    };
  },

  mounted() {
    setTimeout(() => this.fetchPosts(), 2000); // this.fetchPosts();
  },

  methods: {
    async fetchPosts() {
      const INSTAGRAM_POSTS = "https://us-central1-nifty-memory-204406.cloudfunctions.net/server/instafeed/actions?username=bounipun&action=getPosts&limit=7";
      const postsResponse = await this.$axios.get(INSTAGRAM_POSTS, {
        withCredentials: false
      });

      if (postsResponse.data.payload) {
        // data.posts = [];
        let posts = [];
        postsResponse.data.payload.forEach((post, index) => {
          if (index > 5) return;

          if (post.media_type === "VIDEO") {
            posts.push({
              imageLink: post.thumbnail_url,
              permalink: post.permalink
            });
            return;
          }

          posts.push({
            imageLink: post.media_url,
            permalink: post.permalink
          });
        });
        this.posts = posts;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/InstagramFeed.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InstagramFeedvue_type_script_lang_js_ = (InstagramFeedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/InstagramFeed.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(389)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InstagramFeedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "49a82616"
  
)

/* harmony default export */ var InstagramFeed = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=instagram-feed.js.map
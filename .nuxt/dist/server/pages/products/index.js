exports.ids = [159];
exports.modules = {

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/index.vue?vue&type=template&id=ed9c5b04&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._ssrNode("Redirecting....")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/products/index.vue?vue&type=template&id=ed9c5b04&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/index.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var productsvue_type_script_lang_js_ = ({
  mounted() {
    const productId = this.$route.query._id;
    this.tryRedirect(productId);
  },

  methods: {
    async tryRedirect(productId) {
      const response = await this.$axios.$post("/productIdToSlug", {
        productId
      });

      if (response.resolved === false) {
        return;
      }

      this.$router.push({
        path: `/${response.product.slug}?forceUnlock=true`
      });
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/products/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_productsvue_type_script_lang_js_ = (productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/products/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "17c72111"
  
)

/* harmony default export */ var products = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
exports.ids = [65];
exports.modules = {

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    assignImages(ref, image) {
      if (image === "" || image === undefined) return;
      setTimeout(() => {
        this.$refs.updateComponent.$refs[ref].assignImages([{
          _id: "",
          mainImage: false,
          path: image
        }]);
      }, 1200);
    }

  }
});

/***/ })

};;
//# sourceMappingURL=update-c-r-u-d.js.map
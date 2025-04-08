exports.ids = [82];
exports.modules = {

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      types: [{
        name: "Select Type",
        value: null
      }, {
        name: "Under Bounipun",
        value: "under-bounipun"
      }, {
        name: "Third Party",
        value: "third-party"
      }],
      availabilityTypes: [{
        name: "Select Availablity Type",
        value: ""
      }, {
        name: "Made To Order",
        value: "made-to-order"
      }, {
        name: "Ready To Ship",
        value: "ready-to-ship"
      }],
      colorSourceTypes: [{
        name: "Select Source",
        value: ""
      }, {
        name: "Bounipun Colors",
        value: "bounipun-colors"
      }, {
        name: "Custom",
        value: "custom"
      }],
      genders: [{
        name: "Select Preferred Gender",
        value: ""
      }, {
        name: "For Her",
        value: "for-her"
      }, {
        name: "For Him",
        value: "for-him"
      }, {
        name: "For Him & Her",
        value: "for-him-and-her"
      }, {
        name: "N/A",
        value: "na"
      }]
    };
  },

  computed: {
    collectionInflationPercentage() {
      let inflationPercentage = 0;

      if (this.doc.type === "under-bounipun") {
        const foundIndex = this.collections.findIndex(col => col.value === this.doc.bounipun_collection);
        if (foundIndex === -1) return 0;
        const collection = this.collections[foundIndex];
        inflationPercentage = collection.inflationPercentage;
      }

      return inflationPercentage;
    },

    selectedCollection() {
      if (this.doc.type === "under-bounipun") {
        const foundIndex = this.collections.findIndex(col => col.value === this.doc.bounipun_collection);
        if (foundIndex === -1) return false;
        const collection = this.collections[foundIndex];
        return collection;
      }

      return false;
    },

    bounipunColors() {
      return this.doc.colorSource === "bounipun-colors";
    },

    thirdPartyProduct() {
      return this.doc.type === "third-party";
    },

    readyToShip() {
      return this.doc.availabilityType === "ready-to-ship";
    },

    rtsAndUnderBounipun() {
      return this.readyToShip && !this.thirdPartyProduct;
    },

    underAutograph() {
      /* TODO: should first fetch the _id of the autograph doc in collections and then compare */
      return this.doc.bounipun_collection === "60523a3648d11650a841b82a" && this.doc.type !== "third-party";
    },

    underEscape() {
      return this.doc.bounipun_collection === "60522ab3be493200150ff835" && this.doc.type !== "third-party";
    }

  },
  methods: {
    setMainColor(index) {
      /* if value set to true, turn all other main image flags off */
      for (let i = 0; i < this.doc.colors.length; i++) {
        this.doc.colors[i].mainColor = false;
      }

      setTimeout(() => {
        this.doc.colors[index].mainColor = true;
        this.doc.colors[index].status = true;
        this.$forceUpdate();
      }, 100);
    },

    isActiveColor(index) {
      return this.doc.colors[index].mainColor;
    },

    async fetchBaseColors() {
      const result = await this.$fetchCollection("base_colors");

      if (!result.fetched || result.docs.length === 0) {
        return;
      }
      /* base colors array */


      this.baseColors = result.docs.map(color => {
        return {
          name: color.name.toUpperCase(),
          value: color.name
        };
      });
      this.baseColors.unshift({
        name: "Select Color",
        value: ""
      });
    },

    /* image list updated */
    imageListUpdated(list, index) {
      // console.log(list, index);
      this.doc.colors[index].images = list;
    },

    async fetchActiveCurrencies() {
      const request = await this.$post("/findDocuments", {
        model: "currency",
        filters: {
          adminEnabled: true,
          status: true
        }
      });

      if (request.resolved == false) {
        return;
      }

      const currencies = request.response;
      this.currencies = currencies;
      this.currencies.forEach(({
        code
      }) => {
        const dbPrice = this.doc.directPricing[code];
        this.doc.directPricing[code] = dbPrice === undefined ? dbPrice : "";
      });
    },

    // check price validitity
    checkValidPrice(price) {
      if (typeof price === "number") {
        return true;
      }

      if (price === undefined || price === null) return false;
      return price.trim() !== "";
    },

    /* check all prices INR as well as non INR */
    checkAllPrices(INRPrice, NonINRPrices) {
      const INRPriceValid = this.checkValidPrice(INRPrice);

      if (INRPriceValid === false) {
        return false;
      }
      /* check non INR Pricing */


      const currencyCodes = Object.keys(NonINRPrices);
      const nonINRSet = currencyCodes.every(code => this.checkValidPrice(NonINRPrices[code]));
      return nonINRSet;
    },

    /* add new color */
    addNewColor(color) {
      // console.log(color);
      this.doc.colors.push({
        _id: color._id,
        name: color.name,
        code: color.code,
        images: [],
        disclaimer: "",
        mainColor: false,
        status: false,
        key: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
      });
    },

    colorDeselected(color) {
      /* find key of the deselected color */
      const foundIndex = this.doc.colors.findIndex(col => col._id === color._id);
      console.log(color, foundIndex, "DESELECTED");
      /* remove color */

      this.removeColor(foundIndex);
    },

    /* remove color */
    removeColor(key, direct = false) {
      // if (this.doc.colors.length === 1)
      //     return;
      const tobeRemoved = this.doc.colors[key];
      this.doc.colors.splice(key, 1);
      if (this.bounipunColors && direct) this.$refs.colorPicker.deselectColor(tobeRemoved);
    },

    async deleteDocument() {
      this.loading = true;
      const result = await this.$deleteDocument(this.model, this.doc._id);
      this.loading = false;

      if (!result.deleted) {
        this.errorToast.status = true;
        this.errorToast.msg = result.msg !== undefined ? result.msg : "Something went wrong";
        setTimeout(() => this.errorToast.status = false, 2200);
        return;
      }

      this.$emit("updated");
      this.resetForm();
      this.$flash(this);
    },

    closeForm() {
      this.resetForm();
      this.$emit("resetVariants");
      this.$emit("close");
    }

  }
});

/***/ })

};;
//# sourceMappingURL=update-product-helper.js.map
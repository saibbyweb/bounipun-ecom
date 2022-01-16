<template>
  <div class="global-config flex start wrap">
    <div class="main-config flex col center">
      <h3>Main Config</h3>
      <br />
      <!-- domestic shipping charge -->
      <InputBox
        type="number"
        label="Domestic Shipping Charge per Item (INR)"
        v-model="doc.domesticShippingCharge"
      />
      <!-- international shipping charge -->
      <InputBox
        type="number"
        label="International Shipping Charge per Item (USD)"
        v-model="doc.internationalShippingCharge"
      />

      <!-- shipping disclaimer (domestic) -->
      <TextBox
        label="Shipping Disclaimer (Domestic)"
        v-model="doc.shippingDisclaimerDomestic"
      />

      <!-- shipping disclaimer (international) -->
      <TextBox
        label="Shipping Disclaimer (International)"
        v-model="doc.shippingDisclaimerInternational"
      />
      <br />
      <div class="flex center" style="width:100%">
      <!-- action complete gif -->
      <img v-if="updated.mainConfig" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument('mainConfig')" class="action">Update Main Config</button>

      </div>
    </div>

    <div class="currency-prices flex col center">
      <h3>Currency Exchange Rates</h3>
      <br />
      <div
        class="currency-update flex center"
        v-for="currency in currencies"
        :key="currency.code"
      >
        <!-- currency exchange  -->
        <InputBox
          type="number"
          :label="`${currency.code}`"
          v-model="currency.exchangeRateINR"
        />

        <!-- default inflation percentage -->
        <div class="inflation-slider flex center col" style="width: 50%">
          <span v-if="!showInflationSlider" style="font-size: 12px">
            For future use
          </span>
          <button
            v-if="!showInflationSlider"
            @click="showInflationSlider = true"
            class="action small"
          >
            Show Inflation Slider
          </button>

          <InputSlider
            v-show="showInflationSlider"
            v-model="currency.defaultInflationPercentage"
            :label="`Inflation % (${currency.code})`"
          />
        </div>
      </div>
      <br />

      
      <button class="action" @click="updateExchangeRates">
        Update Exchange Rates
      </button>
      <!-- action complete gif -->
      <img
        v-if="exchangeRateUpdated"
        class="action-complete"
        src="/complete.gif"
      />
    </div>

    <div class="flex col center" style="width: 40%">
      <h3>Features Toggle</h3>
      <br />

      <div class="feature" v-for="feature in doc.features" :key="feature._id">
        <Toggle
          v-model="feature.status"
          :label="feature.name"
          labelCSS="width:120px; font-size:12px"
          width="150px"
        />
      </div>
      <br />

      <div class="flex center" style="width:100%">
      <!-- action complete gif -->
      <img v-if="updated.features" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument('features')" class="action">
        Update Features
      </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  mounted() {
    this.fetchConfig();
    this.fetchActiveCurrencies();
  },
  data() {
    return {
      model: "globalConfig",
      previousRates: {},
      doc: {
        _id: "",
        currencyMultiplier: "",
        dollarValue: "",
        domesticShippingCharge: "",
        internationalShippingCharge: "",
        shippingDisclaimerDomestic: "",
        shippingDisclaimerInternational: "",
        gstPercentage: "",
        internationalTaxPercentage: "",
        features: [],
      },
      currencies: [],
      loading: true,
      updated: {
        mainConfig: false,
        currenices: false,
        features: false
      },
      exchangeRateUpdated: false,
      showInflationSlider: false,
    };
  },
  methods: {
    flash(prop) {
      this.updated[prop] = true;
      setTimeout(() => this.updated[prop] = false,1700);
    },
    async updateExchangeRates() {
      for (const currency of this.currencies) {
        await this.$updateDocument("currency", currency, true);
      }
      this.exchangeRateUpdated = true;
      setTimeout(() => (this.exchangeRateUpdated = false), 2000);

      const ratesIntact = this.currencies.every((currency, i) => {
        return (
          this.currencies[i].exchangeRateINR ==
          this.previousRates[i].exchangeRateINR
        );
      });

      this.previousRates = JSON.parse(JSON.stringify(this.currencies));

      if (ratesIntact === false) {
        console.log("UPDATE WHOLE STORE");
        await this.updateWholeStore();
      }
    },
    async updateWholeStore() {
      await this.$post("/updateWholeStore");
    },
    async fetchActiveCurrencies() {
      const request = await this.$post("/findDocuments", {
        model: "currency",
        filters: {
          adminEnabled: true,
          status: true,
        },
      });

      if (request.resolved == false) {
        return;
      }

      const currencies = request.response;
      this.previousRates = JSON.parse(JSON.stringify(currencies));
      this.currencies = currencies;
    },

    async fetchConfig() {
      const data = await this.$fetchData(this.model, {
        bounipun_id: "saibbyweb",
      });

      if (data.fetched !== true) return;

      const { doc } = data;

      this.doc = doc;

      // this.doc = {
      //   _id: doc._id,
      //   currencyMultiplier: doc.currencyMultiplier,
      //   dollarValue: doc.dollarValue,
      //   domesticShippingCharge: doc.domesticShippingCharge,
      //   internationalShippingCharge: doc.internationalShippingCharge,
      //   shippingDisclaimerDomestic: doc.shippingDisclaimerDomestic,
      //   shippingDisclaimerInternational: doc.shippingDisclaimerInternational,
      //   gstPercentage: doc.gstPercentage,
      //   internationalTaxPercentage: doc.internationalTaxPercentage,
      // };
    },
    async updateDocument(prop) {
      const result = await this.$updateDocument(this.model, this.doc, true);

      if (!result.updated) return;

      this.flash(prop);
    },
  },
};
</script>

<style lang="scss" scoped="true">
.global-config {
  width: 100%;

  > div {
    border: 1px solid #efefef;
    padding: 20px 40px;
  }

  .main-config {
    width: 40%;
  }

  .currency-prices {
    width: 60%;

    > div {
      width: 100%;
    }
    // padding:10px;
  }
}
</style>

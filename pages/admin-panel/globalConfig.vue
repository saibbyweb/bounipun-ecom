<template>
  <div class="global-config flex start">
    <div class="main-config flex col center">
      <h3>Main Config</h3>
      <br />
      <!-- currency multiplier -->
      <!-- <InputBox
        type="number"
        label="Currency Multiplier (e.g 1.2 means 20% increment)"
        v-model="doc.currencyMultiplier"
      /> -->
      <!-- dollar value -->
      <!-- <InputBox
        type="number"
        label="Normalized Dollar Value (in INR)"
        v-model="doc.dollarValue"
      /> -->
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

      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action">Update Main Config</button>
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
        <div class="inflation-slider flex center col" style="width:50%;">
        <span v-if="!showInflationSlider" style="font-size:12px;"> For future use </span>
        <button v-if="!showInflationSlider" @click="showInflationSlider = true" class="action small"> Show Inflation Slider </button>

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
      <img v-if="exchangeRateUpdated" class="action-complete" src="/complete.gif" />
    </div>

    <!-- gst percentage -->

    <!-- <InputBox
      type="number"
      label="GST Percentage (N/A)"
      v-model="doc.gstPercentage"
      :disabled="true"
    /> -->

    <!-- international tax percentage -->
    <!-- <InputBox
      type="number"
      label="International Tax Percentage (N/A)"
      v-model="doc.internationalTaxPercentage"
      :disabled="true"
    /> -->
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
      },
      currencies: [],
      loading: true,
      updated: false,
      exchangeRateUpdated: false,
      showInflationSlider: false
    }
  },
  methods: {
    async updateExchangeRates() {
      for (const currency of this.currencies) {
        await this.$updateDocument("currency", currency, true);
      }
      this.exchangeRateUpdated = true;
      setTimeout(() => this.exchangeRateUpdated = false, 2000);
      

      const ratesIntact = this.currencies.every((currency, i) => {
         console.log(this.currencies[i].exchangeRateINR, this.previousRates[i].exchangeRateINR)
          return this.currencies[i].exchangeRateINR == this.previousRates[i].exchangeRateINR
      });

      this.previousRates = JSON.parse(JSON.stringify(this.currencies));
      console.log(ratesIntact,'-- rates intact');

      if(ratesIntact === false) {
        console.log('UPDATE WHOLE STORE');
        await this.updateWholeStore();
      }
    },
    async updateWholeStore() {
        await this.$post('/updateWholeStore')
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

      this.doc = {
        _id: doc._id,
        currencyMultiplier: doc.currencyMultiplier,
        dollarValue: doc.dollarValue,
        domesticShippingCharge: doc.domesticShippingCharge,
        internationalShippingCharge: doc.internationalShippingCharge,
        shippingDisclaimerDomestic: doc.shippingDisclaimerDomestic,
        shippingDisclaimerInternational: doc.shippingDisclaimerInternational,
        gstPercentage: doc.gstPercentage,
        internationalTaxPercentage: doc.internationalTaxPercentage,
      };
    },
    async updateDocument() {
      const result = await this.$updateDocument(this.model, this.doc, true);

      if (!result.updated) return;

      this.$flash(this);
    },
  },
};
</script>

<style lang="scss" scoped>
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

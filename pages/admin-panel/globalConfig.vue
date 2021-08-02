<template>
  <div class="global-config">
    <!-- currency multiplier -->
    <InputBox
      type="number"
      label="Currency Multiplier (e.g 1.2 means 20% increment)"
      v-model="doc.currencyMultiplier"
    />
    <!-- dollar value -->
    <InputBox
      type="number"
      label="Normalized Dollar Value (in INR)"
      v-model="doc.dollarValue"
    />
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

    <!-- actions -->
    <div class="actions">
      <!-- action complete gif -->
      <img v-if="updated" class="action-complete" src="/complete.gif" />
      <!-- update document -->
      <button @click="updateDocument" class="action">
        Update Global Config
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  mounted() {
    this.fetchConfig();
  },
  data() {
    return {
      model: "globalConfig",
      doc: {
        _id: "",
        currencyMultiplier: "",
        dollarValue: "",
        domesticShippingCharge: "",
        internationalShippingCharge: "",
        shippingDisclaimerDomestic: "",
        shippingDisclaimerInternational: "",
        gstPercentage: "",
        internationalTaxPercentage: ""
      },
      loading: true,
      updated: false
    };
  },
  methods: {
    async fetchConfig() {
      const data = await this.$fetchData(this.model, {
        bounipun_id: "saibbyweb"
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
        internationalTaxPercentage: doc.internationalTaxPercentage
      };
    },
    async updateDocument() {
      const result = await this.$updateDocument(this.model, this.doc, true);

      if (!result.updated) return;

      this.$flash(this);
    }
  }
};
</script>

<style lang="scss" scoped>
.global-config {
  width: 60%;
  padding: 20px 40px;
}
</style>

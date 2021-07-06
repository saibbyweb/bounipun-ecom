<template>
  <div class="global-config">
    <!-- currency multiplier -->
    <InputBox
      type="number"
      label="Currency Multiplier"
      v-model="doc.currencyMultiplier"
    />
    <!-- domestic shipping charge -->
    <InputBox
      type="number"
      label="Domestic Shipping Charge"
      v-model="doc.domesticShippingCharge"
    />
    <!-- international shipping charge -->
    <InputBox
      type="number"
      label="International Shipping Charge"
      v-model="doc.internationalShippingCharge"
    />
    <!-- gst percentage -->

    <InputBox
      type="number"
      label="GST Percentage"
      v-model="doc.gstPercentage"
    />
    <!-- international tax percentage -->
    <InputBox
      type="number"
      label="International Tax Percentage"
      v-model="doc.internationalTaxPercentage"
    />
    
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
        domesticShippingCharge: "",
        internationalShippingCharge: "",
        gstPercentage: "",
        internationalTaxPercentage: ""
      },
      loading: true,
      updated: false
    }
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
        domesticShippingCharge: doc.domesticShippingCharge,
        internationalShippingCharge: doc.internationalShippingCharge,
        gstPercentage: doc.gstPercentage,
        internationalTaxPercentage: doc.internationalTaxPercentage
      }
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

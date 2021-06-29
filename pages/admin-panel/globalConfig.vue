<template>
  <div class="global-config">
    <!-- domestic shipping charge -->
    <InputBox
      label="Domestic Shipping Charge"
      v-model="doc.domesticShippingCharge"
    />
    <!-- international shipping charge -->
    <InputBox
      label="International Shipping Charge"
      v-model="doc.internationalShippingCharge"
    />
    <!-- gst percentage -->
    <InputBox label="GST Percentage" v-model="doc.gstPercentage" />
    <!-- international tax percentage -->
    <InputBox
      label="International Tax Percentage"
      v-model="doc.internationalTaxPercentage"
    />

    <!-- update document -->
    <button @click="updateDocument" class="action" :disabled="loading">
      {{ editMode ? "Edit" : "Add" }} Coupon
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doc: {
        domesticShippingCharge: "",
        internationalShippingCharge: "",
        gstPercentage: "",
        internationalTaxPercentage: ""
      }
    }
  }
};
</script>

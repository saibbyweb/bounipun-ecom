<template>
  <div class="delivery-address-form">
    <!-- delivery input fields -->
    <DeliveryInput
      v-for="(field, key, index) in formData"
      :key="index"
      :type="field.type"
      v-model="field.value"
      :error="field.error"
      :label="field.label"
      @input="field.error.status = false"
      :isMobileNumber="key === 'mobileNumber'"
      :maxLength="key === 'addressLine1' || key === 'addressLine2' ? 60 : 100"
      :countryCode="countryDialCode"
      :disabled="otpSent"
    />
    <!-- verify phone number -->
    <button class="action">
          Continue
    </button>
  </div>
</template>

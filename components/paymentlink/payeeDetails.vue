<template>
  <div class="payee flex col shadow">
    <label class="label"> Customer Name:</label>
    <span> {{ linkDetails.payeeName }} </span>
    <label class="label"> Phone Number:</label>
    <span> {{ linkDetails.countryCode }} {{ linkDetails.phoneNumber }} </span>
    <label class="label"> Email:</label>
    <span> {{ linkDetails.email }} </span>
    <label class="label"> Amount Payable:</label>
    <span>
      {{ formatCurrency(linkDetails.amount, linkDetails.currency) }}
    </span>
    <label class="label"> Due Date:</label>
    <span>
      {{
        linkDetails.validityRange
          ? $formatDate(linkDetails.validityRange.end, true)
          : ""
      }}
    </span>
    <br />
  </div>
</template>

<script>
export default {
    props: {
        linkDetails: Object,
        formatCurrency: Function
    }
}
</script>

<style lang="scss" scoped>
  .payee {
    padding: 10px 20px;
    row-gap: 3px;
      width:100%;
    label {
      font-size: 14px;
      color: $gray;
    }
    span {
      font-family: $font_1_semibold;
      font-weight: 100;
      font-size: 15px;
    }
  }
</style>

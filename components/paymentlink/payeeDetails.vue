<template>
  <div class="payee flex col shadow">
    <label class="label"> Customer Name:</label>
    <span> {{ linkDetails.payeeName }} </span>
    <label class="label"> Phone Number:</label>
    <span> {{ linkDetails.countryCode }} {{ linkDetails.phoneNumber }} </span>
    <label class="label"> Email:</label>
    <span> {{ linkDetails.email }} </span>
    <label class="label"> Due Date:</label>
    <span>
      {{
        linkDetails.validityRange
          ? $formatDate(linkDetails.validityRange.end, true)
          : ""
      }}
    </span>
    <!-- <br /> -->
    <!-- amount details -->
    <div class="amount-details">
      <!-- item total -->
      <p>
        <span class="label">Sub Total</span>
        <span class="value">
          {{ formatCurrency(linkDetails.itemTotal, linkDetails.currency) }}
        </span>
      </p>
      <!-- discount -->
      <p>
        <span class="label"> Discount </span>
        <span class="value">
          -
          {{
            linkDetails.discount
              ? formatCurrency(
                  linkDetails.discount.amount,
                  linkDetails.currency
                )
              : ""
          }}</span
        >
      </p>
      <!-- courier charges -->
      <p>
        <span class="label"> Shipping Charges: </span>
        <span class="value">
          +
          {{
            formatCurrency(linkDetails.courierCharges, linkDetails.currency)
          }}</span
        >
      </p>

      <!-- amount payable -->
      <p>
        <span class="label"> Amount Payable </span>
        <span class="value amount-payable">
          {{ formatCurrency(linkDetails.amount, linkDetails.currency) }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linkDetails: Object,
    formatCurrency: Function,
  },
};
</script>

<style lang="scss" scoped>
.payee {
  padding: 10px 20px;
  row-gap: 3px;
  width: 100%;
  label {
    font-size: 14px;
    color: $gray;
  }
  span {
    font-family: $font_1_semibold;
    font-weight: 100;
    font-size: 15px;
  }
  .amount-details {
    width: 100%;
    margin-top: 10px;
    p {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #efefef;
      padding-top: 10px;

      span {
        font-size: 15px;
        &.label {
          font-family: $font_2;
        }
        &.value {
          font-family: $font_1;

          &.amount-payable {
            font-family: $font_1_bold;
            font-size: 17px;
          }
        }
      }
    }
  }
}
</style>

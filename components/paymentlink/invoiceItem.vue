<template>
  <div class="item shadow flex center">
    <!-- serial no -->
    <p class="serial-number flex center">{{ index + 1 }}.</p>
    <!-- details -1  -->
    <div class="details-1 flex col">
      <div class="flex col">
        <!-- name -->
        <span class="name"> {{ item.name }} &nbsp; </span>
        <!-- color name -->
        <span class="color-name"> {{ item.colorName }}</span>
        <!-- collection -->
        <span class="collection"> {{ item.collectionName }} </span>
        <!-- variant -->
        <span class="variant"> {{ item.variantName }} &nbsp; </span>
        <!-- fabric -->
        <span class="fabric"> {{ item.fabricName }} </span>
      </div>
    </div>
    <!-- detail - 2 -->
    <div class="details-2 flex around">
      <!-- quantity -->
      <span>
        {{ formatCurrency(item.rate, currency) }} x
        {{ item.quantity }}
      </span>
      <!-- total -->
      <span class="total">
        {{ formatCurrency(item.total, currency) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        item: Object,
        index: Number,
        currency: String,
        formatCurrency: Function
    }
}
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #efefef;
  padding: 7px 5px;

  column-gap: 30px;

  span {
    word-wrap: break-word;
    color: $gray;
    font-size: 13px;
    //   display: inline-block;
    &.name {
      color: $dark_gray;
      font-family: $font_1_bold;
      text-transform: uppercase;
    }
    &.collection {
      //   font-family: $font_2;
    }
    &.price {
      color: $dark_gray;
      font-family: $font_1;
    }
    &.variant {
      font-weight: 900;
      color: $dark_gray;
    }
    &.total {
      color: $dark_gray;
      font-family: $font_1_bold;
      font-size: 15px;
    }
  }

  .serial-number {
    text-align: center;
    width: 6%;
    height: 100%;
    padding: 10px;
    font-size: 18px;
    font-family: $font_1_bold;
    //   background-color: #333;
    color: #333;
  }

  .details-1 {
    width: 45%;
  }
  .details-2 {
    width: 37%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
    .serial-number {
      display: none;
    }
    .details-1,
    .details-2,
    .details-3 {
      width: 90%;
    }

    .details-2 {
      margin-top: 20px;
      justify-content: space-between;
      gap: 30px;
    }
  }
}
</style>

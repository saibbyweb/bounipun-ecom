<template>
  <div
    @click="$emit('addressSelected', address)"
    class="address-card details"
    :class="{ onDeliveryPage, active }"
  >
    <span class="name"> {{ address.firstName }} {{ address.surName }} </span>

    <span> {{ address.addressLine1 }} </span>
    <span> {{ address.addressLine2 }} </span>
    <span> {{ address.state }} </span>
    <span> {{ address.city }} </span>
    <span> {{ address.postalCode }} </span>
    <span> {{ address.email }} </span>
    <span> {{ address.countryDialCode }} - {{ address.mobileNumber }} </span>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      default: {
        firstName: "",
        surName: "",
        countryDialCode: "",
        mobileNumber: "",
        addressLine1: "",
        addressLine2: "",
        email: "",
        addressType: "",
        state: "",
        city: "",
        postalCode: ""
      }
    },
    onDeliveryPage: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.address-card {
  border-radius: 5px;
  width: 25%;
  height: 200px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
  margin: 1.5%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &.onDeliveryPage {
    width: 45%;
  }

  &:hover {
    background-color: rgba(114, 174, 142, 0.315);
    .add-new {
      .icon {
        color: white;
      }
      .label {
        color: white;
      }
    }
  }

  &.active {
    background-color: rgba(43, 159, 97, 0.634);
  }

  /* add new card */
  .add-new {
    height: 100%;
    width: 100%;

    .icon {
      font-size: 12vw;
      color: $gray;
      line-height: 10vw;
      transition: all 0.3s ease-in-out;
    }

    .label {
      font-size: 17px;
      font-family: $font_1_bold;
      color: $dark_gray;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    width: 47%;
    min-height: 50vw;
    .add-new {
      .label {
        font-size: 12px;
      }
    }
  }

  /* details */
  &.details {
    display: flex;
    flex-direction: column;
    padding: 4% 3%;

    span {
      font-size: 12px;

      &.name {
        font-family: $font_1_bold;
        font-size: 13px;
      }
    }
  }
}
</style>

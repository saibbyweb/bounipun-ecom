<template>
  <div class="address-book">
    <div class="page-header center-col">
      <h2 class="title">Address Book</h2>
    </div>

    <!-- indicator -->
    <div v-if="showAddressForm" class="center indicator">
      <div @click="hideAddressForm" class="back-icon center">
        <img src="/icons/light/back.png" />
      </div>

      <span class="activity">
        {{ updating ? "Updating" : "New" }} Address
      </span>
    </div>

    <!-- address card -->
    <div class="flex center">
    <div v-if="!showAddressForm" class="saved-addresses flex wrap">
      <div
        @click="selectAddress(address)"
        class="address-card details"
        v-for="(address, index) in addressList"
        :key="index"
      >
        <span class="name">
          {{ address.firstName }} {{ address.surName }}
        </span>
        <span>
          {{ address.countryDialCode }} - {{ address.mobileNumber }}
        </span>
        <span> {{ address.addressLine1 }} </span>
        <span> {{ address.addressLine2 }} </span>
        <span> {{ address.email }} </span>
        <span> {{ address.city }} </span>
        <span> {{ address.postalCode }} </span>
      </div>
    </div>
    </div>

    <!-- add new address card -->
    <div v-if="!showAddressForm" class="address-card center">
      <div @click="showAddressForm = true" class="add-new center-col">
        <span class="icon"> + </span>
        <span class="label"> Add New Address </span>
      </div>
    </div>

    <!-- update address -->
    <div v-if="showAddressForm" class="update-address">
      <UpdateAddress
        :updating="updating"
        :addressId="activeAddressId"
        :addressDetails="activeAddress"
        @goBack="hideAddressForm"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeAddressId: null,
      activeAddress: {},
      updating: false,
      showAddressForm: false
    };
  },
  computed: {
    addressList() {
      const customer = this.$store.state.customer;
      if (customer.user.addressBook === undefined) return [];
      return customer.user.addressBook;
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.$store.state.customer.authorized) this.$router.push("/login");
    }, 600);
  },
  methods: {
    selectAddress(address) {
      return;
      this.activeAddressId = address._id;
      this.activeAddress = address;
      this.updating = true;
      this.showAddressForm = true;
    },
    hideAddressForm() {
      this.updating = false;
      this.showAddressForm = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.address-book {
  margin-top: 13vh;
  padding: 2% 2%;
  min-height: 80vh;

  .indicator {
    width: 100%;
    background-color: $primary_dark;
    padding: 3%;
    margin-top: 10px;
    position: relative;

    .back-icon {
      position: absolute;
      top: 0;
      left: 2%;
      height: 100%;
      width: 10%;

      img {
        height: 40%;
      }
    }

    .activity {
      color: white;
      font-size: 13px;
    }
  }

  .saved-addresses {

    margin-top: 10px;
  }

  .update-address {
  }

  .address-card {
    border-radius: 5px;
    width: 30%;
    min-height: 200px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
    margin: 1.5%;


    /* add new card */
    .add-new {
      height: 100%;
      width: 100%;

      .icon {
        font-size: 12vw;
        color: $gray;
        line-height: 10vw;
      }

      .label {
        font-size: 20px;
        font-family: $font_1_bold;
        color: $dark_gray;
      }
    }


    @media (max-width: 768px) {
      width: 47%;
      min-height: 50vw;
      .add-new {
          .label {
              font-size:12px;
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
}
</style>

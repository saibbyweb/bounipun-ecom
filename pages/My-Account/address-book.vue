<template>
  <div class="address-book">
    <div class="page-header center-col">
      <h2 class="title">Address Book</h2>
    </div>

    <div v-if="!showAddressForm">
      <!-- saved addresses -->
      <div v-if="!addressListEmpty">
        <br />
        <br />
        <h3 class="sub-heading">Saved Address</h3>
        <!-- divider -->
        <hr class="divider" />

        <!-- address card -->
        <div class="flex center" style="width: 100%;">
          <div v-if="!showAddressForm" class="saved-addresses flex center wrap">
            <AddressCard  v-for="(address, index) in addressList"
              :key="index" :address="address" @addressSelected="selectAddress"/>
          </div>
        </div>
      </div>

      <!-- if address list is empty -->
      <div v-if="addressListEmpty" class="flex center">
        <br /><br />
        <br /><br />
        <span> No saved addresses found </span>
      </div>

      <br />
      <br />
      <h3 class="sub-heading">New Address</h3>
      <!-- divider -->
      <hr class="divider" />
      <br />
      <!-- add new address card -->
      <div v-if="!showAddressForm" class="address-card center">
        <div @click="addNewAddress" class="add-new center-col">
          <span class="icon"> + </span>
          <span class="label"> Add New Address </span>
        </div>
      </div>
    </div>

    <!-- update address -->
    <div v-if="showAddressForm" class="update-address-wrapper flex center">
      <UpdateAddress
        :updating="updating"
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
      // return []
      const customer = this.$store.state.customer;
      if (customer.user.addressBook === undefined) return [];
      return customer.user.addressBook;
    },
    addressListEmpty() {
      return this.addressList.length == 0;
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.$store.state.customer.authorized) this.$router.push("/login");
    }, 600);
  },
  methods: {
    selectAddress(address) {
      //   this.activeAddressId = address._id;
      window.scroll({ top: 0, behavior: "smooth" });
      this.activeAddress = address;
      this.updating = true;
      this.showAddressForm = true;
    },
    hideAddressForm() {
      this.updating = false;
      this.showAddressForm = false;
    },
    addNewAddress() {
        window.scroll({ top: 0, behavior: "smooth" });
        this.showAddressForm = true;
        this.activeAddress = {};
        this.activeAddress.countryDialCode = this.$store.state.customer.user.countryDialCode;
        this.activeAddress.countryIsoCode = this.$store.state.customer.user.countryIsoCode;
    }
  }
}
</script>

<style lang="scss" scoped>
.address-book {
  margin-top: 13vh;
  padding: 2% 2%;
  width: 100%;
  min-height: 80vh;

  .update-address-wrapper {
    //   position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    //   height:100vh;
    // background-color: rgba(0, 0, 0, 0.593);
    z-index: 6;
  }

  .sub-heading {
    font-family: $font_2_bold;
    margin-left: 3%;
  }

  .divider {
    border-bottom: 1px solid #efefef;
    width: 95%;
  }

  .saved-addresses {
    margin-top: 10px;
    width: 100%;
  }

  .address-card {
    border-radius: 5px;
    width: 25%;
    height: 200px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
    margin: 1.5%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgba(82, 156, 117, 0.634);
        .add-new {
            .icon {
                color:white;
            }
            .label {
                color:white;
            }
        }
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
}
</style>

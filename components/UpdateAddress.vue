<template>
<div class="address-details center-col">
    <DeliveryInput label="Name" v-model="deliveryAddress.name" />
    <DeliveryInput label="Phone Number" v-model="deliveryAddress.phoneNumber" />
    <DeliveryInput label="AddressLine1" v-model="deliveryAddress.addressLine1" />
    <DeliveryInput label="AddressLine2" v-model="deliveryAddress.addressLine2" />
    <DeliveryInput label="Email" v-model="deliveryAddress.email" />
    <DeliveryInput label="City" v-model="deliveryAddress.city" />
    <DeliveryInput label="Pincode" v-model="deliveryAddress.pincode" />
    <br>
    <div class="actions center">
    <button class="action" @click="updateAddress"> {{ updating ? 'Update' : 'Add' }} Address </button>
    </div>

    <!-- <div class="response"> -->
    <Toast :show="updated" msg="Address Updated" />
    <!-- </div> -->
</div>
</template>

<script>
export default {
    props: {
        updating: {
            type: Boolean,
            default: false
        },
        addressId: {
            type: String
        },
        addressDetails: {
            type: Object
        }
    },
    data() {
        return {
            deliveryAddress: {
                name: "",
                phoneNumber: "",
                addressLine1: "",
                addressLine2: "",
                email: "",
                city: "",
                pincode: ""
            },
            updated: false
        }
    },
    mounted() {
        if (this.updating)
            this.fetchAddressDetails();
    },
    watch: {
        addressId: function (newVal, oldVal) {
            if (newVal === null)
                this.resetForm();
            else
                this.fetchAddressDetails();
        }
    },
    methods: {
        fetchAddressDetails() {
            this.deliveryAddress = this.addressDetails;
        },
        updateAddress() {
            this.updated = true;
            setTimeout(() => this.updated = false, 3000);
        }
    }
}
</script>

<style lang="scss" scoped>
//
.header {
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-around;
}
.actions {
    width:100%;

    .action {
        width: 80%;
    }
}

.address-details {
        box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
}
.response {
    position:relative;
    height:20vw;
    width:100%;
}
</style>

<template>
<div class="address-details center-col">

    <div class="header">
        <span @click="$emit('goBack')"> Go Back </span>
        <span> {{ updating ? 'Update' : 'Add' }} Address </span>
    </div>

    <DeliveryInput label="Name" v-model="deliveryAddress.name" />
    <DeliveryInput label="Phone Number" v-model="deliveryAddress.phoneNumber" />
    <DeliveryInput label="AddressLine1" v-model="deliveryAddress.addressLine1" />
    <DeliveryInput label="AddressLine2" v-model="deliveryAddress.addressLine2" />
    <DeliveryInput label="Email" v-model="deliveryAddress.email" />
    <DeliveryInput label="City" v-model="deliveryAddress.city" />
    <DeliveryInput label="Pincode" v-model="deliveryAddress.pincode" />
    <button class="action"> {{ updating ? 'Update' : 'Add' }} Address </button>
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
            }
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
</style>

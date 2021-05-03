<template>
<div class="cart page -wh">
    <!-- delivery address header -->
    <div class="page-header center">
        <h2 class="title"> Delivery Address </h2>
    </div>

    <div class="delivery-address">
        <!-- delivery input fields -->
        <DeliveryInput v-for="(field, key, index) in formData" :key="index" v-model="field.value" :error="field.error" :label="field.label" @input="field.error = false" />
    </div>

    <!-- proceed to checkout -->
    <div class="pad-10">
        <button class="action"> Continue to Checkout </button>
    </div>
</div>
</template>

    
<script>
export default {
    data() {
        return {
            formData: this.createFormData()
        }
    },
    methods: {
        createFormData() {
            /* form fields */
            const fields = {
                'firstName': 'First Name',
                'surName': 'Sur Name',
                'countryCode': 'Country Code',
                'mobileNumber': 'Mobile Number',
                'email': 'Email',
                'addressLine1': 'Address Line #1',
                'addressLine2': 'Address Line #2',
                'city': 'City',
                'postalCode': 'Pincode'
            };

            /* delivery address object */
            let deliveryAddress = {};

            /* create delivery form object */
            for (let key in fields) {
                deliveryAddress[key] = {
                    label: fields[key],
                    value: "",
                    error: {
                        status: true,
                        msg: ""
                    }
                }
            }
            return deliveryAddress
        }
    }
}
</script>

    
<style lang="scss" scoped>
.delivery-address {
    // margin: 4%;
    padding: 0%;
    // box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>

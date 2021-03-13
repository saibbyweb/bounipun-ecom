<template>
<div class="update-coupon">
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Coupon </h2>
    <!-- coupon code -->
    <InputBox label="Coupon code" v-model="coupon.code" />
    <!-- coupon type -->
    <InputBox label="Value" v-model="coupon.value" />
    <!-- type of coupon -->
    <SelectBox :options="couponTypes" v-model="coupon.type" label="Type of Coupon" />
    <!-- publish toggle -->
    <Toggle v-model="coupon.status" label="Status" inactiveText="Not Live" />
    <!-- update button -->
    <div class="center-col">
        <br>
        <button class="action"> {{ editMode ? "Edit" : "Add" }} coupon </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            editMode: false,
            couponTypes: [{
                    name: 'Select Coupon Type',
                    value: 'select'
                },
                {
                    name: 'Percentage',
                    value: 'percent'
                },
                {
                    name: 'Direct',
                    value: 'direct'
                }
            ],
            coupon: {
                code: "",
                value: "",
                type: "select",
                description: "",
                status: false
            }
        }
    }
}
</script>

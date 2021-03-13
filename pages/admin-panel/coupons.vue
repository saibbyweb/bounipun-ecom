<template>
<div class="coupons crud">
    <!-- filters -->
    <div class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Coupons" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of coupons -->
    <div class="list">
        <List :list="coupons" :headings="headings" custom_css="35% 25% 10% 10% 20%" />
    </div>
    <!-- update coupons form -->
    <div class="update">
        <UpdateCoupon />
    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            filters: [{
                name: 'All Coupons',
                value: 'all'
            }, {
                name: "Percentage Based",
                value: 'percentage'
            }, {
                name: 'Value Based',
                value: 'value'
            }],
            selectedFilter: 'all',
            coupons: [{
                code: 'BOUNIPUN200',
                type: 'Percent',
                value: 20,
                validity: 6,
                status: 'Live'
            }],
            headings: ['Coupon Code', 'Type', 'Value', 'Validity', 'Active']
        }
    }
}
</script>

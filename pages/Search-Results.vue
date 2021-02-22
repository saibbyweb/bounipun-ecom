<template>
<div class="page center-col">
    <p> Showing results for <i> "shawls" </i> </p>
    <div class="search-results">

        <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 20000'}" product="auto_3" :variants="{shawl: true, stole: true}"/>

        <product-card :details="{name: 'Kani Shawl',
                collection: 'Bounipun Adore',
                price: 'INR 15000'}" product="auto_4" :variants="{square: true, stole: true}"/>

        <!-- <product-card :variants="{stole: true}"/> -->
        <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 25000'}" product="auto_5" :variants="{shawl: true, stole: true}"/>
        <product-card product="kara_1" :variants="{shawl: true, stole: true, square: true}"/>
        <product-card :details="{name: 'Kani Shawl',
                collection: 'Bounipun Autograph',
                price: 'INR 8000'}" />

        <!-- <product-card /> -->
        <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 25000'}" product="kara_4" :variants="{shawl: true, stole: true}" />
    </div>
</div>
</template>

<style lang="scss" scoped>
.search-results {
    display: flex;
    flex-wrap: wrap;
}
</style>

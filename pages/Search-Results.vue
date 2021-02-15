<template>
<div class="page center-col">
    <p> Showing results for <i> "shawls" </i> </p>
    <div class="search-results">

        <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 20000'}" image="product2.png" :variants="{shawl: true, stole: true}"/>

        <product-card :details="{name: 'Kani Shawl',
                collection: 'Bounipun Adore',
                price: 'INR 15000'}" image="product3.png" :variants="{square: true, stole: true}"/>

        <product-card :variants="{stole: true}"/>
        <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 25000'}" image="product2.png" :variants="{shawl: true, stole: true}"/>
        <product-card image="product3.png" :variants="{shawl: true, stole: true, square: true}"/>
        <product-card :details="{name: 'Kani Shawl',
                collection: 'Bounipun Autograph',
                price: 'INR 8000'}" />

        <product-card />
        <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 25000'}" image="product2.png" :variants="{shawl: true, stole: true}" />
    </div>
</div>
</template>

<style lang="scss" scoped>
.search-results {
    display: flex;
    flex-wrap: wrap;
}
</style>

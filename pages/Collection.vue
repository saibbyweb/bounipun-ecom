<template>
<div class="center-col">

    <div class="c-header center">
        <h2 class="heading"> Adore </h2>
    </div>

    <div class="page collection-items">
        <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 20000'}" image="product2.png" :variants="{shawl: true, stole: true}" />

        <product-card :details="{name: 'Kani Shawl',
                collection: 'Bounipun Adore',
                price: 'INR 15000'}" image="product3.png" :variants="{square: true, stole: true}" />

        <product-card :variants="{stole: true}" />
        <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 25000'}" image="product2.png" :variants="{shawl: true, stole: true}" />
        <product-card image="product3.png" :variants="{shawl: true, stole: true, square: true}" />
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

<script>
export default {

}
</script>

<style lang="scss" scoped>
.c-header {
    height:40vw;
    background: url("/demo_images/collection-header.png");
    width:100%;

    .heading {
        color: rgba(255, 255, 255, 0.819);
        text-transform: uppercase;
        font-family: $font_1_bold;
        font-size: 10vw;
    }
}
.collection-items {
    display: flex;
    flex-wrap: wrap;
}
</style>
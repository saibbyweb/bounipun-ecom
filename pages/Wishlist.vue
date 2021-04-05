<template>
<div class="page center-col">
    <div class="page-header center">
        <h2 class="title"> Wishlist </h2>
    </div>
    <div class="wishlist-items">
        <!-- <product-card :details="{name: 'Khatamband Cashmere',
                        collection: 'Bounipun Karakul',
                        price: 'INR 20000'}" product="auto_3" :variants="{shawl: true, stole: true}" :inWishlist="true" />

        <product-card :details="{name: 'Kani Shawl',
                        collection: 'Bounipun Adore',
                        price: 'INR 15000'}" product="auto_4" :variants="{square: true, stole: true}" :inWishlist="true" /> -->
    </div>

    <div v-if="wishlistEmpty" class="side-pad">
        <ActionResponse icon="/icons/cart_empty.png" title="Wishlist Empty" message="Your wishlist is currently empty." action="Browse Store" />
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            wishlistEmpty: true
        }
    }
}
</script>

<style lang="scss" scoped>
//
.wishlist-items {
    display: flex;
    flex-wrap: wrap;
}
</style>

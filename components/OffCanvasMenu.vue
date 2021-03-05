<template>
<div class="off-canvas-menu">
    <!-- header -->
    <div class="header">
        <h4 class="white"> Good Afternoon, Zubair </h4>
        <img class="close" src="/icons/light/close.png" @click="$emit('closeMenu')">
    </div>

    <!-- menu items -->
    <button class="clear item"> Collections </button>
    <button class="clear item"> Categories </button>
    <button class="clear item"> The Bounipun Lab </button>
    <button class="clear item"> Story </button>

    <!-- acc items -->
    <button @click="$router.push('/my-account')" class="clear item"> My Account </button>
    <button @click="$router.push('/my-account/orders')" class="clear item acc"> Orders </button>
    <button @click="$router.push('/my-account/address-book')" class="clear item acc"> Address Book </button>
    <button @click="$router.push('/my-account/profile-details')" class="clear item acc"> Profile Details </button>
    <button @click="$router.push('/my-account/gift-cards')" class="clear item acc"> Gift Cards </button>

    <br>
    <!-- links -->
    <button class="clear link" @click="$router.push('/faqs')"> FAQs </button>
    <button class="clear link"> Help </button>
    <button class="clear link"> About Us </button>
    <button class="clear link"> Terms of Use </button>
    <button class="clear link"> Privacy Policy </button>

</div>
</template>

<style lang="scss" scoped>
.off-canvas-menu {
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    width: 70vw;
    height: 100vh;
    margin-left: -70vw;
    transition: all 0.4s ease-in-out;
    z-index: 3;

    &.visible {
        margin-left: 0vw;
    }

    .header {
        background: $primary_dark;
        height: 10vh;
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;

        .close {
            height: 5vw;
            width: 5vw;
        }
    }

    .item {
        text-transform: uppercase;
        padding: 3%;
        width: 100%;
        border-bottom: 0.4px solid #c3c3c3;
        text-align: left;
        color: $gray;
        font-size: 14px;
        letter-spacing: 1px;

        &.acc {
            font-size: 10px;
            padding-left: 5%;
        }
    }

    .link {
        color: $primary_dark;
        font-family: $font_1_bold;
        font-size: 10px;
        width: 100%;
        text-align: left;
        padding: 2%;
        margin-left: 5px;
        opacity: 0.8;

    }
}
</style>

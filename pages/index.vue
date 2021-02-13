<template>
    <div class="homepage">
        <div class="hero"> </div>
        <!-- new arrivals -->
        <!--  -->
        <!-- best sellers -->
        <!-- featured designs -->
        <!-- stamps/keywords  -->
        <!-- account bounipun -->
        <div class="my-account center-col">
            <h2 class="heading"> My Bounipun Account </h2>
            <p class="desc"> Go Ahead and become a Bounipun member to improve your shopping experience </p>

            <button class="action" @click="$router.push('/login')"> Sign In </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    height:60vh;
    width:100vw;
    background:url('/hero/1.jpg');
    background-size:contain;
    background-repeat: no-repeat;
}
.my-account {
    padding:10%;
    .heading {
        text-transform: uppercase;
        font-family: $font_1;
        text-align: center;
    }
    .desc {
        font-size:10px;
        text-align:center;
        padding:10px;
        margin-bottom:10%;
    }
    .action {
        width:50%;
    }
}
</style>
<template>
<div class="homepage">
    <!-- <div class="hero"> </div> -->
    <slideshow size="cover" />
    <!-- new arrivals -->
    <home-section-heading heading="New Arrivals" tagline="checkout the latest from the house of bounipun" />
    <div class="scrollable-list">
        <div class="list">
            <featured-product-card :details="{name: 'Khatamband Cashmere'}" product="auto_2" />
            <featured-product-card :details="{name: 'Kani Shawl'}" product="auto_5" />
            <featured-product-card :details="{name: 'Kani Shawl'}" product="kara_1" />
            <featured-product-card :details="{name: 'Kani Shawl'}" product="kara_3" />
            <featured-product-card :details="{name: 'Khatamband Cashmere'}" product="kara_5" />

        </div>
    </div>

    <!-- mood setter 1 -->
    <div class="mood-setter">
        <img src="/demo_images/mood1.png" />
        <div class="box">
            <h3 @click="$router.push('/collection')" class="heading"> Mood Setter - 1 </h3>
            <p class="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    </div>

    <!-- best sellers -->
    <home-section-heading heading="Best Sellers" tagline="hottest selling items on bounipun" />
    <div class="scrollable-list">
        <div class="list">
            <featured-product-card :details="{name: 'Pashmina'}" product="auto_1" />
            <featured-product-card :details="{name: 'Pashmina'}" product="auto_3" />
            <featured-product-card :details="{name: 'Kani Shawl'}" product="auto_4" />
            <featured-product-card :details="{name: 'Pashmina'}" product="auto_6" />
            <featured-product-card :details="{name: 'Pashmina'}" product="kara_2" />
            <featured-product-card :details="{name: 'Pashmina'}" product="kara_4" />
        </div>
    </div>

    <!-- mood setter 2 -->
    <div class="mood-setter">
        <img src="/demo_images/mood2.png" />
        <div class="box">
            <h3 @click="$router.push('/search-results')" class="heading"> Mood Setter - 2 </h3>
            <p class="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    </div>
    <!-- featured designs -->
    <home-section-heading heading="Featured Designs" tagline="shop from the handpicked bounipun collection" />
    <div class="scrollable-list">
        <div class="list">
            <featured-product-card :details="{name: 'Khatamband Cashmere'}" product="auto_2" />
            <featured-product-card :details="{name: 'Pashmina'}" product="auto_1" />
            <featured-product-card :details="{name: 'Kani Shawl'}" product="auto_5" />
            <featured-product-card :details="{name: 'Pashmina'}" product="auto_3" />
            <featured-product-card :details="{name: 'Kani Shawl'}" product="kara_3" />
            
        </div>
    </div>
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
    height: 60vh;
    width: 100vw;
    background: url('/hero/1.jpg');
    background-size: contain;
    background-repeat: no-repeat;
}

.my-account {
    padding: 10%;

    .heading {
        text-transform: uppercase;
        font-family: $font_1;
        text-align: center;
    }

    .desc {
        font-size: 10px;
        text-align: center;
        padding: 10px;
        margin-bottom: 10%;
    }

    .action {
        width: 50%;
    }
}

.scrollable-list {
    display: flex;
    overflow-x: auto;
    padding: 10px;

    @media screen and (min-width: 768px) {
        justify-content: center;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    .list {
        display: flex;
        width: fit-content;
    }
}

/* mood setter - #TODO: make a separate COMPONENT  */
.mood-setter {
    width: 100%;
    height: 100vw;
    overflow: hidden;
    position: relative;
    margin-top:20px;

    img {
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
    }

    .box {
        top: 17%;
        left: 45%;
        width: 43%;
        background: white;
        padding: 10% 5%;
        position: absolute;

        .heading {
            font-family: $font_1_semibold;
            font-size: 15px;
            padding-bottom: 5%;
        }

        .desc {
            font-size: 11px;
        }
    }

}
</style>

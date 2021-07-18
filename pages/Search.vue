<template>
    <div class="page">
        <button class="clear cancel-search" @click="$router.go(-1)"> Cancel Search <img class="icon" src="/icons/dark/close.png"> </button>
        <!-- <br> -->
        <!-- search box -->
        <input class="search-box" type="text" placeholder="What are you looking for?" />

        <div class="trending">
            <h3 class="heading"> Trending </h3>
            <button class="clear"> <img class="icon" src="/icons/dark/search.png"> SHAWLS </button>
             <button class="clear"> <img class="icon" src="/icons/dark/search.png"> STOLES </button>
              <button class="clear"> <img class="icon" src="/icons/dark/search.png"> SQUARES </button>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Search for Products | Bounipun Kashmir'
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes showUp {
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
}
.page {
    display:flex;
    flex-direction: column;
    position:fixed;
    left:0;
    top:0;
    z-index: 5;
    height:100%;
    width:100%;
    background: white;
    box-sizing: border-box;
    transform: translateY(0);
    animation: showUp 0.3s ease-in-out;

    .cancel-search {
        align-self: flex-end;
        // opacity: 0.5;
        font-size:10px;
        padding:3% 0;
        color: $dark_gray;
    }
    .search-box {
        width:100%;
        background: #656565;
        color:white;
        border: none;
        padding: 3% 6%;
        box-sizing: border-box;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
        text-transform: uppercase;

        &::placeholder {
            color:white;
            text-transform: uppercase;
            opacity: 0.5;
        }
    
    }
}
.trending {
    display:flex;
    margin-top:30px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .heading {
        font-family: $font_1_bold;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    .clear {
        color: $gray;
        padding:1%;
        width:fit-content;
        margin:1% 0;
        // background: red;
        // width:40%;
        text-align: left;
    }
}
</style>
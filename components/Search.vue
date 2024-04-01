<template>
<div ref="searchPage" class="search">
    <!-- <button class="clear cancel-search" @click="$emit('closeSearch')"> Cancel Search <img class="icon" src="/icons/dark/close.png"> </button> -->
    <button class="clear cancel-search" @click="$emit('closeSearch')"> Cancel Search </button>
    <!-- search box -->
    <input ref="searchBox" class="search-box" type="text" placeholder="What are you looking for?" @keyup.enter="searchProducts" v-model="searchTerm" />

    <!-- <div class="trending">
        <h3 class="heading"> Trending </h3>
        <button class="clear"> <img class="icon" src="/icons/dark/search.png"> SHAWLS </button>
        <button class="clear"> <img class="icon" src="/icons/dark/search.png"> STOLES </button>
        <button class="clear"> <img class="icon" src="/icons/dark/search.png"> SQUARES </button>
    </div> -->

    <!-- results -->
    <!-- <div class="search-results">

    </div> -->

</div>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: "",
            previousVal: "",
            focus: false
        }
    },
    watch: {
        focus(newVal) {
            // if(newVal === true)
            this.focusOnTextField();
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.searchBox.focus()
        });

        // setTimeout(() => window.scrollTo({
        //     top: 0,
        //     left: 0,
        //     behavior: 'smooth'
        // }),200);

    },
    methods: {
        focusOnTextField() {
            this.$refs.searchBox.focus()
        },
        searchProducts() {
            this.$refs.searchBox.blur();
            /* if no search term  */
            if (this.searchTerm.trim() === "") {
                return;
            }

            /* sanitize search term */
            this.searchTerm = encodeURIComponent(this.searchTerm)

            if (this.searchTerm === this.previousVal && this.$route.name === "Search") {
                this.$router.go();
                return;
            }

            this.previousVal = this.searchTerm;
            this.$router.push('/search-results?searchTerm=' + this.searchTerm);
            this.$emit('closeSearch')
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes showUp {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}

.icon {
    background-blend-mode:multiply;
}

.search {
    opacity: 0;
    position: fixed;
    padding: 10% 6% 6% 6%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.97);
    /* backdrop-filter: blur(10px); */
    width: 100vw;
    height: 100vh;
    transition: all 0.4s ease-in-out;
    z-index: -1;

    &.visible {
        z-index: 3;
        opacity: 1;
        transform: translateY(0);
        animation: showUp 0.3s ease-in-out;
        animation-fill-mode: both;
    }

    .cancel-search {
        font-size: 14px;
        padding: 3% 0;
        color: $dark_gray;
        position: absolute;
        right: 4%;
        top: 1%;
    }

    .search-box {
        width: 100%;
        background: #656565c8;
    /* backdrop-filter: blur(10px); */
        
        color: white;
        border: none;
        margin-top: 10px;
        padding: 3% 6%;
        box-sizing: border-box;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
        text-transform: uppercase;

        &::placeholder {
            color: white;
            text-transform: uppercase;
            opacity: 0.5;
        }

    }
}

.trending {
    display: flex;
    margin-top: 30px;
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
        padding: 1%;
        width: fit-content;
        margin: 1% 0;
        // background: red;
        // width:40%;
        text-align: left;
    }
}
</style>

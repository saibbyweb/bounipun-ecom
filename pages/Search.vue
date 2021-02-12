<template>
    <div class="page">
        <button class="clear cancel-search"> Cancel Search </button>
        <!-- <br> -->
        <!-- search box -->
        <input class="search-box" type="text" placeholder="What are you looking for?" />

        <div class="trending">
            <h3> Trending </h3>
            <button class="clear"> <img class="icon" src="/icons/dark/search.png"> SHAWLS </button>
             <button class="clear"> <img class="icon" src="/icons/dark/search.png"> STOLES </button>
              <button class="clear"> <img class="icon" src="/icons/dark/search.png"> SQUARES </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page {
    display:flex;
    flex-direction: column;

    .cancel-search {
        align-self: flex-end;
        opacity: 0.5;
        font-size:10px;
    }
    .search-box {
        width:100%;
        background: #656565;
        color:white;
        border: none;
        padding: 3% 6%;
        box-sizing: border-box;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);

        &::placeholder {
            color:white;
            text-transform: uppercase;
        }
    
    }
}
.trending {
    display:flex;
    margin-top:30px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h3 {
        
    }
    .clear {
        color: $gray;
        padding:1%;
        width:fit-content;
        // background: red;
        // width:40%;
        text-align: left;
    }
}
</style>
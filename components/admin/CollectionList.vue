<template>
<div class="collection-list">
    <!-- headings -->
    <div class="item shadow heading">
        <span> Collection Name </span>
        <span> Slug </span>
        <span> Description </span>
        <span class="status"> Status </span>
    </div>
    <!--  -->
    <div class="item shadow" v-for="(collection, index) in collections" :key="index">
        <span class="name"> {{ collection.name }} </span>
        <span class="slug"> {{ collection.slug }} </span>
        <span class="description"> {{ collection.description }} </span>
        <span :class="[collection.status === true ? 'published' : 'not-published','status']"> {{collection.status === true ? 'Live' : 'Unpublished' }} </span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        collections: Array
    }
}
</script>

<style lang="scss" scoped>
.item {
    margin: 10px 0;
    display: grid;
    grid-template-columns: 25% 20% 20% 15% 10% 10%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &.heading {
        background-color: #492727;

        span {
            color: #efefef;
            font-weight: 900;
            font-family: $font_1;
            text-transform: uppercase;
        }

        &:hover {
              background-color: #492727;
              transform: translateX(0px);
        }
    }

    &:hover {
        background-color: rgb(96, 96, 96);
        transform: translateX(4px);

        span {
            color: white;
        }
    }

    span {
        transition: all 0.3s ease-in-out;
        border-right: 1px solid #cbcbcb;
        overflow: hidden;
        font-size: 13px;
        padding: 5px;
        font-family: $font_2;

        &.status {
            border-right: none;
            color: white;

            &.published {
                background-color: green;
            }

            &.not-published {
                background-color: rgb(154, 56, 8);
            }
        }
    }
}
</style>

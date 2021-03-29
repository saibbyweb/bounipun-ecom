<template>
<div class="sw-pagination">
    Total pages {{ totalPages }} <br>
    <!-- pagination bar -->
    <div class="pagination-bar">

        <button @click="getPage(n)" :class="n == cursor ? 'current-page page-no' : 'page-no'" :key="index" v-for="(n, index) in this.totalPages"> {{ n }} </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            cursor: 1,
            results: {
                documents: [],
                totalMatches: 0,
                limitPerRequest: 1
            }
        }
    },
    props: {
        criterion: {
            searchTerm: String,
            filters: Object,
            sortBy: Object,
        }
    },
    watch: {
        criterion: {
            handler() {
                /* fetch results */
            },
            deep: true
        }
    },
    computed: {
        totalPages() {

        },
        sortByCriteria() {

        },
        filterCriteria() {

        }
    },
    methods: {
        getPage(number) {
            this.cursor = number;
            this.fetchResults();
        },
        async fetchResults() {

        }
    }
}
</script>

<style lang="scss" scoped>
.sw-pagination {
    margin-top: 10px;
    display: flex;
    // width: 100%;
    justify-content: center;

    .pagination-bar {
        display: flex;
        flex-wrap: wrap;

        .page-no {
            cursor: pointer;
            border-radius: 4px;
            background: #EBECF0;
            box-shadow: -6px 6px 16px #cfd0d3,
                6px -6px 16px #ffffff;
            padding: 20px;
            margin: 4px;
        }

        .current-page {
            background: #f9b3b5;
            color: white;
        }
    }
}
</style>

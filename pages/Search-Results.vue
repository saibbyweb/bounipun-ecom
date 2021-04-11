<template>
<div class="page center-col">
    <p> Showing results for <i> "shawls" </i> </p>
    <div class="search-results">

        <!-- <product-card :details="{name: 'Khatamband Cashmere',
                collection: 'Bounipun Karakul',
                price: 'INR 20000'}" product="auto_3" :variants="{shawl: true, stole: true}"/> -->
    </div>

    <Pagination ref="pagination" model="products" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />
</div>
</template>

<script>
export default {
    computed: {
        searchTerm() {
            return this.$route.query.searchTerm;
        }
    },
    data() {
        return {
            /* rawCriterion */
            rawCriterion: {
                search: {
                    key: "name",
                    term: ""
                },
                filters: {
                    type: 'default'
                },
                sortBy: {

                },
                limit: 6
            },
        }
    },
    methods: {
        sortToggled(sortBy) {
            console.log(sortBy);
            this.rawCriterion = {
                ...this.rawCriterion,
                sortBy
            }
        },
        resultsFetched(results) {
            console.log('results', results)
        }
    }
}
</script>

<style lang="scss" scoped>
.search-results {
    display: flex;
    flex-wrap: wrap;
}
</style>

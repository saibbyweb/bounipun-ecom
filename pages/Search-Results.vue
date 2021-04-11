<template>
<div class="page center-col">
    <p> Showing results for <i> "{{ $route.query.searchTerm }}" </i> </p>
    <div class="search-results">
        <product-card v-for="(product, index) in products" :key="index" :product="product" />
    </div>

    <Pagination ref="pagination" model="products" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" requestedBy="customer"/>
</div>
</template>

<script>
export default {
    computed: {
        searchTerm() {
            return this.$route.query.searchTerm;
        }
    },
    watch: {
        $route(to, from) {
            // console.log(from.params.searchTerm, to.params.searchTerm);
            this.rawCriterion.search.term = to.query.searchTerm;
        }
    },
    data() {
        return {
            /* rawCriterion */
            rawCriterion: {
                search: {
                    key: "name",
                    term: this.$route.query.searchTerm ? this.$route.query.searchTerm : "rose"
                },
                filters: {
                    type: 'default'
                },
                sortBy: {

                },
                limit: 6
            },
            products: []
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
        resultsFetched(result) {
            if (result.docs.length === 0) {
                this.products = [];
                return;
            }

            /* extract list */
            this.products = result.docs;
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

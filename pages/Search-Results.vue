<template>
<div class="page center-col">
    <p> Showing results for <i> "{{ $route.query.searchTerm }}" </i> </p>

    <!-- offcanvas filters -->
    <div class="offcanvas-filters" :class="{visible: filtersOpen}">
        <h3> Filters </h3>
        <Accordion heading="Product Type" :expanded="true">
            <!-- product type options -->
            <label class="label">
                <input type="radio" name="product-type" value="under-bounipun" v-model="rawCriterion.filters.type" />
                Under Bounipun </label>
            <br>
            <label class="label">
                <input type="radio" name="product-type" value="third-party" v-model="rawCriterion.filters.type" />
                Third Party </label>
        </Accordion>

        <Accordion heading="Collection" :expanded="true">
            <!-- collection options -->
            <div class="option" v-for="(collection, index) in filterData.collections" :key="index">
                <label class="label">
                    <input type="radio" name="collection" :value="collection._id" v-model="rawCriterion.filters.bounipun_collection" />
                    {{ collection.name }}</label>
            </div>
        </Accordion>

        <Accordion heading="Collection" :expanded="true">
            <!-- base color options -->
            <div class="option" v-for="(color, index) in filterData.baseColors" :key="index">
                <label class="label">
                    <input type="radio" name="baseColor" :value="color.name" v-model="rawCriterion.filters.baseColor" />
                    {{ color.name }} </label>
            </div>
        </Accordion>

        <button @click="filtersOpen = false"> close </button>
    </div>

    <!-- offcanvas sort -->
    <div class="offcanvas-sort" :class="{visible: sortOpen}">
        <button @click="sortOpen = false"> close </button>
    </div>

    <!-- filter and sort -->
    <div class="filters-and-sort">
        <button class="action" @click="filtersOpen = true"> Filters </button>

        <button class="action" @click="sortOpen = true"> Sort </button>
    </div>

    <div class="search-results">
        <product-card v-for="(product, index) in products" :key="index" :product="product" :searchView="true" />
    </div>

    <Pagination ref="pagination" model="products" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" requestedBy="customer" />
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
                    type: 'default',
                    bounipun_collection: 'default',
                    baseColor: 'default'
                },
                sortBy: {

                },
                limit: 6
            },
            filtersOpen: false,
            filterData: {
                collections: [],
                variants: [],
                baseColors: []
            },
            sortOpen: false,
            products: []
        }
    },
    mounted() {
        this.fetchFilterData();
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
        },
        async fetchFilterData() {
            /* fetch type of products */
            /* fetch collections */
            /* fetch variants */
            /* fetch base colors */
            const filtersFetch = this.$axios.$get('/getSearchFilters');
            /* wait for request to complete */
            const {
                response,
                error
            } = await this.$task(filtersFetch);
            /* if error occurred */
            if (error || response.fetched === false) {
                console.log('could not fetch search filters')
                return;
            }

            console.log(response);
            this.filterData.collections = response.collections;
            this.filterData.baseColors = response.baseColors;

        }
    }
}
</script>

<style lang="scss" scoped>
.filters-and-sort {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    width: 100%;

    .action {
        width: 20%;
        font-size: 10px;
    }
}

.offcanvas-filters {
    position: fixed;
    padding: 5%;
    top: 0;
    left: 0;
    background: rgb(255, 255, 255);
    width: 70vw;
    height: 100vh;
    margin-left: -70vw;
    transition: all 0.4s ease-in-out;
    z-index: 3;

    &.visible {
        margin-left: 0vw;
    }

    .label {
        font-family: $font_2;
    }
}

.offcanvas-sort {
    position: fixed;
    top: 0;
    right: 0;
    background: rgb(61, 137, 56);
    width: 70vw;
    height: 100vh;
    margin-right: -70vw;
    transition: all 0.4s ease-in-out;
    z-index: 3;

    &.visible {
        margin-right: 0vw;
    }
}

.search-results {
    display: flex;
    flex-wrap: wrap;
}
</style>

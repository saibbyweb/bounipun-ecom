<template>
<div class="page center-col">
    <p> Showing results for <i> "{{ $route.query.searchTerm }}" </i> </p>

    <!-- offcanvas filters -->
    <div class="offcanvas-filters" :class="{visible: filtersOpen}">
        <h3> Filters </h3>
        <!-- product type options -->
        <Accordion heading="Product Type" :expanded="true">
            <div class="option" v-for="(type, index) in filterData.types" :key="index">
                <label class="label">
                    <input type="checkbox" name="type" :value="type.value" v-model="type.checked" />
                    {{ type.name }}</label>
            </div>

        </Accordion>
        <!-- variant options -->
        <Accordion heading="Variants" :expanded="true">
            <div class="option" v-for="(variant, index) in filterData.variants" :key="index">
                <label class="label">
                    <input type="checkbox" name="variants" :value="variant.value" v-model="variant.checked" />
                    {{ variant.name }}</label>
            </div>
        </Accordion>
        <!-- collection options -->
        <Accordion heading="Collection" :expanded="true">
            <div class="option" v-for="(collection, index) in filterData.collections" :key="index">
                <label class="label">
                    <input type="checkbox" name="collection" :value="collection.value" v-model="collection.checked" />
                    {{ collection.name }}</label>
            </div>
        </Accordion>

        <!-- base color options -->
        <Accordion heading="Base Color" :expanded="true">
            <div class="option" v-for="(color, index) in filterData.baseColors" :key="index">
                <label class="label">
                    <input type="checkbox" name="baseColor" :value="color.value" v-model="color.checked" />
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

    <!-- pagination bar -->
    <div v-if="totalMatches > 0" class="pagination-bar">
        <button @click="getPage(n)" :class="n == rawCriterion.cursor ? 'current-page page-no' : 'page-no'" :key="index" v-for="(n, index) in this.totalPages"> {{ n }} </button>
    </div>

</div>
</template>

<script>
export default {
    computed: {
        searchTerm() {
            return this.$route.query.searchTerm;
        },
        totalPages() {
            return Math.ceil(this.totalMatches / this.rawCriterion.limit);
        },
    },
    watch: {
        $route(to, from) {
            // console.log(from.params.searchTerm, to.params.searchTerm);
            this.rawCriterion.search.term = to.query.searchTerm;
            this.fetchResults();
        },
        /* re-fetch results if raw criterion changed */
        filterData: {
            handler() {
                this.fetchResults();
            },
            deep: true
        },
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
                    //     type: 'default',
                    //     bounipun_collection: 'default',
                    //     baseColor: 'default',
                    //     'variants._id': 'default',
                    //     'colors.baseColor': 'default'
                },
                sortBy: {

                },
                limit: 6,
                cursor: 1
            },
            filtersOpen: false,
            filterData: {
                types: [{
                        name: "Under Bounipun",
                        value: "under-bounipun",
                        checked: false
                    },
                    {
                        name: "Third Party",
                        value: "third-party",
                        checked: false
                    }
                ],
                collections: [],
                variants: [],
                baseColors: []
            },
            sortOpen: false,
            products: [],
            /* pagination config */
            //     cursor: 1,
            totalMatches: 0,
            limit: 10
        }
    },
    mounted() {
        this.fetchFilterData();
    },
    methods: {
        getPage(number) {
            this.rawCriterion.cursor = number;
            this.fetchResults();
        },
        sortToggled(sortBy) {
            console.log(sortBy);
            this.rawCriterion = {
                ...this.rawCriterion,
                sortBy
            }
        },
        getCheckedOnes(options) {
            let checkedOptions = [];
            let allOptions = {
                ...options
            };

            const keys = Object.keys(allOptions);

            /* omit unused filters */
            keys.forEach(key => {
                if (allOptions[key].checked === true)
                    checkedOptions.push(allOptions[key].value);
            });

            return checkedOptions;
        },
        async fetchResults() {
            /* keep only the checked ones from (type, variants, collection, base color) */
            let filters = {}
            filters.type = this.getCheckedOnes(this.filterData.types);
            filters.bounipun_collection = this.getCheckedOnes(this.filterData.collections);
            filters['variants._id'] = this.getCheckedOnes(this.filterData.variants);
            filters['colors.baseColor'] = this.getCheckedOnes(this.filterData.baseColors);

            /* append filters to raw criterion */
            this.rawCriterion.filters = filters;

            /* post raw criterion to the server */
            const fetchPaginatedResults = this.$axios.$post('/searchProducts', {
                rawCriterion: this.rawCriterion
            });

            /* wait for request to resolve */
            const {
                response,
                error
            } = await this.$task(fetchPaginatedResults);

            /* if error occurred */
            if (error) {
                console.log("Could not fetch documents");
                return;
            }

            /* if no matches found, return */
            if (response.docs.length === 0) {
                console.log('No matches found');
                this.products = [];
                this.totalMatches = 0;
                return;
            }

            this.products = response.docs;
            this.totalMatches = response.totalMatches;
            //     console.log(response.docs);
            console.log(response.totalMatches, '--matches found');

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
            this.filterData.collections = response.collections.map(collection => ({
                ...collection,
                value: collection._id,
                checked: false
            }))
            this.filterData.baseColors = response.baseColors.map(color => ({
                ...color,
                value: color.name,
                checked: false
            }))
            this.filterData.variants = response.variants.map(variant => ({
                ...variant,
                value: variant._id,
                checked: false
            }))

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
        background: $primary_dark;
        color: white;
    }
}
</style>

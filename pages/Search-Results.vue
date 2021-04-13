<template>
<div class="page center-col">
    <p> Showing results for <i> "{{ $route.query.searchTerm }}" </i> </p>

    <!-- offcanvas filters -->
    <div class="offcanvas-filters shadow" :class="{visible: filtersOpen}">
        <div style="position: relative;">
            <br> <br>
            <div style="display:flex; align-items:center; justify-content: space-between;">
                <h3> Filters </h3>
                <span style="font-size:12px;" @click="clearAllFilters"> Clear Selection </span>
            </div>
            <br>
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

            <!-- price range options -->
            <Accordion heading="Price Range" :expanded="true">
                <div class="option" v-for="(range, index) in filterData.priceRanges" :key="index">
                    <label class="label">
                        <input type="radio" name="priceRange" :value="range.value" v-model="filterData.selectedPriceRange" />
                        {{ range.name }} </label>
                </div>
            </Accordion>

            <img @click="filtersOpen = false" class="close" src="/icons/dark/close.png">
        </div>
    </div>

    <!-- offcanvas sort -->
    <div class="offcanvas-sort shadow" :class="{visible: sortOpen}">
        <div style="position: relative;">
            <br> <br>
            <div style="display:flex; align-items:center; justify-content: space-between;">
                <h3> Sort </h3>
                <span style="font-size:12px;" @click="clearSort"> Clear Sort </span>
            </div>
            <br>
            <!-- price (high to low) -->
            <div>
                <label class="label">
                    <input type="radio" name="priceSort" value="-1" v-model="sortData.priceRange" />
                    Price (High - Low) </label></div>

            <!-- price (low to high) -->
            <div>
                <label class="label">
                    <input type="radio" name="priceSort" value="1" v-model="sortData.priceRange" />
                    Price (Low - High) </label> </div>
            <!-- close sort layout -->
            <img @click="sortOpen = false" class="close" src="/icons/dark/close.png">
        </div>

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
            this.rawCriterion.cursor = 1;
            this.clearAllFilters();
            this.fetchResults();
        },
        /* re-fetch results if raw criterion changed */
        filterData: {
            handler() {
                this.rawCriterion.cursor = 1;
                this.fetchResults();
            },
            deep: true
        },
        sortData: {
            handler() {
                this.rawCriterion.cursor = 1;
                this.fetchResults();
            },
            deep: true
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
                filters: {},
                sortBy: {},
                limit: 4,
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
                priceRanges: [{
                        name: "Under $99",
                        value: '<99',
                    },
                    {
                        name: "Under $199",
                        value: '<199',
                    }, {
                        name: "Under $299",
                        value: '<299',
                    },
                    {
                        name: "Under $399",
                        value: '<399',
                    },
                    {
                        name: "Under $499",
                        value: '<499',
                    },
                    {
                        name: "Under $599",
                        value: '<599',
                    }
                ],
                selectedPriceRange: '',
                collections: [],
                variants: [],
                baseColors: []
            },
            sortData: {
                priceRange: ''
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
        /* clear all filters */
        clearAllFilters() {
            /* uncheck all filters */
            const filterKeys = ['types', 'collections', 'variants', 'baseColors'];
            filterKeys.forEach(filterKey => {
                this.filterData[filterKey].forEach(option => option.checked = false);
            })
            /* reset selected price range */
            this.filterData.selectedPriceRange = ''
            this.clearSort();
        },
        clearSort() {
            this.sortData.priceRange = '';
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
            /* append selected price range to filters */
            this.rawCriterion.selectedPriceRange = this.filterData.selectedPriceRange;

            /* append sort by data */
            if (this.sortData.priceRange !== '') {
                this.rawCriterion.sortBy = {
                    'priceRange.startsAt': parseInt(this.sortData.priceRange)
                }
            }
            else
                this.rawCriterion.sortBy = {}

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
    background: #fffffff2;
    width: 60vw;
    height: 100vh;
    margin-left: -60vw;
    transition: all 0.4s ease-in-out;
    z-index: 3;
    overflow-y: scroll;

    &.visible {
        margin-left: 0vw;
    }

    .label {
        font-family: $font_2;
        text-transform: capitalize;
    }

    .close {
        position: absolute;
        top: 0;
        right: 3%;
        width: 7%;
    }
}

.offcanvas-sort {
    position: fixed;
    top: 0;
    right: 0;
    padding: 5%;
    background: #fffffff2;
    width: 60vw;
    height: 100vh;
    margin-right: -60vw;
    transition: all 0.4s ease-in-out;
    z-index: 3;

    &.visible {
        margin-right: 0vw;
    }

    .label {
        font-family: $font_2;
    }

    .close {
        position: absolute;
        top: 0;
        right: 3%;
        width: 7%;
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

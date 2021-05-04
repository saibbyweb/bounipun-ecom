<template>
<div class="sw-pagination">
    <!-- Total pages {{ totalPages }} <br> -->
    <!-- pagination bar -->
    <div v-if="totalMatches > 0" class="pagination-bar">
        <span class="total-matches"> Total matches: {{ totalMatches }} </span>
        <div v-if="totalPages > 1">
        <button @click="getPage(n)" :class="n == cursor ? 'current-page page-no' : 'page-no'" :key="index" v-for="(n, index) in this.totalPages"> {{ n }} </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            cursor: 1,
            totalMatches: 0
        }
    },
    props: {
        model: String,
        rawCriterion: {
            search: {
                key: String,
                term: String,
            },
            filters: Object,
            sortBy: Object,
            limit: Number
        },
        requestedBy: {
            type: String,
            default: "default"
        }
    },
    watch: {
        rawCriterion: {
            handler() {
                /* fetch results */
                this.cursor = 1;
                this.fetchResults();
            },
            deep: true
        }
    },
    mounted() {
        this.fetchResults();
    },
    computed: {
        totalPages() {
            // if(this.totalMatches === 0)
            //     return 0;
            return Math.ceil(this.totalMatches / this.rawCriterion.limit);
        },
        sortByCriteria() {
            let sortByCriteria = {}
            const sortByKeys = Object.keys(this.rawCriterion.sortBy);

            /* omit unused sort fields */
            sortByKeys.forEach(key => {
                const field = this.rawCriterion.sortBy[key];

                if (field.active)
                    sortByCriteria[key] = field.order
            });

            return sortByCriteria
        },
        filterCriteria() {
            const filterCriteria = {
                ...this.rawCriterion.filters
            };

            const filterKeys = Object.keys(filterCriteria);

            /* omit unused filters */
            filterKeys.forEach(key => {
                if (this.rawCriterion.filters[key] === "default")
                    delete filterCriteria[key];
            });
            return filterCriteria
        }
    },
    methods: {
        getPage(number) {
            this.cursor = number;
            this.fetchResults();
        },
        async fetchResults() {
            console.log('hit endpoint and fetch results');
            const rawCriterion = {
                search: this.rawCriterion.search,
                filters: this.filterCriteria,
                sortBy: this.sortByCriteria,
                cursor: this.cursor,
                limit: this.rawCriterion.limit
            }
            // console.log(payload)
            const paginatedResults = await this.$fetchPaginatedResults(this.model, rawCriterion, this.requestedBy);
            
            /* set paginated results */
            this.totalMatches = paginatedResults.totalMatches;
            console.log(this.totalMatches, '--total matches')

            /* if not results found */
            if (!paginatedResults.fetched || paginatedResults.docs.length === 0) {
                this.$emit('resultsFetched', paginatedResults);
                return;
            }

            this.$emit('resultsFetched', paginatedResults)
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
        align-items: center;

        .page-no {
            cursor: pointer;
            // border-radius: 50%;
            background: $dark_gray;
            color:white;
            padding: 3px 14px;
            margin: 6px 4px;
        }

        .current-page {
            background: white;
            color: $dark_gray;
        }
    }
}
</style>

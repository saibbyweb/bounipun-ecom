<template>
<div class="unlock crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Unlock Codes" />
    </div>
    <!-- list of unlock codes -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 60% 20% 10%" :sortByFields="sortByFields" @documentFetched="documentFetched" @sortToggled="sortToggled" />
        <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />
    </div>
    <!-- update unlock code form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateCoupon v-show="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" />
        <AddNewItem v-if="!showForm" label="Coupon" @showForm="showForm = true" />
    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            showForm: false,
            loading: false,
            model: 'unlock',
            /* rawCriterion */
            rawCriterion: {
                search: {
                    key: "code",
                    term: ""
                },
                filters: {
                    type: 'default'
                },
                sortBy: {

                },
                limit: 20
            },
            list: [],
            sortByFields: ['code', 'status'],
            headings: ['_id', 'code', 'description', 'status'],
        }
    },
    async mounted() {
    },
    methods: {
        updateList() {
            this.$refs.pagination.fetchResults();
        },
        sortToggled(sortBy) {
            console.log(sortBy);
            this.rawCriterion = {
                ...this.rawCriterion,
                sortBy
            }
        },
        documentFetched(doc) {
            this.showForm = true;
            this.editMode = true;
            this.$refs.updateComponent.populateForm(doc);
        },
  
        resultsFetched(result) {
            if (result.docs.length === 0) {
                this.list = [];
                return;
            }

            /* extract list */
            this.list = result.docs.map(({
                _id,
                code,
                description,
                status
            }) => {
                return {
                    _id,
                    code,
                    description,
                    status
                }
            });
        }
    }
}
</script>
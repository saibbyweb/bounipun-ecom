<template>
<div class="variant-categories crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Variant Categories" />
    </div>
    <!-- list of fabrics -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 40% 25% 25%" @documentFetched="documentFetched" :sortByFields="sortByFields" @sortToggled="sortToggled" />
        <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />
    </div>
    <!-- update fabrics form -->
    <div :class="{updating: showForm}" class="update">

        <UpdateVariantCategory v-show="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" />

        <AddNewItem v-if="!showForm" label="Variant Category" @showForm="showForm = true" />
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
            model: 'variant_categories',
            list: [],
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
                limit: 20
            },
            sortByFields: ['name', 'status'],
            headings: ['_id', 'name', 'Description', 'status']
        }
    },
    mounted() {
        // this.fetchList();
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
            console.log(this.$refs.updateComponent.populateForm(doc));
        },
        async resultsFetched(result) {
            if (result.docs.length === 0) {
                this.list = [];
                return;
            }

            /* extract list */
            this.list = result.docs.map(({
                _id,
                name,
                description,
                status
            }) => {
                return {
                    _id,
                    name,
                    description,
                    status
                }
            });

        }
    }
}
</script>

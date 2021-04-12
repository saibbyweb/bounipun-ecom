<template>
<div class="color-categories crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Base Colors" />
    </div>
    <!-- list of base colors -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 40% 25% 25%" :sortByFields="sortByFields" @documentFetched="documentFetched" @sortToggled="sortToggled" />

        <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />

    </div>
    <!-- update base color form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateBaseColor v-show="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" />
        <AddNewItem v-if="!showForm" label="Base Color" @showForm="showForm = true" />
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
            model: 'base_colors',
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
                limit: 3
            },
            list: [],
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
        resultsFetched(result) {
            if(result.docs.length === 0) {
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

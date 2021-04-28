<template>
<div class="fabrics crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <SelectBox :options="searchBy" v-model="rawCriterion.search.key" label="Search By" />
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Fabrics" />

    </div>
    <!-- list of fabrics -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 30% 20% 10% 15% 15%" :sortByFields="sortByFields" @documentFetched="documentFetched" @sortToggled="sortToggled" @clearFilters="clearFilters" @refetchList="updateList()" :isDraggable="true" />

        <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />

    </div>
    <!-- update fabrics form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateFabric v-show="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" />
        <AddNewItem v-if="!showForm" label="fabric" @showForm="showForm = true" />
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
            model: 'fabrics',
            searchBy: [{
                name: "Fabric Name",
                value: "name"
            }, {
                name: "Code",
                value: "code"
            }],
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
            list: [],
            sortByFields: ['name', 'order', 'status'],
            headings: ['_id', 'name', 'Code', 'order', 'category','status'],
            dragEnabled: false
        }
    },
    mounted() {
        // this.fetchList();
    },
    methods: {
        clearFilters(dragEnabled) {
            this.dragEnabled = dragEnabled;

            this.rawCriterion.filters = {
                type: 'default'
            }

            this.rawCriterion.search.term = "";
        },
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
            if (result.docs.length === 0) {
                this.list = [];
                return;
            }

            let categories = {
                SQ: "Square",
                ST: "Stole",
                SH: "Shawl"
            }

            /* extract list */
            this.list = result.docs.map(({
                _id,
                name,
                code,
                order,
                status
            }) => {
                return {
                    _id,
                    name,
                    code,
                    order,
                    category: categories[code.substring(0,2)],
                    status
                }
            });

        }
    }
}
</script>

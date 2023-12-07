<template>
    <div class="collection-categories crud">
        <!-- filters -->
        <div :class="{updating: showForm}" class="filters center">
            <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Collecyion Categories" />
        </div>
        <!-- list of fabrics -->
        <div :class="{updating: showForm}" class="list">
            <List :list="list" :model="model" :headings="headings" custom_css="10% 30% 25% 10% 25%" :sortByFields="sortByFields" @documentFetched="documentFetched" @sortToggled="sortToggled" @clearFilters="clearFilters" @refetchList="updateList()" :isDraggable="true" />
    
            <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />
    
        </div>
        <!-- update fabrics form -->
        <div :class="{updating: showForm}" class="update">
    
            <UpdateCollectionCategory v-show="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" />
    
            <AddNewItem v-if="!showForm" label="Collection Category" @showForm="showForm = true" />
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
                model: 'collection_category',
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
                headings: ['_id', 'name', 'description', 'order', 'status'],
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
    
                /* extract list */
                this.list = result.docs.map(({
                    _id,
                    name,
                    description,
                    order,
                    status
                }) => {
                    return {
                        _id,
                        name,
                        description,
                        order,
                        status
                    }
                });
    
            }
        }
    }
    </script>
    
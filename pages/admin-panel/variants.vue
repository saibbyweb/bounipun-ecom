<template>
<div class="variant-categories crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Variant" />

    </div>
    <!-- list of fabrics -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 30% 20% 20% 10% 10%" :sortByFields="sortByFields" @documentFetched="documentFetched" @sortToggled="sortToggled" @clearFilters="clearFilters" @refetchList="updateList()" :isDraggable="true" />

        <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />
    </div>
    <!-- update fabrics form -->
    <div :class="{updating: showForm}" class="update">

        <UpdateVariant v-show="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" :variantCategories="variantCategories" />

        <AddNewItem v-if="!showForm" label="Variant" @showForm="showForm = true" />
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
            model: 'variants',
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
            sortByFields: ['name', 'order','status'],
            headings: ['_id', 'name', 'Category', 'Code', 'order','status'],
            variantCategories: [],
            dragEnabled: false
        }
    },
    async mounted() {
        await this.fetchVariantCategories();
        // await this.fetchList();
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
        async fetchVariantCategories() {
            const result = await this.$fetchCollection('variant_categories');
            this.variantCategories = result.docs.map(({
                _id,
                name
            }) => {
                return {
                    name,
                    value: _id
                }
            });
            this.variantCategories.unshift({
                name: 'Select Variant',
                value: ""
            });

            if (this.list.length === 0)
                return;

            /* assign category names */
            this.list = this.list.map(item => {
                const foundCategory = this.variantCategories.find(col => col.value === item.category);
                item.category = foundCategory.name;
                return item;
            })
        },
        documentFetched(doc) {
            this.showForm = true;
            this.editMode = true;
            this.$refs.updateComponent.populateForm(doc);

            if (doc.image === "" || doc.image === undefined)
                return;

            /* assign images */
            setTimeout(() => {
                this.$refs.updateComponent.$refs.imageUploader.assignImages([{
                    _id: '',
                    mainImage: false,
                    path: doc.image
                }]);
            }, 1200);
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
                category,
                code,
                order,
                status
            }) => {
                /* resolve category name */
                if (this.variantCategories.length !== 0) {
                    const foundCategory = this.variantCategories.find(cat => cat.value === category);
                    category = foundCategory.name
                }

                return {
                    _id,
                    name,
                    category,
                    code,
                    order,
                    status
                }

            });

        }
    }
}
</script>

<template>
<div class="variant-categories crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Variant" />

    </div>
    <!-- list of fabrics -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 40% 20% 20% 10%"
        :sortByFields="sortByFields"
        @documentFetched="documentFetched"
        @sortToggled="sortToggled" />

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
                limit: 10
            },
            list: [],
            sortByFields: ['name', 'status'],
            headings: ['_id', 'name', 'Category', 'Code', 'status'],
            variantCategories: [],
        }
    },
    async mounted() {
        await this.fetchVariantCategories();
        // await this.fetchList();
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
            })
        },
        documentFetched(doc) {
            this.showForm = true;
            this.editMode = true;
            console.log(this.$refs.updateComponent.populateForm(doc));
        },
        async resultsFetched(result) {
            if(result.docs.length === 0) {
                this.list = [];
                return;
            }

            /* extract list */
            this.list = result.docs.map(({
                _id,
                name,
                category,
                code,
                status
            }) => {
                /* resolve category name */
                const foundCategory = this.variantCategories.find(cat => cat.value === category)
                return {
                    _id,
                    name,
                    category: foundCategory.name,
                    code,
                    status
                }

            });

        }
    }
}
</script>

<template>
<div class="colors crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <SelectBox :options="searchBy" v-model="rawCriterion.search.key" label="Search By" />
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Colors" />
    </div>
    <!-- list of fabrics -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 20% 20% 10% 10% 20% 10%" :sortByFields="sortByFields" @documentFetched="documentFetched" @sortToggled="sortToggled" />

        <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />
    </div>
    <!-- update fabrics form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateColor v-show="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" :colorCategories="colorCategories" />

        <AddNewItem v-if="!showForm" label="Color" @showForm="showForm = true" />
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
            model: 'colors',
            searchBy: [{
                name: "Color Name",
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
                limit: 10
            },
            list: [],
            sortByFields: ['code', 'name', 'status'],
            headings: ['_id', 'code', 'name', 'Base Color', 'Category', 'Description', 'status'],
            colorCategories: [],
        }
    },
    async mounted() {
        await this.fetchColorCategories();
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
        async fetchColorCategories() {
            const result = await this.$fetchCollection('color_categories');
            this.colorCategories = result.docs.map(({
                _id,
                name
            }) => {
                return {
                    name,
                    value: _id
                }
            });
            this.colorCategories.unshift({
                name: 'Select Category',
                value: ""
            })
        },
        documentFetched(doc) {
            this.showForm = true;
            this.editMode = true;
            this.$refs.updateComponent.populateForm(doc);

            if (doc.image === "")
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
        resultsFetched(result) {
            if(result.docs.length === 0) {
                this.list = [];
                return;
            }

            /* extract list */
            this.list = result.docs.map(({
                _id,
                code,
                name,
                baseColor,
                category,
                description,
                status
            }) => {
                /* resolve category name */
                const foundCategory = this.colorCategories.find(cat => cat.value === category)
                return {
                    _id,
                    code,
                    name,
                    baseColor,
                    category: foundCategory ? foundCategory.name : "Not available",
                    description,
                    status
                }
            });
        }
    }
}
</script>

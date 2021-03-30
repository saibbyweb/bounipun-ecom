<template>
<div class="products crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <SelectBox :options="searchBy" v-model="rawCriterion.search.key" label="Search By"/>
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Products" />
        <SelectBox :options="productTypes" v-model="rawCriterion.filters.type" label="Filter By"/>
    </div>

    <!-- list of products -->
    <div :class="{updating: showForm}" class="list">
        <List ref="list" :list="list" :model="model" :headings="headings" custom_css="10% 10% 25% 20% 10% 15% 10%" :sortByFields="sortByFields" @documentFetched="documentFetched" @sortToggled="sortToggled" />

        <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />
    </div>

    <!-- update products form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateProduct v-if="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" :collections="collections" :variants="variants" :fabrics="fabrics" @resetVariants="resetVariants" />

        <AddNewItem v-if="!showForm" label="Product" @showForm="showForm = true" />
    </div>
</div>
</template>

<script>
import {
    v4 as uuidv4
} from "uuid";
export default {
    layout: 'admin',
    data() {
        return {
            showForm: false,
            loading: false,
            model: 'products',
            /* product types */
            productTypes: [{
                name: 'All Products',
                value: 'default'
            }, {
                name: "Made to Order",
                value: 'made-to-order'
            },
            {
                name: "Ready To Ship",
                value: 'ready-to-ship'
            },
            {
                name: 'Third Party Products',
                value: 'third-party'
            }],
            /* collections */
            searchBy: [{name: "Product Name", value: "name"}, {name: "Style ID", value: "styleId"}],
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
                limit: 2
            },
            list: [],
            headings: ['_id', 'StyleID', 'name', 'Slug', 'type', 'Collection', 'status'],
            sortByFields: ['name', 'type', 'status'],
            collections: [],
            variants: [],
            fabrics: []
        }
    },
    async mounted() {
        await this.fetchBounipunCollections();
        await this.fetchVariants();
        await this.fetchFabrics();
        // await this.fetchList();

    },
    methods: {
        updateList() {
            this.$refs.pagination.fetchResults();
        },
        sortToggled(sortBy) {
            console.log(sortBy);
            this.rawCriterion = {...this.rawCriterion, sortBy }
        },
        async fetchFabrics() {
            const result = await this.$fetchCollection('fabrics');
            this.fabrics = result.docs.map(({
                _id,
                name,
                code,
                info1,
            }) => {
                return {
                    name,
                    value: _id,
                    code,
                    info1,
                    _id,
                    checked: false,
                    price: ""
                }
            });
        },
        async fetchVariants() {
            const result = await this.$fetchCollection('variants');
            this.variants = result.docs.map(({
                _id,
                name,
                code
            }) => {
                return {
                    name,
                    _id,
                    code,
                    value: _id,
                    checked: false
                }
            });
        },
        resetVariants() {
            this.variants.forEach(variant => variant.checked = false);
        },
        async fetchBounipunCollections() {
            const result = await this.$fetchCollection('collections');
            this.collections = result.docs.map(({
                _id,
                name
            }) => {
                return {
                    name,
                    value: _id
                }
            });
            this.collections.unshift({
                name: 'Select Collection',
                value: ""
            });
        },
        documentFetched(doc) {
            console.log(doc, 'product fetched')


            this.showForm = true;
            this.editMode = true;
            setTimeout(() => this.populateForm(doc), 1500);
            // this.populateForm(doc, updateComponent);
        },
        /* populate form */
        populateForm(doc) {
            const updateComponent = this.$refs.updateComponent;
            updateComponent.populateForm(doc);

            if (doc.colors.length === 0)
                return;

            /* add unique key to all colors */
            doc.colors.forEach(color => color.key = uuidv4())

            /* if color source is bounipun colors */
            if (doc.colorSource === 'bounipun-colors') {
                updateComponent.$refs.colorPicker.populateColorSelection(doc.colors);
            }

            /* assign images */
            setTimeout(() => {
                let i = 0;
                doc.colors.forEach(color => {
                    if (color.images.length === 0) {
                        i++;
                        return;
                    }
                    updateComponent.$refs.imageUploader[i].assignImages(color.images);
                    i++;
                });
            }, 10);

            /* need to check variants length */
            if (doc.variants.length === 0)
                return;
            /* populate variants */
            updateComponent.populateVariants(doc.variants);

            /* populate fabrics */
            setTimeout(() => {

                let x = 0;
                doc.variants.forEach(variant => {
                    if (variant.fabrics.length === 0) {
                        return;
                    }
                    const fabricRef = `fabricSelector${variant._id}`;
                    const fabricSelector = updateComponent.$refs[fabricRef];
                    fabricSelector[0].populateFabricSelection(variant);

                });

            }, 13);
        },
        resultsFetched(result) {
            if(result.docs.length === 0) {
                this.list = [];
                return;
            }

            /* extract list */
            this.list = result.docs.map(({
                _id,
                styleId,
                name,
                slug,
                type,
                bounipun_collection,
                status
            }) => {
                /* resolve category name */
                const foundCollection = this.collections.find(col => col.value === bounipun_collection);
                
                console.log(foundCollection, '-found collection');

                return {
                    _id,
                    styleId,
                    name,
                    slug,
                    type,
                    bounipun_collection: foundCollection !== undefined ? foundCollection.name : "Third Paty",
                    status
                }
            });
        }
    }
}
</script>

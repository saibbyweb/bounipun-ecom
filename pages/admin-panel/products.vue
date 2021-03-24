<template>
<div class="products crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Products" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>

    <!-- list of products -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 10% 30% 20% 10% 10% 10%" @documentFetched="documentFetched" />
    </div>

    <!-- update products form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateProduct v-if="showForm" ref="updateComponent" @updated="fetchList" :model="model" @close="showForm = false" :collections="collections" :variants="variants" :fabrics="fabrics" @resetVariants="resetVariants" />

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
            filters: [{
                name: 'All Products',
                value: 'all'
            }, {
                name: "Karakul",
                value: 'karakul'
            }],
            selectedFilter: 'all',
            list: [],
            headings: ['_id', 'StyleID', 'Name', 'Slug', 'Type', 'Collection', 'Status'],
            collections: [],
            variants: [],
            fabrics: []
        }
    },
    async mounted() {
        await this.fetchBounipunCollections();
        await this.fetchVariants();
        await this.fetchFabrics();
        await this.fetchList();

    },
    methods: {
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
        async fetchList() {
            this.loading = true;
            const result = await this.$fetchCollection(this.model);
            this.loading = false;

            if (!result.fetched || result.docs.length === 0) {
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

                return {
                    _id,
                    styleId,
                    name,
                    slug,
                    type,
                    bounipun_collection: foundCollection.name,
                    status
                }
            });
        }
    }
}
</script>

<template>
<div class="products crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Products" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>

    <!-- list of products -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 10% 20% 20% 10% 10% 10% 10%" @documentFetched="documentFetched" />
    </div>

    <!-- update products form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateProduct v-show="showForm" ref="updateComponent" @updated="fetchList" :model="model" @close="showForm = false" :collections="collections" :variants="variants" :fabrics="fabrics" />

        <AddNewItem v-if="!showForm" label="Product" @showForm="showForm = true" />
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
            headings: ['_id', 'StyleID', 'Name', 'Slug', 'Description', 'Type', 'Collection', 'Status'],
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
                name
            }) => {
                return {
                    name,
                    value: _id,
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
                name
            }) => {
                return {
                    name,
                    _id,
                    value: _id,
                    checked: false
                }
            });
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
            this.showForm = true;
            this.editMode = true;
            this.$refs.updateComponent.populateForm(doc);

            if (doc.colors.length === 0)
                return;

            /* assign images */
            setTimeout(() => {
                let i = 0;
                doc.colors.forEach(color => {
                    if (color.images.length === 0) {
                        i++;
                        return;
                    }
                    this.$refs.updateComponent.$refs.imageUploader[i].assignImages(color.images);
                    i++;
                });
            }, 1000);

            /* need to check variants length */
            if (doc.variants.length === 0)
                return;
            
            this.$refs.updateComponent.populateVariants(doc.variants);
            
            /* populate variants */
            setTimeout(() => {

                let x = 0;
                doc.variants.forEach(variant => {
                    if (variant.fabrics.length === 0) {
                        return;
                    }
                    // console.log(this.$refs.updateComponent.$refs);
                    const fabricRef = `fabricSelector${variant._id}`;
                    const fabricSelector = this.$refs.updateComponent.$refs[fabricRef];
                    fabricSelector[0].populateFabricSelection(variant);
              
                });

            }, 1300);

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
                description,
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
                    description,
                    type,
                    bounipun_collection: foundCollection.name,
                    status
                }
            });
        }
    }
}
</script>

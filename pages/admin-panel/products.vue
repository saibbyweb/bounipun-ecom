<template>
<div class="products crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Products" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>

    <!-- list of products -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 20% 20% 10% 10% 20% 10%" @documentFetched="documentFetched" />
    </div>

    <!-- update products form -->
    <div :class="{updating: showForm}" class="update">
        <UpdatePoduct v-show="showForm" ref="updateComponent" @updated="fetchList" :model="model" @close="showForm = false" :collections="collections" />

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
            headings: ['_id', 'Color Code', 'Color Name', 'Image', 'Category', 'Description', 'Status'],
            collections: [],
        }
    },
    async mounted() {
        await this.fetchBounipunCollections();
        await this.fetchList();
    },
    methods: {
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
            })
        },
        documentFetched(doc) {
            this.showForm = true;
            this.editMode = true;
            this.$refs.updateComponent.populateForm(doc);

            // if (doc.image === "")
            //     return;

            /* assign images */
            // this.$refs.updateComponent.$refs.imageUploader.assignImages([{
            //     _id: '',
            //     mainImage: false,
            //     path: doc.image
            // }]);
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
                slug,
                description,
                type,
                bounipun_collection,
                status
            }) => {
                /* resolve category name */
                const foundCollection = this.collections.find(col => col.value === bounipun_collection)
                return {
                    _id,
                    code,
                    name,
                    image,
                    bounipun_collection: foundCollection.name,
                    description,
                    status
                }
            });
        }
    }
}
</script>

<template>
<div class="variant-categories crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Variant" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of fabrics -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 40% 20% 20% 10%" @documentFetched="documentFetched" />
    </div>
    <!-- update fabrics form -->
    <div :class="{updating: showForm}" class="update">
    
        <UpdateVariant v-show="showForm" ref="updateComponent" @updated="fetchList" :model="model" @close="showForm = false" :variantCategories="variantCategories"/>

        <AddNewItem v-if="!showForm" label="Variant" @showForm="showForm = true"/>
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
            filters: [{
                name: 'All Variants',
                value: 'all'
            }, {
                name: "Karakul",
                value: 'karakul'
            }],
            selectedFilter: 'all',
            list: [],
            headings: ['_id','Variant Name', 'Category','Code', 'Status'],
            variantCategories:[],
        }
    },
    async mounted() {
        await this.fetchVariantCategories();
        await this.fetchList();
    },
    methods: {
        async fetchVariantCategories() {
            const result = await this.$fetchCollection('variant_categories');
            this.variantCategories = result.docs.map(({_id, name }) => {
                return { name, value: _id }
            });
            this.variantCategories.unshift({name: 'Select Variant', value: ""})
        },
        documentFetched(doc) {
            this.showForm = true;
            this.editMode = true;
            console.log(this.$refs.updateComponent.populateForm(doc));
        },
        async fetchList() {
            this.loading = true;
            const result = await this.$fetchCollection(this.model);
            this.loading = false;

            if(!result.fetched || result.docs.length === 0) {
                this.list = [];
                return;
            }

            /* extract list */
            this.list = result.docs.map(({_id, name, category,code, status}) => {
                /* resolve category name */
                const foundCategory = this.variantCategories.find(cat => cat.value === category)
                return {_id, name, category: foundCategory.name, code, status }

            });
        
        }
    }
}
</script>

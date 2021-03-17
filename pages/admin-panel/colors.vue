<template>
<div class="colors crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Colors" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of fabrics -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 20% 30% 20% 10% 10%" @documentFetched="documentFetched" />
    </div>
    <!-- update fabrics form -->
    <div :class="{updating: showForm}" class="update">
    
        <UpdateColor v-show="showForm" ref="updateComponent" @updated="fetchList" :model="model" @close="showForm = false" :colorCategories="colorCategories"/>

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
            model: 'colors',
            filters: [{
                name: 'All Colors',
                value: 'all'
            }, {
                name: "Karakul",
                value: 'karakul'
            }],
            selectedFilter: 'all',
            list: [],
            headings: ['_id','Color Code', 'Color Name','Category','Description', 'Status'],
            colorCategories:[],
        }
    },
    async mounted() {
        await this.fetchColorCategories();
        await this.fetchList();
    },
    methods: {
        async fetchColorCategories() {
            const result = await this.$fetchCollection('color_categories');
            this.colorCategories = result.docs.map(({_id, name }) => {
                return { name, value: _id }
            });
            this.colorCategories.unshift({name: 'Select Category', value: ""})
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
            this.list = result.docs.map(({_id, code, name, category, description, status}) => {
                /* resolve category name */
                const foundCategory = this.colorCategories.find(cat => cat.value === category)
                return {_id, code, name, category: foundCategory.name, description, status }

            });
        
        }
    }
}
</script>

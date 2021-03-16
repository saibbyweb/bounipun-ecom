<template>
<div class="color-categories crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Color Categories" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of fabrics -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 40% 25% 25%" @documentFetched="documentFetched" />
    </div>
    <!-- update fabrics form -->
    <div :class="{updating: showForm}" class="update">
    
        <UpdateColorCategory v-show="showForm" ref="updateComponent" @updated="fetchList" :model="model" @close="showForm = false" />

        <AddNewItem v-if="!showForm" label="Color Category" @showForm="showForm = true"/>
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
            model: 'color_categories',
            filters: [{
                name: 'All Color Categories',
                value: 'all'
            }, {
                name: "Karakul",
                value: 'karakul'
            }, {
                name: 'Autograph',
                value: 'autograph'
            }, {
                name: 'Escape',
                value: 'escape'
            }],
            selectedFilter: 'all',
            list: [],
            headings: ['_id','Category Name', 'Description', 'Status']
        }
    },
    mounted() {
        this.fetchList();
    },
    methods: {
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
            this.list = result.docs.map(({_id, name, description, status}) => {
                return {_id, name, description, status }
            });
        
        }
    }
}
</script>

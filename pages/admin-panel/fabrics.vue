<template>
<div class="fabrics crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Fabrics" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of fabrics -->
    <div :class="{updating: showForm}" class="list">
        <List :list="fabrics" :model="model" :headings="headings" custom_css="10% 40% 25% 25%" @documentFetched="documentFetched" />
    </div>
    <!-- update fabrics form -->
    <div :class="{updating: showForm}" class="update">
    
        <UpdateFabric v-show="showForm" ref="updateComponent" @updated="fetchFabrics" @close="showForm = false" />
        <AddNewItem v-if="!showForm" label="fabric" @showForm="showForm = true"/>
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
            model: 'fabrics',
            filters: [{
                name: 'All Collections',
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
            fabrics: [],
            headings: ['_id','Fabric Name', 'Description', 'Status']
        }
    },
    mounted() {
        this.fetchFabrics();
    },
    methods: {
        documentFetched(doc) {
            this.showForm = true;
            this.editMode = true;
            console.log(this.$refs.updateComponent.populateForm(doc));
        },
        async fetchFabrics() {
            this.loading = true;
            const result = await this.$fetchCollection(this.model);
            this.loading = false;

            if(!result.fetched || result.docs.length === 0) {
                return;
            }

            /* extract list */
            this.fabrics = result.docs.map(({_id, name, description, status}) => {
                return {_id, name, description, status }
            });
        
        }
    }
}
</script>

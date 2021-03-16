<template>
<div class="fabrics crud">
    <!-- filters -->
    <div class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Fabrics" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of fabrics -->
    <div class="list">
        <List :list="fabrics" :model="model" :headings="headings" custom_css="10% 40% 25% 25%" @documentFetched="documentFetched" />
    </div>
    <!-- update fabrics form -->
    <div class="update">
        <UpdateFabric ref="updateFabric" @updated="fetchFabrics" />
    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
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
            console.log(this.$refs.updateFabric.setFabric(doc));
        },
        async fetchFabrics() {
            this.loading = true;

            const result = await this.$fetchCollection('fabrics');

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

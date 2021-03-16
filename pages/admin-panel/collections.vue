<template>
<div class="collection crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input class="search shadow" type="text" placeholder="Search for collections" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of collections -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :headings="headings" :model="model" @documentFetched="documentFetched" custom_css="10% 25% 25% 25% 15%" />
    </div>
    <!-- update collection form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateCollection v-show="showForm" ref="updateComponent" @updated="fetchList" :model="model" @close="showForm = false"/>
        <AddNewItem v-if="!showForm" label="collection" @showForm="showForm = true"/>
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
            model: 'collections',
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
            list: [
            ],
            headings: ['_id', 'Collection Name', 'Slug', 'Description', 'Published']
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

            if (!result.fetched || result.docs.length === 0) {
                this.list = [];
                return;
            }

            /* extract list */
            this.list = result.docs.map(({
                _id,
                name,
                slug,
                description,
                status
            }) => {
                return {
                    _id,
                    name,
                    slug,
                    description,
                    status
                }
            });

        }
    }
}
</script>

<style lang="scss" scoped>

</style>

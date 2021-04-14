<template>
<div class="collection crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for collections" />
    </div>
    <!-- list of collections -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :headings="headings" :sortByFields="sortByFields" :model="model" @documentFetched="documentFetched" @sortToggled="sortToggled" custom_css="10% 25% 25% 15% 10% 15%" />

        <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />
    </div>
    <!-- update collection form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateCollection v-show="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" />
        <AddNewItem v-if="!showForm" label="collection" @showForm="showForm = true" />
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
                limit: 6
            },
            sortByFields: ['name', 'status'],
            list: [],
            headings: ['_id', 'name', 'Slug', 'Estimated Time of Delivery','Order', 'status']
        }
    },
    mounted() {
        // this.fetchList();
    },
    methods: {
        updateList() {
            this.$refs.pagination.fetchResults();
        },
        sortToggled(sortBy) {
            console.log(sortBy);
            this.rawCriterion = {
                ...this.rawCriterion,
                sortBy
            }
        },
        documentFetched(doc) {
            this.showForm = true;
            this.editMode = true;
            this.$refs.updateComponent.populateForm(doc);

            if (doc.image === "" || doc.image === undefined)
                return;

            /* assign images */
            setTimeout(() => {
                this.$refs.updateComponent.$refs.imageUploader.assignImages([{
                    _id: '',
                    mainImage: false,
                    path: doc.image
                }]);
            }, 1200);

        },
        resultsFetched(result) {
            if (result.docs.length === 0) {
                this.list = [];
                return;
            }

            /* extract list */
            this.list = result.docs.map(({
                _id,
                name,
                slug,
                // description,
                edt,
                order,
                status
            }) => {

                return {
                    _id,
                    name,
                    slug,
                    // description,
                    edt: edt + " weeks",
                    order,
                    status
                }
            });

        }
    }
}
</script>

<style lang="scss" scoped>

</style>

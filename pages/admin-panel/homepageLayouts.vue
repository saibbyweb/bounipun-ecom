<template>
<div class="homepages crud">
    <!-- filters -->
    <div :class="{updating: showForm}" class="filters center">
        <input v-model="rawCriterion.search.term" class="search shadow" type="text" placeholder="Search for Homepage Layouts" />
    </div>
    <!-- list of homepage layouts -->
    <div :class="{updating: showForm}" class="list">
        <List :list="list" :model="model" :headings="headings" custom_css="10% 60% 20% 10%" :sortByFields="sortByFields" @documentFetched="documentFetched" @sortToggled="sortToggled" />

        <Pagination ref="pagination" :model="model" :rawCriterion="rawCriterion" @resultsFetched="resultsFetched" />
    </div>
    <!-- update homepage layouts form -->
    <div :class="{updating: showForm}" class="update">
        <UpdateHomepageLayout v-show="showForm" ref="updateComponent" @updated="updateList" :model="model" @close="showForm = false" />

        <AddNewItem v-if="!showForm" label="Homepage Layout" @showForm="showForm = true" />
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
            model: 'homepage_layouts',
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
                limit: 3
            },
            list: [],
            sortByFields: ['name', 'status'],
            headings: ['_id', 'name', 'description', 'status'],
        }
    },
    async mounted() {
        // await this.fetchList();
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
             /* add unique key to alternate sections */
            doc.alternateSections.forEach(section => section.key = uuidv4())
            this.$refs.updateComponent.populateForm(doc);
            setTimeout(() => this.populateForm(doc), 1200);    
        },
        populateForm(doc) {
            const updateComponent = this.$refs.updateComponent;
            
            /* update images (slideshow and section images) */
            if (doc.slideshow.length === 0) {
                return;
            }

            /* assign slideshow images */
            updateComponent.$refs.imageUploader.assignImages(doc.slideshow);

            /* assign alternate section images */
            let i=0;
            doc.alternateSections.forEach(section => {

                if(section.image === "") {
                    i++;
                    return;
                }
              
                /* assign image individually */
                updateComponent.$refs.alternateImageUploader[i].assignImages([{
                    _id: '',
                    mainImage:false,
                    path: section.image
                }]);

                i++;
            })
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
                description,
                status
            }) => {
                return {
                    _id,
                    name,
                    description,
                    status
                }
            });
        }
    }
}
</script>

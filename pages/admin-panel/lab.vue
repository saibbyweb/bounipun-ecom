<template>
  <div class="lab crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for Bounipun Lab layout"
      />
    </div>
    <!-- list of lab -->
    <div :class="{ updating: showForm }" class="list">
      <List
        :list="list"
        :model="model"
        :headings="headings"
        custom_css="10% 60% 20% 10%"
        :sortByFields="sortByFields"
        @documentFetched="documentFetched"
        @sortToggled="sortToggled"
      />
      <Pagination
        ref="pagination"
        :model="model"
        :rawCriterion="rawCriterion"
        @resultsFetched="resultsFetched"
      />
    </div>
    <!-- update lab form -->
    <div :class="{ updating: showForm }" class="update">
      <UpdateLab
        v-show="showForm"
        ref="updateComponent"
        @updated="updateList"
        :model="model"
        @close="showForm = false"
      />
      <AddNewItem
        v-if="!showForm"
        label="Bounipun Lab Layout"
        @showForm="showForm = true"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  layout: "admin",
  data() {
    return {
      showForm: false,
      loading: false,
      model: "lab",
      /* rawCriterion */
      rawCriterion: {
        search: {
          key: "name",
          term: "",
        },
        filters: {
          type: "default",
        },
        sortBy: {},
        limit: 20,
      },
      list: [],
      sortByFields: ["description", "status"],
      headings: ["_id", "name", "description", "status"],
    };
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
        sortBy,
      };
    },
    documentFetched(doc) {
      const updateComponent = this.$refs.updateComponent;
      this.showForm = true;
      this.editMode = true;

      updateComponent.populateForm(doc);

    },
    setSingleImage(property, doc, ref = false, key = false, lastProp='image') {
      const updateComponent = this.$refs.updateComponent;
      const refPart = !ref ? property : ref;
      if (doc[property] !== "" || doc[property] !== undefined) {
      
        const ref = `imageUploader_${refPart}`;

        let imageComp = updateComponent.$refs[ref];

        if (imageComp === undefined) {
          console.log('image comp not defined')
          return;
        }

        if (Array.isArray(imageComp)) {
          console.log("image comp is an array", ref);
          imageComp = imageComp[0];
        }

        if (imageComp === undefined) return;

        const finalPath = !key ? doc[property] : doc[property][key][lastProp]

        imageComp.assignImages([
          {
            _id: "",
            mainImage: false,
            path:finalPath,
          },
        ]);
      }
    },
    resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(({ _id, name, description, status }) => {
        return {
          _id,
          name,
          description,
          status,
        };
      });
    },
  },
};
</script>


<style lang="scss">
.update.updating {
  position: absolute;
  right:0;
  top:15vh;
  overflow-y: scroll;
  // min-height: 60vh;
  height:79vh;
  // transform: translate(-33%,0);
  width:70%;
  background-color:white;
}
</style>
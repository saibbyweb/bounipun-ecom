<template>
  <div class="collection crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for collections"
        :disabled="dragEnabled"
      />
    </div>
    <!-- list of collections -->
    <div :class="{ updating: showForm }" class="list">
      <List
        :list="list"
        :headings="headings"
        :sortByFields="sortByFields"
        :model="model"
        @documentFetched="documentFetched"
        @sortToggled="sortToggled"
        custom_css="10% 25% 15% 25% 10% 15%"
        @clearFilters="clearFilters"
        @refetchList="updateList()"
        :isDraggable="true"
      />

      <Pagination
        ref="pagination"
        :model="model"
        :rawCriterion="rawCriterion"
        @resultsFetched="resultsFetched"
      />
    </div>
    <!-- update collection form -->
    <div :class="{ updating: showForm }" class="update">
      <UpdateCollection
        v-show="showForm"
        ref="updateComponent"
        @updated="updateList"
        :model="model"
        @close="showForm = false"
      />
      <AddNewItem
        v-if="!showForm && !dragEnabled"
        label="collection"
        @showForm="showForm = true"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      showForm: false,
      loading: false,
      model: "collections",
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
        limit: 50,
      },
      sortByFields: ["name", "order", "status"],
      list: [],
      headings: [
        "_id",
        "name",
        "Slug",
        "Product Count",
        "order",
        "status",
      ],
      dragEnabled: false,
      productCount: null,
    };
  },
  mounted() {
    // this.fetchList();
    this.fetchProductCount();
  },
  methods: {
    async fetchProductCount() {
      const count = await this.$post("/fetchProductCountPerCollection");
      if (count.resolved == false) return;
      this.productCount = count.response;
    },
    clearFilters(dragEnabled) {
      this.dragEnabled = dragEnabled;

      this.rawCriterion.filters = {
        type: "default",
      };

      this.rawCriterion.search.term = "";
    },
    updateList() {
      this.$refs.pagination.fetchResults();
    },
    sortToggled(sortBy) {
      // console.log(sortBy);
      this.rawCriterion = {
        ...this.rawCriterion,
        sortBy,
      };
    },
    assignImages(ref, image) {
      if (image === "" || image === undefined) return;
      setTimeout(() => {
        this.$refs.updateComponent.$refs[ref].assignImages([
          {
            _id: "",
            mainImage: false,
            path: image,
          },
        ]);
      }, 1200);
    },
    documentFetched(doc) {
      this.showForm = true;
      this.editMode = true;
      this.$refs.updateComponent.populateForm(doc);

      this.assignImages("imageUploader", doc.image);
      this.assignImages("lockedImageUploader", doc.lockedImage);

      if(doc.lockedImages)
        setTimeout(() => this.$refs.updateComponent.$refs['lockedImagesUploader'].assignImages(doc.lockedImages),1000);
    },
    resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      const work = () => {
        console.log('work called')
        /* extract list */
        this.list = result.docs.map(
          ({
            _id,
            name,
            slug,
            // description,
            // edt,
            order,
            status,
          }) => {
            return {
              _id,
              name,
              slug,
              count: this.productCount[_id],
              // description,
              // edt: edt + " weeks",
              order,
              status,
            };
          }
        );
      };


      const timer = setInterval(() => {
        if(this.productCount === null) {
          return;
        }
        work();
        clearInterval(timer);
      },150);

    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="product-lists crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <!-- <SelectBox :options="searchBy" v-model="rawCriterion.search.key" label="Search By"/> -->
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for Product Lists"
      />
    </div>
    <!-- list of product lists -->
    <div :class="{ updating: showForm }" class="list">
      <List
        :list="list"
        :model="model"
        :headings="headings"
        custom_css="10% 40% 25% 25%"
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
    <!-- update fabrics form -->
    <div :class="{ updating: showForm }" class="update">
      <UpdateProductList
        v-show="showForm"
        ref="updateComponent"
        @updated="updateList"
        :model="model"
        @close="showForm = false"
      />
      <AddNewItem
        v-if="!showForm"
        label="Product List"
        @showForm="showForm = true"
      />
    </div>
  </div>
</template>

<script>
import updateCRUD from "../../components/admin/updateCRUD.js";

export default {
  mixins: [updateCRUD],
  layout: "admin",
  data() {
    return {
      showForm: false,
      loading: false,
      model: "product_lists",
      // searchBy: [{name: "List Name", value: "name"}, {name: "Code", value: "code"}],
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
      sortByFields: ["name"],
      headings: ["_id", "name", "Total Products", "Page Visibility"],
    };
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
      this.rawCriterion = { ...this.rawCriterion, sortBy };
    },
    documentFetched(doc) {
      this.showForm = true;
      this.editMode = true;
      this.$refs.updateComponent.populateForm(doc);
      this.assignImages("imageUploader", doc.image);
      this.assignImages("lockedImageUploader", doc.lockedImage);
    },
    resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(({ _id, name, list, status }) => {
        const totalProducts = list.length;

        return {
          _id,
          name,
          totalProducts,
          status,
        };
      });
    },
  },
};
</script>

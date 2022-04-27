<template>
  <div class="popup crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for Payment Links"
      />
    </div>
    <!-- list of payment links -->
    <div :class="{ updating: showForm }" class="list">
      <List
        :list="list"
        :model="model"
        :headings="headings"
        :sortByFields="sortByFields"
        custom_css="10% 35% 20% 35%"
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
    <!-- update payment links -->
    <div :class="{ updating: showForm }" class="update">
      <UpdatePaymentLink
        v-show="showForm"
        ref="updateComponent"
        @updated="updateList"
        :model="model"
        @close="showForm = false"
      />
      <AddNewItem v-if="!showForm" label="Payment Link" @showForm="showForm = true" />
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
      model: "paymentlink",
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
      sortByFields: [
        "name",
        "description",
        "status",
      ],
      headings: [
        "_id",
        "name",
        "description",
        "status",
      ],
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
      this.showForm = true;
      this.editMode = true;
      this.$refs.updateComponent.populateForm(doc);
    //   this.assignImages("imageUploader", doc.image);
    },
    resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(
        ({ _id, name, description, status }) => {
          return {
            _id,
            name,
            description,
            status,
          };
        }
      );
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
  },
};
</script>
<template>
  <div class="orders crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for Orders"
      />
    </div>
    <!-- list of orders -->
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
    <!-- update sales form -->
    <div :class="{ updating: showForm }" class="update">
      <UpdateOrder
        v-show="showForm"
        ref="updateComponent"
        @updated="updateList"
        :model="model"
        @close="showForm = false"
      />
      <!-- <AddNewItem v-if="!showForm" label="Order" @showForm="showForm = true" /> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      showForm: false,
      model: "orders",
      rawCriterion: {
        search: {
          key: "number",
          term: ""
        },
        filters: {
          type: "default"
        },
        sortBy: {},
        limit: 20
      },
      list: [],
      sortByFields: ["number, status"],
      headings: ["_id", "number", "amount", "status"]
    };
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
      };
    },
    documentFetched(doc) {
      this.showForm = true;
      this.editMode = true;
      this.$refs.updateComponent.populateForm(doc);
    },
    resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(({ _id, number, amount, status }) => {
        return {
          _id,
          number,
          amount,
          status
        };
      });
    }
  }
};
</script>

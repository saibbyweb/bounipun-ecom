<template>
  <div class="messages crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for Message"
      />
    </div>
    <!-- list of messages -->
    <div :class="{ updating: showForm }" class="list">
      <List
        :list="list"
        :model="model"
        :headings="headings"
        custom_css="10% 15% 30% 20% 15% 10%"
        :sortByFields="sortByFields"
        @documentFetched="documentFetched"
        @sortToggled="sortToggled"
        @clearFilters="clearFilters"
        @refetchList="updateList()"
        :isDraggable="false"
      />

      <Pagination
        ref="pagination"
        :model="model"
        :rawCriterion="rawCriterion"
        @resultsFetched="resultsFetched"
      />
    </div>
    <!-- update message form -->
    <div :class="{ updating: showForm }" class="update">
      <UpdateMessage
        v-show="showForm"
        ref="updateComponent"
        @updated="updateList"
        :model="model"
        @close="showForm = false"
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
      model: "message",
      /* rawCriterion */
      rawCriterion: {
        search: {
          key: "subject",
          term: ""
        },
        filters: {
          type: "default"
        },
        sortBy: {},
        limit: 20
      },
      list: [],
      sortByFields: ["name", "email", "read"],
      headings: ["_id", "name", "email", "subject", "createdAt", "read"],
      dragEnabled: false
    };
  },
  async mounted() {
    // await this.fetchList();
  },
  methods: {
    clearFilters(dragEnabled) {
      this.dragEnabled = dragEnabled;

      this.rawCriterion.filters = {
        type: "default"
      };

      this.rawCriterion.search.term = "";
    },
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
    async resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(({ _id, name, email, subject, createdAt, read }) => {
        return {
          _id,
          name,
          email,
          subject,
          createdAt: this.$formatDate(createdAt),
          read
        };
      });
    }
  }
};
</script>

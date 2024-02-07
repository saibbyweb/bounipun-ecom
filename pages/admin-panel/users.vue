<template>
  <div class="users crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for User"
      />
    </div>
    <!-- list of users -->
    <div :class="{ updating: showForm }" class="list">
      <List
        :list="list"
        :model="model"
        :headings="headings"
        custom_css="5% 10% 10% 10% 15% 10% 20% 10% 10%"
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
    <!-- update user form -->
    <div :class="{ updating: showForm }" class="update">
      <UpdateUser
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
      model: "users",
      /* rawCriterion */
      rawCriterion: {
        search: {
          key: "firstName",
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
        "firstName",
        "surName",
        "usergroup",
        "countryIsoCode",
        "viewCount",
        "lastSeen",
        "status",
      ],
      headings: [
        "_id",
        "firstName",
        "surName",
        "usergroup",
        "countryIsoCode",
        "viewCount",
        "lastSeen",
        "cartCount",
        "status",
      ],
      dragEnabled: false,
    };
  },
  async mounted() {
    // await this.fetchList();
  },
  methods: {
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
    },
    async resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(
        ({
          _id,
          firstName,
          surName,
          usergroup,
          countryIsoCode,
          viewCount,
          lastSeen,
          status,
          cart,
        }) => {
          return {
            _id,
            firstName,
            surName,
            usergroup,
            countryIsoCode,
            viewCount: viewCount || 0,
            lastSeen: lastSeen ? this.$formatDate(lastSeen) : "N/A",
            cartCount: cart ? cart.length : 0,
            status,
          };
        }
      );
    },
  },
};
</script>

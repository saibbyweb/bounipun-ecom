<template>
  <div class="currency crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for Currency"
      />
    </div>
    <!-- list of faqs -->
    <div :class="{ updating: showForm }" class="list">
      <List
        :list="list"
        :model="model"
        :headings="headings"
        custom_css="10% 30% 10% 15% 15% 20%"
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
    <!-- update faq form -->
    <div :class="{ updating: showForm }" class="update">
      <UpdateCurrency
        v-show="showForm"
        ref="updateComponent"
        @updated="updateList"
        :model="model"
        @close="showForm = false"
      />
      <AddNewItem
        v-if="!showForm"
        label="Currency"
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
      model: "currency",
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
      sortByFields: ["name", "adminEnabled", "clientEnabled"],
      headings: [
        "_id",
        "name",
        "code",
        "adminEnabled",
        "clientEnabled",
        "exchangeRateINR",
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
    },
    resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(
        ({ _id, name, code, adminEnabled, clientEnabled, exchangeRateINR }) => {
          return {
            _id,
            name,
            code,
            adminEnabled,
            clientEnabled,
            exchangeRateINR,
          };
        }
      );
    },
  },
};
</script>

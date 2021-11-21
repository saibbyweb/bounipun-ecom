export default {
  data(searchKey, headings, sortByFields) {
    return {
      showForm: false,
      loading: false,
      list: [],
      /* rawCriterion */
      rawCriterion: {
        search: {
          key: searchKey,
          term: "",
        },
        filters: {
          type: "default",
        },
        sortBy: {},
        limit: 20,
      },
      headings,
      sortByFields,
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
        sortBy,
      };
    },
    resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(doc => {
          const item = {};
          this.headings.forEach(heading => item[heading] = doc[heading])
          return item;
      });
      
    },
  },
};

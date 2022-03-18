<template>
  <div class="products crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <SelectBox
        :options="searchBy"
        v-model="rawCriterion.search.key"
        label="Search By"
         :disabled="dragEnabled"
      />
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for Products"
         :disabled="dragEnabled"
      />
      <SelectBox
        :options="productTypes"
        v-model="rawCriterion.filters.type"
        label="Filter By"
         :disabled="dragEnabled"
      />
      <!-- collections filter -->
      <SelectBox
        :options="collections"
        v-model="rawCriterion.filters.bounipun_collection"
        label="Collection"
      />
      <!-- availability type -->
      <SelectBox
        :options="availabilityTypes"
        v-model="rawCriterion.filters.availabilityType"
        label="Availability"
         :disabled="dragEnabled"
      />
    </div>

    <!-- list of products -->
    <div :class="{ updating: showForm }" class="list">
      <List
        ref="list"
        :list="list"
        :model="model"
        :actions="actions"
        :headings="headings"
        custom_css="5% 10% 17% 8% 11% 10% 10% 15% 6% 8%"
        :sortByFields="sortByFields"
        @documentFetched="documentFetched"
        @sortToggled="sortToggled"
        @updated="updateList"
        :isDraggable="true"
        @clearFilters="clearFilters"
        @refetchList="updateList()"
        :requiredFilterSet="bounipunFilterSet"
        dragMessage="Select a collection first & then drag items to adjust the order of products."
      />
      <Pagination
        ref="pagination"
        :model="model"
        :rawCriterion="rawCriterion"
        @resultsFetched="resultsFetched"
      />
    </div>

    <!-- update products form -->
    <div :class="{ updating: showForm }" class="update">
      <UpdateProduct
        v-if="showForm"
        ref="updateComponent"
        @updated="updateList"
        :model="model"
        @close="showForm = false"
        :collections="collections"
        :variants="variants"
        :fabrics="fabrics"
        @resetVariants="resetVariants"
      />

      <AddNewItem
        v-if="!showForm"
        label="Product"
        @showForm="showForm = true"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import CurrencyHelper from "../../helpers/currencyHelper.js";
export default {
  mixins: [CurrencyHelper],
  layout: "admin",
  data() {
    return {
      showForm: false,
      loading: false,
      model: "products",
      /* product types */
      productTypes: [
        {
          name: "All Products",
          value: "default",
        },
        {
          name: "Under Bounipun",
          value: "under-bounipun",
        },
        {
          name: "Third Party",
          value: "third-party",
        },
      ],
      /* collections */
      searchBy: [
        {
          name: "Product Name",
          value: "name",
        },
        {
          name: "Style ID",
          value: "styleId",
        },
      ],
      availabilityTypes: [
        {
          name: "Select Type",
          value: "default",
        },
        {
          name: "Ready To Ship",
          value: "ready-to-ship",
        },
        {
          name: "Made To Order",
          value: "made-to-order",
        },
      ],
      /* rawCriterion */
      rawCriterion: {
        search: {
          key: "name",
          term: "",
        },
        filters: {
          type: "default",
          bounipun_collection: "default",
          availabilityType: "default",
        },
        sortBy: {
          styleId: {
            active: true,
            order: 1,
          },
        },
        limit: 15,
      },
      list: [],
      headings: [
        "_id",
        "styleId",
        "name",
        "colors",
        "preview",
        "availabilityType",
        "Collection",
        "price (range)",
        "order",
        "status",
      ],
      sortByFields: ["name", "styleId", "availabilityType", "order", "status"],
      collections: [],
      variants: [],
      fabrics: [],
      actions: [
        {
          name: "Mark as Active",
          type: "active",
        },
        {
          name: "Mark as Inactive",
          type: "inactive",
        },
        {
          name: "Club RTS",
          type: "club-rts",
        },
        {
          name: "Split RTS",
          type: "split-rts",
        },
      ],
      dragEnabled: false,
      bounipunFilter: "default"
    };
  },
  watch: {
    rawCriterion: {
      handler(newVal) {
        this.bounipunFilter = newVal.filters.bounipun_collection
      },
      deep: true
    }
  },
  computed: {
    bounipunFilterSet() {
      return this.bounipunFilter !== "default"
    }
  },
  async mounted() {
    await this.fetchBounipunCollections();
    await this.fetchVariants();
    await this.fetchFabrics();
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
    clearFilters(dragEnabled) {
      this.dragEnabled = dragEnabled;

      this.rawCriterion.filters = {
          type: "default",
          bounipun_collection: "default",
          availabilityType: "default",
      }

      this.rawCriterion.search.term = "";
      this.rawCriterion.limit = dragEnabled ? 100 : 15;
    },
    async fetchFabrics() {
      const result = await this.$fetchCollection("fabrics");
      this.fabrics = result.docs.map(({ _id, name, code, info1 }) => {
        return {
          name,
          value: _id,
          code,
          info1,
          _id,
          checked: false,
          price: "",
          pricing: {},
        };
      });
    },
    async fetchVariants() {
      const result = await this.$fetchCollection("variants", "admin");
      this.variants = result.docs.map(({ _id, name, code, category }) => {
        return {
          name,
          _id,
          code,
          category,
          value: _id,
          checked: false,
        };
      });
    },
    resetVariants() {
      this.variants.forEach((variant) => (variant.checked = false));
    },
    async fetchBounipunCollections() {
      const result = await this.$fetchCollection("collections");

      this.collections = result.docs.map(
        ({ _id, name, inflationPercentage, slug }) => {
          return {
            name,
            value: _id,
            inflationPercentage,
            slug,
          };
        }
      );

      this.collections.unshift({
        name: "Select Collection",
        value: "default",
        inflationPercentage: 0,
      });

      /* update collection name in list */
      if (this.list.length === 0) return;

      this.list = this.list.map((item) => {
        const foundCollection = this.collections.find(
          (col) => col.value === item.bounipun_collection
        );

        const bounipun_collection =
          foundCollection !== undefined ? foundCollection.name : "Third Party";
        item.bounipun_collection =
          item.type !== "third-party" ? bounipun_collection : "N/A";
        return item;
      });
    },
    documentFetched(doc) {
      this.showForm = true;
      this.editMode = true;
      console.log(doc, "--fetched document");
      setTimeout(() => this.populateForm(doc), 1500);
    },
    /* populate form */
    populateForm(doc) {
      const updateComponent = this.$refs.updateComponent;
      updateComponent.populateForm(doc);

      /* if colors are present */
      if (doc.colors.length !== 0) {
        /* add unique key to all colors */
        doc.colors.forEach((color) => {
          color.key = uuidv4();
          // color.mainColor = false;
        });

        /* if color source is bounipun colors */
        if (doc.colorSource === "bounipun-colors") {
          updateComponent.$refs.colorPicker.populateColorSelection(doc.colors);
        }
      }

      /* assign images */
      setTimeout(() => {
        let i = 0;
        doc.colors.forEach((color) => {
          if (color.images.length === 0) {
            i++;
            return;
          }
          updateComponent.$refs.imageUploader[i].assignImages(color.images);
          i++;
        });
      }, 10);

      /* need to check variants length */
      if (doc.variants.length === 0) return;
      /* populate variants */

      updateComponent.populateVariants(doc.variants);

      /* populate fabrics */
      setTimeout(() => {
        let x = 0;
        doc.variants.forEach((variant) => {
          if (variant.fabrics.length === 0) {
            return;
          }
          const fabricRef = `fabricSelector${variant._id}`;
          const fabricSelector = updateComponent.$refs[fabricRef];
          fabricSelector[0].populateFabricSelection(variant);
        });
      }, 13);
    },
    resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(
        ({
          _id,
          styleId,
          name,
          //slug,
          colors,
          availabilityType,
          bounipun_collection,
          priceRange,
          order,
          status,
        }) => {
          /* resolve category name */
          if (this.collections.length !== 0) {
            const foundCollection = this.collections.find(
              (col) => col.value === bounipun_collection
            );
            bounipun_collection =
              foundCollection !== undefined
                ? foundCollection.name
                : "NOT AVAILABLE";
          }

          /* active colors */
          const activeColors = colors.filter((color) => color.status);

          let fullPreviewImagePath = "";

          try {
            const previewImage = colors[0].images[0].path;
            console.log(previewImage);
            fullPreviewImagePath = this.$getOriginalPath(previewImage);
          } catch (e) {
            console.log("something went wrong");
          }

          /* calculate price range */
          let priceRangeValue = '';
          if(priceRange.startAt === priceRange.endsAt)
            priceRangeValue = this.formatCurrency(priceRange.startAt,"INR",0);
          else
            priceRangeValue = this.formatCurrency(priceRange.startsAt,"INR",0) + " - " + this.formatCurrency(priceRange.endsAt,"INR",0);

          return {
            _id,
            styleId,
            name,
            colors: `🟢 ${activeColors.length} /  ${colors.length}`,
            preview: fullPreviewImagePath,
            //slug,
            availabilityType,
            // bounipun_collection: foundCollection !== undefined ? foundCollection.name : "Third Party",
            bounipun_collection:
              bounipun_collection !== "" && bounipun_collection !== undefined
                ? bounipun_collection
                : "N/A",
            priceRangeValue,
            order: order === undefined ? 'N/A' : order,
            status,
          };
        }
      );
    },
  },
};
</script>

<template>
  <!-- list -->
  <div class="list flex end">
    <div class="inner">
      <button
        v-if="isDraggable"
        class="action shadow"
        @click="dragEnabled = !dragEnabled"
      >
        Toggle Drag
      </button>
      <span v-if="dragEnabled" style="font-size: 14px">
        {{ dragMessage }}
      </span>

      <!-- action bar -->
      <div v-if="selectedList.length > 0" class="action-bar">
        <div class="actions flex">
          <button
            class="action"
            v-for="action in actions"
            :key="action.type"
            @click="takeBulkAction(action.type)"
          >
            {{ action.name }}
          </button>
          <button class="action" @click="clearSelection">
            Clear Selection (
            {{ selectAll ? totalMatches : selectedList.length }} items)
          </button>
        </div>
      </div>

      <!-- headings -->
      <div class="item shadow headings" :style="adjustItem()">
        <!-- select all -->
        <div class="selector">
          <input
            ref="selectAll"
            class="check"
            type="checkbox"
            @click.stop="toggleSelectAll()"
          />
        </div>
        <div
          class="span heading"
          v-for="(heading, index) in headings"
          :key="heading + index"
        >
          {{ heading }}
          <img
            @click="toggleSort(heading)"
            class="sortable"
            v-if="isSortable(heading)"
            src="/icons/light/sort.png"
          />
        </div>
      </div>
      <client-only>
        <Draggable
          v-model="localList"
          ghost-class="ghost"
          @end="onDragEnd"
          :sort="isDraggable && dragEnabled"
        >
          <transition-group type="transition" name="flip-list">
            <div
              @click="select(item, index)"
              :class="{ selected: isSelected(index), dragEnabled }"
              class="item shadow"
              v-for="(item, index) in localList"
              :key="item._id + Math.random(index)"
              :style="adjustItem()"
            >
              <!-- selector -->
              <div class="selector">
                <input
                  ref="selectCheckbox"
                  class="check"
                  type="checkbox"
                  :class="{ selectAll }"
                  :checked="
                    selectedList.findIndex((id) => id === item._id) !== -1
                  "
                  @click.stop="toggleSelect(item._id)"
                />
              </div>

              <div
                class="span"
                :class="setClasses(propIndex, value)"
                v-for="(value, propIndex) in Object.values(item)"
                :key="value + propIndex"
              >
                <img
                  style="height: 70px"
                  v-if="typeof value === 'string' && value.startsWith('https')"
                  :src="value"
                />
                <span v-else> {{ optimizeValue(value, propIndex) }}</span>
              </div>
            </div>
          </transition-group>
        </Draggable>
      </client-only>
    </div>

    <div
      v-if="showUpdateToast"
      style="
        position: fixed;
        width: 100%;
        height: 10%;
        bottom: 5%;
        left: 0;
        z-index: 3;
      "
    >
      <Toast :show="showUpdateToast" msg="Bulk Action Complete" />
    </div>
  </div>
</template>

<script>
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    headings: {
      type: Array,
      default: () => [],
    },
    list: {
      type: Array,
      default: () => [{}],
    },
    custom_css: {
      type: String,
      default: "",
    },
    model: {
      type: String,
      default: "",
    },
    sortByFields: {
      type: Array,
      default: () => [],
    },
    isDraggable: {
      type: Boolean,
      default: false,
    },
    actions: {
      type: Array,
      default: () => [],
    },
    dragMessage: {
      type: String,
      default: "You can now drag the items and adjust the order",
    },
    requiredFilterSet: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    sortByFields() {
      this.constructSortBy();
    },
    dragEnabled(newVal) {
      /* clear all filters and sort (no pagination mode) */
      this.selected = null;
      this.sortBy["order"].order = -1;
      this.toggleSort("order");
      this.$emit("clearFilters", newVal);
      this.sortDisabled = newVal;
    },
    list(newVal) {
      this.localList = newVal;
      this.selected = null;
      if (this.selectAll) this.toggleSelectAll(true);
    },
  },
  mounted() {
    this.constructSortBy();
  },
  data() {
    return {
      selected: null,
      selectAll: false,
      loading: false,
      sortBy: {},
      dragEnabled: false,
      disableSort: false,
      localList: [],
      dragUpdateEndpoint: "/updateOrder",
      selectedList: [],
      v4: uuidv4,
      showUpdateToast: false,
    };
  },
  computed: {
    columns() {
      const colLength = this.headings.length;
      let colCSS = "auto",
        i = 1;
      while (i < colLength) {
        colCSS += " auto";
        i++;
      }
      return colCSS;
    },
    totalMatches() {
      const totalMatches = this.$parent.$refs?.pagination?.totalMatches;
      return totalMatches ? totalMatches : 0;
    },
  },
  methods: {
    clearSelection() {
      this.selectedList = [];
      this.selectAll = false;
      /* check all visible boxes */
      this.$refs.selectAll.checked = false;
      this.$refs.selectCheckbox.forEach(
        (checkbox) => (checkbox.checked = false)
      );
    },
    toggleSelectAll(preSelected = false) {
      this.selectAll = preSelected === false ? !this.selectAll : preSelected;
      this.selectedList = this.selectAll ? ["updateAll"] : [];
      /* check all visible boxes */
      setTimeout(() => {
        this.$refs.selectCheckbox.forEach(
          (checkbox) => (checkbox.checked = this.selectAll)
        );
      }, 200);
    },
    async takeBulkAction(type) {
      let allIds = [];

      /* if selcet all was selected */
      if (this.selectAll) {
        /* fetch current raw criterion */
        const rawCriterion = this.$parent.$refs.pagination.rawCriterionComputed;
        rawCriterion.limit = 999999;

        /* fetch all results matching the criterion */
        const paginatedResults = await this.$fetchPaginatedResults(
          this.model,
          rawCriterion,
          "default"
        );

        /* if not results found */
        if (!paginatedResults.fetched || paginatedResults.docs.length === 0) {
          return;
        }

        /* map all ids  */
        const { docs } = paginatedResults;
        allIds = docs.map(({ _id }) => _id);
      }

      const finalIds = this.selectAll ? allIds : this.selectedList;

      if (this.model === "products" && type === "set-higher-order") {
        this.$emit("setHigherOrder", finalIds);
        return;
      }

      const request = await this.$post("/takeBulkAction", {
        _ids: finalIds,
        model: this.model,
        type,
      });

      if (request.resolved === false) {
        alert("Bulk operation failed.");
        console.log("Update Failed");
        return;
      }

      console.log("Update probably succeeded", request);

      /* if rts club */
      if (request.response?.clubbedProduct) {
        await this.$updateDocument(
          "products",
          request.response.clubbedProduct,
          false
        );
      } else if (request.response?.splittedProducts) {
        for (const newProduct of request.response.splittedProducts) {
          await this.$updateDocument("products", newProduct, false);
        }
      }

      this.showUpdateToast = true;
      setTimeout(() => (this.showUpdateToast = false), 2000);
      // refetch list
      this.$emit("updated");
    },
    toggleSelect(_id) {
      if (this.selectAll) {
        console.log("SELECT ALL ALREADY CLICKED");
        return;
      }

      //if id is not already present in the list, push it in, else pop it out
      const foundIndex = this.selectedList.findIndex((id) => id === _id);
      if (foundIndex === -1) this.selectedList.push(_id);
      else this.selectedList.splice(foundIndex, 1);
    },
    async onDragEnd($event) {
      console.log("ON DRAG END WAS CALLED");

      if (!this.dragEnabled) return;

      /* get the order of the whole array */
      let newList = this.localList.map((item, index) => ({
        _id: item._id,
        newOrder: index,
      }));

      /* if model is products */
      if (this.model === "products") {
        switch (this.requiredFilterSet) {
          case true:
            console.log("you can proceed");
            break;
          case false:
            alert("Select a Collection First");
            return;
        }
      }

      /* set the order accordingly */
      const updateOrder = this.$axios.$post(this.dragUpdateEndpoint, {
        model: this.model,
        newList,
      });
      /* wait for request to resolve */
      this.$store.commit("customer/setLoading", true);
      const { response, error } = await this.$task(updateOrder);
      this.$store.commit("customer/setLoading", false);

      if (error) {
        console.log("could not update order");
        return;
      }

      /* refresh list */
      this.$emit("refetchList");
    },
    toggleSort(key) {
      if (this.sortDisabled) return;

      const field = this.sortBy[key];

      const sortBy = this.sortBy;
      Object.keys(sortBy).forEach(function (key) {
        sortBy[key].active = false;
      });

      field.active = true;
      field.order = field.order === 1 ? -1 : 1;
      this.$emit("sortToggled", this.sortBy);
    },
    constructSortBy() {
      console.log("CONSTRUCTED");
      /* flush old data, if any */
      this.sortBy = {};
      /* for each key, create a object which holds sort state */
      this.sortByFields.forEach((field) => {
        this.sortBy[field] = {
          order: 1,
          active: false,
        };
      });

      /*  set default sort */
      if (this.model === "products") {
        this.sortBy["styleId"].order = -1;
        this.sortBy["styleId"].active = true;
      }
    },
    optimizeValue(value, propIndex) {
      if (typeof value === "boolean") {
        switch (this.headings[propIndex]) {
          case "read":
            return value ? "✅ Read" : "💬 Unread";
          case 'paid':
            return value ? "✅ Paid" : "💳 Unpaid"
        }

        return value ? "Active" : "Inactive";
      }
      return value;
    },
    isSortable(field) {
      return this.sortByFields.findIndex((key) => field === key) !== -1;
    },
    isSelected(index) {
      return this.selected === index;
    },
    async select(item, index) {
      if (this.dragEnabled) return;

      this.selected = index;
      this.loading = true;

      const result = await this.$fetchDocument(this.model, item._id, "admin");
      this.loading = false;

      if (!result.fetched) {
        return;
      }

      this.$emit("documentFetched", result.doc);
    },
    setClasses(propIndex, value) {
      /* slugify column heading and set as class name */
      let classes = [];
      const heading = this.headings[propIndex];

      if (typeof heading === 'string') {
        const slugifiedHeading = slugify(heading, {
          lower: true,
        });
        classes.push(slugifiedHeading);
        /* if status column, slugify the value and set it as class name for color coding */
        if (slugifiedHeading === "status") {
          // const slugifiedValue = slugify(value, {
          //     lower: true
          // });
          // classes.push(slugifiedValue);
        }
      } else {
        // If heading is not a string, use a safe default class
        classes.push('column-' + propIndex);
      }
  
      return classes;
    },
    adjustItem() {
      if (this.custom_css !== "")
        return {
          "grid-template-columns": this.custom_css,
        };
      return {
        "grid-template-columns": this.columns,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  position: relative;
}

@keyframes slide {
  0% {
    margin-bottom: -10%;
  }

  100% {
    margin-bottom: 0%;
  }
}

.inner {
  width: 97%;

  .action-bar {
    // height:8%;
    animation: slide 0.3s;
    transition: all 0.3s ease-in-out;
    padding-bottom: 5px;
    border-bottom: 1px solid #efefef;

    .text {
      font-size: 13px;
    }

    .action {
      padding: 3px 9px;
      margin: 2px;
      font-size: 12px;
      font-family: $font_1;
      text-transform: capitalize;
      background-color: rgb(91, 91, 190);

      &:hover {
        background-color: rgb(76, 76, 247);
        padding: 3px 11px;
      }
    }
  }
}
.item-drag {
  opacity: 0;
}

.flip-list-move {
  transition: all 0.5s ease-in-out;
}

.ghost {
  opacity: 0;
}

.item {
  margin: 10px 0;
  display: grid;
  position: relative;
  // grid-template-columns: 25% 20% 20% 15% 10% 10%;
  // grid-template-columns: auto auto auto;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  .selector {
    position: absolute;
    left: -4%;
    top: 20%;

    .check {
      height: 15px;
      width: 15px;
      cursor: pointer;

      &.selectAll {
        background-color: rgb(91, 91, 190);
        pointer-events: none;
      }
    }
  }

  &.selected {
    background-color: rgb(35, 148, 92) !important;

    span {
      color: white;
    }
  }

  &.headings {
    background-color: #492727;

    .heading {
      color: #efefef;
      font-weight: 900;
      font-family: $font_1;
      text-transform: uppercase;

      .sortable {
        width: 14px;
      }
    }

    &:hover {
      background-color: #492727;
      transform: translateX(0px);
    }
  }

  &:hover {
    background-color: rgb(96, 96, 96);
    transform: translateX(4px);

    span {
      color: white;
    }
  }

  &.dragEnabled:hover {
    background-color: rgb(255, 255, 255);
    transform: translateX(0px);

    span {
      color: #333333;
    }
  }

  div.span {
    transition: all 0.3s ease-in-out;
    border-right: 1px solid #cbcbcb;
    overflow: hidden;
    font-size: 12.5px;
    padding: 5px;
    font-family: $font_2;

    &._id {
      font-size: 8px;
      word-wrap: break-word;
    }

    &.status {
      border-right: none;
      // color: white;

      &.live {
        background-color: green;
      }

      &.not-live {
        background-color: rgb(154, 56, 8);
      }
    }
  }
}
</style>

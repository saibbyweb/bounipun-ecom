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
      <span v-if="dragEnabled">
        You can now drag the items and adjust the order.
      </span>

      <!-- action bar -->
      <div v-if="selectedList.length > 0" class="action-bar">
        <p> {{ selectedList.length }} Selected </p>
        <div class="actions">
          <button class="action">Set as Active</button>
          <button class="action">Set as Inactive</button>
          <button class="action" @click="selectedList = []"> Clear Selection </button>
        </div>
      </div>

      <!-- headings -->
      <div class="item shadow headings" :style="adjustItem()">
        <span class="heading" v-for="(heading, index) in headings" :key="index">
          {{ heading }}
          <img
            @click="toggleSort(heading)"
            class="sortable"
            v-if="isSortable(heading)"
            src="/icons/light/sort.png"
          />
        </span>
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
              :key="item._id+index"
              :style="adjustItem()"
            >
              <!-- selector -->
              <div class="selector">
                <input
                  class="check"
                  type="checkbox"
                  :checked="selectedList.findIndex(id => id === item._id) !== -1"
                  @click.stop="toggleSelect(item._id)"
                />
              </div>

              <span
                :class="setClasses(propIndex, value)"
                v-for="(value, propIndex) in Object.values(item)"
                :key="value + propIndex"
              >
                {{ optimizeValue(value, propIndex) }}
              </span>
            </div>
          </transition-group>
        </Draggable>
      </client-only>
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
    },
  },
  mounted() {
    this.constructSortBy();
  },
  data() {
    return {
      selected: null,
      loading: false,
      sortBy: {},
      dragEnabled: false,
      disableSort: false,
      localList: [],
      dragUpdateEndpoint: "/updateOrder",
      selectedList: [],
      v4: uuidv4,
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
  },
  methods: {
    toggleSelect(_id) {
      console.log(_id)
      //if id is not already present in the list, push it in, else pop it out
      const foundIndex = this.selectedList.findIndex((id) => id === _id);
      if (foundIndex === -1) this.selectedList.push(_id);
      else this.selectedList.splice(foundIndex, 1);

    },
    async onDragEnd($event) {
      if (!this.dragEnabled) return;

      /* get the order of the whole array */
      let newList = this.localList.map((item, index) => ({
        _id: item._id,
        newOrder: index,
      }));
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
    },
    optimizeValue(value, propIndex) {
      if (typeof value === "boolean") {
        switch (this.headings[propIndex]) {
          case "read":
            return value ? "Read" : "Unread";
            break;
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
.inner {
  width: 97%;

  .action-bar {
    .action {
      padding: 5px 9px;
      margin: 2px;
      font-size: 13px;
      font-family: $font_1;
      text-transform: capitalize;
      background-color: rgb(91, 91, 190);

      &:hover {
        background-color: rgb(76, 76, 247);
        padding: 5px 11px;
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

  span {
    transition: all 0.3s ease-in-out;
    border-right: 1px solid #cbcbcb;
    overflow: hidden;
    font-size: 13px;
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

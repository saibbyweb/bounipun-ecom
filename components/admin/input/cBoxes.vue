<template>
  <div class="checkboxes-container">
    <label class="label"> {{ label }} </label>
    <!-- <div class="checkboxes center">
      <div
        class="checkbox center-col"
        v-for="(option, index) in options"
        :key="index"
      >
        <input
          class="check-input"
          type="checkbox"
          :value="option.value"
          v-model="option.checked"
        />
        <label class="label"> {{ option.name }} </label>
      </div>
    </div> -->

    <!-- next level -->
    <div v-for="category in categories" :key="category">
      <!-- category -->
      <!-- <span> Category Name: {{ category }} </span> -->
      <Accordion :heading="category" :expanded="categoriesCheckedMap[category]">
        <div class="checkboxes center">
          <div
            class="checkbox center-col"
            v-for="(option, index) in getOptionsUnderCategory(category)"
            :key="index"
          >
            <input
              class="check-input"
              type="checkbox"
              :value="option.value"
              v-model="option.checked"
            />
            <label class="label"> {{ option.name }} </label>
          </div>
        </div>
      </Accordion>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    selectedCollection: String,
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    categories() {
      const uniqueCategories = new Set(this.options.map((op) => op.category));
      if(this.selectedCollection !== "wall-art" && this.selectedCollection !== "connoisseur-wall-art") {
        return [...uniqueCategories].filter(cat => cat.startsWith("Decor") === false)
      }
      return [...uniqueCategories].filter(cat => cat.toUpperCase() !== "SCARFS")
    },
    categoriesCheckedMap() {
      let map = {};

      this.categories.forEach((cat) => {
        map[cat] = this.ifAnyOptionIsChecked(cat);
      })
      return map;
    },
  },
  methods: {
    getOptionsUnderCategory(category) {
      return this.options.filter((op) => op.category === category);
    },
    ifAnyOptionIsChecked(category) {
      const options = this.getOptionsUnderCategory(category);
      return options.some((op) => op.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkboxes-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2%;
  width: 100%;

  .label {
    font-family: $font_2_bold;
    color: $gray;
    text-transform: uppercase;
    font-size: 10px;
    padding: 1%;
    margin-left: 5px;
    font-weight: 900;
    padding-bottom: 20px;
  }

  .checkboxes {
    box-sizing: border-box;
    flex-wrap: wrap;
    padding: 1%;
    width: 100%;

    .checkbox {
      padding: 10px 15px;
      margin: 10px;
      width: 14%;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);

      .label {
        font-family: $font_2_bold;
        color: $gray;
        text-transform: uppercase;
        font-size: 9px;
        padding: 1%;
        margin-top: 7px;
        font-weight: 900;
        text-align: center;
      }

      .check-input {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>

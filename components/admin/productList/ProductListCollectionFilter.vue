<template>
  <div class="wrapper">
    <div
      v-for="collection in collections"
      :key="collection._id"
      class="checkbox-container"
    >
      <input
        type="checkbox"
        :id="collection._id"
        :value="collection._id"
        v-model="selectedCollections[collection._id]"
        class="checkbox"
      />
      <label :for="collection._id" class="label">{{ collection.name }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: { collections: Array },
  data() {
    return { selectedCollections: {} };
  },
  created() {
    this.collections.forEach((collection) => {
      this.$set(this.selectedCollections, collection._id, false);
    });
  },
  watch: {
    selectedCollections: {
      deep: true,
      handler(newVal) {
        this.$emit("input", newVal);
      },
    },
  },
};
</script>

<style scoped>
.wrapper {
    margin-top:10px;
    margin-bottom:10px;
}
.checkbox-container {
  display: inline-block;
  margin-right: 10px;
  position: relative;
  width: 200px;
  padding-left: 30px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}
.checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.label {
  display: inline-block;
  position: relative;
  cursor: pointer;
  line-height: 20px;
  transition: color 0.3s ease;
}
.label:before {
  content: "";
  position: absolute;
  left: -24px;
  top: 0;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.checkbox:checked ~ .label:before {
  background-color: #4caf50;
  border-color: #4caf50;
}
.label:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 5px;
  width: 8px;
  height: 8px;
  background-color: transparent;
  border-radius: 2px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  transform: scale(0);
}
.checkbox:checked ~ .label:after {
  /* background-color: #fff; */
  transform: scale(1);
}
.checkbox:checked ~ .label {
  color: #4caf50;
}
.checkbox-container:hover .label:before {
  border-color: #4caf50;
}
@keyframes checkboxAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.checkbox:checked ~ .label:before {
  animation: checkboxAnimation 0.3s ease;
}
</style>

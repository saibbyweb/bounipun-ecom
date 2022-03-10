<template>
  <div class="popup-wrapper flex center" v-if="showPopup">
      <div @click="openPopup" class="popup shadow">
        <!-- close icon -->
        <img
          v-if="!persist"
          class="close"
          @click="closePopup"
          src="/icons/dark/close.png"
        />
        <div class="image" :style="backgroundImageStyles"></div>
        <div class="text">
          <p>{{ text }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: true,
    };
  },
  props: {
    image: String,
    text: String,
    actionURL: String,
    persist: Boolean,
    delayInMinutes: Number,
  },
  computed: {
    backgroundImageStyles() {
      return {
        backgroundImage: `url(${this.$getOriginalPath(this.image)})`,
      };
    },
  },
  methods: {
    closePopup() {
      this.showPopup = false;
    },
    openPopup() {
        window.open(this.actionURL, '_blank');
        this.showPopup = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  background-color: rgba(42, 42, 42, 0.614);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .popup {
    background-color: white;
    height: 60vh;
    width: 40%;
    position: relative;
  }

  .close {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  .image {
    height: 70%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .text {
    padding: 7% 5%;
    font-family: $font_1;
    text-align: center;
  }

  @media (max-width: 768px) {
    .popup {
      width: 85%;
    }
  }
}
</style>

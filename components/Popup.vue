<template>
  <div class="popup-wrapper flex center" v-if="showPopup">
    <div @click="takeAction" class="popup shadow">
      <!-- close icon -->
      <img
        v-if="!persist"
        class="close"
        @click.stop="closePopup"
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
      showPopup: false,
    };
  },
  props: {
    _id: String,
    image: String,
    text: String,
    actionURL: String,
    persist: Boolean,
    delayInMinutes: Number,
  },
  mounted() {
    setTimeout(() => { this.displayPopup() }, this.delayInMinutes * 60 * 1000);
  },
  computed: {
    backgroundImageStyles() {
      return {
        backgroundImage: `url(${this.$getOriginalPath(this.image)})`,
      };
    },
  },
  methods: {
    displayPopup() {
      this.showPopup = true;
      /* dont pop if popup is not persisted (should only be used for guests)*/
      if (this.persist) {
        this.$store.commit("customer/setPopupAsPopped", this._id);
      }
    },
    closePopup() {
      this.showPopup = false;
    },
    takeAction() {
      window.open(this.actionURL, "_blank");
      if (!this.persist) this.closePopup();
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  background-color: rgba(42, 42, 42, 0.614);
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .popup {
    background-color: white;
    height: 540px;
    max-height: 90vh;
    width: 300px;
    position: relative;
    cursor: pointer;
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
    height: 75%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .text {
    padding: 7% 5%;
    font-family: $font_1;
    text-align: center;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .popup {
      width: 85%;
    }
  }
}
</style>

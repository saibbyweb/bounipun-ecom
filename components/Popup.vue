<template>
  <div class="popup-wrapper flex center" v-if="showPopup">
    <div @click="takeAction" class="popup shadow">
      <!-- close icon -->
      <img
        v-if="!persist && delayPassed >=4"
        class="close"
        @click.stop="closePopup"
        src="/icons/dark/close.png"
      />
      <div class="image" :style="backgroundImageStyles"></div>
      <div class="text flex center col w-bold">
        <p v-html="text1" class="text1"></p>
        <p v-html="text2" class="text2">{{ text2 }}</p>
        <button class="action">{{ text3 }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      delayPassed: 0,
      delayCounter: null,
    };
  },
  props: {
    _id: String,
    image: String,
    text: String,
    text1: String,
    text2: String,
    text3: String,
    actionURL: String,
    persist: Boolean,
    delayInMinutes: Number,
  },
  mounted() {
    setTimeout(() => {
      this.displayPopup();
    }, this.delayInMinutes * 60 * 1000);

    this.delayCounter = setInterval(() => {
      if (this.delayPassed >= 4) clearInterval(this.delayCounter);
      this.delayPassed++;
      console.log('incremented delay passed')
    }, 1000);
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
  background-color: rgba(42, 42, 42, 0.4);
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .popup {
    background-color: white;
    height: 570px;
    // max-height: 90vh;
    width: 310px;
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
    height: 400px;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .text {
    padding: 7% 5%;
    font-family: $font_1;
    text-align: center;
    font-size: 13px;
    height: 170px;
    gap: 14px;

    .text1 {
      color: #454545;
      font-size: 19px;
      font-family: $font_4;
    }
  }

  .action {
    width: 100%;
  }

  @media (max-width: 768px) {
    .popup {
      height: 580px;
    }
    .text {
      height: 180px;
      gap: 14px;
    }
  }
}
</style>

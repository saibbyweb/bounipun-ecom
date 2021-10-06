<template>
  <div class="ticker flex center">
    <Transition mode="out-in" name="fade-in">
      <div
        :class="{ pointer: activeTicker.link !== '' }"
        @click="navigate"
        class="text"
        :key="activeTicker.text"
      >
        {{ activeTicker.text }}
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tickerItems: [{ text: "", link: "" }],
      activeIndex: 0,
    };
  },
  computed: {
    activeTicker() {
      return this.tickerItems[this.activeIndex];
    },
  },
  mounted() {
    this.fetchTicker();
  },
  methods: {
    async fetchTicker() {
      const tickerItems = await this.$fetchData("ticker", {
        status: true,
      });

      if (!tickerItems.fetched) {
        return;
      }

      this.tickerItems = tickerItems.doc.items;

      if (this.tickerItems.length === 0) return;

      setInterval(() => {
        if (this.activeIndex === this.tickerItems.length - 1) {
          this.activeIndex = 0;
          return;
        }
        this.activeIndex += 1;
      }, 6000);
    },
    navigate() {
      if (this.activeTicker.link !== "") {
        window.open("/" + this.activeTicker.link, "_blank");
      }
    },
  },
};
</script>

<style lang="scss">
.ticker {
  width: 100%;
  height: 3vh;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgb(29, 29, 29);
  transition: all 0.5s ease-in-out;
  .text {
    color: white;
    font-size: 10px;
    text-transform: uppercase;

    &.pointer {
      cursor: pointer;
    }
  }
}

.fade-in-enter-active {
  transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
  transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
</style>

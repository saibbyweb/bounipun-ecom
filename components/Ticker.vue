<template>
  <div class="ticker flex center">
    <Transition mode="out-in" name="fade-in">
      <div
        :class="{ pointer: activeTicker.link !== '' }"
        @click="navigate"
        class="text flex center"
        :key="activeTicker.text"
      >
        <marquee class="onlyMobile" width="100%" scrollamount="5">
          {{ activeTicker.text }}
        </marquee>
<!-- {{ activeTicker.text }} -->
        <span class="onlyDesktop"> {{ activeTicker.text }} </span>
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
      

      const isMobile = this.windowWidth < 768;
      const intervalDuration = isMobile ? 8500 : 6000;
      console.log(intervalDuration, '--interval duration')

      setInterval(() => {
        if (this.activeIndex === this.tickerItems.length - 1) {
          this.activeIndex = 0;
          return;
        }
        this.activeIndex += 1;
      }, intervalDuration);
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
  background-color: #202020;
  transition: all 0.5s ease-in-out;

  .text, span {
    color: white;
    font-size: 11px;
    text-transform: uppercase;
    width: 100%;
    text-align:center;

    &.pointer {
      cursor: pointer;
    }
  }

}

.fade-in-enter-active {
  transition: opacity 450ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
  transition: opacity 325ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}

.onlyDesktop {
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
}

.onlyMobile {
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
}
</style>

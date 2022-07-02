<template>
  <div class="page -wh">
    <!-- header image with arrow in bottom-middle part -->
    <div
      class="header-image flex center col"
      :style="setBg('header-image.png')"
    >
      <h1>Our Story</h1>
      <br />
      <br />
      <img
        @click="moveDown()"
        class="pointer"
        src="/story-images/arrow-down.png"
        style="width: 50px"
      />
    </div>
    <!-- centralized text block -->
    <div ref="start" class="c-text">
      <p>
        BOUNIPUN Kashmir is a specialist luxury division lead by the known
        internationally acclaimed fashion designer <b>ZUBAIR KIRMANI</b> who’s
        born and brought up in the divine valley of Kashmir.
      </p>
    </div>
    <!-- section 1 (45/55) - (first one with image + text, second one with just a long image) -->
    <div class="section-split">
      <!-- first part -->
      <div class="one">
        <!-- one image -->
        <div class="one-image" :style="setBg('1.png')"></div>
        <!-- text -->
        <div class="text">
          <p>
            In fashion, he’s celebrated as a reformer of fabric, texture and
            simplicity of silhouette. He was awarded as the “best debut” and
            “neo-minimal designer” by ELLE magazine just after the launch of his
            men’s and women’s label. His profile has been published by an
            Italian Publication (Damiani) based on CONTEMPORARY INDIAN FASHION.
            Winner.
          </p>
        </div>
      </div>
      <!-- second part -->
      <div class="two" :style="setBg('2.png')"></div>
    </div>
    <!-- full width image -->
    <div class="full-width" :style="setBg('3.png', true)"></div>
    <!-- centralized text block -->
    <div class="c-text">
      <p>
        In fashion, he’s celebrated as a reformer of fabric, texture and
        simplicity of silhouette. He was awarded as the “best debut” and
        “neo-minimal designer” by ELLE magazine just after the launch of his
        men’s and women’s label. His profile has been published by an Italian
        Publication (Damiani) based on CONTEMPORARY INDIAN FASHION. Winner of
        the prestigious International Woolmark Prize 2016/17 India, Pakistan and
        Middle East regional final for his innovative development in wool held
        in Paris.
      </p>
    </div>
    <!-- reverse of section 1 -->
    <div class="section-split reverse">
      <!-- first part -->
      <div class="one">
        <!-- one image -->
        <div class="one-image" :style="setBg('4.png')"></div>
        <!-- text -->
        <div class="text">
          <p>
            In fashion, he’s celebrated as a reformer of fabric, texture and
            simplicity of silhouette. He was awarded as the “best debut” and
            “neo-minimal designer” by ELLE magazine just after the launch of his
            men’s and women’s label. His profile has been published by an
            Italian Publication (Damiani) based on CONTEMPORARY INDIAN FASHION.
            Winner.
          </p>
        </div>
      </div>
      <!-- second part -->
      <div class="two" :style="setBg('5.png')"></div>
    </div>
    <!-- full width image -->
    <div class="full-width" :style="setBg('6.png', true)"></div>
    <!-- centralized text block -->
    <div class="c-text">
      <p>
        In fashion, he’s celebrated as a reformer of fabric, texture and
        simplicity of silhouette. He was awarded as the “best debut” and
        “neo-minimal designer” by ELLE magazine just after the launch of his
        men’s and women’s label. His profile has been published by an Italian
        Publication (Damiani) based on CONTEMPORARY INDIAN FASHION. Winner of
        the prestigious International Woolmark Prize 2016/17 India, Pakistan and
        Middle East regional final for his innovative development in wool held
        in Paris.
      </p>
    </div>
    <!-- bordered block with image and text -->
    <div class="flex center col">
      <div class="bordered-block">
        <p class="text">
          In fashion, he’s celebrated as a reformer of fabric, texture and
          simplicity of silhouette. He was awarded as the “best debut” and
          “neo-minimal designer” by ELLE magazine just after the launch of his
          men’s and women’s label. His profile has been published by an Italian
          Publication.
        </p>
        <div class="image first" :style="setBg('7.png')"></div>
      </div>
      <!-- reverse of bordered block with image and text -->
      <div class="bordered-block reverse">
        <div class="image second" :style="setBg('8.png')"></div>
        <p class="text">
          In fashion, he’s celebrated as a reformer of fabric, texture and
          simplicity of silhouette. He was awarded as the “best debut” and
          “neo-minimal designer” by ELLE magazine just after the launch of his
          men’s and women’s label. His profile has been published by an Italian
          Publication.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Our Story | Bounipun Kashmir",
    };
  },
  computed: {
    isMobileSafari() {
      let is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
      let is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
      return is_ios && is_safari;
    },
  },
  methods: {
    setBg(image, fixedAttachment) {
      //   const bg = this.windowWidth > 768 ? image : `mobile/${image}`
      const bg = image;

      let styles = {
        backgroundImage: `url(/story-images/${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundOrigin: "content-box",
      };
      
      /* if device is NOT mobile safari and fixed attachement is required */
      if (!this.isMobileSafari && fixedAttachment) {
        styles = { ...styles, backgroundAttachment: "fixed" };
      }

      return styles;
    },
    moveDown() {
      const offsetTop = this.$refs.start.offsetTop;
      const headerHeightDelta = 0.13;

      window.scroll({
        top:
          offsetTop - document.documentElement.clientHeight * headerHeightDelta,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header-image {
  height: 100vh;
  width: 100%;
  background-position: top center;
  background-attachment: fixed;
  h1 {
    color: white;
  }

  .pointer {
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.3);
    }
  }
}

p {
  font-size: 15px;
}

.c-text {
  padding: 4% 10%;
  text-align: center;
}

.reverse {
  flex-direction: row-reverse;
}

.section-split {
  display: flex;
  height: 140vh;
  padding: 1% 5% 3% 5%;

  .one {
    width: 45%;
    padding: 1% 3%;

    .one-image {
      width: 100%;
      height: 80%;
    }
    .text {
      padding: 2%;
    }
  }
  .two {
    padding: 1% 3%;
    width: 55%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 200vh;
    .one {
      width: 100%;
      height: 50%;

      .one-image {
        height: 65%;
      }

      .text {
        padding-top: 10%;
        height: 35%;
        text-align: center;
      }
    }
    .two {
      width: 100%;
      height: 50%;
    }
  }
}

/* full width */
.full-width {
  width: 100%;
  height: 90vh;
  /* background-attachment: fixed; */
}

@media (max-width: 768px) {
  .header-image {
    background-attachment: initial;
  }

  .full-width {
    /* background-attachment: initial; */
  }
}

/* bordered block */
.bordered-block {
  border: 2px solid #cecece;
  width: 75%;
  height: 50vh;
  display: flex;
  margin: 3% 0;
  position: relative;

  .text {
    padding: 10%;
    width: 70%;
  }

  .image {
    position: absolute;
    height: 110%;
    top: -5%;
    width: 40%;

    &.first {
      right: -5%;
    }
    &.second {
      left: -5%;
    }
  }

  @media (max-width: 768px) {
    width: 85%;
    height: 83vh;
    flex-direction: column;
    justify-content: flex-end;

    .text {
      padding: 10%;
      width: 100%;
      //   font-size:14px;
    }

    .image {
      top: 0;
      width: 100%;
      height: 57%;

      &.first {
        left: 0;
      }

      &.second {
        left: 0;
      }
    }
  }
}
</style>

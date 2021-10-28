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
    <div class="full-width" :style="setBg('3.png')">

    </div>
    <!-- centralized text block -->
    <div class="c-text">
      <p>In fashion, he’s celebrated as a reformer of fabric, texture and simplicity of silhouette. He was awarded as the “best debut” and “neo-minimal designer” by ELLE magazine just after the launch of his men’s and women’s label. His profile has been published by an Italian Publication (Damiani) based on CONTEMPORARY INDIAN FASHION. Winner of the prestigious International Woolmark Prize 2016/17 India, Pakistan and Middle East regional final for his innovative development in wool held in Paris.
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
                In fashion, he’s celebrated as a reformer of fabric, texture and simplicity of silhouette. He was awarded as the “best debut” and “neo-minimal designer” by ELLE magazine just after the launch of his men’s and women’s label. His profile has been published by an Italian Publication (Damiani) based on CONTEMPORARY INDIAN FASHION. Winner.

            </p>
        </div>
      </div>
      <!-- second part -->
      <div class="two" :style="setBg('5.png')"></div>
    </div>
    <!-- full width image -->
    <div class="full-width" :style="setBg('6.png')"></div>
    <!-- centralized text block -->
    <div class="c-text">
      <p>
          In fashion, he’s celebrated as a reformer of fabric, texture and simplicity of silhouette. He was awarded as the “best debut” and “neo-minimal designer” by ELLE magazine just after the launch of his men’s and women’s label. His profile has been published by an Italian Publication (Damiani) based on CONTEMPORARY INDIAN FASHION. Winner of the prestigious International Woolmark Prize 2016/17 India, Pakistan and Middle East regional final for his innovative development in wool held in Paris.

      </p>
    </div>
    <!-- bordered block with image and text -->
    <div class="bordered-block"></div>
    <!-- reverse of bordered block with image and text -->
    <div class="bordered-block reverse"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Our Story | Bounipun Kashmir",
    };
  },
  methods: {
    setBg(image) {
      return {
        backgroundImage: `url(story-images/${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundOrigin: "content-box"
      };
    },
    moveDown() {
      const offsetTop = this.$refs.start.offsetTop;

      window.scroll({
        top: offsetTop - 80,
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

.section-split {
  display: flex;
  height: 140vh;
  padding: 1% 5% 3% 5%;

  &.reverse {
      flex-direction: row-reverse;
  }

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
}

/* full width */
.full-width {
    width:100%;
    height:90vh;
}
</style>

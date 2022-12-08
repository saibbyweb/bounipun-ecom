<template>
  <div class="page -wh">
    <!-- header image with arrow in bottom-middle part -->
    <div class="header-image flex center col" :style="setBg('1.jpg')">
      <h1>STORY TEST 🧪</h1>
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
        Zubair Kirmani , an internationally acclaimed fashion designer hailing
        from the implausible Vale of Kashmir. He has grown under shades of
        mighty Chinars and scented cypresses in mountainous paradise. To cap it
        all, he called his ever-growing Brand as – “BOUNIPUN” (Chinar leaf).
      </p>
    </div>
    <!-- section 1 (45/55) - (first one with image + text, second one with just a long image) -->
    <div class="section-split">
      <!-- first part -->
      <div class="one">
        <!-- one image -->
        <div class="one-image" :style="setBg('2.jpg')"></div>
        <!-- text -->
        <div class="text">
          <p>
            Zubair Kirmani could not unhitch the strings that linked him to his
            motherland despite working away from home for at least 15 years.
            Zubair Kirmani came back after exploring and proving himself
            worldwide. The brand is about breaking all the stereotypes, the
            mainstream rules which cause hindrance in expression. The brand
            BOUNIPUN is all about Luxury that is authentic, modern, and allows
            everyone to express their unique personality. A luxury rooted in
            creativity and sincerity that inspires dreams and emotions. In our
            signature designs, we encapsulate these beliefs.
          </p>
        </div>
      </div>
      <!-- second part -->
      <div class="two" :style="setBg('3.jpg')"></div>
    </div>

    <!-- <br> -->
    <!-- <br> -->
    <!-- full width image -->
    <div class="full-width" :style="setBg('full.jpg', true)"></div>
    <!-- centralized text block -->
    <div class="c-text">
      <p class="just-text">
        Zubair is one of the few designers who flourished as the winner of the
        prestigious International Woolmark Prize, 2016-2017 that was held in
        Paris. He has been honoured “best debut” and “neo-minimal designer” by
        ELLE magazine. His rigorous research into the textile and in-depth
        exploration with style for Woolmark inspired him to explore more, and
        subsume these innovations in his brand BOUNIPUN KASHMIR.
      </p>
    </div>
    <!-- reverse of section 1 -->
    <div class="section-split reverse">
      <!-- first part -->
      <div class="one">
        <!-- one image -->
        <div class="one-image" :style="setBg('5.jpg')"></div>
        <!-- text -->
        <div class="text">
          <p>
            We've explored cashmere in the ways no one has ever done before. Our
            signature designs are unique and are not limited to one season, just
            like Bounipun(Chinar leaf) , we are versatile and blend with every
            season. Our hand crafted cashmere is weaved on 500year old looms and
            are treated from the waters of glacier. The running down the
            mountains through gushing streams, the water is utilised in the
            manufacturing process.
          </p>
        </div>
      </div>
      <!-- second part -->
      <div class="two" :style="setBg('6.jpg')"></div>
    </div>
    <!-- full width image -->
    <div class="full-width" :style="setBg('7.jpg', true)"></div>
    <!-- centralized text block -->
    <div class="c-text">
      <p class="just-text">
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
        <div class="image first" :style="setBg('8.jpg')"></div>
      </div>
      <!-- reverse of bordered block with image and text -->
      <div class="bordered-block reverse">
        <div class="image second" :style="setBg('9.jpg')"></div>
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
    isIos() {
      let is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
      let is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
      return is_ios && is_safari;
    },
    iosDetected() {
      return (
        [
          "iPad Simulator",
          "iPhone Simulator",
          "iPod Simulator",
          "iPad",
          "iPhone",
          "iPod",
        ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      );
    },
  },
  methods: {
    setBg(image, fixedAttachment) {
      let bg = image;
      if(fixedAttachment)
        bg = this.windowWidth > 768 ? image : `mobile/${image}`

      let styles = {
        backgroundImage: `url(/new-story-images/${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundOrigin: "content-box",
        // backgroundPosition: "center"
      };

      /* if device is NOT ios and fixed attachement is required */
      // if (!this.isIos && fixedAttachment) {
      //   styles = { ...styles, backgroundAttachment: "fixed" };
      // }

      if (!this.iosDetected && fixedAttachment) {
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
  font-size: 13.5px;
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
      margin: 0% 0 4.5% 0;
    }
  }
  .two {
    /* padding: 1% 3%; */

    width: 55%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
    padding: 5%;
    .one {
      width: 100%;
      /* height: 60vh; */

      .one-image {
        height: 60vh;
      }

      .text {
        padding-top: 10%;
        /* height: 35%; */
        text-align: center;
      }
    }
    .two {
      width: 100%;
      height: 90vh;
    }
  }
}

/* full width */
.full-width {
  width: 100%;
  height: 90vh;
  background-position: center;
  /* background-attachment: fixed; */
}

@media (max-width: 768px) {
  .c-text {
    padding: 4% 10% 0 10%;
    text-align: center;
    .just-text {
      padding-top: 5%;
    }
  }
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
    height: 80vh;
    /* height:fit-content; */
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
      /* position: relative; */

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

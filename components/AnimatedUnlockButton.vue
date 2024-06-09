<template>
  <button @click="onClick" class="glow-on-hover" type="button"> {{ text }}</button>
</template>
<script>
export default {
  props: {
    text: String,
    onClick: Function,
  },
};
</script>

<style lang="scss">
.glow-on-hover {
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #333,
    #efefef,
    #333,
    #efefef,
    #333,
    #efefef,
    #333,
    #efefef,
    #333
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
/*   filter: blur(5px); */
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 50s linear infinite;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

</style>
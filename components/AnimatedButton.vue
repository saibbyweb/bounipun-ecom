<template>
  <div class="animated-button flex center shadow" @click="onClick">
    <span class="text"> {{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    onClick: Function,
  },
};
</script>

<style scoped lang="scss">
.animated-button {
  cursor: pointer;
  --border-size: 3px;
  --border-angle: 0turn;
  width: 60vmin;
  height: 10vmin;
  background-image: conic-gradient(
      from var(--border-angle),
      $primary_dark,
      $primary_dark 50%,
      $primary_dark
    ),
    conic-gradient(
      from var(--border-angle),
      transparent 20%,
      #23945c,
      #23945c
    );
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }

  .text {
    transition: all 0.3s ease-in-out;
    color: white;
    font-size: 20px;
    font-family: $font_1_semibold;
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &:hover {
    animation-play-state: paused;
    .text {
      font-size: 28px;
      letter-spacing: 2px;
    }
  }
  @media (max-width: 768px) {
    .text {
      font-size: 15px;
      letter-spacing: 2px;
    }
    &:hover {
      .text {
        font-size: 17px;
        /* letter-spacing: 2px; */
      }
    }
  }
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}
</style>

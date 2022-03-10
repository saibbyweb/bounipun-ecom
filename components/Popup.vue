<template>
  <div class="popup-wrapper flex center">
    <div class="popup">
      <!-- close icon -->
      <img
        class="close"
        @click="acceptCookieConsent"
        src="/icons/dark/close.png"
      />
      <div class="image"></div>
      <div class="text"></div>
    </div>
  </div>
</template>

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
    height: 70vh;
    width: 40%;
    position: relative;
  }

  @media (max-width: 768px) {
    width: 80%;
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
}
</style>

<template>
  <div class="unlock-content">
    <div class="form flex col center">
      <!-- code input box -->
      <InputCredential
        v-model="unlockCode"
        label=""
        :uppercase="true"
        :checked="unlockCodeApplied"
        :disabled="unlockCodeApplied"
        @input="unlockCodeError.status = false"
        :isUnlocker="true"
        placeholder="Enter Premium Access Code"
      />

      <!-- apply button -->
      <button
        @click="applyUnlockCode"
        class="action apply"
        :class="{ applied: unlockCodeApplied }"
      >
        {{ unlockCodeApplied ? "Unlocking..." : "Activate Bounipun Premium" }}
      </button>

      <!-- code error -->
      <p v-if="unlockCodeError.status" class="error msg">
        {{ unlockCodeError.message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unlockCode: "",
      unlockCodeError: {
        status: false,
        message: "",
      },
      unlockCodeApplied: false,
    };
  },
  mounted() {
    if(this.$route.query.code)
      this.unlockCode = this.$route.query.code;
  },
  methods: {
    async applyUnlockCode() {
      /* clear error */
      this.unlockCodeError.status = false;

      /* validate input */
      if (this.unlockCode.trim() === "" || this.unlockCode.length > 25) {
        this.unlockCodeError = {
          status: true,
          message: "Please enter a valid unlock code",
        };
        return;
      }

      /* check code validity on server */
      const applyUnlockCodeRequest = await this.$post("/applyUnlockCode", {
        unlockCode: this.unlockCode,
      });

      /* if request failed */
      if (applyUnlockCodeRequest.resolved === false) {
        this.unlockCodeError = {
          status: true,
          message: "Couldn't apply unlock code",
        };
        return;
      }

      /* refresh window */
      console.log(applyUnlockCodeRequest);
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.action {
  &.apply {
    // background: radial-gradient(
    //     ellipse farthest-corner at right bottom,
    //     #fedb37 0%,
    //     #fdb931 8%,
    //     #d69b1b 30%,
    //     #cc9b2a 40%,
    //     transparent 80%
    //   ),
    //   radial-gradient(
    //     ellipse farthest-corner at left top,
    //     #d1b464 0%,
    //     #c7b06f 8%,
    //     #e2cd93 25%,
    //     #e9b12d 62.5%,
    //     #d5a22a 100%
    //   );

    &:hover {
      color: #e4e4e4;
    }
  }
}
</style>

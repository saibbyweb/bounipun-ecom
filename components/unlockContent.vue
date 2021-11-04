<template>
  <div class="unlock-content">
    <div class="form flex col center">
      <!-- code input box -->
      <InputCredential
        v-model="unlockCode"
        label="Enter Unlock Code"
        :uppercase="true"
        :checked="unlockCodeApplied"
        :disabled="unlockCodeApplied"
        @input="unlockCodeError.status = false"
      />

      <!-- apply button -->
      <button
        @click="applyUnlockCode"
        class="action apply"
        :class="{ applied: unlockCodeApplied }"
      >
        {{ unlockCodeApplied ? "Unlocking..." : "Apply Unlock Code" }}
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
    },
  },
};
</script>

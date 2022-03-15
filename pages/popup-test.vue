<template>
  <div class="popup-test">
    <Popup
      v-for="popup in eligiblePopups"
      :key="popup._id"
      :_id="popup._id"
      :image="popup.image"
      :text="popup.text"
      :persist="popup.persist"
      :actionURL="popup.actionURL"
      :delayInMinutes="popup.delay"
    />
    <!-- popup test -->
    <div class="flex heading">
      <img src="/icons/light/logo.png" />
      <h1>Popup Test</h1>
      <p>
        Timer: <span> {{ time }} seconds </span>
      </p>
    </div>

    <div class="main-body flex center">
      <img src="/loading.gif" v-if="time < maximumDelayTimeInSeconds" />
    </div>

    <!-- log -->
    <div class="log">
      <!-- counter -->
      <div class="counter flex col">
        <p>
          Active Popups:<span> {{ availablePopups.length }} </span>
        </p>
            <p>
          Guest Popups:<span> {{ guestPopups.length }} </span>
        </p>
            <p>
          Registered Popups:<span> {{ registeredUserPopups.length }} </span>
        </p>
           <p>
          Eligible Popups:<span> {{ eligiblePopups.length }} </span>
        </p>
      </div>

      <!-- details -->
      <div class="details flex center">
        <p>Popup Details:</p>
        <div
          class="detail flex"
          v-for="popup in availablePopups"
          :key="popup._id"
        >
          <div
            :style="{
              margin: '0px 5px',
              backgroundSize: 'cover',
              backgroundImage: `url(${$getOriginalPath(popup.image)})`,
            }"
            style="width: 70px; height: 70px"
          />
          <div class="flex col">
            <p>
              Name: <span> {{ popup.name }} </span>
            </p>
            <p>
              Delay: <span> {{ popup.delay }} minutes </span>
            </p>
            <p>
              Visibility: <span> {{ popup.visibility }} </span>
            </p>
          </div>
        </div>
      </div>

      <!-- login status -->
      <div class="login-status flex center" style="width: 20%">
        <Toggle
          :value="$store.state.customer.authorized"
          activeText="Logged In"
          inactiveText="Guest"
          label="User"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "blank",
  data() {
    return {
      time: 0,
      timer: null,
    };
  },
  async mounted() {
    /* load persisted state */
    this.$store.commit("customer/loadPersistedState");
    await this.$store.dispatch("customer/fetchPopups");
    this.timer = setInterval(() => {
      if (this.time > this.maximumDelayTimeInSeconds) {
        clearInterval(this.timer);
      }
      this.time++;
    }, 1000);
  },
  computed: {
    availablePopups() {
      return this.$store.state.customer.popups ?? [];
    },
    guestPopups() {
      return this.availablePopups.filter(
        (popup) => popup.visibility === "guests" || popup.visibility === "both"
      );
    },
    registeredUserPopups() {
      return this.availablePopups.filter(
        (popup) =>
          popup.visibility === "registered-users" || popup.visibility === "both"
      );
    },
    allottedPopups() {
      return this.$store.state.customer.authorized
        ? this.registeredUserPopups
        : this.guestPopups;
    },
    eligiblePopups() {
      const { popupsPopped } = this.$store.state.customer;
      /* filter out popups which havent been popped out yet */
      const eligiblePopups = this.allottedPopups.filter((popup) => {
        const notPoppedYet = popupsPopped.findIndex((popId) => popId == popup._id) === -1;
        return notPoppedYet;
      });
      return eligiblePopups;
    },
    maximumDelayTimeInSeconds() {
      const onlyDelays = this.allottedPopups.map((popup) => popup.delay * 60);
      return Math.max(...onlyDelays);
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  position: relative;
  height: 10vh;
  width: 100%;
  border: 1px solid #efefef;
  justify-content: space-around;
  align-items: center;
  img {
    height: 7vh;
  }
  h1 {
    font-size: 30px;
  }
}
.main-body {
  height: 60vh;
  img {
    width: 4vw;
  }
}
.log {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 20vh;
  width: 100%;
  display: flex;

  > * {
    padding: 1%;
    box-sizing: border-box;
    border: 1px solid #efefef;
  }
  p {
    font-size: 12px;
  }
  span {
    font-size: 13px;
    font-weight: 900;
  }
  .counter {
    width:15%;
  }
  .details {
    width: 70%;
    .detail {
      border: 1px solid #efefef;
      padding: 1%;
    }
  }
}
</style>

<template>
  <div class="popup-test">
    <PopupModals
      @getMaxTime="setMaxTime"
      @getPopupData="setPopupData"
    />
    <!-- popup test -->
    <div class="flex heading">
      <img src="/icons/light/logo.png" />
      <h1>Popup Test</h1>
      <p>
        Timer: <span> {{ time }} seconds </span>
      </p>
    </div>

    <!-- loading bar -->
    <div class="main-body flex center">
      <img src="/loading.gif" v-if="time < maximumDelayTimeInSeconds" />
    </div>

    <!-- log -->
    <div class="log">
      <!-- counter -->
      <div class="counter flex col" v-if="popupDataFetched">
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
          Eligible Popups:
          <span> {{ eligiblePopups.length }} </span>
          <span
            @click="clearEligiblePopups"
            style="
              background-color: #c22323;
              color: white;
              padding: 2px 5px;
              border-radius: 3px;
              font-size: 10px;
              cursor: pointer;
            "
          >
            soft clear
          </span>
        </p>
      </div>

      <!-- details -->
      <div class="details flex center">
        <p>Popup Details:</p>
        <div
          class="detail flex"
          v-for="popup in eligiblePopups"
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
      maximumDelayTimeInSeconds: 0,
      availablePopups: [],
      guestPopups: [],
      registeredUserPopups: [],
      eligiblePopups: [],
      allottedPopups: [],
      popupDataFetched: false
    };
  },
  async mounted() {
    /* load persisted state */
    this.$store.commit("customer/loadPersistedState");
        /* listen for all mutations */
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "customer/setLoading" || mutation.type === "customer/setGiftMessage")
        return;

      console.log(mutation);
      /* save state in local storage */
      window.localStorage.setItem("persistedState",JSON.stringify(state.customer));
    });
  },
  methods: {
    setPopupData(popups) {
      this.availablePopups = popups.available;
      this.guestPopups = popups.guest;
      this.registeredUserPopups = popups.registeredUser;
      this.allottedPopups = popups.allotted;
      this.eligiblePopups = popups.eligible;
      this.popupDataFetched = true;
    },
    setMaxTime(time) {
      this.maximumDelayTimeInSeconds = time;
      this.resetTimer();
    },
    resetTimer() {
      /* clear previously set timer */
      if (this.timer) clearInterval(this.timer);
      /* reset timer */
      this.time = 0;
      this.timer = setInterval(() => {
        if (this.time > this.maximumDelayTimeInSeconds) {
          clearInterval(this.timer);
        }
        this.time++;
      }, 1000);
    },
    clearEligiblePopups() {
      this.$store.commit("customer/clearPopupsPopped");
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
    width: 18%;
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

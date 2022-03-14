<template>
  <div class="popup-test">
    <Popup
      v-for="popup in availablePopups"
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
         <p> Timer: <span> {{ time }} seconds </span> </p>
    </div>

    <div class="main-body flex center">
        <img src="/loading.gif" v-if="time < maximumDelayTimeInSeconds" />
    </div>

    <!-- log -->
    <div class="log">
      <!-- counter -->
      <div class="counter flex">
        <p>
          Total Popups:<span> {{ availablePopups.length }} </span>
        </p>
      </div>

      <!-- details -->
      <div class="details flex center">
        <p>Popup Details:</p>
        <div class="detail" v-for="popup in availablePopups" :key="popup._id">
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
  </div>
</template>
<script>
export default {
  layout: "blank",
  data() {
      return {
          time:0,
          timer: null
      }
  },
  async mounted() {
    await this.$store.dispatch("customer/fetchPopups");
    this.timer = setInterval(() => { 
        if(this.time > this.maximumDelayTimeInSeconds) {
            clearInterval(this.timer);
        }
        this.time++;
    },1000)
  },
  computed: {
    availablePopups() {
      return this.$store.state.customer.popups ?? [];
    },
    maximumDelayTimeInSeconds() {
        const onlyDelays = this.availablePopups.map(popup => popup.delay * 60)
        return Math.max(...onlyDelays)
    }
  },
};
</script>

<style lang="scss" scoped>
.heading {
    position:relative;
  height: 10vh;
  width: 100%;
  border: 1px solid #efefef;
justify-content: space-around;
align-items: center;
  img {
      height:7vh;
  }
  h1 {
      font-size: 30px;
  }
}
.main-body {
    height:60vh;
    img {
        width:4vw;
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
    font-size: 14px;
  }
  span {
    font-size: 15px;
    font-weight: 900;
  }
  .details {
    width: 100%;
    .detail {
      border: 1px solid #efefef;
      padding: 1%;
    }
  }
}
</style>

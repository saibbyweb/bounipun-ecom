<template>
  <div>
    <Popup
      v-for="popup in eligiblePopups"
      :key="popup._id"
      :_id="popup._id"
      :image="popup.image"
      :text="popup.text"
      :text1="popup.text1"
      :text2="popup.text2"
      :text3="popup.text3"
      :persist="popup.persist"
      :actionURL="popup.actionURL"
      :delayInMinutes="popup.delay"
    />
  </div>
</template>

<script>
export default {
  props: {
    testMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      time: 0,
      timer: null,
      localPopped:[]
    };
  },
  async mounted() {
    await this.$store.dispatch("customer/fetchPopups");
    this.$emit("getMaxTime", this.maximumDelayTimeInSeconds());
    this.$emit("getPopupData", {
      available: this.availablePopups,
      guest: this.guestPopups,
      registeredUser: this.registeredUserPopups,
      allotted: this.allottedPopups,
      eligible: this.eligiblePopups,
    });
    const { localPopped } = this.$store.state.customer;
    this.localPopped = localPopped && localPopped.length > 0 ? JSON.parse(JSON.stringify(localPopped)) : [];
    // console.log('local poppedx set', this.localPopped)
  },
  computed: {
    availablePopups() {
      const allPopups = this.$store.state.customer.popups;
      return allPopups ? allPopups.filter(p => this.testMode ? true : p.status) : []
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
      // if there's a persistable popup which has been popped, set its delay timer to 6 seconds (0.1 min);

      /* filter local popped */
      // console.log(this.localPopped, 'calculated local poppedx')
      const allottedPopups = this.allottedPopups.filter(popup => this.localPopped ? this.localPopped.includes(popup._id) === false : true)
        
      const eligiblePopups = allottedPopups.map((popup) => {
        const alreadyPopped = popupsPopped.findIndex((popId) => popId == popup._id) !== -1;
        

        if (popup.persist && alreadyPopped) {
          return { ...popup, delay: 0.17 };
        } else return { ...popup };
      });
      return eligiblePopups;
    },
  },
  methods: {
    clearEligiblePopups() {
      this.$store.commit("customer/clearPopupsPopped");
    },
    maximumDelayTimeInSeconds() {
      const onlyDelays = this.allottedPopups.map((popup) => popup.delay * 60);
      return Math.max(...onlyDelays);
    },
  },
};
</script>

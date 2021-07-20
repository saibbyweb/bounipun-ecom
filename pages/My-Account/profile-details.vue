<template>
  <div class="profile-details page">
    <div class="page-header center-col">
      <h2 class="title">Profile Details</h2>
    </div>

    <!-- actual details -->
    <div class="details">
      <!-- first name -->
      <InputCredential label="First Name" v-model="profile.firstName" />
      <!-- sur name -->
      <InputCredential label="Sur Name" v-model="profile.surName" />
      <!-- phone number -->
      <InputCredential
        label="Phone Number"
        v-model="profile.phoneNumber"
        :disabled="true"
      />
      <!-- country -->
      <InputCredential
        label="country"
        v-model="profile.countryIsoCode"
        :disabled="true"
      />
      <!-- profession -->
      <InputCredential label="profession" v-model="profile.profession" />
      <button class="action" @click="updateProfile">Update Profile</button>
    </div>

    <Toast :show="updated" msg="Profile Updated" />
  </div>
</template>

<script>
import { getCountry } from "@/helpers/countryCodes.js";

export default {
  head() {
    return {
      title: "My Profile | Bounipun Kashmir"
    };
  },
  data() {
    return {
      profile: {
        firstName: "",
        surName: "",
        phoneNumber: "",
        countryIsoCode: "",
        profession: ""
      },
      updated: false
    };
  },
  mounted() {
    setTimeout(() => {
      if (!this.$store.state.customer.authorized) this.$router.push("/login");
    }, 400);
    this.fetchProfile();
  },
  methods: {
    async fetchProfile() {
      const { response, resolved } = await this.$post("/fetchProfile");

      if (resolved === false) {
        return;
      }

      let profile = response;
      profile.phoneNumber = profile.countryDialCode + profile.phoneNumber;
      profile.countryIsoCode = getCountry(profile.countryIsoCode).name;
      this.profile = profile;
    },
    async updateProfile() {
      // await this.$post('/updateProfile', { profile: this.profile });
      // this.updated = true;
      // setTimeout(() => this.updated = false, 1500);
    }
  }
};
</script>

<style lang="scss" scoped>
//
</style>

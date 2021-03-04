<template>
<div class="profile-details page">

    <div class="page-header center-col">
        <h2 class="title"> Profile Details </h2>
    </div>

    <!-- actual details -->
    <div class="details">
        <InputCredential label="Name" v-model="profile.name" />
        <InputCredential label="Phone Number" v-model="profile.phoneNumber" :disabled="true" />
        <InputCredential label="email" v-model="profile.email" />
        <InputCredential label="profession" v-model="profile.profession" />
        <button class="action" @click="updateProfile"> Update Profile </button>
    </div>

    <Toast :show="updated" msg="Profile Updated" />

</div>
</template>

<script>
export default {
    data() {
        return {
            profile: {
                name: "Suhaib Khan",
                email: "hello@saibbyweb.com",
                phoneNumber: "+91-9906697711",
                profession: "Bank"
            },
            updated: false
        }
    },
    methods: {
        updateProfile() {
            this.updated = true;
            setTimeout(() => this.updated = false, 3000);
        }
    }
}
</script>

<style lang="scss" scoped>
//
</style>

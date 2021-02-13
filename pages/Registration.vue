<template>
<div class="page center-col">
    <h3 class="heading"> Create new account </h3>
    <InputCredential label="Name" />
    <InputCredential label="Phone Number" :disabled="otpSent" />
    <InputCredential label="One Time Password" v-if="otpSent" />
    <p class="desc otp-sent" v-if="otpSent"> A one time password has been sent to your mobile number. </p>
    <button class="action" @click="otpSent = true"> {{ otpSent ? 'Register' : 'Continue'}} </button>

    <h3 id="already" class="heading"> Already Have An Account? </h3>
    <p class="desc"> Access your order history, personal information and receive our digital communications </p>
    <button id="access-account" class="action" @click="$router.push('/login')"> Access My Bounipun Account </button>
</div>
</template>

<script>
export default {
    data() {
        return {
            otpSent: false
        }
    }
}
</script>

<style lang="scss" scoped>
.heading {
    font-family: $font_1_bold;
    text-transform: uppercase;
    color: $dark_gray;
    align-self: flex-start;
    text-align:center;

    &#already {
        align-self: center;
        margin-top:20%;
    }
}

.desc {
    font-size: 10px;
    padding: 3%;

    &.otp-sent {
        text-align: center;
        padding: 1% 2%;
        font-size: 9px;
        background: rgb(68, 200, 68);
        color: white;
         margin-bottom: 10px;
    }
}

#forgot-password {
    color: $gray;
    font-size: 10px;
    margin-bottom: 5px;
}

#access-account {
    margin-bottom: 10%;
}
</style>

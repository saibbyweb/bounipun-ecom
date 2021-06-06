<template>
    <div class="page center-col">
        <h3 class="heading"> Member Sign In </h3>
        <InputCredential label="Phone Number" :disabled="otpSent" />
        <InputCredential label="One Time Password" v-if="otpSent" />
        <p class="desc otp-sent" v-if="otpSent"> A one time password has been sent to your mobile number. </p>

        <!-- <button id="forgot-password" class="clear" style="align-self: flex-start;"> Forgot your password ? </button> -->
        <button class="action" @click="otpSent = true"> {{ otpSent ? 'Login' : 'Continue'}} </button>
            
        <h3 id="already" class="heading"> Don't Have An Account Yet? </h3>
        <p class="desc"> Access your order history, personal information and receive our digital communications </p>
        <button id="access-account" class="action" @click="$router.push('/registration')"> Create Bounipun Account </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            otpSent: false
        }
    },
    methods: {
        sendOtp() {

        },
        verifyOtpAndLogin() {
            
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

    &#already {
        align-self: center;
        margin-top:20%;
        text-align:center;
    }
}
.desc {
    font-size: 10px;
    padding:3%;
    &.otp-sent {
    text-align: center;
    padding:1% 2%;
    font-size:9px;
    background: rgb(67, 176, 67);
    color: white;
     margin-bottom: 10px;
    }

}
</style>
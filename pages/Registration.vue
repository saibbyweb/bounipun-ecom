<template>
<div class="page center-col">
    <h3 class="heading"> Create new account </h3>
    <!-- first name -->
    <InputCredential label="First Name" v-model="firstName" :disabled="otpSent"/>
    <!-- surname -->
    <InputCredential label="Sur Name" v-model="surName" :disabled="otpSent"/>
    <!-- TODO: country selector should be independent component -->
    <!-- phone number -->
    <InputCredential type="number" label="Phone Number" v-model="phoneNumber" :disabled="otpSent" />
    <!-- otp -->
    <InputCredential label="One Time Password" v-model="otp" v-if="otpSent" />

    <!-- form error -->
    <p v-if="error.status" class="msg error"> {{ error.message }} </p>

    <!-- otp sent message -->
    <p class="msg success" v-if="otpSent"> A one time password has been sent to your mobile number. </p>
    <!-- send otp -->
    <button v-if="!otpSent" class="action" @click="sendOtp()"> Continue </button>
    <!-- register -->
    <button v-if="otpSent" class="action"> Register </button>

    <h3 id="already" class="heading"> Already Have An Account? </h3>
    <p class="desc"> Access your order history, personal information and receive our digital communications </p>
    <button id="access-account" class="action" @click="$router.push('/login')"> Access My Bounipun Account </button>
</div>
</template>

<script>
export default {
    data() {
        return {
            otpSent: false,
            firstName: '',
            surName: '',
            dialCode: '+91',
            countryIsoCode: 'IN',
            purpose: 'registration',
            phoneNumber: '',
            otp: '',
            error: {
                status: false,
                message: 'Could not sent otp'
            }
        }
    },
    methods: {
        validatePhoneNumber() {
            if(this.phoneNumber.length !== 10) {
                this.error.message = "Kindly enter a valid 10 digit mobile number";
                this.error.status = true;
                return false;
            }
        },
        async sendOtp() {
            /* validate form or atleast phone number */
            if(!this.validatePhoneNumber())
                return;

            const response = await this.$post('/sendOtp', {
                countryDialCode: this.dialCode,
                phoneNumber: this.phoneNumber,
                purpose: this.purpose
            });
            
            /* if req not resolved */
            if(response === false) {
                return;
            }
            
            /* map otp sent response */
            this.otpSent = response.otpSent === true;
        
        },
        register() {

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

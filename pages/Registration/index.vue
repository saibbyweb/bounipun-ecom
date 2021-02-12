<template>
    <div class="page center-col">
        <h3 class="heading"> Create new account </h3>
        <InputCredential label="Phone Number" />
        <InputCredential label="One Time Password" />
        <button id="forgot-password" class="clear" style="align-self: flex-start;"> Forgot your password ? </button>
        <button class="action"> Continue </button>
            
        <h3 id="already" class="heading"> Already Have An Account? </h3>
        <p class="desc"> Access your order history, personal information and receive our digital communications </p>
        <button id="access-account" class="action"> Access My Bounipun Account </button>
    </div>
</template>

<style lang="scss" scoped>
.heading {
    font-family: $font_1_bold;
    text-transform: uppercase;
    color: $dark_gray;

    &#already {
        margin-top:20%;
    }
}
.desc {
    font-size: 10px;
    padding:3%;
}

#forgot-password {
    color: $gray;
    font-size:10px;
    margin-bottom: 5px;
}

#access-account {
    margin-bottom: 10%;
}
</style>
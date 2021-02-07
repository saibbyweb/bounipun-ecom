<template>
    <div class="center-col">
        <img class="icon" :src="icon" />

        <h3 class="title">
           {{ title }}
        </h3>

        <p class="message">  
            {{ message }}
        </p>

        <button class="action" @click="emit('click')"> 
            {{ action }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
        message: String,
        action: String
    }
}
</script>

<style lang="scss" scoped>
.icon {
    padding-bottom: 15px;
}
.title {
    text-align: center;
    padding: 2px;
    font-family: $font_1_semibold;
}
.message {
    text-align: center;
    padding: 2px;
    color: $secondary_dark;
    font-size: 13px;
}
button {
    margin-top:40px;
}

</style>
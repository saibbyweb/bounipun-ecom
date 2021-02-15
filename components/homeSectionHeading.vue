<template>
<div class="section-title">
    <img v-if="icon !== undefined" :src="iconPath" />
    <div class="text-details">
        <h2> {{ heading }} </h2>
        <p> {{ tagline }} </p>
    </div>
</div>
</template>

<script>
export default {
    props: {
        icon: String,
        heading: String,
        tagline: String
    },
    computed: {
        iconPath() {
            return `/icons/${this.icon}`
        }
    }
}
</script>

<style lang="scss" scoped>
.section-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    padding:10px;
    box-sizing: border-box;

    img {
        height: 5vw;
    }
    
    .text-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-transform: uppercase;
        color: $dark_gray;
        margin-left: 10px;

        h2 {
            font-size: 5vw;
            font-weight: 100;
            letter-spacing: 5px;
        }
        p {
            letter-spacing: 2px;
            font-size: 2vw;
            font-weight: 500;
            opacity: 0.7;
        }
    }

}
</style>

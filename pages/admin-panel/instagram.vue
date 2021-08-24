<template>
    <div class="instagram">
        <!-- heading -->
        <img src="/icons/instagram.png" />
        <br />
        <br />
        <!-- authorize account -->
        <a :href="connectLink" target="_blank">
        <button class="action connect"> Connect Instagram Account </button>
        </a>
    </div>
</template>

<script>
export default {
    layout: "admin",
    data() {
        return {
            connectLink: 'https://saibbyweb.com/instafeed/authorize'
        }
    },
    methods: {
        instagramConnectLink() {
            return ``
        }
    }
}
</script>

<style lang="scss" scoped>
.instagram {
    margin-top:12vh;
    padding: 2%;

    .connect {
        background-color: rgb(33, 146, 195);
    }
}
</style>
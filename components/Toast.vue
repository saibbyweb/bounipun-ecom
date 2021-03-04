<template>
    <div class="toast">
        {{ msg }}
    </div>
</template>

<script>
export default {
    props: {
        msg: String
    }
}
</script>

<style lang="scss" scoped>
@keyframes showMessage {
    0% {
        bottom:-40px;
    }
    25% {
        bottom: 70px;
    }
    75% {
        bottom: 70px;
    }
    100% {
        bottom:-70px;
    }
}
.toast {
    background-color: #feed01;
    color: #111111;
    padding: 10px;
    border-radius: 9px;
    font-weight: 500;
    z-index: 2;
    position: fixed;
    bottom:-70px;
    right:100px;
    animation: showMessage 3s ease-in-out;
}
</style>
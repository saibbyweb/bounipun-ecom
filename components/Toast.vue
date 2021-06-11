<template>
<div class="response">
    <div v-if="show" class="toast center">
        <span class="msg">
            {{ msg }}
        </span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        msg: String,
        show: Boolean
    }
}
</script>

<style lang="scss" scoped>
.response {
    position:relative;
    height:2vw;
    width:100%;
}

@keyframes showMessage {
    0% {
        bottom: -30%;
    }

    100% {
        bottom: 20%;
    }
}

.toast {

    z-index: 2;
    position: absolute;
    bottom: 20%;
    left: 0;
    width: 100%;
    animation: showMessage 1s ease-in-out;

    .msg {
        padding: 10px;
        font-size: 10px;
        background-color: #2d985c;
        color: white;
        font-weight: 500;
    }
}
</style>

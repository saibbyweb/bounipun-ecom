<template>
<div class="cancel-update center">
    <img src="/icons/dark/minus.png" @click="$emit('close')" />
</div>
</template>

<style lang="scss" scoped>
.cancel-update {
    &:hover {
        img {
            width: 40px;
        }
    }
    img {
        transition: all 0.3s ease-in-out;
        width: 35px;
        cursor: pointer;
        filter: invert(1);
    }
    span {
        font-size: 10px;
    }
}
</style>

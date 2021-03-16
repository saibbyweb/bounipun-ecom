<template>
<div class="center-col add-new">
    <img @click="$emit('showForm')" src="/icons/addition-sign.png" />
    <button class="action" @click="$emit('showForm')"> Add New {{ label }} </button>
</div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: "Item"
        }
    }
}
</script>

<style lang="scss" scoped>
.add-new {
    cursor: pointer;
    width:100%;

    img {
        width:100px;
        margin:10px 0;
    }
}
</style>
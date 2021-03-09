<template>
<div class="select-box">
    <select class="select shadow" :value="value">
        <option v-for="(option, index) in options" :key="index" :value="option.value" @change="$emit('input', $event.target.value)"> {{ option.name }} </option>
    </select>
</div>
</template>

<script>
export default {
    props: {
        value: String,
        label: String,
        options: Array
    }
}
</script>

<style lang="scss" scoped>
.select-box {
    select {
        background: #ffffff;
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 3px;
        font-size: 15px;
        color: $dark_gray;
    }
}
</style>

<template>
<div class="select-box">
    <label v-if="label !== undefined" class="label"> {{ label }} </label>
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
.form-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2%;
    width: 100%;
}

.select-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .label {
        font-family: $font_2_bold;
        color: $gray;
        text-transform: uppercase;
        font-size: 10px;
        padding: 1%;
        margin-left: 5px;
        font-weight: 900;
    }

    select {
        background: #ffffff;
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 3px;
        font-size: 11px;
        color: $dark_gray;
    }
}
</style>

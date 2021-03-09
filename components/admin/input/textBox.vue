<template>
<div class="text-box">
    <label class="label"> {{ label }} </label>
    <textarea class="textarea-box" @input="$emit('input', $event.target.value)" :value="value"> </textarea>
</div>
</template>

<script>
export default {
    props: {
        label: String,
        value: String
    }
}
</script>

<style lang="scss" scoped>
.text-box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2%;
    width: 100%;

    .label {
        font-family: $font_2_bold;
        color: $gray;
        text-transform: uppercase;
        font-size: 10px;
        padding: 2%;
        margin-left: 5px;
        font-weight: 900;
    }

    .textarea-box {
        padding: 10px 15px;
        border: none;
        -webkit-appearance: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
        color: $gray;
        font-family: $font_2;
        letter-spacing: 1px;
        box-sizing: border-box;
        resize: none;
    }
}
</style>

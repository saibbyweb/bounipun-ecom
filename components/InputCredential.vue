<template>
    <div class="input-credential">
        <label class="label"> {{ label }} </label>
        <input class="input-box" :type="type" :value="value" @input="$emit('input', $event.target.value)" :disabled="disabled"/> 
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        value: String,
        type: { type: String, default: 'text'},
        disabled: { type: Boolean, default:  false }
    },
    data() {
        return {
            // value: ""
        }
    }
}
</script>

<style lang="scss" scoped>
.input-credential {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 5%;
    width:100%;

    .label {
        font-family: $font_2_bold;
        color: $gray;
        text-transform: uppercase;
        font-size: 10px;
        padding:2%;
        margin-left:5px;
        font-weight: 900;
}

    .input-box {
        padding: 10px 15px;
        border: none;
        -webkit-appearance: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
        color: $gray;
        font-family: $font_2_semibold;
        letter-spacing: 1px;
    }
}
</style>
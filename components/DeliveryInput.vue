<template>
<!-- delivery address field -->

    <div class="delivery-input">
        <input class="field" type="text" :value="value" @input="$emit('input', $event.target.value)"/>
        <label class="label"> {{ label }} </label>
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
.delivery-input {
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
    margin: 2% 0;

    .label {
        font-size: 12px;
        padding-left: 2%;
        transform: translateY(0%);
        color: #183437;
        transition: all 0.4s ease;
    }

    .field {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid $gray;
        width: 100%;
        padding: 2%;

        &:focus {
            border-bottom: 2px solid $dark_gray;
        }

    }

    .field:focus~.label {
        color: $dark_gray;
        transform: translateY(-20%);
    }

}
</style>

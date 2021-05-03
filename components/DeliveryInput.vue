<template>
<!-- delivery address field -->
<div class="delivery-input">
    <input class="field" type="text" :value="value" @input="$emit('input', $event.target.value)" autocomplete="new-password" :class="{error: error.status}" />
    <label class="label" :class="{error: error.status}"> {{ label }} </label>
</div>
</template>

<script>
export default {
    props: {
        label: String,
        value: String,
        error: {
            status: Boolean,
            msg: String
        },
    },
    data() {
        return {
            abc: []
        }
    },
    methods: {

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
        transition: all 0.2s ease;
        text-transform: uppercase;
        margin-bottom: 3px;
        letter-spacing: 0.2px;

        &.error {
            color: #bf3d3d;
        }
    }

    .field {
        border: none;
        border-radius: 0;
        // border-bottom: 1px solid $gray;
        width: 100%;
        padding: 2%;
        background-color: #e7e7e7;
        border-bottom: 2px solid #e7e7e7;
        transition: all 0.2s ease-in-out;

        &:focus {
            border-bottom: 2px solid $dark_gray;
        }

        &.error {
            border-bottom: 2px solid #bf3d3d;
        }

    }

    .field:focus~.label {
        color: #593e10;
        font-weight: 900;
        transform: translateY(-23%);
    }

}
</style>

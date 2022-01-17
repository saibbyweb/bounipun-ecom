<template>
    <div class="sw-checkbox ">
        <label class="label flex v-center"> 
        <input class="checkbox" type="checkbox" @change="emitChange" :value="value" :checked="value" :disabled="disabled"/>
        {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        value: Boolean,
        disabled: {
            type: Boolean, 
            default: false
        }
    },
    methods: {
        emitChange($event) {
            this.$emit('input', $event.target.checked)
        }
    }
}
</script>
<style lang="scss" scoped>
.sw-checkbox {
  
    .checkbox {
        height: 12px;
        width: 12px;
        margin-right:5px;
    }
    .label {
        font-family: $font_2;
        font-size: 12px;
        text-align: center;
        cursor: pointer;

    }

    @media(max-width: 768px) {
        .checkbox {
            height:25px;
            width:25px;
            margin-right:10px;
        }
    }
}
</style>
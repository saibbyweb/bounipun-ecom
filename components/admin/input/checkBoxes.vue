<template>
<div class="checkboxes-container">
    <label class="label"> {{ label }} </label>
    <div class="checkboxes center">
        <div class="checkbox center-col" v-for="(option, index) in localOptions" :key="index">
            <input class="check-input" type="checkbox" :value="option.value" v-model="option.checked" />
            <label class="label"> {{ option.name }} </label>
        </div>
    </div>

    <!-- price boxes -->
    <div v-if="local" style="display:flex; flex-wrap:wrap; align-items: flex-end; justify-content:space-evenly;">
        <div style="width:18%;" v-for="(fabric, index) in selectedOptions" :key="index">
            <InputBox :label="getFabricLabel(fabric.name)" placeholder="Price"/>
        </div>
    </div>
</div>
</template>

    
<script>
export default {
    mounted() {
        this.getLocalOptions();
    },
    props: {
        label: String,
        local: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            localOptions: [],
        }
    },
    computed: {
        selectedOptions() {
            return JSON.parse(JSON.stringify(this.localOptions.filter(option => option.checked === true)))
        }
    },
    methods: {
        getFabricLabel(fabricName) {
            return `${fabricName}`;
            return `Price (${fabricName} - ${this.label})`
        },
        getLocalOptions() {
            if (this.local === false) {
                this.localOptions = this.options;
                return this.options;
            }
            const local = JSON.parse(JSON.stringify(this.options));
            this.localOptions = local;
            return local;
        }
    }
}
</script>

    
<style lang="scss" scoped>
.checkboxes-container {
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
        padding: 1%;
        margin-left: 5px;
        font-weight: 900;
    }

    .checkboxes {
        box-sizing: border-box;
        flex-wrap: wrap;
        padding: 1%;
        width: 100%;

        .checkbox {
            padding: 10px 15px;
            margin: 10px;
            width: 14%;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);

            .label {
                font-family: $font_2_bold;
                color: $gray;
                text-transform: uppercase;
                font-size: 9px;
                padding: 1%;
                margin-top: 7px;
                font-weight: 900;
                text-align: center;
            }

            .check-input {
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>

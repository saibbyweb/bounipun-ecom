<template>
<div class="checkboxes-container">
    <label class="label"> {{ label }} </label>
    <div class="checkboxes center">
        <div class="checkbox center-col" v-for="(option, index) in options" :key="index">
            <input class="check-input" type="checkbox" :value="option.value" />
            <label class="label"> {{ option.name }} </label>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        label: String,
        options: Array
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
      
        padding: 5%;
        width: 100%;

        .checkbox {
            padding: 10px 15px;
            margin: 10px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);

            .label {
                font-family: $font_2_bold;
                color: $gray;
                text-transform: uppercase;
                font-size: 10px;
                padding: 1%;
                margin-top: 7px;
                font-weight: 900;
            }

            .check-input {
                width: 2vw;
                height: 2vw;
                  cursor: pointer;
            }
        }
    }
}
</style>

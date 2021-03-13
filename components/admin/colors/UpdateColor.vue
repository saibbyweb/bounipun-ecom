<template>
<div class="update-color">
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Color </h2>
    <!-- color code -->
    <InputBox label="color code" v-model="color.code" />
    <!-- color type -->
    <InputBox label="Value" v-model="color.value" />
    <!-- type of color -->
    <SelectBox :options="colorTypes" v-model="color.type" label="Type of color" />
    <!-- publish toggle -->
    <Toggle v-model="color.status" label="Status" inactiveText="Not Live" />
    <!-- update button -->
    <div class="center-col">
        <br>
        <button class="action"> {{ editMode ? "Edit" : "Add" }} color </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            editMode: false,
            colorTypes: [{
                    name: 'Select color Type',
                    value: 'select'
                },
                {
                    name: 'Percentage',
                    value: 'percent'
                },
                {
                    name: 'Direct',
                    value: 'direct'
                }
            ],
            color: {
                code: "",
                value: "",
                type: "select",
                description: "",
                status: false
            }
        }
    }
}
</script>

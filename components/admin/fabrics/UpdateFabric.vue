<template>
<div class="update-fabric">
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Fabric </h2>
    <!-- fabric id -->
    <InputBox label="fabric ID" v-model="fabric.id" />
    <!-- fabric name -->
    <InputBox label="fabric Name" v-model="fabric.name" />
    <!-- description -->
    <TextBox v-model="fabric.description" label="Description" />
    <!-- publish toggle -->
    <Toggle v-model="fabric.status" label="Status" inactiveText="Not Live" />
    <!-- update button -->
    <div class="center-col">
        <br>
        <button class="action"> {{ editMode ? "Edit" : "Add" }} Fabric </button>
    </div>

    <UploadImage :multipleUpload="false" label="Add Fabric Images"/>

</div>
</template>

<script>
export default {
    data() {
        return {
            editMode: false,
            fabric: {
                id: "",
                name: "",
                description: "",
                status: false
            },
        }
    }
}
</script>

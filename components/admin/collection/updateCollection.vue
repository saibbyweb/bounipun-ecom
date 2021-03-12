<template>
<div class="update-collection">
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Collection </h2>
    <!-- collection id -->
    <InputBox label="Collection ID" v-model="collection.id" />
    <!-- collection name -->
    <InputBox label="Collection Name" v-model="collection.name" />
    <!-- description -->
    <TextBox v-model="collection.description" label="Description" />
    <!-- publish toggle -->
    <Toggle v-model="collection.published" label="Status" inactiveText="Not Live" />

    <div class="center-col">
        <br>
        <button class="action"> {{ editMode ? "Edit" : "Add" }} Collection </button>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            editMode: false,
            collection: {
                id: "",
                name: "",
                description: "",
                published: false
            }
        }
    }
}
</script>

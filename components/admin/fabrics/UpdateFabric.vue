<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Fabric </h2>
    <!-- fabric id -->
    <InputBox v-if="editMode" label="fabric ID" v-model="fabric._id" />
    <!-- fabric name -->
    <InputBox label="fabric Name" v-model="fabric.name" />
    <!-- description -->
    <TextBox v-model="fabric.description" label="Description" />
    <!-- upload fabric image -->
    <!-- <UploadImage :multipleUpload="false" label="Set Fabric Image"/> -->
    <!-- publish toggle -->
    <Toggle v-model="fabric.status" label="Status" />

    <!-- update button -->
    <div class="center-col">
        <br>
                <img v-if="loading" class="loading" src="/loading.gif" />
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Fabric </button>

    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            model: 'fabrics',
            editMode: false,
            fabric: {
                _id: "",
                name: "",
                description: "",
                status: false
            },
            loading: false,
            updated: false
        }
    },
    methods: {
        async updateDocument(model, details, editMode) {
            this.loading = true;
            const result = await this.$updateDocument(this.model, this.fabric, this.editMode);
            this.loading = false;

            if (!result.updated)
                return;

            this.$emit('updated');
            this.setFabric(result.doc);
            this.$flash(this);

        },
        setFabric(details) {
            const { _id, name, description, status } = details;
            this.fabric = { _id, name, description, status };
            this.editMode = true;
        },
        closeForm() {
            this.resetForm();
            this.$emit('close');
        },
        resetForm() {
            this.setFabric({
                _id: "",
                name: "",
                description: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>

<template>
<div class="update-fabric">
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
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Fabric </button>
        <img v-if="loading" class="loading" src="/loading.gif" />
        <img v-if="updated" class="action-complete" src="/complete.gif" />
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

            if(result.updated) {
                this.$emit('updated');
                this.$flash(this);
            }

        },
        setFabric(details) {
            console.log('from update fabrics', details);
            this.fabric = details;
            this.editMode = true;
        }
    }
}
</script>

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
        <button @click="updateDocument" class="action"> {{ editMode ? "Edit" : "Add" }} Fabric </button>
    </div>

    <UploadImage :multipleUpload="false" label="Add Fabric Images"/>

</div>
</template>

<script>
export default {
    data() {
        return {
            model: 'fabrics',
            editMode: false,
            fabric: {
                id: "",
                name: "",
                description: "",
                status: false
            },
        }
    },
    methods: {
        async updateDocument(model, details, editMode) {
            const update = this.$axios.$post('/updateDocument', { 
                model: this.model,
                details: this.fabric,
                editMode: this.editMode
            });
            
            const { response, error } = await this.$task(update);

            if(error) {
                console.log('something wrong happened');
            }

            console.log(response);

        }
    }
}
</script>

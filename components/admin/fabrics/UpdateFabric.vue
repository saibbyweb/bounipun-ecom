<template>
<div class="update-fabric">
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Fabric </h2>
    <!-- fabric id -->
    <!-- <InputBox label="fabric ID" v-model="fabric.id" /> -->
    <!-- fabric name -->
    <InputBox label="fabric Name" v-model="fabric.name" />
    <!-- description -->
    <TextBox v-model="fabric.description" label="Description" />
    <!-- upload fabric image -->
    <UploadImage :multipleUpload="false" label="Set Fabric Image"/>
    <!-- publish toggle -->
    <Toggle v-model="fabric.status" label="Status" inactiveText="Not Live" />
    
    <!-- update button -->
    <div class="center-col">
        <br>
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Fabric </button>
        <img v-if="loading" class="loading" src="/loading.gif" />
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
            loading: false
        }
    },
    methods: {
        async updateDocument(model, details, editMode) {
            this.loading = true;

            const update = this.$axios.$post('/updateDocument', { 
                model: this.model,
                details: this.fabric,
                editMode: this.editMode
            });

            const { response, error } = await this.$task(update);

            this.loading = false;

            if(error) {
                console.log('something wrong happened');
                return;
            }

            this.$emit('updated');

            console.log(response);

        },
        setFabric(details) {
            console.log('from update fabrics', details);
            this.fabric = details;
            this.editMode = true;
        }
    }
}
</script>

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

            const result = await this.$updateDocument(this.model, this.fabric, this.editMode);
            this.loading = false;

            console.log(result);

            if(result.updated) {
                this.$emit('updated');
            }
            
            return;

        },
        setFabric(details) {
            console.log('from update fabrics', details);
            this.fabric = details;
            this.editMode = true;
        }
    }
}
</script>

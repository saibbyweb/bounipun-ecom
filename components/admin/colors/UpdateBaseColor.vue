<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Base Color </h2>
    <!-- fabric id -->
    <InputBox v-if="editMode" label="Base Color ID" v-model="doc._id" disabled :internal="true" />
    <!-- fabric name -->
    <InputBox label="Base Color Name" v-model="doc.name" />
    <br>
    <!-- color picker -->
    <client-only>
        <div class="center" style="position:relative;">
            <verte model="hex" @input="colorPicked" style="position:absolute; right: 5%; top:50%;" menuPosition="right" :value="doc.hex" />
            <!-- fabric name -->
            <InputBox label="HEX Color" v-model="doc.hex" />

            
        </div>
    </client-only>

    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />

    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />

    <!-- update button -->
    <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Base Color </button>
        <!-- delete document -->
        <button v-if="editMode" @click="deleteDocument" class="action delete" :disabled="loading"> Delete </button>
    </div>

</div>
</template>

<script>
export default {
    props: {
        model: String
    },
    data() {
        return {
            editMode: false,
            doc: {
                _id: "",
                name: "",
                hex: "",
                description: "",
                status: false
            },
            pickedColor: "",
            loading: false,
            updated: false
        }
    },
    methods: {
        colorPicked(event) {
            this.doc.hex = event;
        },
        async updateDocument(model, details, editMode) {
            this.loading = true;
            const result = await this.$updateDocument(this.model, this.doc, this.editMode);
            this.loading = false;
            if (!result.updated)
                return;
            this.$emit('updated');
            this.populateForm(result.doc);
            this.$flash(this);
        },
        async deleteDocument() {
            this.loading = true;
            const result = await this.$deleteDocument(this.model, this.doc._id);
            this.loading = false;
            if (!result.deleted)
                return;
            this.$emit('updated');
            this.resetForm();
            this.$flash(this);
        },
        populateForm(details) {
            const {
                _id,
                name,
                hex,
                description,
                status
            } = details;
            this.doc = {
                _id,
                name,
                hex,
                description,
                status
            };
            this.editMode = true;
        },
        closeForm() {
            this.resetForm();
            this.$emit('close');
        },
        resetForm() {
            this.populateForm({
                _id: "",
                name: "",
                hex: "",
                description: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>

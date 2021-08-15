<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Message </h2>
    <!-- message id -->
    <InputBox v-if="editMode" label="Message ID" v-model="doc._id" disabled :internal="true" />
    <!-- sender name -->
    <InputBox label="Variant Name" v-model="doc.name" disabled />
    <!-- email -->
    <InputBox v-model="doc.email" label="Email" disabled :internal="true" />
     <!-- subject -->
    <InputBox v-model="doc.subject" label="Subject" disabled/>
    <!-- Message -->
    <TextBox v-model="doc.message" label="Subject" disabled/>
    <!-- read toggle -->
    <Toggle v-model="doc.read" label="Status:" activeText="Read" inactiveText="Unread" />

    <!-- update button -->
    <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Message </button>
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
                email: "",
                subject: "",
                message: "",
                read: false
            },
            loading: false,
            updated: false
        }
    },
    methods: {
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
                email,
                subject,
                message,
                read
            } = details;
            this.doc = {
                _id,
                name,
                email,
                subject,
                message,
                read
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
                email: "",
                subject: "",
                message: "",
                read: false
            });

            this.editMode = false;
        }
    }
}
</script>

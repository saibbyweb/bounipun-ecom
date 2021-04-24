<template>
<div class="update-collection">
    <!-- abort update process -->
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add' }} Collection </h2>

    <!-- preview link -->
    <div class="center">
        <a v-if="editMode" :href="`/Collections?slug=${doc.slug}`" target="_blank">
            <span style="background:#333; text-align:center; color:white; font-size: 12px; padding:2px 4px; border-radius:2px;"> Preview Collection ➚
            </span>
        </a>
    </div>

    <!-- collection id -->
    <InputBox v-if="editMode" label="Collection ID" v-model="doc._id" disabled :internal="true" />
    <!-- collection name -->
    <InputBox v-model="doc.name" label="Collection Name" />
    <!-- slug -->
    <InputBox v-model="doc.slug" label="Slug" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- edt -->
    <InputBox v-model="doc.edt" label="Estimated Time of Delivery (IN WEEKS)" type="number" :internal="true" />
     <!-- set color image -->
    <UploadImage ref="imageUploader" :multipleUpload="false" label="Set Collection Header Image" @updated="imageListUpdated" />
       <!-- publish toggle -->
    <Toggle v-model="doc.lock" label="🔒 Lock" />
    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" /> 
    <!-- update button -->
    <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Collection </button>
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
                id: "",
                name: "",
                slug: "",
                description: "",
                edt: "",
                image: "",
                lock: false,
                status: false
            },
            loading: false,
            updated: false
        }
    },
    methods: {
        imageListUpdated(list) {
            this.doc.image = list.length > 0 ? list[0].path : "";
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
                slug,
                description,
                edt,
                image,
                lock,
                status
            } = details;

            this.doc = {
                _id,
                name,
                slug,
                description,
                edt: edt !== null ? edt.toString() : "",
                image,
                lock,
                status
            };
            this.editMode = true;
        },
        closeForm() {
            this.resetForm();
            this.$emit('close');
        },
        resetForm() {
            this.$refs.imageUploader.clearFileSelection();
            this.populateForm({
                _id: "",
                name: "",
                slug: "",
                description: "",
                edt: "",
                image: "",
                lock: false,
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>

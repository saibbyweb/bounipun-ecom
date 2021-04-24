<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Variant </h2>
    <!-- fabric id -->
    <InputBox v-if="editMode" label="Variant ID" v-model="doc._id" disabled :internal="true" />
    <!-- fabric name -->
    <InputBox label="Variant Name" v-model="doc.name" />
    <!-- category -->
    <SelectBox :options="variantCategories" v-model="doc.category" label="Type of Variant" :internal="true" />
    <!-- code -->
    <InputBox v-model="doc.code" label="Bounipun Code" :internal="true" />
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- info #1 -->
    <InputBox v-model="doc.info1" label="Info #1" />
    <!-- info #2 -->
    <InputBox v-model="doc.info2" label="Info #2" />
    <!-- set color image -->
    <UploadImage ref="imageUploader" :multipleUpload="false" label="Set Variant Image" @updated="imageListUpdated" />

    <br>
    <!-- color picker -->
    <client-only>
        <div class="center" style="position:relative;">
            <verte model="hex" @input="colorPicked" style="position:absolute; right: 5%; top:50%;" menuPosition="right" :value="doc.hex" />
            <!-- fabric name -->
            <InputBox label="HEX Color" v-model="doc.hex" />
        </div>
    </client-only>

    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />
    <!-- update button -->
    <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Variant </button>
        <!-- delete document -->
        <button v-if="editMode" @click="deleteDocument" class="action delete" :disabled="loading"> Delete </button>
    </div>
</div>
</template>

<script>
export default {
    props: {
        model: String,
        variantCategories: Array
    },
    data() {
        return {
            editMode: false,
            doc: {
                _id: "",
                name: "",
                category: "",
                code: "",
                description: "",
                info1: "",
                info2: "",
                image: "",
                hex: "",
                status: false
            },
            loading: false,
            updated: false
        }
    },
    methods: {
        colorPicked(event) {
            this.doc.hex = event;
        },
        imageListUpdated(list) {
            this.doc.image = list.length > 0 ? list[0].path : "";
        },
        async updateDocument(model, details, editMode) {
            if (this.doc.category === "")
                return;

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
                category,
                code,
                description,
                info1,
                info2,
                image,
                hex,
                status
            } = details;
            this.doc = {
                _id,
                name,
                category,
                code,
                description,
                info1,
                info2,
                image,
                hex,
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
                category: "",
                code: "",
                description: "",
                info1: "",
                info2: "",
                image: "",
                hex: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>

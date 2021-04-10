<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Coupon </h2>
    <!-- coupon ID -->
    <InputBox v-if="editMode" label="Coupon ID" v-model="doc._id" disabled :internal="true" />
    <!-- coupon code -->
    <InputBox label="Coupon Code" v-model="doc.code" />
    <!-- coupon type -->
    <SelectBox :options="couponTypes" v-model="doc.type" label="Select Coupon Type" />
    <!-- coupon type -->
    <InputBox label="Value" v-model="doc.value" type="number" />
    <!-- coupon validity -->
    <InputBox label="Validity" v-model="doc.validity" type="number" />
    <!-- validity range -->
    <label class="label"> Validity Range </label>
    <client-only>
    <v-datepicker color="purple" is-range v-model="doc.validityRange" />
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
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Coupon </button>
        <!-- delete document -->
        <button v-if="editMode" @click="deleteDocument" class="action delete" :disabled="loading"> Delete </button>
    </div>
</div>
</template>

<script>
export default {
    props: {
        model: String,
    },
    data() {
        return {
            editMode: false,
            doc: {
                _id: "",
                code: "",
                type: "",
                value: "",
                validity: "",
                validityRange: "",
                description: "",
                status: false
            },
            couponTypes: [{
                    name: 'Select Type',
                    value: null
                },
                {
                    name: 'Percentage',
                    value: 'percentage'
                },
                {
                    name: 'Direct Discount',
                    value: 'direct-discount'
                }
            ],
            loading: false,
            updated: false
        }
    },
    mounted() {},
    methods: {
        async updateDocument() {
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
                code,
                type,
                value,
                validity,
                validityRange,
                description,
                status
            } = details;
            this.doc = {
                _id,
                code,
                type,
                value: value.toString(),
                validity: validity.toString(),
                validityRange,
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
                code: "",
                type: "",
                value: "",
                validity: "",
                validityRange: {},
                description: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.section {
    position: relative;
    ;
    margin: 10px;
    padding: 5px 5px 30px 5px;
    border-radius: 5px;
    overflow: hidden;
}

.label {
    font-family: $font_2_bold;
    color: $gray;
    text-transform: uppercase;
    font-size: 10px;
    padding: 2%;
    margin-left: 5px;
    font-weight: 900;
}
</style>

<template>
<div class="contents">
    <CancelUpdate @close="closeForm" />
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Product List </h2>
    <!-- product list id -->
    <InputBox v-if="editMode" label="Product List ID" v-model="doc._id" disbaled :internal="true" />
    <!-- product list name -->
    <InputBox label="Product List Name" v-model="doc.name" />

    <div class="center">
        <div class="list" v-for="(product,index) in doc.list" :key="index"> {{ product.name }}
            <!-- <img @click="removeProduct(index)" src="@/assets/trash.svg" /> -->
        </div>
    </div>

    <!-- info name -->
    <autocomplete ref="autocomplete" :source="allProducts" @enter="addProduct" @selected="addProduct">
    </autocomplete>
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" />
    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />
    <!-- update button -->
    <div class="center-space">
        <!-- loading bar -->
        <img v-if="loading" class="loading" src="/loading.gif" />
        <!-- action complete gif -->
        <img v-if="updated" class="action-complete" src="/complete.gif" />
        <!-- update document -->
        <button @click="updateDocument" class="action" :disabled="loading"> {{ editMode ? "Edit" : "Add" }} Product List </button>
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
                list: [],
                description: "",
                status: false
            },
            allProducts: [],
            loading: false,
            updated: false
        }
    },
    mounted() {
        this.fetchAllProducts();
    },
    methods: {
        removeProduct(index) {
            this.doc.list.splice(key, 1);
        },
        addProduct(data) {
            console.log('Update product list');
            this.doc.list.push(data.selectedObject)
        },
        async fetchAllProducts() {
            const result = await this.$fetchCollection('products');
            this.allProducts = result.docs.map(({
                _id,
                styleId,
                name
            }) => {
                return {
                    _id,
                    styleId,
                    name
                }
            });

            console.log(this.allProducts);
        },
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
                name,
                list,
                description,
                status
            } = details;

            this.doc = {
                _id,
                name,
                list,
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
                list: [],
                description: "",
                status: false
            });
            this.editMode = false;
        }
    }
}
</script>

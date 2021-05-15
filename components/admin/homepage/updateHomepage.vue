<template>
<div class="contents">
    <!-- cancel update -->
    <CancelUpdate @close="closeForm" />
    <!-- heading text -->
    <h2 class="heading"> {{ editMode ? 'Update' : 'Add New' }} Homepage </h2>
    <!-- homepage id -->
    <InputBox v-if="editMode" label="Homepage ID" v-model="doc._id" disabled :internal="true" />
    <!-- homepage name -->
    <InputBox label="Homepage Name" v-model="doc.name" />
    <!-- main slideshow -->
    <div class="main-slideshow">
        <label class="Main Slideshow" />
        <!-- slideshow images -->
        <UploadImage ref="imageUploader" :multipleUpload="true" label="Set Slideshow Images" @updated="imageListUpdated('mainSlideshow')" />
        <!-- visiblity toggle -->
        <Toggle v-model="doc.mainSlideshow.visible" label="Visiblity" activeText="Live" inactiveText="Hidden" width="100px" />
    </div>

    <!-- collections block -->
    <div class="collection-blocks">
        <label class="label"> Set Collection Block: </label>
        <!-- loop through all blocks-->
        <div class="block shadow" v-for="(block,index) in doc.collectionBlocks" :key="block.key">
            <!-- select bounipun collection -->
            <SelectBox :options="allCollections" v-model="block.bounipun_collection" label="Select Bounipun Collection" />
            <!-- collection slideshow images -->
            <UploadImage ref="imageUploader_collection" :multipleUpload="true" label="Set Collection Images" @updated="imageListUpdated('collectionBlock', index)" />
            <!-- text 1 -->
            <InputBox label="Text 1" v-model="block.text1" />
            <!-- text 2 -->
            <TextBox v-model="block.text2" label="Text 2" />
            <!-- text 3 -->
            <InputBox label="Text 3" v-model="block.text3" />
            <!-- button text -->
            <InputBox label="Button Text" v-model="block.buttonText" />
            <!-- visiblity toggle -->
            <Toggle v-model="block.visible" label="Visiblity" activeText="Live" inactiveText="Hidden" width="100px" />
        </div>

    </div>
    <!-- product list block -->
    <div class="product-list-blocks">
        <label class="label"> Set Product List Blocks: </label>
        <!-- loop through all blocks-->
        <div class="block shadow" v-for="(block, index) in doc.productListsBlocks" :key="block.key">
            <!-- select product list -->
            <SelectBox :options="allProductList" v-model="block.productList" label="Select Product List" />
            <!-- set product list image -->
            <UploadImage ref="imageUploader_productList" :multipleUpload="false" label="Set Product List Image" @updated="imageListUpdated('productListBlock', index)" />
            <!-- text 1 -->
            <InputBox label="Text 1" v-model="block.text1" />
            <!-- text 2 -->
            <TextBox v-model="block.text2" label="Text 2" />
            <!-- button text -->
            <InputBox label="Text 1" v-model="block.buttonText" />
            <!-- visiblity toggle -->
            <Toggle v-model="block.visible" label="Visiblity" activeText="Live" inactiveText="Hidden" width="100px" />
        </div>
    </div>
    <!-- bounipun lab -->
    <div class="bounipun-lab">
        <label class="label"> Bounipun Lab: </label>
        <!-- heading -->
        <InputBox label="Heading" v-model="doc.bounipunLab.heading" />
        <!-- paragraph -->
        <InputBox label="Paragraph" v-model="doc.bounipunLab.paragraph" />
        <!-- button text -->
        <InputBox label="Button Text" v-model="doc.bounipunLab.buttonText" />
        <!-- bounipun lab image -->
        <UploadImage ref="imageUploader_bounipunLab" :multipleUpload="false" label="Set Bounipun Lab Image" @updated="imageListUpdated('bounipunLab')" />
        <!-- visiblity toggle -->
        <Toggle v-model="doc.bounipunLab.visible" label="Visiblity" activeText="Live" inactiveText="Hidden" width="100px" />
    </div>
    <!-- quote -->
    <div class="quote">
        <label class="label"> Quote: </label>
        <!-- heading -->
        <InputBox label="Heading" v-model="doc.quote.heading" />
        <!-- paragraph -->
        <InputBox label="Paragraph" v-model="doc.quote.paragraph" />
        <!-- visiblity toggle -->
        <Toggle v-model="doc.quote.visible" label="Visiblity" activeText="Live" inactiveText="Hidden" width="100px" />
    </div>
    <!-- press -->
    <div class="press">
        <label class="label"> Press: </label>
        <!-- press logo -->
        <UploadImage ref="imageUploader_logo" :multipleUpload="false" label="Set Logo" @updated="imageListUpdated" />
        <!-- image list -->
        <UploadImage ref="imageUploader_pressImageList" :multipleUpload="true" label="Set Press Image List" @updated="imageListUpdated('press')" />
        <!-- visiblity toggle -->
        <Toggle v-model="doc.press.visible" label="Visiblity" activeText="Live" inactiveText="Hidden" width="100px" />
    </div>
    <!-- instagram -->
    <div class="instagram">
        <label class="label"> Instagram: </label>
        <!-- visiblity toggle -->
        <Toggle v-model="doc.instagram.visible" label="Visiblity" activeText="Live" inactiveText="Hidden" width="100px" />
    </div>
    <!-- description -->
    <TextBox v-model="doc.description" label="Description" :internal="true" />
    <!-- publish toggle -->
    <Toggle v-model="doc.status" label="Status" />
</div>
</template>

<script>
import {
    v4 as uuidv4
} from "uuid";

const baseDocument = {
        _id: "",
        name: "",
        mainSlideshow: [{
            slides: {
                _id: "",
                mainImage: false,
                path: ""
            },
            visible: false
        }],
        mainTextBlock: {
            text1: "",
            text2: "",
            text3: "",
            visible: false
        },
        collectionBlocks: [{
            bounipun_collection: "",
            slideshow: [{
                _id: "",
                mainImage: false,
                path: ""
            }],
            text1: "",
            text2: "",
            text3: "",
            buttonText: "",
            visible: false,
            key: uuidv4()
        }],
        productListsBlocks: [{
            productList: "",
            image: "",
            text1: "",
            text2: "",
            buttonText: "",
            visible: false,
            key: uuidv4()
        }],
        bounipunLab: {
            heading: "",
            paragraph: "",
            image: "",
            buttonText: "",
            visible: false
        },
        quote: {
            heading: "",
            paragraph: "",
            visible: false
        },
        press: {
            logo: "",
            imageList: [{
                path: "",
                mainImage: false
            }],
            visible: false
        },
        instagram: {
            text: "",
            visible: false
        },
        description: "",
        status: false
    },

    export default {
        /* close form */
        /* slideshow list updated (x6) */
        /* add unique key to every block */
        /* fetch allCollections  */
        props: {
            model: String
        },
        data() {
            return {
                editMode: false,
                doc: baseDocument,
                allCollections: [],
                allProductLists: [],
                loading: false,
                updated: false
            }
        },
        mounted() {
            this.fetchAllCollections();
            this.fetchAllProductLists();
        },
        methods: {
            imageListUpdated(property, index) {
                switch (property) {
                    /* multiple */
                    case 'mainSlideshow':
                        break;
                        /* multiple */
                    case 'collectionBlock':
                        break;
                    case 'productListBlock':
                        break;
                    case 'bounipunLab':
                        break;
                        /* multiple */
                    case 'press':
                        break;
                }
            },
            async fetchAllCollections() {
                const result = await this.$fetchCollection('collections');
                this.allProductLists = result.docs.map(({
                    _id,
                    name
                }) => {
                    return {
                        name,
                        value: _id
                    }
                });
                this.allCollections.unshift({
                    name: 'Select Bounipun Collection',
                    value: ''
                });
            },
            async fetchAllProductLists() {
                const result = await this.$fetchCollection('product_lists');
                this.allProductLists = result.docs.map(({
                    _id,
                    name
                }) => {
                    return {
                        name,
                        value: _id
                    }
                });
                this.allProductLists.unshift({
                    name: 'Select Product List',
                    value: ''
                });
            },
            /* add collection block */
            addCollectionBlock() {
                this.doc.collectionBlocks.push({
                    bounipun_collection: "",
                    slideshow: [{
                        _id: "",
                        mainImage: false,
                        path: ""
                    }],
                    text1: "",
                    text2: "",
                    text3: "",
                    buttonText: "",
                    visible: false,
                    key: uuidv4()
                })
            },
            /* add product list block */
            addProductListBlock() {
                this.doc.productListsBlocks.push({
                    productList: "",
                    image: "",
                    text1: "",
                    text2: "",
                    buttonText: "",
                    visible: false,
                    key: uuidv4()
                })
            },
            /* remove collection or product list block */
            removeBlock(property, key) {
                this.doc[property].splice(key, 1);
            },
            closeForm() {
                this.resetForm();
                this.$emit('close')
            },
            resetForm() {
                this.doc = baseDocument;
            }
        }
    }
</script>

<style lang="scss">
</style>

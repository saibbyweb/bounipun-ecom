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
    <!-- slideshow images -->
    <UploadImage ref="imageUploader" :multipleUpload="true" label="Set Slideshow Images" @updated="slideshowListUpdated" />
    <!-- collections block -->
    <div class="collection-blocks">
        <label class="label"> Set Collection Block: </label>
        <!-- loop through all blocks-->
        <div class="block shadow" v-for="(block) in doc.collectionBlocks" :key="block.key">
            <!-- select bounipun collection -->
            <SelectBox :options="allCollections" v-model="block.bounipun_collection" label="Select Bounipun Collection" />
            <!-- collection slideshow images -->
            <UploadImage ref="imageUploader_collection" :multipleUpload="true" label="Set Collection Images" @updated="slideshowListUpdated" />
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
        <div class="block shadow" v-for="(block) in doc.productListsBlock" :key="block.key">
            <!-- select product list -->
            <SelectBox :options="allProductList" v-model="block.productList" label="Select Product List" />
            <!-- set product list image -->
            <UploadImage ref="imageUploader_productList" :multipleUpload="false" label="Set Product List Image" @updated="imageListUpdated" />
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
        <UploadImage ref="imageUploader_bounipunLab" :multipleUpload="false" label="Set Product List Image" @updated="imageListUpdated" />
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
        <UploadImage ref="imageUploader_pressImageList" :multipleUpload="true" label="Set Press Image List" @updated="slideshowListUpdated" />
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
export default {
    /* close form */
    /* slideshow list updated (x6) */
    /* add unique key to every block */
    /* fetch allCollections  */
}
</script>

<style lang="scss">
</style>

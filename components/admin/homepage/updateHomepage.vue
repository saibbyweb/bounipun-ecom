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
            <TextBox v-model="block.text2" label="Text 2" :internal="true" />
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
        <!-- select product list -->
        <SelectBox :options="allProductList" v-model="block.productList" label="Select Product List" />
    </div>

</div>
</template>

<script>
export default {
    /* close form */
    /* slideshow list updated (x2) */
    /* add unique key to every block */
    /* fetch allCollections  */
}
</script>

<style lang="scss">
</style>

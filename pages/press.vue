<template>
<div class="press">
    <slideshow ref="slideshow" :images="pressImageList" :slideshowOptions="{thumbnails: true}" :slideHeight="'60vh'" :size="'cover'" />
        <!-- main text block -->
    <div class="main-text-block center-col">
        <h2 class="text-1"> Bounipun in Press </h2>
        <p class="text-2">  </p>
        <p class="text-3"> "without emotions there’s no beauty" </p>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        this.fetchPressImages();
    },
    data() {
        return {
            pressImageList: []
        }
    },
    methods: {
        async fetchPressImages() {
            /* fetch active homepage layout */
            const layout = await this.$fetchData('homepages', {
                status: true
            });

            if (!layout.fetched) {
                console.log('Layout not fetched');
                return;
            }
            console.log(layout.doc.press.imageList);
            this.pressImageList = layout.doc.press.imageList.map(image => this.$getImagePath(image.path))
        }
    }
}
</script>

<style lang="scss" scoped>
.press {
    margin-top: 10vh;
}

.main-text-block {
    padding:30px 5%;
    .text-1 {
        font-family: $font_3_bold;
        margin-bottom: 10px;
        font-size: 26px;
        text-transform: uppercase;
    }

    .text-2 {
        font-size: 14px;
        text-align: justify;
        margin-bottom: 5px;
        font-family: $font_1;
    }

    .text-3 {
        font-family: $font_4;
        font-size: 19px;
    }
}
</style>

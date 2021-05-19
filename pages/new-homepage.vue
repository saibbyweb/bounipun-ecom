<template>
<div class="homepage" v-if="layout !== null">
    <!-- slidehshow -->
    <slideshow v-if="layout.mainSlideshow.visible" size="cover" :images="fetchSlideshow(layout.mainSlideshow.slides)" :slideHeight="'120vw'" />
    <!-- main text block -->
    <div v-if="layout.mainTextBlock.visible" class="main-text-block flex center-col">
        <h2 class="text-1"> {{ layout.mainTextBlock.text1 }} </h2>
        <p class="text-2"> {{ layout.mainTextBlock.text2 }} </p>
        <p class="text-3"> {{ layout.mainTextBlock.text3 }} </p>
    </div>
    <!-- collection blocks -->
    <div class="collection-blocks blocks">
        <div class="block flex center-col" v-for="(block, index) in layout.collectionBlocks" :key="index">

            <div class="cover">
                <slideshow size="cover" :images="fetchSlideshow(block.slideshow)" :slideHeight="'120vw'" :dots="false" />
                <div class="cta center">
                    <button class="action"> {{ block.buttonText }} </button>
                </div>
            </div>

            <h2 class="text-1"> {{ block.text1 }} </h2>
            <p class="text-2"> {{ block.text2 }} </p>
            <p class="text-3"> {{ block.text3 }} </p>

        </div>
    </div>
    <!-- product list block -->
    <div class="product-blocks blocks">
        <div class="block flex center-col" v-for="(block, index) in layout.productListBlocks" :key="index">
            <!-- product list block cover image -->
            <div class="cover" :style="`background-image: url(${$getImagePath(block.image)})`">
                <div class="cta center">
                    <button class="action"> {{ block.buttonText }} </button>
                </div>
            </div>
            <h2 class="text-1"> {{ block.text1 }} </h2>
            <p class="text-2"> {{ block.text2 }} </p>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            layout: null,
            mainSlideshowImages: [],
            sections: []
        }
    },
    mounted() {
        this.fetchHomepageLayout();
    },
    methods: {
        async fetchHomepageLayout() {
            const layout = await this.$fetchData('homepages', {
                status: true
            });
            if (!layout.fetched) {
                console.log('Layout not fetched');
                return;
            }

            this.layout = layout.doc;
            console.log(this.layout);

            this.setSlideshow(this.layout.mainSlideshow.slides);

            const totalCollectionBlocks = this.layout.collectionBlocks.length;
            const totalProductListBlocks = this.layout.productListBlocks.length;

            let i = 0;
            let sections = [];
            const maxSections = totalCollectionBlocks > totalProductListBlocks ? totalCollectionBlocks : totalProductListBlocks;

            for (i = 0; i < maxSections; i++) {
                let section = {};
                section.collectionBlock = this.layout.collectionBlocks[i] !== undefined ? this.layout.collectionBlocks[i] : false;
                section.productListBlock = this.layout.productListBlocks[i] !== undefined ? this.layout.productListBlocks[i] : false;
                sections.push(section);
            }

            this.sections = sections;
            console.log(sections);
        },
        setSlideshow(images) {
            this.mainSlideshowImages = images.map(image => process.env.baseAWSURL + image.path);
        },
        fetchSlideshow(images) {
            return images.map(image => process.env.baseAWSURL + image.path);
        }
    }
}
</script>

<style lang="scss">
.homepage {

    /* main text block */
    .main-text-block {
        .text1 {}

        .text2 {}

        .text3 {}
    }

    .blocks {
        .block {
            .cover {
                position: relative;

                .cta {
                    position: absolute;
                    bottom: 10%;
                    width: 100%;

                    .action {
                        width: 50%;
                    }
                }
            }
        }
    }

    /*  */
    .collection-blocks {}

    .product-blocks {
        .block {
            .cover {
                width: 100vw;
                height: 100vw;
                background-size: cover;
                background-position: center;
            }
        }

    }
}
</style>

<template>
<div class="homepage" v-if="layout !== null">
    <!-- slidehshow -->
    <slideshow v-if="layout.mainSlideshow.visible" size="cover" :images="fetchSlideshow(layout.mainSlideshow.slides)" :slideHeight="'120vw'" />
    <!-- main text block -->
    <div v-if="layout.mainTextBlock.visible" class="main-text-block flex center-col pad">
        <h2 class="text-1"> {{ layout.mainTextBlock.text1 }} </h2>
        <p class="text-2"> {{ layout.mainTextBlock.text2 }} </p>
        <p class="text-3"> {{ layout.mainTextBlock.text3 }} </p>
        <p class="author"> {{ layout.mainTextBlock.author }} </p>
        
    </div>
    <!-- collection blocks -->
    <div class="collection-blocks blocks section">
        <div class="block flex center-col" v-for="(block, index) in layout.collectionBlocks" :key="index">
            <div v-if="block.visible">
            <div class="cover">
                <slideshow size="cover" :images="fetchSlideshow(block.slideshow)" :slideHeight="'120vw'" :dots="true" />
                <div class="cta center">
                    <button class="action"> {{ block.buttonText }} </button>
                </div>
            </div>
            <div class="pad center-col">
                <h2 class="text-1"> {{ block.text1 }} </h2>
                <p class="text-2"> {{ block.text2 }} </p>
                <p class="text-3"> {{ block.text3 }} </p>
            </div>
            </div>

        </div>
    </div>
    <!-- product list block -->
    <div class="product-blocks blocks section">
        <div class="block flex center-col" v-for="(block, index) in layout.productListBlocks" :key="index">
            <div v-if="block.visible">
                <!-- product list block cover image -->
                <div class="cover">
                    <slideshow size="cover" :images="fetchSlideshow(block.imageList)" :slideHeight="'120vw'" :dots="true" />

                    <div class="cta center">
                        <button class="action"> {{ block.buttonText }} </button>
                    </div>
                </div>
                <div class="pad center-col">
                    <h2 class="text-1"> {{ block.text1 }} </h2>
                    <p class="text-2"> {{ block.text2 }} </p>
                </div>
            </div>
        </div>
    </div>
    <!-- bounipun lab -->
    <div class="bounipun-lab center-col" v-if="layout.bounipunLab.visible">
        <div class="cover" :style="`background-image: url(${$getImagePath(layout.bounipunLab.image)})`">

            <div class="cta center">
                <button class="action"> {{ layout.bounipunLab.buttonText }} </button>
            </div>
        </div>
        <div class="pad center-col">
            <h2 class="head text-1"> {{ layout.bounipunLab.heading }} </h2>
            <p class="paragraph text-2"> {{ layout.bounipunLab.paragraph }} </p>
        </div>

    </div>
    <!-- quote -->
    <div class="quote" v-if="layout.quote.visible">
        <!-- logo -->
        <div class="logo" :style="`background-image: url(${$getImagePath(layout.quote.logo)})`"> </div>
        <div class="text pad">
            <h2 class="head text-1"> {{ layout.quote.heading }} </h2>
            <p class="paragraph text-2"> {{ layout.quote.paragraph }} </p>
        </div>
    </div>

    <!-- press -->
    <div class="press" v-if="layout.press.visible">
        <div class="scrollable-list">
            <div class="list">
                <!-- logo -->
                <div class="logo" :style="`background-image: url(${$getImagePath(layout.press.logo)})`"> </div>

                <!-- image list -->
                <div class="image-list">
                    <div class="image-box" v-for="(image, index) in layout.press.imageList" :key="index" :style="`background-image: url(${$getImagePath(image.path)})`">
                    </div>
                </div>

            </div>
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
    margin-top: 10vh;

    .pad {
        padding: 5%;
    }

    .quote {
        display: flex;
        width: 100%;
        height: 40vw;
        justify-content: space-between;
        padding: 5px;

        .logo {
            width: 40vw;
            height: 40vw;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        .text {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .text-2 {
                font-family: $font_4;
                line-height: 30px;
                font-size: 18px;
            }

            .head {
                text-align:center;
            }
        }

    }

    .press {
        display: flex;
        width: 100%;
        height: 40vw;

        .logo {
            width: 40vw;
            height: 100%;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        .image-list {
            // width: 70%;
            height: 100%;
            display: flex;

            .image-box {
                width: 25vw;
                height: 100%;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
        }
    }

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
        font-size:19px;
    }

    /* main text block */
    .main-text-block {
        text-align: center;
        .author {
            font-family: $font_2;
            font-size: 13px;
        }
    }

    /* cover */
    .cover {
        position: relative;

        .cta {
            position: absolute;
            bottom: 2%;
            width: 100%;

            .action {
                width: 36%;
            }
        }
    }

    .blocks {
        .block {
            .text-1 {}
        }
    }

    .bounipun-lab {
        .cover {
            width: 100vw;
            height: 100vw;
            background-size: cover;
            background-position: center;
        }
    }
}
</style>

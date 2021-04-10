<template>
<div class="homepage">
    <!-- slideshow -->
    <slideshow size="cover" :images="slideshowImages" />

    <!-- product section and alternate section -->
    <div class="sections">
        <div class="section" v-for="(section, index) in sections" :key="index">
            <!-- products section -->
            <div v-if="section.productSection" class="products-section">
                <home-section-heading :heading="section.productSection.heading" :tagline="section.productSection.tagline" />
                <div class="scrollable-list">
                    <div class="list">
                        <!-- featured product card -->
                        <featured-product-card v-for="(product, index) in section.productSection.list.list" :details="{ name: product._id.name, collection: product._id.bounipun_collection.name }" :key="index" :product="product._id" />

                    </div>
                </div>
            </div>

            <!-- alternate section -->
            <div v-if="section.alternateSection" class="alternate-section">
                <div class="mood-setter">
                    <img :src="$getImagePath(section.alternateSection.image)" />
                    <div v-if="section.alternateSection.heading !== ''" class="box">
                        <h3 @click="$router.push('/collection')" class="heading"> {{ section.alternateSection.heading }} </h3>
                        <p class="desc"> {{ section.alternateSection.paragraph }} </p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- stamps/keywords  -->
    <!-- account bounipun -->
    <div class="my-account center-col">
        <h2 class="heading"> My Bounipun Account </h2>
        <p class="desc"> Go Ahead and become a Bounipun member to improve your shopping experience </p>

        <button class="action" @click="$router.push('/login')"> Sign In </button>
    </div>

</div>
</template>

<script>
import featuredProductCard from '../components/featuredProductCard.vue';
export default {
  components: { featuredProductCard },
    data() {
        return {
            layout: {},
            slideshowImages: [],
            sections: []
        }
    },
    mounted() {
        this.fetchHomepageLayout();
    },
    methods: {
        async fetchHomepageLayout() {
            const layout = await this.$fetchData('homepage_layouts', {
                status: true
            });
            if (!layout.fetched) {
                console.log('Layout not fetched');
                return;
            }

            this.layout = layout.doc;
            console.log(this.layout);
            this.setSlideshow(this.layout.slideshow);

            const totalProductSections = this.layout.productSections.length;
            const totalAlternateSections = this.layout.alternateSections.length;

            let i = 0;
            let sections = [];
            const maxSections = totalProductSections > totalAlternateSections ? totalProductSections : totalAlternateSections;

            
            for (i = 0; i < maxSections; i++) {
                let section = {};
                section.productSection = this.layout.productSections[i] !== undefined ? this.layout.productSections[i] : false;
                section.alternateSection = this.layout.alternateSections[i] !== undefined ? this.layout.alternateSections[i] : false;
                sections.push(section);
            }

            this.sections = sections;
            console.log(sections);
        },
        setSlideshow(images) {
            this.slideshowImages = images.map(image => process.env.baseAWSURL + image.path);
        }
    }
}
</script>

<style lang="scss" scoped>
.hero {
    height: 60vh;
    width: 100vw;
    background: url('/hero/1.jpg');
    background-size: contain;
    background-repeat: no-repeat;
}

.my-account {
    padding: 10%;

    .heading {
        text-transform: uppercase;
        font-family: $font_1;
        text-align: center;
    }

    .desc {
        font-size: 10px;
        text-align: center;
        padding: 10px;
        margin-bottom: 10%;
    }

    .action {
        width: 50%;
    }
}

/* mood setter - #TODO: make a separate COMPONENT  */
.mood-setter {
    width: 100%;
    height: 100vw;
    overflow: hidden;
    position: relative;
    margin-top: 20px;

    img {
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
    }

    .box {
        top: 17%;
        left: 45%;
        width: 43%;
        background: white;
        padding: 10% 5%;
        position: absolute;

        .heading {
            font-family: $font_1_semibold;
            font-size: 15px;
            padding-bottom: 5%;
        }

        .desc {
            font-size: 11px;
        }
    }

}
</style>

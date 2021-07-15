<template>
  <div class="homepages crud">
    <!-- filters -->
    <div :class="{ updating: showForm }" class="filters center">
      <input
        v-model="rawCriterion.search.term"
        class="search shadow"
        type="text"
        placeholder="Search for Homepages"
      />
    </div>
    <!-- list of homepage layouts -->
    <div :class="{ updating: showForm }" class="list">
      <List
        :list="list"
        :model="model"
        :headings="headings"
        custom_css="10% 60% 20% 10%"
        :sortByFields="sortByFields"
        @documentFetched="documentFetched"
        @sortToggled="sortToggled"
      />

      <Pagination
        ref="pagination"
        :model="model"
        :rawCriterion="rawCriterion"
        @resultsFetched="resultsFetched"
      />
    </div>
    <!-- update homepage layouts form -->
    <div :class="{ updating: showForm }" class="update">
      <UpdateHomepage
        v-show="showForm"
        ref="updateComponent"
        @updated="updateList"
        :model="model"
        @close="showForm = false"
      />
      <!-- add new homepage -->
      <AddNewItem
        v-if="!showForm"
        label="Homepage"
        @showForm="showForm = true"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  layout: "admin",
  data() {
    return {
      showForm: false,
      loading: false,
      model: "homepages",
      /* raw criterion */
      rawCriterion: {
        search: {
          key: "name",
          term: ""
        },
        filters: {
          type: "default"
        },
        sortBy: {},
        limit: 20
      },
      list: [],
      sortByFields: ["name", "status"],
      headings: ["_id", "name", "description", "status"]
    };
  },
  methods: {
    updateList() {
      this.$refs.pagination.fetchResults();
    },
    sortToggled(sortBy) {
      console.log(sortBy);
      this.rawCriterion = {
        ...this.rawCriterion,
        sortBy
      };
    },
    documentFetched(doc) {
      this.showForm = true;
      this.editMode = true;
      /* add unique key to collection blocks and product list blocks sections */
      console.log(doc);
      // return;

      doc.collectionBlocks.forEach(block => (block.key = uuidv4()));
      doc.productListBlocks.forEach(block => (block.key = uuidv4()));

      this.$refs.updateComponent.populateForm(doc);
      setTimeout(() => this.populateForm(doc), 1200);
    },
    populateForm(doc) {
      /*  */
      const updateComponent = this.$refs.updateComponent;
      const {
        desktopMainSlideshow,
        mainSlideshow,
        collectionBlocks,
        productListBlocks,
        bounipunLab,
        quote,
        press
      } = doc;

      /* assign mainslide (desktop) show images */
      if (desktopMainSlideshow.slides.length > 0) {
        updateComponent.$refs.desktopMainSlideshow.assignImages(
          doc.desktopMainSlideshow.slides
        );
      }

      /* assign mainslide (mobile) show images */
      if (mainSlideshow.slides.length > 0) {
        updateComponent.$refs.mainSlideshow.assignImages(
          doc.mainSlideshow.slides
        );
      }

      /* assign images for collection blocks */
      if (collectionBlocks.length > 0) {
        for (let i = 0; i < collectionBlocks.length; i++) {
          updateComponent.$refs.imageUploader_collection[i].assignImages(
            collectionBlocks[i].slideshow
          );
        }
      }

      /* assign images for product list blocks */
      if (productListBlocks.length > 0) {
        for (let i = 0; i < productListBlocks.length; i++) {
          updateComponent.$refs.imageUploader_productList[i].assignImages(
            productListBlocks[i].imageList
          );
        }
      }

      /* assign bounipun lab image */
      if (bounipunLab.image !== "") {
        const singleImageList = [
          {
            _id: "",
            mainImage: false,
            path: bounipunLab.image
          }
        ];
        updateComponent.$refs.imageUploader_bounipunLab.assignImages(
          singleImageList
        );
      }

      /* assign quote logo */
      if (quote.logo !== "") {
        const singleImageList = [
          {
            _id: "",
            mainImage: false,
            path: quote.logo
          }
        ];
        updateComponent.$refs.imageUploader_quote.assignImages(singleImageList);
      }

      /* assign press logo */
      if (press.logo !== "") {
        const singleImageList = [
          {
            _id: "",
            mainImage: false,
            path: press.logo
          }
        ];
        updateComponent.$refs.imageUploader_pressLogo.assignImages(
          singleImageList
        );
      }

      /* assign press image list */
      if (press.imageList.length > 0) {
        updateComponent.$refs.imageUploader_pressImageList.assignImages(
          press.imageList
        );
      }
    },
    resultsFetched(result) {
      if (result.docs.length === 0) {
        this.list = [];
        return;
      }

      /* extract list */
      this.list = result.docs.map(({ _id, name, description, status }) => {
        return {
          _id,
          name,
          description,
          status
        };
      });
    }
  }
};
</script>

<template>
  <div class="upload-container">
    <label class="label"> {{ label }} </label>
    <!-- input element for selecting images for upload / hidden by css -->
    <input
      style="display: none"
      type="file"
      accept="image/*"
      ref="selector"
      :multiple="multipleUpload"
      v-on:change="handleFileSelection()"
    />
    <button class="file-selector" v-on:click="addFiles()">
      Select File(s)
    </button>

    <!-- image previews -->
    <div class="previews">
      <!-- list of images along with preview and remove button -->
      <div
        :key="key"
        v-for="(image, key) in images"
        :class="{ uploading: !image.uploaded }"
        class="preview center"
        :style="{ backgroundImage: `url(${image.previewURL})` }"
      >
        <!-- actions -->
        <div class="actions center-col">
          <img
            class="remove-file"
            src="/icons/light/remove-icon.png"
            @click="removeFile(key)"
          />
          <input
            v-if="multipleUpload && mainImageAllowed"
            class="set-main-image"
            type="checkbox"
            v-model="image.mainImage"
            :checked="image.mainImage"
            @change="setMainImage(key, $event.target.checked)"
          />
        </div>

        <!-- progress indicator -->
        <div v-if="!image.uploaded" class="progress center">
          <vue-ellipse-progress
            color="#41bf89"
            :size="70"
            :thickness="7"
            :legend="true"
            fontSize="1rem"
            :progress="image.uploadPercentage"
          >
            <img
              class="upload-icon"
              wdith="60px"
              slot="legend-caption"
              src="/icons/light/upload-cloud.svg"
            />
          </vue-ellipse-progress>
        </div>

        <!-- main image indicator -->
        <span v-if="image.mainImage" class="main-image"> Main Image </span>

        <span class="numbering"> {{ key + 1 }} </span>
      </div>

      <!-- if no image uploaded -->
      <div
        v-if="images.length === 0"
        class="not-uploaded"
        style="margin-left: 10px"
      >
        <img src="/icons/light/upload-cloud.svg" />
        <span> No Image(s) uploaded yet </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Add Files",
    },
    multipleUpload: {
      type: Boolean,
      default: true,
    },
    mainImageAllowed: {
      type: Boolean,
      default: true
    },
    uploadType: {
      type: String,
      default: "non-product",
    },
    uploaded: Array,
  },
  data() {
    return {
      cancelToken: this.$axios.CancelToken,
      images: [],
      uploadImageAPI: "/uploadImage",
    };
  },
  // watch: {
  //     uploaded(newVal) {
  //         console.log("IS THIS THE CULPRIT");
  //         if(newVal.length > 0)
  //             this.assignImages();
  //     }
  // },
  methods: {
    clearFileSelection() {
      this.images = [];
    },
    assignImages(list) {
      console.log("ASSIGN IMAGES WAS CALLED");
      if (!list.length > 0) return;

      this.images = [];
      const baseAWSURL =
        "https://bounipun-ecom.s3.ap-south-1.amazonaws.com/original/";
      list.forEach((image) => {
        // console.log(image);
        const imageObject = {
          /* actual file */
          file: null,
          /* local preview url */
          previewURL: baseAWSURL + image.path,
          /* cancel token */
          cancelToken: null,
          /* upload percentage  */
          uploadPercentage: 100,
          /* uploaded flag */
          uploaded: true,
          /* main image flag */
          mainImage: image.mainImage,
          /* upload ID */
          _id: image._id,
          /* path to uploaded image */
          path: image.path,
        };

        this.images.push(imageObject);
      });
    },
    addFiles() {
      this.$refs.selector.click();
    },
    handleFileSelection() {
      /* list of selected files */
      let selectedFiles = this.$refs.selector.files;

      /* if multiple upload not allowed */
      if (!this.multipleUpload) {
        this.images = [];
      }

      /* upload files one by one */
      selectedFiles.forEach((file) => {
        /* create image object */
        const imageObject = this.createImageObject(file);
        /* add image object to images list */
        this.images.push(imageObject);
        /* start uploading the file */
        this.uploadFile(imageObject);
        /* reset input file selection */
        this.resetFileSelection();
      });
    },
    createImageObject(file) {
      return {
        /* actual file */
        file,
        /* local preview url */
        previewURL: URL.createObjectURL(file),
        /* cancel token */
        cancelToken: this.cancelToken.source(),
        /* upload percentage  */
        uploadPercentage: 0,
        /* uploaded flag */
        uploaded: false,
        /* main image flag */
        mainImage: false,
        /* upload ID */
        _id: "",
        /* path to uploaded image */
        path: "",
      };
    },
    async uploadFile(imageObject) {
      /* creating form data  */
      let formData = new FormData();
      /* appending file to form data */
      formData.append("productImage", imageObject.file);
      formData.append("uploadType", this.uploadType);
      /* configuring upload request  */
      const uploadConfig = this.setUploadConfig(imageObject);
      /* making upload request to the server */
      const uploadRequest = this.$axios.$post(
        this.uploadImageAPI,
        formData,
        uploadConfig
      );
      /* wait for the upload request to finish */
      const { response, error } = await this.$task(uploadRequest);
      /* if error occurred or upload was cancellled */
      if (error) {
        if (this.$axios.isCancel(error))
          console.log("Upload request cancelled");
        return;
      }
      /* response from server */
      // console.log(response);
      /* update image object */
      this.updateImageObject(imageObject, response);
    },
    setUploadConfig(imageObject) {
      const uploadConfig = {
        cancelToken: imageObject.cancelToken.token,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progress) => {
          imageObject.uploadPercentage = parseInt(
            Math.round((progress.loaded / progress.total) * 100)
          );
        },
      };
      return uploadConfig;
    },
    updateImageObject(imageObject, response) {
      imageObject.uploaded = imageObject.uploadPercentage === 100;
      imageObject.path = response.name;
      imageObject._id = response._id;
      this.$emit("updated", this.images);
    },
    setMainImage(key, value) {
      /* if value set to true, turn all other main image flags off */
      // console.log('value was changed', value)
      if (value) {
        for (let i = 0; i < this.images.length; i++) {
          if (i !== key) this.images[i].mainImage = false;
        }
        // return;
      }

      /* if value set to true */
      setTimeout(() => {
        this.images[key].mainImage = true;
        this.$emit("updated", this.images);
      }, 100);
    },
    removeFile(key) {
      /* if still uploading, cancel upload before removing from the list */
      if (!this.images[key].uploaded) this.images[key].cancelToken.cancel();

      /* remove from the images list */
      this.images.splice(key, 1);
      this.$emit("updated", this.images);
    },
    resetFileSelection() {
      this.$refs.selector.type = "text";
      this.$refs.selector.type = "file";
    },
  },
};
</script>

<style lang="scss" scoped>
.upload-container {
  width: 100%;

  .label {
    font-family: $font_2_bold;
    color: $gray;
    text-transform: uppercase;
    font-size: 10px;
    padding: 2%;
    margin-left: 5px;
    font-weight: 900;
  }

  .file-selector {
    padding: 3px 5px;
    border-radius: 2px;
    font-size: 10px;
    background-color: rgb(122, 168, 122);
    color: white;
  }
}

.previews {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;

  .preview {
    height: 70px;
    width: 70px;
    background-size: cover;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.16);
    margin: 5px;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    position: relative;

    &:hover {
      .actions {
        display: flex;
      }

      .progress {
        display: none;
      }
    }

    .actions {
      display: none;
      background-color: #33333383;
      width: 100%;
      height: 100%;

      .remove-file {
        width: 30px;
        height: 30px;
      }

      .set-main-image {
        width: 30px;
        height: 30px;
      }
    }

    .progress {
      background-color: #33333383;
      height: 100%;
      width: 100%;
    }

    .upload-icon {
      width: 100%;
      height: 100%;
    }

    .main-image {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #33333383;
      color: white;
      font-size: 9px;
      text-align: center;
    }

    .numbering {
      position: absolute;
      bottom: 0%;
      right: 0;
      padding: 2px 5px;
      background-color: rgba(51, 51, 51, 0.621);
      border-top-left-radius: 5px;
      width:30%;
      text-align:center;
      font-size:13px;
      color: white;
    }
  }

  .not-uploaded {
    background-color: #d49292;
    display: flex;
    padding: 3px 10px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    margin-top: 7px;
    img {
      padding-right: 10px;
    }
    span {
      color: white;
      font-size: 13px;
    }
  }
}
</style>

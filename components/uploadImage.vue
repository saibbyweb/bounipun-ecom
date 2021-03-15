<template>
<div class="">
    <!-- input element for selecting images for upload / hidden by css-->
    <input type="file" accept="image/*" ref="selector" multiple v-on:change="handleFileSelection()" />
    <button class="action upload-images" v-on:click="addFiles()">
        {{ label }}
    </button>
</div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: "Add Files"
        }
    },
    data() {
        return {
            cancelToken: this.$axios.CancelToken,
            images: [],
            uploadImageAPI: '/uploadImage'
        }
    },
    methods: {
        addFiles() {
            this.$refs.selector.click();
        },
        handleFileSelection() {
            /* list of selected files */
            let selectedFiles = this.$refs.selector.files;
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
                previewUrl: URL.createObjectURL(file),
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
                path: ""
            }
        },
        async uploadFile(imageObject) {
            /* creating form data  */
            let formData = new FormData();
            /* appending file to form data */
            formData.append('productImage', imageObject.file);
            /* configuring upload request  */
            const uploadConfig = this.setUploadConfig(imageObject);
            /* making upload request to the server */
            const uploadRequest = this.$axios.$post(this.uploadImageAPI, formData, uploadConfig);
            /* wait for the upload request to finish */
            const {
                response,
                error
            } = await this.$task(uploadRequest);
            /* if error occurred or upload was cancellled */
            if (error) {
                if (this.$axios.isCancel(error))
                    console.log('Upload request cancelled');
                return;
            }
            /* response from server */
            console.log(response);
            /* update image object */
            this.updateImageObject(imageObject, response);
        },
        setUploadConfig(imageObject) {
            const uploadConfig = {
                cancelToken: imageObject.cancelToken.token,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progress => {
                    imageObject.uploadPercentage = parseInt(Math.round((progress.loaded / progress.total) * 100));
                }
            }
            return uploadConfig;
        },
        updateImageObject(imageObject, response) {
            imageObject.uploaded = imageObject.uploadPercentage === 100;
            imageObject.path = response.path;
            imageObject._id = response._id;
        },
        removeFile(key) {
            /* if still uploading, cancel upload before removing from the list */
            if (!this.images[key].uploaded)
                this.images[key].cancelToken.cancel();

            /* remove from the images list */
            this.images.splice(key, 1);
        },
        resetFileSelection() {
            this.$refs.selector.type = 'text';
            this.$refs.selector.type = 'file';
        }
    }
}
</script>

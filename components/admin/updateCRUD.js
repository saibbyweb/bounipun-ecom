export default {
  methods: {
    assignImages(ref, image) {
      if (image === "" || image === undefined) return;
      setTimeout(() => {
        this.$refs.updateComponent.$refs[ref].assignImages([
          {
            _id: "",
            mainImage: false,
            path: image,
          },
        ]);
      }, 1200);
    },
  },
};

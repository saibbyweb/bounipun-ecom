<template>
  <div class="instagram-feed">
    <!-- heading -->
    <div class="heading flex center">
      <h3>{{ heading }}</h3>
      <!-- <img class="instagram" src="/instagram-text.svg" /> -->
    </div>
    <!-- posts grid -->
    <div class="posts-grid flex wrap center">
      <a target="_blank" :href="post.permalink"  v-for="post in posts"  :key="post.permalink">
      <div
      class="post shadow"
        :style="`background-image: url(${post.imageLink})`"
      ></div>
      </a>
    </div>
    
    <!-- loading icon -->
    <div v-if="posts.length === 0" class="flex center">
         <img width="100" src="/loading.gif" />
    </div>

  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: "Green Book"
    }
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    setTimeout(() => this.fetchPosts(), 2000)
    // this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const INSTAGRAM_POSTS =
        "https://saibbyweb.com/instafeed/actions?username=bounipun&action=getPosts&limit=7";
      const postsResponse = await this.$axios.get(INSTAGRAM_POSTS);

      if (postsResponse.data.payload) {
        // data.posts = [];
        let posts = [];
        postsResponse.data.payload.forEach((post, index) => {
          if (index > 5) return;

          if (post.media_type === "VIDEO") {
            posts.push({ imageLink: post.thumbnail_url, permalink: post.permalink });
            return;
          }

          posts.push({ imageLink: post.media_url, permalink: post.permalink });
        });
        this.posts = posts;
      }
    }
  }
};
</script>

<style lang="scss">
.instagram-feed {
  padding: 2% 0;

  @media (min-width: 769px) {
    // padding-top: 100px;
  }

  //   background-color: $purple;
  .heading {
    // background-color: $green;
    padding: 1%;

    .instagram {
      width: 230px;
    }

    h3 {
      // text-transform: uppercase;
      font-size: 52px;
      font-weight: 600;
      color: $dark_gray;
      width: 100%;
      text-align: center;
      border-bottom: 2px solid white;
    }

    @media (max-width: 768px) {
      h3 {
        font-size: 30px;
      }
          .instagram {
      width: 150px;
    }
    }
  }

  .posts-grid {
    margin-top: 2%;

    a {
      margin: 1%;
    }

    .post {
      width: 28vw;
      height: 28vw;
      background-size: cover;
    }

    @media (max-width: 768px) {
       margin-top: 5%;

      .post {
        //width: 43vw;
        //height: 43vw;
        margin-top:5px;
        width:29vw;
        height:29vw;
      }
    }
  }
}
</style>

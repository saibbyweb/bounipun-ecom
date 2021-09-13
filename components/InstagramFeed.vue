<template>
<div class="instagram-feed">
    <!-- heading -->
    <div class="heading flex center">
        <h3>{{ heading }}</h3>
    </div>
    <!-- posts grid -->
    <div class="posts-grid flex wrap center">
        <div v-for="post in posts" class="post shadow" :key="post" :style="`background-image: url(${post})`"></div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            default: "Instagram"
        }
    },
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.fetchPosts();
    },
    methods: {
        async fetchPosts() {
            const INSTAGRAM_POSTS =
                "https://saibbyweb.com/instafeed/actions?username=bounipun&action=getPosts&limit=7";
            const postsResponse = await this.$axios.get(INSTAGRAM_POSTS);

            if (postsResponse.data.payload) {
                // data.posts = [];
                let posts = [];
                postsResponse.data.payload.forEach((post,index) => {
                    if(index > 5)
                        return;
                        
                    if(post.media_type === "VIDEO") {
                        posts.push(post.thumbnail_url);
                        return;
                    }
                       
                    posts.push(post.media_url);
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
        padding-top: 100px;
    }

    //   background-color: $purple;
    .heading {
        // background-color: $green;
        padding: 1%;
        

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
        }
    }

    .posts-grid {
        margin-top: 5%;

        .post {
            width: 28vw;
            height: 28vw;
            margin: 1%;
            background-size: cover;
        }

        @media (max-width: 768px) {
            .post {
                width: 43vw;
                height: 43vw;
            }
        }
    }
}
</style>

<template>
<div class="container">
    <!-- <client-only> -->
    <h1>
        {{ hellox.name }}
        {{ hellox.author }}
    </h1>

    <h1>
        {{ hello }}
    </h1>

    <button @click="doThis"> Fetch </button>

</div>
</template>

<script>
import gql from "graphql-tag";
export default {
    data() {
        return {
            book: {},
            hellox: {
                name: 'hey',
                author: "suhaib"
            }
        }
    },
    apollo: {
        hello: {
            query: gql `{ 
            hello { 
                name,
                author
            }
        }`,
            skip() {
                return false
            }
        }
    },
    methods: {
        doThis() {
            this.$apollo.queries.hello.skip = false;
            this.$apollo.queries.hello.refetch()
            console.log(this.$apollo.queries);
        }
    }
}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>

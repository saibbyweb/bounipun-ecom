<template>
<div class="collection crud">
    <!-- filters -->
    <div class="filters center">
        <input class="search shadow" type="text" placeholder="Search for collections" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of collections -->
    <div class="list">
        <List :list="collections" :headings="headings" custom_css="25% 25% 25% 25%" />
    </div>
    <!-- update collection form -->
    <div class="update">
        <UpdateCollection />
    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            filters: [{
                name: 'All Collections',
                value: 'all'
            }, {
                name: "Karakul",
                value: 'karakul'
            }, {
                name: 'Autograph',
                value: 'autograph'
            }, {
                name: 'Escape',
                value: 'escape'
            }],
            selectedFilter: 'all',
            collections: [{
                    name: 'Escape',
                    slug: 'escape',
                    description: 'Description for Escape',
                    status: 'Live'
                }, {
                    name: 'Autograph',
                    slug: 'autograph',
                    description: 'Description for Autograph',
                    status: 'Not Live'
                },
                {
                    name: 'Karakul',
                    slug: 'karakul',
                    description: 'Description for Karakul',
                    status: 'Live'
                }
            ],
            headings:['Collection Name', 'Slug', 'Description', 'Published']
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
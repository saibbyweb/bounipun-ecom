<template>
<div class="colors crud">
    <!-- filters -->
    <div class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Fabrics" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of collections -->
    <div class="list">
        <List :list="colors" :headings="headings" custom_css="25% 25% 25% 25%" />
    </div>
    <!-- update collection form -->
    <div class="update">
    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            filters: [{
                name: 'All Colors',
                value: 'all'
            }, {
                name: "Calm",
                value: 'karakul'
            }, {
                name: 'Welcoming',
                value: 'autograph'
            }, {
                name: 'Chic',
                value: 'escape'
            }],
            selectedFilter: 'all',
            colors: [{
                    name: 'Blush',
                    slug: 'blush',
                    category: 'Calm',
                    status: 'Live'
                }, {
                    name: 'Periwinkle',
                    slug: 'periwinkle',
                    category: 'Calm',
                    status: 'Not Live'
                },
                {
                    name: 'Deco Pink',
                    slug: 'deco-pink',
                    category: 'Welcoming',
                    status: 'Live'
                },
            ],
            headings: ['Color Name', 'Slug', 'Category', 'Published']
        }
    }
}
</script>

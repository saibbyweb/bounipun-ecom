<template>
<div class="fabrics crud">
    <!-- filters -->
    <div class="filters center">
        <input class="search shadow" type="text" placeholder="Search for Fabrics" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of fabrics -->
    <div class="list">
        <List :list="fabrics" :headings="headings" custom_css="25% 25% 25% 25%" />
    </div>
    <!-- update fabrics form -->
    <div class="update">
        <UpdateFabric />
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
            fabrics: [{
                    name: 'Light Weight',
                    slug: 'light-weight',
                    description: 'Description for...',
                    status: 'Live'
                }, {
                    name: 'Feather Weight',
                    slug: 'feather-weight',
                    description: 'Description for...',
                    status: 'Not Live'
                },
                {
                    name: '100% Cashmere',
                    slug: '100%-cashere',
                    description: 'Description for...',
                    status: 'Live'
                },
                {
                    name: '80% Wool / 70% Silk',
                    slug: '80%-wool-70%-silk',
                    description: 'Description for...',
                    status: 'Live'
                }
            ],
            headings: ['Fabric Name', 'Slug', 'Description', 'Published']
        }
    }
}
</script>

<template>
<div class="collection">
    <!-- filters -->
    <div class="filters center">
        <input class="search shadow" type="text" placeholder="Search for collections" />
        <SelectBox :options="filters" v-model="selectedFilter" />
    </div>
    <!-- list of collections -->
    <div class="list">
        <!-- <CollectionList :collections="collections" /> -->
        <List custom_css="auto auto 30% auto auto auto" />
    </div>
    <!-- update collection form -->
    <div class="update">
        <!-- <UpdateProduct /> -->
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
                    status: true
                }, {
                    name: 'Autograph',
                    slug: 'autograph',
                    description: 'Description for Autograph',
                    status: true
                },
                {
                    name: 'Karakul',
                    slug: 'karakul',
                    description: 'Description for Karakul',
                    status: false
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.collection {
    display: grid;
    grid-template-columns: 65% 35%;
    grid-template-rows: auto auto;

    @media(max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: auto auto auto;
    }

    .filters {
        grid-area: 1 / 1 / 2 / 3;

        @media(max-width: 768px) {
            grid-area: 1 / 1 / 2 / 1;
        }

        padding: 10px;

        .search {
            width: 40%;
            padding: 10px 15px;
            border: none;
            margin-right: 10px;
        }
    }

    .list {
        grid-area: 2 / 1 / 2 / 2;

        @media(max-width: 768px) {
            grid-area: 2 / 1 / 3 / 2;
        }

        padding: 10px;
    }

    .update {
        grid-area: 2 / 2 / 2 / 3;

        @media(max-width: 768px) {
            grid-area: 3 / 1 / 4 / 2;
        }

        padding: 10px;
    }
}
</style>
<template>
<div>
    <AdminHeader />
    <Nuxt />
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.crud {
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

        .heading {
            text-transform: uppercase;
            text-align: center;
        }

        .label {
            font-family: $font_2_bold;
            color: $gray;
            text-transform: uppercase;
            font-size: 10px;
            padding: 2%;
            margin-left: 5px;
            font-weight: 900;
        }
    }
}
</style>

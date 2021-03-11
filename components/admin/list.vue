<template>
<!-- list -->
<div class="list">
    <!-- headings -->
    <div class="item shadow heading" :style="adjustItem()">
        <span v-for="(heading, index) in headings" :key="index"> {{ heading }} </span>
    </div>
    <!-- data points -->
    <div class="item shadow" v-for="(item, index) in list" :key="index" :style="adjustItem()">
        <span v-for="(value, propIndex) in Object.values(item)" :key="propIndex"> {{ value }} </span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        headings: {type: Array, default: () => []},
        list: { type: Array, default: () => [{}]},
        custom_css: { type: String, default: ''}
    },
    computed: {
        columns() {
            const colLength = this.headings.length;
            let colCSS = 'auto', i = 1;
            while(i < colLength) {
                colCSS+= ' auto'
                i++;
            }
            return colCSS;
        }
    },
    methods: {
        adjustItem() {
            if(this.custom_css !== '')
                return { 'grid-template-columns': this.custom_css};
            return { 'grid-template-columns': this.columns}
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    margin: 10px 0;
    display: grid;
    // grid-template-columns: 25% 20% 20% 15% 10% 10%;
    // grid-template-columns: auto auto auto;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &.heading {
        background-color: #492727;

        span {
            color: #efefef;
            font-weight: 900;
            font-family: $font_1;
            text-transform: uppercase;
        }

        &:hover {
              background-color: #492727;
              transform: translateX(0px);
        }
    }

    &:hover {
        background-color: rgb(96, 96, 96);
        transform: translateX(4px);

        span {
            color: white;
        }
    }

    span {
        transition: all 0.3s ease-in-out;
        border-right: 1px solid #cbcbcb;
        overflow: hidden;
        font-size: 13px;
        padding: 5px;
        font-family: $font_2;

        &.status {
            border-right: none;
            color: white;

            &.published {
                background-color: green;
            }

            &.not-published {
                background-color: rgb(154, 56, 8);
            }
        }
    }
}
</style>


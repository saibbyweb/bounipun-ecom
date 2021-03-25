<template>
<div class="sw-accordion">
    <!-- <button @click="toggle()" :class="[{'active': active},'accordion']"> {{ heading }}</button> -->

    <div @click="toggle()" :class="[{'active': active},'accordion']">
        <span class="title"> {{ heading }}</span>
        <span class="switch"> + </span>
    </div>

    <div ref="content" class="content" :style="{maxHeight}">
        <slot>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </slot>
    </div>
</div>
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            default: 'Heading 1'
        }
    },
    data() {
        return {
            active: false,
            maxHeight: '0px'
        }
    },
    methods: {
        toggle() {
            this.active = !this.active;
            this.maxHeight = this.active ? this.$refs.content.scrollHeight + 'px' : '0px';
        },
        open() {
            this.active = true;
            this.updateHeight();
        },
        updateHeight() {
            this.maxHeight = this.$refs.content.scrollHeight + 'px';
        }
    }
}
</script>

<style lang="scss" scoped>
.sw-accordion {
    .accordion {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #6a6a6a;

        .title {
            text-transform: uppercase;
            color: $dark_gray;
            letter-spacing: 1.5px;
            font-size: 11px;
        }

        .switch {
            padding: 0 10px;
        }
    }

    .content {
        margin: 18px;
        border-radius: 10px;
        max-height: 0px;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
        box-sizing: border-box;
    }
}
</style>

<template>
    <div class="color-picker">
        <h2 @click="fetchColors"> COLOR PICKER </h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            model: 'colors',
            allColors: []
        }
    },
    mounted() {
        this.fetchColors();
    },
    methods: {
        async fetchColors() {
            this.loading = true;
            const result = await this.$fetchCollection(this.model, 'admin');
            this.loading = false;
            console.log(result,'colors fetched');
        }
    }
}
</script>
<template>
    <div class="faq-item">
        <Button class="question" @click="active = !active"> {{ question }} </Button>
        <div :class="[{'active': active },'answer']">  {{ answer }} </div>
    </div>
</template>

<script>
export default {
    props: {
        question: String, 
        answer: String
    },
    data() {
        return {
            active: false
        }
    }
}
</script>

<style lang="scss" scoped>

.question {
    background: transparent;
    padding: 0;
}
.answer {
    height: 0;
    min-height: 0;
    overflow: hidden;
    transition: all 0.4s ease-in-out;

    &.active {
        min-height: 20px;
    }
}
</style>
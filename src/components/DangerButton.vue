<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: String
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
button {
    background-color: red;
}
</style>
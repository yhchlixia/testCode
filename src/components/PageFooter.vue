<template>
    <div class="footer">
        <div class="logo">1</div>
        <div class="right">2</div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.footer {
    width: 100%;
    height: 70px;
    display: flex;
    line-height: 70px;
    .logo {
        width: 200px;
        background-color: white;
        height: 70px;
    }
    .right {
        flex: 1;
        height: 70px;
        text-align: right;
    }
}
</style>
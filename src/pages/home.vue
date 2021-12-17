<template>
    <div class="index">{{ getName }}
        <span>123</span>
    </div>
    <router-link to="/home"></router-link>
</template>

<script>
export default {
    data() {
        return {
            msg: ['yhch', 'gym']
        }
    },
    computed: {
        getName() {
            const data = this.msg[0] + this.msg[1]
            return data
        }
    },
    methods: {
        toHome() {
            window.open('http://localhost:8081/#/index')
        }
    }
}
</script>

<style lang="less" scoped>
.index {
    color: red;
    span {
        color: green;
    }
}
</style>
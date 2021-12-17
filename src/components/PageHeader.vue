<template>
    <div class="header">
        <div class="logo">
            <img :src="Logo" alt="">
            <span>Project Manage</span>
        </div>
        <div class="right">
            <div class="language"></div>
            <div class="login_out" @click="toLoginout">
                <span class="username">{{ userInfo.username }}</span>
                <LoginOutlined />
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/assets/logo.png'
import { LoginOutlined } from '@ant-design/icons-vue'

export default {
    data() {
        return {
            Logo,
            userInfo: {}
        }
    },
    components: { LoginOutlined },
    created() {
        this.userInfo = window.localStorage.getItem("userInfo")
        ? JSON.parse(window.localStorage.getItem("userInfo"))
        : {};
    },
    methods: {
        toLoginout() {
            this.$router.push({
                path: '/report/login'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 70px;
    display: flex;
    line-height: 70px;
    box-shadow: 0 3px 5px #888888;
    z-index: 999;
    .logo {
        width: 300px;
        background-color: white;
        height: 70px;
        img {
            height: 60%;
            margin: 0 16px 0 24px;
        }
    }
    .right {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        display: flex;
        justify-content: flex-end;
        .login_out {
            cursor: pointer;
            .username {
                margin-right: 16px;
            }
        }
    }
}
</style>
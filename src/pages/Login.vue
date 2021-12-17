<template>
    <div class="login">
        <div class="form">
            <div class="form_header">Lgoin</div>
            <a-form
                name="custom-validation"
                ref="formRef"
                :model="loginForm"
                :rules="rules"
                :labelCol="{ style: { width: '110px', textAlign: 'left', fontWeight: 'bold' } }"
                @finish="handleFinish"
                @finishFailed="handleFinishFailed"
            >
                <a-form-item has-feedback label="User Name" name="username">
                    <a-input v-model:value="loginForm.username" type="text" autocomplete="off" />
                </a-form-item>
                <a-form-item has-feedback label="Password" name="password">
                <a-input v-model:value="loginForm.password" type="password" autocomplete="off" />
                </a-form-item>
                <a-form-item has-feedback name="checked">
                    <a-checkbox v-model:checked="loginForm.checked">Please checked</a-checkbox>
                </a-form-item>
                <a-form-item :style="{ textAlign: 'center', marginTop: '50px', marginBottom: '0' }">
                    <a-button :disabled="!loginForm.checked" class="submit" type="primary" html-type="submit">Login</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
import { login } from '@/service'
import { ref } from 'vue'

export default {
    data() {
        return {
            formRef: ref(),
            loginForm: {
                username: '',
                password: '',
                checked: false
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: 'Please enter user name',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: 'Please enter password',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        handleFinish(values) {
            login(values).then((res) => {
                const { status, message, data } = res
                if (status === 0) {
                    window.localStorage.setItem('userInfo', JSON.stringify(data))
                    this.$router.push({
                        path: '/index'
                    })
                } else {
                    console.log(message)
                }
            })
        }
    },
    created() {
        window.localStorage.clear()
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    background-color: wheat;
    display: flex;
    justify-content: center;
    align-items: center;
    .form {
        width: 540px;
        padding: 50px 80px;
        background-color: white;
        font-weight: bold;
        border-radius: 5px;
        .form_header {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 60px;
        }
        /deep/ .ant-form {
            font-size: 16px;
            .ant-form-item-required::before {
                display: none;
            }
            .ant-form-item {
                .ant-form-item-label {
                    line-height: 44px;
                    height: 44px;
                    label {
                        font-size: 16px;
                    }
                }
                .ant-form-item-control {
                    line-height: 44px;
                    .ant-checkbox-wrapper {
                        span {
                            font-size: 16px;
                        }
                    }
                }
            }
        }
        .submit {
            height: 44px;
            width: 240px;
            border-radius: 22px;
            line-height: 44px;
            padding: 0;
            font-size: 16px;
            font-weight: bold;
        }
    }
}
</style>
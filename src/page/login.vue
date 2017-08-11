<template>
    <!-- 后端管理登录页面 案例 -->
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin">
                <div class="manage_tip">
                    <img src="../assets/logo.png" class="login-img">
                </div>
                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="账号" value="loginForm.username" autofocus @keyup.enter.native="submitForm('loginForm')"><span></span></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="loginForm.password" value="loginForm.password" @keyup.enter.native="submitForm('loginForm')" ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </transition>
    </div>
</template>
<style lang="scss" scoped>
    @import '../style/mixin';

    .login_page{
        // background-color: #324057;
    }
    .manage_tip{
        position: absolute;
        width: 100%;
        top: -204px; // logo 图片高度
        left: 0;
        p{
            font-size: 34px;
            color: #fff;
        }
    }
    .form_contianer{
        @include wh(320px, 160px);
        @include ctp(320px, 160px);
        padding: 25px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;
        .submit_btn{
            width: 100%;
            font-size: 16px;
        }
    }
    .tip{
        font-size: 12px;
        color: red;
    }
    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>
<script>
    export default {
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                },
                showLogin: false,
            }
        },
        mounted() {
            this.showLogin = true;
            /* 判断是否有登录用户信息 */
        },
        methods: {
            submitForm() {
                this.$router.push('welcome')
            }
        }
    }
</script>
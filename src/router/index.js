import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Hello from '@/components/Hello' // 导入组件
const login = r => require.ensure([], () => r(require('@/page/login')), 'login') // 登录页面
const Hello = r => require.ensure([], () => r(require('@/page/Hello')), 'Hello') // 入口页面
const home = r => require.ensure([], () => r(require('@/page/home')), 'home') // 入口页面
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit')

export default new Router({
    routes: [{
        path: '/',
        component: login,
        meta: ['login']
    },
    {
        path: '/welcome',
        name: 'Hello',
        component: Hello,
        children: [{
            path: '',
            component: home,
            meta: []
        },{
            path: '/vueEdit',
            component: vueEdit,
            meta: ['编辑', '文本编辑']
        }] 
    }],
    strict: process.env.NODE_ENV !== 'production'
})

import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import PageView from '@/layout/PageView.vue'
import Login from '@/pages/Login.vue'
import beforeEach from './beforeEach'
import Router from './router'
import Index from '@/pages/index.vue'

const routerHistory = createWebHashHistory()
const router = createRouter({
    history: routerHistory,
    routes: [{
            path: '/',
            redirect: '/report/login',
            component: Layout,
            children: [
                ...Router,
                {
                    path: '/index',
                    name: 'Index',
                    component: Index,
                    meta: {
                        needLogin: true
                    }
                }
            ]
        },
        {
            path: '/report',
            name: 'Report',
            component: PageView,
            children: [{
                path: 'login',
                name: 'Login',
                component: Login
            }]
        }
    ]
})
router.beforeEach(beforeEach)

export default router
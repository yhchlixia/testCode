import Home from '@/pages/home.vue'
import UserSetting from '@/pages/user/UserSetting.vue'
import ProjectIndex from '@/pages/project/ProjectIndex.vue'
import PageView from '@/layout/PageView.vue'

const Router = [{
        path: '/user',
        name: 'User Manage',
        component: PageView,
        roles: 'A001',
        redirect: '/user/index',
        children: [{
            path: '/user/index',
            component: UserSetting,
            name: 'User Setting',
            meta: {
                needLogin: true
            }
        }]
    },
    {
        path: '/project',
        name: 'Project Manage',
        roles: 'B001',
        component: PageView,
        redirect: '/project/index',
        children: [{
            path: '/project/index',
            component: ProjectIndex,
            name: 'Project Index',
            meta: {
                needLogin: true
            }
        }, {
            path: '/project/add',
            component: Home,
            name: 'Project Add',
            meta: {
                needLogin: true
            }
        }]
    },
    {
        path: '/db',
        name: 'DB Manage',
        roles: 'C001',
        component: PageView,
        redirect: '/db/home',
        children: [{
            path: '/db/home',
            component: Home,
            name: 'Home',
            meta: {
                needLogin: true
            }
        }]
    }
]

export default Router
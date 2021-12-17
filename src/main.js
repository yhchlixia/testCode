import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store'
import '../mock'
import directives from '@/utils/directive.js'
import moment from 'moment'
import DangerButton from '@/components/DangerButton.vue'
import TableComponent from '@/components/Table.vue'
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 自定义指令
app.directive('highlight', directives.highlight)

// 自定义组件
app.component('danger-button', DangerButton)
app.component('table-component', TableComponent)

// 公共全局方法
app.config.globalProperties.$moment = moment
app.config.globalProperties.$message = Antd.message

// antd组件库
app.use(Antd);
app.use(ElementPlus);

// 路由
app.use(router)

// vuex
app.use(store)

console.log(app)
app.mount('#app')
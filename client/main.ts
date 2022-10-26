import { createApp } from 'vue'
import zhs from '@/index'
/* 打包后的文件测试 */
// import '../dist/style.css'
// import zhs from '../dist'
import App from './App.vue'

createApp(App).use(zhs).mount('#app')

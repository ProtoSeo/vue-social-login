import {createApp} from 'vue'
import App from './App.vue'
import router from './scripts/router'
import '@/assets/index.css'

createApp(App).use(router).mount('#app')
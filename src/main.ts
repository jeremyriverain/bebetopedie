import { createApp } from 'vue'
import { router } from '@/router'
import App from './App.vue'
import { createPinia } from 'pinia'

import '@/assets/main.css'

const app = createApp(App)
app.use(createPinia()).use(router)

app.mount('#app')

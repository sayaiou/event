import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log(gaga)
app.use(createPinia())
app.use(router)

app.mount('#app')

import './assets/main.css'

// import 'vuetify/styles'
import '@/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createVuetify } from 'vuetify'

import { md3 } from 'vuetify/blueprints'


import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
  ssr: true,
  blueprint: md3,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')


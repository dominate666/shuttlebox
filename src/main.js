import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

/* import SensenUI from '../modules/sensen-ui'
createApp(App).use(SensenUI).mount('#app') */

import Transfer from '../modules/sensen-ui/Transfer'
createApp(App).use(Transfer).mount('#app')

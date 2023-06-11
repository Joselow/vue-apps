import './assets/main.css'

import router from './route';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(router).mount('#app')


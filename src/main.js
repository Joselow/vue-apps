import '@fortawesome/fontawesome-free/css/all.css';
import 'animate.css';
import './assets/main.css';

import router from './route';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
const pinia = createPinia()

const app = createApp(App);

app.use(router)
app.use(pinia)
.mount('#app')


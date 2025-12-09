import '../css/app.css';
import './bootstrap';
import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';


const app = createApp(App);
app.use(router);
app.use(ZiggyVue);
app.mount('#app');
// diagnostics: expose a flag and log so you can check in browser console
window.__VUE_APP_MOUNTED__ = true;
console.log('Vue app mounted', { routerMode: 'history' });

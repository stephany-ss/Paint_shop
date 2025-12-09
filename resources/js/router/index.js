import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/Pages/Home.vue';
import Shop from '@/Pages/Shop.vue';
import About from '@/Pages/About.vue';
import Contact from '@/Pages/Contact.vue';
import ProductDetail from '@/Pages/ProductDetail.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
  // Cart page removed — route omitted to avoid broken import
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
});
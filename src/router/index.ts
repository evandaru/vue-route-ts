import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';
import form from '../views/form.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/form',
    name: 'form',
    component: form,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('./views/Activity.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
    },
  ],
});

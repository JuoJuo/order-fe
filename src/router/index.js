import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/login';
import register from '../pages/register';
import resetPassword from '../pages/resetPassword.vue';
import Index from '../Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: resetPassword,
  },
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

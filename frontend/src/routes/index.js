/* Aqui as rotas */
import {
  createWebHistory,
  createRouter
} from 'vue-router';

import Home from '../views/HomeView';
import About from '../views/AboutView';

const routes = [{
    path: '/',
    component: Home
  },

  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
/* Aqui as rotas */
import { createWebHistory, createRouter } from "vue-router";
/* O "@" significa a pasta ".src". */
import HomeView from "../views/HomeView.vue";

/*
Os componentes utilizados no roteamento
tem que vir da pasta "views"
*/

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/products",
    name: "products",
    /* Aqui está chamando o componente usando "lazy-loaded"
       Os componentes só vão ser chamados, quando realmente
       precisarmos deles. */
    component: () => import("../views/ProductsView.vue"),
  },

  {
    path: "/about",
    name: "about",
    /* lazy-loaded */
    component: () => import("../views/AboutView.vue"),
  },

  {
    path: "/user/create",
    name: "user-create",
    /* lazy-loaded */
    component: () => import("../views/UserCreateView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

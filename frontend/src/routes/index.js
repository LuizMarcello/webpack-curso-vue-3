/* Aqui as rotas */
import {
  createWebHistory,
  createRouter
} from "vue-router";

/* O "@" significa a pasta ".src". */
import HomeView from "../views/HomeView.vue";

/*
Os componentes utilizados no roteamento
tem que sempre virem da pasta "views".
*/

const routes = [{
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/products",
    name: "products",
    /* component: ProductsOptionsApiView, */
    /* Usando "lazy-loaded" */
    component: () => import("../views/ProductsOptionsApiView.vue"),
  },

  {
    //path: "/products",
    //name: "products",
    /* Aqui está chamando o componente usando "lazy-loaded"
       Os componentes só vão ser chamados, quando realmente
       precisarmos deles. */
    //component: () => import("../views/ProductsViewOptionsApi.vue"),
    //component: () => import("../views/ProductsViewCompositionApi.vue"),
  },

  {
    path: "/about",
    name: "about",
    /* Usando "lazy-loaded" */
    component: () => import("../views/AboutView.vue"),
  },

  {
    path: "/user/create",
    name: "user-create",
    /* Usando "lazy-loaded" */
    //component: () => import("../views/UserCreateViewOptionsApi.vue"),
    component: () => import("../views/UserCreateViewCompositionApi.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
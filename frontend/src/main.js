/* Este componente é o "ponto de entrada" da aplicação */
/* Pegando aqui a "instância do vue" */
/* import {
  createApp
} from "vue"; */

import { createApp } from "vue/dist/vue.esm-bundler.js";
/*
 "App": Sendo o componente principal, onde vão ser montadas
  todas as peças do layout, o header, o footer, o sidebar,
  o content...
*/
import App from "./App.vue";

import routes from "./routes/index.js";

/* Substituindo o componente principal "App", por
   um objeto, o qual será a estrutura do componente */
const app = createApp(App);

/* Componente "global" */
app.component("header-app", {
  template: "<h2>HHeader</h2>",
});

/* Componente "global" */
app.component("footer-app", {
  template: "<h2>FFooter</h2>",
});

app.use(routes);

/* Aqui está sendo montada toda a aplicação,
   na div "app" do "index.html" */
app.mount("#app");

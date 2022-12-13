/* Este componente é o "ponto de entrada" da aplicação */
/* Pegando aqui a "instância do vue" */
// import { createApp } from "vue";
// ou
import { createApp } from "vue/dist/vue.esm-bundler.js";
/*
 "App": Sendo o componente principal, onde vão ser montadas
  todas as peças do layout, o header, o footer, o sidebar,
  o content...
*/
import App from "./App.vue";

import router from "./routes/index.js";

const app = createApp(App);

/* Utilizando o roteamento na aplicação */
app.use(router);

/* Aqui está sendo montada toda a aplicação,
   na div "app" do "index.html" */
app.mount("#app");

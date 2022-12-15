/* Este componente é o "ponto de entrada" da aplicação */
/* Pegando aqui a "instância do vue" */
// import { createApp } from "vue";
// ou
import {
  createApp
} from "vue/dist/vue.esm-bundler.js";
/*
 "App": Sendo o componente principal, onde vão ser montadas
  todas as peças do layout, o header, o footer, o sidebar,
  o content...
*/
import App from "./App.vue";

import router from "./routes/index.js";

/* Aqui, o componente principal "App.vue"
   é passado como parâmetro */
const app = createApp(App);

/* Criando um componente global */
/* 1º parâmetro: nome-do-componente */
/* 2º parâmetro: estrutura-do-componente
   (usando a propriedade "template") */
app.component('Teste', {
  template: '<h2>Teeeste</h2>'
})

/* Utilizando o roteamento na aplicação */
app.use(router);

/* Aqui está sendo montada toda a aplicação,
   na div "app" do "index.html" */
app.mount("#app");
/* Este componente é o "ponto de entrada" da aplicação */
/* Pegando aqui a "instância do vue" */
/* import {
  createApp
} from "vue"; */

import {
  createApp
} from "vue/dist/vue.esm-bundler.js"
/*
 "App": Sendo o componente principal, onde vão ser montadas
  todas as peças do layout, o header, o footer, o sidebar,
  o content...
*/
// import App from './App.vue';
import routes from './routes/index.js'

// const app = createApp(App);
/* Substituindo o componente principal "App", por
   um objeto, o qual será a estrutura do componente */
const app = createApp({
  template: `<h2>App</h2>`
});

app.use(routes);

/* Aqui está sendo montada toda a aplicação,
   na div "app" do "index.html" */
app.mount("#app");
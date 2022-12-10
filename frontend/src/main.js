/* Pegando aqui a "instância do vue" */
import {
  createApp
} from "vue";
/*
 "App": Sendo o componente principal, onde vão ser montadas
  todas as peças do layout, o header, o footer, o sidebar,
  o content...
*/
import App from './App.vue';
import routes from './routes/index.js'

const app = createApp(App);

app.use(routes);

app.mount("#app");
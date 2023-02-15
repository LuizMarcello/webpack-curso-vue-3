/* Este componente é o "ponto de entrada" da aplicação */
/* Pegando aqui a "instância do vue" */
import { createApp } from "vue";
// ou
//import {
  //createApp
//} from "vue/dist/vue.esm-bundler.js";
/*
 "App": Sendo o componente principal, onde vão ser montadas
  todas as peças do layout, o header, o footer, o sidebar,
  o content...
*/
import App from "./AppBuscaOptionsApi.vue";
//import App from "./AppDebounceCompositionApi.vue";
//import App from "./AppDebounceOptionsApi.vue";
//import App from "./views/AppTemplateRefCompositionApi.vue";
//import App from "./views/AppTemplateRefOptionsApi.vue";
//import App from "./views/ProductsViewScopedSlotCompositionApi.vue";
//import App from "./views/ProductsViewScopedSlotOptionsApi.vue";
//import App from "./AppSlotsOptionsApi.vue";
//import App from "./AppEventosFilhoParaPaiCompositionApi.vue";
//import App from "./AppEventosFilhoParaPaiOptionsApi.vue";
//import App from "./App.vue";
//import App from "./AppPropriedadesComputadasCompositionApi.vue";
//import App from "./AppPropriedadesComputadasOptionsApi.vue";
//import App from "./AppValidacaoBackendCompositionApi.vue";
//import App from "./AppValidacaoBackendOptionsApi.vue";
//import App from "./AppFormDinamicoCompositionApi.vue";
//import App from "./AppFormDinamicoOptionsApi.vue";
//import App from "./AppPreventOnceOptionsApi.vue";
//import App from "./AppDollarRealCompositionApi.vue";
//import App from "./AppDollarRealOptionsApi.vue";
//import App from "./AppWatchEffectCompositionApi.vue";
//import App from "./AppWatchCompositionApi.vue";
//import App from "./AppWatchOptionsApi.vue";
//import App from "./AppEventosKeyBoardCompositionApi.vue";
//import App from "./AppEventosKeyBoardOptionsApi.vue";
//import App from "./AppEventosCompositionApi.vue";
//import App from "./AppEventosOptionsApi.vue";
//import App from "./AppCondicCompositionApi.vue";
//import App from "./AppCondicVshowOptionsApi.vue";
//import App from "./AppCondicVifOptionsApi.vue";
//import App from "./AppAxiosCompositionApi.vue";
//import App from "./AppAxiosOptionsApi.vue";
//import App from "./AppVforVif.vue";
//import App from "./AppOptionsApi.vue";
//import App from "./AppCompositionApi.vue";
//import App from "./AppCompositionAmigavel.vue";

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
<template>
  <h2 id="my-app">Apppp</h2>

  <p class="teste">LuizMarcello</p>

  <!-- Este componente "App.vue", é a página principal do site, 
       é o componente principal.É onde todos os componentes vão
       ser carregados -->

  <!-- Aqui estão sendo montados estes componentes -->

  <!-- Componente global(No main.js) -->
  <Teste />

  <Header />
  <Sidebar />

  <!-- Todas as "rotas" dos componentes serão carregadas aqui -->
  <RouterView />
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { RouterView } from "vue-router";

export default {
  components: {
    Header,
    Sidebar,
    RouterView,
  },
};
</script>

<style scoped>
/* @import "./assets/app.css"; */
#my-app {
  color: red;
}
.teste {
  color: red;
}
</style>

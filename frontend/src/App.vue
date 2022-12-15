<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
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
/* Tag <script>: O "comportamento" do componente */

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

<style>
/* Tag <style>: A estilização do template */
/* @import "./assets/app.css"; */
#my-app {
  background-color: red;
}
.teste {
  background-color: red;
}
</style>

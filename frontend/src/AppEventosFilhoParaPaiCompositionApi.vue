<template>
  <!--Aqui está sendo montado este componente -->
  <Nav />

  <!-- Todas as "rotas" serão carregadas aqui -->
  <RouterView />

  <button @click="count++">Add - {{ count }}</button>

  <!--Aqui está sendo montado este componente -->
  <!-- "addCounttt": Evento enviado pelo componente filho -->
  <!-- <CountChildCompositionApi v-on:addCounttt="count++" /> -->
  <!-- Ou assim: -->
  <CountChildCompositionApi v-on:addCounttt="add" />
  <!-- Ou assim, com "arrow-function" -->
  <!-- O "value" é o valor padrão enviado pelo filho -->
  <!-- <CountChildCompositionApi v-on:addCounttt="(value) => (count += value)" /> -->
</template>

<script setup>
import Nav from "./components/Nav.vue";
/* Importando este componente "filho" */
import CountChildCompositionApi from "./components/CountChildCompositionApi.vue";
import { ref } from "vue";

/* Reativo */
const count = ref(0);

function add(value) {
  count.value += value;
}
</script>

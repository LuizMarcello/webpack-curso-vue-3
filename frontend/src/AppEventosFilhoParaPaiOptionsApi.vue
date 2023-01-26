<template>
  <!--Aqui está sendo montado este componente -->
  <Nav />

  <!-- Todas as "rotas" serão carregadas aqui -->
  <RouterView />

  <button @click="count++">Add - {{ count }}</button>

  <!--Aqui está sendo montado este componente -->
  <!-- "addCounttt": Evento enviado pelo componente filho -->
  <!-- <CountChildOptionsApi v-on:addCounttt="count++" /> -->
  <!-- Ou assim: -->
  <!--  <CountChildOptionsApi v-on:addCounttt="add" /> -->
  <!-- Ou assim, com "arrow-function" -->
  <CountChildOptionsApi v-on:addCounttt="(value) => (count += value)" />
</template>

<script>
import Nav from "./components/Nav.vue";
import { RouterView } from "vue-router";
/* Importando este componente "filho" */
import CountChildOptionsApi from "./components/CountChildOptionsApi.vue";

export default {
  components: {
    Nav,
    CountChildOptionsApi,
    RouterView,
  },

  data() {
    /* Reativos */
    return {
      count: 0,
    };
  },

  methods: {
    /* "value: Capturando o valor padrão enviado pelo filho" */
    add(value) {
      this.count += value;
    },
  },
};
</script>

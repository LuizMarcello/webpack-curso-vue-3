<template>
  <!--Aqui estão sendo montados todos os componentes-->
  <div>
    <div v-if="showHeader"><Header /></div>

    <button v-on:click="showHeader = !showHeader">Toggle header</button>

    <h2>App</h2>

    <button v-on:click="count++">ADD 1</button>

    <Router-link to="/">Home</Router-link>
    <Router-link to="/about">About</Router-link>

    <!-- Todas as "rotas" serão carregadas aqui -->
    <!-- <RouterView /> -->
    <!-- ou -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";

export default {
  /* Registrando este componente importado acima */
  components: { Header },

  data() {
    /* Aqui vão as propriedades reativas no options.api */
    return {
      count: 0,
      showHeader: false
    };
  },
  mounted() {
    console.log("mounted");
  },
  /* Somente quando uma propriedade é alterada no componente */
  updated() {
    console.log("updated");
  }
};
</script>

<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->

  <!-- Colocando a condicional aqui mesmo
     na tag de execução do componente -->
  <!-- <Header v-if="showHeader" /> -->
  <!-- ou -->
  <!-- Colocando a condicional na tag <template>
     A tag <template> não vai ser renderizada -->
  <template v-if="showHeader">
    <Header />
  </template>

  <!-- <template v-else-if="qualquerCoisa">Qualquer coisa</template> -->

  <template v-else> Sem Header </template>

  <hr />

  <h2>Lista de usuários</h2>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
  </ul>
</template>

<script>
/* OptionsApi: */

import http from "./services/http.js";
import Header from "./components/Header.vue";

/* Export default: Exporta para ser usado
   no template deste componente */
export default {
  /* Registrando o componente importado */
  components: { Header },
  data() {
    return {
      /* Dentro do data(){return{}} coloca tudo que é "reativo" */
      /* Um array de objetos */
      users: [],

      showHeader: 'ghghghggh',
    };
  },

  async mounted() {
    /* Consultando aqui o banco de dados */
    try {
      /* Trabalhando com "desestruturação". O retôrno do axios
          sempre tem esta propriedade "{ data }" */
      const { data } = await http.get("api/users");
      this.users = data;
    } catch (error) {}
  },

  updated() {
    console.log("updated");
  },
};
</script>

<style>
/* Tag <style>: A estilização do template */
</style>

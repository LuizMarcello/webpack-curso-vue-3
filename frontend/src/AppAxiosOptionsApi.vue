<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <h2>Lista de usuários</h2>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
  </ul>
</template>

<script>
/* OptionsApi: */

import http from './services/http.js';

/* Export default: Exporta para ser usado
   no template deste componente */
export default {
  data() {
    return {
      /* Dentro do data(){return{}} coloca tudo que é "reativo" */
      /* Um array de objetos */
      users: [],
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

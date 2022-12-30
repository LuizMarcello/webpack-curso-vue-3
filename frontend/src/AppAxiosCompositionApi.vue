<template>
  <h2>Lista de usuários</h2>
  <ul>
    <li v-for="user in users.users" :key="user.id">{{ user.firstName }}</li>
  </ul>
</template>

<script setup>
/* CompositionApi: */

import http from "./services/http.js";

import { onMounted, reactive } from "vue";

/* Como "const", depois não dá para alterar seu valor 
   no "onMounted" abaixo. Tem que ser "let"  */
//const users = reactive([]); */
/* Um pouco diferente, devido a reatividade com "reactive"(objeto) */
let users = reactive({ users: [] });

onMounted(async () => {
  /* Consultando aqui o banco de dados */
  try {
    /* Trabalhando com "desestruturação". O retôrno do axios
       sempre tem esta propriedade "{ data }" */
    const { data } = await http.get("api/users");
    /* Um pouco diferente, devido a reatividade com "reactive"(objeto) */
    users.users = data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
/* Tag <style>: A estilização do template */
</style>

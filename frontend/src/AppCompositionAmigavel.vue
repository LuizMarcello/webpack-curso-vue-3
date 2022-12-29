<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <!-- <Header /> -->

  <button v-on:click="count++">Add {{ count }}</button>
  <!-- ou -->
  <!--  <button v-on:click="add()">Add {{ count }}</button> -->

  {{ userName }}

  {{ myName }}

  <!-- Percorrendo o array de objetos -->
  <ul>
    <li v-for="user in users">{{ user.firstName }} - {{ user.age }}</li>
  </ul>

  <h2>App (composition Amigavel api)</h2>

  <router-link to="/">home</router-link>
  <router-link to="/about">About</router-link>

  <!-- Aqui vão ser carregados/roteados todos os componentes -->
  <router-view></router-view>

  <!-- <Footer /> -->
</template>


<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import { onMounted, onUpdated, reactive, ref } from "vue";

onMounted(() => {
  console.log("mounted AppCompositionAmigavel.vue");
  console.log(users)
});

onUpdated(() => {
  console.log("updated AppCompositionAmigavel.vue");
});

const count = ref(0);
const userName = ref("Alexandrrre");
const users = reactive([
  {
    firstName: "LuizMarcello",
    age: 60,
  },
  {
    firstName: "Valeria",
    age: 41,
  },
]);

let myName = ref('LuizzzMarcello')

function add() {
  count.value++;
}


</script>

<style>
/* Tag <style>: A estilização do template */
</style>

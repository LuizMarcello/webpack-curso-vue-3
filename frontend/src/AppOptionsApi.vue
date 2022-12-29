<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <div v-if="showHeader">
    <Header />
  </div>

  {{ count }}

  {{ username }}

  <ul>
    <li v-for="user in users">{{ user.firstName }} - {{ user.age }}</li>
  </ul>

  <button v-on:click="showHeader = !showHeader">Toggle header</button>

  <!-- <button v-on:click="count++">Add {{ count }}</button> -->
  <!-- ou -->
  <!-- <button v-on:click="add()">Add {{ count }}</button> -->

  <h2>App (options api)</h2>

  <router-link to="/">home</router-link>
  <router-link to="/about">About</router-link>

  <!-- Aqui vão ser carregados/roteados todos os componentes -->
  <router-view></router-view>

  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer },

  data() {
    return {
      count: 0,
      showHeader: false,
      username: "LuizMarcello",
      users: [
        {
          firstName: "Luiz",
          age: 61,
        },

        {
          firstName: "Valeria",
          age: 41,
        },
      ],
    };
  },

  methods: {
    add() {
      this.count++;
    },
  },

  mounted() {
    console.log(this.count);
  },

  updated() {
    console.log("updated");
  },
};
</script>

<style>
/* Tag <style>: A estilização do template */
</style>

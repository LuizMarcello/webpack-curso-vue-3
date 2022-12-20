<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <div v-if="showHeader">
    <Header />
  </div>

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
/* Tag <script>: O "comportamento" do componente */

/* Pode ser de duas maneiras: */
/* Trabalhando com "OPTIONS API": Versões 2 e 3 do vuejs */
//import Header from "./components/Header.vue";
//import Footer from "./components/Footer.vue";

//export default {
  /* Aqui são registrados os componentes,
     porque serão utilizados. */
  //components: { Header, Footer },

  /* data(): Para trabalhar com a "reatividade" */
  //data() {
    //return {
      /* Colocar aqui tudo que é "reativo" */
      //count: 0,
    //};
  //},

  //methods: {
    //add() {
      //this.count++;
    //},
  //},
//};
/* Um resuminho: */
/* Options api: Fica meio ingessado */
/* Composition api: Tudo que precisa ser utilizado dentro
   do setup(), importa diretamente do "vue"
   É mais desaclopado */

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer },

  data() {
    return {
      count: 0,
      showHeader:false
    };
  },

  methods: {
    add() {
      this.count++;
    },
  },

  mounted() {
    console.log("mounted");
  },

  updated() {
    console.log("updated");
  },
};

///////////////////////////////////////////////////////////
</script>

<style>
/* Tag <style>: A estilização do template */
</style>

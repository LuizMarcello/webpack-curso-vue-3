<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <Header />

  <!-- <button v-on:click="count++">Add {{ count }}</button> -->
  <!-- ou -->
  <button v-on:click="add()">Add {{ count }}</button>

  <h2>App (options api)</h2>

  <Footer />
</template>

<script>
/* Tag <script>: O "comportamento" do componente */

/* Pode ser de duas maneiras: */
/* Trabalhando com "OPTIONS API": Versões 2 e 3 do vuejs */
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  /* Aqui são registrados os componentes,
     porque serão utilizados. */
  components: { Header, Footer },

  /* data(): Para trabalhar com a "reatividade" */
  data() {
    return {
      /* Colocar aqui o que é "reativo" */
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
/* Um resuminho: */
/* Options api: Fica meio ingessado */

/* Composition api: Tudo que precisa ser utilizado dentro
   do setup(), importa diretamente do "vue"
   É mais desaclopado */
</script>

<style>
/* Tag <style>: A estilização do template */
</style>

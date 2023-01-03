<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <!-- <button @click="count++">Clique aqui {{ count }}</button> -->
  <button @click="add('teste')">Clique aqui {{ count }}</button>
  <!-- <button @mouseover="count++">Passe o mouse aqui {{ count }}</button> -->
  <button @mouseover="add">Passe o mouse aqui {{ count }}</button>
</template>

<script>
/* OptionsApi */
//import Header from "./components/Header.vue";
//import Footer from "./components/Footer.vue";

export default {
  //components: { Header, Footer },

  /* Reativos */
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    add(teste) {
      console.log(teste);
      this.count++;
    },
  },

  mounted() {
    console.log(this.count);
  },
};
</script>

/* A estilização do template */
<style></style>

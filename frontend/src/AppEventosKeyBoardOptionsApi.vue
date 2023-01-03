<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <!-- <button @click="count++">Clique aqui {{ count }}</button> -->
  <button @click="count++">Clique aqui {{ count }}</button>
  <!-- <button @mouseover="count++">Passe o mouse aqui {{ count }}</button> -->
  <!-- <button @mouseover="add">Passe o mouse aqui {{ count }}</button> -->
  <!-- Neste input, para ligar o valor digitado a uma propriedade reativa
       (no caso, userName), usa a diretiva "v-model" -->
  <input type="text" v-model="userName" placeholder="Qualquer Coisa" />

  {{ userName }}

  <!-- <input
    type="text"
    @keyup="
      (event) => {
        this.count += Number(event.target.value);
      }
    "
    placeholder="Qualquer Coisa"
  /> -->
</template>

<script>
/* OptionsApi */
//import Header from "./components/Header.vue";
//import Footer from "./components/Footer.vue";

export default {
  //components: { Header, Footer },

  /* OptionsApi: Reativos */
  data() {
    return {
      count: 0,
      userName: '',
    };
  },

  methods: {
    //myName(event) {
      //this.userName = event.target.value;
      //this.count += Number(event.target.value);
      //console.log(event.target.value);
      //console.log(this.count);
    //},
  },

  mounted() {
    console.log(this.count);
  },
};
</script>

/* A estilização do template */
<style></style>

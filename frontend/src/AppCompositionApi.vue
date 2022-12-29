<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <!-- <Header /> -->

  <!-- <button v-on:click="count++">Add {{ count }}</button> -->
  <!-- ou -->
  <!-- button v-on:click="add()">Add {{ count }}</button> -->

  <h2>App (composition api)</h2>

  <!-- <Footer /> -->
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import { ref } from "vue";

export default {
  components: { Header, Footer },
  
  setup() {
    const count = ref(0);

    function add() {
        count.value++;
    }
    
    return {
      count,
      add,
    };
  },
};
</script>

<style>
/* Tag <style>: A estilização do template */
</style>

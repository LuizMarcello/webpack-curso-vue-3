<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <Header />

  <!-- <button v-on:click="count++">Add {{ count }}</button> -->
  <!-- ou -->
  <button v-on:click="add()">Add {{ count }}</button>

  <h2>App (options api)</h2>

  <Footer />
</template>


<!-- Composition api mais amigável: -->
<script setup>
/* Tag <script>: O "comportamento" do componente */

/* Também com "COMPOSITION API": Versão 3 do vuejs */
/* Outra maneira mais "amigável": */
/* Não precisa registrar os componentes */
/* Não precisa usar o return */
/* Abrindo o <script> com "setup", tudo que for
   criado dentro deste <script>, já terá acesso no template. */
import { ref } from "vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const count = ref(0);

function add() {
  count.value++;
}
/* Um resuminho: */
/* Options api: Fica meio ingessado */

/* Composition api: Tudo que precisa ser utilizado dentro
   do setup(), importa diretamente do "vue"
   É mais desaclopado */
</script>

<style>
/* Tag <style>: A estilização do template */
</style>

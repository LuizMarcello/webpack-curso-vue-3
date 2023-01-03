<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <!-- <button @click="count++">Clique aqui {{ count }}</button> -->
  <!-- <button @click="add('teste')">Clique aqui {{ count }}</button> -->
  <button @dblclick="add('teste')">Duplo clique {{ count }}</button>
  <!-- <button @mouseover="count++">Passe o mouse aqui {{ count }}</button> -->
  <!-- <button @mouseover="add">Passe o mouse aqui {{ count }}</button> -->
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

/* Reativos: */
const count = ref(0);

/* CompositionApi: Para acessar o "ref()" dentro do script"
   tem que usar o ".value" */
function add(teste) {
  console.log(teste);
  count.value++;
}

onMounted(() => {});
</script>

<style scoped>
/* Tag <style>: A estilização do template */
.my-class {
  border: solid 3px red;
}

.my-other-class {
  border: solid 3px blue;
}
</style>

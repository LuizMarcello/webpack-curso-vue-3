<template>
    <!-- Tag <template>: O que é mostrado para o usuário -->
    <!-- <button @click="count++">Clique aqui {{ count }}</button> -->
    <!-- <button @click="add('teste')">Clique aqui {{ count }}</button> -->
    <button @dblclick="add('teste')">Duplo clique {{ count }}</button>
    <!-- <button @mouseover="count++">Passe o mouse aqui {{ count }}</button> -->
    <!-- <button @mouseover="add">Passe o mouse aqui {{ count }}</button> -->

    {{ userName }}

    <!-- <input type="text" @keyup="changeName" placeholder="Name"> -->

    <!-- Neste input, para ligar o valor digitado a uma propriedade reativa
       (no caso, userName), usa a diretiva "v-model" -->
    <input type="text" v-model="userName" placeholder="Name">
  </template>
  
  <script setup>
  import { onMounted, reactive, ref } from "vue";
  
  /* Reativos: */
  const count = ref(0);

  const userName = ref('');
  
  /* CompositionApi: Para acessar o "ref()" dentro do script"
     tem que usar o ".value" */
  function add(teste) {
    console.log(teste);
    count.value++;
  }

  //function changeName(event){
    //userName.value = event.target.value;
  //}
  
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
  
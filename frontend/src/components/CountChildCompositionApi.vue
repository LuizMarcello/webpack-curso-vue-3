<template>
  <!-- O componente "AppEventosFilhoParaPaiCompositionApi.vue" é pai deste. -->
  <div>
    <button @click="add">Add from child</button>
    <!-- Ou assim: -->
    <!-- Direto aqui, nessa linha, enviando um evento para o componente pai -->
    <!-- <button @click="$emit('addCounttt', 10)">Add from child</button> -->
    <!-- <button @click="$emit('addCounttt')">Add from child</button> -->
  </div>
</template>

<script setup>
/* Enviando evento para o componente pai */
const emiiit = defineEmits(["addCounttt"]);

function add() {
  /* Enviando também um valor padrão */
  emiiit("addCounttt", 10);
}
</script>

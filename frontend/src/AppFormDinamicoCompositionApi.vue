<template>
  <input type="text" name="" id="" v-model="userName" />

  <!-- Quando se faz um "v-for" no template,
       ele não é renderizado -->
  <template v-for="user in users" :key="user.id">
    <input
      type="checkbox"
      @click="userName = user.firstName"
      :checked="userName == user.firstName"
    />{{ user.firstName }}
  </template>

  <!-- Conforme o que for selecionado no "option", será repassado para
       o "v-model" do "select", para seguir em frente -->
  <select name="" v-model="userName">
    <option :value="user.firstName" v-for="user in users" :key="user.id">
      {{ user.firstName }}
    </option>
  </select>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";

/* Reativos: */
/* Um array de objetos: */
const users = reactive([
  {
    id: 1,
    firstName: "Luiz",
  },
  {
    id: 2,
    firstName: "Valeria",
  },
  {
    id: 3,
    firstName: "Gabriel",
  },
]);

const userName = ref("Luiz");
</script>

<style scoped></style>

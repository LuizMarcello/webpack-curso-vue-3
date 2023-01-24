<template>
  <h2>Admin</h2>

  <!-- {{ user.firstName }} {{ user.lastName }} -->

  <!-- <br /> -->

  <!-- Chamando como uma propriedade(sem os parênteses) -->
  <!-- {{ fullName }} -->

  <!-- O loop "v-for" é melhor na tag "<template>" -->
  <ul>
    <template v-for="(user, index) in users" :key="index">
      <li v-if="user.is_admin">{{ user.firstName }}</li>
    </template>
  </ul>

  <h2>Not admin</h2>
  <ul>
    <li v-for="(user, index) in usersIsNotAdmin" :key="index">{{ user.firstName }}</li>
  </ul>

<!-- Chamando um propriedade computada como "propriedade" -->
  {{ countComputed }}
  <button @click="computedCount++">Add computed</button>

<br>

<!-- Chamando uma função(abre e fecha parênteses) -->
  {{ countFunction() }}
  <button @click="functionCount++">Add function</button>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

/* Reativo */
/* Um objeto simples*/
const user = reactive({
  firstName: "Luiz",
  lastName: "Marcello",
});

/* Reativas */
/* Propriedades */
const computedCount = ref(0);
const functionCount = ref(0);

/* Reativo */
/* Um array de objetos */
const users = reactive([
  {
    firstName: "Luiz",
    is_admin: 1,
  },
  {
    firstName: "Gabriel",
    is_admin: 0,
  },
  {
    firstName: "Luizinho",
    is_admin: 0,
  },
  {
    firstName: "Valeria",
    is_admin: 1,
  },
]);

/* Propriedade computada */
/* Pegando o nome completo */
const fullName = computed(() => {
  /* Trabalhando em cima de propriedades reativas */
  return user.firstName + " " + user.lastName;
});

/* Propriedade computada */
/* Pegando os usuários não administradores */
const usersIsNotAdmin = computed(() => {
  /* Trabalhando em cima de propriedades reativas */
  return users.filter((user) => user.is_admin === 0);
});

/* Propriedade computada */
const countComputed = computed(() => {
  console.log("called computed count");
  return computedCount.value;
});

/* Função */
function countFunction() {
   console.log("called function count");
  return functionCount.value;
}
</script>

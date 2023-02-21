<template>
  <button @click="increment">Add</button>
  <br />
  {{ count }}

  <br />

  <ul>
    <li v-for="(user, index) in userrs['ussers']" :key="index">{{ user.firstName }}</li>
  </ul>
</template>

<script setup>
/* Desestruturação */
import { onMounted } from "vue";
import { useCount } from "./composables/countCompositionApi.js";
import { useUsers } from "./composables/usersCompositionApi.js";

/* Desestruturação */
const { count, increment } = useCount();
const { userrs } = useUsers();

/* Este "onMounted()" não vai sobscrever os "onMouted()" dos
     mixins. Vai ser feito um "merge" entre eles. */
onMounted(() => {
  //console.log("onMounted no componente");
});
</script>

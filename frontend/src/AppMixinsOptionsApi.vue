<template>
  <button @click="increment">Add</button>
  {{ count }}
  <br />

  <!-- "getTotalUsers" vem lá do mixin "users.js" -->
  {{ getTotalUsers }}
  <br />

  {{ name }}
  <ul>
    <!-- "usersData" vem lá do mixin "users.js" -->
    <li v-for="(user, index) in usersData" :key="index">
      {{ user.firstName }}
    </li>
  </ul>
  <hr />
</template>

<script>
/* Como lá nos mixins foi exportado como
   "export default()", aqui pode importar com qualquer
    nome */
import count from "./mixins/count.js";
import users from "./mixins/users.js";

export default {
  /* Para poder trabalhar com este mixin: */
  mixins: [count, users],

  /* Este "data()" não vai sobscrever os "data()" dos
     mixins. Vai ser feito um "merge" entre eles. */
  data() {
    return {
      name: "LuizMarcello",
    };
  },

  mounted() {
    console.log("chamou de dentro do mounted do componente");
  },
};
</script>

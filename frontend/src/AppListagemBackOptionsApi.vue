<template>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
  </ul>
</template>

<script>
//import axios from "axios";
import http from "./services/http.js";

export default {
  data() {
    /* Aqui estão as propriedades reativas */
    return {
      users: []
    };
  },

  /* É uma boa prática sempre fazer aqui no "mounted()"
     a consulta ao banco de dados */
  async mounted() {
    try {
      /* O retôrno do axios sempre tem esta propriedade "data" */
      const { data } = await http.get("http://localhost:8000/api/users");
      //console.log(data);
      this.users = data;
    } catch (error) {
      console.log(error);
    }
  },

  updated() {}
};
</script>

<style></style>

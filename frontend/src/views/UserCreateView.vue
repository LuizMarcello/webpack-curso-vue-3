<template>
  <form action="">
    <input type="text" placeholder="FirstName" v-model="user.firstName" />
    <input type="text" placeholder="LastName" v-model="user.lastName" />
    <input type="text" placeholder="Email" v-model="user.email" />
    <input type="text" placeholder="Password" v-model="user.password" />
    <button @click.submit.prevent="create">Cadastrar</button>
  </form>
</template>

<script>
import http from "../services/http";

export default {
  name: "UserCreateView.vue",

  data() {
    /* Reativos: */
    return {
      user: {},
    };
  },

  methods: {
    /* Tem que ser "async", por causa do "axios"
       que trabalha com "promisses" */
    async create() {
      try {
        const { data } = await http.post("api/user", this.user);
        console.log(data);
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
//}
</script>

<template>
  <input type="text" placeholder="Search" @keyup="seaarch" />

  <ul>
    <li v-for="(user, index) in userss" :key="index">
      {{ user.firstName }} {{ user.lastName }}
    </li>
  </ul>

  <!--  {{ userNotFounnnd }} -->

  <!-- Com propriedade computada, para interpretar o html -->
  <div v-html="userNotFounnnd"></div>

  <router-view></router-view>
</template>

<script>
import http from "./services/http.js";
import _ from "lodash";

export default {
  data() {
    /* Propriedades reativas */
    return {
      userss: [],
      loading: true,
    };
  },

  components: {},

  /* Propriedades computadas */
  /* Propriedades computadas trabalham em cima
     de propriedades reativas. */
  computed: {
    userNotFounnnd() {
      return !this.loading && this.userss.length <= 0
        ? `<span class="notFounddd">Nenhum usuárioo encontrado</span>`
        : "";
    },
  },

  async mounted() {
    try {
      /* Usando "desestruturação", porque o "axios" retorna
         sempre do banco de dados, a propriedade "{data}" */
      /* Com o "axios", sempre assíncrono. */
      const { data } = await http.get("/api/users");
      /* console.log(data); */
      this.loading = false;
      this.userss = data;
    } catch (error) {
      /* Usando o "axios", sempre fazer o "error" assim: */
      console.log(error.response.data);
    }
  },

  methods: {
    /* Buscando no banco de dados */
    /* debounce(): Só vai buscar o banco de dados 1 segundo
       depois que terminar toda a digitação no input.
       Ele pertence a biblioteca javascript "lodash".
       Bom para pesquisas/buscas. */
    /* Desta maneira, como "função": */
    //search: _.debounce(function () {
    //console.log(this.userSearch);
    //}, 1000),
    /* Ou como "arrow-function" */
    /* Com o "axios", sempre assíncrono. */
    //seaarch: _.debounce(async (event) => {
    seaarch: _.debounce(async function (event) {
      try {
        /* Usando "desestruturação", porque o "axios" retorna
         sempre do banco de dados, a propriedade "{data}" */
        const { data } = await http.get("/api/users/search", {
          params: {
            /* O valor digitado no input de pesquisa */
            uusser: event.target.value,
          },
        });
        this.userss = data;
        /* console.log(data); */
      } catch (error) {
        /* Usando o "axios", sempre fazer o "error" assim: */
        console.log(error.response.data);
      }
    }, 1000),
  },
};
</script>

<style>
.notFounddd {
  color: red;
}
</style>

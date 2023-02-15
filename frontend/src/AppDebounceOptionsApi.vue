<template>
  <Nav />

  <router-view></router-view>

  <input type="text" name="" id="" placeholder="Search" @keyup="search" />
</template>

<script>
import Nav from "./components/Nav.vue";
import _ from "lodash";

export default {
  components: {
    Nav,
  },

  methods: {
    /* debounce(): Só vai buscar o banco de dados 1 segundo
       depois que terminar toda a digitação no input.
       Ele pertence a biblioteca javascript "lodash".
       Bom para pesquisas/buscas. */
    search: _.debounce(() => {
      console.log("search");
    }, 1000),
  },
};
</script>

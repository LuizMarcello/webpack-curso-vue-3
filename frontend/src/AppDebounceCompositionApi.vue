<template>
  <router-view></router-view>

  <input type="text" name="" id="" placeholder="Search" @keyup="searcch" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import _ from "lodash";

/* function searcch() {
  console.log("search");
} */

/* debounce(): Só vai buscar o banco de dados 1 segundo
   depois que terminar toda a digitação no input.
   Ele pertence a biblioteca javascript "lodash".
   Bom para pesquisa/buscas. */
const searcch = _.debounce(() => {
  console.log("search");
}, 1000);
</script>

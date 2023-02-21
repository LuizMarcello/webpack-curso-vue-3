<template>
  <input
    type="text"
    name=""
    id=""
    placeholder="Search"
    v-model="userSearch"
    @keyup="seearch"
  />

  <ul>
    <li v-for="(user, index) in userss['users']" :key="index">
      {{ user.firstName }} {{ user.lastName }}
    </li>
  </ul>

  <!-- {{ userNotFounnnd }} -->

  <!-- Com propriedade computada, para interpretar o html -->
  <div v-html="userNotFounnnd"></div>

  <router-view></router-view>
</template>

<script setup>
import http from "./services/http.js";
import { onMounted, ref, reactive, computed } from "vue";
import _ from "lodash";

/* Propriedades reativas */
const userss = reactive({ users: [] });
const userSearch = ref();
const loading = ref(true);

/* Propriedade computada */
const userNotFounnnd = computed(() => {
  return !loading.value && userss["users"].length <= 0
    ? '<span id="notFound">Nenhum user encontrado</span>'
    : "";
});

/* Buscando no banco de dados */
/* Com o "axios", sempre assíncrono. */
onMounted(async () => {
  try {
    /* Usando "desestruturação", porque o "axios" retorna
       sempre do banco de dados, a propriedade "{data}" */
    const { data } = await http.get("/api/users");
    /* console.log(data); */
    userss["users"] = data;
    loading.value = false;
  } catch (error) {
    /* Usando o "axios", sempre fazer o "error" assim: */
    console.log(error.response.data);
  }
});

/* debounce(): Só vai buscar o banco de dados 1 segundo
   depois que terminar toda a digitação no input.
   Ele pertence a biblioteca javascript "lodash".
   Bom para pesquisas/buscas. */
const seearch = _.debounce(async () => {
  /* console.log("Searching " + userSearch.value); */
  try {
    /* Usando "desestruturação", porque o "axios" retorna
       sempre a propriedade "{data}", do banco de dados,  */
    const { data } = await http.get("/api/users/search", {
      params: {
        uusser: userSearch.value,
      },
    });
    userss["users"] = data;
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
}, 1000);
</script>

<style>
#notFound {
  color: red;
}
</style>

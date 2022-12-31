<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->

  <img
    :src="imageSrc"
    alt=""
    class="my-default-class"
    :class="{ 'my-class': is_admin, 'my-other-class': !is_admin }"
  />
  <!-- Com "v-show" é renderizado, só coloca o display=none do css -->
  <!-- Com "v-if" não é nem renderizado -->
  <!-- A diretiva "v-show" não funciona com <template>,
         porque ela trabalha com o "display=none" do css -->
  <span v-show="showHeader">
    <Header />
  </span>

  <h2>Lista de usuários</h2>

  <!-- Nesta caso, v-for(loop), com v-if(condicional) -->

  <!--
  <ul>
    <template v-for="user in users" :key="user.id">
      <li v-if="user.is_admin === 1  ">
        {{ user.firstName }}
      </li>
    </template>
  </ul>
  -->

  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.firstName }}
      <button v-if="user.is_admin === 1">Not Admin</button>
      <button v-else>Admin</button>
    </li>
  </ul>

  <!-- Controlando a exibição de várias tags simultâneas,
     com a condicional "v-if", na tag <template>  -->
  <template v-if="showHeader">
    <span> </span>
    <img src="" alt="" />
    <dir></dir>
  </template>

  <template v-else> </template>
</template>

<script>
/* OptionsApi: */

import http from "./services/http.js";
import Header from "./components/Header.vue";

/* Export default: Exporta para ser usado
   no template deste componente */
export default {
  /* Registrando o componente importado */
  components: { Header },
  data() {
    return {
      /* Dentro do data(){return{}} coloca tudo que é "reativo" */
      /* Um array de objetos */
      users: [],
      imageSrc: "https://picsum.photos/200/300",
      classImg: "my-class",
      showHeader: true,
      is_admin: false,
    };
  },

  async mounted() {
    /* Consultando aqui o banco de dados */
    try {
      /* Trabalhando com "desestruturação". O retôrno do axios
          sempre tem esta propriedade "{ data }" */
      const { data } = await http.get("api/users");
      this.users = data;
    } catch (error) {}
  },

  updated() {
    console.log("updated");
  },
};
</script>

<style scoped>
/* Tag <style>: A estilização do template */
.my-class {
  border: solid 3px red;
}

.my-other-class {
  border: solid 3px blue;
}
</style>

<template>
  <Header />

  <!-- <button @click="count++">Add {{ count }}</button> -->
  <button @click="add()">Add {{ count }}</button>

  <h2>AppDiferCompositionOptionsApi</h2>

  <Footer />
  
  <!-- <div class="wrapper">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
  </div> -->
</template>

<!-- Options Api -->
<script>
/* Importando estes componentes */
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  /* Registrando os componentes importados */
  components: {
    Header,
    Footer
  },

  data() {
    /* Reatividades */
    return {
      count: 0
    };
  },

  /* Métodos e funções */
  methods: {
    add() {
      this.count++;
}
  }
};
</script>

<style scoped>
#my-app {
  background-color: aqua;
}

#teste {
  color: red;
}
</style>

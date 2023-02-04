<template>
  <!-- <ProductsCompositionApi v-bind:producccts="produuucts" v-slot="{ age }"> -->
    <ProductsCompositionApi v-bind:producccts="produuucts" v-slot="propsss">
    <li @click="getProduct(propsss.ppproduct.id)">{{ propsss.ppproduct.name }}</li>
    <!-- <li>{{ propsss.age }}</li> -->
    <!-- <li>{{ age }}</li> -->
  </ProductsCompositionApi>
</template>

<script setup>
/* Importando este componente */
import ProductsCompositionApi from "../components/ProductsCompositionApi.vue";

/* Importando a reatividade */
import { ref, reactive } from "vue";

function getProduct(id) {
  console.log(id);
}

/* Reativo */
/* Um array de objetos */
const produuucts = reactive([
  {
    id: 1,
    name: "Imac",
  },

  {
    id: 2,
    name: "MacBook",
  },
  {
    id: 3,
    name: "Mouse",
  },
]);

/* Reativo */
/* Um objeto simples */
const product = ref({ likes: 20, comments: 30 });
</script>

<style scoped>
#app-products {
  color: red;
}
</style>

<template>
  <h2 id="app-products">Products</h2>
  <h2 id="my-app">Products my app</h2>

  <h2>Products 1</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione beatae
    facere. Eveniet explicabo quia similique iste vitae voluptates quam, delectus ab
    provident, qui aliquam unde voluptatibus eos voluptatem voluptatum?
  </p>

  <!--Passando propriedades para os componentes "filhos" -->
  <!-- <ProductInfoOptionsApi :likes="product.likes" :comments="product.comments" /> -->
  <ProductInfoCompositionApi :likes="product.likes" :comments="product.comments" />
</template>

<script setup>
/* Importando estes componentes para serem filhos deste */
//import ProductInfoOptionsApi from "../components/ProductInfoOptionsApi.vue";
import ProductInfoCompositionApi from "../components/ProductInfoCompositionApi.vue";

import { ref, reactive } from "vue";

/* Reativos */
const product = reactive({
  likes: 20,
  comments: 45,
});

/* Reativos */
const likes = ref('20');
const comments = ref('10');
</script>

<style scoped>
#app-products {
  color: red;
}
</style>

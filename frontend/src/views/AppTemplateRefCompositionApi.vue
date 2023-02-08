<template>
  <!-- o "template ref" trabalha pegando os elementos do html -->

  <router-view></router-view>

  <img src="https://picsum.photos/200/300" alt="" id="img" ref="imgg" />

  <ul>
    <li v-for="(product, index) in products" :key="index" id="product" ref="producct">
      {{ product.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";

/* Reativos */
const imgg = ref(null);
const producct = ref([]);

const products = reactive([
  {
    id: 1,
    name: "Imac",
  },
  {
    id: 2,
    name: "Teclado",
  },
]);

onMounted(() => {
  /* Capturando um elemento no html acima */
  //console.log(document.querySelector("#img"));
  //console.log(document.querySelector("#product"));
  //console.log(document.querySelectorAll("#product"));
  //console.log(imgg.value["src"]);
  console.log(producct.value);
});
</script>

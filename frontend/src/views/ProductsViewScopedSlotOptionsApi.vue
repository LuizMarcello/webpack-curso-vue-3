<template>
  <ProductsOptionsApi v-bind:producccts="produuucts" v-slot="props">
    <li @click="getProduct(props.proooduct.id)">{{ props.proooduct.name }}</li>
  </ProductsOptionsApi>
</template>

<script>
/* Importando este componente */
import ProductsOptionsApi from "../components/ProductsOptionsApi.vue";

export default {
  /* Registrando este componente */
  components: { ProductsOptionsApi },

  name: "Products.vue",

  data() {
    return {
      /* Um array de objetos */
      produuucts: [
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
      ],
      /* Um objeto simples */
      product: {
        likes: 20,
        comments: 30,
      },
    };
  },

  methods: {
    getProduct(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
#app-products {
  color: red;
}
</style>

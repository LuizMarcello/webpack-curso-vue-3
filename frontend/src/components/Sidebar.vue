<template>
  <ul>
    <!-- Aqui estão os links -->
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
  </ul>
</template>

<script>

import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

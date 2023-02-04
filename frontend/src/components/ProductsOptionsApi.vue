<template>
  <ul>
    <slot v-for="(product, index) in producccts" :key="index" v-bind:proooduct="product">
      <!-- {{ product.name }} -->
    </slot>
  </ul>
</template>

<script>
export default {
  props: ["producccts"],
};
</script>

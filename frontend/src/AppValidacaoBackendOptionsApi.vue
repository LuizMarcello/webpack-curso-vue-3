<template>
  <Nav />

  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: { Nav },

  data() {
    /* Reativos: */
    return {};
  },
};
</script>

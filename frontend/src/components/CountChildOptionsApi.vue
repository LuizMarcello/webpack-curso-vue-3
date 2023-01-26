<template>
  <!-- O componente "AppEventosFilhoParaPaiOptionsApi.vue" é pai deste. -->
  <div>
    <!-- <button @click="add">Add from child</button> -->
    <!-- Ou assim: -->
    <!-- Direto aqui, nessa linha -->
    <button @click="$emit('addCounttt', 10)">Add from child</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      /* Evento "addCount" sendo enviado */
      /* Enviando tbém um valor padrão */
      this.$emit("addCounttt", 10);
    },
  },
};
</script>

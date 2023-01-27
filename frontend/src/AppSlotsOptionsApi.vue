<template>
  <button @click="openModal = true">Abrir Modal</button>

  <template v-if="openModal">
    <!-- Aqui, componente "Modal.vue" -->
    <Modal>
      <!--  <template v-slot:header> <h2>Header do modal</h2> </template> -->
      <!-- Ou usando somente o hash(#) -->
      <template #header> <h2>Header do modal</h2> </template>

      <template #default> Valor default do Modal </template>

      <!-- <template v-slot:footer> <h2>Footer do modal</h2> </template> -->
      <!-- Ou usando somente o hash(#) -->
      <template #footer> <h2>Footer do modal</h2> </template>
    </Modal>
  </template>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  components: { Modal },

  /* Reativos */
  data() {
    return {
      openModal: false,
    };
  },
};
</script>

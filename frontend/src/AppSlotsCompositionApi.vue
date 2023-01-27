<template>
  <button @click="openModal = true">Abrir Modal</button>
  <br />

  <template v-if="openModal">
    <!-- Aqui, componente "Modal.vue" -->
    <Modal>
      <!--  <template v-slot:header> <h2>Header do modal</h2> </template> -->
      <!-- Ou usando somente o hash(#) -->
      <template #header> <h2>Header do modal</h2> </template>

      <!-- Injetando no slot default -->
      <template #default>
        <form action="">
          <input type="text" name="" placeholder="Email" />
          <input type="text" name="" placeholder="Senha" />
          <button>Login</button>
        </form>
      </template>

      <!-- <template v-slot:footer> <h2>Footer do modal</h2> </template> -->
      <!-- Ou usando somente o hash(#) -->
      <template #footer> <h2>Footer do modal</h2> </template>
    </Modal>
  </template>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./components/Modal.vue";

components: {
  Modal;
}

/* Reativos */
const openModal = ref(false);
</script>

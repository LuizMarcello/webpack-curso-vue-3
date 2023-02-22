<template>
  <!-- NO COMPONENTE: -->
  <!-- Actions: Uma ação, mudam as propriedades reativas.
       Os métodos, as funções -->
  <!-- State: São as propriedades reativas-->
  <!-- View: São os templates-->

  <!-- NO VUEX: -->
  <!-- State: é o mesmo que propriedades reativas -->
  <!-- No vuex o state é a nivel da aplicação, em qualquer componente -->
  <!-- Dispatch é na Actions: Fazer alguma ação na propriedade reativa -->
  <!-- Fazer um commit na mutations: alterar o status da propriedade reativa-->
  <!-- Na mutations são alteradas as propriedades reativas -->

  <!-- No componente normal: "View": São os templates -->
  <button @click="increment">Add</button>
  {{ count }}
</template>

<script setup>
import { ref } from "vue";

/* No componente normal: "State": São as propriedades reativas */
const count = ref(0);

/* No componente normal: "Actions": Ação, Mudando as propriedades
                       reativas. Os métodos, as funções. 
                       Altera o "state" */
function increment() {
  count.value++;
}
</script>

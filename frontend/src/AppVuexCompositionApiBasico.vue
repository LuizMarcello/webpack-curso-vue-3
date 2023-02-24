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

  <br />

  <!-- Ou assim, chamando direto a "actions" do store: -->
  <button @click="store.dispatch('incrementt')">Add</button>

  <br />

  <!-- Ou assim, chamando direto a "mutations" do store -->
  <button @click="store.commit('incremenntt',10)">Add</button>

  <br />

  <Counter />

  <br />

  {{ store.state.count }}

  <br />

  <!-- Como o "getters" parece uma propriedade computada,
     também não precisa abrir/fechar parenteses para chamar,
     como se fosse uma propriedade, apesar que o "getters"
     é uma função. -->
  {{ store.getters.getCounter }}

  <router-view></router-view>
</template>

<script setup>
import { useStore } from "vuex";

/* Importando este componente */
import Counter from "./components/CounterCompositionApiBasico.vue";

/* Para usar no template */
const store = useStore();

function increment() {
  /* Dispatch: Para chamar a "actions" no store */
  store.dispatch("incrementt");
}
</script>

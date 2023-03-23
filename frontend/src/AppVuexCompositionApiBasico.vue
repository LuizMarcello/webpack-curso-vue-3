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

  <button @click="incrrement">Add</button>
  <button @click="decrrement">Diminui</button>

  <br />

  <!-- Ou assim, chamando direto a "actions" do store: -->
  <!-- <button @click="store.dispatch('incrementt')">Add</button>
 -->
  <br />

  <!-- Ou assim, chamando direto a "mutations" do store -->
  <!-- <button @click="store.commit('incremenntt', 10)">Add</button> -->

  <br />

  <Counter />

  <br />

  {{ count }}

  <br />
  
  <template v-if="data.length > 0">
    <button @click="hideUsers">Hide users</button>
    <ul>
      <li v-for="(user, index) in data" :key="index">{{ user.firstName }}</li>
    </ul>
  </template>
  <template v-else>
    <button @click="getUsers">Get users</button>
  </template>

  <!-- Como o "getters" parece uma propriedade computada,
     também não precisa abrir/fechar parenteses para chamar,
     como se fosse uma propriedade, apesar que o "getters"
     é uma função. -->
  <!-- {{ totalCount }} -->

  <router-view></router-view>
</template>

<script setup>
import { useStore } from "vuex";

import { computed } from "vue";

/* Importando este componente */
import Counter from "./components/CounterCompositionApiBasico.vue";

/* Para usar no template */
const store = useStore();

const count = computed(() => store.state.counteeer.count);

const totalCount = computed(() => store.getters["counteeer/getCounter"]);

//const incrrement = function () {
//return store.commit("counteeer/incremenntt");
//};

//const decrrement = function () {
//return store.commit("counteeer/decremenntt");
//};

/* Arrow function */
//const incrrement = () =>
/* Dispatch: Para chamar a "actions" no store */
//store.commit("counteeer/incremenntt");

/* Arrow function */
const incrrement = () =>
  /* Dispatch: Para chamar a "actions" no store */
  store.dispatch("counteeer/incrementt");

/* Arrow functions */
const decrrement = () =>
  /* Dispatch: Para chamar a "actions" no store */
  store.commit("counteeer/decremenntt");

const data = computed(() => store.state.usersss.data);

const getUsers = () => store.dispatch("usersss/getUsers");
const hideUsers = () => store.commit("usersss/setUsers", []);
</script>

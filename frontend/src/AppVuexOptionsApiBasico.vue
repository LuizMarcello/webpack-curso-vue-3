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
  <button @click="incrementt">Add</button>
  <br />
  <!-- Ou assim, chamando direto do store: -->
  <button @click="$store.commit('incremenntt')">Add Direto</button>
  <br />
  <button @click="$store.dispatch('incrementt')">Add Direto</button>

  <br />

  <Counter />

  {{ $store.state.count }}

  <hr />

  {{ $store.getters.getCounter }}

  <br />

  <router-view></router-view>
</template>

<script>
/* Importando este componente */
import Counter from "./components/CounterOptionsApiBasico.vue";

export default {
  /* Registrando os componentes importados */
  components: {
    Counter,
  },
  data() {},

  /* No componente normal: "Actions": Ação, Mudando as propriedades
                         reativas. Os métodos, as funções. 
                         Altera o "state" */
  methods: {
    incrementt() {
      /* Dispatch: Para chamar a "actions" no store */
      //this.$store.dispatch("incrementt");
      
      /* ou chamando direto a "mutations" no store: */
      this.$store.commit("incremenntt");
    },
  },
};
</script>

<template>
  <Counter />
  <br />
  <button @click="$store.commit('counteeer/incremenntt', 10)">
    Add Direto
  </button>
  <br />
  <!-- Mutations: -->
  <button @click="incremenntt(10)">Add Método</button>
  <br />
  <!--  {{ $store.state.counteeer.count }} -->
  <!-- {{ count }} -->
  {{ counttt }}
  <hr />
  {{ totalCount }}
  <br />

  <h2>Users</h2>

  <template v-if="dddata.length > 0">
    <button @click="hideUsers">hide users</button>

    <ul>
      <li v-for="(usser, index) in dddata" :key="index">
        {{ usser.firstName }}
      </li>
    </ul>
  </template>

  <template v-else>
    <button @click="getUsers">get users</button>
  </template>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Counter from "./components/CounterOptionsApiBasico.vue";
export default {
  components: {
    Counter,
  },

  /* Para pegar os "States" e "Getters" do store,
     através dos seus "mappers", usa-se as "computadas": */
     /* Quando não tiver uma "ação" */
  computed: {
    /* Operador ES6 "spread": */
    ...mapState({
      /* Chamando diretamente o "state": */
      counttt: (state) => state.counteeer.count,
      /* ou */
      /* Chamando diretamente o "count": */
      //counteeer: (state) => state.count,
      dddata: (state) => state.usersss.dataaa,
    }),

    ...mapGetters({
      totalCount: "counteeer/getCounter",
    }),
  },

  /* Para pegar os "Actions" e "Mutations" do store
     através dos seus "mappers", usa-se os "métodos": */
     /* Quando tiver uma "ação" */
  methods: {
    /* "..." Operador ES6 "spread": */
    ...mapActions("usersss", ["getUsers", "hideUsers"]),
    ...mapMutations("counteeer", ["incremenntt"]),
    /* increment() {
      this.$store.commit("counteeer/incremenntt", 10);
    }, */
  },
};
</script>

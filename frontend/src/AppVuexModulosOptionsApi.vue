<template>
  <Counter />
  <br />
  <button @click="$store.commit('counteeer/incremenntt', 10)">
    Add Direto
  </button>
  <br />
  <button @click="increment">Add Método</button>
  <br />
  {{ $store.state.counteeer.count }}
  <hr />
  <br />
  <h2>Users</h2>

  <template v-if="$store.state.usersss.dataaa.length > 0">

    <button @click="$store.dispatch('usersss/hideUsers')">hide users</button>

    <ul>
      <li v-for="(usser, index) in $store.state.usersss.dataaa" :key="index">
        {{ usser.firstName }}
      </li>
    </ul>
    
  </template>

  <template v-else>
    <button @click="$store.dispatch('usersss/getUsers')">get users</button>
  </template>
</template>

<script>
import Counter from "./components/CounterOptionsApiBasico.vue";
export default {
  components: {
    Counter,
  },
  methods: {
    increment() {
      this.$store.commit("counteeer/incremenntt", 10);
    },
  },
};
</script>

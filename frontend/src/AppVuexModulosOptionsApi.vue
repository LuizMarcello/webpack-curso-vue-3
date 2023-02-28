<template>
  <button @click="$store.commit('counteeer/incremenntt')">Add</button>
  <br>
  {{ $store.state.counteeer.count }}
  <hr />
</template>

<script>
export default {};
</script>

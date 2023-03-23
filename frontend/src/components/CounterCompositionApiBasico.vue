<template>
  {{ store.state.counteeer.count }}
</template>

<script setup>
/* Vuex */
import { useStore } from 'vuex';

/* Para usar no template */
const store = useStore();

</script>
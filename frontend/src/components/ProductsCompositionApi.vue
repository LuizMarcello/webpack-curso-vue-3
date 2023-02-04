<template>
  <ul>
    <slot v-for="(prrroduct, index) in producccts" :key="index" :ppproduct="prrroduct"></slot>
    <!-- <slot v-for="(prrroduct, index) in producccts" :key="index" :age="40"></slot> -->
  </ul>
</template>

<script setup>
defineProps(["producccts"]);
</script>

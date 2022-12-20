<template>
  <div>
    <h2>Abouttt</h2>
  </div>
</template>


<script setup>
/* Como "OptionsAPI" */
//export default {
  /* Aqui reatividade */
  //data() {
    //return {
      //interval: "",
    //};
  //},

  //mounted() {
    //this.interval = setInterval(() => {
      //console.log("mounted AboutView.vue");
    //}, 1000);
  //},

  //unmounted() {
    //clearInterval(this.interval);
  //},
//};

/* Como "CompositionAmigavelAPI" */
import { onMounted, onUnmounted } from "@vue/runtime-core";

onMounted (() => {
  console.log("mounted AboutView.vue");
});

onUnmounted(() => {
  console.log('unmounted AboutView.vue')
})
</script>

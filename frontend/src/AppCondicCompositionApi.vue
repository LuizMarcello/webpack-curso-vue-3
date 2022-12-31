<template>
  <img
    :src="imageSrc"
    alt=""
    class="my-default-class"
    :class="{ 'my-class': is_admin, 'my-other-class': !is_admin }"
  />
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

/* Reativos: */
const imageSrc = ref("https://picsum.photos/200/300");
const is_admin = ref(false);

onMounted(() => {});
</script>

<style scoped>
/* Tag <style>: A estilização do template */
.my-class {
  border: solid 3px red;
}

.my-other-class {
  border: solid 3px blue;
}
</style>

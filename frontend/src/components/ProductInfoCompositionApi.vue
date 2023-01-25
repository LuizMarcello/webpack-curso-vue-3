<template>
  <!-- Este componente é filho do componente "ProductsView.vue" -->
  Likes: {{ props.likes }} Comments: {{ props.comments }}
</template>

<script setup>
//defineProps(["likes", "comments"]);
//ou assim, como objeto, para colocar o(s) tipo(s):
const props = defineProps({
  likes: Number | String,
  comments: Number | String,
});
</script>

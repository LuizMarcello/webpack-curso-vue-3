<template>
  <!-- Este componente é filho do componente "ProductsView.vue" -->
  Likes: {{ likes }} Comments: {{ comments }}
</template>

<script>
export default {
  //Assim, como um array:
  // props: ["likes", "comments"],

  //ou assim, como um objeto, para colocar o(s) tipo(s):
  props: {
    likes: Number|String,
    comments: Number|String,
  },
};
</script>

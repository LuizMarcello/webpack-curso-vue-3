<template>
  <!-- o "template ref" trabalha pegando os elementos do html -->
  <Nav />

  <router-view></router-view>

  <ul>
    <li v-for="(item, index) in items" :key="index" ref="item">{{ item.name }}</li>
  </ul>

  <img src="https://picsum.photos/200/300" alt="" id="img" ref="img" />
</template>

<script>
export default {
  data() {
    return {
      /* Reativos */
      count: 0,
      /* Um array de objetos */
      items: [
        {
          name: "teste1",
        },
        {
          name: "teste2",
        },
      ],
    };
  },
  mounted() {
    /* Capturando um elemento no html acima */
    //console.log(document.querySelector("#img")["src"]);
    //console.log(document.querySelectorAll("#img"));
    //console.log(this.$refs.item);
    //console.log(this.$refs.img['src']);
    console.log(this.$refs.item);
  },
};
</script>

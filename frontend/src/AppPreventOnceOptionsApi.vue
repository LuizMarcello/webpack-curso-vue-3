<template>
  <form action="http://google.com.br" @submit.prevent="search">
    <input type="text" placeholder="Buscar" />
    <button type="submit">Buscar</button>
  </form>
  <!-- ou assim -->
  <form action="http://google.com.br">
    <input type="text" placeholder="Buscar" />
    <button @click.submit.prevent="search">Buscar</button>
  </form>

  <a href="http://google.com.br" @click.prevent="search">Ir para o Google</a>
  <a href="http://google.com.br" @click.prevent.once="search">Ir para o Google</a>

  {{ age }}
  <button @click.once="age++">Alterando o age</button>

  <input type="text" placeholder="Digite algo aqui" @keyup.enter="keyModifier" />
</template>

<script>
export default {
  data() {
    /* Reativos */
    return {
      age: 40,
    };
  },

  methods: {
    search(event) {
      console.log("buscou");
    },

    keyModifier() {
      console.log("Pressionou a tecla enter");
    },
  },
};
</script>

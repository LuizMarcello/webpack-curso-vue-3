<template>
  <!--Aqui estão sendo montados todos os componentes-->
  <!--Aqui estão sendo montados todos os componentes-->
  <!--Aqui estão sendo montados todos os componentes-->

  <header>
    <!--  <img
      class="logo"
      src="./assets/logo.png"
      alt="Vue Logo"
      width="125"
      height="125"
    /> -->

    <!-- Aqui estão os "links" do roteamento -->
    <div class="wrapper">
      <HelloWord msg="You did it!" />
      <nav>
        <Router-link to="/">Home</Router-link>
        <br />
        <Router-link to="/products">Products</Router-link>
        <br />
        <Router-link to="/about">About</Router-link>
      </nav>
    </div>
  </header>

  <!-- Todas as "rotas" para todos os componentes
       do "router" serão carregadas aqui -->
  <!-- <RouterView /> -->
  <!-- ou -->
  <router-view></router-view>
</template>

<script>
import Header from "../src/components/Header.vue";

export default {
  /* Registrando este componente importado acima */
  components: { Header },

  data() {
    /* Aqui vão as propriedades reativas no options.api */
    return {
      count: 0,
      showHeader: false,
    };
  },
  mounted() {
    console.log("mounted");
  },
  /* Somente quando uma propriedade é alterada no componente */
  updated() {
    console.log("updated");
  },
};
</script>

<style scoped>
@import './assets/app.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 1);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

av a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1 px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(var(--section-gap) / 2));
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

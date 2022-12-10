<template>
  <!--Aqui estão sendo montados todos os componentes-->
  <div>
    <Header />
    <Sidebar />
    <!-- Todas as "rotas" serão carregadas aqui -->
    <RouterView />
  </div>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { RouterView } from "vue-router";

export default {
  components: {
    Header,
    Sidebar,
    RouterView
    
  },
};
</script>
<template>
  <!-- Este componente "App.vue", é a página principal do site, 
       é onde todos os componentes vão ser carregados -->
    <div>
    <!--Aqui estão sendo montados estes componentes-->
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
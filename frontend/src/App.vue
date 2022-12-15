<template>
  <!-- Tag <template>: O que é mostrado para o usuário -->
  <Header />

  <!-- <button v-on:click="count++">Add {{ count }}</button> -->
  <!-- ou -->
  <button v-on:click="add()">Add {{ count }}</button>

  <h2>App (options api)</h2>

  <Footer />
</template>

<!-- <script> -->
<!-- ou com composition api mais amigável: -->
<script setup>
/* Tag <script>: O "comportamento" do componente */

/* Pode ser de duas maneiras: */
/* Trabalhando com "OPTIONS API": Versões 2 e 3 do vuejs */
//import Header from "./components/Header.vue";
//import Footer from "./components/Footer.vue";

//export default {
/* Aqui são registrados os componentes,
     porque serão utilizados. */
//components: { Header, Footer },

/* data(): Para trabalhar com a "reatividade" */
//data() {
//return {
/* Colocar aqui o que é "reativo" */
//count: 0,
//};
//},
//methods: {
//add() {
//this.count++;
//},
//},
//};

/* Trabalhando com "COMPOSITION API": Versão 3 do vuejs */
//import Header from "./components/Header.vue";
//import Footer from "./components/Footer.vue";
//import { ref } from "vue";

//export default {
/* Aqui são registrados os componentes,
     porque serão utilizados. */
//components: { Header, Footer },

/* composition api necessita do setup() */
//setup() {
/* Reatividade no composition api: */
/* 2 maneiras:
       Com o reactive (para objetos)
       Com o ref() Dados mais primitivos(numeros,etc...)*/
/* Colocar aqui o que é "reativo" */
//const count = ref(0);

//function add() {
/* Quando se usa reatividade com ref(),
         tem que colocar este "value". */
//count.value++;
//}

/* Return para aparecer(poderem ser utilizados)
       no template */
//return {
//count,
//add
//};
//},
//};

/* Um resuminho: */
/* Options api: Fica meio ingessado */

/* Composition api: Tudo que precisa ser utilizado dentro
   do setup(), importa diretamente do "vue"
   É mais desaclopado */

/* Também com "COMPOSITION API": Versão 3 do vuejs */
/* Outra maneira mais "amigável": */
/* Não precisa registrar os componentes */
/* Não precisa usar o return */
/* Abrindo o <script> com "setup", tudo que for
   criado dentro deste <script>, já terá acesso no template. */
import { ref } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const count = ref(0);

function add() {
  count.value++;
}
</script>

<style>
/* Tag <style>: A estilização do template */
</style>

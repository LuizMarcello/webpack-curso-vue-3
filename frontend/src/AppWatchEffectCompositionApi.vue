<template>
  <span ref="span">Conteudo do span</span>

  <input type="text" v-model="firstName" placeholder="FirstName" />
  <!-- <input type="text" v-model="lastName" placeholder="LastName" /> -->

 <!--  <input type="text" v-model="user.firstName" placeholder="LastName" /> -->
 <!--  <input type="text" v-model="user.lastName" placeholder="LastName" /> -->

  <ul v-for="item in items" :key="item.id">
    <li>{{ item.name }} <input type="text" v-model="item.name" /></li>
  </ul>
</template>

<script setup>
import { ref, watch, reactive, computed, onMounted, watchEffect } from "vue";

/* Propriedades: */
const firstName = ref("LuizzzMarcellooo");
const lastName = ref("");

const span = ref(null);

/* Um objeto simples: */
const user = reactive({
  firstName: "",
  lastName: "",
});

/* Um array de objetos: */
const items = reactive([
  {
    id: 1,
    name: "Luiz",
  },
  {
    id: 2,
    name: "Marcello",
  },
]);

onMounted(() => {
  //console.log("Mounted");
  console.log(span.value.textContent);
});

/* watch: Só é carregado quando uma propriedade que
   ele estiver observando sofrer alguma alteração
   Usar este quando quiser ter um controle sobre qual
   ou quais propriedades reativas quer observar. */
//watch([firstName, lastName], ([valueFirstName, valueLastName], oldValue) => {
//watch(firstName, (value, oldValue) => {
//console.log(valueFirstName, valueLastName);
//console.log("observando watch");
//console.log(value, oldValue);
//});

/* Observando um objeto simples */
watch(
  () => user.firstName,
  (value, oldValue) => {
    console.log(value, oldValue);
  }
);

/* watchEffect: Não observa somente uma propriedade
   reativa em específico. Ele observa tudo.
   Ele é carregado antes do componente ser montado */
watchEffect(() => {
  //items.forEach((item) => {
  //console.log(item.name);
  //console.log(user.firstName, user.lastName);
  //console.log("observando watch effect");
  //console.log(span.value.textContent);
  console.log(firstName.value)
});
//});
</script>

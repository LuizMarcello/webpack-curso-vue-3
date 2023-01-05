<template>
  <!-- <input type="text" v-model="firstName" placeholder="Firstname" /> -->
  <!-- <input type="text" v-model="lastName" placeholder="Lastname" /> -->

  <input type="text" v-model="user.firstName" placeholder="Firstname" />
  <input type="text" v-model="user.lastName" placeholder="Lastname" />

  <hr />

  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
      <input type="text" v-model="item.name" />
    </li>
  </ul>
</template>

<script setup>
import { ref, watch, reactive } from "vue";

/* Reativos */
/* Propriedades */
const firstName = ref("");
const lastName = ref("");

/* Um objeto simples */
const user = reactive({ firstName: "", lastName: "" });

/* Um array de objetos */
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

/* "Watch" ouvindo "propriedades": */
/* Para usar somente um "watch", usa arrays "[]" */
/* Arrow function(de callBack) */
watch(
  [firstName, lastName],
  ([valueFirstName, valueLastName], [oldValueFirstName, oldValueLastName]) => {
    console.log("new =>" + valueFirstName, "old =>" + oldValueFirstName);
    console.log("new =>" + valueLastName, "old =>" + oldValueLastName);
  }
);

/* Arrow function(de callBack) */
//watch(firstName, (value, oldValue) => {
//console.log('new =>' + value, 'old =>' + oldValue);
//});

/* Arrow function(de callBack) */
//watch(lastName, (value, oldValue) => {
//console.log('new =>' + value, 'old =>' + oldValue);
//});

/* "Watch" ouvindo objeto simples */
/* Arrow function(de callBack) */
//watch(
//() => user.firstName,
//(value, oldValue) => {
//console.log(value, oldValue);
//}
//);

/* "Watch" ouvindo objeto simples */
/* Arrow function(de callBack) */
//watch(
//() => user.lastName,
//(value, oldValue) => {
//console.log(value, oldValue);
//}
//);

/* "Watch" ouvindo objeto simples */
/* Arrow function(de callBack) */
/* Usando somente um "watch"  */
/* Escutando agora o "objeto simples" por inteiro("user") */
//watch(user, (value) => {
//console.log("new =>" + value, "old =>" + oldValue);
//console.log(value.firstName);
//console.log(value.lastName);
//});

/* Quando acessa um objeto por inteiro, ou um array de objetos,
   não tem acesso ao "oldvalue"(valor anterior) */
/* "Watch" ouvindo o array de objeto*/
/* Arrow function(de callBack) */
/* Usando somente um "watch"  */
/* Escutando agora o "array de objetos" por inteiro("items") */
watch(items, (value) => {
  //console.log(value);
  value.forEach((item) => {
    if (!Number.isInteger(Number(item)))
      console.log("not a number " + item.name);
  });
});
</script>

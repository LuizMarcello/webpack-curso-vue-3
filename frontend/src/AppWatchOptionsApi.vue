<template>
  <!-- Neste input, para ligar o valor digitado a uma propriedade reativa
       (no caso, userName), usa a diretiva "v-model" -->
  <!--  <input type="text" v-model="firstName" placeholder="FirsName" /> -->
  <!-- <input type="text" v-model="lastName" placeholder="LastName" /> -->
  <input type="text" v-model="user.address.street" placeholder="address" />
  <input type="text" v-model="user.firstName" placeholder="FirsName" />
  <input type="text" v-model="user.lastName" placeholder="LastName" />

  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item.name }}
      <input type="text" v-model="item.name" />
      <input type="text" v-model="item.price" />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      /* Dentro do data(){return{}} coloca tudo que é "reativo" */
      /* Propriedades: */
      firstName: "",
      lastName: "",
      /* Um objeto simples: */
      user: {
        firstName: "",
        lastName: "",
        address: {
          street: "",
        },
      },
      /* Um array de objetos: */
      items: [
        {
          id: 1,
          name: "luiz",
          price: 10,
        },
        {
          id: 2,
          name: "marcello",
          price: 100,
        },
      ],
    };
  },

  mounted() {
    console.log("mounted");
  },

  /* O "watch" só é executado quando houver alguma
     alteração nas propriedades reativas. */
  watch: {
    /* Watch ouvindo estas propriedades */
    firstName(value, oldValue) {
      console.log("new =>" + value, "old =>" + oldValue);
    },

    lastName(value, oldValue) {
      console.log("new =>" + value, "old =>" + oldValue);
    },

    /* Watch ouvindo estes objetos simples */
    "user.firstName": function (value, oldValue) {
      console.log("new =>" + value, "old =>" + oldValue);
    },

    "user.lastName": function (value, oldValue) {
      console.log("new =>" + value, "old =>" + oldValue);
    },

    "user.address.street": function (value, oldValue) {
      console.log("new =>" + value, "old =>" + oldValue);
    },

    /* Watch ouvindo o array de objetos: */
    items: {
      handler(itemsObject, oldValue) {
        //itemsObject.forEach((element) => {
        /* Para o imput só aceitar números */
        //if (!Number.isInteger(Number(element.price))) {
        //console.log("não é um integer " + element.price);
        //}
        //});
        console.log("Carregou");
      },

      /* Para o "watch" verificar todos os objetos dentro do array */
      deep: true,

      /* Para o "watch" também ser executado assim que o componente for montado */
      immediate: true,
    },
  },
};
</script>

<template>
  <h2>Admin</h2>

  <!--  {{ user.firstName }} {{ user.lastName }} -->
  <!-- Aqui no template, para chamar uma função: {{ fullName() }}  -->
  <!-- Aqui no template, para chamar uma propriedade: {{ fullName }}
       mesmo que tenha sido criada abaixo como uma função.  -->
  <!--  {{ fullName }} -->

  <ul>
    <template v-for="(user, index) in users" :key="index"
      ><li v-if="user.is_admin">{{ user.firstName }}</li>
    </template>
  </ul>

  <h2>Not Admin</h2>
  <ul>
    <li v-for="(user, index) in usersIsNotAdmin" :key="index">{{ user.firstName }}</li>
  </ul>

  <!-- Executando esta "função"(abre e fecha os parênteses) -->
  {{ functionCount() }}
  <button @click="countFunction++">Add function</button>

  <br />

  <!-- Chamando esta "propriedade computada" -->
  {{ computedCount }}
  <button @click="countComputed++">Add computed</button>
</template>

<script>
export default {
  data() {
    return {
      /* Propriedades reativas */
      countComputed: 0,
      countFunction: 0,

      /* Propriedade reativa */
      /* Um objeto simples */
      user: {
        firstName: "Luiz",
        lastName: "Marcello",
      },

      /* Propriedade reativa */
      /* Um array de objetos */
      users: [
        {
          firstName: "Luiz",
          is_admin: 1,
        },
        {
          firstName: "Gabriel",
          is_admin: 0,
        },
        {
          firstName: "Valeria",
          is_admin: 1,
        },
        {
          firstName: "LuizHenrique",
          is_admin: 0,
        },
      ],
    };
  },

  /* "Propriedades computadas":
   Em portugues ficou "dados computados".
Uma "propriedade computada" trabalha em cima de uma "propriedade
reativa", e é chamada no "template". Elas são "cacheadas". Se a propriedade
reativa a qual ela se baseia não for alterada, ela não vai ser executada, 
não vai ler a mesma de novo, vai usar o que está no seu cache.
 São para coisas mais simples.
Já as funções não trabalham com cache, são "sempre" executadas.
No "optionsApi", as "propriedades reativas" são criadas no
"data()", por isso que a tradução ficou "dados computados". */
  computed: {
    fullName() {
      return this.user.firstName + " " + this.user.lastName;
    },

    usersIsNotAdmin() {
      return this.users.filter((user) => user.is_admin === 0);
    },

    computedCount() {
      console.log("called computed");
      return this.countComputed;
    },
  },

  /* Métodos */
  methods: {
    functionCount() {
      console.log("called function");
      return this.countFunction;
    },
  },
};
</script>

<style scoped></style>

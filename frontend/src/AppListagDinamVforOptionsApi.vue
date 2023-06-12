<template>
  <div v-if="showName">Mostrar o nome</div>

  <!-- Dois pontos para valor dinâmico -->
  <div :class="testtte">Teste</div>

  <img :src="image" alt="">
  <ul>
    <!-- Para usar as diretivas "v-for" e "v-if" -->
    <!-- O "v-for"(loop) vai no <template> e "v-if"(verificação) no <li> -->
    <!-- No vueJs, quando se coloca o v-for no template, o template é omitido -->
    <!-- Os dois pontos antes do "key", é porque são valores dinâmicos -->
    <template v-for="(user, key) in users" :key="user.id">
      <!-- <li v-for="user in users" :key="user.id">{{ user.firstName }}</li> -->
      <li v-if="user.is_admin === 1">{{ key }} - {{ user.firstName }}</li>
      <!-- <li v-for="(propriedades, key) in user">{{ key }} - {{ propriedades }}</li> -->
    </template>
  </ul>
</template>

<script>
export default {
  /* Reatividade */
  data() {
    return {
      testtte: "class",
      image: "https://picsum.photos/200/300",
      showName: false,
      /* Um objeto simples */
      user: { name: "Luiz Marcello", age: 62 },
      /* Um array de objetos */
      users: [
        {
          id: 1,
          firstName: "Luiz",
          age: 62,
          is_admin: 1
        },
        {
          id: 2,
          firstName: "Gabriel",
          age: 11,
          is_admin: 0
        },
        {
          id: 3,
          firstName: "Valeria",
          age: 42,
          is_admin: 0
        },
        {
          id: 4,
          firstName: "Luiz Henrique",
          age: 26,
          is_admin: 1
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

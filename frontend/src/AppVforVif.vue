<template>
  <!-- No vuejs, quando se usa a tag <template>, no html ela
       some, como se o conteúdo fosse colocado diretamente. Muito bom -->
  <template v-if="showName">Mostrar o nome</template>

  <!-- Os dois pontos antes (:), é porque estou passando um valor dinâmico -->
  <div :class="teste">Teste</div>

  <img :src="image" alt="">

  <ul>
    <!-- eslint-disable -->
    <!-- <li v-for="(user, key) in users">{{ key }} - {{ user.firstName }}</li> -->
    <!-- <li v-for="(data, key) in user">{{ key }} - {{ data }}</li> -->

    <!-- Neste caso, o loop(v-for) vai no <template> -->
    <!-- A condicional(v-if) vai no <li> -->
    <!-- O ":key" tem que ser único, e com valor primitivo,
           (número, string). Não pode ser objeto. Os dois pontos
           antes (:), é porque estou passando um valor dinâmico -->
    <template v-for="(user, key) in users" :key="user.id">
      <li v-if="user.is_admin === 1">{{ key }} - {{ user.firstName }}</li>
    </template>
  </ul>
</template>

<script>
/* OptionsApi: */
/* Export default: Para ser usado no template deste componente */
export default {
  data() {
    return {
      /* Dentro do data(){return{}} coloca tudo que é "reativo" */
      teste: "classeee",
      image: 'https://picsum.photos/200/300',
      showName: true,
      /* Um objeto simples(sem array) */
      user: { name: "LuizzMarcelloo", age: 61 },

      /* Um objeto composto(um array) */
      users: [
        {
          id: 1,
          firstName: "LuizMarcello",
          age: 61,
          is_admin: 1,
        },
        {
          id: 2,
          firstName: "Valeria",
          age: 41,
          is_admin: 0,
        },
        {
          id: 3,
          firstName: "Gabriel",
          age: 10,
          is_admin: 0,
        },
        {
          id: 4,
          firstName: "Pedro",
          age: 20,
          is_admin: 1,
        },
      ],
    };
  },
};
</script>

<style>
/* Tag <style>: A estilização do template */
</style>

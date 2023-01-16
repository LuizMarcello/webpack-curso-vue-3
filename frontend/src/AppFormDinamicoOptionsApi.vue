<template>
  <input type="text" name="" v-model="userName" />

  <!-- Quando se faz um "v-for" no template,
       ele não é renderizado -->
  <template v-for="user in users" :key="user.id">
    <input
      type="checkbox"
      name=""
      @click="userName = user.firstName"
      :checked="userName == user.firstName"
    />{{ user.firstName }}
  </template>

  <!-- Conforme o que for selecionado no "option", será repassado para
     o "v-model" do "select", para seguir em frente -->
  <select name="" id="" v-model="userName">
    <option :value="user.firstName" v-for="user in users" :key="user.id">
      {{ user.firstName }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    /* Reativos */
    return {
      userName: "Luiz",
      /* Um array de objetos */
      users: [
        {
          id: 1,
          firstName: "Luiz",
        },
        {
          id: 2,
          firstName: "Valeria",
        },
        {
          id: 3,
          firstName: "Gabriel",
        },
      ],
    };
  },
};
</script>

<style scoped></style>

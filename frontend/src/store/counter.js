export default {
  namespaced: true,
  /* Criando aqui toda estrutura do "vuex": */

  /* Propriedades reativas */
  state: {
    count: 0,
  },

  /* Nas mutations são alteradas a propriedade reativa "state" */
  /* É usado o "commit" para chamar a "mutations"  */
  mutations: {
    incremenntt(state, payload) {
      state.count += payload;
      /* state.count++; */
    },
  },

  /* Ação, métodos, funções. */
  /* Quando for fazer uma requisição para o backend,
     é sempre feito na "actions" */
  /* É usado o "dispatch" para chamar o "actions" */
  actions: {
    incrementt(state, payload) {
      /* commit: Para chamar a mutations */
      /* Aqui, está chamando a "mutations" acima,
         para alterar o valor do "state" acima */
      state.commit("incremenntt");
    },
  },

  /* "getters" é parecido com as "propriedades computadas": */
  getters: {
    getCounter(state) {
      return "O total do count " + state.count;
    },
  },
};

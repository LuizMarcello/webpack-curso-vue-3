export default {
  namespaced: true,
  /* Criando aqui toda estrutura do "vuex": */

  /* Propriedades reativas */
  state: {
    count: 0

  },

  mutations: {
    /* Aqui alterando a propriedade reativa "state" */
    incremenntt(state, payload) {
      /* state.count+=payload; */
      state.count++;
    }
  },

  actions: {
    incrementt(state, payload) {
      /* commit: Para chamar a mutations */
      /* Aqui, está chamando a "mutations" acima,
         para alterar o valor do "state" acima */
      state.commit('incremenntt');
    },
  },

  /* "getters" é parecido com as "propriedades computadas": */
  getters: {
    getCounter(state) {
      return 'O total do count ' + state.count;
    }
  }
}
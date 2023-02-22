import {
  createStore
} from "vuex";

const store = createStore({
  /* Criando aqui toda estrutura do "vuex": */

  /* Propriedades reativas */
  state: {
    count: 0,

  },

  mutations: {
    /* Aqui alterando a propriedade reativa */
    incremenntt(state, payload) {
      state.count++;
    }
  },

  actions: {
    incrementt(state, payload) {
      /* Aqui, está chamando a "mutations" acima,
         para alterar o valor do "state" acima */
      state.commit('incremenntt');
    },
  },

  /* Este é parecido com as "propriedades computadas": */
  getters: {
    getCounter(state) {
      return 'Total count ' + state.count;
    }
  }
})

export default store;
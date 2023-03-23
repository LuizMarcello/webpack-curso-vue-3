import http from '../services/http'
export default {
  namespaced: true,
  /* Criando aqui toda estrutura do "vuex": */

  /* "state": Propriedades reativas */
  state: {
    data: []
  },

  /* Ação, métodos, funções. */
  /* Quando for fazer uma requisição para o backend,
     é sempre feito na "actions" */
  /* É usado o "dispatch" para chamar o "actions" */
  actions: {
    async getUsers(state, payload) {
      try {
        const {
          data
        } = await http.get('/api/users');
        state.commit('setUsers', data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  /* Nas mutations são alteradas a propriedade reativa "state" */
  /* É usado o "commit" para chamar a "mutations"  */
  mutations: {
    setUsers(state, payload) {
      state.data = payload
    }
  },

  /* "getters" é parecido com as "propriedades computadas": */
  getters: {

  },
};
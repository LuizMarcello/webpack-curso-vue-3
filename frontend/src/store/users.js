import http from "../services/http";

export default {
  namespaced: true,
  /* Criando aqui toda estrutura do "vuex": */

  /* "state": Propriedades reativas */
  state: {
    dataaa: [],
  },

  /* Nas mutations são alteradas a propriedade reativa "state" */
  /* É usado o "commit" para chamar a "mutations"  */
  mutations: {
    setUsers(state, payload) {
      state.dataaa = payload;
    },
  },

  /* Ação, métodos, funções. */
  /* Quando for fazer uma requisição para o backend,
     é sempre feito na "actions" */
  /* É usado o "dispatch" para chamar o "actions" */
  actions: {
    async getUsers(state) {
      try {
        /* O "axios" sempre retorna "data" */
        const { data } = await http.get("/api/users");
        /* Chamando a "mutations" acima */
        state.commit("setUsers", data);
      } catch (error) {
        console.log(error.response);
      }
    },

    hideUsers(state) {
      state.commit("setUsers", []);
    },
  },

  /* "getters" é parecido com as "propriedades computadas": */
  getters: {},
};

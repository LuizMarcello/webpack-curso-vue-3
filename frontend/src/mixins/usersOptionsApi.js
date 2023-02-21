import http from '../services/http';
/* Como este arquivo vai ser importado para os componentes,
   tem que ser exportado aqui */
export default {
  data() {
    /* Reatividades */
    return {
      /* Um objeto simples */
      usersData: []
    };
  },

  async mounted() {
    console.log('chamou de dentro do mounted do mixin users');
    this.usersData = await this.getUsers();
  },

  /* Propriedades computadas */
  computed: {
    getTotalUsers() {
      return this.usersData.length
    }
  },

  methods: {
    async getUsers() {
      try {
        /* Usando desestruturação */
        const {
          data
        } = await http.get('/api/users');
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  },
}
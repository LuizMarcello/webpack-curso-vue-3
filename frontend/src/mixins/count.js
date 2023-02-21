/* Como este arquivo vai ser importado para os componentes,
   tem que ser exportado aqui */
export default {
  data() {
    /* Reatividades */
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
  },
}
<template>
  <Currency
    type="text"
    v-model="dolarr"
    placeholder="Dolar"
    :options="{ currency: 'USD' }"
  />

  <hr />

  <ul>
    <li>{{ dolarTodayValue }}</li>
    <li>{{ dolarToReaisValue }}</li>
  </ul>
</template>

<script>
import format from "../src/services/format";
import http from "../src/services/http";
import Currency from "../src/components/Currency.vue";

export default {
  /* Registrando este componente */
  components: {
    Currency,
  },

  data() {
    return {
      /* Propriedades reativas */
      dolarr: 0,
      dolarToday: 0,
      dolarToReais: 0,
    };
  },

  async mounted() {
    try {
      const dolarToday = await this.getDolar();
      this.dolarToday = dolarToday["high"];
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async getDolar(type = "USD-BRL") {
      const { data } = await http.get(
        `https://economia.awesomeapi.com.br/json/last/` + type
      );
      const typeCurrency = type.split("-").join("");
      return data[typeCurrency];
    },
  },

  /* "Propriedades computadas" também observam "propriedades
     reativas", mas para serem usadas no <template> */
  /* Propriedade computada */
  computed: {
    dolarToReaisValue() {
      return `O valor em reais de ${format(this.dolarr, "en-US", "USD")} é de: ${format(
        this.dolarToReais,
        "pt-BR",
        "BRL"
      )}`;
    },

    dolarTodayValue() {
      return `O dólar hoje está em: ${format(this.dolarToday, "en-US", "USD")}`;
    },
  },

  /* Diferente das "propriedades comnputadas", o "watch" também observa
     as "propriedades reativas", mas também podem fazer requisições para
     o backend(ou API). É para coisas mais complexas. */
  watch: {
    dolarr(value) {
      //console.log(value * this.dolarToday);
      this.dolarToReais = value * this.dolarToday;
    },
  },
};
</script>

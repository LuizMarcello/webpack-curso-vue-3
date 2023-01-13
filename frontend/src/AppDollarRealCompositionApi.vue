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

<script setup>
import { ref, watch, reactive, computed, onMounted } from "vue";

import format from "../src/services/format";
import http from "../src/services/http";
import Currency from "../src/components/CurrencyCompositionApi.vue";

/* Propriedades reativas */
const dolarr = ref(0);
const dolarToday = ref(0);
const dolarToReal = ref(0);

/* "Propriedades computadas" também observam "propriedades
    reativas", mas para coisas mais simples, para serem
    usadas no <template> */
/* Propriedade computada */
const dolarToReaisValue = computed(() => {
  /* (``): Isto é uma template string */
  return `O valor em reais de ${format(
    dolarr.value,
    "en-US",
    "USD"
  )} é ${format(dolarToReal.value, "pt-BR", "BRL")}`;
});

const dolarTodayValue = computed(() => {
  /* (``): Isto é uma template string */
  return `O dólar hoje está em: ${format(dolarToday.value, "en-US", "USD")}`;
});

onMounted(async () => {
  try {
    const dolar = await getDolar();
    dolarToday.value = dolar["high"];
  } catch (error) {
    console.log(error);
  }
  getDolar();
});

/* Requisição para esta API do dólar */
/* Uma função assíncrona */
async function getDolar(typeCurrency = "USD-BRL") {
  const { data } = await http.get(
    /* (``): Isto é uma template string */
    `https://economia.awesomeapi.com.br/json/last/` + typeCurrency
  );
  const currency = typeCurrency.split("-").join("");
  return data[currency];
}

/* Diferente das "propriedades comnputadas", o "watch" também observa
   as "propriedades reativas", mas também podem fazer requisições para
   o backend(ou API). É para coisas mais complexas. */
watch(dolarr, (value) => {
  //console.log(value, Number(dolarToday.value));
  dolarToReal.value = value * Number(dolarToday.value);
  //console.log(dolarToReal.value);
});
</script>

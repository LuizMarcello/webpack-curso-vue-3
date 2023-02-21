/* Usando a desestruturação */
import {
  ref
} from "vue";

export function useCount() {
  /* Reatividade */
  const count = ref(0);

  function increment() {
    count.value++;
  }

   /* Retornando só o que vai ser usado no componente */
  return {
    count,
    increment
  };
}
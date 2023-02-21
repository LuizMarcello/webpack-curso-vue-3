import http from '../services/http';

/* Usando a desestruturação */
import {
  ref,
  reactive,
  onMounted
} from "vue";

/* Como este arquivo vai ser importado nos componentes,
   tem que ser exportado aqui */
export function useUsers() {

  /* Reativos */
  /* Um array de objetos */
  const userrs = reactive({
    'ussers': []
  })

  /* axios: acessando o bd(backend) */
  async function getUsers() {
    try {
      const {
        data
      } = await http.get('/api/users');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(async () => {
    //console.log("onMounted no composable");
    userrs['ussers'] = await getUsers();
  })

  /* Retornando só o que vai ser usado no componente */
  return {
    userrs
  };
}
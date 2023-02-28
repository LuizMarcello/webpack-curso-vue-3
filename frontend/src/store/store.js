import { createStore } from "vuex";

import counteeer from "./counter";
import usersss from "./users";

const store = createStore({
  /* "Modules" na verdade, são os outros "stores" */
  modules: {
    /* No javascript, quando o o nome do índice
       é o mesmo que o nome do valor, escreve-se
       somente uma vêz. */
    counteeer,
    usersss,
  },
});

export default store;

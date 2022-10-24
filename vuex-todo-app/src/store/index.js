import { createStore } from "vuex";

import todos from "./modules/todos";

//Create Store
export default createStore({
  modules: {
    todos,
  },
});

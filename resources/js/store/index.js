import { createStore } from "vuex";

import auth from "./auth";
import recordings from "./recordings";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    recordings,
  },
});
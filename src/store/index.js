import { createStore } from "vuex";
import { setStore, getStore, removeStore } from "@/utils/storage";

export default createStore({
  state: {
    token: "",
    name: "",
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      setStore("token", token);
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },

    CLEAR: (state, token) => {
      state.token = "";
      state.name = "";
      removeStore("token");
    },
  },
  getters: {},
  actions: {},
  modules: {},
});

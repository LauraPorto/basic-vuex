import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    contador: 0,
    nombre: "Laura",
    edad: 27,
  },
  mutations: {
    sumar(state) {
      state.contador++;
    },
    restar(state) {
      state.contador--;
    },
  },
});

store.commit("sumar");
store.commit("restar");

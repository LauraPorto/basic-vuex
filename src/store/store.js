import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    contador: 0,
    nombre: "Laura",
    edad: 27,
    peliculas: [
      { titulo: "Pulp Fiction", año: 1994, active: false },
      { titulo: "La quimera del oro", año: 1925, active: false },
      { titulo: "Miedo y asco en Las Vegas", año: 1998, active: false },
      { titulo: "Blade Runner", año: 1982, active: false },
    ],
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

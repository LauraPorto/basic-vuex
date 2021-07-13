import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    contador: 0,
    nombre: "Laura",
    edad: 27,
    peliculas: [
      { titulo: "Pulp Fiction", año: 1994, active: true },
      { titulo: "La quimera del oro", año: 1925, active: true },
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
  getters: {
    listadodeactivos: (state) => {
      return state.peliculas.filter((pelicula) => pelicula.active).length;
    },
  },
});

store.commit("sumar");
store.commit("restar");

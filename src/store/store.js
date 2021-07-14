import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    contador: 0,
    nombre: "Laura",
    edad: 27,
    user: null,
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
    async getUser(state) {
      const random = Math.floor(Math.random() * (10 - 1) + 1);
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character/${random}`
      );
      this.user = result.data;
      console.log(this.user, "resultado llamada axios");
      console.log(this.user.id, "esto es el state");
      return state.user;
    },
  },
  actions: {
    getCharacter(context) {
      context.commit("getUser");
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

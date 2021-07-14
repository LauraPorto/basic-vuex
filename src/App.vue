<template>
  <div id="app">
    <Usuarios></Usuarios>
    <p>Titulo : {{ titulo }}</p>
    <p>Id de cliente : {{ id }}</p>
    <Contador></Contador>
    <h1>Estas son tus películas :</h1>
    <Peliculas></Peliculas>
    <Listado></Listado>
  </div>
</template>

<script>
import Contador from "./components/Contador";
import Peliculas from "./components/Peliculas";
import Listado from "./components/Listado";
import Usuarios from "./components/Usuarios";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Contador,
    Peliculas,
    Listado,
    Usuarios,
  },
  computed: mapState({
    titulo: (state) => state.titulo,
    id: (state) => state.id,
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

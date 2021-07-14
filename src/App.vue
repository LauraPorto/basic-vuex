<template>
  <div id="app">
    <Usuarios></Usuarios>
    <p>Nombre : {{ nombre }}</p>
    <p>Edad : {{ edad }}</p>
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
    nombre: (state) => state.nombre,
    edad: (state) => state.edad,
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

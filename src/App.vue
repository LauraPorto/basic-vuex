<template>
  <div id="app">
    <p>Tu nombre es : {{ nombre }}</p>
    <p>Tu edad es : {{ edad }}</p>
    <Contador></Contador>
    <h1>Estas son tus películas :</h1>
    <Peliculas></Peliculas>
  </div>
</template>

<script>
import Contador from "./components/Contador";
import Peliculas from "./components/Peliculas";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Contador,
    Peliculas,
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

<template>
  <div id="app">
    <p>Tu nombre es : {{ nombre }}</p>
    <p>Tu edad es : {{ edad }}</p>
    <Contador> Ejemplo de Vuex </Contador>
  </div>
</template>

<script>
import Contador from "./components/Contador";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Contador,
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

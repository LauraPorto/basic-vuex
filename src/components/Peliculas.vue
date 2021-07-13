<template>
  <div>
    <li v-bind:key="pelicula.titulo" v-for="pelicula in peliculas">
      {{ pelicula.titulo }}
    </li>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Peliculas",
  computed: mapState(["peliculas"]),
};
</script>

<style lang="scss" scoped></style>

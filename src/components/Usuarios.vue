<template>
  <div>
    <h1>Este es tu perfil :</h1>
    <div v-bind:key="user.id" class="data">
      <li>Nombre : {{ user.name }}</li>
      <li>Status: {{ user.status }}</li>
      <li>Especie: {{ user.species }}</li>
      <li>Origen: {{ user.origin.name }}</li>
      <li>Location: {{ user.location.name }}</li>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Usuarios",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["getCharacter"]),
  },
  mounted() {
    this.getCharacter();
  },
};
</script>

<style>
.data {
  background-color: #c68b59;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

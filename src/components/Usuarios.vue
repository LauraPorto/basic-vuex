<template>
  <div>
    <h1>Este es tu perfil :</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Usuarios",
  computed: {
    ...mapState(["store"]),
  },
  methods: {
    ...mapActions(["getCharacter"]),
  },
};
</script>

<style lang="scss" scoped></style>

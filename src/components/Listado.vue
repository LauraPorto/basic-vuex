<template>
  <div>
    <h2>Tienes {{ listadodeactivos }} películas disponibles</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Listado",
  computed: mapGetters(["listadodeactivos"]),
};
</script>

<style lang="scss" scoped></style>

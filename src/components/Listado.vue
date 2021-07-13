<template>
  <div>
    <h1>Estas son tus películas DISPONIBLES : {{ listadodeactivos }}</h1>
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

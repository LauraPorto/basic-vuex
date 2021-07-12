<template>
  <div>
    <p>El valor del contador es : {{ this.$store.state.contador }}</p>
    <button>Sumar</button>
    <button>Restar</button>
  </div>
</template>

<script>
import { store } from "../store/store";
export default {
  name: "Contador",
  store,
};
</script>

<style></style>

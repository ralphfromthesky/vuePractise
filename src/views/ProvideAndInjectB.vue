<template>
  <div>
    <h1><button class="btn btn-success">Component B</button></h1>
    <h1>
      this is the provide inject coming from componentB displaying data without
      using routing {{ anotherUsername }}
    </h1>
  </div>
</template>

<script>
import ProvideAndInjectC from "./ProvideAndInjectC.vue";
export default {
  components: {
    ProvideAndInjectC,
  },
  inject: ["anotherUsername"],
};
</script>

<style>
</style>
<template>
  <div>
    <ComponentB />
  </div>
</template>

<script>
import ComponentB from "./ComponentB.vue";
export default {
  name: "componentA",
  provide: {
    username: "ralph santolorin",
    anotherUsername: "gadwin santolorin",
    myName: "shenron santolorin"
  },
  components: {
    ComponentB,
  },
};
</script>

<style></style>

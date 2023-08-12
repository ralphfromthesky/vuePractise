<template>
  <div>
    <ComponentB />
    <ComponentC />
  </div>
</template>

<script>
import ComponentB from "./ComponentB.vue";
import ComponentC from "./ComponentC.vue";
export default {
  name: "componentA",
  provide: {
    username: "ralph santolorin",
    anotherUsername: "gadwin santolorin",
    myName: "shenron santolorin",
    themeColor: 'blue',
    backGroundColor: 'red'
  },
  components: {
    ComponentB,
    ComponentC
  },
};
</script>

<style></style>

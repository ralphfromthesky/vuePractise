<template>
  <div>.
    <h1>thi sis the component BBBBBBBBBBBBBBBB</h1>
    <ProvideAndInjectB />
    <h1>this is the component CCCCCCCCCCCCCCCCCCC</h1>
    <ProvideAndInjectC /> 
  </div>
</template>

<script>
import ProvideAndInjectB from "./ProvideAndInjectB.vue";
import ProvideAndInjectC from "./ProvideAndInjectC.vue";
export default {
  name: "componentA",
  provide: {
    username: "ralph santolorin",
    anotherUsername: "gadwin santolorin",
    myName: "shenron santolorin",
    themeColor: 'blue',
    backGroundColor: 'yellow',
    border: '2px solid red'
  },
  components: {
    ProvideAndInjectB,
    ProvideAndInjectC
  },
};
</script>

<style></style>

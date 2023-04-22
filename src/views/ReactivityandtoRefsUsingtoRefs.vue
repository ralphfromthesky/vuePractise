<template>
    <h1 style="color: red">Reactivity and to Refs Using to Refs</h1>
  <h1>
    this is using composition api reactive and toRef - {{ firstname }}
    {{ lastname }}
  </h1>
  <h1>this is data api- {{ fname }} -{{ lname }}</h1>
</template>

<script>
//for avoding bugs if you use setInterval(), use toRefs(state)
import { reactive, toRefs } from "vue";
export default {
  name: "Reactivityand using toRefs",
  setup() {
    const state = reactive({
      firstname: "joana",
      lastname: "rose",
    });

    setInterval(() => {
      (state.firstname = "yyyyyy"), (state.lastname = "xxxxx");
    }, 5000);

    return toRefs(state);
  },
  data() {
    return {
      fname: "ralph",
      lname: "santolorin",
    };
  },
};
</script>

<style></style>

<template>
  <Components2 name="ralph" heroName="Superman" />
  <Components2 name="rigor" heroName="SpiderMan" />
  <Components2 name="santolorin" heroName="Thor" />
  <Components2 :name="name" :heroName="lastname" />
  <h1>{{ name }} {{ lastname }}</h1>
  <Component3/>
</template>

<script >
import Components2 from "./Components2.vue";
import Component3 from "./Component3.vue";
export default {
  components: {
    Components2,
    Component3
  },
  data() {
    return {
      name: "gadwin",
      lastname: "santolorin",
    };
  },
};
</script>

<style></style>

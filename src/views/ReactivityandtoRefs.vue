<template>
    <h1 style="color:red"> Reactivity and to Refs</h1>
  <h1>this is reactivity and toRef - {{ name }}</h1>
</template>

<script>
//use ref reactivity of the component
import { ref } from "vue";
export default {
  name: "Reactivity and toRefs",
  setup() {
    const name = ref("ralphfromthesky");

    setTimeout(() => {
      name.value = "rigori0";
    }, 5000);


    return {
      name,
    };
  },
};
</script>

<style></style>

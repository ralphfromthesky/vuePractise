<template>
  <div>
    <h1>this is props a message comes from parent component App.vue</h1>
    <h2>{{ messageFromParentComponent }} - {{ AnotherMessage }}</h2>
    <hr />

    <!-- using provide and inject globally -->
    <div v-for="data in dataFromAnotherSampleOfData" :key="data"> 
      <h1>{{ data.name }} - {{ data.age }} - {{ data.location }}</h1>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "vue";
export default {
  name: "PropsAndCompositionAPIchild",
  props: ["messageFromParentComponent", "AnotherMessage"],
  setup() {
    const dataFromAnotherSampleOfData = inject("datas");
    return {
      dataFromAnotherSampleOfData,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <div v-for="data in sampleData" :key="data.name">
      <h1>
        {{ data.id }} - {{ data.name }} - {{ data.age }} {{ data.location }}
      </h1>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";

export default {
  setup() {
    const sampleData = inject("sampleData");

    return {
      sampleData,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
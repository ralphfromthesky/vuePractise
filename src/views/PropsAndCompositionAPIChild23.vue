<template>
  <div>
    <div v-for="datas in data" :key="datas">
      <h1>{{ datas }}</h1>

    </div>
    <h2>{{ messageFromTheSky }}</h2>


  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["data", 'messageFromTheSky'],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
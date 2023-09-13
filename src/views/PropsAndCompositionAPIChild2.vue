<template>
  <div>
    
    <h1>ralph santolorin</h1>
    <h3 :class="'red'">{{ sampleName }}</h3>
  </div>
</template>

<script>
export default {
  props: ["sampleName"],
};
</script>

<style scoped>
.red {
    color: red;
}
</style>
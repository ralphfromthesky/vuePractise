<template>
  <div :class="'ralph'">
    <h1>ralph santolorin</h1>
    <button @click="$emit('closeThis')">CLOSE</button>
  </div>
</template>

<script>
export default {
    name: 'ralph emits',
    emits: ['closeThis']
};
</script>

<style scoped>
.ralph {
  height: 20vh;
  border: 2px solid red;
  background-color: yellow;
}
</style>
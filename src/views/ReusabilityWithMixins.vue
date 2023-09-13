<template>
  <div>
  <button @click="counter">clicked {{ count }} times</button>
  <button @mouseover="hoverCount">hovered {{ hover }} times</button>
</div>
</template>

<script>
//the word MixinFunction is predefined, this is for reusable functions
import MixinFunction from '../mixins/Mixins.js'
export default {
  name: "mixin",
  mixins: [MixinFunction]
};
</script>

<style></style>

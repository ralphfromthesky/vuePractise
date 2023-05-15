<template>
  <div>
    <!-- v-bind="$attrs" is for passing id from a component itself to root element -->
    <h1 v-bind="$attrs">Props validation</h1>
    <h1>{{ title }}</h1>
    <h1>{{ likes }}</h1>
    <h1>are you {{ ishonest ? 'this is true' : 'this is false' }}</h1>
  </div>
</template>

<script>
export default {
  name: "props validation",
  props: {
    title: {
      type: String,
      required: true,
      default: 'this the default'
    },
    likes: Number,
    ishonest: Boolean,
  },
  //this is for preventing to inherit non props attributes (id="myArticle") to root element
  inheritAttrs: false,
  data() {
    return {

    }
  }
};
</script>

<style scoped>

.isCondition {
  color: red;
}
.isCondition2 {
  color: blue;
}
</style>
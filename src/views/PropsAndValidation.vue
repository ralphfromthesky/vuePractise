<template>
  <div>
    <h1>Props validation</h1>
    <h1>{{ title }}</h1>
    <h1>{{ likes }}</h1>
    <h1>are you {{ ishonest ? 'this is yes' : 'this is no' }}</h1>
  </div>
</template>

<script>
export default {
  name: "props validation",
  props: {
    title: {
      type: String,
      required: true,
      // default if the title missing will show this default
      default: 'this the default'
    },
    likes: Number,
    ishonest: Boolean,
  },
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
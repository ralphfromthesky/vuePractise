<template>
  <div>
    <h1> hello this is the {{ fullname }}</h1>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PropsAndCompositionAPIchild",
  props: ["firstname", "lastname"],
  setup(props) {
    const fullname = computed(() => {
      return `${props.firstname} ${props.lastname}`;
    });

    return {
        fullname,
    }
  },
 
};
</script>

<style lang="scss" scoped>
</style>
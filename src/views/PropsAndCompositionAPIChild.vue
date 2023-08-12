<template>
  <div>
    <h1> hello this is the {{ fullname }}</h1>
    <h1>sample computed property {{ sample }}</h1>
    <h1>{{ unangPangalan }}</h1>
    <h1>{{ hulingPangalan }}</h1>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PropsAndCompositionAPIchild",
  props: ["unangPangalan", "hulingPangalan", "santolorin", "ralph"],
  setup(props) {
    const fullname = computed(() => {
      return `${props.unangPangalan} <--> ${props.hulingPangalan}`;
    });

    const sample = computed(() => {
      return `${props.santolorin}  ${props.ralph}` 
    })

    return {
        fullname,
        sample
    }
  },
 
};
</script>

<style lang="scss" scoped>
</style>
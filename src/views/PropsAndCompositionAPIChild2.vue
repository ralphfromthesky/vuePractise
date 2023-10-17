<template>
  <div>
    <h1>thi is bind message from App.vue</h1>
    <h2>
      {{ bindMessageFromParents }} <br>
      {{ anotherSampleOfBindDataFromParentComponent }}
    </h2>
    <hr />
    <h1>this is props using computed properties</h1>
    {{ usingComputedOnprops }} <br>

    {{ bindThisfromparents }}

    <div v-for="data in dataList2" :key="data">
<h1>{{ data }}</h1>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: [
    "bindMessageFromParents",
    "anotherSampleOfBindDataFromParentComponent",
    "usingComputedPropertiesForFirstName",
    "usingComputedPropertiesForlastName",
    "bindThisfromparents",
    'dataList2'
  ],
  setup(props) {
    
    const usingComputedOnprops = computed(() => {
      return `my full name is ${props.usingComputedPropertiesForFirstName} ${props.usingComputedPropertiesForlastName}`
    })
    return {
      usingComputedOnprops

    }
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
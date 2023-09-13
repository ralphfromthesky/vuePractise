<template>
  <div>
    <PropsAndCompositionAPIChild
      :unangPangalan="unangPangalan"
      :hulingPangalan="hulingPangalan"
      :santolorin="santolorin"
      :ralph="ralph"
    />
    <button @click="changeMessage()"> change</button>
    <PropsAndCompositionAPIChild2 :sampleName="sampleName" />
  </div>
</template>

<script>
import { ref } from "vue";
import PropsAndCompositionAPIChild from "./PropsAndCompositionAPIChild.vue";
import PropsAndCompositionAPIChild2 from "./PropsAndCompositionAPIChild2.vue";
export default {
  name: "propsUsingCompositionApi",
  components: {
    PropsAndCompositionAPIChild,
    PropsAndCompositionAPIChild2,
  },
  setup() {
    const unangPangalan = ref("bentong");
    const hulingPangalan = ref("at apelyido ko ay santolorin");
    const ralph = ref("im ralph");
    const santolorin = ref("im santolorin");
    const sampleName = ref("this is sample props");

    const changeMessage = () => {
      sampleName.value = "chagnge value by clicking";
    };
    return {
      unangPangalan,
      hulingPangalan,
      santolorin,
      ralph,
      sampleName,
      changeMessage,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
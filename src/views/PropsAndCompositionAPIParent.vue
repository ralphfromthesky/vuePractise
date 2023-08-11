<template>
<div>
  <PropsAndCompositionAPIChild :unangPangalan="unangPangalan" :hulingPangalan="hulingPangalan" :santolorin="santolorin" :ralph="ralph"/>
</div>
</template>

<script>
import { ref } from "vue";
import PropsAndCompositionAPIChild from './PropsAndCompositionAPIChild.vue';
export default {
  name: "propsUsingCompositionApi",
  components: {
    PropsAndCompositionAPIChild
  },
  setup() {
    const unangPangalan = ref("bentong");
    const hulingPangalan = ref("at apelyido ko ay santolorin");
    const ralph = ref('im ralph')
    const santolorin = ref('im santolorin')

    return {
      unangPangalan,
      hulingPangalan,
      santolorin,
      ralph
    };
  },
};
</script>

<style lang="scss" scoped> 
</style>
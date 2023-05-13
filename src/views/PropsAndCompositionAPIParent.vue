<template>
  <div>
    <input type="text" placeholder="name" v-model="firstname" />
    <input type="text" placeholder="lastname" v-model="lastname" />
  </div>
  <PropsAndCompositionAPIChild :firstname="firstname" :lastname="lastname"/>
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
    const firstname = ref("");
    const lastname = ref("");

    return {
      firstname,
      lastname,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
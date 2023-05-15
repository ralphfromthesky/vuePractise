<template>
  <div>
    <button @click="popUp = true">PopUP</button>
    <ComponentsEventsChild v-show="popUp" @close="popUpwithNameInConsole" />
  </div>
</template>

<script>
import { ref } from "vue";
import ComponentsEventsChild from "./ComponentsEventsChild.vue";
export default {
  components: {
    ComponentsEventsChild,
  },

  setup() {
    const popUp = ref(false);

    const popUpwithNameInConsole = (name) => {
      popUp.value = false;
      console.log("name", name);
    };

    return {
      popUp,
      popUpwithNameInConsole,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
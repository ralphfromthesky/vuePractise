<template>
  <div>
    <button @click="popUp = !popUp">PopUP</button>
    <ComponentsEventsChild v-show="popUp" @tae="closingChildEvents" />
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
    // you can close the button component event with plain function
    const closingChildEvents = () => {
      popUp.value = false;
    };

    return {
      popUp,
      popUpwithNameInConsole,
      closingChildEvents,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
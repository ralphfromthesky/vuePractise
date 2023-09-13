<template>
  <div>
    <button @click="popUp = !popUp">PopUP</button>
    <ComponentsEventsChild v-show="popUp" @tae="closingChildEvents" />
    <button @click="hideThis = !hideThis">show</button>
    <ComponentsEventsChild2Vue v-show="hideThis" @closeThis = "emitFromChild"/>
  </div>
</template>

<script>
import { ref } from "vue";
import ComponentsEventsChild from "./ComponentsEventsChild.vue";
import ComponentsEventsChild2Vue from './ComponentsEventsChild2.vue';
export default {
  components: {
    ComponentsEventsChild,
    ComponentsEventsChild2Vue
  },

  setup() {
    const popUp = ref(false);
    const hideThis = ref(false);

    const popUpwithNameInConsole = (name) => {
      popUp.value = false;
      console.log("name", name);
    };
    // you can close the button component event with plain function
    const closingChildEvents = () => {
      popUp.value = false;
    };
    const emitFromChild = () => {
      hideThis.value = false
    }

    return {
      popUp,
      popUpwithNameInConsole,
      closingChildEvents,
      hideThis,
      emitFromChild
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
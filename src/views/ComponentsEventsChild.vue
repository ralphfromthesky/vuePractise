<template>
  <div>
    <h1>this is the pop up </h1>
    <!-- the $emits accept two parameters, the event and additional data that can pass along the event -->
    <input type="text" v-model="name">
    <button type="button" class="btn btn-success" @click="$emit('tae', name)">Close</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "pop-up",
  // emits: {
    //simple validation for emits
  //   close: (name) => {
  //     if(!name) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  // },
  emits: ['tae'],
  setup () {
    const name = ref('');

    return name
  }
};
</script>

<style></style>

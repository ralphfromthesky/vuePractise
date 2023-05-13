<template>
  <div :class="{ 'is-open': isOpen }">
    <h1>Example</h1>
    <button @click="toggleOpen">Toggle {{ message }}</button>
    <h1>this is the value {{ isOpen? 'yes' : 'no' }}</h1>
    <h1>direct value {{ isOpen }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    const message = ref('this is the message')
    
    function toggleOpen() {
      isOpen.value = !isOpen.value;
      this.message = 'what?'; 
      console.log(isOpen.value);
    }
    
    return {
      isOpen,
      toggleOpen,
      message
    }
  }
}
</script>

<style>
.is-open {
  background-color: yellow;
}
</style>

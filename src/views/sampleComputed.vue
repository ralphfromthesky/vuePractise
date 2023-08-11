<template>
    <div>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script>
  import { reactive, computed } from 'vue';
  
  export default {
    name: 'computed',

    setup() {
      const data = reactive({
        count: 1,
      });
  
      const increment = () => {
        data.count++;
      };
  
      const doubleCount = computed(() => {
        console.log('Computing double count...');
        return data.count * 2;
      });
  
      return {
        count: data.count,
        doubleCount,
        increment,
      };
    },
  };
  </script>
  
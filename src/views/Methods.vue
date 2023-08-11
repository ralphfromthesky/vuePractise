<template>
  <div>
    <h1>{{ 2 + 5 + 8 }}</h1>
    <h1>{{ 7 * 10 }}</h1>
    <h1>{{ (2 + 5 + 8) * 10 }}</h1>
    <h1>this total is {{ add(1, 2, 3) }}</h1>
    <h1>this total is {{ add(10, 20, 30) }}</h1>
    <h1>this multiply is {{ multiply(10) }}</h1>
    <h1>this multiply is {{ multiply(basevalue) }}</h1>
    <h1>this subtract is {{ subtraction(100) }}</h1>
    <h1>{{ add(multiplier, basevalue, subtract) }}</h1>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  // data() {
  //   return {
  //     multiplier: 10,
  //     baseValue: 20,
  //     subtract: 20,

  //   };
  // },
  // methods: {
  //   add(a, b, c) {
  //     return a + b + c;
  //   },
  //   multiply(num) {
  //     return num * this.multiplier;
  //   },
  //   subtraction(num) {
  //     return num - this.subtract;
  //   },
  // },
  
  setup() {
    const multiplier = ref(10);
    const basevalue = ref(20);
    const subtract = ref(20);

    const add = (a, b, c) => {
      return a + b + c;
    };

    const multiply = (num) => {
      return num * multiplier.value;
    };

    const subtraction = (num) => {
      return num - subtract.value;
    };

    return {
      multiplier,
      basevalue,
      subtract,
      add,
      multiply,
      subtraction,
    };
  },
};
</script>

<style></style>

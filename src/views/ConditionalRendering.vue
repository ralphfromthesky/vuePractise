<template>
  <div>
  <!-- must be together or else it will not work -->
  <h2 v-if="num === 0">the number is zero</h2>
  <h2 v-else-if="num < 5">the number is negative</h2>
  <h2 v-else-if="num > 0">the number is positive</h2>
  <h2 v-else>not a number</h2>
  <button @click="display = !display">BUTTON</button>
  <template v-if="display">
    <h2>ralph</h2>
    <h2>rigor</h2>
    <h2>santolorin</h2>
  </template>

  <template v-if="display">
    <h1>this is the v-if directive working in the separate div</h1>
  </template>

  <template v-if="showThis">
    <h1 @click="showElement = true">this is intitially showing</h1>
  </template>
  <h2 v-show="showElement" @click="showElement = false">this is v-show</h2>
  <button @click="display = true">thisButton</button>
  <button @click="showElement = false">show element</button>
  <div>
    <button @click="showDiv = !showDiv">Toggle Div</button>
    <div v-show="showDiv">Hello, world!</div>
  </div>

  <template>
    <template>
      <div>
        <div v-show="showDiv">This is another div!</div>
      </div>
    </template>
  </template>
</div>
</template>
<script>
export default {
  data() {
    return {
      num: 4,
      display: true,
      showElement: true,
      showThis: true,
      ralph: false,
      showDiv: true,
    };
  },
  methods: {},
};
</script>

<style></style>

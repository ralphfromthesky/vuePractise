<template>
  <!-- must be together or else it will not work -->
  <h2 v-if="num === 0">the number is zero</h2>
  <h2 v-else-if="num < 0">the number is negative</h2>
  <h2 v-else-if="num > 0">the number is positive</h2>
  <h2 v-else>not a number</h2>

  <template v-if="display">
    <h2>ralph</h2>
    <h2>rigor</h2>
    <h2>santolorin</h2>
  </template>

<template v-if="notTrue">
  <h1>================</h1>
</template>

  <h2 v-show="showElement">this is v-show</h2>

</template>

<script>
export default {
  data() {
    return {
      num: "zero",
      display: true,
      showElement: true,
      notTrue: true
    };
  },
};
</script>

<style></style>

<template>
  <div>
    <h1>this is the pop up by ralph santolorin</h1>
    <button type="button" class="btn btn-success" @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  name: "pop-up",
  emits: ['close']
};
</script>

<style></style>

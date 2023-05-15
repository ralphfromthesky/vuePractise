<template>
  <h1>
    this is the provide and inject, this is form ComponentC {{ username }}
  </h1>

  <h1>
    this is the anotherUsername using provide and injec, this is form ComponentC
    {{ anotherUsername }}
  </h1>
  <button class="btn btn-primary"> component C</button> 
</template>

<script>
export default {
  // this inject is to render data from child component to parent components
  inject: ["username", "anotherUsername"],
};
</script>

<style></style>

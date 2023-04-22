<template>
  <h1>
    this is the provide and inject, this is form ComponentC {{ username }}
  </h1>

  <h1>
    this is the anotherUsername using provide and injec, this is form ComponentC
    {{ anotherUsername }} <button class="btn btn-primary"> submit</button> <Button label="Danger" severity="danger" />PRIME

  </h1>
  <p>this button is from ComponentC</p>
</template>

<script>
export default {
  // this inject is to render data from child component to parent components
  inject: ["username", "anotherUsername"],
};
</script>

<style></style>

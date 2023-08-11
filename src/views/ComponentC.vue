<template>
  <h1>
    this is the provide and inject, this is from Component-C {{ username }}
  </h1>

  <h1>
    this is the anotherUsername using provide and injec, this is form ComponentC
    {{ anotherUsername }}
  </h1>
  <h1>this is provide and inject passing data from child to parent component {{ myName }}</h1>
  <button class="btn btn-primary"> component C</button> 
</template>

<script>
export default {
  // this inject is to render data from child component to parent components
  inject: ["username", "anotherUsername", "myName"],
};
</script>

<style></style>

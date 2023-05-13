<template>
    <scroll-fixed-header :b-model="fixed" :threshold="56">
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">Vuejs Scroll Fixed Header</a>
        </div>
      </nav>
    </scroll-fixed-header>
  </template>
  
  <script>
  export default {
    name: 'Timer',
    data() {
      return {
        fixed: false,
      };
    },
  };
  </script>
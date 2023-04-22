<template>
  <h1>this is the provide inject coming from componentB displaying data without using routing {{ anotherUsername }}</h1>
  <ComponentC/>
</template>

<script>
import ComponentC from './ComponentC.vue';
export default {
    components: {
        ComponentC,
    }, 
    inject: ['anotherUsername']

}
</script>

<style>

</style>
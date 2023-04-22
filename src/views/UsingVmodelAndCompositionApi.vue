<template>
    <input type="text" v-model="fname"/>
    <input type="text" v-model="firstName"/>
    <input type="text" v-model="fName"/>
    <input type="text" v-model="lname"/>

  </template>
  
  <script>
  import { ref, reactive, toRefs } from 'vue';
  export default {
      name: "v-model and Composition API",
      setup() {
            const firstName = ref('');
            const state = reactive({
                fName: '',
                lname:''

            })
            return {
                firstName,
                ...toRefs(state)
            }
      },
    data() {
      return {
        fname: "",
  
      };
    },
  };
  </script>
  
  <style></style>
  
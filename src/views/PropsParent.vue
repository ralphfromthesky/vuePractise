<template>
  <div>
    <h1>this the Props passing data from parent component to child component</h1>
    <!-- //passing data of parent to child use attribute 'name'-->
    <PropsChild name="ralph santolorin" message="developer ako" />
    <PropsChild name="gadwin santolorin" message="makulit din ako" />
    <PropsChild name="shenron santolorin" message="makulit" />
    <!-- props using composition api bind it by using '::' -->
    <PropsChild :name="name" :message="message" />
    <h1>this is props validation</h1>
    <PropsAndValidation title="this is String titlle" :likes="55" :ishonest="true"/>
  </div>
</template>

<script>
import { ref } from "vue";
import PropsAndValidation from "./PropsAndValidation.vue";
import PropsChild from "./PropsChild.vue";
export default {
  components: {
    PropsChild,
    PropsAndValidation
  },

  //props using composition API
  setup() {
    const name = ref("pedro");
    const message = ref("you are pedro");

    return {
      name,
      message,
    };
  },
};
</script>

<style scoped>

h1 {
    color: red;
    font-weight: 900;
}
</style>
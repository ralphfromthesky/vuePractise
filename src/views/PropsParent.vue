<template>
  <div>
    <h2>this is provide and inject sample sharing data{{ username }} and {{ sampleName }}</h2>
    <h1>this the Props passing data from parent component to child component</h1>
    <!-- //passing data of parent to child use attribute 'name'-->
    <PropsChild name="ralph santolorin" message="developer ako" />
    <PropsChild name="gadwin santolorin" message="makulit din ako" />
    <PropsChild name="shenron santolorin" message="makulit" />

    <!-- props using composition api bind it by using '::' -->
    <PropsChild :name="name" :message="message" :number="number"/>
    <h1>this is props validation</h1>
    <!-- the id="myArticle" is the non-props attribute that will be passed from component itself to it element -->
    <PropsAndValidation id="myArticle" title="this is String titlle" :likes="55" :ishonest="true"/>
  </div>
</template>

<script>
import { ref } from "vue";
import PropsAndValidation from "./PropsAndValidation.vue";
import PropsChild from "./PropsChild.vue";
export default {

  inject: ["username", "sampleName"],
  components: {
    PropsChild,
    PropsAndValidation
  },

  //props using composition API
  setup() {
    const name = ref("pedro");
    const message = ref("you are pedro");
    const number = ref("09617587967")

    return {
      name,
      message,
      number
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
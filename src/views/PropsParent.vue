<template>
  <div>
    <h2>this is provide and inject sample sharing data{{ username }} and {{ sampleName }}</h2>
    <h1>this the Props passing data from parent component to child component</h1>
    <!-- //passing data of parent to child use attribute 'name'-->
    <PropsChild name="ralph santolorin" message="developer ako" :thisIsSample="thisIsSample"/>
    <PropsChild name="gadwin santolorin" message="makulit din ako" />
    <PropsChild name="shenron santolorin" message="makulit" number="123456" sample="thisIsSample"/>

    <!-- props using composition api bind it by using '::' -->
    <PropsChild :myname="myname" :mymessage="mymessage" :mynumber="mynumber" :thisIsSample="thisIsSample"/>
    <PropsChild :myname="myname" :mymessage="mymessage" :mynumber="mynumber" :thisIsSample="thisIsSample"/>

    <h1>this is props validation</h1>
    <!-- the id="myArticle" is the non-props attribute that will be passed from component itself to it element -->
    <PropsAndValidation id="myArticle" title="this is String titlle" :likes="55" :ishonest="false"/>
    <h1>this is my name {{ name }}</h1>
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
    const myname = ref("PEDRO");
    const mymessage = ref("MESSAGE OF PEDRO");
    const mynumber = ref("09617587967")
    const thisIsSample = ref('sampleLang')
    const name = ref('ralph')

    return {
      myname,
      mymessage,
      mynumber,
      thisIsSample,
      name
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
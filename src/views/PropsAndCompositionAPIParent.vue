<template>
  <div>
    <PropsAndCompositionAPIChild
      messageFromParentComponent="this is the message from parent Component"
      AnotherMessage="ralph santolorin"
    />
    <hr />

    <PropsAndCompositionAPIChild2
      :bindMessageFromParents="MessageFromParentComponent"
      :anotherSampleOfBindDataFromParentComponent="bindThisData"
    />

    <PropsAndCompositionAPIChild2
      :usingComputedPropertiesForFirstName="firstname"
      :usingComputedPropertiesForlastName="lastname"
    />

    <PropsAndCompositionAPIChild2 :bindThisfromparents="newMessage"/>
    <PropsAndCompositionAPIChild2 :dataList2="newData"/>

    <hr />
    <button @click="changeData()">change data from parent component</button>
    <hr />

    <PropsAndCompositionAPIChild23 :data="dataList"/>

    <PropsAndCompositionAPIChild23 :messageFromTheSky="messageFromSky"/>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import PropsAndCompositionAPIChild from "./PropsAndCompositionAPIChild.vue";
import PropsAndCompositionAPIChild2 from "./PropsAndCompositionAPIChild2.vue";
import PropsAndCompositionAPIChild23 from "./PropsAndCompositionAPIChild23.vue";

export default {
  name: "propsUsingCompositionApi",
  components: {
    PropsAndCompositionAPIChild,
    PropsAndCompositionAPIChild2,
    PropsAndCompositionAPIChild23,
  },
  setup() {
    const MessageFromParentComponent = ref(
      "a bind message from Parent App.vue"
    );
    const newMessage = ref('this is the new messageeeeeee')
    const bindThisData = ref("new Message");
    const firstname = ref("ralph rigor");
    const lastname = ref("santolorin");
    const messageFromSky = ref('how are you!!!!!')
    const dataList = reactive({
      name: 'ralph santolorin',
      age: '39',
      location: 'navotas'
    })
    const newData = reactive({
      name: 'shenron santolorin',
      age: 10,
      location: 'navotas'
    })




    const changeData = () => {
      firstname.value = "new data from a button click from parent component";
      lastname.value = "new data from a button click from parent component";
      bindThisData.value = "new data from a button click from parent component";
    };

    return {
      MessageFromParentComponent,
      bindThisData,
      firstname,
      lastname,
      changeData,
      dataList,
      newMessage,
      messageFromSky,
      newData
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <h1 style="color: red">Replacing Data With Ref</h1>
  <h1>option api - {{ firstname }}</h1>
  <h1>composition api - {{ _firstName }}</h1>
  <h1>composition api {{ greet }}</h1>
  <h1>
    compostion api - {{ a_fullname }} - {{ b_fullname }} - {{ c_fullname }}
  </h1>
  <h1>compostition api {{ greeted }}</h1>
  <h1>
    this is using reactive {{ state.firstname }} - {{ state.secondName }}-
    {{ state.lastname }}
  </h1>
  <h1>this is reactive {{ reactiveGreet }}</h1>
  <h1>this is the {{ samplegreet }} using setup</h1>
</template>

<script>
//import this ref, use ref when dealing with primitive type(string, boolean, number)
//use ref reactivity of the component like for setInterval()
import { ref, reactive } from "vue";
export default {
  name: "ref",
  //this set up is for composition api using ref
  setup() {
    const _firstName = ref("gadwin-santolorin");
    const a_fullname = ref("dani jensen");
    const b_fullname = ref("tyler smith");
    const c_fullname = ref("miya khalifa");
    //for update the value of_firstName
    _firstName.value = "gogo";
    const greet = `hello ${_firstName.value}`;
    const greeted = `hello to all of you ${a_fullname.value}, ${b_fullname.value} and ${c_fullname.value}`;
    //this for composition api using reactive and it only accepts object or you can pass objects
    const state = reactive({
      firstname: "bruce",
      secondName: "wayne",
      lastname: "smith",
    });

    const reactiveGreet = `hello how are you ${state.firstname} ${state.secondName} ${state.lastname}`;
    const samplegreet = `this is sample greet ${c_fullname.value} and ${b_fullname.value}`;
    
    return {
      _firstName,
      greet,
      greeted,
      a_fullname,
      b_fullname,
      c_fullname,
      reactiveGreet,
      state,
      samplegreet
    };
  },
  data() {
    return {
      firstname: "shenron-santolorin",
    };
  },
};
</script>

<style></style>

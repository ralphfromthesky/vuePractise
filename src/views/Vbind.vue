<template>
  <div>
  <h1>{{ message + " " + name + number }}</h1>
  <h1>{{ test }}</h1>
  <h2>{{ number }}</h2>
  <div>{{ name }}</div>
  <div v-text="bindTest"></div>
  <div v-html="thisHtml"></div>
  <div v-bind:id="thisVbind">this is v-bind or shorthand :id=""</div>
  <!-- for disabling -->
  <button v-bind:disabled="isDisabled">BIND</button>
  <!-- for changing class -->
  <h2 v-bind:class="status">Status shorthand is :class =""</h2>
  <h2 v-bind:class="isTestStyle && 'testStyle'">test styles</h2>
  <!-- using ternary operator -->
  <h2 v-bind:class="isCondition ? 'condition1' : 'condition2'">
    ternary condition with data property
  </h2>
  <!-- for combined classes -->
  <h3 v-bind:class="['condition1', 'condition2']">
    this is combined style class
  </h3>
  <h3
    v-bind:class="[
      isTestStyle && 'testStyle',
      isCondition ? 'condition1' : 'condition2',
    ]"
  >
    this is combined style classes with data property
  </h3>
  <h2 v-bind:style="dataPropertyStyle">this is data property styling</h2>
  <h2 v-bind:style="[dataPropertyStyle, dataPropertyStyle2]">
    this is data property styling array styling
  </h2>
  <h1 :class="['firstClass, secondClass']">this is combined class</h1>
  <h1 :class="{ 'trueClass': objectClass, 'notTrueClass': isTestStyle }" @click="objectClass = !objectClass">
    ralph santolorinnnnn
  </h1>
  <h1 :class="'trueClass'">sHENRON SANTOLORIN</h1>
  <h1 :class="'textColor'"> c shenron ay makulit</h1>
  <h1 :class="ternaryCondition ? 'applyThisIfTrue' : 'applyThisIfFalse'">this is ternary Condition</h1>
  <h1 :class="{'trueClass': objectClass, 'applyThisIfTrue': !isDisabled}"> dynamic class condition</h1>
  <h1>this is sample of interpolation and the name is {{ namers }}</h1>
  <h1 :class="ternaryClass ? 'ternaryClass': ' applyThisIfTrue'">example of appying class ternay condition</h1>
</div>
</template>

<script>
export default {
  data() {
    return {
      test: "this is the test",
      message: "this is the message",
      number: 9617587967,
      name: "ralph santolorin",
      bindTest: "this is the v-text bind test",
      thisHtml: "<b>this is bold</b>",
      thisVbind: "this is v-bind",
      isDisabled: false,
      status: "success",
      isTestStyle: true,
      isCondition: false,
      objectClass: true,
      ternaryClass: true,
      dataPropertyStyle: {
        color: "red",
        border: "2px solid black",
        padding: "5px",
      },
      dataPropertyStyle2: {
        fontSize: "2rem",
        backgroundColor: "green",
      },
      ternaryCondition: false,
      namers: 'gadwin santolorin',
      methods: {
        
      }
    };
  },
};
</script>

<style>
h2 h3 {
  margin: 0;
}
.testStyle {
  color: red;
  background-color: black;
}
.condition1 {
  background-color: green;
}
.condition2 {
  color: orange;
}
.firstClass {
  color: red;
  padding: 20px;
}
.secondClass {
  border: 2px solid blue;
}
.trueClass {
  background-color: pink;
}
.notTrueClass {
  border: 5px solid yellowgreen;
}
.textColor {
  color: red;
  border: 2px solid red;
}
.applyThisIfTrue {
  background-color: red;
}
.applyThisIfFalse {
  background-color: blue;
}
.ternaryClass {
  background-color: yellow;
  border: 2px solid red;
  color: blue;
}
</style>

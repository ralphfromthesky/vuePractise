<template>
  <div>
    <div v-for="name in names" :key="name">
      <h1 style="color: red" v-if="name === 'santolorin'"> this is conditiona list renderings {{ name }}</h1>
      <h1>{{ name }}</h1>
      <div v-for="emp in employee" :key="emp">
        <h1 style="color: blue">{{ emp }}</h1>
      </div>
    </div>

    <div v-for="student in students" :key="student">
      <h1>{{ student }}</h1>
    </div>
    <!-- this is example of rendering data from separate file(data.js) -->
    <div v-for="nameOfstudent in myStudent" :key="nameOfstudent" :class="'sampleClass'">{{ nameOfstudent }}</div> 
  </div>
</template>

<script>
import myStudent from './data.js'
export default {
  data() {
    return {
      names: ["ralph", "rigor", "santolorin"],
      employee: ["erwin", "tessa", "maine", "daniel"],
      students: ['avila', 'leslie', 'anna'],
      myStudent: myStudent,
    };
  },
};
</script>

<style>
.sampleClass {
  color: blue;
  border: 2px solid red;
  margin: 5px;
}
</style>

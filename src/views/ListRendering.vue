<template>
  <h3 v-for="name in names" :key="name">{{ name }}</h3>

  <h4 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h4>
  <h4
    v-for="name in fullNames"
    :key="name.firstName"
    :style="dataPropertyStyle"
  >
    {{ name.firstName }}{{ name.lastName }}
  </h4>

  <div v-for="student in students" :key="student.name">
    <h3>{{ student.name }} </h3>
    <h3 v-for="subject in student.subjects" :key="subject"> {{ subject }}</h3>
  </div>
  <h1 v-for="(value, index, key) in myInfo" :key="value">{{ key }} {{ index }} {{ value }}</h1>
</template>

<script>
export default {
  data() {
    return {
      names: ["ralph", "shenron", "gadwin"],
      fullNames: [
        { firstName: "ralph ", lastName: "santolorin" },
        { firstName: "shenron ", lastName: "santolorin" },
        { firstName: "gadwin ", lastName: "santolorin" },
      ],
      dataPropertyStyle: {
        color: "red",
      },
      students: [
        {
          name: "ciara sotto",
          subjects: ["science", "math"],
        },
        {
          name: "g toengi",
          subjects: ["english", "filipino"],
        },
      ],
      myInfo: {
        name: "ralph santolorin",
        work: "web developer",
        salary: 35000,
      },
    };
  },
};
</script>

<style>
h1, h3, h4 {
    font-size: 15px;
}
</style>

<template>
  <div>
    <div v-for="name in names" :key="name">
      <h1 style="color: red" v-if="name === 'santolorin'">{{ name }}</h1>
      <h1>{{ name }}</h1>
      <div v-for="emp in employee" :key="emp">
        <h1 style="color: blue">{{ emp }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["ralph", "rigor", "santolorin"],
      employee: ["erwin", "tessa", "maine", "daniel"],
    };
  },
};
</script>

<style></style>

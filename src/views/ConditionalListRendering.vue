<template>
  <template v-for="name in names" :key="name">
    <h1 v-if="name === 'santolorin'">{{ name }}</h1>
  </template>
</template>

<script>
export default {
  data() {
    return {
      names: ["ralph", "rigor", "santolorin"],
    };
  },
};
</script>

<style></style>

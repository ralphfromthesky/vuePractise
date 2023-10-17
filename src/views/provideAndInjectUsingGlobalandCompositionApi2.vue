<template>
  <div>
    <div v-for="employees in employee" :key="employees.id">
      <h2>
        {{ employees.id }} - {{ employees.fullname }} - {{ employees.age }}
      </h2>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "provide2",
  setup() {
    const employee = inject("employee");
    return {
      employee,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

<!-- <template>
    <div>
      <div v-for="employeeItem in employee" :key="employeeItem.id">
        <h1>{{ employeeItem.id }} - {{ employeeItem.fullname }} - {{ employeeItem.age }}</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { inject } from "vue";
  export default {
    name: "provideAndInjectUsingGlobalandCompositionApi2",
    setup() {
      const employee = inject("employee");
      return {
        employee,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
   -->
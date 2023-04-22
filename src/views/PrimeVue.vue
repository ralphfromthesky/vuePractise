<template>
  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible">
      <h2>Sidebar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Sidebar>
    <Button icon="pi pi-bars" @click="visible = true" />
  </div>

  <div class="card flex justify-content-center flex-wrap gap-3">
    <Button label="Primary" />
    <Button label="Secondary" severity="secondary" />
    <Button label="Success" severity="success" />
    <Button label="Info" severity="info" />
    <Button label="Warning" severity="warning" />
    <Button label="Help" severity="help" />
    <Button label="Danger" severity="danger" />
  </div>
  <div class="card flex justify-content-center">
    <Calendar v-model="date" showIcon />
  </div>

    <div class="card flex justify-content-center">
      <div class="flex flex-column gap-3">
        <div
          v-for="category of categories"
          :key="category.key"
          class="flex align-items-center"
        >
          <Checkbox
            v-model="selectedCategories"
            :inputId="category.key"
            name="category"
            :value="category.name"
          />
          <label :for="category.key">{{ category.name }}</label>
        </div>
      </div>
    </div>



</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
const date = ref();

const categories = ref([
  { name: "Accounting", key: "A" },
  { name: "Marketing", key: "M" },
  { name: "Production", key: "P" },
  { name: "Research", key: "R" },
]);
const selectedCategories = ref(["Marketing"]);
</script>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
button {
  margin: 10px;
}
</style>

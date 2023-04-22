<template>
  <div>
    <form action="" @submit.prevent="createData">
      <div>
        <label for="userId">Post Id</label>
        <input
          class="form-control"
          type="text"
          id="userId"
          v-model="formData.userId"
        />
      </div>
      <div>
        <label for="title">title</label>
        <input
          class="form-control"
          type="text"
          id="title"
          v-model="formData.title"
        />
      </div>
      <div>
        <label for="body">Body</label>
        <input
          class="form-control"
          type="text"
          id="body"
          v-model="formData.body"
        />
      </div>
      <button class="btn btn-success">SUBMIT</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "httppost",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createData() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((Response) => console.log(Response))
        .catch((error) => console.log(error));
      console.log(this.formData);
    },
  },
};
</script>

<style></style>

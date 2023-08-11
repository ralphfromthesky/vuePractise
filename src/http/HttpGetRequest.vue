<template>
  <!-- <button @click="getPosts">load Post</button> for manually loading the data-->
  <h3 v-if="errorMsg">{{ errorMsg }}</h3>
  <div v-for="post in posts" :key="post.id">
    <h3>{{ post.id }} {{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "http",
  // lifecycel hooks load data form server when component is initialize
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      errorMsg: '',
    };
  },
  methods: {
    getPosts() {
      // need to install before you can use(npm install axios)
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => console.log(error));
      this.errorMsg = "error retrieving data";
    },
  },
};
</script>

<style></style>

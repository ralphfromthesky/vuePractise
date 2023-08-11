<template>
<div>
    <HttpPostRequest/>
    <HttpGetRequest/>
</div>

</template>

<script>
import HttpGetRequest from "./HttpGetRequest.vue";
import HttpPostRequest from "./HttpPostRequest.vue";
export default {
  name: "http",
  components: {
    HttpPostRequest,
    HttpGetRequest,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

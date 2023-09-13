<template>
  <div>
    <div>
      <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre
      >
    </div>
    <!-- .prevent for preventing the submit for refreshing -->
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name</label>
        <!-- .trim for trimming white space -->
        <input type="text" id="name" v-model.trim="formValues.name" />
      </div>

      <div>
        <label for="profile">Profile Summary</label>
        <textarea id="profile" v-model="formValues.profileSummary"></textarea>
      </div>

      <div>
        <label for="select-country">Select Country</label>
        <select name="" id="select-country" v-model="formValues.country">
          <option value="">Select Country</option>
          <option value="america">America</option>
          <option value="vietnam">Vietnam</option>
          <option value="russia">Russia</option>
        </select>
      </div>

      <div>
        <label for="job-location">Job Location</label>
        <select id="job-location" multiple v-model="formValues.jobLocation">
          <option value="america">America</option>
          <option value="vietnam">Vietnam</option>
          <option value="russia">Russia</option>
        </select>
      </div>

      <div>
        <input
          type="checkbox"
          id="remotework"
          v-model="formValues.remoteWork"
          true-value="yes"
          false-values="no"
        />
        <label for="remotework">open for remote work?</label>
      </div>
      <div>
        <label for="">SKILL SET</label>
        <input
          type="checkbox"
          id="css"
          value="css"
          v-model="formValues.skillSet"
        />
        <label for="css">CSS</label>
        <input
          type="checkbox"
          id="html"
          value="html"
          v-model="formValues.skillSet"
        />
        <label for="html">HTML</label>
        <input
          type="checkbox"
          id="javascript"
          value="javascript"
          v-model="formValues.skillSet"
        />
        <label for="javaxript">JAVASCRIPT</label>
      </div>

      <div>
        <label for="">Years of Experience</label><br />
        <label for="">0-1</label>
        <input
          type="radio"
          id="0-1"
          value="0-1"
          v-model="formValues.yearsOfExperience"
        />
        <label for="">2-3</label>
        <input
          type="radio"
          id="2-3"
          value="2-3"
          v-model="formValues.yearsOfExperience"
        />
        <label for="">3-5</label>
        <input
          type="radio"
          id="3-5"
          value="3-5"
          v-model="formValues.yearsOfExperience"
        />
      </div>
      <div>
        <label for="age">Age</label>
        <!-- .number usage as modifier or you can add @key.enter for using enter to submit-->
        <input type="number" id="age" v-model.number="formValues.age" />
      </div>

      <div>
        <button>SUBMIT</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  setup() {
    const formValues = reactive({
      name: "",
      profileSummary: "",
      country: "",
      jobLocation: [],
      remoteWork: "no",
      skillSet: [],
      yearsOfExperience: "",
      age: null,
    });
    const thisIsComputed = computed(() => {});
    const submitForm = () => {
      console.log("THIS IS THE FORM", formValues); //if you are using reactivity no need to use.value
    };
    return {
      formValues,
      submitForm,
    };
  },
  // data() {
  //   return {
  //     formValues: {
  //       name: "",
  //       profileSummary: "",
  //       country: "",
  //       jobLocation: [],
  //       remoteWork: "no",
  //       skillSet: [],
  //       yearsOfExperience: "",
  //       age: null,
  //     },
  //   };
  // },

  // methods: {
  //   submitForm() {
  //     // this e.preventDefault(); is for preventing the reset

  //     console.log("submit this", this.formValues);
  //   },
  // },
};
</script>

<style>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

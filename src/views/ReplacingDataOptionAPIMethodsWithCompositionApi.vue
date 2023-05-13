<template>
    <h1 style="color: red">Replacing Data Option API Methods WithC omposition Api </h1>
  <button class="btn btn-success" @click="nameChange">{{ name }}</button>
  <button class="btn btn-danger" @click="nameChanger">{{ count }}</button>
  <button class="btn btn-primary" @click="niggaz">{{ first }}{{ last }}</button>



</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';
//this toRefs is for spreading (...)
import { toRefs } from 'vue';
export default {
    name: "ReplacingDataOptionAPIMethodsWithCompositionApi",
    setup() {
        //this method is for ref
        const count = ref(0);
        const nameChanger = () => {
            count.value++;
        }

        //this method is for reactive
        const state = reactive({
            first: 'tupac',
            last: 'shakur'
        })
        const niggaz = () => {
            state.first = 'biggie',
            state.last = 'smalls'
        }
        


        return {
            count,
            nameChanger,
            //this toRefs is for using the (...) this allow us to not define state.first or state.last
            ...toRefs(state),
            niggaz
        }
  },
  data() {
    return {
      name: "kanye",
    };
  },
  methods: {
    nameChange() {
      this.name = "west";
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="name = 'rigor'">click!</button>

    <h1>{{ counted }}</h1>
    <button v-on:click="counted += 1">increment</button>
    <button v-on:click="counted -= 1">decrement</button>

    <h3>{{counter}}</h3>
    <button :on-click="counter += 1">plus</button>

    <h1>{{ count }}</h1>
    <button @click="increment(5, $event)">increase</button>
    <button @click="decrement(2)">decrease</button>
    <!-- for multiple method in an element -->
    <button @click="increment(2), changename('clark')">{{ name }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "ralph",
      count: 0,
      counted: 0,
      counter: 0
    };
  },
  methods: {
    increment(num, event) {
      this.count += num;
      console.log("Event", event);
      console.log(this.count);
      if (this.count == 10) {
        this.name = "game!";
      } else if (this.count == 20) {
        this.name = "youre over 20!";
      } else if (this.count == 30) {
        this.name = "youre over 30!";
      }
    },
    decrement(num) {
      this.count -= num;
    },
    changename(name) {
      this.name = name;
    },
  },
};
</script>

<style></style>

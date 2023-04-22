<template>
  <h1>Volume Tracker - (0-20)</h1>
  <small v-if="volume === alertVolume">Danger</small>
  <h2>the volume is {{ volume }}</h2>
  <div>
    <button @click="volume += 1">INCREMENT</button>
    <button @click="volume -= 1">DECREMENT</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      volume: 0,
      alertVolume: 16,
    };
  },
  methods: {},
  computed: {},
  watch: {
    volume(a, b) {
      if (a > b && a === 16) {
        alert("your volume is high might damage your hearing");
      }
    },
  },
};
</script>

<style></style>

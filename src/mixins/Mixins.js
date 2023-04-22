
// this is the reusable method or function you can call it in any compoonents
export default {
    name: "mixin",
    data() {
      return {
        count: 0,
        hover: 0,
      };
    },
    methods: {
      counter() {
        this.count += 1;
      },
      hoverCount() {
        this.hover += 1;
      },
    },
  };
  
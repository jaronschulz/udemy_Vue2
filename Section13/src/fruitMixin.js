export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: ""
    };
  },
  computed: {
    filteredFruites() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};

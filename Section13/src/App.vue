<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUppercase | to-lowercase}}</p>
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruites">{{fruit}}</li>
        </ul>
        <hr />
        <my-list></my-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";

export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: "Hello there!"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    myList: List
  }
};
</script>

<style>
</style>

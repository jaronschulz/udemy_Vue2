<template>
  <div>
    <Stocks v-for="stock in stocks" :stock="stock" />
  </div>
</template>

<script>
import Stocks from "./Stock.vue";
import { mapGetters } from "vuex";

export default {
  computed: { ...mapGetters({ stocks: "stockPortfolio" }) },
  components: { Stocks }
};
</script>

<style>
</style>
<template>
  <div>
    <h2 class="content__title">{{ getActiveCategories.text }} пиццы</h2>
    <div class="content__items" v-if="getPizzas">
      <Pizza v-for="pizza in getPizzas" :key="pizza.id" :pizza="pizza"/>
    </div>
    <div class="content__items" v-else>
      <Skeleton v-for="(k, i) in 10" :key="i"/>
    </div>
    <div class="paginatin">
      <p>this is page 1</p>
    </div>
  </div>
</template>

<script>
import Pizza from '@/components/Pizza.vue'
import Skeleton from '@/components/Skeleton.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Pizza,
    Skeleton,
  },
  data() {
    return {};
  },
  methods: {
    addActiveType(index) {
      console.log(index);
    },
    addCart(pizzaIndex) {
      this.pizzas.forEach((pizza) => {
        if (pizza.id == pizzaIndex) {
          this.$store.commit("addCart", pizza);
        }
      });
    },
  },
  computed: {
    ...mapState(["pizzas"]),
    getPizzas() {
      return this.$store.getters.getCategories;
    },
    getActiveCategories(){
      return this.$store.state.categories
    },
  },
  created() {
    this.$store.dispatch("getPizzas");
  },
};
</script>
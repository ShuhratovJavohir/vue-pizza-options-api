<template>
  <div>
    <div class="content__top">
      <Categories />
      <Sort />
    </div>
    <Pizzas />
  </div>
</template>

<script>
import Categories from '@/components/Categories.vue'
import Sort from '@/components/Sort.vue'
import Pizzas from '@/components/Pizzas.vue'
export default {
  components: {
    Categories,
    Sort,
    Pizzas
  }
};
</script>
<template>
  <div class="categories">
    <ul>
      <li
       
        :class="{ active: categorie.isActive }" v-for="(categorie, index) in categoriesArray"
        :key="index"
        @click="addCategories(categorie, categorie)"
      >
        {{ categorie.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['categoriesArray'])
  },
  methods: {
    addCategories(val, categorie) {
      this.$store.commit('activeCategoris', categorie)
      this.categoriesArray.forEach((el) => {
        el.isActive = false;
      });
      val.isActive = true;
    },
  },
  created() {
  },
};
</script>
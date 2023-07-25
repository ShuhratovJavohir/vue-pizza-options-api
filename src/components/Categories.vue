<template>
  <div class="categories">
    <ul>
      <li
        v-for="(categorie, index) in categoriesArray"
        :class="{ active: categorie.isActive }"
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
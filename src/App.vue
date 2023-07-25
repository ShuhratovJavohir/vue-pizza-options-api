<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header,
  }
}
</script>
    Categories

<style lang="scss" scoped></style>
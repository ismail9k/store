<template lang="pug">
#app
  AppNavbar
  main.app-main
    .products
      AppProduct(v-for="(product, indx) in 7" :data="{}" :key="indx" :highlight="indx === 0")

    AppPaginator(
      :totalPages="10",
      :currentPage="5"
    )

</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="stylus">
.app-main
  margin: auto
  padding: 50px 0
  max-width: 1300px

.products
  display: grid
  margin-bottom: 30px
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))
  grid-auto-rows: 400px
  grid-gap: 20px
</style>

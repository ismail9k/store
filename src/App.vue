<template lang="pug">
#app
  AppNavbar
  main.app-main
    .products
      Product(
        v-for="(product, indx) in isLoading ? 7 : products"
        :data="isLoading ? {} : product"
        :key="indx"
        :featured="isLoading ? indx === 0 : product.featuredProduct"
        :loading="isLoading"
        @showDetails="showProductModal"
      )

    AppPaginator(
      :totalPages="3",
      v-model="currentPage"
    )

    ProductModal(
      ref="productModal"
      :product="currentProduct"
    )

</template>

<script>
import Product from './components/Product';
import ProductModal from './components/ProductModal';

import { mapState } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      currentPage: 1,
      currentProduct: {}
    };
  },
  computed: {
    ...mapState(['products']),
    isLoading() {
      return !this.products.length;
    }
  },
  watch: {
    currentPage(page) {
      this.fetchProducts(page);
    }
  },
  methods: {
    fetchProducts(page) {
      this.$store.dispatch('fetchProducts', { page, perPage: 7 });
    },
    showProductModal(product) {
      this.currentProduct = product;
      this.$refs.productModal.show();
    }
  },
  components: {
    Product,
    ProductModal
  },
  created() {
    this.fetchProducts(this.currentPage);
  }
};
</script>

<style lang="stylus">
.app-main
  margin: auto
  padding: 100px 10px 50px
  max-width: 1300px

.products
  display: grid
  margin-bottom: 30px
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))
  grid-auto-rows: 400px
  grid-gap: 20px
</style>

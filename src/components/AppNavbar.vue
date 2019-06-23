<template lang="pug">
header.navbar
  .navbar-container
    .navbar-brand
      img(src="@/assets/img/logo.png" alt="online store")
      h1(class="u-sr-only") Online Store
    .navbar-start
    .navbar-end
      .navbar-item
        AppButton(state="primary" outline) Login
      .navbar-item(:class="{'is-adding-item': addingItemToCart}")
        AppButton(state="primary" clean ref="cartButton" @click="toggleCartMenu")
          .navbar-bubble(v-if="cart.length") {{ cart.length }}
          AppIcon(name="cart" size="large" color="priamry")
        .cart-product(v-if="addingItemToCart")
          img(:src="cart[cart.length - 1].featuredPhoto")
        CartMenu(v-if="isCartVisiable" ref="cartMenu")
</template>

<script>
import CartMenu from './CartMenu';
import { mapState } from 'vuex';

export default {
  name: 'AppNavbar',
  data() {
    return {
      isCartVisiable: false
    };
  },
  computed: mapState(['cart', 'addingItemToCart']),
  methods: {
    toggleCartMenu(e) {
      if (!this.isCartVisiable) {
        this.isCartVisiable = true;
        setTimeout(() => {
          window.addEventListener('click', this.hideMenu);
        }, 0);
        return;
      }
      this.hideMenu(e);
    },
    hideMenu(e) {
      if (this.$refs.cartMenu.$el.contains(e.target)) {
        return;
      }
      this.isCartVisiable = false;
      window.removeEventListener('click', this.hideMenu);
    }
  },
  components: {
    CartMenu
  }
};
</script>

<style lang="stylus">
.cart-product
  position: absolute
  top: 10px
  z-index: 30
  width: 40px
  transform: translateY(50px)
  animation: fade-in-up 0.9s both

  img
    width: 100%

.is-adding-item
  .navbar-bubble
    animation: jello-horizontal 0.9s 0.9s both
</style>

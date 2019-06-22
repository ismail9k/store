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
      .navbar-item
        AppButton(state="primary" clean ref="cartButton" @click="toggleCartMenu")
          AppIcon(name="cart" size="large" color="priamry")
        CartMenu(v-if="isCartVisiable" ref="cartMenu")
</template>

<script>
import CartMenu from './CartMenu';

export default {
  name: 'AppNavbar',
  data() {
    return {
      isCartVisiable: false
    };
  },
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

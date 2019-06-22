<template lang="pug">
header.navbar
  .navbar-container
    .navbar-brand
      img(src="@/assets/img/logo.png" alt="online store")
      h1(class="u-sr-only") Online Store
    .navbar-start
    .navbar-end
      .navbar-item
        AppButton(state="primary" :outline="true") Login
      .navbar-item
        AppButton(state="primary" :clean="true")
          AppIcon(name="cart" size="large" color="priamry")
        CartMenu
</template>

<script>
import CartMenu from './CartMenu';

export default {
  name: 'AppNavbar',
  components: {
    CartMenu
  }
};
</script>

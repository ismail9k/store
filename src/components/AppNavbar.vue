<template lang="pug">
header.navbar
  .navbar-container
    .navbar-brand
      | Online Store
      h1(class="u-sr-only") Online Store
    .navbar-start
    .navbar-end
      .navbar-item
        AppButton(state="primary" :outline="true") Login
      .navbar-item
        AppButton(state="primary" :clean="true")
          AppIcon(name="cart" size="large" color="priamry")
</template>

<script>
export default {
  name: 'AppNavbar'
};
</script>

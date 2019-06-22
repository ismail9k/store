<template lang="pug">
.cart-menu
  h2.u-sr-only cart menu
  .cart-menu-arrow
  ul.cart-menu-list
    li.cart-menu-item(v-for="i in 3")
      .cart-menu-image
        img(src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=air-jordan-design-footwear-1598505.jpg&fm=jpg" alt="product")
      .cart-menu-info
        h3.cart-menu-title Lorem ipsum dolor sit amet Lore
        h4.cart-menu-price $10
  .cart-menu-footer
    .cart-menu-total
      small Total:  
      strong $150
    AppButton(state="primary" block) Checkout
</template>

<script>
export default {
  name: 'Cart-Menu'
};
</script>

<style lang="stylus">
.cart-menu
  position: absolute
  top: 50px
  right: -20px
  z-index: 10
  padding: 10px
  width: 300px
  border-radius: 4px
  background-color: $white
  box-shadow: 0 1px 20px alpha($dark, 20%)

.cart-menu-arrow
  position: absolute
  top: -5px
  right: 35px
  width: 10px
  height: 10px
  border-radius: 0 3px 0 0
  background-color: $white
  box-shadow: 0 -12px 20px alpha($dark, 20%)
  transform: rotate(45deg)

.cart-menu-list
  display: flex
  flex-direction: column
  margin: 0
  padding: 0
  list-style-type: none

.cart-menu-title
  margin: 0.5em 0
  white-space: initial
  font-size: 14px

.cart-menu-price
  margin: 0.3em 0
  font-size: 14px

.cart-menu-item
  display: flex
  align-items: center

  &:not(:last-child)
    margin-bottom: 10px

.cart-menu-image
  flex: 1 0
  padding: 10px

  img
    max-width: 100%

.cart-menu-info
  flex: 3 0
  padding: 5px

.cart-menu-footer
  display: flex
  flex-direction: column
  align-items: center
  padding: 20px 50px
  width: 100%
  border-top: 1px solid $gray
  marign-top: 20px

.cart-menu-total
  margin-bottom: 10px
</style>

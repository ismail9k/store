<template lang="pug">
.cart-menu
  h2.u-sr-only cart menu
  .cart-menu-arrow
  ul.cart-menu-list(v-if="cart.length")
    li.cart-menu-item(v-for="item in cart")
      .cart-menu-image
        img(:src="item.featuredPhoto" :alt="item.name")
      .cart-menu-info
        h3.cart-menu-title {{ item.name }}
        h4.cart-menu-price ${{ item.price * item.quantity }}
  .cart-menu-empty(v-else)
    img(src="@/assets/img/no-data.svg" alt="no data")
  .cart-menu-footer
    .cart-menu-total
      small Total:  
      strong ${{totalPrice}}
    AppButton(state="primary" block) Checkout
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Cart-Menu',
  computed: {
    ...mapState(['cart']),
    totalPrice() {
      return this.cart.reduce((subTotal, product) => {
        return subTotal + product.price * product.quantity;
      }, 0);
    }
  }
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
  overflow: auto
  margin: 0
  padding: 0
  max-height: 300px
  list-style-type: none

.cart-menu-empty
  display: flex
  justify-content: center
  align-items: center
  padding: 20px

  img
    max-width: 150px

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

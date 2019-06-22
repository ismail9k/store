<template lang="pug">
.product(:class="{'is-highlighted': highlight}")
  .product-image
    img(src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=air-jordan-design-footwear-1598505.jpg&fm=jpg" alt="product")
  .product-info
    h2.product-title Lorem ipsum dolor sit
    .product-rating
      StarRating(:rate="4.3")
      span 25
    p.product-description
      | Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laudantium, harum est nulla rem quo rerum perspiciatis alias vel! Voluptatum expedita harum amet accusantium eum corrupti totam voluptas aut laboriosam.
    .product-footer
      strong.product-price $1200
      AppButton(state="primary") ADD TO CART
</template>

<script>
import StarRating from './StarRating';

export default {
  name: 'AppProduct',
  props: {
    data: {
      type: Object,
      required: true
    },
    highlight: {
      type: Boolean,
      default: false
    }
  },
  components: {
    StarRating
  }
};
</script>

<style lang="stylus">
.product
  display: flex
  flex-direction: column
  padding: 20px
  width: 100%
  border-radius: 4px
  box-shadow: 0 1px 10px alpha($dark, 20%)

  &.is-highlighted
    flex-direction: row
    grid-column: span 2

.product-image
  display: flex
  flex: 1
  justify-content: center
  align-items: center
  padding: 5px

  .is-highlighted &
    flex: 2

  img
    display: block
    margin: auto
    width: 90%
    height: 90%
    object-fit: contain

.product-title
  margin: 0.5em 0
  font-size: 16px

.product-rating
  marign: 5px 0

  span
    margin: 0 10px
    color: $slategray
    vertical-align: middle
    font-size: 12px
    line-height: 2em
    line-height: 15px

.product-info
  .is-highlighted &
    display: flex
    flex: 3
    flex-direction: column
    align-items: flex-start

.product-description
  display: none
  margin-top: 30px
  color: $slategray

  .is-highlighted &
    display: block
    flex: 1

.product-footer
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: 20px
  padding-top: 20px
  width: 100%
  border-top: 1px solid $gray
</style>

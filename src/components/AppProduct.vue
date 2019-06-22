<template lang="pug">
.product(
  :class="{'is-featured': featured}"
  @click="$emit('showDetails', data)"
  )
  .product-image
    img(:src="data.featuredPhoto" :alt="data.name")
  .product-info
    h2.product-title {{ data.name }}
    .product-rating
      StarRating(:rate="data.rate")
      span {{ data.reviewCount }}
    p.product-description
      |{{ data.description }}
    .product-footer
      strong.product-price ${{ data.price }}
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
    featured: {
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

  &.is-featured
    flex-direction: row
    grid-column: span 2

.product-image
  display: flex
  flex: 1
  justify-content: center
  align-items: center
  padding: 5px

  .is-featured &
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
  .is-featured &
    display: flex
    flex: 3
    flex-direction: column
    align-items: flex-start

.product-description
  display: none
  margin-top: 30px
  color: $slategray

  .is-featured &
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

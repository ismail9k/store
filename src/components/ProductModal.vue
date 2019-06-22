<template lang="pug">
.product-modal-wrapper
  .product-modal(class="row")
    .product-modal-gallery(class="column is-desktop-6")
      ProductGallery(:images="images")

    .product-modal-info(class="column is-desktop-6")

      h3.product-modal-title lorem olor sit amet consectetu
      h4.product-modal-subtitle REF 122/33

      .product-modal-row(class="row is-middle")
        div(class="column is-3")
          strong.product-modal-price $150
        div(class="column is-4")
          ProductCounter(v-model="quantity")
        div(class="column is-5")
          AppButton(state="primary" block) ADD TO CART

      .product-modal-row(class="row is-middle")
        div(class="column is-3")
          span Colors:
        div(class="column is-9")
          label.product-modal-color(
            v-for="color in ['blue', 'yellow', 'red', 'green']"
            :class="[`is-${color}`, {'is-active': selectedColor === color}]"
            :key="color"
          )
            input(
              type="radio"
              name="productColor"
              v-model="selectedColor"
              :value="color"
            )

      .product-modal-row(class="row is-middle")
        div(class="column is-3")
          span Select size:
        div(class="column is-9")
          label.product-modal-size(
            v-for="size in ['37', '38', '39', '40', '41']"
            :class="[`is-${size}`, {'is-active': selectedSize === size}]"
            :key="size"
          )
            span {{ size }}
            input(
              type="radio"
              name="productSize"
              v-model="selectedSize"
              :value="size"
            )

      .product-modal-tabs
        ul.tabs
          li(
            v-for="tab in ['description', 'shipping', 'return']"
            :class="{ 'is-active': currentTab === tab }"
          )
            a(@click="currentTab = tab") {{ tab }}
        .product-modal-description
          p(v-show="currentTab === 'description'")
            | Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed saepe est iure aut error ducimus. Quo, expedita possimus, eos quia debitis unde aliquam perferendis, ex quibusdam labore minima dignissimos.
            | Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed saepe est iure aut error ducimus. Quo, expedita possimus, eos quia debitis unde aliquam perferendis, ex quibusdam labore minima dignissimos.
          p(v-show="currentTab === 'shipping'")
            | Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed saepe est iure aut error
          p(v-show="currentTab === 'return'")
            | Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed saepe est iure aut error 
            | Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed saepe est iure aut error 
</template>

<script>
import ProductGallery from './ProductGallery';
import ProductCounter from './ProductCounter';

export default {
  name: 'ProductModal',
  data() {
    return {
      quantity: 1,
      currentTab: 'description',
      selectedColor: '',
      selectedSize: '',
      images: [
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=air-jordan-design-footwear-1598505.jpg&fm=jpg',
        'https://images.pexels.com/photos/35674/shoes-leather-pair-fashion.jpg?cs=srgb&dl=footwear-pair-of-shoes-35674.jpg&fm=jpg',
        'https://images.pexels.com/photos/35191/shoes-leather-single-fashion.jpg?cs=srgb&dl=brown-casual-comfort-35191.jpg&fm=jpg',
        'https://images.pexels.com/photos/54334/running-shoe-shoe-brooks-highly-functional-54334.jpeg?cs=srgb&dl=footwear-shoe-sneakers-54334.jpg&fm=jpg'
      ]
    };
  },
  components: {
    ProductGallery,
    ProductCounter
  }
};
</script>

<style lang="stylus">
.product-modal-wrapper
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 20
  display: flex
  justify-content: center
  align-items: center
  background-color: alpha($black, 80%)

.product-modal
  margin-bottom: 50px
  padding: 20px
  min-height: 400px
  max-width: 1000px
  width: 100%
  border-radius: 4px
  background-color: $white
  box-shadow: 0 1px 20px alpha($dark, 10%)

.product-modal-title
  margin: 0 0 0.5em
  font-weight: bold
  font-size: 20px

.product-modal-subtitle
  margin-bottom: 4em
  color: $slategray
  font-size: 12px

.product-modal-description
  padding: 20px 0
  color: $slategray

.product-modal-row
  margin: 10px 0

.product-modal-color
  display: inline-flex
  justify-content: center
  align-items: center
  margin: 0 5px
  width: 28px
  height: 28px
  border: 1px solid $gray
  border-radius: 50%
  cursor: pointer

  &:after
    display: block
    width: 20px
    height: 20px
    border-radius: 50%
    content: ''

  &.is-active
    border-color: $primary

  &.is-blue:after
    background-color: $blue

  &.is-yellow:after
    background-color: $yellow

  &.is-red:after
    background-color: $red

  &.is-green:after
    background-color: $green

  input
    display: none

.product-modal-tabs
  margin-top: 50px

.product-modal-size
  display: inline-flex
  justify-content: center
  align-items: center
  margin: 0 5px
  width: 28px
  height: 28px
  border-radius: 50%
  background-color: $gray
  color: $white
  font-size: 12px
  cursor: pointer

  &.is-active
    background-color: $primary

  input
    display: none
</style>

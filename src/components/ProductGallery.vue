<template lang="pug">
.gallery
  .gallery-view
    AppImg(:src="images[currentIndex]" alt="image")
  .gallery-list
    .gallery-item(v-for="(item, indx) in images" @click="currentIndex = indx")
      AppImg(:src="item" alt="image")
</template>

<script>
export default {
  name: 'ProductGallery',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  }
};
</script>

<style lang="stylus">
.gallery
  display: flex
  flex-direction: column
  align-items: center
  padding: 20px

  +desktop()
    flex-direction: row

.gallery-view
  flex: 1
  padding: 0 20px

  img
    max-width: 100%

.gallery-list
  display: flex
  flex-direction: row

  +desktop()
    flex-direction: column

.gallery-item
  margin-right: 10px
  margin-left: 10px
  padding: 1px
  width: 60px
  height: 60px
  border: 1px solid $gray
  border-radius: 4px
  background-color: $white
  cursor: pointer

  +desktop()
    margin: 0 0 10px

  img
    width: 100%
    height: 100%
    object-fit: cover
</style>

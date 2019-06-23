<template lang="pug">
.app-image(
  :class="{ 'is-loading': isLoading }"
)
  img(
    ref="img"
    v-if="src"
    data-loading="loading"
    :data-src="src"
    :alt="alt"
    src="@/assets/img/placeholder.jpg"
    @load="handleLoaded"
  )

</template>

<script>
export default {
  name: 'AppImg',
  props: ['src', 'alt'],
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    this.observeImage();
  },
  beforeDestroy() {
    if (this.$refs.img) {
      this.$store.commit('unobserve', this.$refs.img);
    }
  },
  watch: {
    src() {
      this.$nextTick(this.observeImage);
    }
  },
  methods: {
    handleLoaded() {
      // to handle when image loaded
      this.isLoading = false;
      this.$nextTick(() => {
        this.$emit('load', {
          el: this.$refs.img
        });
      });
    },
    observeImage() {
      if (this.$refs.img) {
        this.$store.commit('observe', this.$refs.img);
      }
    }
  }
};
</script>

<style lang="stylus">
.app-image
  position: relative
  width: 100%
  height: 100%

  &::after
    position: absolute
    top: 0
    left: 0
    display: block
    width: 100%
    height: 100%
    background: linear-gradient(to right, alpha($gray, 0) 0, $gray 30%, $gray 70%, alpha($gray, 0) 100%)
    background-color: $light
    background-size: 200px 100%
    background-repeat: no-repeat
    content: ''
    opacity: 0
    transition: 0.2s ease
    animation: loader-shimmer 1.5s linear infinite forwards

  img
    width: 100%
    opacity: 1
    transition: opacity 0.6s ease

  &.is-loading::after
    opacity: 1

    img
      position: absolute
      top: 0
      left: 0
      opacity: 0
</style>

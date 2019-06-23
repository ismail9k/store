<template>
  <svg id="starRating" class="stars-rating" preserveAspectRatio="xMidYMin meet" viewBox="0 0 130 24">
    <defs>
      <clipPath id="clip-path">
        <path
          id="mask"
          class="stars-mask"
          d="M12.09,20l-6.66,3.5a.5.5,0,0,1-.73-.53L6,15.52a.49.49,0,0,0-.15-.44L.43,9.82A.51.51,0,0,1,.71,9L8.16,7.88a.49.49,0,0,0,.38-.27L11.87.86a.5.5,0,0,1,.9,0L16.1,7.61a.5.5,0,0,0,.38.27L23.93,9a.51.51,0,0,1,.28.86l-5.39,5.26a.51.51,0,0,0-.15.44L20,22.94a.5.5,0,0,1-.73.53L12.56,20A.49.49,0,0,0,12.09,20Zm26.8,0,6.67,3.5a.5.5,0,0,0,.73-.53L45,15.52a.51.51,0,0,1,.15-.44l5.39-5.26A.51.51,0,0,0,50.27,9L42.82,7.88a.5.5,0,0,1-.38-.27L39.11.86a.5.5,0,0,0-.9,0L34.88,7.61a.49.49,0,0,1-.38.27L27.05,9a.51.51,0,0,0-.28.86l5.39,5.26a.49.49,0,0,1,.15.44L31,22.94a.51.51,0,0,0,.74.53L38.43,20A.47.47,0,0,1,38.89,20Zm26.34,0,6.67,3.5a.51.51,0,0,0,.73-.53l-1.28-7.42a.51.51,0,0,1,.15-.44l5.39-5.26A.51.51,0,0,0,76.61,9L69.16,7.88a.5.5,0,0,1-.38-.27L65.45.86a.5.5,0,0,0-.9,0L61.22,7.61a.5.5,0,0,1-.38.27L53.39,9a.51.51,0,0,0-.28.86l5.39,5.26a.51.51,0,0,1,.15.44l-1.28,7.42a.51.51,0,0,0,.73.53L64.77,20A.47.47,0,0,1,65.23,20Zm26.34,0,6.66,3.5a.51.51,0,0,0,.74-.53l-1.28-7.42a.49.49,0,0,1,.15-.44l5.39-5.26A.51.51,0,0,0,103,9L95.5,7.88a.49.49,0,0,1-.38-.27L91.79.86a.5.5,0,0,0-.9,0L87.56,7.61a.5.5,0,0,1-.38.27L79.73,9a.51.51,0,0,0-.28.86l5.39,5.26a.51.51,0,0,1,.15.44l-1.28,7.42a.5.5,0,0,0,.73.53L91.11,20A.47.47,0,0,1,91.57,20Zm26.34,0,6.66,3.5a.5.5,0,0,0,.73-.53L124,15.52a.49.49,0,0,1,.15-.44l5.39-5.26a.51.51,0,0,0-.28-.86l-7.45-1.08a.49.49,0,0,1-.38-.27L118.13.86a.5.5,0,0,0-.9,0L113.9,7.61a.5.5,0,0,1-.38.27L106.07,9a.51.51,0,0,0-.28.86l5.39,5.26a.51.51,0,0,1,.15.44l-1.28,7.42a.5.5,0,0,0,.73.53l6.66-3.5A.49.49,0,0,1,117.91,20Z"
        ></path>
      </clipPath>
      <symbol id="star" data-name="star" viewBox="0 0 24.08 22.95">
        <path
          class="stars-item"
          :class="{ 'is-gray': rate === 0 }"
          d="M11.81,19.39l-6.67,3.5a.5.5,0,0,1-.73-.53l1.28-7.42a.51.51,0,0,0-.15-.44L.15,9.25a.5.5,0,0,1,.28-.86L7.88,7.3A.5.5,0,0,0,8.26,7L11.59.28a.5.5,0,0,1,.9,0L15.82,7a.49.49,0,0,0,.38.27l7.45,1.09a.5.5,0,0,1,.28.86L18.54,14.5a.51.51,0,0,0-.15.44l1.28,7.42a.51.51,0,0,1-.74.53l-6.66-3.5A.47.47,0,0,0,11.81,19.39Z"
        ></path>
      </symbol>
    </defs>
    <title>star rating</title>
    <g id="stars">
      <use width="24.08" height="22.95" transform="translate(0.28 0.58)" xlink:href="#star"></use>
      <use width="24.08" height="22.95" transform="translate(26.62 0.58)" xlink:href="#star"></use>
      <use width="24.08" height="22.95" transform="translate(52.96 0.58)" xlink:href="#star"></use>
      <use width="24.08" height="22.95" transform="translate(79.3 0.58)" xlink:href="#star"></use>
      <use width="24.08" height="22.95" transform="translate(105.64 0.58)" xlink:href="#star"></use>
    </g>
    <g class="stars-mask">
      <rect id="fill" class="stars-fill" :width="(rate / 5) * 130" height="24"></rect>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rate: {
      type: [String, Number],
      default: 0
    }
  }
};
</script>

<style lang="stylus">
.stars-rating
  height: 15px

.stars-mask
  fill: none

.stars-item
  stroke: $yellow
  fill: none

  &.is-gray
    fill: $gray
    stroke: $gray

.stars-mask
  clip-path: url('#clip-path')

.stars-fill
  fill: $yellow
</style>

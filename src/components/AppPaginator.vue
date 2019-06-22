<template lang="pug">
nav.pagination-nav(aria-label="Page navigation" v-show="totalPages > 1")
  ul.pagination
    li
      a.pagination-prev(
        href=""
        @click.prevent="paginator(value - 1)"
        aria-label="Previous"
        :class="{'is-disabled': value === 1}"
        :disabled="value === 1"
      )
        AppIcon(name="left")

    li(v-for="n in totalPages")
      a.pagination-item(
        :href="`#${n}`"
        v-if="inRange(n) || n <= 2  || n >= totalPages - 1"
        @click.prevent="paginator(n)"
        :class="{ 'is-active': value === n }"
      ) {{ n }}
      a.pagination-item(
        :href="`#${n}`"
        v-else-if=" n - 1 === upper  || n + 1 === lower"
        :class="{ 'is-active': value === n }"
      ) ...

    li
      a.pagination-next(
        href=""
        @click.prevent="paginator(value + 1)"
        aria-label="Next"
        :class="{'is-disabled': value === totalPages}"
        :disabled="value === totalPages"
      )
        AppIcon(name="right")

</template>

<script>
export default {
  name: 'AppPaginator',
  props: {
    totalPages: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      pages: [],
      lower: 0,
      upper: 0
    };
  },
  updated() {
    this.updateRanges();
  },
  created() {
    this.updateRanges();
  },
  methods: {
    updateRanges() {
      this.lower = Math.max(this.value - 2, 1);
      this.upper = Math.min(this.value + 2, this.totalPages);
    },
    inRange(n) {
      return n <= this.upper && n >= this.lower;
    },
    paginator(page) {
      this.$emit('input', page);
    }
  }
};
</script>

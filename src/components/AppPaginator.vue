<template lang="pug">
nav.pagination-nav(aria-label="Page navigation" v-show="totalPages > 1")
  ul.pagination
    li(v-if="currentPage !== 1")
      a.pagination-prev(
        href=""
        @click.prevent="paginator(currentPage - 1)"
        aria-label="Previous"
      )
        AppIcon(name="left")

    li(v-for="n in totalPages")
      a.pagination-item(
        :href="`#${n}`"
        v-if="inRange(n) || n <= 2  || n >= totalPages - 1"
        @click.prevent="paginator(n)"
        :class="{ 'is-active': currentPage === n }"
      ) {{ n }}
      a.pagination-item(
        :href="`#${n}`"
        v-else-if=" n - 1 === upper  || n + 1 === lower"
        :class="{ 'is-active': currentPage === n }"
      ) ...

    li(v-if="currentPage !== totalPages")
      a.pagination-next(
        href=""
        @click.prevent="paginator(currentPage + 1)"
        aria-label="Next"
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
    currentPage: {
      type: Number,
      default: 0
    },
    paginator: {
      default: null
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
      this.lower = Math.max(this.currentPage - 2, 1);
      this.upper = Math.min(this.currentPage + 2, this.totalPages);
    },
    inRange(n) {
      return n <= this.upper && n >= this.lower;
    }
  }
};
</script>

<template lang="pug">
.counter
  button.counter-control(@click="decrease") -
  input.counter-input(
    typue="number"
    ref="input"
    :value="value"
    @input="update($event.target.value)"
  )
  button.counter-control(@click="increase") +
</template>

<script>
export default {
  name: 'ProductCounter',
  props: {
    value: {
      type: Number
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    },
    step: {
      type: Number,
      default: 1
    }
  },
  methods: {
    increase() {
      this.update(this.value + this.step);
    },
    decrease() {
      this.update(this.value - this.step);
    },
    update(val) {
      const normalizedValue = this.getValueInRange(val);
      this.$refs.input.value = normalizedValue;
      this.$emit('input', normalizedValue);
    },
    getValueInRange(val) {
      return Math.min(Math.max(val, this.min), this.max);
    }
  }
};
</script>

<style lang="stylus">
.counter
  display: flex
  overflow: hidden
  border: 1px solid $gray
  border-radius: 4px
  background-color: $white

.counter-control
  padding: 5px 10px
  width: 40px
  border: 0
  border-radius: 4px
  background-color: $white
  font-size: 20px
  cursor: pointer
  appearance: none

  &:hover
    background-color: $blue
    color: $white

.counter-input
  margin: 0 1px
  width: 100%
  border-width: 0 1px 0 1px
  border-style: solid
  border-color: $gray
  text-align: center
</style>

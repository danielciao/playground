<template lang="pug">
v-btn(
  @click="onClick()"
  :color="color"
  large
  block
  dark
).option
  span.id {{id}}
  span.text {{htmlDecode(text)}}
</template>

<script>
import { htmlDecode } from '../../lib/formatter';

export default {
  name: 'quiz-option',
  props: {
    id: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    htmlDecode,
    onClick() {
      this.$emit('click', this.id);
    }
  }
};
</script>

<style lang="sass" scoped>
.option
  height: 100%
  padding: 0
  text-transform: none

  .id
    display: inline-block
    font-size: 36px
    min-width: 80px
    
  .text
    width: 100%
    padding: 10px 10px 10px 0
    font-size: 20px
    text-align: left
    white-space: normal
</style>

<template lang="pug">
v-btn(
  @click="onClick()"
  :color="color"
  large
  block
).option
  span.id {{id}}
  span.text {{htmlDecode(text)}}
</template>

<script>
import { htmlDecode } from '../../lib/formatter';

export default {
  name: 'quiz-option',
  props: ['id', 'text', 'color'],
  methods: {
    htmlDecode,
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="sass">
.option.option
  height: auto
  color: white
  padding: 0
  text-transform: none

  .v-btn__content
    justify-content: flex-start
    white-space: normal

    .id
      display: inline-block
      font-size: 36px
      min-width: 80px
      
    .text
      text-align: left
      padding: 10px 10px 10px 0
      font-size: 20px
</style>

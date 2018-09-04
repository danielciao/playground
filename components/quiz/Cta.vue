<template lang="pug">
v-layout(
  align-center
  column
  white--text
).cta
  .display-3.center-text {{heading}}
  v-btn(
    @click="onClick"
    :color="color"
    fab
    large
    dark
  )
    v-icon(
      large
    ) {{icon}}
</template>

<script>
export default {
  name: 'quiz-cta',
  props: {
    heading: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="sass" scoped>
.cta
  padding: 20px
  z-index: 2
  
.center-text
  text-align: center
</style>

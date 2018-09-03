<template lang="pug">
  v-layout(
    class="center-contents"
    justify-center 
    align-center
  )  
    v-btn(
      @click="getQuestions()"
      color="purple"
      fab
      large
      dark
    )
      v-icon(
        large
      ) play_arrow
    vue-particles(
      color="#fff"
      :hoverEffect="false"
      :clickEffect="false"
    )
</template>

<script>
export default {
  methods: {
    async getQuestions() {
      try {
        await this.$store.dispatch('quiz/GET_QUESTIONS');
        this.$router.push({ path: '/quiz/game' });
      } catch (err) {
        console.error({ err }); //eslint-disable-line no-console
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.center-contents > *
  position: absolute

.center-contents > button
  z-index: 2;
</style>

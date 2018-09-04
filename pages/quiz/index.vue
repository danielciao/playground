<template lang="pug">
  v-layout(
    class="center-contents"
    justify-center 
    align-center
  ) 
    quiz-cta(
      @click="getQuestions()"
      heading="Start Quiz!"
      color="purple"
      icon="play_arrow"
    )
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

.center-contents .start-screen
  z-index: 2;
</style>

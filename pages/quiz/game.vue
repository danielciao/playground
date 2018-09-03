<template lang="pug">
  v-layout(
    class="center-contents"
    justify-center 
    align-center
  )
    quiz-question(
      @getNextQuestion="getQuestion()"
      :question="question"
    )
</template>

<script>
export default {
  data: function() {
    return {
      questions: this.$store.state.quiz.questions,
      question: {},
      result: {
        corrects: 0,
        incorrects: 0
      }
    };
  },
  methods: {
    getQuestion: function() {
      this.question = this.questions[this.$store.state.quiz.currentIndex];
      // const { questions, currentIndex } = this.$store.state.quiz;

      // if (questions.length <= currentIndex + 1) {
      //   this.question = this.questions[this.$store.state.quiz.currentIndex];
      // }
    }
  },
  created() {
    this.getQuestion();
  }
};
</script>

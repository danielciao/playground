<template lang="pug">
  v-layout(
    class="center-contents"
    justify-center 
    align-center
  )
    quiz-question(
      v-if="$store.state.quiz.started"
      @submit="onSubmit"
      :question="question"
    )
    quiz-cta(
      v-else-if="$store.state.quiz.ended"
      @click="replay()"
      :heading="score"
      color="orange"
      icon="replay"
    )
</template>

<script>
export default {
  data() {
    return {
      questions: this.$store.state.quiz.questions,
      question: {},
      answers: {
        corrects: 0,
        incorrects: 0
      }
    };
  },

  computed: {
    score() {
      const { correctAnswers, incorrectAnswers } = this.$store.state.quiz.results;
      return `Your Score: ${correctAnswers}/${correctAnswers + incorrectAnswers}`;
    }
  },

  methods: {
    onSubmit(correct) {
      this.answers.corrects += correct && 1;
      this.answers.incorrects += !correct && 1;

      this.getQuestion();
    },

    getQuestion() {
      const { questions, currentIndex } = this.$store.state.quiz;

      if (currentIndex < questions.length) {
        this.question = questions[currentIndex];
      } else {
        this.$store.commit('quiz/END', this.answers);
      }
    },

    replay() {
      this.$store.commit('quiz/RESTART');
      this.$router.push({ name: 'quiz' });
    }
  },

  middleware: 'quiz',

  created() {
    this.getQuestion();
  }
};
</script>

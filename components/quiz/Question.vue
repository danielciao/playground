<template lang="pug">
  v-flex(xs12 sm8)
    v-card
      v-layout
        v-flex(xs10)
          v-card-title
            .headline {{htmlDecode(question && question.question)}}
        v-flex(xs2) countdown
      v-divider(dark)
      v-card-actions.multipleChoice
        v-flex(xs12 sm6).optionWrapper
          quiz-option(
            id="A" 
            :text="question.incorrect_answers[0]"
            color="#2980B9"
            @click="nextQuestion()"
          )
        v-flex(xs12 sm6).optionWrapper
          quiz-option(
            id="B" 
            :text="question.incorrect_answers[1]"
            color="#D1B358"
            @click="nextQuestion()"
          )
        v-flex(xs12 sm6).optionWrapper
          quiz-option(
            id="C" 
            :text="question.correct_answer"
            color="#669644"
            @click="nextQuestion()"
          )
        v-flex(xs12 sm6).optionWrapper
          quiz-option(
            id="D" 
            :text="question.incorrect_answers[2]"
            color="#BD3E31"
            @click="nextQuestion()"
          )
</template>

<script>
import { htmlDecode } from '../../lib/formatter';

export default {
  name: 'quiz-question',
  props: ['question'],
  methods: {
    htmlDecode,
    nextQuestion: function() {
      this.$store.commit('quiz/NEXT_QUESTION');
      this.$emit('getNextQuestion');
    }
  }
};
</script>

<style lang="sass">
.multipleChoice
  flex-wrap: wrap

.optionWrapper
  padding: 5px
</style>

<template lang="pug">
  v-flex(xs12 sm8)
    v-card
      v-layout
        v-flex(xs10)
          v-card-title
            .headline {{htmlDecode(question && question.question)}}
        v-flex(xs2) countdown
      v-divider(dark)
      v-card-actions
        v-layout(row wrap)
          v-flex(xs12 sm6 v-for="option in options" :key="option.id").optionWrapper
            quiz-option(
              :id="option.id" 
              :text="option.text"
              :color="option.color"
              @click="onSubmit(option.correct)"
            )       
</template>

<script>
import { htmlDecode } from '../../lib/formatter';

export default {
  name: 'quiz-question',
  props: ['question'],
  computed: {
    options() {
      return [
        {
          id: 'A',
          text: this.question.incorrect_answers[0],
          color: '#2980B9',
          correct: false
        },
        {
          id: 'B',
          text: this.question.incorrect_answers[1],
          color: '#D1B358',
          correct: false
        },
        {
          id: 'C',
          text: this.question.correct_answer,
          color: '#669644',
          correct: true
        },
        {
          id: 'D',
          text: this.question.incorrect_answers[2],
          color: '#BD3E31',
          correct: false
        }
      ];
    }
  },
  methods: {
    htmlDecode,
    onSubmit(correct) {
      this.$store.commit('quiz/NEXT_QUESTION');
      this.$emit('submit', correct);
    }
  }
};
</script>

<style lang="sass">
.multipleChoice
  display: flex
  flex-wrap: wrap

.optionWrapper
  padding: 5px
</style>

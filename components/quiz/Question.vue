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
import { shuffle } from '../../lib/utils';

const optionAttrs = [
  { id: 'A', color: '#2980B9' },
  { id: 'B', color: '#D1B358' },
  { id: 'C', color: '#669644' },
  { id: 'D', color: '#BD3E31' }
];

export default {
  name: 'quiz-question',

  props: ['question'],

  computed: {
    options() {
      const initialSet = [
        {
          text: this.question.correct_answer,
          correct: true
        }
      ];

      this.question.incorrect_answers.forEach(answer => {
        initialSet.push({
          text: answer,
          correct: false
        });
      });

      return shuffle(initialSet).map((option, index) => ({
        ...optionAttrs[index],
        ...option
      }));
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

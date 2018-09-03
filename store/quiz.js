export const state = () => ({
  results: {
    correctAnswers: 0,
    incorrectAnswers: 0
  },
  questions: [],
  currentIndex: 0,
  started: false,
  ended: false
});

export const mutations = {
  START(state) {
    state.started = true;
    state.ended = false;
  },
  END(state, answers) {
    state.started = false;
    state.ended = true;

    state.results.correctAnswers = answers.corrects;
    state.results.incorrectAnswers = answers.incorrects;
  },
  RESTART(state) {
    state.started = false;
    state.ended = false;
    state.currentIndex = 0;
  },
  GET_QUESTIONS(state, questions) {
    state.questions = questions;
  },
  NEXT_QUESTION(state) {
    state.currentIndex += 1;
  }
};

export const actions = {
  async GET_QUESTIONS({ commit }) {
    const { response_code, results } = await this.$axios.$get(
      'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple'
    );

    if (response_code === 0) {
      console.warn('Successful Request', { results }); //eslint-disable-line no-console
      commit('GET_QUESTIONS', results);
      commit('START');
    } else {
      throw Error('Unexpected server response');
    }
  }
};

export const state = () => ({
  results: {
    correctAnswers: 0,
    incorrectAnswers: 0
  },
  questions: [],
  currentIndex: 0
});

export const mutations = {
  GET_QUESTIONS(state, questions) {
    state.questions = questions;
  },
  NEXT_QUESTION(state) {
    state.currentIndex += 1;
  },
  SET_RESULTS(state, answers) {
    state.results.correctAnswers = answers.corrects;
    state.results.incorrectAnswers = answers.incorrects;
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
    } else {
      throw Error('Unexpected server response');
    }
  }
};

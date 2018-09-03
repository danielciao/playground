export default function({ store, redirect }) {
  if (!store.state.quiz.started) {
    return redirect('/quiz');
  }
}

import Vue from 'vue';

import NuxtLogo from '~/components/NuxtLogo';

import QuizQuestion from '~/components/quiz/Question';
import QuizOption from '~/components/quiz/Option';
import QuizCta from '~/components/quiz/Cta';

Vue.component(NuxtLogo.name, NuxtLogo);

Vue.component(QuizQuestion.name, QuizQuestion);
Vue.component(QuizOption.name, QuizOption);
Vue.component(QuizCta.name, QuizCta);

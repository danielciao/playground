import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Cta from './Cta';

storiesOf('CTA', module)
  .add('Start Game', () => ({
    components: {
      [Cta.name]: Cta
    },
    template: `
    <div style="background: #e73C7e">
      <quiz-cta
        @click="action"
        heading="Start Quiz!"
        color="purple"
        icon="play_arrow"
      />
    </div>
    `,
    methods: {
      action: action('clicked')
    }
  }))
  .add('Replay Game', () => ({
    components: {
      [Cta.name]: Cta
    },
    template: `
    <div style="background: #ee7752">
      <quiz-cta
        @click="action"
        heading="Your Score: 8/10"
        color="orange"
        icon="replay"
      />
    </div>
    `,
    methods: {
      action: action('clicked')
    }
  }));

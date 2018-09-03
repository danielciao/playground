import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Option from './Option';

storiesOf('Option', module).add('Quiz Option', () => ({
  components: {
    [Option.name]: Option
  },
  template: `
    <quiz-option
      id="A" 
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      color="#669644"
      @click="action"
    />
  `,
  methods: {
    action: action('clicked')
  }
}));

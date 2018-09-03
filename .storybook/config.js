import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import './styles.css';

Vue.use(Vuetify);

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

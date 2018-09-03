import Vue from 'vue';
import VueParticles from 'vue-particles';
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VImg,
  VGrid,
  VDivider,
  VToolbar
} from 'vuetify';

Vue.use(VueParticles);
Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VImg,
    VGrid,
    VDivider,
    VToolbar
  }
});

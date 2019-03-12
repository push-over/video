import Vue from 'vue';
import Vuex from 'vuex';
import header from './modules/header/index';
import home from './modules/home/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    header,
    home
  }
});
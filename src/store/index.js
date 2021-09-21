import Vue from 'vue'
import Vuex from 'vuex'

import Listas from './modules/listas';
import User from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Listas,
    User,
  }
})

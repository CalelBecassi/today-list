import Vue from 'vue'
import Vuex from 'vuex'

import Listas from './modules/listas';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Listas,
  }
})

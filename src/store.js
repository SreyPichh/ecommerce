import Vue from 'vue'
import Vuex from 'vuex'

// store
import { Modal } from './stores/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal: Modal
  },
  state: {},
  mutations: {},
  actions: {}
})

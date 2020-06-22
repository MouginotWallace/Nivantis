import Vue from 'vue'
import Vuex from 'vuex'
import getters from "src/store/getters";
import state from "src/store/state";
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

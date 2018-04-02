import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    list: [1, 2, 3, 4, 5, 5, 4, 3, 6, 7]
  },
  mutations: {
    add(state) {
      state.count++
    },
    add2: state => state.count += 2
  }
})

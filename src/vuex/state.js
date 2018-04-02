export default {
  state: {
    count: 0
  },

  mutations: {

    add(state) {
      state.count++;
      console.log('add')
    }
  }
}

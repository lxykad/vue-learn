import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    list: [1, 2, 7, 3, 4, 5, 5, 4, 3, 6, 7],
    name: 'xlg'
  },
  /*
  * mutations 必须是同步函数
  * */
  mutations: {
    add(state, n) {
      state.count += n
    },
    add2: state => state.count += 2,
    setList: state => state.list.push(20),
    setName: state => state.name = state.count
  },
  getters: {
    // 去重并排序 返回新数组，老数组保持不变
    sortList(state) {
      return state.list.filter((el, index, array) => array.indexOf(el) === index).sort()
    }
  },
  /*
  * actions 提交的是mutation 而且可以包含任意异步操作
  * */
  actions: {
    set(store) {
     /* setTimeout(() => {
        store.commit('setName')
      }, 2000)*/

     /*
     * 返回promis
     * */
     return new Promise((resolve,reject)=>{
       setTimeout(() => {
         store.commit('setName')
         resolve()
       }, 2000)
     })
    }
  }
})

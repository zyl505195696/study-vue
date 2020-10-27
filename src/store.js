import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
     add(state,step){
       state.count+=step
     }
  },
  actions: {
     yiadd(context,step){
       setTimeout(() => {
         context.commit('add',step)
       }, 2000);
     }
  },
  getters:{
    showNum(state){
         return '最新的数据是'+state.count+'!'
    }
  }
})

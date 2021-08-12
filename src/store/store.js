import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state: {
    cartList: []
  },
  mutations: {
    addToCart(context,payload) {
      let oldProduct = null;
      for(let item of context.state.cartList){
        if(item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      // 判断oldProduct
      if(oldProduct) {
        oldProduct.count += 1 
      } else {
        payload.count = 1
        context.state.cartList.push(payload)
      }
      
    }
  }
})

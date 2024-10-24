import { createStore } from 'vuex'

export default createStore({
  state: {
    data:[
      {id:0, name:'홍길동', tel:'01039408962'}
    ]
  },
  getters: {
    total(state){
      return state.data.length;
    }
  },
  mutations: {
    join(state,d){
      state.data.push(d);
    }
  },
  actions: {
    actionJoin({commit}, action){
      switch(action.type){
        case 'insert': commit('join', action.d); break;        
      }      
    }
  },
  modules: {
  }
})

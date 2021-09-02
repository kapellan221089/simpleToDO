import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    currDo: {}
  },
  mutations: {
    addToDo (state, data) {
        state.todos.push(data)
    },
    setCurrDo (state, data) {
        state.currDo = data
    }
  }
})
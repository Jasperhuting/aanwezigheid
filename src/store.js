import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    names: {
      0: {
        id: 0, name: 'Jasper'
      },
      1: {
        id: 1, name: 'Joep'
      }
    },
    present: {
      0: {
        date: '2019-10-07',
        present: [0],
        not_present: [1]
      },
      1: {
        data: '2019-10-17',
        present: [1],
        not_present: [0]
      }
    }
  },
  getters: {
    names: state => {
      return state.names
    },
    present: state => {
      return state.present
    }
  },
  mutations: {

  },
  actions: {

  }
})

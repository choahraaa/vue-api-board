import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    boardList: []
  },
  getters: {
  },
  mutations: {
    set_boardList(state, boardList) {
      state.boardList = boardList
    }
  },
  actions: {
    search({commit}) {
      axios.get('/api/api-board')
          .then((response) => {
            commit('set_boardList', response.data);
          })
    }
  },
  modules: {
  }
})

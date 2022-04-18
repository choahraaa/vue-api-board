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
    search(context) {
      axios.get('/api/api-board')
          .then((response) => {
            context.commit('set_boardList', response.data);
          })
    }
  },
  modules: {
  }
})

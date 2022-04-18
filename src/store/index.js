import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    boardList: [],
    board: {}
  },
  getters: {
  },
  mutations: {
    setBoardList(state, boardList) {
      state.boardList = boardList
    },
    setBoard(state, board) {
      state.board = board
    }
  },
  actions: {
    search({commit}) {
      axios.get('/api/api-board')
          .then((response) => {
            commit('setBoardList', response.data);
          })
    },
    fetch({commit}, id) {
      axios.get(`/api/api-board/${id}`)
          .then((response) => {
            commit('setBoard', response.data);
          })
    }
  },
  modules: {
  }
})

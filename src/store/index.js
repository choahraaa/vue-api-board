import { createStore } from 'vuex'
import axios from "axios";
import router from "../router";

export default createStore({
  state: {
    boardList: [],
    board: {
      title: '',
      content:''
    }
  },
  getters: {
  },
  mutations: {
    setBoardList(state, boardList) {
      state.boardList = boardList
    },
    setBoard(state, board) {
      state.board = board
    },
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
    },
    update(context, id) {
      axios.put(`/api/api-board/${id}`
          , {
            title : this.state.board.title,
            content : this.state.board.content
          })
          .then(() => {
            alert('수정되었습니다.');
          })
    },
      insert() {
          axios.post('/api/api-board', {
              title: this.state.board.title,
              content: this.state.board.content
          })
              .then(() => {
                  alert('저장되었습니다.');
                  this.state.board.title = '';
                  this.state.board.content = '';
                  router.push('/');
              });
      },
  },
  modules: {
  }
})

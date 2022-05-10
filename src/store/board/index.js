import axios from "axios";
import router from "../../router";

export default {
    namespaced: true,
    state() {
        return {
            boardList: [],
            board: {
                title: '',
                content: ''
            },
            paging: {}
        }
    },
    getters: {
        startPage(state) {
            return state.paging.startPage;
        },
        nextPaging(state) {
            return state.paging.pagingStart + state.paging.pageSize;
        },
        prevPaging(state) {
            return state.paging.pagingStart - state.paging.pageSize;
        }
    },
    mutations: {
        setBoardList(state, boardList) {
            state.boardList = boardList
        },
        setBoard(state, board) {
            state.board = board
        },
        setPaging(state, paging) {
            state.paging = paging
        }
    },
    actions: {
        search({commit}, board) {
            let params = Object.assign({}, board);

            for (var i = 0; i < Object.keys(params).length; i++) {
                var key = Object.keys(params)[i];
                var data = params[key];
                if (data instanceof Object) {
                    for (var j = 0; j < Object.keys(params[key]).length; j++) {
                        params[key + '.' + Object.keys(params[key])[j]] = params[key][Object.keys(params[key])[j]]
                    }
                    params[key] = null
                }
            }


            // if (params.paging) {
            //     for (var i = 0; i < Object.keys(params.paging).length; i++) {
            //         params['paging.' + Object.keys(params.paging)[i]] = params.paging[Object.keys(params.paging)[i]]
            //     }
            //     params.paging = null
            // }

            axios.get('/api/api-board', {params})
                .then((response) => {
                    commit('setBoardList', response.data.search);
                    commit('setPaging', response.data.data.paging);
                    console.log(response.data.data.paging.pagingStart);
                    console.log(response.data.data.paging.lastPaging);
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
                    title: this.state.board.title,
                    content: this.state.board.content
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

        delete(context, id) {
            axios.delete(`/api/api-board/${id}`)
                .then(() => {
                    alert('삭제되었습니다.');
                    router.push('/');
                });

        }
    }
}

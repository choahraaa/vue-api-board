import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            user: {
                loginId: '',
                loginPw: ''
            }
        }
    },
    getters: {},
    mutations: {
        setLoginId(state, loginId) {
            state.user.loginId = loginId
        },
        setLoginPw(state, loginPw) {
            state.user.loginPw = loginPw
        }
    },
    actions: {
        login({state}) {
            axios.post('/api/login', {
                loginId: state.user.loginId,
                loginPw: state.user.loginPw
            }).then(() => {

            });
        }
    },
    modules: {}
}
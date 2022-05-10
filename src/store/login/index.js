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
        setLoginId(state, value) {
            state.user.loginId = value
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
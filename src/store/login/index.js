import axios from "axios";
import router from "@/router";

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
                alert("로그인에 성공하셨습니다.")
                router.push('/main');
            }).catch((error) => {
                alert(error.response.data.message)
                state.user.loginId = ''
                state.user.loginPw = ''
            });
        }
    },
    modules: {}
}
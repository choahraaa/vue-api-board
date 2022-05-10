import {createStore} from 'vuex'

import board from '@/store/board'
import login from '@/store/login'

console.log(board)

const store = createStore({
    modules: {login, board}
})

export default store
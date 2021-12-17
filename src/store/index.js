import { createStore } from 'vuex'

const store = createStore({
    state: {
        currentPage: 'Index'
    },
    mutations: {
        setCurrentPage(state, name) {
            state.currentPage = name
        }
    }
})

export default store
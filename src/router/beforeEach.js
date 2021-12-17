import store from '../store'

const beforeEach = (to, form, next) => {
    console.log(to)
    store.commit('setCurrentPage', to.name)
    if (to.meta && to.meta.needLogin && !window.localStorage.getItem('token')) {
        next({
            path: '/report/login'
        })
    } else {
        next()
    }
}

export default beforeEach
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    userID: null,
    token: '',
  },
  mutations: {
    setUser(state, {username, userID, token}) {
      state.user = username
      state.userID = userID
      state.token = token
    },
  },
  actions: {
    async login(context, credentials) {
      localStorage.setItem('credentials', JSON.stringify(credentials))
      context.commit('setUser', credentials)
    },
    setUserAction(context, { username, userID, token }) {
      context.commit('setUser', { username, userID, token })
    }
  },
  modules: {
  }
})

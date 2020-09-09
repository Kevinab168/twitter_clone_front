import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API_URL = 'http://localhost:8000'

export default new Vuex.Store({
  state: {
    user: null,
    userID: null,
    token: '',
    searchQuery: null
  },
  mutations: {
    setUser(state, {username, userID, token}) {
      state.user = username
      state.userID = userID
      state.token = token
    },
    setSearchQuery(state, query) {
      state.searchQuery = query
    }
  },
  actions: {
    async login(context, { username, password}) {
      const credentials = {
        username, password
      }
      const data = JSON.stringify(credentials)
      const response = await fetch(`${API_URL}/api/login/`, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      console.log(json)
      const token = json.token
      const userID = json.id
      const credtionals = {
        username, 
        userID,
        token
      }
      localStorage.setItem('credtionals', JSON.stringify(credtionals))
      context.commit('setUser', {username, userID, token})
    },
    setUserAction(context, { username, userID, token }) {
      context.commit('setUser', { username, userID, token })
    }
  },
  modules: {
  }
})

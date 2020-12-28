import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    NewPublishedGames: {},
    LoginEmail: '',
    BestSellers: {},
    RecentGames: {},
    Users: [],
    GameList: {},
    Games: '',
    ShoppingCart: []
  },
  actions: {
    addUser ({commit, state}, newUser) {
      setTimeout(function () {
        commit('pushUser', newUser)
      }, 1000)
    }
  },
  mutations: {
    pushUser (state, newUser) {
      state.Users.push(newUser)
    }
  }
})
export default store

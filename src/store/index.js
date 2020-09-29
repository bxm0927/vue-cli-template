/*
 * Vuex Store
 * https://github.com/vuejs/vuex
 */

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import todo from './modules/todo'

Vue.use(Vuex)

const isDev = process.env.NODE_ENV !== 'production'

const state = () => ({
  test: 'Hello Vuex!',
  count: 0,
})

const getters = {
  doubleCount(state) {
    return state.count * 2
  },
}

const mutations = {
  // 在大多数情况下，载荷(payload)应该是一个对象，
  // 这样可以包含多个字段，并且记录的 mutation 会更易读
  increase(state, { count }) {
    state.count += count
  },
  setCount(state, { count }) {
    state.count = count
  },
}

const actions = {
  fetchCount({ commit }, { count }) {
    setTimeout(() => {
      commit('setCount', { count })
    }, 2000)
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    todo,
  },

  // 在开发环境中启用严格模式和日志插件
  strict: isDev,
  plugins: isDev ? [createLogger()] : [],
})

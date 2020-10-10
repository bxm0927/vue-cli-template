/*
 * Vuex Store
 * https://github.com/vuejs/vuex
 */

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import global from './modules/global'
import todo from './modules/todo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    global,
    todo,
  },
  // 在非生产环境中启用严格模式和日志插件
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

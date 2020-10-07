/*
 * API 接口统一管理
 * @Author: xiaoming.bai
 * @Date: 2020-10-07 14:07:18
 * @Last Modified by:   xiaoming.bai
 * @Last Modified time: 2020-10-07 14:07:18
 */

import Vue from 'vue'
import article from './modules/article'
import account from './modules/account'
import classes from './modules/classes'

const api = {
  account,
  article,
  classes,
}

Vue.prototype.$api = api

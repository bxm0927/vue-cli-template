/**
 * 用户模块接口
 */

import axios from '@/assets/javascripts/axios'

const api = process.env.VUE_APP_CRM

export const getUserInfo = () => {
  return axios.get(`${api}/userInfo`)
}

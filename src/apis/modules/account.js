/**
 * 用户模块接口
 */

import axios from '../axios'
import config from '../../config'

const getUserInfo = () => {
  return axios.get(`${config.baseUrl.crm}/userInfo`)
}

export default {
  getUserInfo,
}

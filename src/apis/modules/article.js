/**
 * 文章模块接口
 */

import axios from '../axios'
import config from '../../config'

const getArticleList = () => {
  return axios.get(`${config.baseUrl.pms}/articleList`)
}

const getArticleDetail = (params) => {
  return axios.get(`${config.baseUrl.pms}/articleDetail`, { params })
}

export default {
  getArticleList,
  getArticleDetail,
}

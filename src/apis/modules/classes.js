/**
 * 课程模块接口
 */

import axios from '../axios'
import config from '../../config'

const api = config.baseUrl.imooc

/**
 * 获取课程列表
 */
const getClasses = (params) => {
  return axios.get(`${api}/getClasses.php`, { params })
}

/**
 * 获取课程大纲
 */
const getClassChapter = (params) => {
  return axios.get(`${api}/getClassChapter.php`, { params })
}

/**
 * 获取课程笔记
 */
const getClassNote = (params) => {
  return axios.get(`${api}/getClassNote.php`, { params })
}

export default {
  getClasses,
  getClassChapter,
  getClassNote,
}

/**
 * 课程模块接口
 */

import axios from '@/assets/javascripts/axios'

const api = process.env.VUE_APP_IMOOC

/**
 * 获取课程列表
 */
export const getClasses = (params) => {
  return axios.get(`${api}/getClasses.php`, { params })
}

/**
 * 获取课程大纲
 */
export const getClassChapter = (params) => {
  return axios.get(`${api}/getClassChapter.php`, { params })
}

/**
 * 获取课程笔记
 */
export const getClassNote = (params) => {
  return axios.get(`${api}/getClassNote.php`, { params })
}

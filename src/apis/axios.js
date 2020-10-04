/*
 * Axios Configuration
 * https://github.com/axios/axios
 */

import axios from 'axios'
// import { Message } from 'element-ui'

const instance = axios.create({
  timeout: 10000,
})

/**
 * Processing based on status code
 * @param {Number} status
 * @param {String} msg
 */
const errorHandle = (status, msg) => {
  switch (status) {
    case 403:
      // login()
      break
    case 404:
      // notFound()
      break
    default:
      console.log('msg: ', msg)
      // Message.warning(msg)
      break
  }
}

// Add a request interceptor
instance.interceptors.request.use(
  // Do something before request is sent
  (config) => {
    return config
  },
  // Do something with request error
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor
instance.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  (response) => {
    return response
  },
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  (error) => {
    if (error.response) {
      errorHandle(status, error.response.data.message)
    }
    // 处理断网的情况，提示用户重新加载数据
    if (!window.navigator.onLine) {
      // Message.error('网络请求异常，请稍后重试!')
      console.log('网络请求异常，请稍后重试!')
    }
    return Promise.reject(error)
  },
)

export default instance

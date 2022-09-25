import axios from 'axios'
import {BASE_URL, TIMEOUT} from './config'
import throwErr from '@/utils/throwErr'

const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

request.interceptors.request.use((config) => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

  // 3.params/data序列化的操作

  return config;
}, (err) => {
  console.log("err", err)
});

request.interceptors.response.use((res) => {
  return res.data
}, (err) => {
  if (err && err.response) {
    console.log(throwErr(err.response.status, err.response.config.url))
  }
  return err;
});

export default request

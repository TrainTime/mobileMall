import axios from "axios"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"

const request = axios.create({
  baseURL: "http://123.207.32.32:8000/api/h8",
  timeout: 200000
})

request.interceptors.request.use(config => {
  Nprogress.start()

  return config;
})

request.interceptors.response.use(response => {
  Nprogress.done()

  return response.data;
}, error => {
  Nprogress.done()
  alert(`请求错误：${error.message || "未知错误"}`)

  return new Promise(() => {})
})

export default request

import axios from 'axios'
import router from '@/router'
import { removeToken } from './cookie'

const service = axios.create({
  baseURL: '/dev-api',
  timeout: 5000,
})

//响应拦截器
service.interceptors.response.use(
  (res) => {
    //res : 响应数据
    // 未设置状态码则默认成功状态
    const code = res.data.code
    const message = res.data.message
    if (code === 3001) {
      // 没有权限 未登录
      // eslint-disable-next-line no-undef
      ElMessage.error(message)
      removeToken()
      router.push('/foj/login')
      return Promise.reject(new Error(message))
    } else if (code !== 1000) {
      // 其他异常
      // eslint-disable-next-line no-undef
      ElMessage.error(message)
      // 抛出异常
      return Promise.reject(new Error(message))
    } else {
      // 无异常
      return Promise.resolve(res.data)
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service

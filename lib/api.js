// lib/api.js - 使用axios的API工具函数
import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN

// 创建axios实例
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器 - 添加认证令牌
apiClient.interceptors.request.use(
  config => {
    // 使用环境变量中设置的固定API令牌
    if (API_TOKEN) {
      config.headers.Authorization = `Bearer ${API_TOKEN}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器 - 统一错误处理
apiClient.interceptors.response.use(
  response => response.data,
  error => {
    // 记录错误信息，方便调试
    console.error('API Error:', error.response?.data || error.message)
    
    return Promise.reject(error)
  }
)

// Create a new contact message
export async function createContactMessage(data) {
    return apiClient.post('/contact_messages/create_message', data);
  }
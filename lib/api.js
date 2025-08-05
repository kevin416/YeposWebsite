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

// ===== 博客相关API =====

// 博客文章API
export async function getBlogPosts(params = {}) {
  return apiClient.post('/blog/posts', params);
}

export async function getBlogPost(slug, companyId) {
  return apiClient.post(`/blog/posts/${slug}`, { company_id: companyId });
}

export async function getFeaturedPosts(companyId, limit = 5) {
  return apiClient.post('/blog/posts/featured', { company_id: companyId, limit });
}

export async function getPopularPosts(companyId, limit = 10, days = 30) {
  return apiClient.post('/blog/posts/popular', { company_id: companyId, limit, days });
}

export async function likeBlogPost(postId, companyId) {
  return apiClient.post(`/blog/posts/${postId}/like`, { company_id: companyId });
}

export async function createBlogPost(data) {
  return apiClient.post('/blog/posts/create', data);
}

export async function updateBlogPost(postId, data) {
  return apiClient.put(`/blog/posts/${postId}`, data);
}

export async function deleteBlogPost(postId, companyId) {
  return apiClient.delete(`/blog/posts/${postId}`, { data: { company_id: companyId } });
}

// 博客分类API
export async function getBlogCategories(params = {}) {
  return apiClient.post('/blog/categories', params);
}

export async function getBlogCategory(categoryId, companyId) {
  return apiClient.post(`/blog/categories/${categoryId}`, { company_id: companyId });
}

export async function getCategoryTree(companyId, active = true) {
  return apiClient.post('/blog/categories/tree', { company_id: companyId, active });
}

export async function getCategoryStats(companyId) {
  return apiClient.post('/blog/categories/stats', { company_id: companyId });
}

export async function createBlogCategory(data) {
  return apiClient.post('/blog/categories/create', data);
}

export async function updateBlogCategory(categoryId, data) {
  return apiClient.put(`/blog/categories/${categoryId}`, data);
}

export async function deleteBlogCategory(categoryId, companyId) {
  return apiClient.delete(`/blog/categories/${categoryId}`, { data: { company_id: companyId } });
}

// 博客标签API
export async function getBlogTags(params = {}) {
  return apiClient.post('/blog/tags', params);
}

export async function getBlogTag(tagId, companyId) {
  return apiClient.post(`/blog/tags/${tagId}`, { company_id: companyId });
}

export async function getPopularTags(companyId, limit = 20) {
  return apiClient.post('/blog/tags/popular', { company_id: companyId, limit });
}

export async function searchTags(companyId, query, limit = 10) {
  return apiClient.post('/blog/tags/search', { company_id: companyId, q: query, limit });
}

export async function createBlogTag(data) {
  return apiClient.post('/blog/tags/create', data);
}

export async function createBlogTags(data) {
  return apiClient.post('/blog/tags/batch', data);
}

export async function updateBlogTag(tagId, data) {
  return apiClient.put(`/blog/tags/${tagId}`, data);
}

export async function deleteBlogTag(tagId, companyId) {
  return apiClient.delete(`/blog/tags/${tagId}`, { data: { company_id: companyId } });
}

// 博客评论API
export async function getBlogComments(params = {}) {
  return apiClient.post('/blog/comments', params);
}

export async function submitBlogComment(data) {
  return apiClient.post('/blog/comments/submit', data);
}

export async function getCommentStats(companyId, postId = null) {
  return apiClient.post('/blog/comments/stats', { company_id: companyId, post_id: postId });
}

export async function updateCommentStatus(commentId, companyId, status) {
  return apiClient.put(`/blog/comments/${commentId}/status`, { company_id: companyId, status });
}

export async function deleteBlogComment(commentId, companyId) {
  return apiClient.delete(`/blog/comments/${commentId}`, { data: { company_id: companyId } });
}

export async function getPendingComments(companyId, perPage = 20) {
  return apiClient.post('/blog/comments/pending', { company_id: companyId, per_page: perPage });
}

export async function batchUpdateCommentStatus(companyId, commentIds, status) {
  return apiClient.post('/blog/comments/batch-status', { company_id: companyId, comment_ids: commentIds, status });
}
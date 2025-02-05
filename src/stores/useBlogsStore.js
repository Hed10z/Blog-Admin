import { defineStore } from 'pinia'

import { apiRequest } from '@/utils/apiRequest'
import { catchAsync } from '@/utils/catchAsync'

export const useBlogsStore = defineStore('blogs', {
  state: () => ({
    blogs: [],
    blog: {},
  }),
  actions: {
    getAllBlog: catchAsync(async function () {
      const responseData = await apiRequest('http://blog-panel.suly-soft.com.www67.your-server.de/api/blogs')

      this.blogs = responseData
    }),
    getSingleBlog: catchAsync(async function (blogId) {
      const responseData = await apiRequest(`http://blog-panel.suly-soft.com.www67.your-server.de/api/blogs/${blogId}`)

      this.blog = responseData
    }),
    putBlog: catchAsync(async function (blogId, data) {
      const responseData = await apiRequest(`http://blog-panel.suly-soft.com.www67.your-server.de/api/blogs/${blogId}`, 'PUT', data)
    }),
    postAddBlog: catchAsync(async function (data) {
      const responseData = await apiRequest(`http://blog-panel.suly-soft.com.www67.your-server.de/api/blogs`, 'POST', data)
    }),
    deleteBlog: catchAsync(async function (blogId) {
      const responseData = await apiRequest(`http://blog-panel.suly-soft.com.www67.your-server.de/api/blogs/${blogId}`, 'DELETE')
    }),
  },
})

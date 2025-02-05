import { defineStore } from 'pinia'

import { apiRequest } from '@/utils/apiRequest'
import { catchAsync } from '@/utils/catchAsync'

export const useAuthorStore = defineStore('author', {
  state: () => ({
    authors: [],
  }),
  actions: {
    getAuthors: catchAsync(async function () {
      const responseData = await apiRequest('http://blog-panel.suly-soft.com.www67.your-server.de/api/authors')
      this.authors = responseData.data
    }),
  },
})

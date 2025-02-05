<template>
  <div>
    <!-- Swiper -->
    <div>
      <BaseData v-if="authors.length || blogs.length" :blogs="blogs" :authors="authors" />
    </div>

    <!-- Response Data -->
    <div class="bg-black text-white"></div>

    <!-- List Post -->
    <div class="bg-white rounded-2xl">
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-[10%] text-center">ID</th>
              <th class="w-[40%] text-left">Title</th>
              <th class="w-[40%] text-left">Publish Status</th>
              <th class="w-[10%] text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            <!-- row 1 -->
            <tr v-for="blog in blogs.data" :key="blog.id">
              <th class="text-center">{{ blog.id }}</th>
              <td class="w-[40%] text-left">{{ blog.title }}</td>
              <td class="w-[40%] text-left">{{ blog.status }}</td>
              <td class="flex justify-center">
                <router-link :to="`/admin/blogs/${blog.id}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'

import { useBlogsStore } from '@/stores/useBlogsStore'
import { useAuthorStore } from '@/stores/useAuthorStore'

import BaseData from '@/components/Admin/BaseData.vue'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(useBlogsStore, ['blogs']),
    ...mapState(useAuthorStore, ['authors']),
  },
  methods: {
    ...mapActions(useBlogsStore, ['getAllBlog']),
    ...mapActions(useAuthorStore, ['getAuthors']),
  },
  created() {
    this.getAllBlog()
    this.getAuthors()
  },
  components: {
    BaseData,
  },
}
</script>

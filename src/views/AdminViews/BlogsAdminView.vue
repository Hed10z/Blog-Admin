<template>
  <div>
    <router-link :to="`/admin${$route.params.id}`" class="btn bg-white text-neutral-700 hover:text-black transition rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>

      Go Dashboard
    </router-link>

    <!-- Title -->
    <div class="my-6 md:text-3xl text-2xl ml-2">List Blogs</div>

    <!-- List Blogs -->
    <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <!-- Card -->
      <div v-for="blog in blogs.data" :key="blog" class="flex flex-col justify-between bg-white rounded-xl shadow-md md:p-6 p-4">
        <!-- Main -->
        <div>
          <!-- Author and Publish -->
          <div class="flex items-center justify-between">
            <!-- Author -->
            <div class="flex truncate text-neutral-400 gap-2 items-center">
              <!-- Icon -->
              <div class="bg-gradient-to-b from-neutral-200 to-neutral-100 p-2 rounded-xl font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <!-- Name Author -->
              <div class="text-sm">{{ blog.author }}</div>
            </div>

            <!-- Publish -->
            <div class="flex items-center gap-2 text-neutral-400 text-sm">
              <!-- Status -->
              <div :class="blog.status == 'published' ? 'bg-green-400 w-3 h-3 rounded-full' : 'bg-amber-400 w-3 h-3 rounded-full'"></div>
              <!-- Main -->
              <div>{{ blog.status }}</div>
            </div>
          </div>

          <!-- Title and Content -->
          <div class="my-6">
            <!-- Title -->
            <div class="text-2xl font-bold">{{ blog.title }}</div>

            <!-- Content -->
            <div class="my-4">{{ blog.content }}</div>
          </div>
        </div>

        <!-- View Button -->
        <div>
          <router-link :to="`/admin/blogs/${blog.id}`">
            <div class="btn bg-white rounded-xl text-black border-[#e5e5e5] w-full">View Blog</div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'

import { useBlogsStore } from '@/stores/useBlogsStore'

import BaseData from '@/components/Admin/BaseData.vue'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(useBlogsStore, ['blogs']),
  },
  methods: {
    ...mapActions(useBlogsStore, ['getAllBlog']),
  },
  created() {
    this.getAllBlog()
  },
  components: {
    BaseData,
  },
}
</script>

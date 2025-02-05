<template>
  <div class="py-6">
    <!-- Author and Publish -->
    <div class="flex items-center justify-between bg-white p-6 rounded-xl">
      <!-- Author -->
      <div class="flex text-neutral-400 gap-2 items-center">
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
        <div class="text-xl">{{ blog.author }}</div>
      </div>

      <!-- Publish -->
      <div class="flex items-center gap-2 text-neutral-400 text-sm">
        <!-- Status -->
        <div :class="blog.status == 'published' ? 'bg-green-400 w-3 h-3 rounded-full' : 'bg-amber-400 w-3 h-3 rounded-full'"></div>
        <!-- Main -->
        <div>{{ blog.status }}</div>
      </div>
    </div>

    <!-- Card -->
    <div class="bg-white rounded-xl my-4 p-6">
      <!-- Title and Content -->
      <div class="my-6">
        <!-- Title -->
        <div class="text-2xl font-bold">{{ blog.title }}</div>

        <!-- Content -->
        <div class="my-4">
          {{ blog.content }}
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex items-center gap-2">
        <!-- Edit Button -->
        <router-link
          :to="`/admin/blogs/${$route.params.id}/edit`"
          class="flex items-center justify-center gap-2 w-full text-center rounded-xl py-2 border border-neutral-200 hover:shadow-md transition"
        >
          <!-- Icon -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
              <path
                d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
              />
            </svg>
          </div>
          <!-- Name Button -->
          <div class="font-bold">Update</div>
        </router-link>

        <!-- Delete -->
        <BaseModal>
          <!-- Button -->
          <template #button>
            <div class="flex items-center justify-center gap-2 text-center rounded-xl p-[9px] shadow-md transition bg-red-500 text-white">
              <!-- Icon -->
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                  <path
                    fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </template>

          <!-- Main -->
          <!-- Main -->
          <template #main>
            <div>
              <!-- Icon -->
              <div class="flex justify-center items-center">
                <div class="bg-red-400/40 text-red-500 backdrop-blur-2xl p-2 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
              </div>

              <!-- Title Form -->
              <div class="font-bold text-center text-4xl py-4">Are you sure Deleting This Blog?</div>
              <!-- Button -->
              <div>
                <button @click="deleteBlogHandler" class="btn btn-error btn-lg font-black rounded-2xl w-full mt-6 shadow-xl">Delete</button>
              </div>
            </div>
          </template>
        </BaseModal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'

import { useBlogsStore } from '@/stores/useBlogsStore'
import { useAuthorStore } from '@/stores/useAuthorStore'

import BaseModal from '@/components/UI/BaseModal.vue'

export default {
  data() {
    return {
      searchQuery: '', // Real-time search input
      showList: false, // Controls dropdown visibility
    }
  },
  computed: {
    ...mapState(useBlogsStore, ['blog']),
    ...mapState(useAuthorStore, ['authors']),

    // Filter authors in real-time
    filteredAuthors() {
      return this.authors.filter((author) => author.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
  },
  methods: {
    ...mapActions(useBlogsStore, ['getAllBlog', 'getSingleBlog', 'deleteBlog']),
    ...mapActions(useAuthorStore, ['getAuthors']),

    selectAuthor(author) {
      this.searchQuery = author.name // Set the selected author's name in input
      this.showList = false // Hide the list
    },

    handleBlur() {
      // Delay hiding the list to allow selection
      setTimeout(() => {
        this.showList = false
      }, 200)
    },
    deleteBlogHandler() {
      this.deleteBlog(this.$route.params.id)
      this.getAllBlog()
      this.$router.push('/admin')
    },
  },
  created() {
    this.getSingleBlog(this.$route.params.id)
    this.getAuthors()
  },
  components: {
    BaseModal,
  },
}
</script>

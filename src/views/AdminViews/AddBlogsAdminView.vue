<template>
  <div>
    <!-- Button Back -->
    <router-link :to="`/admin`" class="btn bg-white text-neutral-700 hover:text-black transition rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>

      Go Dashboard
    </router-link>

    <!-- Title Form -->
    <div class="text-center font-bold text-3xl pb-4">Add Blog</div>

    <!-- Title -->
    <fieldset class="fieldset">
      <legend class="fieldset-legend text-lg ml-2">Title</legend>
      <input type="text" class="input w-full focus:outline-0 transition rounded-xl" placeholder="Type here" v-model="title" />
    </fieldset>

    <!-- Content -->
    <fieldset class="fieldset">
      <legend class="fieldset-legend text-lg ml-2">Content</legend>
      <textarea placeholder="Bio" class="input w-full h-24 py-2 focus:outline-0 transition rounded-xl" v-model="content"></textarea>
    </fieldset>

    <!-- Authors -->
    <div class="relative">
      <!-- Title Input -->
      <legend class="fieldset-legend text-lg ml-2">Choose Authors</legend>

      <!-- Search Input -->
      <input
        type="text"
        v-model="this.blog.author"
        placeholder="Search authors..."
        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition"
        @focus="showList = true"
        @blur="handleBlur"
      />

      <!-- Author List (Dropdown) -->
      <div v-if="showList" class="absolute top-full left-0 w-full mt-2 bg-white border border-neutral-200 rounded-xl shadow-lg z-10">
        <!-- Title -->
        <div class="pb-2 text-xl p-4">List Authors</div>
        <!-- Main -->
        <ul class="space-y-2 overflow-y-auto max-h-48 p-4">
          <li
            v-for="author in filteredAuthors"
            :key="author.id"
            class="p-3 bg-white rounded-lg shadow hover:bg-gray-200 transition cursor-pointer"
            @click="selectAuthor(author)"
          >
            {{ author.name }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Status -->
    <div>
      <!-- Title -->
      <legend class="fieldset-legend text-lg ml-2">Status</legend>

      <!-- Main -->
      <select v-model="status" class="select w-full focus:outline-none transition rounded-lg">
        <option disabled selected>Choose Status</option>
        <option value="published">Publish</option>
        <option value="unpublished">Unpublish</option>
      </select>
    </div>

    <!-- Button -->
    <div>
      <button class="btn btn-warning btn-lg font-black rounded-2xl w-full mt-6 shadow-xl" @click="postBlogHandler()">Submit</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'

import { useBlogsStore } from '@/stores/useBlogsStore'
import { useAuthorStore } from '@/stores/useAuthorStore'

export default {
  data() {
    return {
      searchQuery: '', // Real-time search input
      showList: false, // Controls dropdown visibility

      title: '',
      content: '',
      status: 'Choose Status',
      author_id_res: '', // Store selected author ID
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
  watch: {
    authors: {
      handler() {
        this.detectAuthor()
      },
      deep: true,
      immediate: true,
    },
    'blog.author': {
      handler() {
        this.detectAuthor()
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(useBlogsStore, ['getSingleBlog', 'postAddBlog']),
    ...mapActions(useAuthorStore, ['getAuthors']),

    selectAuthor(author) {
      this.blog.author = author.name // Set the selected author's name in input
      this.author_id_res = author.id // Store author ID
      this.showList = false // Hide the list
    },

    detectAuthor() {
      if (!this.blog.author || !this.authors.length) return
      const authorFound = this.authors.find((author) => author.name === this.blog.author)
      this.author_id_res = authorFound ? authorFound.id : null
    },

    postBlogHandler() {
      const body_request = {
        title: this.title,
        content: this.content,
        status: this.status,
        author_id: this.author_id_res, // Send detected author ID
      }

      console.log(body_request)
      this.postAddBlog(body_request)
    },
  },
  created() {
    this.getAuthors()
  },
}
</script>

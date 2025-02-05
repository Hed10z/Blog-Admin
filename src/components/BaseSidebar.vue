<template>
  <div class="lg:block hidden col-span-1 bg-white">
    <!-- Account -->
    <div class="flex gap-4 items-center border-b border-neutral-200 pl-4 my-6 pb-4">
      <img
        class="w-12 aspect-square object-cover rounded-xl"
        src="/utils/person.jpg"
        alt="avatar"
      />
      <div>Henry Cavill</div>
    </div>

    <!-- Menu -->
    <div class="flex flex-col gap-2 2xl:px-8 px-2">
      <!-- Dashboard -->
      <router-link
        to="/admin"
        :class="this.dashboard === true ? activeLink : defaultLink"
        @click="sideActive('dashboard')"
      >
        <!-- Icon -->
        <div class="bg-white/30 p-1.5 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        Dashboard
      </router-link>

      <!-- Blogs -->
      <router-link
        to="/admin/blogs"
        :class="this.blogs === true ? activeLink : defaultLink"
        @click="sideActive('blogs')"
      >
        <!-- Icon -->
        <div class="bg-neutral-300/30 p-1.5 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z"
            />
            <path
              d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z"
            />
          </svg>
        </div>

        Blogs
      </router-link>

      <!-- Add Blog -->
      <router-link
        to="/admin/blogs/add"
        :class="this.addBlogs === true ? activeLink : defaultLink"
        @click="sideActive('addBlogs')"
      >
        <div class="bg-neutral-300/30 p-1.5 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"
            />
          </svg>
        </div>

        Add Blogs
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeLink:
        'flex items-center gap-5 rounded-3xl p-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg transition',
      defaultLink: 'flex items-center gap-5 rounded-3xl p-2 hover:bg-neutral-100 transition',
      dashboard: true,
      blogs: false,
      addBlogs: false,
    }
  },
  methods: {
    sideActive(value) {
      this.dashboard = false
      this.blogs = false
      this.addBlogs = false

      switch (value) {
        case 'dashboard':
          this.dashboard = true
          break
        case 'blogs':
          this.blogs = true
          break
        case 'addBlogs':
          this.addBlogs = true
          break
        default:
          break
      }
    },
  },
}
</script>

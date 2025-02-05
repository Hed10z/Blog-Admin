<script setup>
import BaseNavbar from '@/components/BaseNavbar.vue'
import BaseSidebar from '@/components/BaseSidebar.vue'
</script>

<template>
  <div class="grid lg:grid-cols-5 grid-cols-4 h-screen bg-neutral-100 overflow-y-auto">
    <!-- Sidebar -->
    <BaseSidebar />

    <!-- Main and SideBar -->

    <transition name="fade" mode="out-in">
      <div class="drawer col-span-4">
        <input id="my-drawer" type="checkbox" class="drawer-toggle z-[10000]" />

        <!-- Main Content -->
        <div class="drawer-content overflow-y-auto h-screen 2xl:px-16 lg:px-10 md:px-6 px-4 pb-6">
          <BaseNavbar />
          <!-- Main Router View -->
          <transition name="fade" mode="out-in">
            <RouterView :key="$route.fullPath" />
          </transition>
        </div>

        <!-- SideBar -->
        <div class="drawer-side">
          <!-- Constant -->
          <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

          <!-- Menu and Background -->
          <div class="menu bg-base-200 text-base-content min-h-full md:w-80 w-[80%]">
            <!-- Account -->
            <div class="border-b border-neutral-200 ml-3 my-4 pb-4 flex gap-4 items-center">
              <img class="w-14 aspect-square object-cover rounded-xl" src="/utils/person.jpg" alt="avatar" />
              <div>Henry Cavill</div>
            </div>

            <!-- Menu -->
            <ul class="mt-2">
              <!-- Sidebar content here -->
              <li>
                <router-link to="/admin" class="py-3 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                    <path
                      fill-rule="evenodd"
                      d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Dashboard
                </router-link>
              </li>
              <!-- All Blog -->
              <li>
                <router-link to="/admin/blogs" class="py-3 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                    <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z" />
                    <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z" />
                  </svg>

                  All Blog
                </router-link>
              </li>
              <!-- Add Blog -->
              <li>
                <router-link to="/admin/blogs/add" class="py-3 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"
                    />
                  </svg>
                  Add Blog</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="breakpointsResponsive"
      :modules="modules"
      class="mySwiper"
    >
      <!-- Author -->
      <swiper-slide>
        <div class="bg-gradient-to-r from-amber-400 to-amber-500 p-6 rounded-xl text-white overflow-hidden shadow-md my-3">
          <!-- Icon and Title  -->
          <div class="flex gap-4 items-center">
            <!-- Icon -->
            <div class="p-2 bg-neutral-100/40 rounded-xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
                <circle cx="12" cy="6" r="4" fill="currentColor" />
                <path fill="currentColor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" opacity="0.5" />
              </svg>
            </div>
            <!-- Title -->
            <div class="text-xl text-white font-bold">Author</div>
          </div>

          <!-- Number -->
          <div class="text-3xl font-extrabold md:my-3 my-5">{{ authors.length }}</div>

          <!-- Word -->
          <div class="font-extrabold">Access</div>

          <!-- Background -->
          <div class="relative">
            <img src="/utils/circle4.png" class="absolute bottom-[-120px] right-[-80px] w-[75%]" alt="circle" />
          </div>
        </div>
      </swiper-slide>

      <!-- Posts -->
      <swiper-slide>
        <div class="bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-xl text-white overflow-hidden shadow-md my-3">
          <!-- Icon and Title  -->
          <div class="flex gap-4 items-center">
            <!-- Icon -->
            <div class="p-2 bg-neutral-100/40 rounded-xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"
                  opacity="0.5"
                />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0-4A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8m0 8a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <!-- Title -->
            <div class="text-xl text-white font-bold">Blogs</div>
          </div>

          <!-- Number -->
          <div class="text-3xl font-extrabold md:my-3 my-5">{{ blogs.data.length }}</div>

          <!-- Word -->
          <div class="font-extrabold">Access</div>

          <!-- Background -->
          <div class="relative">
            <img src="/utils/circle4.png" class="absolute bottom-[-120px] right-[-80px] w-[75%]" alt="circle" />
          </div>
        </div>
      </swiper-slide>

      <!-- Activity -->
      <swiper-slide>
        <div class="bg-gradient-to-r from-blue-400 to-blue-500 p-6 rounded-xl text-white overflow-hidden shadow-md my-3">
          <!-- Icon and Title  -->
          <div class="flex gap-4 items-center">
            <!-- Icon -->
            <div class="p-2 bg-neutral-100/40 rounded-xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10.001-10.002 10.001S2 17.524 2 12.001C1.999 6.477 6.476 1.999 12 1.999"
                  class="duoicon-secondary-layer"
                  opacity="0.3"
                />
                <path
                  fill="currentColor"
                  d="M12.001 6.5a1.252 1.252 0 1 0 .002 2.503A1.252 1.252 0 0 0 12 6.5zm-.005 3.749a1 1 0 0 0-.992.885l-.007.116l.004 5.502l.006.117a1 1 0 0 0 1.987-.002L13 16.75l-.004-5.501l-.007-.117a1 1 0 0 0-.994-.882z"
                  class="duoicon-primary-layer"
                />
              </svg>
            </div>
            <!-- Title -->
            <div class="text-xl text-white font-bold">Info</div>
          </div>

          <!-- Number -->
          <div class="text-3xl font-extrabold md:my-3 my-5">Blog System</div>

          <!-- Word -->
          <div class="font-extrabold">Access UI</div>

          <!-- Background -->
          <div class="relative">
            <img src="/utils/circle4.png" class="absolute bottom-[-120px] right-[-80px] w-[75%]" alt="circle" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      breakpointsResponsive: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      modules: [Pagination],
    }
  },
  props: {
    authors: {
      type: Array,
      required: true,
    },
    blogs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  padding: 20px 0px !important;
  z-index: 0;
}
.swiper-pagination-bullet-active {
  background: #000000;
}
</style>

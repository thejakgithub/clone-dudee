<template>
  <main class="xl:h-screen h-full">
    <div class="bg-work bg-cover xl:h-2/4">
      <div class="mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro">
        <div class="lg:px-16 px-4 lg:pt-36 pt-10">
          <div class="flex justify-between lg:mb-3">
            <h1 class="lg:text-[4rem] text-3xl font-bold text-white mb-2">
              Works
            </h1>
            <button
              class="
                hidden
                lg:inline-block
                h-[52px]
                min-w-[92px]
                font-bold font-maven-pro
                select-none
                rounded
                tracking-widest
                hover:opacity-95
                border-none
                px-6
                text-base
                cursor-pointer
              "
            >
              SEE ALL WORKS
            </button>
          </div>
        </div>

        <!-- tablet computer -->
        <div
          class="
            hidden
            lg:mx-12
            pl-5
            pr-3
            py-5
            rounded-lg
            h-full
            xl:h-[calc(100vh_-_13rem)]
            bg-white
            lg:flex
          "
        >
          <div class="w-2/4 pr-5">
            <img
              src="../assets/img/pos.jpeg"
              alt="pos"
              class="
                w-full
                rounded-lg
                h-[calc(50%_-_1.25rem)]
                pointer-events-none
                select-none
                object-cover
              "
            />
            <h2 class="font-maven-pro my-5">POS</h2>
            <p class="font-semibold text-base font-maven-pro mb-7">
              POS คือ ระบบขายหน้าร้าน ชื่อเต็มของ POS คือ Point of sale
              ระบบจัดการร้านค้าให้มีประสิทธิภาพ นำหลักกา...
            </p>
            <button
              class="
                text-white
                border-none
                text-base
                font-bold
                bg-dudee-green
                px-[1.4rem]
                h-[52px]
                min-w-[92px]
                tracking-widest
                font-maven-pro
                rounded
                shadow-gray-500 shadow
                hover:bg-opacity-95
                cursor-pointer
                select-none
              "
            >
              See More Detail
            </button>
          </div>
          <div
            class="
              w-2/4
              grid grid-cols-2
              gap-7
              px-2
              pointer-events-none
              select-none
              grid-rows-3
            "
          >
            <img
              v-for="img in items"
              :key="img.id"
              :src="getImageUrl(img)"
              :alt="img"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </main>
  <!-- Mobile tablet -->
  <Carousel
    :autoplay="4000"
    :wrap-around="true"
    :transition="500"
    :items-to-show="1"
    class="lg:hidden inline-block"
  >
    <Slide v-for="slide in items" :key="slide">
      <div class="carousel__item h-[275px]">
        <img
          :src="getImageUrl(slide)"
          class="object-cover h-full max-w-full w-screen"
          :alt="slide"
        />
      </div>
    </Slide>
    <template #addons>
      <Pagination class="bg-white h-24 flex items-center justify-center" />
    </template>
  </Carousel>
  <!--  -->
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
  name: "Works",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      items: [
        "pos.jpeg",
        "blank_studio.jpeg",
        "department.jpeg",
        "glasses_store.jpeg",
        "hatyai_branch.jpeg",
        "is_am_are.jpeg",
      ],
    };
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
  },
};
</script>

<style >
</style>
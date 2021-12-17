<template>
  <main class="h-full">
    <div class="bg-white lg:h-36 mb-1"></div>
    <div class="mx-auto xl:max-w-7xl lg:max-w-5xl">
      <div class="lg:px-16 px-4">
        <h1 class="font-maven-pro lg:text-7xl text-[32px] text-[#333336]">
          Our Clients
        </h1>
      </div>

      <div class="lg:px-12">
        <div
          class="
            bg-white
            rounded-lg
            mt-1
            hidden
            lg:flex
            justify-evenly
            items-center
            h-52
          "
        >
          <img
            src="../assets/img/sponser_1.jpeg"
            class="z-10"
            height="140"
            width="140"
            alt="sponser_1"
          />
          <img
            src="../assets/img/mee_sha.jpeg"
            alt="mee_sha"
            class="z-10"
            height="140"
            width="140"
          />
          <img
            src="../assets/img/sponser_blank_studio.jpeg"
            alt="sponser_blank_studio"
            height="140"
            class="z-10"
            width="140"
          />
          <img
            src="../assets/img/somtum.png"
            alt="somtum"
            height="140"
            class="z-10"
            width="140"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-white w-full absolute lg:h-[130px] z-0 -translate-y-[130px]"
    ></div>
    <Carousel class="lg:hidden bg-white pt-4 pb-3">
      <!-- <Slide v-for="slide in items" :key="slide">
        <div class="carousel__item">
          <img
            :src="`/src/assets/img/${slide}`"
            class="h-[140px]"
            :alt="slide"
          />
        </div>
      </Slide> -->
      <Slide :key="slide">
        <div class="carousel__item">
          <img
            src="../assets/img/sponser_1.jpeg"
            alt="sponser_1"
            class="h-[140px]"
          />
        </div>
      </Slide>
      <Slide :key="slide">
        <div class="carousel__item">
          <img
            src="../assets/img/mee_sha.jpeg"
            alt="mee_sha"
            class="h-[140px]"
          />
        </div>
      </Slide>
      <Slide :key="slide">
        <div class="carousel__item">
          <img
            src="../assets/img/sponser_blank_studio.jpeg"
            alt="sponser_blank_studio"
            class="h-[140px]"
          />
        </div>
      </Slide>
      <Slide :key="slide">
        <div class="carousel__item">
          <img src="../assets/img/somtum.png" alt="somtum" class="h-[140px]" />
        </div>
      </Slide>

      <template #addons>
        <Navigation class="mx-10" />
      </template>
    </Carousel>
  </main>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
  name: "OurClient",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      items: [
        "sponser_1.jpeg",
        "mee_sha.jpeg",
        "sponser_blank_studio.jpeg",
        "somtum.png",
      ],
    };
  },
};
</script>

<style>
</style>
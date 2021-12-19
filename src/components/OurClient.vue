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
            v-for="img in items"
            :key="img.id"
            :src="getImageUrl(img)"
            class="z-10"
            height="140"
            width="140"
            :alt="img"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-white w-full absolute lg:h-[130px] z-0 -translate-y-[130px]"
    ></div>
    <Carousel class="lg:hidden bg-white pt-4 pb-3" :autoplay="4000">
      <Slide v-for="slide in items" :key="slide">
        <div class="carousel__item">
          <img :src="getImageUrl(slide)" class="h-[140px]" :alt="slide" />
        </div>
      </Slide>

      <template #addons>
        <Navigation class="mx-10" />
      </template>
    </Carousel>
  </main>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
  name: "OurClient",
  components: {
    Carousel,
    Slide,
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
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
  },
};
</script>

<style>
</style>
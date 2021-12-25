<template>
  <main
    class="xl:h-screen h-full mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro"
  >
    <div class="lg:px-16 px-4 lg:my-40 my-12">
      <h1 class="lg:text-7xl text-[2rem] font-bold">Our Service</h1>
      <div>
        <Carousel
          :settings="settings"
          :breakpoints="breakpoints"
          class="pointer-events-none select-none lg:mt-24 mt-16"
        >
          <Slide v-for="item in items" :key="item">
            <div class="carousel__item">
              <div class="font-extralight">
                <div class="h-[100px]">
                  <img
                    :src="getImageUrl(item.img)"
                    :alt="item.img"
                    class="h-full"
                  />
                </div>

                <h3 class="py-6">{{ item.title }}</h3>
                <div>
                  <p>
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </main>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
  name: "OurService",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
      wrapAround: true,
      autoplay: 3000,
      transition: 1000,
      mouseDrag: false,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      768: {
        itemsToShow: 2.5,
        snapAlign: "center",
        wrapAround: true,
        autoplay: 3000,
        transition: 1000,
        mouseDrag: false,
      },
    },
    items: [
      {
        id: 1,
        img: "website.jpeg",
        title: "WEBSITE",
        description:
          "We can develop various type of website such as CMS website, Blogs, E-commerce website and WebApplication.",
      },
      {
        id: 2,
        img: "moblie_app.jpeg",
        title: "MOBLIE APP",
        description:
          "Mobile application is one solution to solving some business problem, Marketing, Entertainments, E-learning, Communication, etc.",
      },
      {
        id: 3,
        img: "internal_systems.png",
        title: "INTERNAL SYSTEMS",
        description:
          "Almost our Internal system project are based on client’s pain point. To solving those problems. We always use technology to apply to original workflow.",
      },
      {
        id: 4,
        img: "inhouse_products.png",
        title: "IN HOUSE PRODUCTS",
        description:
          "stock management and pos(point of sale) are systems to help business increase productivity our product is a systematic approach to sourcing, storing, ordering, tracking, monitoring stock levels, and connect with POS machine for operating a retail establishment or other business",
      },
      {
        id: 5,
        img: "branding.png",
        title: "BRANDING",
        description:
          "Good branding increases the value of the company, mouse acquiring new customers. Corporate identity(CI), logo, color, font, printing, online template",
      },
    ],
  }),
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.carousel__slide > .carousel__item {
  opacity: 0.5;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transition: 2s;
}
</style>
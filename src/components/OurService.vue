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
          :wrap-around="[true]"
          :autoplay="3000"
          :transition="1000"
          :mouse-drag="false"
          class="pointer-events-none select-none lg:mt-24 mt-10"
        >
          <Slide :key="slide">
            <div class="carousel__item">
              <div class="font-extralight">
                <div class="h-[100px]">
                  <img
                    src="../assets/img/website.jpeg"
                    alt="website"
                    class="h-full"
                  />
                </div>

                <h3 class="py-6">WEBSITE</h3>
                <div>
                  <p>
                    We can develop various type of website such as CMS website,
                    Blogs, E-commerce website and WebApplication.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide :key="slide">
            <div class="carousel__item">
              <div class="font-extralight">
                <div class="h-[100px]">
                  <img
                    src="../assets/img/moblie_app.jpeg"
                    alt="moblie_app"
                    class="h-full"
                  />
                </div>

                <h3 class="py-6">MOBLIE APP</h3>
                <div>
                  <p>
                    Mobile application is one solution to solving some business
                    problem, Marketing, Entertainments, E-learning,
                    Communication, etc.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide :key="slide">
            <div class="carousel__item">
              <div class="font-extralight">
                <div class="h-[100px]">
                  <img
                    src="../assets/img/internal_systems.png"
                    alt="internal_systems"
                    class="h-full"
                  />
                </div>

                <h3 class="py-6">INTERNAL SYSTEMS</h3>
                <div>
                  <p>
                    Almost our Internal system project are based on client’s
                    pain point. To solving those problems. We always use
                    technology to apply to original workflow.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide :key="slide">
            <div class="carousel__item">
              <div class="font-extralight">
                <div class="h-[100px]">
                  <img
                    src="../assets/img/inhouse_products.png"
                    alt="inhouse_products"
                    class="h-full"
                  />
                </div>
                <h3 class="py-6">IN HOUSE PRODUCTS</h3>
                <div>
                  <p>
                    stock management and pos(point of sale) are systems to help
                    business increase productivity our product is a systematic
                    approach to sourcing, storing, ordering, tracking,
                    monitoring stock levels, and connect with POS machine for
                    operating a retail establishment or other business
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide :key="slide">
            <div class="carousel__item">
              <div class="font-extralight">
                <div class="h-[100px]">
                  <img
                    src="../assets/img/branding.png"
                    alt="branding"
                    class="h-full"
                  />
                </div>

                <h3 class="py-6">BRANDING</h3>
                <div>
                  <p>
                    Good branding increases the value of the company, mouse
                    acquiring new customers. Corporate identity(CI), logo,
                    color, font, printing, online template
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
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      768: {
        itemsToShow: 2.5,
        snapAlign: "center",
      },
    },
  }),
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

.carousel__track {
  align-items: flex-start;
}
</style>
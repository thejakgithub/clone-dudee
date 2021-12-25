<template>
  <main class="xl:h-screen h-full">
    <div class="bg-work bg-cover xl:h-2/4">
      <div class="mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro">
        <div class="lg:px-16 px-4 lg:pt-36 pt-10">
          <div class="flex justify-between lg:mb-3">
            <h1 class="lg:text-[4rem] text-3xl font-bold text-white mb-2">
              Works
            </h1>
            <router-link to="/work">
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
            </router-link>
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
              :src="getImageUrl(showWorks.url)"
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
            <h2 class="font-maven-pro my-5">{{ showWorks.name }}</h2>
            <p class="font-semibold text-base font-maven-pro mb-7">
              {{ showWorks.description }}
            </p>
            <router-link to="/work/portfolio">
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
            </router-link>
          </div>
          <div
            class="w-2/4 grid grid-cols-2 gap-7 px-2 select-none grid-rows-3"
          >
            <div
              v-for="img in images"
              :key="img.id"
              @click="changeImgWorks(img)"
            >
              <img
                :src="getImageUrl(img.url)"
                :alt="img.url"
                class="
                  w-full
                  h-full
                  object-cover
                  rounded-lg
                  pointer-events-none
                "
              />
            </div>
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
    <Slide v-for="img in images" :key="img">
      <div class="carousel__item h-[275px]">
        <img
          :src="getImageUrl(img.url)"
          class="object-cover h-full max-w-full w-screen"
          :alt="img.url"
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
      showHasan: true,
      showWorks: {
        id: 1,
        name: "POS",
        url: "pos.jpeg",
        description:
          "POS คือ ระบบขายหน้าร้าน ชื่อเต็มของ POS คือ Point of sale ระบบจัดการร้านค้าให้มีประสิทธิภาพ นำหลักกา...",
      },
      images: [
        {
          id: 1,
          name: "POS",
          url: "pos.jpeg",
          description:
            "POS คือ ระบบขายหน้าร้าน ชื่อเต็มของ POS คือ Point of sale ระบบจัดการร้านค้าให้มีประสิทธิภาพ นำหลักกา...",
        },
        {
          id: 2,
          name: "BLANK STUDIO",
          url: "blank_studio.jpeg",
          description:
            "คอนเซ็ปของเว็บไซต์ คือ มินิมอล เราจึงออกแบบมาให้มีความเรียบง่าย เน้นการใช้งาน ลดทอนกราฟิกที่ไม่จำเป็...",
        },
        {
          id: 3,
          name: "DEPARTMENT OF CONSULAR AFFAIRS",
          url: "department.jpeg",
          description:
            "การรับรองนิติกรณ์เอกสาร ประเภทการรับรองลายมือชื่อของผู้มีอำนาจในการลงนามในเอกสารของหน่วยงานต่างๆ นั้...",
        },

        {
          id: 4,
          name: "CLICK GLASSES STORE",
          url: "glasses_store.jpeg",
          description:
            "คลิก กลาซซิส ต้องการนำความลงตัว ระหว่างสไตล์วินเทจ ที่ให้ความรู้สึกคลาสสิก เก่าแก่ มีคุณค่า มาผสมกับ...",
        },
        {
          id: 5,
          name: "BEST INC. HATYAI BRANCH",
          url: "hatyai_branch.jpeg",
          description:
            "ระบบของ BEST Express สาขาหาดใหญ่ เราจัดทำเพื่อลดภาระงานของพนักงาน รวมทั้งติดตามสินค้าและการคิดค่าคอม...",
        },
        {
          id: 6,
          name: "IS AM ARE ACADEMY",
          url: "is_am_are.jpeg",
          description:
            "เว็บไซต์ IS AM ARE ACADEMY เป็นแหล่งรวมความรู้เพื่อการพัฒนาศักยภาพและยกระดับภาษาอังกฤษ มีคอร์สภาษาอั...",
        },
      ],
    };
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },

    changeImgWorks(img) {
      this.images.forEach((val) => {
        if (val.id === img.id) {
          console.log(img);
          this.showWorks = img;
        }
      });
    },
  },
};
</script>

<style >
</style>
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
              :src="getImageUrl(showWorks.img[0])"
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
            <p class="font-bold text-base font-maven-pro mb-7">
              {{ truncate(showWorks.description, 100, "...") }}
            </p>
            <router-link
              :to="{ name: 'Portfolio', params: { portId: showWorks.id } }"
            >
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
                  hover:bg-opacity-90
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
              v-for="item in workItems"
              :key="item.id"
              @click="changeImgWorks(item)"
            >
              <img
                :src="getImageUrl(item.img[0])"
                :alt="item.img"
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
    <Slide v-for="item in workItems" :key="item">
      <div class="carousel__item h-[275px]">
        <img
          :src="getImageUrl(item.img[0])"
          class="object-cover h-full max-w-full w-screen"
          :alt="item.img"
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
      showWorks: {
        id: 1,
        name: "POS",
        img: ["pos.jpeg", "pos_1.jpeg", "pos_2.jpeg", "pos_3.jpeg"],
        ourCustomer: ["Meesha"],
        services: ["Website", "Internal Systems", "In House Products"],
        features: [
          "Menu & Ordering",
          "Seat management",
          "Billing & Payment",
          "Kitchen management",
        ],
        description:
          "POS คือ ระบบขายหน้าร้าน ชื่อเต็มของ POS คือ Point of sale ระบบจัดการร้านค้าให้มีประสิทธิภาพ นำหลักการของเครื่องคิดเงิน (Cash Register) มาเขียนโปรแกรมพัฒนาบนคอมพิวเตอร์ แล้วเพิ่มเติมความสามารถต่างๆ ที่เครื่องเก็บเงินทำไม่ได้ ประกอบด้วย ระบบจัดการเมนูและการสั่งซื้อ, ระบบจัดการโต๊ะที่นั่งภายในร้าน, ระบบการจ่ายเงินและบิลเงินสด, ระบบจัดการครัว",
      },
      workItems: [
        {
          id: 1,
          name: "POS",
          img: ["pos.jpeg", "pos_1.jpeg", "pos_2.jpeg", "pos_3.jpeg"],
          ourCustomer: ["Meesha"],
          services: ["Website", "Internal Systems", "In House Products"],
          features: [
            "Menu & Ordering",
            "Seat management",
            "Billing & Payment",
            "Kitchen management",
          ],
          description:
            "POS คือ ระบบขายหน้าร้าน ชื่อเต็มของ POS คือ Point of sale ระบบจัดการร้านค้าให้มีประสิทธิภาพ นำหลักการของเครื่องคิดเงิน (Cash Register) มาเขียนโปรแกรมพัฒนาบนคอมพิวเตอร์ แล้วเพิ่มเติมความสามารถต่างๆ ที่เครื่องเก็บเงินทำไม่ได้ ประกอบด้วย ระบบจัดการเมนูและการสั่งซื้อ, ระบบจัดการโต๊ะที่นั่งภายในร้าน, ระบบการจ่ายเงินและบิลเงินสด, ระบบจัดการครัว",
        },
        {
          id: 2,
          name: "BLANK STUDIO",
          img: ["blank_studio.jpeg"],
          ourCustomer: ["Meesha"],
          services: ["Website", "Internal Systems", "In House Products"],
          description:
            "คอนเซ็ปของเว็บไซต์ คือ มินิมอล เราจึงออกแบบมาให้มีความเรียบง่าย เน้นการใช้งาน ลดทอนกราฟิกที่ไม่จำเป็...",
        },
        {
          id: 3,
          name: "DEPARTMENT OF CONSULAR AFFAIRS",
          img: ["department.jpeg"],
          ourCustomer: ["Meesha"],
          services: ["Website", "Internal Systems", "In House Products"],
          description:
            "การรับรองนิติกรณ์เอกสาร ประเภทการรับรองลายมือชื่อของผู้มีอำนาจในการลงนามในเอกสารของหน่วยงานต่างๆ นั้...",
        },

        {
          id: 4,
          name: "CLICK GLASSES STORE",
          img: ["glasses_store.jpeg"],
          ourCustomer: ["Meesha"],
          services: ["Website", "Internal Systems", "In House Products"],
          description:
            "คลิก กลาซซิส ต้องการนำความลงตัว ระหว่างสไตล์วินเทจ ที่ให้ความรู้สึกคลาสสิก เก่าแก่ มีคุณค่า มาผสมกับ...",
        },
        {
          id: 5,
          name: "BEST INC. HATYAI BRANCH",
          img: ["hatyai_branch.jpeg"],
          ourCustomer: ["Meesha"],
          services: ["Website", "Internal Systems", "In House Products"],
          description:
            "ระบบของ BEST Express สาขาหาดใหญ่ เราจัดทำเพื่อลดภาระงานของพนักงาน รวมทั้งติดตามสินค้าและการคิดค่าคอม...",
        },
        {
          id: 6,
          name: "IS AM ARE ACADEMY",
          img: ["is_am_are.jpeg"],
          ourCustomer: ["Meesha"],
          services: ["Website", "Internal Systems", "In House Products"],
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

    changeImgWorks(item) {
      this.workItems.forEach((val) => {
        if (val.id === item.id) {
          this.showWorks = item;
        }
      });
    },
    truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
};
</script>

<style >
</style>
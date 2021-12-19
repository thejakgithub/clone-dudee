<template>
  <div class="bg-white">
    <img
      src="../assets/img/header-contact.jpeg"
      alt="header-contact"
      class="
        absolute
        top-0
        z-0
        lg:h-[490px]
        h-[220px]
        object-cover object-left-top
        w-full
      "
    />
    <div
      class="
        bg-black/40
        absolute
        top-0
        z-0
        lg:h-[490px]
        h-[220px]
        object-cover object-top
        w-full
      "
    ></div>
    <main class="mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro relative">
      <div class="lg:px-12">
        <h1
          class="lg:text-7xl text-[2rem] text-white lg:pt-48 pt-[7.8rem] mx-3"
        >
          Our Story
        </h1>
        <div class="bg-white lg:rounded-lg lg:mt-2 p-4 font-asap">
          <p class="text-[20px]">
            บริษัท ดูดีอินดีด คอร์ปอเรชั่น รับพัฒนาเว็บไซต์ ซอฟต์แวร์
            แอพพลิเคชั่น และมี Inhouse Products ของตัวเอง เราไม่ใช่ Software
            House เราเป็น Consulting and Technology Solutions
            เพราะเรามีความเชื่อว่าเทคโนโลยีเข้ามาช่วยแก้ปัญหาทางธุรกิจ
            เทคโนโลยีถูกนำมาใช้เสริมสร้างประสิทธิภาพการดำเนินงานของแต่ละกิจกรรมตามหน้าที่ทางธุรกิจ
            เช่น การเงิน การตลาด การดำเนินงาน บริหารทรัพยากรบุคคล
            เพื่อเป้าหมายเดียวคือ “รักษาความสามารถในการแข่งขัน (Competitive
            Ability)”
          </p>
          <div class="lg:flex hidden justify-between py-10">
            <img
              src="../assets/img/about_p1.jpeg"
              alt="about_p1"
              class="w-[30%]"
            />
            <img
              src="../assets/img/about_p2.jpeg"
              alt="about_p2"
              class="w-[30%]"
            />
            <img
              src="../assets/img/about_p3.jpeg"
              alt="about_p3"
              class="w-[30%]"
            />
          </div>

          <div>
            <h1 class="font-maven-pro lg:text-7xl text-[2rem] mt-8 lg:mb-4">
              Vision
            </h1>
            <Carousel
              :autoplay="4000"
              :wrap-around="true"
              :transition="500"
              :items-to-show="1"
              class="lg:hidden inline-block"
            >
              <Slide v-for="slide in items" :key="slide">
                <div class="carousel__item">
                  <img
                    :src="getImageUrl(slide)"
                    class="object-cover h-[250px] max-w-full w-screen"
                    :alt="slide"
                  />
                </div>
              </Slide>
              <template #addons>
                <Pagination
                  class="bg-white h-10 mb-2 flex items-end justify-center"
                />
              </template>
            </Carousel>
            <p class="text-[20px]">
              วิสัยทัศน์ของเราคือการเป็นผู้นำด้านการประยุกต์ใช้เทคโนโลยีเพื่อแก้ไขปัญหาและเพิ่มผลผลิตในทุกภาคธุรกิจของเอเชียตะวันออกเฉียงใต้
              เราทำงานด้วยความมุ่งมั่นและขับเคลื่อนธุรกิจของลูกค้าของเราเหมือนพันธมิตรที่เราเชื่อว่าจะเติบโตไปด้วยกัน
              การแก้ปัญหาทางธุรกิจต้องเริ่มจากการเป็นผู้ฟังที่ดีและเข้าใจปัญหาที่แท้จริง
              เราเข้าใจกระบวนการของผู้ใช้งาน
              เราจึงสร้างสรรค์และพัฒนางานของเราอย่างมีประสิทธิภาพและนำไปปฏิบัติได้จริง
            </p>
          </div>
          <div class="font-maven-pro mb-[4.5rem]">
            <h1 class="lg:text-7xl text-[2rem] lg:mt-[4.5rem] mt-12 mb-4">
              Member
            </h1>
            <div>
              <h2
                class="
                  lg:text-5xl
                  text-[1.5rem]
                  lg:mt-16
                  mt-8
                  border-b border-x-0 border-t-0 border-black border-solid
                  pb-16
                "
              >
                Board
              </h2>
            </div>

            <div>
              <h2 class="lg:text-5xl text-[1.5rem] lg:mt-14 mt-8">Employees</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
export default {
  name: "AboutUs",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      items: ["about_p1.jpeg", "about_p2.jpeg", "about_p3.jpeg"],
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
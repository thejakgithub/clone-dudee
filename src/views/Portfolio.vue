<template>
  <div class="bg-white">
    <main class="mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro relative">
      <div class="lg:px-12">
        <div class="pt-[6.25rem]">
          <img
            :src="getImageUrl(showItem.img[0])"
            :alt="showItem.img[0]"
            class="
              w-full
              lg:max-h-[500px]
              h-[250px]
              object-cover
              lg:object-left
            "
          />
        </div>
        <div class="mx-4 mt-6 font-asap">
          <h1 class="lg:text-[64px] text-[40px] font-maven-pro mb-4">
            {{ showItem.name }}
          </h1>
          <div>
            <h1 class="text-[32px] mb-4">Our Customers</h1>
            <ul class="ml-6 lg:text-2xl text-base mb-4">
              <li
                v-for="(ourCustomer, index) in showItem.ourCustomers"
                :key="index"
              >
                {{ ourCustomer }}
              </li>
            </ul>
          </div>
          <div>
            <h1 class="text-[32px] mb-4">Services</h1>
            <ul class="ml-6 lg:text-2xl text-base mb-4">
              <li v-for="(service, index) in showItem.services" :key="index">
                {{ service }}
              </li>
            </ul>
          </div>
          <div>
            <h1 class="text-[32px] mb-4">Features</h1>
            <ul class="ml-6 lg:text-2xl text-base mb-8">
              <li v-for="(feature, index) in showItem.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <p class="lg:text-2xl text-base">
              {{ showItem.description }}
            </p>
          </div>
        </div>
        <div class="pb-5 px-4 lg:px-0">
          <div class="flex lg:flex-row flex-col">
            <img
              :src="getImageUrl(showItem.img[1])"
              :alt="showItem.img[1]"
              class="lg:w-2/4 w-full max-h-[500px] object-cover"
            />
            <img
              :src="getImageUrl(showItem.img[2])"
              :alt="showItem.img[2]"
              class="lg:w-2/4 w-full max-h-[500px] object-cover"
            />
          </div>

          <img
            :src="getImageUrl(showItem.img[3])"
            :alt="showItem.img[3]"
            class="max-h-[500px] object-cover w-full mt-2"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Portfolio",

  data() {
    return {
      portId: this.$route.params.portId,
      showItem: {
        id: 1,
        name: "POS",
        img: ["pos.jpeg", "pos_1.jpeg", "pos_2.jpeg", "pos_3.jpeg"],
        ourCustomers: ["Meesha"],
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
  },
};
</script>

<style scoped>
</style>
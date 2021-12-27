<template>
  <div class="bg-white">
    <main class="mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro relative">
      <div class="lg:px-12">
        <div class="pt-[6.25rem]">
          <img
            :src="getImageUrl(showItem.img[0])"
            :alt="showItem.img[0]"
            class="w-full lg:h-[500px] h-[250px] object-cover lg:object-left"
          />
        </div>
        <div class="mx-4 mt-6 font-asap">
          <h1 class="lg:text-[64px] text-[40px] font-maven-pro mb-4">
            {{ showItem.name }}
          </h1>
          <div v-if="showItem.ourCustomers.length > 0">
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
          <div v-if="showItem.url.length > 0">
            <p class="text-[24px]">
              Link Website :
              <a
                class="text-dudee-green underline"
                :href="showItem.url"
                target="_blank"
                >{{ showItem.url }}</a
              >
            </p>
          </div>
          <div class="mb-10 mt-16">
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
  created() {
    this.workItems.forEach((item) => {
      if (item.id === Number(this.portId)) {
        this.showItem = item;
      }
    });
  },
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
        url: "",
        description:
          "POS คือ ระบบขายหน้าร้าน ชื่อเต็มของ POS คือ Point of sale ระบบจัดการร้านค้าให้มีประสิทธิภาพ นำหลักการของเครื่องคิดเงิน (Cash Register) มาเขียนโปรแกรมพัฒนาบนคอมพิวเตอร์ แล้วเพิ่มเติมความสามารถต่างๆ ที่เครื่องเก็บเงินทำไม่ได้ ประกอบด้วย ระบบจัดการเมนูและการสั่งซื้อ, ระบบจัดการโต๊ะที่นั่งภายในร้าน, ระบบการจ่ายเงินและบิลเงินสด, ระบบจัดการครัว",
      },
      workItems: [
        {
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
          url: "",
          description:
            "POS คือ ระบบขายหน้าร้าน ชื่อเต็มของ POS คือ Point of sale ระบบจัดการร้านค้าให้มีประสิทธิภาพ นำหลักการของเครื่องคิดเงิน (Cash Register) มาเขียนโปรแกรมพัฒนาบนคอมพิวเตอร์ แล้วเพิ่มเติมความสามารถต่างๆ ที่เครื่องเก็บเงินทำไม่ได้ ประกอบด้วย ระบบจัดการเมนูและการสั่งซื้อ, ระบบจัดการโต๊ะที่นั่งภายในร้าน, ระบบการจ่ายเงินและบิลเงินสด, ระบบจัดการครัว",
        },
        {
          id: 2,
          name: "BLANK STUDIO",
          img: [
            "blank_studio.jpeg",
            "blank_1.png",
            "blank_2.png",
            "blank_3.png",
          ],
          ourCustomers: [],
          services: ["Website (Portfolio website)"],
          features: ["Portfolio"],
          url: "http://bsalp.com/",
          description:
            "คอนเซ็ปของเว็บไซต์ คือ มินิมอล เราจึงออกแบบมาให้มีความเรียบง่าย เน้นการใช้งาน ลดทอนกราฟิกที่ไม่จำเป็นลง ส่งผลให้ผู้ใช้งานโฟกัสไปที่จุดสำคัญมากยิ่งขึ้นและคุมโทนสีขาวดำตามแบรนด์ดิ้งของ BLANK STUDIO",
        },
        {
          id: 3,
          name: "DEPARTMENT OF CONSULAR AFFAIRS",
          img: [
            "department.jpeg",
            "department_1.jpeg",
            "department_2.jpeg",
            "department_3.png",
          ],
          ourCustomers: [],
          services: ["Website", "Internal Systems"],
          features: [
            "Digital signature system",
            "Smart-card reader system",
            "E-legalize applicant",
            "Document management system",
            "Authorize management system",
          ],
          url: "",
          description:
            "การรับรองนิติกรณ์เอกสาร ประเภทการรับรองลายมือชื่อของผู้มีอำนาจในการลงนามในเอกสารของหน่วยงานต่างๆ นั้น โดยปกติหน่วยงานผู้ออกเอกสารจะมีหนังสือแจ้ง คณะกรรมการตุลาการศาลยุติธรรมเรื่องรายชื่อผู้มีอำนาจลงนามในเอกสาร พร้อมกับตัวอย่างลายมือชื่อของเจ้าหน้าที่ โดยกองสัญชาติฯ จะสแกนเก็บภาพตัวอย่างลายมือชื่อไว้ในระบบการรับรองนิติกรณ์เอกสารและจัดเก็บหนังสือดังกล่าวไว้ในแฟ้ม เมื่อประชาชนนำเอกสารจากหน่วยงานนั้นๆ มาขอรับรองนิติกรณ์เอกสาร เจ้าหน้าที่จะตรวจสอบลายมือชื่อที่ปรากฎในเอกสาร เทียบเคียงกับภาพตัวอย่างลายมือชื่อที่สแกนเก็บไว้ จากการค้นหาโดยพิมพ์ชื่อบุคคลหรือชื่อหน่วยงานนั้นๆ โดยระบบที่เราทำให้กับกรมการกงสุล กระทรวงการต่างประเทศ จะช่วยในการยื่นคำร้องนิติกรณ์ ให้มีความสะดวกสบายมากขึ้น",
        },

        {
          id: 4,
          name: "CLICK GLASSES STORE",
          img: [
            "glasses_store.jpeg",
            "glasses_1.jpeg",
            "glasses_2.jpeg",
            "glasses_3.jpeg",
          ],
          ourCustomers: [],
          services: ["Website (E-commerce website)"],
          features: ["E-commerce", "Shipping", "Storage"],
          url: "https://www.clickglassesstore.com/",
          description:
            "คลิก กลาซซิส ต้องการนำความลงตัว ระหว่างสไตล์วินเทจ ที่ให้ความรู้สึกคลาสสิก เก่าแก่ มีคุณค่า มาผสมกับสไตล์โมเดิร์น ทำให้แบรนด์คลิก กลาซซิส เป็นแบรนด์แว่นตาแฟชั่น สไตล์วินเทจ ที่โดดเด่นและเป็นเอกลักษณ์ พร้อมทั้งใส่ใจรายละเอียดในการผลิตและใช้วัสดุอย่างดีที่สุด",
        },
        {
          id: 5,
          name: "BEST INC. HATYAI BRANCH",
          img: ["hatyai_branch.jpeg", "", "", "hatyai_1.jpeg"],
          ourCustomers: [],
          services: ["Website", "Internal Systems"],
          features: [
            "Logistic Management System",
            "Office System",
            "Online shipment transaction",
            "Online shipment report",
            "Total daily / monthly Shipping costs",
            "Calculate delivery & commission costs",
            "Online commission report",
            "Total daily / monthly Commission rate",
            "Stock Management",
          ],
          url: "",
          description:
            "ระบบของ BEST Express สาขาหาดใหญ่ เราจัดทำเพื่อลดภาระงานของพนักงาน รวมทั้งติดตามสินค้าและการคิดค่าคอมมิชชั่น",
        },
        {
          id: 6,
          name: "IS AM ARE ACADEMY",
          img: [
            "is_am_are_0.jpeg",
            "is_am_are_1.jpeg",
            "is_am_are_2.jpeg",
            "is_am_are_3.jpeg",
          ],
          ourCustomers: [],
          services: ["Website (Content Management System)", "Branding"],
          features: [
            "Online Video session",
            "Social media linked",
            "Online examination",
            "E-booking commerce",
            "Blog & Activities",
          ],
          url: "https://isamareacademy.com/",
          description:
            "เว็บไซต์ IS AM ARE ACADEMY เป็นแหล่งรวมความรู้เพื่อการพัฒนาศักยภาพและยกระดับภาษาอังกฤษ มีคอร์สภาษาอังกฤษมากมาย ครบรส ทั้งความสนุก โหด มัน ฮา ตั้งแต่ระดับประถม มัธยม มหาวิทยาลัย วัยทำงาน โดยมุ่งเน้นให้เป็นทุกทักษะทั้ง ฟัง พูด อ่าน เขียน ดังนั้น IS AM ARE – Academy จึงมีทีมงานที่มีคุณภาพ นำทีมโดย “ครูพี่นีล” ผู้มากประสบการณ์ในการสอนมาแล้วทั่วประเทศไทยและโรงเรียนกวดวิชาภาษาอังกฤษที่ดังระดับประเทศ",
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
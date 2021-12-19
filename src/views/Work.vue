<template>
  <div class="lg:h-[197rem] h-[179rem] bg-white">
    <div class="bg-header-work bg-cover lg:h-[490px] h-[220px]">
      <div class="bg-black/40 lg:h-[490px] h-[220px]">
        <main class="mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro">
          <div class="lg:px-10">
            <h1
              class="
                lg:text-7xl
                text-[2rem] text-white
                lg:pt-48
                pt-[7.8rem]
                mx-3
              "
            >
              Work
            </h1>
            <div class="bg-white h-96 lg:rounded-lg lg:mt-2 py-4 font-asap">
              <p class="text-[20px] px-4">
                Developers ของเราทำงานโดยมีจุดประสงค์หลักเพื่อผลิตเว็บไซต์
                ซอฟต์แวร์ หรือแอปพลิเคชัน โดยท่านสามารถ Customized
                ได้ทั้งภาพลักษณ์ รูปแบบการทำงาน
                หากท่านไม่รู้ว่าจะใช้เทคโนโลยีใดเพื่อเสริมสร้างประสิทธิภาพการดำเนินงานของท่าน
                เรายินดีให้คำแนะนำ และแก้ปัญหาของท่าน
                เราภูมิใจและยินดีที่ได้เป็นส่วนหนึ่งของการเติบโตของท่าน
              </p>
              <nav
                class="
                  flex
                  mt-10
                  lg:mb-8
                  mb-2
                  text-2xl
                  lg:pb-0
                  pb-1
                  mx-4
                  overflow-x-scroll
                  whitespace-nowrap
                "
              >
                <div v-for="val in navWork" :key="val.id" class="mr-6">
                  <span
                    class="cursor-pointer"
                    @click="navWorkClicked(val.id)"
                    :class="{ active: navWork[val.id - 1].isActive }"
                    >{{ val.name }}</span
                  >
                </div>
              </nav>
              <div v-if="type === 'WEB'">
                <div
                  class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1"
                >
                  <div v-for="img in imgWeb" :key="img.id">
                    <img
                      :src="img.url"
                      :alt="img.name"
                      class="
                        w-full
                        lg:h-[344px]
                        h-[160px]
                        object-cover
                        rounded-2xl
                      "
                    />
                  </div>
                </div>
              </div>
              <div v-else-if="type === 'MOBILE APP'">
                <div
                  class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1"
                >
                  <div v-for="img in imgMobile" :key="img.id">
                    <img
                      :src="img.url"
                      :alt="img.name"
                      class="w-full h-[344px] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div v-else-if="type === 'INTERNAL SYSTEMS'">
                <div
                  class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1"
                >
                  <div v-for="img in imgInternal" :key="img.id">
                    <img
                      :src="img.url"
                      :alt="img.name"
                      class="w-full h-[344px] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div v-else-if="type === 'IN HOUSE'">
                <div
                  class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1"
                >
                  <div v-for="img in imgInHouse" :key="img.id">
                    <img
                      :src="img.url"
                      :alt="img.name"
                      class="w-full h-[344px] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div v-else-if="type === 'BRANDING'">
                <div
                  class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1"
                >
                  <div v-for="img in imgBranding" :key="img.id">
                    <img
                      :src="img.url"
                      :alt="img.name"
                      class="w-full h-[344px] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  components: {},
  data() {
    return {
      type: "WEB",
      navWork: [
        {
          id: 1,
          name: "WEB",
          isActive: true,
        },
        {
          id: 2,
          name: "MOBILE APP",
          isActive: false,
        },
        {
          id: 3,
          name: "INTERNAL SYSTEMS",
          isActive: false,
        },
        {
          id: 4,
          name: "IN HOUSE",
          isActive: false,
        },
        {
          id: 5,
          name: "BRANDING",
          isActive: false,
        },
      ],
      imgWeb: [
        {
          id: 1,
          name: "POS",
          url: "/assets/pos.jpeg",
        },
        {
          id: 2,
          name: "BLANK STUDIO",
          url: "/assets/blank_studio.jpeg",
        },
        {
          id: 3,
          name: "DEPARTMENT OF CONSULAR AFFAIRS",
          url: "/assets/department.jpeg",
        },
        {
          id: 4,
          name: "CLICK GLASSES STORE",
          url: "/assets/glasses_store.jpeg",
        },
        {
          id: 5,
          name: "BEST INC. HATYAI BRANCH",
          url: "/assets/hatyai_branch.jpeg",
        },
        {
          id: 6,
          name: "IS AM ARE ACADEMY",
          url: "/assets/is_am_are.jpeg",
        },
        {
          id: 7,
          name: "WONDERWALL HOTEL",
          url: "/assets/wonderwall_hotel.jpeg",
        },
        {
          id: 8,
          name: "MY SPA BOOKING",
          url: "/assets/my_spa_booking.jpeg",
        },
        {
          id: 9,
          name: "ROOJAI",
          url: "/assets/roojai.jpeg",
        },
        {
          id: 10,
          name: "OMISE",
          url: "/assets/omise.png",
        },
        {
          id: 11,
          name: "POMBALL STUDIO",
          url: "/assets/pommball_studio.jpeg",
        },
        {
          id: 12,
          name: "SO:ME",
          url: "/assets/some.png",
        },
        {
          id: 13,
          name: "BACK PACK",
          url: "/assets/backpack.jpeg",
        },
        {
          id: 14,
          name: "SANDY PURE & CLEAN",
          url: "/assets/sandy_pure.jpeg",
        },
      ],
      imgMobile: [
        {
          id: 1,
          name: "DONATE-MI",
          url: "/assets/donate_mi.jpeg",
        },
        {
          id: 2,
          name: "ANGRY TEACHER",
          url: "/assets/angry_teacher.jpeg",
        },
        {
          id: 3,
          name: "OK INFINITY",
          url: "/assets/ok_infinity.jpeg",
        },
      ],
      imgInternal: [
        {
          id: 1,
          name: "POS",
          url: "/assets/pos.jpeg",
        },
        {
          id: 2,
          name: "BEST INC. HATYAI BRANCH",
          url: "/assets/hatyai_branch.jpeg",
        },
      ],
      imgInHouse: [
        {
          id: 1,
          name: "POS",
          url: "/assets/pos.jpeg",
        },
      ],
      imgBranding: [
        {
          id: 1,
          name: "IS AM ARE ACADEMY",
          url: "/assets/is_am_are.jpeg",
        },
      ],
    };
  },
  methods: {
    navWorkClicked(id) {
      this.navWork.forEach((val) => {
        if (id === val.id) {
          val.isActive = true;
          this.type = val.name;
        } else {
          val.isActive = false;
        }
      });
    },
  },
};
</script>

<style scoped >
.active {
  color: #8ad0c5;
}
</style>
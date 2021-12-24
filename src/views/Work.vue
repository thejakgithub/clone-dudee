<template>
  <div class="bg-white">
    <img
      src="../assets/img/header-work.jpeg"
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
          Work
        </h1>
        <div class="bg-white lg:rounded-lg lg:mt-2 py-4 font-asap">
          <p class="text-[20px] px-4">
            Developers ของเราทำงานโดยมีจุดประสงค์หลักเพื่อผลิตเว็บไซต์ ซอฟต์แวร์
            หรือแอปพลิเคชัน โดยท่านสามารถ Customized ได้ทั้งภาพลักษณ์
            รูปแบบการทำงาน
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
            <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1">
              <div
                v-for="img in imgWeb"
                :key="img.id"
                class="relative cursor-pointer"
              >
                <div
                  class="
                    lg:hidden
                    bg-gradient-to-b
                    from-transparent
                    via-transparent
                    to-black/80
                    w-full
                    absolute
                    z-10
                    h-[160px]
                    rounded-2xl
                  "
                ></div>
                <div
                  class="
                    hover:bg-black/50
                    opacity-0
                    hover:opacity-100
                    h-[344px]
                    absolute
                    z-10
                    lg:flex
                    hidden
                    justify-center
                    items-center
                    text-white text-[28px]
                    rounded-2xl
                    w-[105%]
                    duration-500
                  "
                >
                  {{ img.name }}
                </div>
                <img
                  :src="getImageUrl(img.url)"
                  :alt="img.name"
                  class="w-full lg:h-[344px] h-[160px] object-cover rounded-2xl"
                />
                <div
                  class="
                    absolute
                    left-4
                    bottom-9
                    text-white
                    font-bold
                    z-20
                    lg:hidden
                  "
                >
                  <span>{{ img.name }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="type === 'MOBILE APP'">
            <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1">
              <div
                v-for="img in imgMobile"
                :key="img.id"
                class="relative cursor-pointer"
              >
                <div
                  class="
                    lg:hidden
                    bg-gradient-to-b
                    from-transparent
                    via-transparent
                    to-black/80
                    w-full
                    absolute
                    z-10
                    h-[160px]
                    rounded-2xl
                  "
                ></div>
                <div
                  class="
                    hover:bg-black/50
                    opacity-0
                    hover:opacity-100
                    h-[344px]
                    absolute
                    z-10
                    lg:flex
                    hidden
                    justify-center
                    items-center
                    text-white text-[28px]
                    rounded-2xl
                    w-[105%]
                    duration-500
                  "
                >
                  {{ img.name }}
                </div>
                <img
                  :src="getImageUrl(img.url)"
                  :alt="img.name"
                  class="w-full lg:h-[344px] h-[160px] object-cover rounded-2xl"
                />
                <div
                  class="
                    absolute
                    left-4
                    bottom-9
                    text-white
                    font-bold
                    z-20
                    lg:hidden
                  "
                >
                  <span>{{ img.name }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="type === 'INTERNAL SYSTEMS'">
            <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1">
              <div
                v-for="img in imgInternal"
                :key="img.id"
                class="relative cursor-pointer"
              >
                <div
                  class="
                    lg:hidden
                    bg-gradient-to-b
                    from-transparent
                    via-transparent
                    to-black/80
                    w-full
                    absolute
                    z-10
                    h-[160px]
                    rounded-2xl
                  "
                ></div>
                <div
                  class="
                    hover:bg-black/50
                    opacity-0
                    hover:opacity-100
                    h-[344px]
                    absolute
                    z-10
                    lg:flex
                    hidden
                    justify-center
                    items-center
                    text-white text-[28px]
                    rounded-2xl
                    w-[105%]
                    duration-500
                  "
                >
                  {{ img.name }}
                </div>
                <img
                  :src="getImageUrl(img.url)"
                  :alt="img.name"
                  class="w-full lg:h-[344px] h-[160px] object-cover rounded-2xl"
                />
                <div
                  class="
                    absolute
                    left-4
                    bottom-9
                    text-white
                    font-bold
                    z-20
                    lg:hidden
                  "
                >
                  <span>{{ img.name }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="type === 'IN HOUSE'">
            <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1">
              <div
                v-for="img in imgInHouse"
                :key="img.id"
                class="relative cursor-pointer"
              >
                <div
                  class="
                    lg:hidden
                    bg-gradient-to-b
                    from-transparent
                    via-transparent
                    to-black/80
                    w-full
                    absolute
                    z-10
                    h-[160px]
                    rounded-2xl
                  "
                ></div>
                <div
                  class="
                    hover:bg-black/50
                    opacity-0
                    hover:opacity-100
                    h-[344px]
                    absolute
                    z-10
                    lg:flex
                    hidden
                    justify-center
                    items-center
                    text-white text-[28px]
                    rounded-2xl
                    w-[105%]
                    duration-500
                  "
                >
                  {{ img.name }}
                </div>
                <img
                  :src="getImageUrl(img.url)"
                  :alt="img.name"
                  class="w-full lg:h-[344px] h-[160px] object-cover rounded-2xl"
                />
                <div
                  class="
                    absolute
                    left-4
                    bottom-9
                    text-white
                    font-bold
                    z-20
                    lg:hidden
                  "
                >
                  <span>{{ img.name }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="type === 'BRANDING'">
            <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 lg:mx-4 px-1">
              <div
                v-for="img in imgBranding"
                :key="img.id"
                class="relative cursor-pointer"
              >
                <div
                  class="
                    lg:hidden
                    bg-gradient-to-b
                    from-transparent
                    via-transparent
                    to-black/80
                    w-full
                    absolute
                    z-10
                    h-[160px]
                    rounded-2xl
                  "
                ></div>
                <div
                  class="
                    hover:bg-black/50
                    opacity-0
                    hover:opacity-100
                    h-[344px]
                    absolute
                    z-10
                    lg:flex
                    hidden
                    justify-center
                    items-center
                    text-white text-[28px]
                    rounded-2xl
                    w-[105%]
                    duration-500
                  "
                >
                  {{ img.name }}
                </div>
                <img
                  :src="getImageUrl(img.url)"
                  :alt="img.name"
                  class="w-full lg:h-[344px] h-[160px] object-cover rounded-2xl"
                />
                <div
                  class="
                    absolute
                    left-4
                    bottom-9
                    text-white
                    font-bold
                    z-20
                    lg:hidden
                  "
                >
                  <span>{{ img.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
          url: "pos.jpeg",
        },
        {
          id: 2,
          name: "BLANK STUDIO",
          url: "blank_studio.jpeg",
        },
        {
          id: 3,
          name: "DEPARTMENT OF CONSULAR AFFAIRS",
          url: "department.jpeg",
        },
        {
          id: 4,
          name: "CLICK GLASSES STORE",
          url: "glasses_store.jpeg",
        },
        {
          id: 5,
          name: "BEST INC. HATYAI BRANCH",
          url: "hatyai_branch.jpeg",
        },
        {
          id: 6,
          name: "IS AM ARE ACADEMY",
          url: "is_am_are.jpeg",
        },
        {
          id: 7,
          name: "WONDERWALL HOTEL",
          url: "wonderwall_hotel.jpeg",
        },
        {
          id: 8,
          name: "My Spa Booking",
          url: "my_spa_booking.jpeg",
        },
        {
          id: 9,
          name: "ROOJAI",
          url: "roojai.jpeg",
        },
        {
          id: 10,
          name: "OMISE",
          url: "omise.png",
        },
        {
          id: 11,
          name: "pommball Studio",
          url: "pommball_studio.jpeg",
        },
        {
          id: 12,
          name: "SO:ME",
          url: "some.png",
        },
        {
          id: 13,
          name: "BackPack",
          url: "backpack.jpeg",
        },
        {
          id: 14,
          name: "Sandy Pure & Clean",
          url: "sandy_pure.jpeg",
        },
      ],
      imgMobile: [
        {
          id: 1,
          name: "DONATE-MI",
          url: "donate_mi.jpeg",
        },
        {
          id: 2,
          name: "ANGRY TEACHER",
          url: "angry_teacher.jpeg",
        },
        {
          id: 3,
          name: "OK INFINITY",
          url: "ok_infinity.jpeg",
        },
      ],
      imgInternal: [
        {
          id: 1,
          name: "POS",
          url: "pos.jpeg",
        },
        {
          id: 2,
          name: "BEST INC. HATYAI BRANCH",
          url: "hatyai_branch.jpeg",
        },
      ],
      imgInHouse: [
        {
          id: 1,
          name: "POS",
          url: "pos.jpeg",
        },
      ],
      imgBranding: [
        {
          id: 1,
          name: "IS AM ARE ACADEMY",
          url: "is_am_are.jpeg",
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
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped >
.active {
  color: #8ad0c5;
}
</style>
<template>
  <nav :class="{ navbarWhite: navBarTheme, navbarDark: !navBarTheme }">
    <div class="mx-auto xl:max-w-7xl lg:max-w-5xl">
      <div class="lg:ml-16 lg:mr-12 ml-4 py-4">
        <div class="flex justify-between">
          <router-link to="/"
            ><img
              :class="{ 'brightness-0': navBarTheme }"
              src="../assets/img/dudee-indeed.svg"
              alt="dudee-indeed.svg"
              width="111"
              height="48"
          /></router-link>
          <div class="flex items-center">
            <Font-awesome-icon
              :icon="['fas', 'bars']"
              class="
                text-[2.5rem]
                mr-4
                md:hidden
                text-dudee-green
                cursor-pointer
              "
              @click.prevent="navClicked"
            />
          </div>
          <div class="md:flex md:items-center hidden">
            <router-link
              v-for="val in navLink"
              :key="val.id"
              :to="val.link"
              class="px-4 py-3 hover:bg-black hover:bg-opacity-5 hover:rounded"
              >{{ val.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      :class="{ nav_menu: navIsActive, nav_hidden: !navIsActive }"
      class="md:hidden"
    >
      <div
        class="
          flex flex-col
          justify-center
          items-center
          text-center text-dudee-green
        "
      >
        <router-link
          v-for="val in navLink"
          :key="val.id"
          :to="val.link"
          @click="linkClicked(val.id)"
          class="p-5 w-full my-2"
          :class="{ active: val.isActive }"
        >
          <span>{{ val.name }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars);

export default {
  name: "Header",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      navIsActive: false,
      navLink: [
        {
          id: 1,
          name: "Home",
          isActive: true,
          link: "/",
        },
        {
          id: 2,
          name: "About Us",
          isActive: false,
          link: "/aboutUs",
        },
        {
          id: 3,
          name: "Work",
          isActive: false,
          link: "/work",
        },
        {
          id: 4,
          name: "Blog",
          isActive: false,
          link: "/blog",
        },
        {
          id: 5,
          name: "Job & Intern",
          isActive: false,
          link: "/jobAndIntern",
        },
        {
          id: 6,
          name: "Contact",
          isActive: false,
          link: "/contact",
        },
      ],
    };
  },
  computed: {
    navBarTheme() {
      if (this.$route.path === "/work/portfolio") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    navClicked() {
      this.navIsActive = !this.navIsActive;
    },
    linkClicked(id) {
      this.navLink.forEach((val) => {
        if (id === val.id) {
          val.isActive = true;
          this.navIsActive = false;
        } else {
          val.isActive = false;
        }
      });
    },
  },
};
</script >

<style scoped>
.nav_menu {
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: scroll;
  z-index: 10;
}
.nav_hidden {
  display: none;
}

.active {
  background: #ffffffb3;
  color: #000;
}

.navbarDark {
  position: fixed;
  background-color: rgb(0 0 0 / 0.5);
  z-index: 50;
  width: 100%;
  top: 0;
  color: #fff;
}
.navbarWhite {
  position: fixed;
  background-color: rgb(255 255 255 / 0.5);
  color: #000;
  z-index: 50;
  width: 100%;
  top: 0;
}
</style>
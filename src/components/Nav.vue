<template>
  <nav class="bg-black/50 fixed w-full top-0 z-10">
    <div class="mx-auto xl:max-w-7xl lg:max-w-5xl">
      <div class="md:ml-16 md:mr-12 ml-4 py-4">
        <div class="flex justify-between">
          <router-link to="/"
            ><img
              class=""
              src="../assets/img/logo.png"
              alt="logo"
              width="111"
              height="48"
          /></router-link>
          <div class="flex items-center">
            <font-awesome-icon
              :icon="['fas', 'bars']"
              class="text-4xl mr-4 md:hidden text-dudee-green cursor-pointer"
            />
          </div>
          <div class="text-white md:flex md:items-center hidden">
            <router-link
              to="/"
              class="px-4 py-3 hover:bg-black hover:bg-opacity-5 hover:rounded"
              >Home</router-link
            >
            <router-link
              to="/aboutus"
              class="px-4 py-3 hover:bg-black hover:bg-opacity-5 hover:rounded"
              >About Us</router-link
            >
            <router-link
              to="/work"
              class="px-4 py-3 hover:bg-black hover:bg-opacity-5 hover:rounded"
              >Works</router-link
            >
            <router-link
              to="/blog"
              class="px-4 py-3 hover:bg-black hover:bg-opacity-5 hover:rounded"
              >Blog</router-link
            >
            <router-link
              to="/jobandintern"
              class="px-4 py-3 hover:bg-black hover:bg-opacity-5 hover:rounded"
              >Job & Intern</router-link
            >
            <router-link
              to="/contact"
              class="px-4 py-3 hover:bg-black hover:bg-opacity-5 hover:rounded"
              >Contact</router-link
            >
          </div>
        </div>
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
};
</script>

<style>
</style>
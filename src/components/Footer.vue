<template>
  <footer class="min-h-[22.2rem] bg-[#1b1b1b]">
    <div class="mx-auto xl:max-w-7xl lg:max-w-5xl">
      <div class="md:px-16 px-4 py-8">
        <div
          class="
            lg:grid
            grid-cols-[1.8fr_1.2fr_1fr_1.4fr]
            mb-5
            gap-x-6
            text-white
          "
        >
          <p class="text-2xl col-start-1">Contact Infomation</p>
          <p class="lg:inline-block hidden text-2xl col-start-4">
            Work With Us
          </p>
        </div>
        <div
          class="lg:grid grid-cols-[1.8fr_1.2fr_1fr_1.4fr] gap-x-6 text-white"
        >
          <div class="mb-5">
            <p>Address</p>
            <p class="text-dudee-green">
              187/24 Chang Klan Road, Muang Chiang Mai District, Chiang Mai,
              50100
            </p>
          </div>
          <div class="mb-5">
            <p>Email</p>
            <p class="text-dudee-green">contact@dudee-indeed.com</p>
          </div>
          <div class="mb-5">
            <p>Tel</p>
            <p class="text-dudee-green">062-508-7576</p>
          </div>
          <div>
            <p class="lg:hidden">Work With Us</p>
            <p class="text-dudee-green">Job</p>
          </div>
        </div>
        <div class="text-center text-dudee-green mt-12">
          <a
            href="https://web.facebook.com/dudeeindeed?_rdc=1&_rdr"
            target="_blank"
          >
            <Font-awesome-icon
              :icon="['fab', 'facebook-f']"
              class="text-2xl cursor-pointer mb-2"
          /></a>
          <p class="mb-2">
            <span class="mr-2">Privacy Policy</span>
            <span class="ml-2">Terms of service</span>
          </p>
          <p>© 2020 Dudee Indeed Corperation,. Ltd</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebookF);
export default {
  name: "Footer",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
</style>
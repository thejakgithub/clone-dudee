<template>
  <main class="lg:h-screen h-[37rem] bg-white">
    <div class="bg-header-job bg-cover lg:h-[490px] h-[220px]">
      <div class="bg-black/40 lg:h-[490px] h-[220px]">
        <main class="mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro">
          <div class="lg:px-12">
            <h1
              class="
                lg:text-7xl
                text-[2rem] text-white
                lg:pt-48
                pt-[7.8rem]
                mx-3
              "
            >
              Jobs
            </h1>
            <div class="bg-white h-96 lg:rounded-lg lg:mt-2 p-4 font-asap">
              <div class="bg-[#eeee] rounded-lg flex justify-between p-4">
                <div>
                  <p class="mb-4">Front - End Developer</p>
                  <p>Until : 31 January 2021</p>
                </div>
                <div class="text-right">
                  <div class="flex mb-4">
                    <Font-awesome-icon
                      :icon="['far', 'frown']"
                      class="cursor-pointer text-2xl mr-2 text-red-500"
                    />
                    <p>Close</p>
                  </div>
                  <p>2 ตำแหน่ง</p>
                </div>
              </div>
              <div class="bg-[#eeee] rounded-lg flex justify-between p-4 mt-6">
                <div>
                  <p class="mb-4">Back - End Developer</p>
                  <p>Until : 31 January 2021</p>
                </div>
                <div class="text-right">
                  <div class="flex mb-4">
                    <Font-awesome-icon
                      :icon="['far', 'frown']"
                      class="cursor-pointer text-2xl mr-2 text-red-500"
                    />
                    <p>Close</p>
                  </div>
                  <p>2 ตำแหน่ง</p>
                </div>
              </div>
              <div class="lg:mt-10 mt-6">
                <h1 class="font-maven-pro lg:text-7xl text-[2rem]">
                  Internship Program
                </h1>
                <p class="lg:text-[32px] text-base text-[#af0000] lg:mt-5">
                  Coming Soon...
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </main>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFrown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFrown);
export default {
  name: "JobAndIntern",
  components: { FontAwesomeIcon },
};
</script>

<style>
</style>
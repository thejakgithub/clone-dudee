<template>
  <header
    class="
      bg-header-home
      h-screen
      w-full
      bg-cover
      xl:bg-[center_top_-8.9rem]
      bg-no-repeat
    "
  >
    <div class="mx-auto xl:max-w-7xl lg:max-w-5xl pt-8">
      <div
        class="
          text-white
          flex
          h-[calc(100vh_-_2rem)]
          justify-center
          text-center
          md:text-left md:justify-start
          items-center
          font-maven-pro font-bold
          md:ml-16 md:mr-12
          mx-4
        "
      >
        <div class="flex-col font-bold">
          <h1 class="md:text-7xl md:mb-[5rem] mb-12 text-[2.5rem]">
            Dudee Indeed
          </h1>
          <p class="md:text-[2rem] text-xl md:mb-5 mb-0">
            Modern business management
          </p>
          <p class="md:text-[2rem] text-xl">
            consulting and technology solution.
          </p>
          <button
            @click="whatWeDoClicked"
            class="
              text-white
              border-none
              text-base
              font-bold
              bg-dudee-green
              px-[1.4rem]
              mt-14
              h-[52px]
              min-w-[92px]
              tracking-widest
              font-maven-pro
              rounded
              shadow-gray-900 shadow
              hover:bg-opacity-95
              cursor-pointer
              select-none
            "
          >
            WHAT WE DO
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    whatWeDoClicked() {
      window.scroll({
        top: window.innerHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
</style>
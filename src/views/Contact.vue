<template>
  <div class="lg:h-[80rem] h-[65rem] bg-white">
    <div class="bg-header-contact bg-cover lg:h-[490px] h-[220px]">
      <div class="bg-black/40 lg:h-[490px] h-[220px]">
        <main class="mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro">
          <div class="lg:px-12">
            <div>
              <h1
                class="
                  lg:text-7xl
                  text-[32px] text-white
                  lg:pt-[11.9rem]
                  pt-[7.8rem]
                  mx-3
                "
              >
                Contact Us
              </h1>
              <div class="bg-white h-96 lg:rounded-lg lg:mt-2 p-3">
                <div class="p-3">
                  <input
                    type="text"
                    placeholder="Name"
                    class="
                      px-3
                      py-4
                      rounded
                      w-full
                      text-base
                      border-[0.7px] border-solid border-gray-400
                      font-asap
                    "
                  />
                </div>
                <div class="p-3">
                  <input
                    type="text"
                    placeholder="E-mail"
                    class="
                      px-3
                      py-4
                      rounded
                      w-full
                      text-base
                      border-[0.7px] border-solid border-gray-400
                      font-asap
                    "
                  />
                </div>
                <div class="p-3">
                  <textarea
                    type="text"
                    rows="3"
                    placeholder="Description"
                    class="
                      p-3
                      rounded
                      w-full
                      text-base
                      border-[0.7px] border-solid border-gray-400
                      font-asap
                    "
                  />
                </div>
                <div class="text-right mr-3">
                  <button
                    class="
                      border-none
                      text-base
                      font-bold
                      bg-dudee-green
                      px-[1.4rem]
                      h-[52px]
                      min-w-[92px]
                      tracking-widest
                      font-maven-pro
                      rounded
                      text-[#333336]
                      shadow-gray-400 shadow
                      hover:bg-opacity-95
                      cursor-pointer
                      select-none
                    "
                  >
                    SUBMIT
                  </button>
                </div>
                <div class="ml-3">
                  <h1 class="lg:text-7xl text-[2rem] font-maven-pro pt-9">
                    Map
                  </h1>
                  <div>
                    <iframe
                      title="map"
                      class="
                        w-full
                        lg:h-[450px]
                        h-[350px]
                        lg:mt-10
                        mt-6
                        border-none
                      "
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJlxM1kEuZ4jARt9PsKYx9-l4&key=AIzaSyCMMJf358ttZYBx5kKgPpalue5_zGyTvEg"
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
  name: "Contact",
  components: {},
};
</script>

<style>
</style>
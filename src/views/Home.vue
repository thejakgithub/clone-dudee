<template>
  <div>
    <Header />
    <OurService />
    <Works />
    <OurClient />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import OurService from "../components/OurService.vue";
import Works from "../components/Works.vue";
import OurClient from "../components/OurClient.vue";

export default {
  name: "Home",
  components: {
    Header,
    OurService,
    Works,
    OurClient,
  },
};
</script>

<style>
</style>
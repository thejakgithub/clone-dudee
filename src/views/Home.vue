<template>
  <div>
    <Header />
    <OurService />
    <Work />
    <OurClient />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import OurService from "../components/OurService.vue";
import Work from "./Work.vue";
import OurClient from "../components/OurClient.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    OurService,
    Work,
    OurClient,
    Footer,
  },
};
</script>

<style>
</style>
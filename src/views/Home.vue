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
import Work from "../components/Work.vue";
import OurClient from "../components/OurClient.vue";

export default {
  name: "Home",
  components: {
    Header,
    OurService,
    Work,
    OurClient,
  },
};
</script>

<style>
</style>